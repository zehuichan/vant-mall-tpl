<template>
  <div class="error-page">
    <div class="inner">
      <div class="title">404</div>
      <div class="info">抱歉，你访问的页面不存在</div>
      <div class="button-wrapper">
        <van-button type="info" size="small" to="/">返回首页</van-button>
      </div>
    </div>
  </div>
</template>

<script>
  import {Button} from 'vant'

  export default {
    name: 'page404',
    components: {
      [Button.name]: Button
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="less" rel="stylesheet/less" type="text/less">

</style>
