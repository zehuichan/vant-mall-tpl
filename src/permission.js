import router from './router'
import store from './store'
// progress bar
import NProgress from 'nprogress'
// progress bar style
import 'nprogress/nprogress.css'
// NProgress Configuration
NProgress.configure({showSpinner: false})

router.beforeEach(async (to, from, next) => {
  // start progress bar
  NProgress.start()
  // 记录滚动位置
  if (from.meta.keepAlive) {
    const $main = document.querySelector('.app-main')
    from.meta.scrollTop = $main ? $main.scrollTop : 0
  }

  if (store.getters.mobile) {
    next()
  } else {
    try {
      // 拉取基本信息
      await store.dispatch('user/getUserInfo')
      await store.dispatch('cart/getItems')
      await store.dispatch('address/getAddressList')
      await store.dispatch('coupon/getCouponList')
      next()
    } catch (error) {
      console.log('error', error)
      next('/500')
    }
  }
})

router.afterEach(() => {
  NProgress.done()
})
