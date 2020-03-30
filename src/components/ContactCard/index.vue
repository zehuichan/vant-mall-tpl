<template>
  <div class="contact-card" :class="!disabled ? 'tap-active' : ''">
    <div class="contact-cell" v-if="Object.keys(value).length > 0">
      <div class="iconfont icon-brand van-cell__left-icon"></div>
      <div class="van-cell__value van-cell__value--alone">
        <div class="van-clearfix">
          <div class="contact-cell__name fl">{{ value.name }}</div>
          <div class="contact-cell__phone fr">{{ value.phone | formatPhone }}</div>
        </div>
        <div class="contact-cell__address van-multi-ellipsis--l2">{{ value.address }}</div>
      </div>
      <div class="van-cell__right-icon">
        <van-icon name="arrow" v-if="!disabled"/>
      </div>
    </div>
    <div class="contact-cell contact-cell--add" v-else>
      <div class="van-cell__left-icon">
        <van-icon name="add-square" size="40"/>
      </div>
      <div class="van-cell__value van-cell__value--alone">选择或添加联系人</div>
      <div class="van-cell__right-icon">
        <van-icon name="arrow"/>
      </div>
    </div>
  </div>
</template>

<script>
  // component
  import {Icon} from 'vant'

  export default {
    name: 'ContactCard',
    props: {
      value: Object,
      disabled: {
        type: Boolean,
        default: false
      }
    },
    components: {
      [Icon.name]: Icon
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="less" rel="stylesheet/less" type="text/less">
  @import "~@/assets/less/var.less";

  .contact-card {
  }

  .contact-cell {
    position: relative;
    display: flex;
    width: 100%;
    padding: 16px;
    font-size: @font14;
    background-color: #fff;

    &:before {
      position: absolute;
      right: 0;
      bottom: 0;
      left: 0;
      height: 2px;
      background: repeating-linear-gradient(-45deg, #db6d66 0, #db6d66 20%, transparent 0, transparent 25%, #6486a4 0, #6486a4 45%, transparent 0, transparent 50%);
      background-size: 80px;
      content: '';
    }
  }

  .van-cell__left-icon,
  .van-cell__right-icon {
    min-width: 1em;
    height: 24px;
    font-size: 16px;
    line-height: 24px;
  }

  .van-cell__left-icon {
    margin-right: 15px;
    font-size: 24px;
    color: #1989fa;
  }

  .van-cell__right-icon {
    margin-left: 15px;
  }

  .contact-cell__name,
  .contact-cell__phone {
    font-weight: 500;
  }

  .contact-cell__phone {
    font-size: @font12;
    color: #666;
  }

  .contact-cell__address {
    color: #7f7f8e;
    line-height: 20px;
    margin-top: 8px;
    font-size: @font14;
    font-weight: 500;
  }

  .van-cell__value {
    position: relative;
    overflow: hidden;
    color: #969799;
    vertical-align: middle;
    word-wrap: break-word;
  }

  .van-cell__value--alone {
    color: #323233;
    text-align: left;
  }

  .van-cell__title,
  .van-cell__value {
    -webkit-box-flex: 1;
    -webkit-flex: 1;
    flex: 1;
  }

  .contact-cell--add {
    .van-cell__value--alone {
      line-height: 40px;
    }

    .van-cell__right-icon {
      margin-top: 10px;
    }
  }
</style>
