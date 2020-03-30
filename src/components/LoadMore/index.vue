<template>
  <div class="load-more">
    <div class="van-list__loading" v-if="loading && !finished">
      <van-loading type="spinner" size="16" style="vertical-align: -5px;"/>
      <span class="van-loading__text">{{ loadingText }}</span>
    </div>
    <div class="van-list__finished-text" v-if="finished">{{ finishedText }}</div>
  </div>
</template>

<script>
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
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="less" rel="stylesheet/less" type="text/less">

</style>
