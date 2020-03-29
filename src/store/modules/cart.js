const data = {
  'cart_info': [
    {
      'id': 21,
      'goodscode': '1010028',
      'name': '(禾穗速效伤风）氨咖黄敏胶囊',
      'pack_unit': '盒',
      'standard': '12粒',
      'stock': 13,
      'type_id': 1,
      'v1_price': 600,
      'v2_price': 600,
      'v3_price': 580,
      'v4_price': 560,
      'v5_price': 560,
      'properties': '普通药品',
      'drug_type': '',
      'troche': '口服常释剂型',
      'column_ids': ',3,',
      'num': 1,
      'image': '//img.yzcdn.cn/vant/ipad.jpeg',
      'update_time': 1577788987
    }, {
      'id': 67,
      'goodscode': '1010394',
      'name': '复方门冬维甘滴眼液（新乐敦）',
      'pack_unit': '瓶',
      'standard': '13ml\/瓶',
      'stock': 13,
      'type_id': 7,
      'v1_price': 2500,
      'v2_price': 2480,
      'v3_price': 2470,
      'v4_price': 2450,
      'v5_price': 2450,
      'properties': '普通药品',
      'drug_type': '',
      'troche': '滴眼剂',
      'column_ids': ',3,',
      'num': 1,
      'image': '//img.yzcdn.cn/vant/ipad.jpeg',
      'update_time': 1578013573
    }, {
      'id': 620,
      'goodscode': '1021449',
      'name': '小柴胡颗粒',
      'pack_unit': '盒',
      'standard': '10g*10袋',
      'stock': 8,
      'type_id': 2,
      'v1_price': 1400,
      'v2_price': 880,
      'v3_price': 880,
      'v4_price': 880,
      'v5_price': 880,
      'properties': '普通药品',
      'drug_type': '',
      'troche': '颗粒剂',
      'column_ids': ',3,',
      'num': 1,
      'image': '//img.yzcdn.cn/vant/ipad.jpeg',
      'update_time': 1577788977
    }, {
      'id': 331,
      'goodscode': '1020177',
      'name': '阿胶块（东阿阿胶250g铁盒）',
      'pack_unit': '盒',
      'standard': '250g',
      'stock': 13,
      'type_id': 9,
      'v1_price': 118500,
      'v2_price': 117500,
      'v3_price': 115500,
      'v4_price': 115000,
      'v5_price': 115000,
      'properties': '普通药品',
      'drug_type': '',
      'troche': '胶剂',
      'column_ids': ',3,',
      'num': 1,
      'image': '//img.yzcdn.cn/vant/ipad.jpeg',
      'update_time': 1577788974
    }
  ],
  'cart_goods_num': 4
}

const state = {
  items: [],
  num: 0
}

const mutations = {
  SET_CART_ITEMS: (state, items) => {
    state.items = items
  },
}

const actions = {
  // 获取购物车信息
  setItems({commit, state}) {
    return new Promise((resolve, reject) => {
      commit('SET_CART_ITEMS', data.cart_info)
      resolve()
    })
  },
  // 改变商品数量
  changeItems({commit, state}, {productId, num}) {
    const cartItem = state.items.find(item => item.id === productId)
    cartItem.num = num
  },
  // 删除商品
  deleteItems({commit, state}, productId) {
    return new Promise((resolve, reject) => {
      const _items = state.items.filter(item => item.id !== productId)
      commit('SET_CART_ITEMS', _items)
      resolve()
    })
  },

}

export default {
  namespaced: 'cart',
  state,
  mutations,
  actions
}
