<template>
  <div class="lang-selector">
    <van-button type="primary" size="mini" :disabled="language === 'zh'" @click="handleSetLanguage('zh')">中文
    </van-button>
    <divider type="vertical"></divider>
    <van-button type="info" size="mini" :disabled="language === 'en'" @click="handleSetLanguage('en')">English
    </van-button>
  </div>
</template>

<script>
  // vuex
  import {mapGetters, mapActions} from 'vuex'
  // components
  import {Button} from 'vant'
  import Divider from '@/components/Divider'

  export default {
    name: 'lang-selector',
    computed: {
      ...mapGetters([
        'language'
      ])
    },
    methods: {
      handleSetLanguage(lang) {
        this.$i18n.locale = lang
        this['app/SetLanguage'](lang)
        this.$toast('Switch Language Success')
      },
      ...mapActions([
        'app/SetLanguage'
      ])
    },
    components: {
      [Button.name]: Button,
      Divider
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="less" rel="stylesheet/less" type="text/less">

</style>
