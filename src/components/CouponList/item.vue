<template>
  <div class="coupon-item" :class="classes">
    <van-checkbox class="coupon-item__checker" v-if="showCheckbox" :name="data.id"/>
    <div class="coupon-item__content">
      <div class="coupon-item__head">
        <h2><span>￥</span>{{data.reduce_money | format(0)}}</h2>
        <p>满{{data.full_money | format}}可用</p>
      </div>
      <div class="coupon-item__body">
        <h2>{{data.name}}</h2>
        <p>有效期：{{data.record_time}} - {{data.expire_time}}</p>
      </div>
    </div>
  </div>
</template>

<script>
  // components
  import {Checkbox} from 'vant'

  export default {
    name: 'coupon-item',
    props: {
      data: Object,
      showCheckbox: {
        type: Boolean,
        default: false
      },
    },
    computed: {
      classes() {
        return this.showCheckbox ? 'has-checkbox' : ''
      }
    },
    components: {
      [Checkbox.name]: Checkbox,
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="less" rel="stylesheet/less" type="text/less">
  .coupon-item {
    position: relative;
    width: 100%;
    border-radius: 4px;

    &.has-checkbox {
      padding-left: 30px;

      .coupon-item__checker {
        position: absolute;
        left: 0;
        top: 50%;
        z-index: 1;
        margin-top: -10px;
      }
    }

    h2,
    p {
      margin: 0;
      font-weight: 500;
    }

    p {
      margin-bottom: 4px;
      font-size: 12px;
    }

    .coupon-item__content {
      position: relative;
      background-color: #fff;
      display: flex;
      width: 100%;
    }

    .coupon-item__head {
      position: relative;
      padding: 20px 16px;
      min-width: 120px;
      text-align: center;

      h2 {
        color: #01c2c3;
        font-size: 24px;

        span {
          font-size: 50%;
        }
      }

      &:after {
        content: "";
        position: absolute;
        top: 16px;
        right: 5px;
        border-right: 1px dashed #ddd;
        height: 70%;
      }
    }

    .coupon-item__body {
      position: relative;
      flex: 1;
      padding: 20px 16px;

      h2 {
        font-size: 14px;
        margin-top: 8px;
        margin-bottom: 4px;
      }

      p {
        color: #999;
      }

      &:after,
      &:before {
        content: " ";
        position: absolute;
        left: -16px;
        z-index: 1;
        background-color: #f5f5f9;
        width: 20px;
        height: 10px;
      }

      &:before {
        top: 0;
        border-radius: 0 0 20px 20px;
      }

      &:after {
        bottom: 0;
        border-radius: 20px 20px 0 0;
      }
    }

    & + .coupon-item {
      margin-top: 10px;
    }
  }
</style>
