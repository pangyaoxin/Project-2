import Vue from 'vue'
import App from './App.vue'
import router from './router'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
import store from './store'
import './api/mock'
import 'echarts'
import ECharts from 'vue-echarts'

Vue.config.productionTip = false
Vue.use(ElementUI)
Vue.component('ECharts', ECharts)

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
