<template>
  <div class="basic-layout app-wrapper">
    <!--app-main-->
    <div class="app-main has-padded">
      <router-view/>
    </div>
    <!--tabbar-->
    <van-tabbar v-model="active">
      <van-tabbar-item to="/home">
        <i slot="icon" class="iconfont icon-shouye"></i>
        {{$t('navbar.home')}}
      </van-tabbar-item>
      <van-tabbar-item to="/message">
        <i slot="icon" class="iconfont icon-xiaoxi"></i>
        {{$t('navbar.message')}}
      </van-tabbar-item>
      <van-tabbar-item to="/me">
        <i slot="icon" class="iconfont icon-wode"></i>
        {{$t('navbar.me')}}
      </van-tabbar-item>
    </van-tabbar>
  </div>
</template>

<script>
  // components
  import {Tabbar, TabbarItem} from 'vant'

  export default {
    name: 'basic-layout',
    data() {
      return {}
    },
    computed: {
      active: {
        get() {
          const map = {
            'home': 0,
            'message': 1,
            'me': 2,
          }
          return map[this.$route.name]
        },
        set(val) {
        }
      }
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
    .iconfont {
      font-size: inherit;
    }
  }
</style>
