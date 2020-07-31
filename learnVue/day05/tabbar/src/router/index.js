import Vue from 'vue'
import Router from 'vue-router'

const Home = () => import('@/components/page/home/Home')
const Fenlei = () => import('@/components/page/Fenlei/Fenlei')
const Cart = () => import('@/components/page/cart/cart')
const Myself = () => import('@/components/page/Myself/Myself')

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '',
      redirect: '/home'
    },
    {
      path: '/home',
      component: Home,
    },
    {
      path: '/fenlei',
      component: Fenlei,
    },
    {
      path: '/cart',
      component: Cart,
    },
    {
      path: '/myself',
      component: Myself,
    }
  ]
})
