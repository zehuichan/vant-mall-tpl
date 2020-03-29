import wx from './jweixin-1.6.0'

const plugin = {
  install(Vue) {
    Vue.prototype.$wechat = wx
    Vue.wechat = wx
  },
  $wechat: wx
}

export default plugin
export const install = plugin.install
