<template>
  <div class="live-card tap-active">
    <div class="live-card__header">
      <div class="thumb">
        <van-image width="100%" height="100%" lazy-load :src="require('./thumb.jpg')"/>
      </div>
      <div class="content">
        <div class="title van-multi-ellipsis--l2">{{title}}</div>
        <div class="desc van-multi-ellipsis--l2">{{desc}}</div>
      </div>
    </div>
    <div class="live-card__footer van-clearfix">
      <div class="fl">
        <van-tag :type="color">{{tag}}</van-tag>
      </div>
      <div class="fr">
        5467 次观看
        <divider type="vertical"/>
        2020-03-18 18:30 开始
      </div>
    </div>
  </div>
</template>

<script>
  // components
  import {Image, Tag} from 'vant'
  import Divider from '@/components/Divider'

  export default {
    name: 'LiveCard',
    props: {
      thumb: String,
      title: String,
      desc: String,
      status: Number
    },
    computed: {
      tag() {
        return this.status === 1 ? '直播' : '回看'
      },
      color() {
        return this.status === 1 ? 'success' : 'default'
      },
    },
    components: {
      [Image.name]: Image,
      [Tag.name]: Tag,
      Divider
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="less" rel="stylesheet/less" type="text/less">
  @import "~@/assets/less/var.less";

  .live-card {
    position: relative;
    box-sizing: border-box;
    padding: 16px;
    color: #323233;
    font-size: 12px;
    border-radius: 2px;
    border: 1px solid #ebeef5;
    background-color: #fff;

    & + .live-card {
      margin-top: 10px;
    }
  }

  .live-card__header {
    display: flex;

    .thumb {
      flex: none;
      width: 88px;
      height: 88px;
      margin-right: 8px;
    }

    .content {
      display: flex;
      flex: 1;
      flex-direction: column;
      justify-content: flex-start;
      min-width: 0;
      min-height: 88px;

      .title {
        max-height: 32px;
        font-weight: 500;
        line-height: 16px;
        font-size: @font14;
      }

      .desc {
        color: @text-l;
        line-height: 20px;
      }
    }

  }

  .live-card__footer {
    flex: none;
    color: @text-l;
    margin-top: 8px;
    line-height: 20px;
  }
</style>