<template>
  <div class="my">
    <div class="my-header">
      <div class="avatar" @click="onClick('/my/account')">
        <van-image width="100%" height="100%" :src="avatar"/>
      </div>
      <div class="nick-name">{{mobile | formatPhone}}</div>
    </div>

    <div class="my-body page-wrapper padded">
      <card shadow="never">
        <div slot="header" class="van-clearfix">
          <div class="title fl">我的订单</div>
          <div class="extra fr" @click="onClick('/my/order-list', { active: 0 })">
            查看更多订单
            <van-icon name="arrow"/>
          </div>
        </div>
        <!-- 订单状态需在api返回 -->
        <div class="my-order-tab">
          <van-row>
            <van-col span="6">
              <div class="my-order-tab--item tap-active" @click="onClick('/my/order-list', { active: 1 })">
                <div class="icon">
                  <i class="iconfont icon-wallet"></i>
                </div>
                <div class="txt">待付款</div>
              </div>
            </van-col>
            <van-col span="6">
              <div class="my-order-tab--item tap-active" @click="onClick('/my/order-list', { active: 2 })">
                <div class="icon">
                  <i class="iconfont icon-packaging"></i>
                </div>
                <div class="txt">待发货</div>
              </div>
            </van-col>
            <van-col span="6">
              <div class="my-order-tab--item tap-active" @click="onClick('/my/order-list', { active: 3 })">
                <div class="icon">
                  <i class="iconfont icon-landtransportation"></i>
                </div>
                <div class="txt">待收货</div>
              </div>
            </van-col>
            <van-col span="6">
              <div class="my-order-tab--item tap-active">
                <div class="icon">
                  <i class="iconfont icon-tuishuirongzi"></i>
                </div>
                <div class="txt">退款/售后</div>
              </div>
            </van-col>
          </van-row>
        </div>
      </card>
    </div>

    <div class="page-wrapper">
      <van-cell-group :border="false">
        <van-cell title="我的积分" value="可用积分 0.00" clickable is-link @click="onClick('/my/integral')">
          <div slot="icon" class="my-icon text-aux-warning iconfont icon-credit-level"></div>
        </van-cell>
        <van-cell title="我的卡券" value="可用卡券 0 张" clickable is-link @click="onClick('/my/coupon')">
          <div slot="icon" class="my-icon text-aux-danger iconfont icon-coupons"></div>
        </van-cell>
        <van-cell title="收货地址管理" clickable is-link @click="onClick('/my/address')">
          <div slot="icon" class="my-icon text-aux-primary iconfont icon-map"></div>
        </van-cell>
        <van-cell title="客服" clickable is-link>
          <div slot="icon" class="my-icon text-aux-success iconfont icon-listing-content"></div>
        </van-cell>
      </van-cell-group>
      <split/>
      <van-cell-group :border="false">
        <van-cell title="设置" iclickable is-link>
          <div slot="icon" class="my-icon text-aux-default iconfont icon-set"></div>
        </van-cell>
        <van-cell title="语言">
          <div slot="icon" class="my-icon text-aux-warning iconfont icon-multi-language"></div>
          <lang-selector/>
        </van-cell>
      </van-cell-group>
    </div>
    <create-by/>
  </div>
</template>

<script>
  // vuex
  import {mapGetters} from 'vuex'
  // components
  import {Row, Col, Cell, CellGroup, Button, Icon, Image} from 'vant'
  import Card from '@/components/Card'
  import LangSelector from '@/components/LangSelector'
  import Split from '@/components/Split'

  export default {
    name: 'my',
    data() {
      return {}
    },
    computed: {
      ...mapGetters(['avatar', 'mobile', 'gender', 'birthday', 'nickname'])
    },
    methods: {
      onClick(url, json) {
        this.$navigateTo(url, json)
      }
    },
    components: {
      [Row.name]: Row,
      [Col.name]: Col,
      [Cell.name]: Cell,
      [CellGroup.name]: CellGroup,
      [Button.name]: Button,
      [Icon.name]: Icon,
      [Image.name]: Image,
      Card,
      LangSelector,
      Split,
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="less" rel="stylesheet/less" type="text/less">
  @import "~@/assets/less/var.less";

  .my {
    .my-header {
      background-size: cover;
      background-image: url(~@/assets/img/bg.png);
      padding: 64px 16px 32px;
      display: flex;
      align-items: center;

      .avatar {
        width: 60px;
        height: 60px;
        margin-right: 16px;
      }

      .nick-name {
      }
    }

    .my-body {
      .title {
      }

      .extra {
        .van-icon {
          font-size: 10px;
          font-weight: 700;
        }
      }

      .my-order-tab {
        text-align: center;
        width: 100%;

        .my-order-tab--item {
          padding: 10px 0;
        }

        .icon {
          .iconfont {
            font-size: @font28;
            line-height: 1;
            color: @text-l;
          }
        }
      }
    }

    .my-icon {
      font-size: @font20;
      margin-right: 5px;
    }
  }
</style>
