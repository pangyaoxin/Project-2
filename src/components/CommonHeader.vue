<template>
    <div class="commonHeader">
        <div class="left">
            <el-button icon="el-icon-menu" size="mini" @click="handleMenu"></el-button>
            <span class="text">
                <el-breadcrumb separator="/" v-for="item in tabsList" :key="item.name">
                    <el-breadcrumb-item :to="{ path: item.path }">{{ item.label }}</el-breadcrumb-item>
                </el-breadcrumb>
            </span>
        </div>
        <div class="right">
            <el-dropdown @command="handleCommand">
                <span class="el-dropdown-link">
                    <img src="../assets/超人可达鸭.jpg" alt="">
                </span>
                <el-dropdown-menu slot="dropdown">
                    <el-dropdown-item command="a">个人中心</el-dropdown-item>
                    <el-dropdown-item command="logOut">退出</el-dropdown-item>
                </el-dropdown-menu>
            </el-dropdown>
        </div>
    </div>
</template>
<script>
import Cookie from 'js-cookie'

export default {
  data () {
    return {
    }
  },
  methods: {
    handleMenu () {
      this.$store.commit('menuCollapse')
    },
    handleCommand (command) {
      if (command === 'logOut') {
        Cookie.remove('token')
        this.$router.push('/login')
      }
    }
  },
  computed: {
    tabsList () {
      return this.$store.state.tab.tabsList
    }
  }
}
</script>
<style scoped>
.commonHeader {
    height: 60px;
    background-color: #333333;
    display: flex;
    justify-content: space-between;
    align-items: center;
}
.left {
    padding-left: 20px;
    display: flex;
}
.text {
    display: flex;
    align-items: center;
    margin-left: 10px;
}
.el-breadcrumb__item:last-child /deep/ .el-breadcrumb__inner{
  color: #999;
}
.right {
    padding-right: 20px;
}
.el-dropdown-link {
    cursor: pointer;
    color: white;
    margin-left: 20px;
}

.el-icon-arrow-down {
    font-size: 12px;
}

img {
    width: 40px;
    height: 40px;
    border-radius: 50%;
}</style>
