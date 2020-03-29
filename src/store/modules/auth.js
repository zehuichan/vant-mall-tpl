import {getWXToken, setToken, removeToken} from '@/utils/auth'

const state = {
  token: getWXToken()
}

const mutations = {
  SET_TOKEN(state, token) {
    state.token = token
  }
}

const actions = {}

export default {
  namespaced: 'auth',
  state,
  mutations,
  actions
}
