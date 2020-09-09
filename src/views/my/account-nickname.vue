<template>
  <div class="account-nickname">
    <van-nav-bar
        :left-text="$route.meta.title"
        left-arrow
        @click-left="onClickLeft"
    />
    <van-cell-group :border="false">
      <van-field v-model="val" placeholder="新昵称" clearable/>
    </van-cell-group>
    <div class="desc">支持中英文、数字、“_”</div>
    <div class="btn-wrapper padded fixed-bottom">
      <van-button type="info" block @click="submit">保存</van-button>
    </div>
  </div>
</template>

<script>
  // vuex
  import {mapGetters, mapMutations} from 'vuex'
  // component
  import {NavBar, CellGroup, Field, Button} from 'vant'

  export default {
    name: 'account-nickname',
    data() {
      return {
        val: ''
      }
    },
    computed: {
      ...mapGetters([
        'nickname'
      ])
    },
    created() {
      this.val = this.nickname
    },
    methods: {
      onClickLeft() {
        this.$navigateBack()
      },
      submit() {
        if (!this.val) {
          this.$toast('请输入昵称')
          return false
        }
        if (this.val.length > 12) {
          this.$toast('昵称不能超过12位字符')
          return false
        }
        this['user/SET_NICKNANE'](this.val)
        this.$toast({
          message: '设置成功',
          onClose: () => {
            this.$navigateBack()
          }
        })
      },
      ...mapMutations(['user/SET_NICKNANE'])
    },
    components: {
      [NavBar.name]: NavBar,
      [CellGroup.name]: CellGroup,
      [Field.name]: Field,
      [Button.name]: Button,
    }
  }
</script>

<style lang="less">
  .account-nickname {
    .desc {
      font-size: @font12;
      color: @text-l;
      padding: 15px;
    }
  }
</style>
