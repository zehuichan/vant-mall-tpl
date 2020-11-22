<template>
  <div class="integral">
    <van-nav-bar
        :left-text="$route.meta.title"
        left-arrow
        fixed
        placeholder
        @click-left="onClickLeft"
    />
    <div class="integral-header">
      <div class="top">可用积分</div>
      <div class="sub">
        <count-to :start-val="0" :end-val="score" :duration="1500"/>
      </div>
    </div>

    <create-by/>
    <load-more :loading="loading" :finished="finished"/>
  </div>
</template>

<script>
  // components
  import {NavBar} from 'vant'
  import LoadMore from '@/components/LoadMore'
  import CountTo from 'vue-count-to'

  export default {
    name: 'integral',
    data() {
      return {
        score: 500,
        loading: false,
        finished: true
      }
    },
    methods: {
      onClickLeft() {
        this.$navigateBack()
      },
    },
    components: {
      [NavBar.name]: NavBar,
      LoadMore,
      CountTo
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="less" rel="stylesheet/less" type="text/less">
  @import "~@/assets/less/var.less";

  .integral {

    .integral-header {
      background-image: url(~@/assets/img/bg.png);
      background-size: cover;
      text-align: center;
      padding: 48px;

      .top {
        font-size: @font12;
      }

      .sub {
        font-size: @font24;
        color: @primary;
        font-weight: 700;
      }
    }
  }
</style>
