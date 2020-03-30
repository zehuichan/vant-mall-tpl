<template>
  <card shadow="never">
    <div slot="header">商品信息</div>
    <div class="order-cont">
      <div class="order-item" v-for="(item, index) in skuList" :key="index">
        <div class="thumb">
          <van-image width="100%" height="100%" :src="item.imgUrl"/>
        </div>
        <div class="order-body">
          <div class="tit van-multi-ellipsis--l2">{{ item.productName }}</div>
          <div class="desc">{{ item.name }}</div>
        </div>
        <div class="order-extra">
          <div class="price">￥{{ item.price | format }}</div>
          <div class="origin-price">￥{{ item.price | format }}</div>
          <div class="num">x{{ item.count }}</div>
        </div>
      </div>
    </div>
    <div slot="extra" class="order-price">
      <div class="order-price-item price-red-font">
        <span class="label">商品金额</span>
        <span class="value">￥{{ price | format }}</span>
      </div>
      <div class="order-price-item">
        <span class="label">运费</span>
        <span class="value">+ ￥{{ express | format }}</span>
      </div>
    </div>
  </card>
</template>

<script>
  // components
  import {Image} from 'vant'
  import Card from '@/components/Card'

  export default {
    props: {
      skuList: {
        type: Array,
        default: () => []
      },
      express: {
        type: Number,
        default: () => 0
      }
    },
    computed: {
      price() {
        return this.skuList.reduce((prev, curr) => curr.price + prev, 0)
      }
    },
    components: {
      [Image.name]: Image,
      Card
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="less" rel="stylesheet/less" type="text/less">
  @import "~@/assets/less/var.less";

  .order-cont {
    width: 100%;
  }

  .order-item {
    display: flex;
    width: 100%;

    & + .order-item {
      margin-top: 10px;
    }

    .thumb {
      flex: 0 0 60px;
      width: 60px;
      min-width: 0;
      height: 60px;
      margin-right: 8px;
      background-color: #f4f4f4;
    }

    .order-body {
      flex: 1;
      width: 100%;
      min-width: 0;
      margin-right: 8px;

      .tit {
        font-size: @font13;
        font-weight: 500;
      }

      .desc {
        font-size: @font12;
        color: @text-l;
      }
    }

    .order-extra {
      text-align: right;

      .price {
        font-weight: 500;
      }

      .origin-price {
        font-size: @font11;
        color: @text-l;
        text-decoration: line-through;
      }

      .num {
        color: #999;
      }
    }
  }

  .order-price {
    width: 100%;
    color: #333;

    .order-price-item {
      display: flex;
      line-height: 25px;

      &.price-red-font {
        .value {
          color: #f44;
          font-weight: 500;
        }
      }

      .label,
      .value {
        display: inline-block;
      }

      .label {
        flex: 0 0 100px;
        width: 100px;
        min-width: 0;
      }

      .value {
        flex: 1;
        width: 100%;
        min-width: 0;
        text-align: right;
      }
    }
  }
</style>
