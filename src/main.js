// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import store from '@/store/index'
// 自定义样式，覆盖原有mint-ui样式
import './assets/css/mint-ui-style.css'
import MintUI from 'mint-ui'
import axios from 'axios'
// import store from '@/store/index'
// font awesome图标
import 'vue-awesome/icons'
import Icon from 'vue-awesome/components/Icon'
// 轮播图，滑动
import VueAwesomeSwiper from 'vue-awesome-swiper'

// require styles
import 'swiper/dist/css/swiper.css'

Vue.use(VueAwesomeSwiper, /* {  default global options } */)
Vue.use(MintUI)
Vue.component('icon', Icon)

Vue.config.productionTip = false

// ajax请求过期时间，最长五秒
axios.defaults.timeout = 5000
// 将axios 放入到Vue的原型链中，所有的组件都可以使用
Vue.prototype.axios = axios

/* eslint-disable no-new */
// 实例化vue对象
new Vue({
  el: '#app',
  router,
  MintUI,
  store,
  axios,
  template: '<App/>',
  components: { App }
})
