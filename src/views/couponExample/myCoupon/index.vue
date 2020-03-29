<template>
  <div class="myCoupon">
    <van-nav-bar
      fixed
      left-text="卡券管理"
      left-arrow
      @click-left="onClickLeft">
    </van-nav-bar>

    <div class="page-container padded">
      <coupon-list
        :source="coupon"
      />
    </div>

  </div>
</template>

<script>
  // vuex
  import {mapGetters} from 'vuex'
  // components
  import {NavBar} from 'vant'
  import CouponList from '@/components/CouponList'

  export default {
    name: 'myCoupon',
    data() {
      return {

      }
    },
    computed:{
      ...mapGetters([
        'coupon'
      ])
    },
    methods: {
      onClickLeft() {
        this.$router.push({path: this.redirect || '/me'})
      }
    },
    components: {
      [NavBar.name]: NavBar,
      CouponList
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="less" rel="stylesheet/less" type="text/less">
  .myCoupon {
    padding-top: 46px;
  }
</style>
