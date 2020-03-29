import qmap from './qmap'

export default {
  install(Vue) {
    Vue.prototype.$qmap = qmap
  }
}
