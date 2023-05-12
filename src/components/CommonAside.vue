<template>
  <div class='commonAside'>
    <el-menu default-active='1-4-1' class='el-menu-vertical-demo'
    @open='handleOpen' @close='handleClose' :collapse='isCollapse'
    active-text-color='#fff' background-color='#545D66' text-color='#21B8C9'>
    <h3>{{ isCollapse?'后台':'通用后台管理系统' }}</h3>
    <el-menu-item v-for="item in noChildren" @click="clickMenu (item)"
    :key="item.name" :index='item.name'>
      <!-- 要绑定class才能使用模板字符串！ -->
        <i :class="`el-icon-${item.icon}`"></i>
        <span slot='title'>{{ item.label }}</span>
    </el-menu-item>
    <el-submenu v-for="item in hasChildren" :key="item.label" :index='item.label'>
        <template slot='title'>
        <i :class='`el-icon-${item.icon}`'></i>
        <span slot='title'>{{ item.label }}</span>
        </template>
        <el-menu-item-group v-for="submenuItem in item.children"
        :key="submenuItem.name" :index='submenuItem.name'>
        <el-menu-item :index='submenuItem.name' @click="clickMenu (submenuItem)">
          {{ submenuItem.label }}
        </el-menu-item>
        </el-menu-item-group>
    </el-submenu>
    </el-menu>
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
    handleOpen (key, keyPath) {
      console.log(key, keyPath)
    },
    handleClose (key, keyPath) {
      console.log(key, keyPath)
    },
    // 点击左侧菜单的方法
    clickMenu (value) {
      if (this.$route.path !== value.path && !(this.$route.path === '/home' && value.path === '/')) {
        this.$router.push(value.path)
      }
      // 点击时添加面包屑的数据
      this.$store.commit('selectMenu', value)
    }
  },
  computed: {
    // 有子菜单
    hasChildren () {
      return this.menuData.filter(item => item.children)
    },
    // 没有子菜单
    noChildren () {
      return this.menuData.filter(item => !item.children)
    },
    isCollapse () {
      return this.$store.state.tab.isCollapse
    },
    menuData () {
      // 刷新之后this.$store.state.tab.menuData被清空了 不直接用Cookie ？ 还要 this.$store.state.tab.menuData ？
      return JSON.parse(Cookie.get('menuData')) || this.$store.state.tab.menuData
    }
  }
}
</script>
<style scoped>
.el-menu-vertical-demo:not(.el-menu--collapse) {
    width: 100%;
    min-height: 100vh;
  }
  .el-menu{
    min-height: 100vh;
    border: none;
  }
  h3{
    text-align: center;
    color: white;
  }
</style>
