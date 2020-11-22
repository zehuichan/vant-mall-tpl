<template>
  <div class="basic-layout app-wrapper">
    <!--app-main-->
    <app-main has-padding/>
    <!--tabbar-->
    <van-tabbar v-model="active" active-color="#c03131" inactive-color="#2e2f30">
      <van-tabbar-item name="home" to="/tabs/home">
        <i slot="icon" class="iconfont icon-feed-logo"/>
        {{$t('navbar.home')}}
      </van-tabbar-item>
      <van-tabbar-item name="sort" to="/tabs/sort">
        <i slot="icon" class="iconfont icon-all"/>
        {{$t('navbar.sort')}}
      </van-tabbar-item>
      <van-tabbar-item name="expert" to="/tabs/expert">
        <i slot="icon" class="iconfont icon-dongtai"></i>
        {{$t('navbar.expert')}}
      </van-tabbar-item>
      <van-tabbar-item name="cart" to="/tabs/cart" :badge="items_length">
        <i slot="icon" class="iconfont icon-cart-Empty"/>
        {{$t('navbar.cart')}}
      </van-tabbar-item>
      <van-tabbar-item name="mine" to="/tabs/mine">
        <i slot="icon" class="iconfont icon-bussiness-man"/>
        {{$t('navbar.my')}}
      </van-tabbar-item>
    </van-tabbar>
  </div>
</template>

<script>
  // vuex
  import {mapGetters} from 'vuex'
  // components
  import {Tabbar, TabbarItem} from 'vant'
  import AppMain from './components/AppMain'

  export default {
    name: 'basic-layout',
    computed: {
      active: {
        get() {
          return this.$route.name
        },
        set(val) {

        }
      },
      ...mapGetters([
        'items_length'
      ])
    },
    watch: {
      '$route'(to, from) {
        this.active = to.name
      }
    },
    components: {
      [Tabbar.name]: Tabbar,
      [TabbarItem.name]: TabbarItem,
      AppMain
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="less" rel="stylesheet/less" type="text/less">
  .app-wrapper {
    position: relative;
    height: 100%;
    overflow: hidden;
  }

  .van-tabbar-item__icon {
    margin-bottom: 2px;

    .iconfont {
      font-size: 24px;
      display: block;
      min-width: 1em;
    }
  }
</style>
