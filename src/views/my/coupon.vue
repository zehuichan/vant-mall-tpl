<template>
  <div class="coupon">
    <div class="fixed">
      <van-nav-bar
          :left-text="$route.meta.title"
          left-arrow
          @click-left="onClickLeft"
      />
      <div class="query-coupon-group">
        <div class="field">
          <van-field v-model="query" placeholder="请输入兑换码" :border="false"/>
        </div>
        <div class="btn">
          <van-button type="danger" size="small" :disabled="disabled">兑换</van-button>
        </div>
      </div>
      <van-tabs :active="active" tab-active-class="tab-active" color="#c03131" @change="onChange">
        <van-tab title="未使用"></van-tab>
        <van-tab title="已使用"></van-tab>
        <van-tab title="已过期"></van-tab>
      </van-tabs>
    </div>
    <div class="page-wrapper padded">
      <coupon-list :source="coupon"/>
      <load-more :loading="loading" :finished="finished"/>
      <create-by/>
    </div>
  </div>
</template>

<script>
  // vuex
  import {mapGetters, mapMutations} from 'vuex'
  // components
  import {NavBar, Field, Button, Tab, Tabs} from 'vant'
  import CouponList from '@/components/CouponList'
  import LoadMore from '@/components/LoadMore'

  export default {
    name: 'coupon',
    data() {
      return {
        query: '',
        active: 0,
        loading: false,
        finished: true
      }
    },
    computed: {
      disabled() {
        return !this.query
      },
      ...mapGetters(['coupon'])
    },
    methods: {
      onClickLeft() {
        this.$navigateBack()
      },
      onChange() {
      },
      ...mapMutations(['setCouponList'])
    },
    components: {
      [NavBar.name]: NavBar,
      [Field.name]: Field,
      [Button.name]: Button,
      [Tab.name]: Tab,
      [Tabs.name]: Tabs,
      CouponList,
      LoadMore
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="less" rel="stylesheet/less" type="text/less">
  @import "~@/assets/less/var.less";

  .coupon {
    padding-top: 134px;

    .van-tab--active {
      color: #c03131;
    }

    .fixed {
      position: fixed;
      top: 0;
      left: 0;
      width: 100%;
      z-index: 2;
      background-color: #fff;
    }
  }

  .query-coupon-group {
    width: 100%;
    display: flex;
    align-items: center;
    background-color: #fff;
    padding: 0 15px;

    .field {
      flex: 1;
    }

    .btn {
      flex: 0 0 60px;
      width: 60px;
      min-width: 0;
    }
  }
</style>
