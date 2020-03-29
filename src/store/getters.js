const getters = {
  // index
  language: state => state.app.language,

  // loading
  loading: state => state.app.loading,

  // tabbar
  tabbar: state => state.app.tabbar,

  // wechat
  wechat_ready: state => state.wechat.wechat_ready,

  // userInfo
  avatar: state => state.user.avatar,
  cellphone: state => state.user.cellphone,
  username: state => state.user.username,
  level: state => state.user.level,

  // address
  address_list: state => state.address.address_list,
  chosen_address: state => state.address.chosen_address,
  default_address: state => state.address.address_list.find((item) => item.default === 1),

  // coupon
  coupon: state => state.coupon.coupon,

  // auth
  token: state => state.auth.token,

  // shopCart
  items: state => state.cart.items
}

export default getters
