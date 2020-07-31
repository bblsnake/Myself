import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
// import home from '@/components/Home'
// import about from '@/components/About'
// import user from '@/components/User'

// const home = () => import('@/components/Home') // 路由懒加载
const about = () => import('@/components/About') // 路由懒加载
const user = () => import('@/components/User') // 路由懒加载
const HomeNews = () => import('@/components/HomeNews') // 路由懒加载
const HomeMessage = () => import('@/components/HomeMessage') // 路由懒加载
const Query = () => import('@/components/Query')

Vue.use(Router)

export default new Router({
  mode: 'history', //把默认的hash路由切换为history模式
  linkActiveClass: 'active', //把routerLink处于active状态时的默认router-link-active类名改成active
  routes: [
    {
      path: '',
      redirect: '/home' // 重定向  默认展示home页
    },
    {
      path: '/',
      name: 'HelloWorld',
      component: HelloWorld
    },
    {
      path: '/home',
      name: 'home',
      // component: home
      component: () => import('@/components/Home'), // 路由懒加载
      children: [  // 路由嵌套
        {
          path: '',
          redirect: 'message'  // 嵌套路由重定向
        },
        {
          path: 'news',
          component: HomeNews
        },
        {
          path: 'message',
          component: HomeMessage
        }
      ]
    },
    {
      path: '/about',
      name: 'about',
      component: about
    },
    {
      path: '/user/:id', // 动态路由（传参）
      name: 'user',
      component: user
    },
    {
      path: '/query',
      component: Query,
      // meta: {
      //   title: '参数'
      // }
    }
  ]
})
// Router.beforeEach((to, from, next) => {
//   // to and from are both route objects. must call `next`.
//   window.document.title = to.meta.title
//   next()
// })