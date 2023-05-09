<template>
    <div class="userView">
      <div class="top">
        <!-- 新增按钮 -->
        <el-button type="primary" @click="dialogOpen (0)">+新增</el-button>
        <!-- 对话框 -->
        <el-dialog title="提示" :visible.sync="dialogVisible" width="50%" :before-close="handleClose">
          <!-- 新增功能的表单 -->
          <el-form ref="form" :model="form" label-width="80px" :inline="true" :rules="rules">
            <el-form-item label="姓名" prop="name">
              <el-input v-model="form.name" placeholder="请输入姓名"></el-input>
            </el-form-item>
            <el-form-item label="年龄" prop="age">
              <el-input v-model="form.age" placeholder="请输入年龄"></el-input>
            </el-form-item>
            <el-form-item label="性别" prop="sex">
              <el-select v-model="form.sex" placeholder="请选择">
                <el-option label="男" :value="1"></el-option>
                <el-option label="女" :value="0"></el-option>
              </el-select>
            </el-form-item>
            <el-form-item label="出生日期" prop="birth">
              <el-date-picker v-model="form.birth" type="date"
              placeholder="选择日期" value-format="yyyy-MM-dd">
              </el-date-picker>
            </el-form-item>
            <el-form-item label="地址" prop="addr">
              <el-input v-model="form.addr" placeholder="请输入地址"></el-input>
            </el-form-item>
          </el-form>
          <span slot="footer" class="dialog-footer">
            <el-button @click="handleClose">取 消</el-button>
            <el-button type="primary" @click="submitForm">确 定</el-button>
          </span>
        </el-dialog>
        <!-- 搜索框 -->
          <el-form :inline="true" :model="userForm" style="margin-top: 20px;">
            <el-form-item>
              <el-input v-model="userForm.name" placeholder="请输入用户姓名"></el-input>
            </el-form-item>
            <el-form-item>
              <el-button type="primary" @click="searchSubmit">搜索</el-button>
            </el-form-item>
          </el-form>
      </div>
      <!-- 表格 -->
      <el-table :data="getUserList" style="width: 100%" stripe>
        <el-table-column prop="name" label="姓名" width="200"></el-table-column>
        <el-table-column prop="sex" label="性别" width="200">
          <template slot-scope="scope">
            <span style="margin-left: 10px">{{ scope.row.sex === 1? '男' : '女' }}</span>
          </template>
        </el-table-column>
        <el-table-column prop="age" label="年龄" width="200"></el-table-column>
        <el-table-column prop="birth" label="出生日期" width="300"></el-table-column>
        <el-table-column prop="addr" label="地址" width="600"></el-table-column>
        <el-table-column label="操作" width="auto">
          <template slot-scope="scope">
            <el-button size="mini" @click="dialogOpen (1, scope.row)">编辑</el-button>
            <el-button size="mini" type="danger" @click="handleDelete (scope.row)">删除</el-button>
          </template>
        </el-table-column>
      </el-table>
      <!-- 分页 -->
      <div class="pagination">
        <el-pagination
          background
          layout="prev, pager, next"
          :total="total"
          @current-change="handleCurrentChange">
        </el-pagination>
      </div>
    </div>
</template>
<script>
// import CommonTag from '../components/CommonTag.vue'
import { getUser, addUser, editUser, delUser } from '../api'

export default {
  data () {
    return {
      getUserList: [],
      dialogVisible: false,
      modalType: 0, // 0表示新增表单，1表示编辑表单
      total: 0,
      pageData: {
        page: 1,
        limit: 10
      },
      form: {
        name: '',
        age: '',
        sex: '',
        birth: '',
        addr: ''
      },
      userForm: {
        name: ''
      },
      rules: {
        name: [
          { required: true, message: '请输入姓名' }
        ],
        age: [
          { required: true, message: '请输入年龄' }
        ],
        sex: [
          { required: true, message: '请选择性别' }
        ],
        birth: [
          { required: true, message: '请输入出生日期' }
        ],
        addr: [
          { required: true, message: '请输入地址' }
        ]
      }
    }
  },
  methods: {
    // 打开对话框 num: 0表示新增表单，1表示编辑表单
    // value：通过 Scoped slot 可以获取到 row, column, $index 和 store（table 内部的状态管理）的数据
    dialogOpen (num, value) {
      this.dialogVisible = true
      this.modalType = num
      if (num === 1) {
        this.form = value
      }
    },
    // 关闭表单
    handleClose () {
      // 关闭弹窗
      this.dialogVisible = false
      // 重置表单
      this.$refs.form.resetFields()
    },
    // 提交表单
    submitForm () {
      this.$refs.form.validate((valid) => {
        if (valid) {
          if (this.modalType === 0) {
            // 新增用户表单
            addUser(this.form).then(() => {
              // 获取列表用来刷新列表
              this.getUserData()
            })
          } else {
            // 编辑用户表单
            editUser(this.form).then(() => {
              // 获取列表用来刷新列表
              this.getUserData()
            })
          }
          // 关闭表单
          this.handleClose()
        }
      })
    },
    // 获取用户数据
    getUserData () {
      // data { data }?
      getUser({ params: { ...this.userForm, ...this.pageData } }).then(({ data }) => {
        this.getUserList = data.list
        this.total = data.count || 0
      })
    },
    // 删除
    handleDelete (row) {
      this.$confirm('此操作将永久删除该文件, 是否继续?', '提示', {
        confirmButtonText: '确定',
        cancelButtonText: '取消',
        type: 'warning'
      }).then(() => {
        delUser({ id: row.id }).then(() => {
          this.getUserData()
          this.$message({
            type: 'success',
            message: '删除成功!'
          })
        })
      }).catch(() => {
        this.$message({
          type: 'info',
          message: '已取消删除'
        })
      })
    },
    // 当前分页改变时
    handleCurrentChange (val) {
      this.pageData.page = val
      this.getUserData()
    },
    // 搜索
    searchSubmit () {
      this.getUserData()
    }
  },
  // 生命周期钩子
  mounted () {
    this.getUserData()
  }
}
</script>
<style scoped>
.userView {
  height: 90%;
}
.top {
  display: flex;
  justify-content: space-between;
  align-items: center;
}
.pagination {
  display: flex;
  justify-content: center;
  margin-top: 10px;
}
</style>
