<template>
  <div class="expert-detail">
    <van-nav-bar
        :left-text="$route.meta.title"
        left-arrow
        fixed
        placeholder
        @click-left="onClickLeft"
    />
    <div class="player">
      <div class="inner">

      </div>
    </div>
    <div class="detailed">
      <div class="title van-multi-ellipsis--l2">吉林敖东医药科技事业二部名家讲坛（第四期）</div>
      <div class="desc">吉林敖东医药科技大德名医联盟，打造基层名医工程—线上诊所经营、学术课程直播。</div>
      <div class="footer van-clearfix">
        5467 次观看
        <divider type="vertical"/>
        2020-03-18 18:30 开始
      </div>
    </div>
    <split/>
    <div class="introduce">
      <div class="title">
        <div class="inner-text">详情</div>
      </div>
      <div class="rich-text" v-html="content"></div>
    </div>
    <create-by/>
  </div>
</template>

<script>
  // components
  import {NavBar} from 'vant'
  import Divider from '@/components/Divider'
  import Split from '@/components/Split'

  const SUCCESS_CONTENT = '<div><img style="width: 750px; height: 930px;" src="https://mall.s.maizuo.com/78f631d4ecf38ac5ef489a3b706b12b1.jpg" alt=""/></div>'

  export default {
    name: 'expert-detail',
    data() {
      return {
        content: ''
      }
    },
    created() {
      this.content = SUCCESS_CONTENT
    },
    methods: {
      onClickLeft() {
        this.$navigateBack()
      },
    },
    components: {
      [NavBar.name]: NavBar,
      Divider,
      Split
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="less" rel="stylesheet/less" type="text/less">
  @import "~@/assets/less/var.less";

  .expert-detail {
    position: relative;

    .player {
      .inner {
        width: 100%;
        height: 0;
        padding-top: 211px;
        background: rgba(60, 60, 60, .5);
      }
    }

    .detailed {
      padding: 15px;
      background-color: #fff;

      .title {
        font-size: @font16;
        max-height: 44px;
        font-weight: 500;
      }

      .desc {
        font-size: @font14;
        color: #797d82;
        margin-top: 8px;
      }

      .footer {
        color: @text-l;
        margin-top: 8px;
        font-size: @font12;
      }
    }


    .introduce {
      background-color: #fff;

      .title {
        font-size: @font13;
        text-align: center;
        padding: 22px 0;

        .inner-text {
          position: relative;
          text-align: center;
          font-weight: 400;
          color: @text-l;

          &:before {
            left: 35.5%;
          }

          &:after {
            right: 35.5%;
          }

          &:before,
          &:after {
            content: '';
            position: absolute;
            top: 52%;
            background-color: #ededed;
            width: 18px;
            height: 1px;
          }
        }
      }

      .rich-text {
        img {
          display: block;
          width: 100% !important;
          height: 100% !important;
        }
      }
    }
  }
</style>