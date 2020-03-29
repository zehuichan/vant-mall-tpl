<template>
  <div class="coupon-list">
    <van-checkbox-group v-model="checks">
      <item v-for="(item, index) in source" :key="item.id" :data="item" :show-checkbox="showCheckbox"/>
    </van-checkbox-group>
  </div>
</template>

<script>
  // components
  import {CheckboxGroup} from 'vant'
  import Item from './item'

  export default {
    name: 'coupon-list',
    model: {
      props: 'value',
      event: 'input'
    },
    props: {
      value: {
        type: Array,
        default: () => []
      },
      source: {
        type: Array,
        default: () => []
      },
      showCheckbox: {
        type: Boolean,
        default: false
      },
    },
    data() {
      return {
        checks: this.value
      }
    },
    watch: {
      value(val) {
        this.checks = val
      },
      checks(val) {
        this.$emit('input', val)
        this.$emit('change', val)
      }
    },
    components: {
      [CheckboxGroup.name]: CheckboxGroup,
      Item
    }
  }
</script>


<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="less" rel="stylesheet/less" type="text/less">
  .coupon-list {

  }
</style>
