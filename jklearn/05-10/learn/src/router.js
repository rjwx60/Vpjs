import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: '/',
      redirect: '/05'
    },
    {
      path: '/05',
      name: '第一个',
      component: () => import('./views/05')
    },
  ]
})