<template>
  <div class="empty">{{text}}</div>
</template>

<script>
  export default {
    name: 'empty',
    props: {
      text: {
        type: String,
        default: () => '没有更多了'
      }
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="less" rel="stylesheet/less" type="text/less">
  .empty {
    color: #969799;
    font-size: 14px;
    line-height: 50px;
    text-align: center;
  }
</style>
