<template>
    <div class="homeView">
        <el-row>
            <el-col :span="8" style="padding-right: 10px;">
                <!-- 用户卡片 -->
                <el-card class="box-card">
                    <div class="user">
                        <img src="../assets/超人可达鸭.jpg" alt="">
                        <div class="userInfo">
                            <p class="name">Admin</p>
                            <p class="access">超级管理员</p>
                        </div>
                    </div>
                    <div class="loginInfo">
                        <p>上次登录时间：<span>2023-1-1</span></p>
                        <p>上次登录地点：<span>广东</span></p>
                    </div>
                </el-card>
                <!-- 商品购买表格 -->
                <el-card class="table">
                  <el-table :data="tableData" style="width: 100%;height: 500px">
                    <el-table-column v-for="(value, key) in labelData" :key="key"
                    :prop="key" :label="value" width="120" ></el-table-column>
                  </el-table>
                </el-card>
            </el-col>
            <el-col :span="16" style="padding-left: 10px;">
                <!-- 订单列表 -->
                <div class="orderList">
                    <el-card class="order" v-for="item in countData" :key="item.name"
                    :body-style="{ display: 'flex' ,padding: '0'}">
                        <i class="icon" :class="`el-icon-${ item.icon }`" :style="{ backgroundColor: item.color }"></i>
                        <div class="textBox">
                            <p class="text1">￥{{ item.value }}</p>
                            <p class="text2">{{ item.name }}</p>
                        </div>
                    </el-card>
                </div>
                <!-- 折线图 -->
                <el-card style="height: 280px">
                  <div class="lineChart">
                    <e-charts :option="option"/>
                  </div>
                </el-card>
                <div class="box-1">
                  <!-- 柱状图 -->
                  <el-card style="width: 48%; height: 260px">
                    <div class="barChart">
                      <e-charts :option="option2"/>
                    </div>
                  </el-card>
                  <!-- 饼状图 -->
                  <el-card style="width: 48%; height: 260px">
                    <div class="pieChart">
                      <e-charts :option="option3"/>
                    </div>
                  </el-card>
                </div>
            </el-col>
        </el-row>
    </div>
</template>
<script>
import { getData } from '@/api'

export default {
  data () {
    return {
      tableData: [],
      orderData: {},
      labelData: {
        name: '商品',
        todayBuy: '今日购买',
        monthBuy: '本月购买',
        totalBuy: '总购买'
      },
      countData: [
        {
          name: '今日支付订单',
          value: 1234,
          icon: 'success',
          color: '#2ec7c9'
        },
        {
          name: '今日收藏订单',
          value: 210,
          icon: 'star-on',
          color: '#FFBC7D'
        },
        {
          name: '今日未支付订单',
          value: 12345,
          icon: 's-goods',
          color: '#50ADF3'
        },
        {
          name: '本月支付订单',
          value: 1238,
          icon: 'success',
          color: '#2ec7c9'
        },
        {
          name: '本月收藏订单',
          value: 174,
          icon: 'star-on',
          color: '#FFBC7D'
        },
        {
          name: '本月未支付订单',
          value: 184,
          icon: 's-goods',
          color: '#50ADF3'
        }
      ]
    }
  },
  mounted () {
    getData().then((data) => {
      this.tableData = data.data.data.tableData
      this.orderData = data.data.data.orderData
      this.userData = data.data.data.userData
      this.videoData = data.data.data.videoData
    })
  },
  methods: {
  },
  computed:
    {
      option () {
        return {
          xAxis:
            {
              type: 'category',
              data: this.orderData.date
            },
          yAxis:
            {
              type: 'value'
            },
          series: [
            {
              data: this.orderData.data.map(item => {
                return item.苹果
              }),
              type: 'line'
            },
            {
              data: this.orderData.data.map(item => {
                return item.vivo
              }),
              type: 'line'
            },
            {
              data: this.orderData.data.map(item => {
                return item.oppo
              }),
              type: 'line'
            },
            {
              data: this.orderData.data.map(item => {
                return item.魅族
              }),
              type: 'line'
            },
            {
              data: this.orderData.data.map(item => {
                return item.三星
              }),
              type: 'line'
            },
            {
              data: this.orderData.data.map(item => {
                return item.小米
              }),
              type: 'line'
            }
          ]
        }
      },
      option2 () {
        return {
          xAxis:
            {
              data: this.userData.map(item => {
                return item.date
              })
            },
          yAxis:
            {
              type: 'value'
            },
          series: [
            {
              data: this.userData.map(item => {
                return item.new
              }),
              type: 'bar'
            },
            {
              data: this.userData.map(item => {
                return item.active
              }),
              type: 'bar'
            }
          ]
        }
      },
      option3 () {
        return {
          series: [
            {
              type: 'pie',
              data: this.videoData
            }
          ]
        }
      }
    }
}
</script>
<style scoped>
/* 用户卡片样式 */
.user {
    display: flex;
    align-items: center;
    border-bottom: 1px solid #999;
    padding-bottom: 20px;
}

.userInfo {
    margin-left: 30px;
}

.userInfo p {
    margin: 0;
}

.name {
    font-size: 32px;
}

.access {
    color: #999;
}

img {
    width: 150px;
    height: 150px;
    border-radius: 50%;
}

.loginInfo p {
    color: #999;
}

.loginInfo p span {
    color: #000;
    margin-left: 50px;
}

/* 购买表格样式 */
.table {
    height: 100%;
    margin-top: 20px;
    /* margin-right: 20px; */
}
/* 订单列表样式 */
.orderList {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-around;
}
.order {
    width: 32%;
    margin-bottom: 20px;
}
.icon {
    width: 80px;
    height: 80px;
    font-size: 30px;
    color: #fff;
    text-align: center;
    line-height: 80px;
}
.textBox{
  height: 80px;
}
.text1{
  font-size: 30px;
  margin:10px 0 0 10px;
}
.text2{
  font-size: 14px;
  color: #999;
  margin-top: 0;
  margin-left: 10px;
}
.lineChart{
  height: 280px;
  width: 100%;
}
/* 柱状图和饼状图样式 */
.box-1{
  display: flex;
  justify-content: space-between;
  margin-top: 20px;
}
/* 柱状图 */
.barChart{
  width: 500px;
  height: 260px;
}
/* 饼状图 */
.pieChart{
  width: 500px;
  height: 250px;
}
</style>
