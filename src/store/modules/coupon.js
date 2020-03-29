// api

// mock data
const data = [
  {
    'id': 1,
    'name': '满50减50优惠券',
    'score': 100,
    'type': 1,
    'full_money': 5000,
    'reduce_money': 5000,
    'record_time': '2020-1-2',
    'expire_time': '2020-1-2',
  },
  {
    'id': 2,
    'name': '邀请3名好友得5元代金券',
    'score': 0,
    'type': 2,
    'full_money': 3000,
    'reduce_money': 500,
    'record_time': '2020-1-2',
    'expire_time': '2020-1-2',
  },
  {
    'id': 3,
    'name': '测试的优惠券',
    'score': 0,
    'type': 1,
    'full_money': 500,
    'reduce_money': 1000,
    'record_time': '2020-1-2',
    'expire_time': '2020-1-2',
  },
  {
    'id': 4,
    'name': '无门槛5元优惠券',
    'score': 30,
    'type': 1,
    'full_money': 510,
    'reduce_money': 500,
    'record_time': '2020-1-2',
    'expire_time': '2020-1-2',
  }, {
    'id': 5,
    'name': '新会员大礼包#3',
    'score': 0,
    'type': 1,
    'full_money': 500,
    'reduce_money': 3000,
    'record_time': '2020-1-2',
    'expire_time': '2020-1-2',
  },
  {
    'id': 6,
    'name': '新会员大礼包#5',
    'score': 50,
    'type': 1,
    'full_money': 3210,
    'reduce_money': 3200,
    'record_time': '2020-1-2',
    'expire_time': '2020-1-2',
  },
  {
    'id': 7,
    'name': '新会员大礼包#10',
    'score': 10,
    'type': 1,
    'full_money': 1100,
    'reduce_money': 1000,
    'record_time': '2020-1-2',
    'expire_time': '2020-1-2',
  }
]

const state = {
  coupon: [],
}

const mutations = {
  SET_COUPON_LIST(state, list) {
    state.coupon = list
  }
}

const actions = {
  // 获取卡券列表
  getCouponList({commit, state}) {
    return new Promise((resolve, reject) => {
      commit('SET_COUPON_LIST', data)
      resolve()
    })
  }
}

export default {
  namespaced: 'coupon',
  state,
  mutations,
  actions
}
