import Vue from 'vue'
import Router from 'vue-router'
import eleme from '@/components/eleme'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'eleme',
      component: eleme
    }
  ]
})
