<template>
  <div class="basic-layout app-wrapper">
    <!--app-main-->
    <div class="app-main has-padded">
      <router-view/>
    </div>
    {{items_length}}
    <!--tabbar-->
    <van-tabbar v-model="active" safe-area-inset-bottom active-color="#c03131" inactive-color="#2e2f30">
      <van-tabbar-item name="home" to="/home">
        <i slot="icon" class="iconfont icon-feed-logo"></i>
        {{$t('navbar.home')}}
      </van-tabbar-item>
      <van-tabbar-item name="sort" to="/sort">
        <i slot="icon" class="iconfont icon-all"></i>
        {{$t('navbar.sort')}}
      </van-tabbar-item>
      <van-tabbar-item name="circle" to="/circle">
        <i slot="icon" class="iconfont icon-dongtai"></i>
        {{$t('navbar.circle')}}
      </van-tabbar-item>
      <van-tabbar-item name="cart" to="/cart" :badge="items_length">
        <i slot="icon" class="iconfont icon-cart-Empty"></i>
        {{$t('navbar.cart')}}
      </van-tabbar-item>
      <van-tabbar-item name="my" to="/my/my">
        <i slot="icon" class="iconfont icon-bussiness-man"></i>
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

  export default {
    name: 'basic-layout',
    data() {
      return {
        active: this.$route.name
      }
    },
    computed:{
      ...mapGetters([
        'items_length'
      ])
    },
    components: {
      [Tabbar.name]: Tabbar,
      [TabbarItem.name]: TabbarItem
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

  .app-main {
    height: 100%;
    position: relative;
    overflow-x: hidden;
  }

  .has-padded {
    padding-bottom: 50px;
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
