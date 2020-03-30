import Vue from 'vue'
import Router from 'vue-router'

// basic components
import BasicLayout from '@/layouts/BasicLayout'
import BlankLayout from '@/layouts/BlankLayout'

// view components

// Home
import Home from '@/views/home/home'
import Search from '@/views/home/search'

// Sort
import Sort from '@/views/sort'
// Circle
import Circle from '@/views/circle'
// Cart
import Cart from '@/views/cart'

// My
import My from '@/views/my/my'
import Account from '@/views/my/account'
import AccountNickname from '@/views/my/account-nickname'
import OrderList from '@/views/my/order-list'
import OrderDetail from '@/views/my/order-detail'
import Integral from '@/views/my/integral'
import Coupon from '@/views/my/coupon'
import Address from '@/views/my/address'

Vue.use(Router)

export const routes = [
  {path: '/', redirect: 'home'},
  {
    path: '/home',
    component: BasicLayout,
    children: [
      {
        path: '',
        component: Home,
        name: 'home',
        meta: {title: 'vant-mall-tpl'}
      },
    ]
  },
  {
    path: '/home',
    component: BlankLayout,
    children: [
      {
        path: 'search',
        component: Search,
        name: 'search',
        meta: {title: 'vant-mall-tpl'}
      }
    ]
  },

  {
    path: '/sort',
    component: BasicLayout,
    children: [
      {
        path: '',
        component: Sort,
        name: 'sort',
        meta: {title: '分类'}
      }
    ]
  },
  {
    path: '/circle',
    component: BasicLayout,
    children: [
      {
        path: '',
        component: Circle,
        name: 'circle',
        meta: {title: '圈子'}
      }
    ]
  },
  {
    path: '/cart',
    component: BasicLayout,
    children: [
      {
        path: '',
        component: Cart,
        name: 'cart',
        meta: {title: '购物车'}
      }
    ]
  },

  {
    path: '/my',
    component: BasicLayout,
    children: [
      {
        path: 'my',
        component: My,
        name: 'my',
        meta: {title: 'vant-mall-tpl'}
      }
    ]
  },
  {
    path: '/my',
    component: BlankLayout,
    children: [
      {
        path: 'account',
        component: Account,
        name: 'account',
        meta: {title: '我的资料'}
      },
      {
        path: 'account-nickname',
        component: AccountNickname,
        name: 'account-nickname',
        meta: {title: '更改昵称'}
      },
      {
        path: 'order-list',
        component: OrderList,
        name: 'order-list',
        meta: {title: '我的订单'}
      },
      {
        path: 'order-detail',
        component: OrderDetail,
        name: 'order-detail',
        meta: {title: '我的详情'}
      },
      {
        path: 'integral',
        component: Integral,
        name: 'integral',
        meta: {title: '我的积分'}
      },
      {
        path: 'coupon',
        component: Coupon,
        name: 'coupon',
        meta: {title: '卡券管理'}
      },
      {
        path: 'address',
        component: Address,
        name: 'address',
        meta: {title: '地址管理'}
      },
    ]
  },

  {path: '/403', component: () => import('@/views/errorPage/403')},
  {path: '/404', component: () => import('@/views/errorPage/404')},
  {path: '/500', component: () => import('@/views/errorPage/500')},
  {path: '*', redirect: '/404'}
]

const createRouter = () => new Router({
  // mode: 'history', // require service support
  scrollBehavior: () => ({y: 500}),
  routes: routes
})

const router = createRouter()

// Detail see: https://github.com/vuejs/vue-router/issues/1234#issuecomment-357941465
export function resetRouter() {
  const newRouter = createRouter()
  router.matcher = newRouter.matcher // reset router
}

export default router
