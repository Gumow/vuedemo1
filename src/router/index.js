import Vue from 'vue'
import Router from 'vue-router'

import HelloWorld from '../components/HelloWorld.vue'


Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      component: resolve => require(['../pages/home'],resolve),
      meta: {
        title:'home'
      }
    },
    {
      path: 'discover',
      component: HelloWorld,
    }
  ]
})
