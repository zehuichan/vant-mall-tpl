<template>
  <div class="me">
    <!--业务组件-地址-->
    <van-cell-group title="业务组件-地址">
      <van-cell title="地址管理" is-link to="/myAddress"/>
      <van-cell title="确认订单" is-link to="/confirmOrder"/>
    </van-cell-group>
    <!--业务组件-卡券-->
    <van-cell-group title="业务组件-卡券">
      <van-cell title="卡券管理" is-link to="/myCoupon"/>
    </van-cell-group>
    <!--业务组件-公共-->
    <van-cell-group title="业务组件-公共">
      <van-cell title="购物车" is-link to="/shopCart"/>
      <van-cell title="Ajaxbar" is-link v-if="false"/>
      <van-cell title="前端分页" is-link to="/fePage"/>
      <van-cell title="图片转base64" is-link to="/toBase64"/>
    </van-cell-group>
    <!--业务组件-国际化-->
    <van-cell-group title="业务组件-国际化">
      <van-cell title="Language">
        <lang-selector/>
      </van-cell>
    </van-cell-group>
    <divider>Text</divider>
  </div>
</template>

<script>
  // components
  import {Cell, CellGroup, Button} from 'vant'
  import LangSelector from '@/components/LangSelector'
  import Divider from '@/components/Divider'
  import Split from '@/components/Split'

  export default {
    name: 'me',
    components: {
      [Cell.name]: Cell,
      [CellGroup.name]: CellGroup,
      [Button.name]: Button,
      LangSelector,
      Divider,
      Split,
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="less" rel="stylesheet/less" type="text/less">

</style>
