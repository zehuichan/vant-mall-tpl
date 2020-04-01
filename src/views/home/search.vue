<template>
  <div class="search">
    <van-search v-model="kw" placeholder="搜索" show-action @search="onSearch">
      <template #action>
        <div @click="_navigateBack">取消</div>
      </template>
    </van-search>
    <div class="history">
      <div class="history-header van-clearfix">
        <div class="title fl">热门搜索</div>
      </div>
      <div class="history-body van-hairline--bottom">
        <div class="tag tap-active" v-for="(tag, index) in hots" :key="index" @click="onSelect(tag)">{{ tag }}</div>
      </div>
    </div>
    <div class="history">
      <div class="history-header van-clearfix">
        <div class="title fl">历史搜索</div>
        <div class="action tap-active fr" @click="onClean">
          <span class="iconfont icon-ashbin"/>
        </div>
      </div>
      <div class="history-body">
        <div class="tag tap-active" v-for="(tag, index) in keywords" :key="index" @click="onSelect(tag)">{{ tag }}</div>
      </div>
    </div>
  </div>
</template>

<script>
  // utils
  import {saveToLocal, loadFromLocal} from '@/utils'
  // components
  import {Search} from 'vant'

  export default {
    name: 'search',
    data() {
      return {
        kw: '',
        hots: ['抽纸', '米', '洗衣液', '食用油', '礼包', '牙膏', '拖鞋', '面膜', '口红', '风扇', '伞', '儿童', '特产'],
        keywords: loadFromLocal('keywords') || []
      }
    },
    methods: {
      onSearch() {
        if (!this.kw) {
          return false
        }
        // 去重
        this.keywords.push(this.kw)
        this.keywords = Array.from(new Set(this.keywords))
        // 写入内存
        saveToLocal('keywords', this.keywords)
        // 提示
        this.$toast('搜索：' + this.kw)
        // 重置kw
        this.kw = ''
      },
      onSelect(tag) {
        this.kw = tag
        // 提示
        this.$toast('搜索：' + this.kw)
      },
      onClean() {
        this.keywords = []
        // 写入内存
        saveToLocal('keywords', this.keywords)
      },
      _navigateBack() {
        this.$router.back()
      },
    },
    components: {
      [Search.name]: Search
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="less" rel="stylesheet/less" type="text/less">
  @import "~@/assets/less/var.less";

  .search {
  }

  .history-header {
    font-size: @font14;
    padding: @gutter-8 @gutter-16;

    .title {
      font-weight: 600;
    }

    .action {
      .iconfont {
        font-size: @font24;
        line-height: 1;
        min-width: 1em;
      }
    }
  }

  .history-body {
    padding: @gutter-8 @gutter-16;

    .tag {
      display: inline-block;
      background-color: #fff;
      padding: 4px 16px;
      border-radius: 4px;
      color: @text-l;
      font-size: 13px;
      margin-right: 8px;
      margin-bottom: 8px;
    }
  }
</style>
