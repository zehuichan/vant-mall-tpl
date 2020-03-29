<template>
  <div class="address-item">
    <div :class="disabled ? '' : 'tap-active'" @click="$emit('select')">
      <div class="address-cell">
        <div class="address-cell__title">{{data.name}}</div>
        <div class="address-cell__value">{{data.phone | formatPhone}}</div>
      </div>
      <div class="address-item__address ellipsis-2">{{_address}}</div>
    </div>
    <div class="address-edit van-hairline--top">
      <div class="address-edit__radio" v-if="data.default">
        <van-tag type="primary">默认地址</van-tag>
      </div>
      <div class="address-edit__handle">
        <span class="edit" @click="$emit('edit')">编辑</span>
        <span class="delete" @click="$emit('delete')">删除</span>
      </div>
    </div>
  </div>
</template>

<script>
  // components
  import {Tag} from 'vant'

  export default {
    name: 'address-item',
    props: {
      data: Object,
      disabled: {
        type: Boolean,
        default: true
      },
    },
    computed: {
      _address() {
        const area = JSON.parse(this.data.area).map(item => item.name).join(' ')
        return `${area} ${this.data.address}`
      }
    },
    components: {
      [Tag.name]: Tag
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="less" rel="stylesheet/less" type="text/less">
  @import "~@/assets/less/tap.less";

  .address-item {
    width: 100%;
    background-color: #fff;
    color: #14151a;
    font-weight: 500;
    font-size: 14px;

    & + .address-item {
      margin-top: 8px;
    }

    .address-cell {
      display: flex;
      padding: 16px;

      &__title,
      &__value {
        flex: 1;
      }

      &__title {
        text-align: left;
        font-size: 16px;
        color: #333;
        font-weight: 500;
      }

      &__value {
        text-align: right;
        font-size: 12px;
        color: #666;
      }
    }

    .address-edit {
      display: flex;
      padding: 12px 16px;
      font-size: 12px;

      &__radio,
      &__handle {
        flex: 1;
      }

      &__handle {
        text-align: right;
      }

      .edit,
      .delete {
        padding: 8px;
        font-weight: 500;
      }

      .edit {
        color: #01c2c3;
      }

      .delete {
        color: #ff4657;
      }
    }

    &__address {
      padding: 0 16px 16px;
    }
  }
</style>
