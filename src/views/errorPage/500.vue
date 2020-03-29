<template>
  <div class="error-page">
    <div class="title">500</div>
    <div class="info">抱歉，服务器出错了</div>
    <div class="button-wrapper">
      <van-button type="info" size="mini" to="/">返回首页</van-button>
    </div>
  </div>
</template>

<script>
  import {Button} from 'vant'

  export default {
    name: 'page500',
    components: {
      [Button.name]: Button
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="less" rel="stylesheet/less" type="text/less">

</style>
