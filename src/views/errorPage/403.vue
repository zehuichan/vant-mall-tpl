<template>
  <div class="error-page">
    <div class="title">403</div>
    <div class="info">抱歉，你无权访问该页面</div>
    <div class="button-wrapper">
      <van-button type="info" size="mini" to="/">返回首页</van-button>
    </div>
  </div>
</template>

<script>
  import {Button} from 'vant'

  export default {
    name: 'page403',
    components: {
      [Button.name]: Button
    }
  }
</script>
