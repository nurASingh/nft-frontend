import Vue from 'vue'
import Router from 'vue-router'
import home from '@/components/home'
import mynft from '@/components/mynft'
import mint from '@/components/mint'
import details from '@/components/details'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'home',
      component: home
    },
    {
      path: '/home',
      name: 'home',
      component: home
    },
    {
      path: '/mynft',
      name: 'mynft',
      component: mynft
    },
    {
      path: '/mint',
      name: 'mint',
      component: mint
    },
    {
      path: '/details/:Pid',
      name: 'details',
      component: details
    }
  ]
})
