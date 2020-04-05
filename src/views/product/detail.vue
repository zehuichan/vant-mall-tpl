<template>
  <div class="product-detail">
    <div class="nav-back">
      <div class="inner tap-active" @click="onClickLeft">
        <van-icon name="arrow-left" size="18px"/>
      </div>
    </div>
    <div class="swipe">
      <van-swipe class="swipe-box" autoplay="3000" @change="swipeChange">
        <van-swipe-item v-for="(item, index) in swipes" :key="index">
          <van-image width="100%" height="100%" lazy-load :src="item"/>
        </van-swipe-item>
        <template #indicator>
          <div class="indicator">{{ current_swipe + 1 }} / {{ swipes.length }}</div>
        </template>
      </van-swipe>
    </div>
    <div class="detailed">
      <div class="title van-multi-ellipsis--l2">Fabric Lab 男款高领羊毛衫</div>
      <div class="desc van-ellipsis">精仿羊毛混纺 保暖御寒 复古时尚</div>
      <div class="price van-clearfix">
        <div class="new fl">
          <span class="unit">￥</span>
          <span class="value">279</span>
        </div>
        <div class="old fl">
          <span class="unit">￥</span>
          <span class="value">279</span>
        </div>
        <div class="sale fr">634人购买</div>
      </div>
    </div>
    <div class="attrs van-hairline--top">
      <div class="attrs-item" v-for="item in attr_list" :key="item.attrId">
        <span class="iconfont icon-success"></span>
        {{ item.attrValue }}
      </div>
    </div>
    <split/>
    <div class="introduce">
      <div class="title">
        <div class="inner-text">商品详情</div>
      </div>
      <div class="rich-text" v-html="content"></div>
    </div>
    <create-by/>
    <van-goods-action>
      <van-goods-action-icon icon="shop-o" text="首页" @click="onClickIcon"/>
      <van-goods-action-icon icon="shopping-cart-o" text="购物车" :badge="items_length" @click="onClickIcon"/>
      <van-goods-action-button text="加入购物车" type="warning" @click="onClickButton"/>
      <van-goods-action-button text="立即购买" type="danger" @click="onClickButton"/>
    </van-goods-action>
  </div>
</template>

<script>
  // vuex
  import {mapGetters} from 'vuex'
  // components
  import {Icon, Image, Swipe, SwipeItem, GoodsAction, GoodsActionIcon, GoodsActionButton} from 'vant'
  import Split from '@/components/Split'

  const SUCCESS_CONTENT =
    '<div><img style="width: 750px; height: 930px;" src="https://mall.s.maizuo.com/78f631d4ecf38ac5ef489a3b706b12b1.jpg" alt=""><img style="width: 750px; height: 921px;" src="https://mall.s.maizuo.com/91f344c1751f39652d0821639cf46ae2.jpg" alt=""><img style="width: 750px; height: 1204px;" src="https://mall.s.maizuo.com/0d5863399be4a917f075d8bd1f4757a9.jpg"><img style="width: 750px; height: 640px;" src="https://mall.s.maizuo.com/177486c3ac18653416b34d59f36a2227.jpg"><img style="width: 750px; height: 374px;" src="https://mall.s.maizuo.com/280fb9d654dddccc151f14fad31eb4ed.jpg"><img style="width: 750px; height: 691px;" src="https://mall.s.maizuo.com/6359556d2e2f7faf98c0bd1ba230b5b1.jpg"><img style="width: 750px; height: 279px;" src="https://mall.s.maizuo.com/780c2985856ab733aff5d4caea633eb4.jpg"><img style="width: 750px; height: 891px;" src="https://mall.s.maizuo.com/89733dce281a0d51bb74d9cd10a47718.jpg"><img style="width: 750px; height: 773px;" src="https://mall.s.maizuo.com/30989ae5ab0fd41f8b16329d638be634.jpg"><img style="width: 750px; height: 353px;" src="https://mall.s.maizuo.com/8d5569a33005f97fcb4b28c049008e3f.jpg"><img style="width: 750px; height: 1050px;" src="https://mall.s.maizuo.com/51b3566653772b361d7033aa6cf42b63.jpg"><img style="width: 750px; height: 923px;" src="https://mall.s.maizuo.com/d588a33a489bcaee263cdff3faa07924.jpg"><img style="width: 750px; height: 1003px;" src="https://mall.s.maizuo.com/7b78be00e034f95051cd399670a5c549.jpg"><img style="width: 750px; height: 1130px;" src="https://mall.s.maizuo.com/aec3ae9162886e9676e83f16c69fff7c.jpg" alt=""><img style="width: 750px; height: 1066px;" src="https://mall.s.maizuo.com/ac19396593fd4d826b3cc7b738de3dee.jpg" alt=""><img style="width: 750px; height: 964px;" src="https://mall.s.maizuo.com/48ea077baa258838ddb22add1358198d.jpg" alt=""><img style="width: 750px; height: 227px;" src="https://mall.s.maizuo.com/7d3c8de581dd2878c64156461cdfd727.jpg" alt=""><br></div>'

  export default {
    name: 'product-detail',
    data() {
      return {
        swipes: [
          'https://mall.s.maizuo.com/2adcb0fdbedcd1c92489362f45f15903.png?x-oss-process=image/resize,w_563',
          'https://mall.s.maizuo.com/42ba066e26e392f467d707a998416eb4.jpg?x-oss-process=image/resize,w_563',
          'https://mall.s.maizuo.com/01879d5b887a055f51e3c92637357af1.jpg?x-oss-process=image/resize,w_563',
          'https://mall.s.maizuo.com/252929e2e93c836a3affdc1c7779fe40.jpg?x-oss-process=image/resize,w_563'
        ],
        current_swipe: 0,
        attr_list: [
          {attrId: 1001, attrName: 'serviceRule', attrValue: '正品保证'},
          {attrId: 1002, attrName: 'serviceRule', attrValue: '满99元包邮'},
          {attrId: 1003, attrName: 'serviceRule', attrValue: '7天无理由退换货'}
        ],
        content: []
      }
    },
    computed: {
      ...mapGetters([
        'items_length'
      ])
    },
    created() {
      this.content = SUCCESS_CONTENT
    },
    methods: {
      onClickLeft() {
        this.$navigateBack()
      },
      // 轮播图指示器
      swipeChange(index) {
        this.current_swipe = index
      },
      onClickIcon() {
        this.$toast('点击图标')
      },
      onClickButton() {
        this.$toast('点击按钮')
      }
    },
    components: {
      [Icon.name]: Icon,
      [Image.name]: Image,
      [Swipe.name]: Swipe,
      [SwipeItem.name]: SwipeItem,
      [GoodsAction.name]: GoodsAction,
      [GoodsActionIcon.name]: GoodsActionIcon,
      [GoodsActionButton.name]: GoodsActionButton,
      Split
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="less" rel="stylesheet/less" type="text/less">
  @import "~@/assets/less/var.less";

  .product-detail {
    position: relative;
    padding-bottom: 50px;

    .nav-back {
      position: fixed;
      left: 0;
      top: 0;
      z-index: 2;
      width: 56px;
      height: 56px;
      display: flex;
      align-items: center;
      justify-content: center;

      .inner {
        display: flex;
        align-items: center;
        justify-content: center;
        width: 30px;
        height: 30px;
        border-radius: 50%;
        background-color: rgba(255, 255, 255, .8);
      }
    }

    .swipe {
      position: relative;
      width: 100%;
      height: 0;
      padding-top: 100%;
      background: #f9f9f9;

      .swipe-box {
        overflow: hidden;
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;

        .indicator {
          position: absolute;
          bottom: 10px;
          right: 10px;
          color: @text;
          font-size: @font12;
          padding: 2px 8px;
          background-color: #f9f9f9;
          border: 1px solid @text-l;
        }
      }
    }

    .detailed {
      padding: 15px;
      background-color: #fff;

      .title {
        font-size: @font15;
        max-height: 44px;
      }

      .desc {
        font-size: @font13;
        color: #797d82;
        margin-top: 8px;
      }

      .price {
        margin-top: 10px;
        height: 30px;
        font-size: @font20;

        .new {
          color: @primary;
          font-weight: 500;
        }

        .old {
          color: @text-ll;
          font-size: @font12;
          text-decoration: line-through;
          margin-top: 9px;
          margin-left: 8px;
        }

        .sale {
          color: @text-ll;
          font-size: @font12;
          margin-top: 9px;
        }

        .unit {
          font-size: 50%;
        }
      }
    }

    .attrs {
      background-color: #fff;
      font-size: @font12;
      color: @text-l;

      .attrs-item {
        display: inline-block;
        line-height: 24px;
        padding: 10px 0 10px 15px;

        .iconfont {
          font-size: @font20;
          color: @primary;
          line-height: 1;
          vertical-align: -3px;
          margin-right: 3px;
        }
      }
    }

    .introduce {
      background-color: #fff;

      .title {
        font-size: @font13;
        text-align: center;
        padding: 22px 0;

        .inner-text {
          position: relative;
          text-align: center;
          font-weight: 400;
          color: @text-l;

          &:before {
            left: 35.5%;
          }

          &:after {
            right: 35.5%;
          }

          &:before,
          &:after {
            content: '';
            position: absolute;
            top: 52%;
            background-color: #ededed;
            width: 18px;
            height: 1px;
          }
        }
      }

      .rich-text {
        img {
          display: block;
          width: 100% !important;
          height: 100% !important;
        }
      }
    }
  }
</style>
