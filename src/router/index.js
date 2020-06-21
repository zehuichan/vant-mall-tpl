// require('login/index').default   // 同步的方式
// () => import('login/index')      // 异步的方式

import Vue from 'vue'
import Router from 'vue-router'

// basic components
import BasicLayout from '@/layouts/BasicLayout'
import BlankLayout from '@/layouts/BlankLayout'

// view components

// Home
const Home = () => import('@/views/home/home')
const Search = () => import('@/views/home/search')

// Product
const ProductList = () => import('@/views/product/list')
const ProductDetail = () => import('@/views/product/detail')

// Sort
const Sort = () => import('@/views/sort')

// Expert
const Expert = () => import('@/views/expert/expert')
const ExpertDetail = () => import('@/views/expert/detail')

// Cart
const Cart = () => import('@/views/cart')

// My
const My = () => import('@/views/my/my')
const Account = () => import('@/views/my/account')
const AccountNickname = () => import('@/views/my/account-nickname')
const AccountSecurity = () => import('@/views/my/account-security')
const OrderList = () => import('@/views/my/order-list')
const OrderDetail = () => import('@/views/my/order-detail')
const Integral = () => import('@/views/my/integral')
const Coupon = () => import('@/views/my/coupon')
const Address = () => import('@/views/my/address')
const Assistant = () => import('@/views/my/assistant')

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
          {
            path: '/my/assistant',
            name: 'assistant',
            component: Assistant,
            meta: {title: '劳动关系助手', noCache: true}
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
