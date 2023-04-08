import Vue from 'vue'
import VueRouter from 'vue-router'
import HomeView from '../views/HomeView.vue'
import MainView from '../views/MainView.vue'
import MallView from '../views/MallView.vue'
import UserView from '../views/UserView.vue'
import PageOneView from '../views/PageOneView.vue'
import PageTwoView from '../views/PageTwoView.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    redirect: '/home',
    component: MainView,
    children: [
      { path: 'home', component: HomeView },
      { path: 'mall', component: MallView },
      { path: 'user', component: UserView },
      { path: 'page1', component: PageOneView },
      { path: 'page2', component: PageTwoView }
    ]
  }
]

const router = new VueRouter({
  routes
})

export default router
