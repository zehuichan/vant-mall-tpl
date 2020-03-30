<template>
  <div class="product">
    <div class="thumb" :class="size">
      <van-image width="100%" height="100%" lazy-load :src="thumb"/>
      <div class="tag" v-if="tags && tags.length > 0">
        <van-tag v-for="(tag, index) in tags" :key="index" :color="tag.labelColor">{{ tag.title }}</van-tag>
      </div>
    </div>
    <div class="title van-ellipsis">{{ title }}</div>
    <div class="desc van-ellipsis">{{ desc }}</div>
    <div class="price van-clearfix">
      <div class="new fl">
        <span class="unit">￥</span><span class="value">{{ price | format }}</span>
      </div>
      <div class="old fl" v-if="originPrice && size !== 'xs'">
        <span class="value">￥{{ originPrice | format }}</span>
      </div>
    </div>
  </div>
</template>

<script>
  // utils
  import {oneOf} from '@/utils'
  // components
  import {Image, Tag} from 'vant'

  export default {
    name: 'Product',
    props: {
      thumb: String,
      title: String,
      desc: String,
      price: [Number, String],
      originPrice: [Number, String],
      tags: {
        type: Array,
        default: () => []
      },
      size: {
        type: String,
        validator(value) {
          return oneOf(value, ['xs', 'md'])
        },
        default: 'md'
      }
    },
    components: {
      [Image.name]: Image,
      [Tag.name]: Tag,
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="less" rel="stylesheet/less" type="text/less">
  @import "~@/assets/less/var.less";

  .product {
    .thumb {
      position: relative;
      text-align: center;
      background-color: #f4f4f4;
      margin-bottom: 8px;

      &.md {
        width: 165px;
        height: 165px;
      }

      &.xs {
        width: 105px;
        height: 105px;
      }

      .tag {
        position: absolute;
        left: 0;
        bottom: 0;

        .van-tag + .van-tag {
          margin-left: 5px;
        }
      }
    }

    .title {
      font-size: @font14;
      font-weight: 500;
    }

    .desc {
      font-size: @font12;
      color: @text-l;
    }

    .price {
      font-size: @font15;
      margin-bottom: 16px;

      .new {
        color: @primary;
        font-weight: 500;
      }

      .old {
        font-size: @font10;
        color: @text-ll;
        text-decoration: line-through;
        margin-left: 5px;

        .value {
          vertical-align: -1.5px;
        }
      }

      .unit {
        font-size: 60%;
      }
    }
  }
</style>