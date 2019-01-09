import Vue from 'vue'
import Router from 'vue-router'

import home from '@/components/home'
import dashboard from '@/components/dashboard'
import store from '@/components/store'
import cart from '@/components/cart'
import settings from '@/components/settings'
import page404 from '@/components/page404'

Vue.use(Router)

export default new Router({
  // mode: 'history',
  routes: [
    /* {
      path: '/',
      redirect: 'home'
    }, */
    {
      path: '/',
      name: 'home',
      component: home
    },
    {
      path: '/dashboard',
      name: 'dashboard',
      component: dashboard
    },
    {
      path: '/store',
      name: 'store',
      component: store
    },
    {
      path: '/cart',
      name: 'cart',
      component: cart
    },
    {
      path: '/settings',
      name: 'settings',
      component: settings
    },
    {
      path: '*',
      name: 'page404',
      component: page404
    }
  ]
})
