<template>
  <div class="account-security">
    <van-nav-bar
        :left-text="$route.meta.title"
        left-arrow
        @click-left="onClickLeft"
    />

    <div class="sms" v-if="next">
      <div class="tip-text">输入短信验证码</div>
      <!-- 密码输入框 -->
      <van-password-input
          :value="sms"
          :mask="false"
          :focused="showKeyboard"
          @focus="onFocus('sms')"
      />
      <div class="notify-tip">
        验证码已发送至：158 0006 6380 <br>
        验证通过后， 请立即设置支付密码，以保障资金安全。
      </div>
    </div>
    <div class="code" v-else>
      <div class="tip-text">输入支付密码</div>
      <!-- 密码输入框 -->
      <van-password-input
          :value="code"
          :focused="showKeyboard"
          @focus="onFocus('code')"
      />
      <div class="notify-tip">
        验证码已发送至：158 0006 6380 <br>
        验证通过后， 请立即设置支付密码，以保障资金安全。
      </div>
    </div>
    <!-- 数字键盘 -->
    <van-number-keyboard
        :show="showKeyboard"
        @input="onInput(key, $event)"
        @delete="onDelete(key)"
        @blur="showKeyboard = false"
    />
  </div>
</template>

<script>
  // components
  import {NavBar, PasswordInput, NumberKeyboard} from 'vant'

  export default {
    name: 'account-security',
    data() {
      return {
        key: 'sms',
        sms: '',
        code: '',
        next: true,
        showKeyboard: true,
      }
    },
    methods: {
      onClickLeft() {
        this.$navigateBack()
      },
      onFocus(key) {
        this.key = key
        this.showKeyboard = true
      },
      onInput(key, event) {
        this[key] = (this[key] + event).slice(0, 6)
      },
      onDelete(key) {
        this[key] = this[key].slice(0, this[key].length - 1)
      },
    },
    components: {
      [NavBar.name]: NavBar,
      [PasswordInput.name]: PasswordInput,
      [NumberKeyboard.name]: NumberKeyboard
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="less" rel="stylesheet/less" type="text/less">
  .account-security {

    .sms,
    .code {
      padding: 0 15px;
      transition: all .25s;
    }

    .tip-text {
      padding-top: 90px;
      padding-bottom: 30px;
      text-align: center;
      font-size: 15px;
      color: #191a1b;
    }

    .notify-tip {
      text-align: left;
      color: #bdc0c5;
      padding: 30px 15px;
      font-size: 12px;
    }
  }
</style>