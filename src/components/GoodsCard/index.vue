<template>
  <div class="goods-card__items" :class="classes">
    <van-checkbox class="goods-card__checker" v-if="showCheckbox" :name="name"/>
    <van-card
        class="goods-card__content"
        :price="$options.filters.format(price)"
        :origin-price="$options.filters.format(originPrice)"
        :desc="desc"
        :thumb="thumb"
        centered
        @click-thumb="$emit('click-thumb')"
    >
      <div class="van-card__title van-multi-ellipsis--l2" slot="title">
        {{title}}id:{{name}}
      </div>
      <div slot="tags">
        <van-tag :type="formatTag(tag&&tag.name)" plain>{{tag&&tag.name || '测试'}}</van-tag>
      </div>
      <van-stepper
          slot="num"
          :value="num"
          :max="stock"
          async-change
          integer
          @change="onChange"
          @overlimit="onOverlimit"
      />
    </van-card>
  </div>
</template>

<script>
  // vuex
  import {mapActions} from 'vuex'
  // components
  import {Checkbox, Card, Stepper, Tag} from 'vant'

  export default {
    name: 'goods-item',
    props: {
      name: [Number, String],
      desc: String,
      thumb: String,
      title: String,
      num: [Number, String],
      stock: [Number, String],
      price: [Number, String],
      originPrice: [Number, String],
      showCheckbox: {
        type: Boolean,
        default: false
      },
    },
    data() {
      return {
        tag: {
          name: '测试'
        }
      }
    },
    computed: {
      classes() {
        return this.showCheckbox ? 'has-checkbox' : ''
      }
    },
    methods: {
      formatTag(name = '') {
        const OTC = name.includes('OTC')
        const RX = name.includes('RX')
        const Others = !name.includes('OTC') && !name.includes('RX')
        if (OTC) {
          return 'primary'
        }
        if (RX) {
          return 'success'
        }
        if (Others) {
          return 'warning'
        }

        return 'primary'
      },
      onChange(val) {
        this['cart/changeItems']({productId: this.name, num: val})
      },
      onOverlimit(event) {
        const self = this
        if (event === 'plus') {
          this.$toast('亲，该宝贝不能购买更多哦~')
        } else {
          this.$dialog
            .confirm({
              message: '确定要删除这个商品吗？'
            })
            .then(() => {
              self['cart/deleteItems'](this.name)
            })
            .catch(() => {
            })
        }
      },
      ...mapActions([
        'cart/changeItems',
        'cart/deleteItems',
      ])
    },
    components: {
      [Checkbox.name]: Checkbox,
      [Card.name]: Card,
      [Stepper.name]: Stepper,
      [Tag.name]: Tag,
    },
  }
</script>


<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="less" rel="stylesheet/less" type="text/less">
  .goods-card__items {
    position: relative;
    width: 100%;

    &.has-checkbox {
      padding-left: 30px;

      .goods-card__checker {
        position: absolute;
        left: 0;
        top: 50%;
        z-index: 1;
        margin-top: -10px;
      }
    }

    .goods-card__content {
      position: relative;
      background-color: #fff;
      width: 100%;
    }

    .van-card__desc,
    .van-card__bottom {
      line-height: 25px;
    }

    .van-card__price {
      color: #f44;
    }
  }
</style>
