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
    {
      path: '/06',
      name: 'vue组件核心3概念',
      component: () => import('./views/06')
    },
    {
      path: '/09',
      name: '双向绑定和单向数据流',
      component: () => import('./views/09/')
    },
    {
      path: '/10',
      name: '虚拟DOM和key属性',
      component: () => import('./views/10')
    },
    {
      path: '/11',
      name: '触发组件更新',
      component: () => import('./views/11')
    },
    {
      path: '/12',
      name: 'computer & watcher',
      component: () => import('./views/12')
    },
    {
      path: '/13',
      name: 'life circle & function component',
      component: () => import('./views/13')
    },
    {
      path: '/14',
      name: 'directive',
      component: () => import('./views/14')
    },
    {
      path: '/15',
      name: 'provide & inject',
      component: () => import('./views/15')
    },
    {
      path: '/16',
      name: '跨层级获取实例',
      component: () => import('./views/16')
    },
    {
      path: '/17',
      name: 'template & jsx',
      component: () => import('./views/17')
    },
    
  ]
})