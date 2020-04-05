<template>
  <div class="expert">
    <van-nav-bar
        :left-text="$route.meta.title"
        fixed
        placeholder
    />
    <div class="page-wrapper padded">
      <live-card
          v-for="(item, index) in list"
          :key="index"
          :title="item.title"
          :desc="item.desc"
          :status="item.status"

          @click.native="onClick('/expert/expert-detail')"
      />
    </div>
  </div>
</template>

<script>
  // components
  import {NavBar} from 'vant'
  import LiveCard from './components/LiveCard'

  export default {
    name: 'expert-expert',
    data() {
      return {
        list: [
          {
            title: '【第四期】吉林敖东医药科技事业二部名家讲坛',
            desc: '吉林敖东医药科技大德名医联盟，打造基层名医工程—线上诊所经营、学术课程直播。',
            status: 1
          },
          {
            title: '【第三期】吉林敖东医药科技事业二部名家讲坛',
            desc: '吉林敖东医药科技大德名医联盟，打造基层名医工程—线上诊所经营、学术课程直播。',
            status: 0
          },
        ]
      }
    },
    methods: {
      onClick(url) {
        this.$navigateTo(url)
      }
    },
    components: {
      [NavBar.name]: NavBar,
      LiveCard
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="less" rel="stylesheet/less" type="text/less">
  .expert {

  }
</style>