const data = [
  {
    'count': 1,
    'selected': 1,
    'joinTime': 1584850822,
    'options': ['保时捷灰', '普通版'],
    'marketPrice': 0,
    'inventory': 62,
    'salesCount': 289,
    'productId': 29342011,
    'isVirtualProduct': 0,
    'supplierId': 165,
    'productStatus': 1,
    'purchaseLimit': {
      'minPurchaseCount': 1,
      'maxPurchaseCount': 62,
      'limitedPurchaseCount': 0
    },
    'skuId': 29347446,
    'productName': '拉鲁石墨烯暖腰宝',
    'imgUrl': 'https://mall.s.maizuo.com/5e6d13818a28d6a9d2e570788862a470.png',
    'price': 28900,
    'expressRuleId': 0,
    'selectedDisabled': 0,
    'groupId': 11,
    'sectionId': 1
  },
  {
    'count': 1,
    'selected': 1,
    'joinTime': 1584850811,
    'options': [''],
    'marketPrice': 0,
    'inventory': 492,
    'salesCount': 1331,
    'productId': 119304378,
    'isVirtualProduct': 0,
    'supplierId': 107,
    'productStatus': 1,
    'purchaseLimit': {
      'minPurchaseCount': 1,
      'maxPurchaseCount': 492,
      'limitedPurchaseCount': 0
    },
    'skuId': 119318737,
    'productName': 'GKN格卡诺迷你取暖器GKN-05B',
    'imgUrl': 'https://mall.s.maizuo.com/609e772bde6adb0e090dacf5f2208550.png',
    'price': 8900,
    'expressRuleId': 0,
    'selectedDisabled': 0,
    'groupId': 11,
    'sectionId': 1
  },
  {
    'count': 1,
    'selected': 1,
    'joinTime': 1584850804,
    'options': [''],
    'marketPrice': 0,
    'inventory': 496,
    'salesCount': 1897,
    'productId': 123096012,
    'isVirtualProduct': 0,
    'supplierId': 219,
    'productStatus': 1,
    'purchaseLimit': {
      'minPurchaseCount': 1,
      'maxPurchaseCount': 496,
      'limitedPurchaseCount': 0
    },
    'skuId': 123110638,
    'productName': '久量多功能充电式触控护眼台灯DP-0109',
    'imgUrl': 'https://mall.s.maizuo.com/a31e3af3e55175cd247ea10ee8560323.png',
    'price': 24900,
    'expressRuleId': 0,
    'selectedDisabled': 0,
    'groupId': 11,
    'sectionId': 1
  }
]

const state = {
  items: data,
  num: 0
}

const mutations = {
  SET_CART_ITEMS: (state, items) => {
    state.items = items
  },
}

const actions = {
  // 获取购物车信息
  getItems({commit, state}) {
    return new Promise((resolve, reject) => {
      commit('SET_CART_ITEMS', data)
      resolve()
    })
  },
  // 改变商品数量
  changeItems({commit, state}, {productId, count}) {
    return new Promise((resolve, reject) => {
      const cartItem = state.items.find(item => item.productId === productId)
      cartItem.count = count
      resolve()
    })
  },
  // 删除商品
  deleteItems({commit, state}, productId) {
    return new Promise((resolve, reject) => {
      const _items = state.items.filter(item => item.productId !== productId)
      commit('SET_CART_ITEMS', _items)
      resolve()
    })
  },

}

export default {
  namespaced: true,
  state,
  mutations,
  actions
}
