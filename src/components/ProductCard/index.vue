<template>
  <van-checkbox-group v-model="checked" @change="onCheckboxGroupChange">
    <div class="product-card has-checkbox" v-for="(item, index) in items" :key="index">
      <van-checkbox class="checker" :name="item.productId" checked-color="#c03131"/>
      <van-card
          class="body"
          price-class="price"
          :title="item.productName"
          :desc="item.options.join(' ')"
          :price="$options.filters.format(item.price)"
          :origin-price="$options.filters.format(item.marketPrice) || null"
      >
        <div class="thumb" slot="thumb" @click="$emit('click-thumb', item, index)">
          <van-image width="100%" height="100%" :src="item.imgUrl"/>
        </div>
        <div class="stepper" slot="num">
          <van-stepper
              :value="item.count"
              :max="item.inventory"
              async-change
              integer
              @change="onChange"
              @overlimit="onOverLimit"
          />
        </div>
      </van-card>
    </div>
  </van-checkbox-group>
</template>

<script>
  // vuex
  import {mapMutations} from 'vuex'
  // components
  import {Checkbox, CheckboxGroup, Card, Image, Stepper} from 'vant'

  export default {
    name: 'ProductCard',
    model: {
      prop: 'value',
      event: 'input'
    },
    props: {
      value: {
        type: Array,
        default: () => []
      },
      items: {
        type: Array,
        default: () => []
      }
    },
    data() {
      return {
        checked: this.value
      }
    },
    watch:{
      checked(val){
        console.log(val)
      }
    },
    methods: {
      onCheckboxGroupChange(names) {
        this.$emit('input', names)
        this.$emit('change', names)
      },
      onChange(productId, event) {
        this['cart/changeItems']({productId: productId, count: event.detail})
      },
      onOverLimit(productId, event) {
        const self = this
        if (event.detail === 'plus') {
          this.$toast('亲，该宝贝不能购买更多哦~')
        }
        if (event.detail === 'minus') {
          this.$dialog
            .confirm({
              message: '确定要删除这个商品吗？'
            })
            .then(() => {
              self['cart/deleteItems'](productId)
            })
            .catch(() => {
            })
        }
      },
      ...mapMutations(['cart/updateItems', 'cart/changeItems', 'cart/deleteItems'])
    },
    components: {
      [Checkbox.name]: Checkbox,
      [CheckboxGroup.name]: CheckboxGroup,
      [Card.name]: Card,
      [Image.name]: Image,
      [Stepper.name]: Stepper,
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="less" rel="stylesheet/less" type="text/less">
  .product-card {
    position: relative;
    width: 100%;
    background-color: #fff;
    margin-bottom: 10px;
    border-radius: 2px;

    &.has-checkbox {
      padding-left: 46px;

      .checker {
        position: absolute;
        left: 13px;
        top: 50%;
        z-index: 1;
        margin-top: -8px;
      }
    }

    .body {
      position: relative;
      background-color: #fff;
      width: 100%;
      padding-left: 0;
    }

    .thumb {
      background-color: #f8f8f8;
      border-radius: 2px;
      width: 88px;
      height: 88px;
    }

    .price {
      color: #c03131;
      font-weight: 500;
    }

    .stepper {
      position: absolute;
      right: 0;
      bottom: 0;
      z-index: 10;
    }
  }
</style>
