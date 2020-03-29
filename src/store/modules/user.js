// import {getUserInfo, loginByTel} from '@/api/user'

const state = {
  avatar: '',
  cellphone: '',
  username: '',
  level: 'v2',
}

const mutations = {
  SET_AVATAR: (state, avatar) => {
    state.avatar = avatar
  },
  SET_CELL_PHONE(state, cellphone) {
    state.cellphone = cellphone
  },
  SET_USER_NAME(state, username) {
    state.username = username
  },
  SET_LEVEL(state, level) {
    state.level = level
  },
}

const actions = {
  // 手机快速注册
  // LoginByTel({commit}, dataForm) {
  //   return new Promise((resolve, reject) => {
  //     loginByTel({tel: dataForm.tel, type: dataForm.type}).then((res) => {
  //       if (res.res === 1) {
  //         resolve()
  //       }
  //     }).catch(err => {
  //       reject(err)
  //     })
  //   })
  // },

  // 获取用户信息
  // GetUserInfo({commit, state}) {
  //   return new Promise((resolve, reject) => {
  //     getUserInfo().then((res) => {
  //       if (res.res === 1) {
  //         commit('SET_AVATAR', res.obj.avatar)
  //         commit('SET_CELL_PHONE', res.obj.cellphone)
  //         commit('SET_USER_NAME', res.obj.username)
  //         resolve(res)
  //       } else {
  //         reject(res)
  //       }
  //     }).catch(err => [
  //       reject(err)
  //     ])
  //   })
  // },

  // 获取用户信息
  getUserInfo({commit, state}) {
    return new Promise((resolve, reject) => {
      commit('SET_AVATAR', 'http://thirdwx.qlogo.cn/mmopen/vi_32/Q0j4TwGTfTLYMVgaumib5h42GP4pAlLTQCpzFAmUZTVUg4MmH9eFyb4shrm6Ux2Ocic1ic0ekTWEYVfxibGcMMC3UQ/132')
      commit('SET_CELL_PHONE', '15800066380')
      commit('SET_USER_NAME', 'chan')
      commit('SET_LEVEL', 'v3')
      resolve()
    })
  }
}


export default {
  namespaced: 'user',
  state,
  mutations,
  actions
}
