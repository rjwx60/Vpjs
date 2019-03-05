import Vue from 'vue'
import Router from 'vue-router'

// import eleme from '@/components/eleme'
import goods from '@/components/goods/goods'
import rating from '@/components/rating/rating'
import seller from '@/components/seller/seller'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/goods',
      name: 'goods',
      component: goods
    },
    {
      path: '/seller',
      name: 'seller',
      component: seller
    },
    {
      path: '/rating',
      name: 'rating',
      component: rating
    }
  ],
  linkActiveClass: 'active'
})
