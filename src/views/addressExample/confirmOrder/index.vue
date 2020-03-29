<template>
  <div class="confirmOrder">
    <van-nav-bar
        fixed
        left-text="确认订单"
        left-arrow
        @click-left="onClickLeft"
    />
    <!--contact-->
    <address-contact :data="current_address || default_address" @click.native="show_list = true"/>
    <!--list-->
    <address-list v-model="show_list" :list="address_list" :disabled="false" @add="onAdd" @edit="onEdit"
                  @select="onSelect"/>
    <!--edit-->
    <address-edit v-model="show_edit" :data="current_address"/>
    <split/>
    <x-card shadow="never">
      <div slot="header">商品信息</div>
      <div style="width: 100%;">
        <div class="goods-item" v-for="item in goods_data_detail" :key="item.id">
          <div class="goods__thumb">
            <van-image lazy-load width="100%" height="100%" :src="item.image"/>
          </div>
          <div class="goods__body">
            <div class="goods__body-title">{{item.name}}</div>
            <div class="goods__body-toolbar">x {{goods_data[item.id]}}</div>
          </div>
          <div class="goods__extra">
            <span class="price">￥ {{item[`${level}_price`] | format}}</span>
            <span class="original-price">{{item.v1_price | format}}</span>
          </div>
        </div>
      </div>
    </x-card>
    <split/>
    <van-cell-group>
      <van-field
          label="顺丰速运"
          :value="`+￥${$options.filters.format(freight_price)}`"
          readonly
          clickable
          input-align="right"
      />
      <popup-coupon-picker
          v-model="coupons"
          :source="coupon"
          label="优惠券"
          input-align="right"
          :placeholder="coupon_placeholder"
      />
    </van-cell-group>
    <split/>
    <div class="desc">
      <ul>
        <li>1、若卖家未在36小时内发货，您将获得48元现金及170元优惠券补偿。</li>
        <li>2、每件交易商品均由平台针对实物进行鉴别，鉴于商品价格波动性，同时每个款式每个尺码的商品出售时仅有一件等情况，故不支持退换差价。</li>
        <li>*提交订单即表示同意</li>
        <li>卡券ID：{{coupons}}</li>
        <li>(unit:fen)满减：{{reduce_money}}</li>
        <li>(unit:fen)商品：{{goods_total_price}}</li>
        <li>(unit:fen)邮费：{{freight_price}}</li>
        <li>(unit:fen)最后价格 = 商品 + 邮费 - 满减 = {{order_total_price}}</li>
      </ul>
    </div>
    <split/>
    <div class="btn-wrapper padded-mini fixed-bottom clearfix">
      <div class="fl">
        <span class="text">实付款：￥</span>
        <span class="price">{{order_total_price | format}}</span>
      </div>
      <div class="fr">
        <van-button type="primary" loading loading-type="spinner" loading-text="提交订单">提交订单</van-button>
      </div>
    </div>
  </div>
</template>

<script>
  // vuex
  import {mapGetters} from 'vuex'
  // components
  import {NavBar, Button, Field, CellGroup, Image} from 'vant'
  import AddressContact from '@/components/AddressContact'
  import AddressList from '@/components/AddressList'
  import AddressEdit from '@/components/AddressEdit'
  import PopupCouponPicker from '@/components/PopupCouponPicker'
  import Split from '@/components/Split'
  import XCard from '@/components/Card'

  export default {
    name: 'confirmOrder',
    data() {
      return {
        config: {},
        level: 'v2',
        goods_data_detail: [],
        coupons: [1, 2, 3, 4],
        goods_data: {714: 10},
        freight_price: 1800,

        current_address: null,
        show_list: false,
        show_edit: false
      }
    },
    computed: {
      coupon_placeholder() {
        return `${this.coupon.length}张可用` || '无优惠券可用'
      },
      // 满减
      reduce_money() {
        return this.coupon.filter(item => this.coupons.includes(item.id)).reduce((prev, curr) => curr.reduce_money + prev, 0)
      },
      // 商品
      goods_total_price() {
        return this.goods_data_detail.reduce((prev, curr) => curr[`${this.level}_price`] * this.goods_data[curr.id] + prev, 0)
      },
      // 最后价格
      order_total_price() {
        return this.goods_total_price + this.freight_price - this.reduce_money
      },
      ...mapGetters([
        'address_list',
        'chosen_address',
        'default_address',
        'coupon',
      ])
    },
    created() {
      this.getOrderConfig()
    },
    methods: {
      onClickLeft() {
        this.$router.push('/me')
      },
      onAdd() {
        this.current_address = null
        this.$nextTick(() => {
          this.show_edit = true
        })
      },
      onEdit(address) {
        this.current_address = address
        this.$nextTick(() => {
          this.show_edit = true
        })
      },
      onSelect(address) {
        this.current_address = address
        this.$nextTick(() => {
          this.show_list = false
        })
      },
      getOrderConfig() {
        this.goods_data_detail = [
          {
            approval_num: '国药准字Z20026714',
            barcode: '6923872200924',
            column_ids: ',3,',
            company: '广西源安堂药业有限公司',
            content: null,
            drug_type: '',
            goods_desc: null,
            goodscode: '1022406',
            id: 714,
            image: 'https://mall.s.maizuo.com/609e772bde6adb0e090dacf5f2208550.png',
            merchant: '福济药业',
            name: '银胡感冒散',
            pack_unit: '盒',
            period: '18',
            prescription_type: '',
            producing_area: '',
            properties: '普通药品',
            record_time: 1567869754,
            shortcode: 'YHGMS',
            standard: '2.2g*3袋',
            status: 1,
            stock: 10,
            troche: '外用散剂',
            type_id: 16,
            v1_price: 4000,
            v2_price: 3350,
            v3_price: 3350,
            v4_price: 3350,
            v5_price: 3350,
          }
        ]
      }
    },
    components: {
      [NavBar.name]: NavBar,
      [Button.name]: Button,
      [Field.name]: Field,
      [CellGroup.name]: CellGroup,
      [Image.name]: Image,
      AddressContact,
      AddressList,
      AddressEdit,
      PopupCouponPicker,
      Split,
      XCard,
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="less" rel="stylesheet/less" type="text/less">
  .confirmOrder {
    padding-top: 46px;
    padding-bottom: 60px;

    .original-price {
      font-size: 3.2vw;
      color: #999;
      text-decoration: line-through;
      padding-left: 2.13333vw;
    }

    .desc {
      padding: 8px 16px;
      background-color: #fff;
      line-height: 24px;
      color: #666;
      font-size: 12px;
      font-weight: 500;
    }

    .btn-wrapper {
      /*box-shadow: 0 2px 12px 0 rgba(0, 0, 0, .1);*/
      box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);


      .text,
      .price {
        color: #f44;
        font-weight: 600;
      }

      .price {
        line-height: 42px;
        font-size: 22px;
      }
    }

    .goods-item {
      display: flex;
      width: 100%;
      height: 60px;
      min-height: 60px;
      background-color: #fff;
      color: #333;

      & + .goods-item {
        margin-top: 10px;
      }

      .goods__thumb {
        flex: 0 0 60px;
        width: 60px;
        height: 60px;

        .van-image {
          background-color: #f4f4f4;
        }
      }

      .goods__body {
        position: relative;
        flex: 1;
        width: 100%;
        min-width: 0;
        margin-left: 16px;

        display: flex;
        flex-flow: column;

        &-title {
          margin: 0;
          max-height: 40px;
          font-size: 14px;
          font-weight: 700;
          color: #393939;
          overflow: hidden;
          text-overflow: ellipsis;
          display: -webkit-box;
          -webkit-line-clamp: 2;
          -webkit-box-orient: vertical;
        }

        &-toolbar {
          position: absolute;
          left: 0;
          bottom: 0;
          width: 100%;
          font-size: 12px;
          line-height: 20px;
          color: #999;
        }
      }

      .goods__extra {
        flex-shrink: 0;
        padding-left: 10px;
        text-align: right;
        font-size: 14px;
        font-weight: 700;
        color: #393939;
      }
    }
  }
</style>
