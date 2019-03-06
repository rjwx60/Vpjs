// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
// 旧 ajax 请求使用
// import VueResource from 'vue-resource'
// 新 ajax 请求使用
import axios from 'axios'

// import '@/assets/scss/index.scss'
import './assets/stylus/index.styl'

// 旧用
// Vue.use(VueResource)
// 新用
Vue.prototype.$axios = axios
Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
