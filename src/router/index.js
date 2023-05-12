import Vue from 'vue'
import VueRouter from 'vue-router'
import HomeView from '../views/HomeView.vue'
import MainView from '../views/MainView.vue'
import MallView from '../views/MallView.vue'
import UserView from '../views/UserView.vue'
import PageOneView from '../views/PageOneView.vue'
import PageTwoView from '../views/PageTwoView.vue'
import LoginView from '../views/LoginView.vue'
import '@/api/mockServeData/home'
import Cookie from 'js-cookie'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    redirect: '/home',
    component: MainView,
    children: [
      { path: 'home', name: 'home', component: HomeView },
      { path: 'mall', name: 'mall', component: MallView },
      { path: 'user', name: 'user', component: UserView },
      { path: 'page1', name: 'page1', component: PageOneView },
      { path: 'page2', name: 'page2', component: PageTwoView }
    ]
  },
  {
    path: '/login',
    name: 'login',
    component: LoginView
  }
]

const router = new VueRouter({
  routes
})

// 定义路由导航守卫
router.beforeEach((to, from, next) => {
  // 获取token的值
  const token = Cookie.get('token')
  // 判断有没有 token ；有就是已登录，否则未登录
  if (!token && to.name !== 'login') {
    next({ name: 'login' })
  } else if (token && to.name === 'login') {
    next({ name: 'home' })
  } next()
})

export default router
