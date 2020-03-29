import amap from './amap'

export default {
  install(Vue) {
    Vue.prototype.$amap = amap
  }
}
