<template>
  <div class="myAddress">
    <van-nav-bar
      fixed
      :left-text="$route.meta.title"
      left-arrow
      @click-left="onClickLeft"
      @click-right="onClickRight"
    >

      <span class="font12" slot="right">添加新地址</span>
    </van-nav-bar>

    <!--list-->
    <address-list :poppable="false" :list="address_list" disabled @edit="onEdit" @delete="onDelete"/>
    <!--edit-->
    <address-edit v-model="show_edit" :data="current_address"/>

    <div class="demo-block">
      <code>
        {{default_address}}
      </code>
    </div>
  </div>
</template>

<script>
  // vuex
  import {mapActions, mapGetters} from 'vuex'
  // components
  import {NavBar, Button} from 'vant'
  import AddressList from '@/components/AddressList'
  import AddressEdit from '@/components/AddressEdit'

  export default {
    name: 'myAddress',
    data() {
      return {
        current_address: null,
        show_edit: false
      }
    },
    computed: {
      ...mapGetters([
        'address_list',
        'default_address'
      ])
    },
    created() {
      this['address/getAddressList']()
    },
    methods: {
      onClickLeft() {
        this.$router.go(-1)
      },
      onClickRight() {
        console.log('handleAdd', this.address)
        this.current_address = null
        this.$nextTick(() => {
          this.show_edit = true
        })
      },
      onEdit(address, index) {
        console.log('handleEdit', address, index)
        this.current_address = address
        this.show_edit = true
      },
      onDelete(address, index) {
        console.log('handleDelete', address, index)
        this.$dialog.confirm({
          message: '确定要删除该地址吗？'
        }).then(() => {
          // on confirm
        }).catch(() => {
          // on cancel
        })
      },
      ...mapActions([
        'address/getAddressList',
        'address/chosenAddress'
      ])
    },
    components: {
      [NavBar.name]: NavBar,
      [Button.name]: Button,
      AddressList,
      AddressEdit,
    }
  }
</script>


<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="less" rel="stylesheet/less" type="text/less">
  .myAddress {
    padding-top: 46px;
  }
</style>
