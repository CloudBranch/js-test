import Vue from 'vue'
import Router from 'vue-router'
import store from '@/components/store'
import cart from '@/components/cart'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'store',
      component: store
    },
    {
      path: '/cart',
      name: 'cart',
      component: cart
    }
  ]
})
