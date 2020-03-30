const data = [
  {
    'address': '黄园二街',
    'standardAddress': '',
    'cityId': 440100,
    'countryId': 86,
    'districtId': 440111,
    'idCard': '',
    'isDefault': 0,
    'name': '陈泽辉',
    'phone': '15800066333',
    'postCode': '',
    'provinceId': 440000,
    'houseNum': '',
    'lo': 113.26624,
    'la': 23.205082,
    'addressId': 537597,
    'cityName': '广州市',
    'countryName': '中国',
    'districtName': '白云区',
    'provinceName': '广东省'
  }, {
    'address': '季华五路18号经华大厦25楼',
    'standardAddress': '',
    'cityId': 440600,
    'countryId': 86,
    'districtId': 440604,
    'idCard': '',
    'isDefault': 0,
    'name': '测试',
    'phone': '15800066380',
    'postCode': '',
    'provinceId': 440000,
    'houseNum': '',
    'lo': 113.11472,
    'la': 23.011515,
    'addressId': 537595,
    'cityName': '佛山市',
    'countryName': '中国',
    'districtName': '禅城区',
    'provinceName': '广东省'
  }, {
    'address': '沙海村沙海新村二巷5号',
    'standardAddress': '',
    'cityId': 440600,
    'countryId': 86,
    'districtId': 440605,
    'idCard': '',
    'isDefault': 1,
    'name': '陈泽辉',
    'phone': '15800066380',
    'postCode': '',
    'provinceId': 440000,
    'houseNum': '',
    'lo': 113.16566,
    'la': 23.125185,
    'addressId': 523561,
    'cityName': '佛山市',
    'countryName': '中国',
    'districtName': '南海区',
    'provinceName': '广东省'
  }]


const state = {
  address_list: data,
  chosen_address: null
}

const mutations = {
  SET_ADDRESS_LIST(state, list) {
    state.address_list = list
  },
  SET_CHOSEN_ADDRESS(state, address) {
    state.chosen_address = address
  }
}

const actions = {
  // 获取地址列表
  getAddressList({commit, state}) {
    return new Promise((resolve, reject) => {
      commit('SET_ADDRESS_LIST', data)
      resolve()
    })
  },
  setChosenAddress({commit, state}, address) {
    return new Promise((resolve, reject) => {
      commit('SET_CHOSEN_ADDRESS', address)
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
