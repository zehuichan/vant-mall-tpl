<template>
  <div class="fePage">
    <van-nav-bar
        left-text="前端分页"
        left-arrow
        fixed
        @click-left="onClickLeft"
    />

    <van-list
        v-model="loading"
        :finished="finished"
        finished-text="没有更多了"
        @load="onLoad"
    >
      <van-cell v-for="item in list" :key="item" :title="item"/>
    </van-list>
  </div>
</template>

<script>
  // data
  import {genList} from './data'
  // components
  import {NavBar, List, Cell} from 'vant'

  export default {
    name: 'fePage',
    components: {
      [NavBar.name]: NavBar,
      [List.name]: List,
      [Cell.name]: Cell,
    },
    data() {
      return {
        loading: false,
        finished: false,
        dataForm: {
          p: 1,
          ps: 30
        },
        list: []
      }
    },
    computed: {
      total_page() {
        return Math.ceil(genList().length / this.dataForm.ps) || 1
      }
    },
    methods: {
      onClickLeft() {
        this.$router.push({path: this.redirect || '/me'})
      },
      onLoad() {
        let begin = (this.dataForm.p - 1) * this.dataForm.ps
        let end = this.dataForm.p * this.dataForm.ps
        setTimeout(() => {
          this.list = [...this.list, ...genList().slice(begin, end)]
          // 加载状态结束
          this.loading = false

          // 数据全部加载完成
          if (this.dataForm.p >= this.total_page) {
            this.finished = true
          } else {
            this.dataForm.p += 1
          }
        }, 800)
      }
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="less" rel="stylesheet/less" type="text/less">
  .fePage {
    padding-top: 46px;
  }
</style>
