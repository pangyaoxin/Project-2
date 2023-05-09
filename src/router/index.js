import Vue from 'vue'
import VueRouter from 'vue-router'
import HomeView from '../views/HomeView.vue'
import MainView from '../views/MainView.vue'
import MallView from '../views/MallView.vue'
import UserView from '../views/UserView.vue'
import PageOneView from '../views/PageOneView.vue'
import PageTwoView from '../views/PageTwoView.vue'
import '@/api/mockServeData/home'

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
  }
]

const router = new VueRouter({
  routes
})

export default router
