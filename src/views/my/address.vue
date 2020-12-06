<template>
  <div class="address">
    <van-nav-bar
        :left-text="$route.meta.title"
        left-arrow
        fixed
        @click-left="onClickLeft"
    />
    <div class="address-item" v-for="(item, index) in address_list" :key="index">
      <div>
        <div class="address-cell">
          <div class="address-cell__title">{{ item.name }}</div>
          <div class="address-cell__value">{{ item.phone | formatPhone }}</div>
        </div>
        <div class="address-item__address van-multi-ellipsis--l2">{{ formatAddress(item) }}</div>
      </div>
      <div class="address-edit van-hairline--top">
        <div class="address-edit__radio" v-if="item.isDefault === 1">
          <van-tag type="primary">默认地址</van-tag>
        </div>
        <div class="address-edit__handle">
          <span class="edit">编辑</span>
          <span class="delete">删除</span>
        </div>
      </div>
    </div>

    <create-by/>
    <load-more :loading="loading" :finished="finished"/>
  </div>
</template>

<script>
  // vuex
  import {mapGetters} from 'vuex'
  // component
  import {NavBar, Tag} from 'vant'
  import LoadMore from '@/components/LoadMore'

  export default {
    name: 'address',
    data() {
      return {
        loading: false,
        finished: true
      }
    },
    computed: {
      ...mapGetters(['address_list'])
    },
    methods: {
      onClickLeft() {
        this.$navigateBack()
      },
      formatAddress(val) {
        return `${val.provinceName} ${val.cityName} ${val.districtName} ${val.address}`
      }
    },
    components: {
      [NavBar.name]: NavBar,
      [Tag.name]: Tag,
      LoadMore
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="less" rel="stylesheet/less" type="text/less">
  @import "~@/assets/less/var.less";

  .address {
    padding-top: 46px;
  }

  .address-item {
    width: 100%;
    background-color: #fff;
    color: #14151a;
    font-weight: 500;
    font-size: @font14;

    & + .address-item {
      margin-top: 8px;
    }

    .address-cell {
      display: flex;
      padding: 16px;

      &__title,
      &__value {
        flex: 1;
      }

      &__title {
        text-align: left;
        font-size: @font16;
        color: #333;
        font-weight: 500;
      }

      &__value {
        text-align: right;
        font-size: @font12;
        color: #666;
      }
    }

    .address-edit {
      display: flex;
      padding: 12px 16px;
      font-size: 12px;

      &__radio,
      &__handle {
        flex: 1;
      }

      &__handle {
        text-align: right;
      }

      .edit,
      .delete {
        padding: 8px;
        font-weight: 500;
      }

      .edit {
        color: #01c2c3;
      }

      .delete {
        color: #ff4657;
      }
    }

    &__address {
      padding: 0 16px 16px;
    }
  }
</style>
