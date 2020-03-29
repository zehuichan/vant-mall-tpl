<template>
  <div class="address-list">
    <template v-if="poppable">
      <van-popup :value="value" position="right" style="width: 100%; height: 100%; background-color: #f0f2f5;">
        <van-nav-bar
          left-text="选择收货地址"
          left-arrow
          @click-left="onClickLeft"
          @click-right="onClickRight"
        >
          <span class="font12" slot="right">添加新地址</span>
        </van-nav-bar>

        <item
          v-for="(item, index) in list"
          :key="item.id"
          :data="item"
          :disabled="disabled"
          @select="onSelect(item, index)"
          @edit="onEdit(item, index)"
          @delete="onDelete(item, index)"
        />
      </van-popup>
    </template>
    <template v-else>
      <item
        v-for="(item, index) in list"
        :key="item.id"
        :data="item"
        :disabled="disabled"
        @select="onSelect(item, index)"
        @edit="onEdit(item, index)"
        @delete="onDelete(item, index)"
      />
    </template>
  </div>
</template>

<script>
  // components
  import {Popup, NavBar, Button} from 'vant'
  import Item from './item'

  export default {
    name: 'address-list',
    model: {
      prop: 'value',
      event: 'input'
    },
    props: {
      value: Boolean,
      list: {
        type: Array,
        default: () => []
      },
      disabled: {
        type: Boolean,
        default: true
      },
      poppable: {
        type: Boolean,
        default: true
      }
    },
    data() {
      return {
        show: false
      }
    },
    methods: {
      onClickLeft() {
        this.$emit('input', false)
      },
      onClickRight() {
        this.$emit('add')
      },
      onSelect(data, index) {
        this.$emit(this.disabled ? 'select-disabled' : 'select', data, index)
      },
      onEdit(data, index) {
        this.$emit('edit', data, index)
      },
      onDelete(data, index) {
        this.$emit('delete', data, index)
      },
    },
    components: {
      [Popup.name]: Popup,
      [NavBar.name]: NavBar,
      [Button.name]: Button,
      Item
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="less" rel="stylesheet/less" type="text/less">

</style>
