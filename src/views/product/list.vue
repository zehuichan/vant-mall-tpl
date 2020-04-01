<template>
  <div class="product-list">
    <div class="search-bar fixed">
      <div class="search-field search-field__alone">
        <van-search v-model="kw" placeholder="搜索"/>
      </div>
    </div>
    <div class="page-wrapper padded">
      <van-row gutter="16">
        <van-col span="12" v-for="item in list" :key="item.productId">
          <product
              :thumb="item.sku.imgUrl"
              :title="item.masterName"
              :desc="item.slaveName"
              :price="item.sku.price"
              @click.native="onClick('../product/detail')"
          />
        </van-col>
      </van-row>
      <load-more :loading="loading" :finished="finished"/>
      <create-by/>
    </div>
  </div>
</template>

<script>
  // components
  import {Search, Row, Col} from 'vant'
  import Product from '@/components/Product'
  import LoadMore from '@/components/LoadMore'
  // mockData
  import {list} from './mock.js'

  export default {
    name: 'product-list',
    data() {
      return {
        kw: '专题一',
        list: [],
        loading: true,
        finished: false
      }
    },
    created() {
      this._getProducts()
    },
    methods: {
      _getProducts() {
        this.list = list.data.list
        this.loading = false
        this.finished = true
      },
      onClick(url) {
        this.$navigateTo(url)
      },
    },
    components: {
      [Search.name]: Search,
      [Row.name]: Row,
      [Col.name]: Col,
      Product,
      LoadMore
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="less" rel="stylesheet/less" type="text/less">
  .product-list {
    background-color: #fff;
    padding-top: 54px;
  }
</style>
