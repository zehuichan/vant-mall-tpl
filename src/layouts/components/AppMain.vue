<template>
  <div class="app-main" :class="classes" ref="$main">
    <keep-alive>
      <router-view v-if="$route.meta.keepAlive" :key="key"/>
    </keep-alive>
    <router-view v-if="!$route.meta.keepAlive" :key="key"/>
  </div>
</template>

<script>
  export default {
    name: 'AppMain',
    props: {
      hasPadding: {
        type: Boolean,
        default: false
      },
    },
    computed: {
      classes() {
        return this.hasPadding ? 'has-padding' : ''
      },
      key() {
        return this.$route.path
      },
    },
    updated() {
      const keepAlive = this.$route.meta.keepAlive
      const scrollTop = this.$route.meta.scrollTop
      const $main = this.$refs.$main
      if (keepAlive && scrollTop && $main) {
        $main.scrollTop = scrollTop
        console.log('scrollTop', scrollTop)
      }
    },
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="less" rel="stylesheet/less" type="text/less">
  .app-main {
    height: 100%;
    position: relative;
    overflow-x: hidden;
    -webkit-overflow-scrolling: touch;
  }

  .has-padding {
    padding-bottom: 50px;
  }
</style>
