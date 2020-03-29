import Cookies from 'js-cookie'
import {getLanguage} from '@/lang'

const state = {
  loading: false,
  language: getLanguage()

}

const mutations = {
  SET_TAB_BAR_STATE: (state, tabbar) => {
    state.tabbar = tabbar
  },
  SET_LANGUAGE: (state, language) => {
    state.language = language
    Cookies.set('language', language)
  }
}

const actions = {
  SetTabBarState({commit, state}, flag) {
    commit('SET_TAB_BAR_STATE', flag)
  },
  SetLanguage({commit, state}, lang) {
    commit('SET_LANGUAGE', lang)
  }
}


export default {
  namespaced: 'app',
  state,
  mutations,
  actions
}
