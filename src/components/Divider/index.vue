<template>
  <div class="divider"
       :class="[_type, className, {'divider-dashed': dashed}, {'divider-with-text':$slots && $slots.default}]">
    <div class="divider-inner-text" v-if="$slots && $slots.default">
      <slot></slot>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'Divider',
    props: {
      dashed: {
        type: Boolean,
        default: false
      },
      type: {
        type: String,
        default: 'horizontal'
      },
      className: {
        type: String
      }
    },
    computed: {
      _type() {
        return `divider-${this.type}`
      }
    }
  }
</script>


<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="less" rel="stylesheet/less" type="text/less" scoped>
  .divider {
    -webkit-box-sizing: border-box;
    box-sizing: border-box;
    margin: 0;
    padding: 0;
    color: rgba(0, 0, 0, 0.65);
    font-size: 14px;
    font-variant: tabular-nums;
    line-height: 1.5715;
    list-style: none;
    -webkit-font-feature-settings: 'tnum';
    font-feature-settings: 'tnum';
    background: #f0f0f0;
  }

  .divider,
  .divider-vertical {
    position: relative;
    top: -0.06em;
    display: inline-block;
    width: 1px;
    height: 0.9em;
    margin: 0 8px;
    vertical-align: middle;
  }

  .divider-horizontal {
    display: block;
    clear: both;
    width: 100%;
    min-width: 100%;
    height: 1px;
    margin: 24px 0;
  }

  .divider-with-text {
    display: table;
    margin: 16px 0;
    color: rgba(0, 0, 0, 0.85);
    font-weight: 500;
    font-size: 16px;
    white-space: nowrap;
    text-align: center;
    background: transparent;

    &:before,
    &:after {
      position: relative;
      top: 50%;
      display: table-cell;
      width: 50%;
      border-top: 1px solid #f0f0f0;
      -webkit-transform: translateY(50%);
      transform: translateY(50%);
      content: '';
    }
  }

  .divider-inner-text {
    display: inline-block;
    padding: 0 1em;
  }

  .divider-dashed {
    background: none;
    border-color: #f0f0f0;
    border-style: dashed;
    border-width: 1px 0 0;
  }
</style>
