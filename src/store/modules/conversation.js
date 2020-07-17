import TIM from 'tim-js-sdk'
import tim from '@/tim'
// vant
import {Toast} from 'vant'

const state = {
  currentConversation: {},
  currentMessageList: [],
  nextReqMessageID: '',
  isCompleted: false, // 当前会话消息列表是否已经拉完了所有消息
  conversationList: []
}

const mutations = {
  /**
   * 更新当前会话
   * 调用时机: 切换会话时
   * @param {Object} state
   * @param {Conversation} conversation
   */
  updateCurrentConversation: (state, conversation) => {
    state.currentConversation = conversation
    state.currentMessageList = []
    state.nextReqMessageID = ''
    state.isCompleted = false
  },
  /**
   * 更新会话列表
   * 调用时机：触发会话列表更新事件时。CONVERSATION_LIST_UPDATED
   * @param {Object} state
   * @param {Conversation[]} conversationList
   */
  updateConversationList: (state, conversationList) => {
    state.conversationList = conversationList
  },
  /**
   * 将消息插入当前会话列表
   * 调用时机：收/发消息事件触发时
   * @param {Object} state
   * @param {Message[]|Message} data
   * @returns
   */
  pushCurrentMessageList(state, data) {
    // 还没当前会话，则跳过
    if (!state.currentConversation.conversationID) {
      return
    }
    if (Array.isArray(data)) {
      // 筛选出当前会话的消息
      const result = data.filter(item => item.conversationID === state.currentConversation.conversationID)
      state.currentMessageList = [...state.currentMessageList, ...result]
    } else if (data.conversationID === state.currentConversation.conversationID) {
      state.currentMessageList = [...state.currentMessageList, data]
    }
  },
}

const actions = {
  /**
   * 获取消息列表
   * 调用时机：打开某一会话时或下拉获取历史消息时
   * @param {Object} context
   * @param {String} conversationID
   */
  getMessageList({commit, state}, conversationID) {
    if (state.isCompleted) {
      Toast('已经没有更多的历史消息了哦')
      return
    }
    const {nextReqMessageID, currentMessageList} = state
    tim.getMessageList({conversationID, nextReqMessageID, count: 15}).then(imReponse => {
      // 更新messageID，续拉时要用到
      state.nextReqMessageID = imReponse.data.nextReqMessageID
      state.isCompleted = imReponse.data.isCompleted
      // 更新当前消息列表，从头部插入
      state.currentMessageList = [...imReponse.data.messageList, ...currentMessageList]
    })
  },
  /**
   * 切换会话
   * 调用时机：切换会话时
   * @param {Object} context
   * @param {String} conversationID
   */
  checkoutConversation({commit, dispatch, state}, conversationID) {
    // commit('resetCurrentMemberList')
    // 1.切换会话前，将切换前的会话进行已读上报
    if (state.currentConversation.conversationID) {
      const prevConversationID = state.currentConversation.conversationID
      tim.setMessageRead({conversationID: prevConversationID})
    }
    // 2.待切换的会话也进行已读上报
    tim.setMessageRead({conversationID})
    // 3. 获取会话信息
    return tim.getConversationProfile(conversationID).then(({data}) => {
      // 3.1 更新当前会话
      commit('updateCurrentConversation', data.conversation)
      // 3.2 获取消息列表
      dispatch('getMessageList', conversationID)
      return Promise.resolve()
    })
  }
}

export default {
  namespaced: true,
  state,
  mutations,
  actions
}