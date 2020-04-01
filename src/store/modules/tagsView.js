// 參考 https://panjiachen.gitee.io/vue-element-admin-site/zh/guide/essentials/tags-view.html#visitedviews-cachedviews

import {routes} from '@/router'

const state = {
  cachedViews: []
}

const mutations = {
  ADD_CACHED_VIEW(state, view) {
    if (state.cachedViews.includes(view.name)) return
    if (!view.meta.noCache) {
      state.cachedViews.push(view.name)
    }
  },
}

const actions = {
  addCachedView({commit}, view) {
    commit('ADD_CACHED_VIEW', view)
  },
}

export default {
  namespaced: true,
  state,
  mutations,
  actions
}
