import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import Home from '@/components/Home'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home
    },
    {
      path: '/hello',
      name: 'HelloWorld',
      // meta: {
      //   title: '四十九'
      // },
      component: HelloWorld,
      // beforeEnter: (to, from, next) => {
      //   document.title = to.meta.title
      //   next()
      // }
    }
  ]
})
