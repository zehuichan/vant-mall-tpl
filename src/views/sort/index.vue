<template>
  <div class="sort">
    <van-nav-bar
        :left-text="$route.meta.title"
        fixed
        placeholder
    />
    <div class="vertical-box">
      <!-- 左侧-分组-start -->
      <div class="vertical-menu nav" style="height:100%" ref="nav">
        <div
            v-for="(item, index) in nav"
            :key="item.id"
            class="cu-item"
            :class="index == currentIndex ? 'cur' : ''"
            @click="handleTabSelect(item, index)"
        >
          {{ item.name }}
        </div>
      </div>
      <!-- 左侧-分组-end -->

      <!-- 右侧-单元-start -->
      <div class="vertical-main" style="height:100%" ref="main" @scroll="handleScroll">
        <div
            class="vertical-main-item"
            :class="index === main.length - 1 ? 'end' : ''"
            v-for="(item, index) in main"
            :key="item.id"
            :id="'main-' + item.id"
        >
          <div class="vertical-main__banner box-shadow base">
            <van-image width="100%" height="100%" :src="item.imgUrl"/>
          </div>
          <div class="vertical-main__title">{{ item.name }}</div>
          <div class="vertical-main__list">
            <div class="vertical-main__list-item" v-for="(elem, idx) in item.list" :key="idx"
                 @click="onClick('../product/list')">
              <div class="image">
                <van-image width="100%" height="100%" :src="elem.imgUrl"/>
              </div>
              <div class="title">{{ elem.masterTitle }}</div>
            </div>
          </div>
        </div>
      </div>
      <!-- 右侧-单元-end -->
    </div>
  </div>
</template>

<script>
  // components
  import {NavBar, Image} from 'vant'

  // mockData
  import {nav} from './mock.js'

  export default {
    name: 'sort',
    data() {
      return {
        nav: [],
        main: [],

        scrollY: 0,
        listHeight: [],
        show: false
      }
    },
    computed: {
      currentIndex() {
        for (let i = 0; i < this.listHeight.length; i++) {
          let height1 = this.listHeight[i]
          let height2 = this.listHeight[i + 1]
          if (!height2 || (this.scrollY >= height1 && this.scrollY < height2)) {
            return i
          }
        }
        return 0
      }
    },
    created() {
      this._listAll()
    },
    methods: {
      onClick(url) {
        this.$router.push(url)
      },
      _listAll() {
        this.nav = nav.map(item => ({
          id: item.categoryId,
          name: item.name
        }))
        this.main = nav.map(item => ({
          id: item.categoryId,
          imgUrl: item.imgUrl,
          name: item.name,
          list: item.list
        }))
        this.$nextTick(() => {
          this._calculateHeight()
        })
      },
      handleTabSelect(item, index) {
        this.$nextTick(() => {
          this.$refs.main.scrollTo(0, this.listHeight[index])
        })
      },
      handleScroll(event) {
        this.$nextTick(() => {
          this.scrollY = event.target.scrollTop + 10
        })
      },
      _calculateHeight() {
        let self = this
        let height = 0
        this.listHeight.push(height)
        for (let i = 0; i < this.nav.length; i++) {
          let view = document.querySelector('#main-' + this.nav[i].id)
          const ret = view.getBoundingClientRect()
          height += ret.height
          this.listHeight.push(height)
        }
      }
    },
    components: {
      [NavBar.name]: NavBar,
      [Image.name]: Image
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="less" rel="stylesheet/less" type="text/less">
  @import "~@/assets/less/var.less";

  .sort {
    height: 100%;
  }

  .vertical-box {
    display: flex;
    height: calc(100% - 46px);
    overflow: hidden;
  }

  .vertical-main {
    flex: 1;
    background-color: #fff;
    overflow-x: hidden;

    .vertical-main-item {
      padding-top: 15px;
      padding-left: 15px;
      padding-right: 15px;

      &.end {
        height: 100%;
      }
    }

    .vertical-main__banner {
      height: 100px;
      background-color: #e0e0e0;
      border-radius: 4px;
    }

    .vertical-main__title {
      font-size: @font16;
      color: @text;
      font-weight: 600;
      text-align: center;
      margin: 15px 0;
    }

    .vertical-main__list {
      display: flex;
      flex-wrap: wrap;
      background-color: #fff;

      .vertical-main__list-item {
        position: relative;
        flex: 0 0 (100% / 3);
        background-color: #fff;
        text-align: center;
        font-size: @font12;

        .image {
          width: 54px;
          height: 54px;
          margin: 0 auto;
        }

        .title {
          padding: 8px 0 16px;
        }
      }
    }
  }

  .vertical-menu.nav {
    flex: 0 0 80px;
    width: 80px;
    min-width: 0;
    white-space: initial;
    background-color: #f4f4f4;
  }

  .vertical-menu.nav .cu-item {
    text-align: center;
    height: 50px;
    line-height: 50px;
    font-size: @font12;
    color: @text-l;
  }

  .vertical-menu.nav .cu-item.cur {
    color: @primary;
    font-weight: 600;
    background-color: #fff;
  }
</style>