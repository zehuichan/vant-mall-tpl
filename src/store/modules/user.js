// filters
import {formatPhone} from '@/filters'
// utils
import {saveToLocal, loadFromLocal, removeFromLocal} from '@/utils'

const state = {
  avatar: loadFromLocal('avatar') || 'https://mall.s.maizuo.com/e915e2c990c30f8efa9e30bc75da41ee.jpg',
  mobile: loadFromLocal('mobile'),
  gender: loadFromLocal('gender'),
  birthday: loadFromLocal('birthday'),
  nickname: loadFromLocal('nickname'),
}

const mutations = {
  SET_AVATAR: (state, avatar) => {
    state.avatar = avatar
    saveToLocal('avatar', avatar)
  },
  SET_MOBILE: (state, mobile) => {
    state.mobile = mobile
    saveToLocal('mobile', mobile)
  },
  SET_GENDER: (state, gender) => {
    state.gender = gender
    saveToLocal('gender', gender)
  },
  SET_BIRTHDAY: (state, birthday) => {
    state.birthday = birthday
    saveToLocal('birthday', birthday)
  },
  SET_NICKNANE: (state, nickname) => {
    state.nickname = nickname
    saveToLocal('nickname', nickname)
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
      commit('SET_MOBILE', loadFromLocal('mobile') || formatPhone('15800066380'))
      commit('SET_NICKNANE', loadFromLocal('nickname') || '陈泽辉')
      resolve()
    })
  },

  setGender({commit, state}, payload) {
    return new Promise((resolve, reject) => {
      commit('SET_GENDER', payload)
      resolve()
    })
  },

  setBirthday({commit, state}, payload) {
    return new Promise((resolve, reject) => {
      commit('SET_BIRTHDAY', payload)
      resolve()
    })
  }
}


export default {
  namespaced: true,
  state,
  mutations,
  actions
}
