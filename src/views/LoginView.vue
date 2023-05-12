<template>
  <div class="loginView">
    <el-card class="box-card">
      <h3>系统登录</h3>
        <el-form ref="loginForm" :model="loginForm" status-icon label-width="100px"
        :rules="rules" class="demo-ruleForm" size="mini" >
          <el-form-item label="用户名" prop="username">
            <el-input v-model="loginForm.username" style="width: 200px;"></el-input>
          </el-form-item>
          <el-form-item label="密码" prop="password">
            <el-input type="password" v-model="loginForm.password" style="width: 200px;"></el-input>
          </el-form-item>
          <el-form-item>
            <el-button type="primary" @click="loginSubmit ()" style="margin-left: 55px;">
              登录
            </el-button>
          </el-form-item>
        </el-form>
    </el-card>
  </div>
</template>
<script>
import Cookie from 'js-cookie'
import { getMenu } from '../api'

export default {
  data () {
    return {
      loginForm: {
        username: '',
        password: ''
      },
      rules: {
        username: [
          { required: true, message: '用户名错误！', trigger: 'blur' }
        ],
        password: [
          { required: true, message: '密码错误！', trigger: 'blur' }
        ]
      }
    }
  },
  methods: {
    // 登录
    loginSubmit () {
      this.$refs.loginForm.validate((valid) => {
        if (valid) {
          getMenu(this.loginForm).then(({ data }) => {
            if (data.code === 20000) {
              Cookie.set('token', data.data.token)
              this.$router.push('/home')
              this.$message({
                message: data.data.message,
                type: 'success'
              })
              // 获取左侧菜单
              this.$store.commit('handleMenu', data)
            } else {
              this.$message.error(data.data.message)
            }
          })
        }
      })
    }
  }
}
</script>
<style scoped>
.loginView {
  width: 400px;
  margin: auto;
  margin-top: 150px;
}
h3 {
  text-align: center;
}
</style>
