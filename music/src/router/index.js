import Vue from 'vue'
import Router from 'vue-router'

import Music from '@/components/Music'

// 据说是为了解决以移动端点击 300 ms 延迟
import fastclick from 'fastclick';

fastclick.attach(document.body);

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Music',
      component: Music
    }
  ]
})
