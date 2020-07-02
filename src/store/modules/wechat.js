import Vue from 'vue'

// api
import {getJssdk} from '@/api/app'

const state = {
  wechat_ready: false,
}

const mutations = {
  INIT_WECHAT_STATE: (state, flag) => {
    state.wechat_ready = flag
  }
}

const actions = {
  initWechatState({commit, state}) {
    return new Promise((resolve, reject) => {
      const url = encodeURIComponent(window.location.href.split('#')[0])
      getJssdk({url})
        .then((res) => {
          const config = res.data
          Vue.wechat.config(config)
          Vue.wechat.ready(() => {
            commit('INIT_WECHAT_STATE', true)
            resolve()
          })
        })
        .catch((err) => {
          commit('INIT_WECHAT_STATE', false)
          reject(err)
        })
    })
  }
}


export default {
  namespaced: true,
  state,
  mutations,
  actions
}

