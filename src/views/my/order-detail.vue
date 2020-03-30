<template>
  <div class="order-detail">
    <van-nav-bar
        :left-text="$route.meta.title"
        left-arrow
        @click-left="onClickLeft"
    />
    <contact-card :value="delivery" disabled/>
    <split/>
    <order-card :sku-list="sku_list" :express="1800"/>
    <split/>
    <div class="order-info">
      <div class="tit">订单信息</div>
      <div class="info-list">
        <div>
          <div class="item van-clearfix">
            <span class="label">订单编号</span>
            {{ order_info.payOrderId | maskerFilter('9999 9999 9999 9999 999') }}
            <span class="fr" style="line-height: 20px;">
              <van-button size="mini" type="default" @click="clipboard(order_info.payOrderId,$event)">复制</van-button>
            </span>
          </div>
          <div class="item">
            <span class="label">创建订单时间</span>
            {{ order_info.createdAt | parseTime }}
          </div>
          <div class="item">
            <span class="label">支付成功时间</span>
            {{ order_info.format_pay_time || '--' }}
          </div>
          <div class="item">
            <span class="label">交易完成时间</span>
            {{ order_info.format_transaction_time || '--' }}
          </div>
        </div>
      </div>
    </div>
    <div class="btn-wrapper fixed-bottom tool-bar">
      <div class="total fl">实付款(含运费)：￥101.00</div>
      <div class="fr">
        <van-button type="default" size="small">删除订单</van-button>
        <van-button type="default" size="small">重新购买</van-button>
      </div>
    </div>
  </div>
</template>

<script>
  // utils
  import clip from '@/utils/clipboard'
  // components
  import {NavBar, Button} from 'vant'
  import ContactCard from '@/components/ContactCard'
  import OrderCard from '@/components/OrderCard'
  import Split from '@/components/Split'

  // mockData
  import {detail} from './mock.js'

  export default {
    data() {
      return {
        delivery: {},
        sku_list: [],
        order_info: {}
      }
    },
    created() {
      this.fetchDetail()
    },
    methods: {
      onClickLeft() {
        this.$navigateBack()
      },
      fetchDetail() {
        this.$toast.loading('加载中...')
        this.delivery = detail.delivery
        this.sku_list = detail.skuList
        this.order_info = detail
      },
      clipboard(text, event) {
        clip(text, event)
      }
    },
    components: {
      [NavBar.name]: NavBar,
      [Button.name]: Button,
      ContactCard,
      OrderCard,
      Split
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="less" rel="stylesheet/less" type="text/less">
  @import "~@/assets/less/var.less";

  .order-detail {
    .order-info {
      background-color: #fff;
      padding: 16px;

      .tit {
        border-left: 2px solid @primary;
        padding-left: 8px;
        margin-bottom: 16px;
        color: @text;
        font-size: @font14;
      }

      .info-list {
        color: @text-l;
        font-size: @font12;
        line-height: 24px;

        .item {
          .label {
            width: 72px;
            display: inline-block;
            margin-right: 10px;
          }
        }
      }
    }

    .total {
      font-size: @font12;
      line-height: 30px;
      font-weight: 500;
    }
  }
</style>
