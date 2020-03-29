import router from './router'
import store from './store'

router.beforeEach(async (to, from, next) => {
  // store.commit('SET_LOADING_STATE', true)
  // 初始化微信config
  // await store.dispatch('wechat/initWechatState')
  if (store.getters.username) {
    next()
  } else {
    try {
      // 拉取基本信息
      await store.dispatch('user/getUserInfo')
      await store.dispatch('cart/setItems')
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
  // store.commit('SET_LOADING_STATE', false)
})
