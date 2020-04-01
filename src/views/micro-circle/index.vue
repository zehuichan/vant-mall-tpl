<template>
  <div class="circle">
    <van-nav-bar
        :left-text="$route.meta.title"
    />
  </div>
</template>

<script>
  // components
  import {NavBar} from 'vant'

  export default {
    name: 'micro-circle',
    components: {
      [NavBar.name]: NavBar
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="less" rel="stylesheet/less" type="text/less">

</style>