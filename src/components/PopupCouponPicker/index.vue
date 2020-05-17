<template>
  <div class="popup-coupon-picker van-cell">
    <van-field
        v-bind="$props"
        :value="$options.filters.format(text, 2, '- ￥') || ''"
        readonly
        clickable
        @click-input="onClick">
      <van-popup
          class="popup-coupon bg-color"
          v-model="show"
          closeable
          close-icon="close"
          slot="extra"
          position="bottom"
          get-container="body"
          @closed="handleClose"
      >
        <van-nav-bar title="选择优惠券"/>
        <div class="page-container padded">
          <coupon-list
              v-model="checks"
              :source="source"
              show-checkbox
          />
        </div>
        <div class="btn-wrapper fixed-bottom padded">
          <van-row>
            <van-col span="12">
              <van-button type="default" block @click="handleConfirm('empty')">不使用优惠券</van-button>
            </van-col>
            <van-col span="12">
              <van-button type="primary" block @click="handleConfirm('checks')">确认</van-button>
            </van-col>
          </van-row>
        </div>
      </van-popup>
    </van-field>
  </div>
</template>

<script>
  // components
  import {Field, Popup, NavBar, Button, Col, Row} from 'vant'
  import CouponList from '@/components/CouponList'

  export default {
    name: 'popup-coupon-picker',
    model: {
      prop: 'value',
      event: 'input'
    },
    props: {
      // Field.props
      ...Field.props,

      source: {
        type: Array,
        default: () => []
      },
      value: {
        type: Array,
        default: () => []
      },
      placeholder: String,
    },
    data() {
      return {
        show: false,
        checks: this.value
      }
    },
    computed: {
      text() {
        return this.source.filter(item => this.value.includes(item.id)).reduce((prev, curr) => curr.reduce_money + prev, 0)
      }
    },
    methods: {
      handleClose() {
        this.show = false
      },
      onClick() {
        this.checks = this.value
        this.show = true
      },
      handleConfirm(type) {
        this.$emit('input', type === 'checks' ? this.checks : [])
        this.$emit('change', type === 'checks' ? this.checks : [])
        this.show = false
      },
    },
    components: {
      [Field.name]: Field,
      [Popup.name]: Popup,
      [NavBar.name]: NavBar,
      [Button.name]: Button,
      [Col.name]: Col,
      [Row.name]: Row,
      CouponList
    }
  }
</script>


<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="less" rel="stylesheet/less" type="text/less">
  .popup-coupon-picker.van-cell {
    padding: 0;
  }

  .popup-coupon {
    height: 80%;
    min-height: 0;
    display: flex;
    flex-direction: column;
    padding-bottom: 76px;

    .page-container {
      flex: 1;
      overflow-y: scroll;
    }
  }
</style>
