// require('login/index').default   // 同步的方式
// () => import('login/index')      // 异步的方式

import Vue from 'vue'
import Router from 'vue-router'

// basic components
import BasicLayout from '@/layouts/BasicLayout'
import BlankLayout from '@/layouts/BlankLayout'

// view components

// Home
import Home from '@/views/home/home'
import Search from '@/views/home/search'

// Product
import ProductList from '@/views/product/list'
import ProductDetail from '@/views/product/detail'

// Sort
import Sort from '@/views/sort'

// Expert
import Expert from '@/views/expert/expert'
import ExpertDetail from '@/views/expert/detail'

// Cart
import Cart from '@/views/cart'

// My
import My from '@/views/my/my'
import Account from '@/views/my/account'
import AccountNickname from '@/views/my/account-nickname'
import AccountSecurity from '@/views/my/account-security'
import OrderList from '@/views/my/order-list'
import OrderDetail from '@/views/my/order-detail'
import Integral from '@/views/my/integral'
import Coupon from '@/views/my/coupon'
import Address from '@/views/my/address'

const RouteView = {
  name: 'RouteView',
  render: (h) => h('router-view')
}

export const routes = [
  {
    path: '/',
    component: RouteView,
    redirect: '/home/index',
    children: [

      // home
      {
        path: '/home',
        component: BasicLayout,
        children: [
          {
            path: '/home/index',
            name: 'home',
            component: Home,
            meta: {title: 'vant-mall-tpl', noCache: true}
          },
        ]
      },
      {
        path: '/home',
        component: BlankLayout,
        children: [
          {
            path: '/home/search',
            name: 'search',
            component: Search,
            meta: {title: 'vant-mall-tpl', noCache: true}
          },
        ]
      },

      // product
      {
        path: '/product',
        component: BlankLayout,
        children: [
          {
            path: '/product/list',
            name: 'product-list',
            component: ProductList,
            meta: {title: 'vant-mall-tpl', noCache: true}
          },
          {
            path: '/product/detail',
            name: 'product-detail',
            component: ProductDetail,
            meta: {title: 'vant-mall-tpl', noCache: true}
          },
        ]
      },


      // sort
      {
        path: '/sort',
        component: BasicLayout,
        children: [
          {
            path: '/sort/index',
            name: 'sort',
            component: Sort,
            meta: {title: '分类', noCache: true}
          },
        ]
      },

      // expert
      {
        path: '/expert',
        component: BasicLayout,
        children: [
          {
            path: '/expert/index',
            name: 'expert-expert',
            component: Expert,
            meta: {title: '名家', noCache: true}
          },
        ]
      },
      {
        path: '/expert',
        component: BlankLayout,
        children: [
          {
            path: '/expert/detail',
            name: 'expert-detail',
            component: ExpertDetail,
            meta: {title: '名家', noCache: true}
          },
        ]
      },

      // cart
      {
        path: '/cart',
        component: BasicLayout,
        children: [
          {
            path: '/cart/index',
            name: 'cart',
            component: Cart,
            meta: {title: '购物车', noCache: true}
          },
        ]
      },

      // my
      {
        path: '/my',
        component: BasicLayout,
        children: [
          {
            path: '/my/index',
            name: 'my',
            component: My,
            meta: {title: 'vant-mall-tpl', noCache: true}
          },
        ]
      },
      {
        path: '/my',
        component: BlankLayout,
        children: [
          {
            path: '/my/account',
            name: 'account',
            component: Account,
            meta: {title: '我的资料', noCache: true}
          },
          {
            path: '/my/account-nickname',
            name: 'account-nickname',
            component: AccountNickname,
            meta: {title: '更改昵称', noCache: true}
          },
          {
            path: '/my/account-security',
            name: 'account-security',
            component: AccountSecurity,
            meta: {title: '支付密码', noCache: true}
          },
          {
            path: '/my/order-list',
            name: 'order-list',
            component: OrderList,
            meta: {title: '我的订单', noCache: true}
          },
          {
            path: '/my/order-detail',
            name: 'order-detail',
            component: OrderDetail,
            meta: {title: '订单详情', noCache: true}
          },
          {
            path: '/my/integral',
            name: 'integral',
            component: Integral,
            meta: {title: '我的积分', noCache: true}
          },
          {
            path: '/my/coupon',
            name: 'coupon',
            component: Coupon,
            meta: {title: '卡券管理', noCache: true}
          },
          {
            path: '/my/address',
            name: 'address',
            component: Address,
            meta: {title: '地址管理', noCache: true}
          },
        ]
      },
    ]
  },

  {path: '/403', component: () => import('@/views/errorPage/403')},
  {path: '/404', component: () => import('@/views/errorPage/404')},
  {path: '/500', component: () => import('@/views/errorPage/500')},
  {path: '*', redirect: '/404'}
]

Vue.use(Router)

const createRouter = () => new Router({
  // mode: 'history', // require service support
  scrollBehavior: () => ({y: 0}),
  routes: routes
})

const router = createRouter()

// Detail see: https://github.com/vuejs/vue-router/issues/1234#issuecomment-357941465
export function resetRouter() {
  const newRouter = createRouter()
  router.matcher = newRouter.matcher // reset router
}

export default router
