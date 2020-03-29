<template>
  <div class="shop-cart">
    <van-nav-bar
      :left-text="$route.meta.title"
      left-arrow
      fixed
      @click-left="onClickLeft"
    />
    <van-checkbox-group class="card-goods" v-model="checked" @change="handleCheckboxGroupChange">
      <goods-card
        v-for="item in items"
        :key="item.id"
        :name="item.id"
        :num="item.num"
        :origin-price="item.v1_price"
        :price="item[`${level}_price`]"
        :type-id="item.type_id"
        :desc="`${item.troche} ${item.standard}`"
        :title="item.name"
        :thumb="item.image"
        :stock="item.stock"
        show-checkbox
        @click-thumb="onClickThumb"
      />
    </van-checkbox-group>
    <van-submit-bar
      :price="total"
      :button-text="`结算(${checked.length})`"
      @submit="onSubmit"
      class="van-hairline--top">
      <van-checkbox v-model="checkAll" :disabled="disabled" @click="handleCheckboxClick">全选</van-checkbox>
    </van-submit-bar>
  </div>
</template>

<script>
  // vuex
  import {mapGetters} from 'vuex'
  // components
  import {NavBar, SubmitBar, Checkbox, CheckboxGroup} from 'vant'
  import GoodsCard from '@/components/GoodsCard'

  export default {
    name: 'shopCart',
    data() {
      return {
        checked: [],
        checkAll: false
      }
    },
    computed: {
      total() {
        return this.products.reduce((prev, curr) => curr[`${this.level}_price`] * curr.num + prev, 0)
      },
      products() {
        return this.items.filter(item => this.checked.includes(item.id))
      },
      disabled() {
        return this.items.length === 0
      },
      ...mapGetters([
        'level',
        'items',
      ])
    },
    methods: {
      onClickLeft() {
        this.$router.push({path: '/me'})
      },
      onClickThumb() {
        const _products = this.products.map(item => item.name)
        this.$toast(JSON.stringify(_products))
      },
      handleCheckboxGroupChange() {
        this.checkAll = this.products.length === this.items.length
      },
      handleCheckboxClick() {
        if (this.disabled) return
        this.checkAll = !this.checkAll
        if (!this.checkAll) {
          this.checked = []
        } else {
          this.checked = this.items.map(item => item.id)
        }
      },
      onSubmit() {
        const goods_data = {}

        this.products.forEach(v => {
          goods_data[v.id] = v.num
        })

        this.$toast(JSON.stringify(goods_data))
      }
    },
    components: {
      [NavBar.name]: NavBar,
      [SubmitBar.name]: SubmitBar,
      [Checkbox.name]: Checkbox,
      [CheckboxGroup.name]: CheckboxGroup,
      GoodsCard
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="less" rel="stylesheet/less" type="text/less">
  .shop-cart {
    padding-top: 46px;
    padding-bottom: 50px;

    .card-goods {
      padding: 0 10px;
    }
  }
</style>
