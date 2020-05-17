<template>
  <div class="account">
    <van-nav-bar
        :left-text="$route.meta.title"
        left-arrow
        @click-left="onClickLeft"
    />
    <van-cell-group>
      <van-cell title="头像" center is-link>
        <div class="avatar">
          <van-image width="100%" height="100%" :src="avatar" round/>
        </div>
      </van-cell>
      <van-cell title="昵称" :value="nickname" is-link @click="onClick('../my/account-nickname')"/>
      <van-cell title="性别" :value="gender || '未设置'" is-link @click="gender_show = true"/>
      <van-cell title="出生日期" :value="birthday || '未设置'" is-link @click="birthday_show = true"/>
    </van-cell-group>
    <split/>
    <van-cell-group>
      <van-cell title="手机号码" :value="mobile" is-link/>
      <van-cell title="支付密码" value="未设置" is-link @click="onClick('../my/account-security')"/>
    </van-cell-group>
    <div class="btn-wrapper fixed-bottom padded">
      <van-button type="danger" block>退出登录</van-button>
    </div>

    <!-- 更改性别 -->
    <van-action-sheet
        v-model="gender_show"
        :actions="actions"
        :round="false"
        :close-on-click-action="false"
        description="更改性别"
        cancel-text="取消"
        @select="genderSelect"
        @close="gender_show = false"
        @cancel="gender_show = false"
    />

    <!-- 设置出生日期 -->
    <van-popup v-model="birthday_show" position="bottom" @close="birthday_show = false">
      <van-datetime-picker
          type="date"
          :value="date"
          :min-date="minDate"
          @confirm="birthdayConfirm"
          @cancel="birthday_show = false"
      />
    </van-popup>
  </div>
</template>

<script>
  // vuex
  import {mapGetters, mapActions} from 'vuex'
  // utils
  import {parseTime} from '@/utils'
  // components
  import {NavBar, Cell, CellGroup, Image, Button, ActionSheet, Popup, DatetimePicker} from 'vant'
  import Split from '@/components/Split'

  export default {
    name: 'account',
    data() {
      return {
        // gender
        gender_show: false,
        actions: [{name: '男'}, {name: '女'}],
        // birthday
        birthday_show: false,
        date: new Date(2000, 0, 1),
        minDate: new Date(1970, 0, 1)
      }
    },
    computed: {
      ...mapGetters(['avatar', 'mobile', 'gender', 'birthday', 'nickname'])
    },
    methods: {
      onClickLeft() {
        this.$navigateBack()
      },
      onClick(url, json) {
        this.$navigateTo(url, json)
      },
      genderSelect(item) {
        this['user/setGender'](item.name)
        this.$toast({
          message: '设置成功',
          onClose: () => {
            this.gender_show = false
          }
        })
      },
      birthdayConfirm(val) {
        this['user/setBirthday'](parseTime(val, '{y}-{m}-{d}'))
        this.$toast({
          message: '设置成功',
          onClose: () => {
            this.birthday_show = false
          }
        })
      },
      ...mapActions([
        'user/setGender',
        'user/setBirthday',
      ])
    },
    components: {
      [NavBar.name]: NavBar,
      [Cell.name]: Cell,
      [CellGroup.name]: CellGroup,
      [Image.name]: Image,
      [Button.name]: Button,
      [ActionSheet.name]: ActionSheet,
      [Popup.name]: Popup,
      [DatetimePicker.name]: DatetimePicker,
      Split
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="less" rel="stylesheet/less" type="text/less">
  @import "~@/assets/less/var.less";

  .account {
    .avatar {
      width: 40px;
      height: 40px;
      margin-top: 8px;
      display: inline-block;
    }
  }
</style>
