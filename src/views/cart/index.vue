<template>
  <div class="cart">
    <van-nav-bar
        :left-text="$route.meta.title"
    />
    <div class="page-wrapper">
      <product-card v-model="checked" :items="items" @click-thumb="onClickThumb" @change="onCheckboxGroupChange"/>
    </div>
    <van-submit-bar :price="total" :button-text="`结算(${num})`" @submit="onSubmit">
      <van-checkbox v-model="checkAll" checked-color="#c03131" @click="onCheckboxClick">全选</van-checkbox>
    </van-submit-bar>
  </div>
</template>

<script>
  // vuex
  import {mapGetters} from 'vuex'
  // components
  import {NavBar, SubmitBar, Checkbox} from 'vant'
  import ProductCard from '@/components/ProductCard'

  export default {
    name: 'cart',
    data() {
      return {
        checked: [],
        checkAll: false
      }
    },
    computed: {
      total() {
        return this.products.reduce((prev, curr) => curr.price * curr.count + prev, 0)
      },
      products() {
        return this.items.filter(item => this.checked.map(Number).includes(item.productId))
      },
      num() {
        return this.products.reduce((prev, curr) => curr.count + prev, 0)
      },
      ...mapGetters(['items'])
    },
    methods: {
      onClickThumb() {
        this.$navigateTo('/product/detail')
      },
      onSubmit() {
      },
      onCheckboxGroupChange() {
        this.checkAll = this.products.length === this.items.length
      },
      onCheckboxClick() {
        if (this.checkAll) {
          this.checked = []
        } else {
          this.checked = this.items.map(item => item.productId)
        }
        this.$toast(JSON.stringify(this.checked))
      },
    },
    components: {
      [NavBar.name]: NavBar,
      [SubmitBar.name]: SubmitBar,
      [Checkbox.name]: Checkbox,
      ProductCard
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="less" rel="stylesheet/less" type="text/less">
  .cart {
    .van-submit-bar {
      bottom: 50px;
    }
  }
</style>