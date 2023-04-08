<template>
  <div class='commonAside'>
    <el-menu default-active='1-4-1' class='el-menu-vertical-demo'
    @open='handleOpen' @close='handleClose' :collapse='isCollapse'
    active-text-color='#fff' background-color='#545D66' text-color='#21B8C9'>
    <h4>通用后台管理系统</h4>
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
export default {
  data () {
    return {
      isCollapse: false,
      menuData: [
        {
          path: '/',
          name: 'home',
          label: '首页',
          icon: 's-home',
          url: 'Home/Home'
        },
        {
          path: '/mall',
          name: 'mall',
          label: '商品管理',
          icon: 's-goods',
          url: 'MallManage/MallManage'
        },
        {
          path: '/user',
          name: 'user',
          label: '用户管理',
          icon: 'user-solid',
          url: 'UserManage/UserManage'
        },
        {
          label: '其他',
          icon: 'location',
          children: [
            {
              path: '/page1',
              name: 'page1',
              label: '页面1',
              icon: 'setting',
              url: 'Other/PageOne'
            },
            {
              path: '/page2',
              name: 'page2',
              label: '页面2',
              icon: 'setting',
              url: 'Other/PageTwo'
            }
          ]
        }
      ]
    }
  },
  methods: {
    handleOpen (key, keyPath) {
      console.log(key, keyPath)
    },
    handleClose (key, keyPath) {
      console.log(key, keyPath)
    },
    clickMenu (value) {
      if (this.$route.path !== value.path && !(this.$route.path === '/home' && value.path === '/')) {
        this.$router.push(value.path)
      }
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
    }
  }
}
</script>
<style scoped>
.el-menu-vertical-demo:not(.el-menu--collapse) {
    width: 100%;
    min-height: 400px;
    border: none;
    height: 100vh;
  }
  h4{
    text-align: center;
    color: white;
  }
</style>
