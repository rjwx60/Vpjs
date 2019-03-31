// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import store from './store'

// 图片懒加载
import VueLazyLoad from 'vue-lazyload';

Vue.use(VueLazyLoad, {
  loading: require('@/assets/image/default.png')
})


Vue.config.productionTip = false

import '@/assets/stylus/index.styl';

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>'
})
