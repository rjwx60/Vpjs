import Vue from 'vue'
import Router from 'vue-router'

// 据说是为了解决以移动端点击 300 ms 延迟
import fastclick from 'fastclick'

import Rank from '../components/rank/rank'
import Search from '../components/search/search'
import Recomend from '../components/recommend/recommend'
import Singer from '../components/singer/singer';

fastclick.attach(document.body);

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      redirect: '/recommend'
    },
    {
      path: '/recommend',
      component: Recomend
    },
    {
      path: '/rank',
      component: Rank
    },
    {
      path: '/singer',
      component: Singer
    },
    {
      path: '/search',
      component: Search
    }
  ]
})
