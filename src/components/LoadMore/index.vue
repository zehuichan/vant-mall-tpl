<template>
  <div class="load-more">
    <div class="van-list__loading">
      <van-loading size="16px" v-if="loading && !finished">{{loadingText}}</van-loading>
    </div>
    <div class="van-list__finished-text" v-if="finished">{{ finishedText }}</div>
  </div>
</template>

<script>
  // components
  import {Loading} from 'vant'

  export default {
    name: 'load-more',
    props: {
      loading: {
        type: Boolean,
        default: false
      },
      finished: {
        type: Boolean,
        default: false
      },
      loadingText: {
        type: String,
        default: '加载中...'
      },
      finishedText: {
        type: String,
        default: '没有更多了'
      }
    },
    components: {
      [Loading.name]: Loading
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="less" scoped>
  .load-more {
    .van-loading {
      display: inline-block;
    }

    .van-list {
      &__loading,
      &__finished-text,
      &__error-text {
        color: #969799;
        font-size: 14px;
        line-height: 50px;
        text-align: center;
      }

      &__placeholder {
        height: 0;
        pointer-events: none;
      }
    }
  }
</style>
