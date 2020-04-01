<template>
  <div class="card" :class="shadow ? 'is-' + shadow + '-shadow' : 'is-always-shadow'">
    <div class="card__header van-hairline--bottom" v-if="$slots.header || header">
      <slot name="header">{{ header }}</slot>
    </div>
    <div class="card__body" :style="bodyStyle">
      <slot></slot>
    </div>
    <div class="card__extra" :style="extraStyle" v-if="$slots.extra || extra">
      <slot name="extra">{{ extra }}</slot>
    </div>
    <div class="card__footer" v-if="$slots.footer || footer">
      <slot name="footer">{{ footer }}</slot>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'card',
    props: {
      header: {},
      bodyStyle: {},
      extraStyle: {},
      extra: {},
      footer: {},
      shadow: {
        type: String
      }
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="less" rel="stylesheet/less" type="text/less">
  .card {
    border-radius: 2px;
    border: 1px solid #ebeef5;
    background-color: #fff;
    overflow: hidden;
    color: #303133;
    transition: .3s;
    font-size: 12px;

    &.is-always-shadow {
      box-shadow: 0 2px 12px 0 rgba(0, 0, 0, .1);
    }

    &.is-never-shadow {

    }

    & + .card {
      margin-top: 10px;
    }

    &:last-child {
      margin-bottom: 10px;
    }
  }

  .card__header {
    padding: 11px 16px;
    box-sizing: border-box;
  }

  .card__body {
    display: flex;
    padding: 16px;
  }

  .card__extra,
  .card__footer {
    font-size: 12px;
    padding: 11px 16px;
    border-top: 1px solid #ebeef5;
  }
</style>
