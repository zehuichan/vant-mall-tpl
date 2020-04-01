<template>
  <div class="home">
    <div class="search-bar fixed">
      <div class="search-field search-field__value">
        <van-search :label="city" placeholder="搜索" readonly @click.native="onClick('/home/search')"/>
      </div>
      <div class="search-icon tap-active">
        <i class="iconfont icon-scanning"></i>
      </div>
    </div>

    <van-swipe class="swipe" autoplay="3000" @change="swipeChange">
      <van-swipe-item v-for="(item, index) in banner" :key="index">
        <van-image width="100%" height="100%" lazy-load :src="item.imgUrl"/>
      </van-swipe-item>
      <template #indicator>
        <div class="indicator box-shadow shadow-1-down">
          <div
              class="dots"
              v-for="(swipe, index) in banner.length"
              :class="[current_swipe >= index ? 'on' : '']"
              :key="index"
          />
        </div>
      </template>
    </van-swipe>

    <div class="banner">
      <div class="inner">
        <van-image
            width="100%"
            height="100%"
            src="https://mall.s.maizuo.com/80a7da098548191c431dfd09c50f9e4b.jpg?x-oss-process=image/resize,w_563"
        />
      </div>
    </div>

    <!-- 可配置一个或多个专题 -->
    <div class="topic" v-for="(elem, index) in topics" :key="index">
      <div class="topic-header van-clearfix">
        <div class="title fl">{{ elem.masterTitle }}</div>
        <div class="more fr" @click="onClick('../product/list')">
          <span>更多</span>
          <van-icon name="arrow"/>
        </div>
      </div>
      <div class="topic-banner box-shadow light">
        <van-image width="100%" height="160rpx" lazy-load :src="elem.banner.imgUrl"></van-image>
      </div>
      <van-row custom-class="products" gutter="16">
        <van-col span="8" v-for="(item, idx) in elem.productList" :key="idx">
          <product
              :thumb="item.sku.imgUrl"
              :title="item.masterName"
              :desc="item.slaveName"
              :price="item.sku.price"
              :origin-price="item.sku.marketPrice"
              :tags="item.labels&&item.labels.common"
              size="xs"
              @click.native="onClick('../product/detail')"
          />
        </van-col>
      </van-row>
    </div>

    <!-- 推荐商品优先配置2n个 -->
    <div class="topic">
      <div class="topic-header mb van-clearfix">
        <div class="title fl">推荐商品</div>
      </div>
      <van-row custom-class="products" gutter="16">
        <van-col span="12" v-for="(item, index) in guess" :key="index">
          <product
              :thumb="item.sku.imgUrl"
              :title="item.masterName"
              :desc="item.slaveName"
              :price="item.sku.price"
              :origin-price="item.sku.marketPrice"
              :tags="item.labels.common"
              @click.native="onClick('../product/detail')"
          />
        </van-col>
      </van-row>
    </div>

    <div class="page-wrapper">
      <divider>zehui chan design.</divider>
    </div>
  </div>
</template>

<script>
  // components
  import {Search, Swipe, SwipeItem, Row, Col, Image, Icon} from 'vant'
  import Product from '@/components/Product'
  import Divider from '@/components/Divider'
  import Split from '@/components/Split'

  // mockData
  import {banner, topics, guess} from './mock.js'

  export default {
    name: 'home',
    data() {
      return {
        location: '',
        city: '定位中',

        current_swipe: 0,
        banner: [],
        topics: [],
        guess: []
      }
    },
    created() {
      // 定位
      this._getLocation()

      this._getIndex()
    },
    methods: {
      _getLocation() {
        const self = this
        this.$amap().then((AMap) => {
          AMap.plugin('AMap.Geolocation', function () {
            const geolocation = new AMap.Geolocation()
            geolocation.getCityInfo((status, result) => {
              if (status === 'complete') {
                // 查询成功，result即为当前所在城市信息
                self.city = result.city.replace(/市/g, '')
              } else {
                self.city = '定位失败'
              }
            })
          })
        })
      },
      _getIndex() {
        this.banner = banner.data
        this.topics = topics.data
        this.guess = guess.data.list
      },
      swipeChange(index) {
        this.current_swipe = index
      },
      onClick(url) {
        this.$navigateTo(url)
      },
    },
    components: {
      [Search.name]: Search,
      [Swipe.name]: Swipe,
      [SwipeItem.name]: SwipeItem,
      [Row.name]: Row,
      [Col.name]: Col,
      [Image.name]: Image,
      [Icon.name]: Icon,
      Product,
      Divider,
      Split,
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="less" rel="stylesheet/less" type="text/less">
  @import "~@/assets/less/var.less";

  .home {
    padding-top: 54px;

    .swipe {
      height: 210px;

      .indicator {
        position: absolute;
        bottom: 10px;
        right: 10px;
        background-color: rgba(255, 255, 255, 0.4);
        width: 80px;
        height: 4px;
        border-radius: 1px;
        overflow: hidden;
        display: flex;

        .dots {
          width: 0;
          background-color: rgba(255, 255, 255, 1);
          transition: all 0.3s ease-out;

          &.on {
            width: (100% / 7);
          }
        }
      }
    }
  }

  .banner {
    background-color: #f7f7f7;
    padding: 8px 0;
    width: 100%;
    overflow: hidden;

    .inner {
      height: 85px;
    }
  }

  .topic {
    padding: 16px;
    background-color: #fff;

    & + .topic {
      margin-top: 10px;
    }

    .topic-header {
      &.mb {
        margin-bottom: 16px;
      }

      .title {
        font-weight: 500;
      }

      .more {
        font-size: @font12;
        color: @text-l;
        display: flex;
        align-items: center;
        justify-content: center;
      }
    }

    .topic-banner {
      margin: 16px 0;
      height: 80px;
      background-color: #e0e0e0;
    }
  }
</style>
