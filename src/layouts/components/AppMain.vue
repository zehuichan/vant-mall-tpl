<template>
  <div class="app-main" :class="classes">
    <transition name="fade" mode="out-in">
      <keep-alive :include="cachedViews">
        <router-view :key="key"/>
      </keep-alive>
    </transition>
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
      cachedViews() {
        return [
          'home',
          'sort',
          'expert',
          'cart',
          'my',
        ]
      },
      key() {
        return this.$route.path
      },
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
