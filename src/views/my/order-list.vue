<template>
  <div class="order-list">
    <van-nav-bar
        :left-text="$route.meta.title"
        left-arrow
        @click-left="onClickLeft"
    />
    <van-tabs :active="active" tab-active-class="tab-active" color="#c03131" @change="onChange">
      <van-tab title="全部"></van-tab>
      <van-tab title="待付款"></van-tab>
      <van-tab title="待发货"></van-tab>
      <van-tab title="待收货"></van-tab>
    </van-tabs>
    <van-list v-model="loading" :finished="finished">
      <div class="page-wrapper padded">
        <card v-for="(item, index) in list" :key="index">
          <div slot="header" class="van-clearfix">
            <div class="fl">订单编号：{{ item.payOrderId }}</div>
            <div class="fr">
              <van-tag color="#ff5000">已取消</van-tag>
            </div>
          </div>
          <div class="order-cont" @click="onClick('/my/order-detail')">
            <div class="order-item" v-for="subItem in item.skuList" :key="subItem.productId">
              <div class="thumb">
                <van-image width="100%" height="100%" :src="subItem.imgUrl"/>
              </div>
              <div class="order-body">
                <div class="tit ellipsis-2">{{ subItem.productName }}</div>
                <div class="desc">{{ subItem.name }}</div>
              </div>
              <div class="order-extra">
                <div class="price">￥ {{ subItem.price | format }}</div>
                <div class="num">x{{ subItem.count }}</div>
              </div>
            </div>
          </div>
          <div slot="extra" class="order-price text-right">
            <span>共 {{ item.skuList.length }} 件商品 合计：</span>
            <span class="price">
              <span class="unit">￥</span>
              {{ item.totalPrice | format }}
            </span>
            <span class="freight">(含运费￥{{ item.expressAmount | format }})</span>
          </div>
          <div slot="footer" class="order-footer text-right">
            <van-button size="mini" plain type="default">删除订单</van-button>
            <van-button size="mini" plain type="default">重新购买</van-button>
          </div>
        </card>
      </div>
    </van-list>
  </div>
</template>

<script>
  // components
  import {NavBar, Tab, Tabs, List, Tag, Image, Button} from 'vant'
  import Card from '@/components/Card'

  // mockData
  import {list} from './mock.js'

  export default {
    data() {
      return {
        active: this.$route.query.active,
        loading: false,
        finished: false,
        list: []
      }
    },
    created() {
      this.fetchList()
    },
    methods: {
      onClickLeft() {
        this.$navigateBack()
      },
      onChange(event) {
      },
      fetchList() {
        this.loading = true
        this.list = list
        this.loading = false
        this.finished = true
      },
      onClick(url, json) {
        this.$navigateTo(url, json)
      }
    },
    components: {
      [NavBar.name]: NavBar,
      [Tab.name]: Tab,
      [Tabs.name]: Tabs,
      [List.name]: List,
      [Tag.name]: Tag,
      [Image.name]: Image,
      [Button.name]: Button,
      Card
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="less" rel="stylesheet/less" type="text/less">
  @import "~@/assets/less/var.less";

  .order-list {
    .tab-active {
      color: #c03131;
    }
  }

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
      height: 60px;
      margin-right: 8px;
      background-color: #f4f4f4;
      border-radius: 2px;
    }

    .order-body {
      flex: 1;
      width: 100%;
      min-width: 0;
      margin-right: 8px;

      .tit {
        font-size: @font13;
      }

      .desc {
        color: @text-l;
      }
    }

    .order-extra {
      text-align: right;

      .num {
        color: @text-l;
      }
    }
  }

  .order-price {
    width: 100%;
    color: @text;

    .price {
      font-size: @font14;
      color: @primary;
      margin-right: 5px;

      .unit {
        font-size: @font11;
      }
    }
  }

  .order-footer {
    .van-button + .van-button {
      margin-left: 10px;
    }
  }
</style>
