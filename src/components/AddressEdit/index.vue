<template>
  <van-popup :value="value" position="right" style="width: 100%; height: 100%; background-color: #f0f2f5;">
    <van-nav-bar
      :left-text="title"
      left-arrow
      @click-left="onClickLeft"
      @click-right="onClickRight"
    >

      <van-button type="danger" size="mini" slot="right" v-if="data">删除</van-button>
    </van-nav-bar>

    <van-cell-group>
      <van-field v-model="dataForm.name" label="收货人" placeholder="填写姓名" clearable/>
      <van-field v-model="dataForm.phone" label="联系电话" placeholder="填写手机号" clearable/>
      <popup-area-picker v-model="dataForm.area" label="所在区域" placeholder="请选择" clearable separator="-"/>
      <van-field
        v-model="dataForm.address"
        type="textarea"
        rows="4"
        maxlength="32"
        placeholder="请填写详细地址"
        show-word-limit
        clearable
      />
    </van-cell-group>

    <split></split>

    <van-cell-group>
      <van-switch-cell
        v-model="dataForm.default"
        :active-value="1"
        :inactive-value="0"
        title="设为默认地址"
      />
    </van-cell-group>

    <div class="demo-block">
      <code>{{data}}</code>
    </div>

    <div class="btn-wrapper fixed-bottom">
      <van-button type="info" block @click="onSave">保存</van-button>
    </div>
  </van-popup>
</template>

<script>
  // utils
  import {validatePhone} from '@/utils/validate'
  // components
  import {NavBar, Popup, Button, Field, CellGroup, SwitchCell} from 'vant'
  import PopupAreaPicker from '@/components/PopupAreaPicker'
  import Split from '@/components/Split'

  const defaultForm = {
    id: null,
    name: '',
    phone: '',
    area: [],
    address: '',
    default: 0,
  }


  export default {
    name: 'handle',
    model: {
      props: 'value',
      event: 'input'
    },
    props: {
      value: Boolean,
      data: Object
    },
    data() {
      return {
        dataForm: Object.assign({}, defaultForm),
      }
    },
    watch: {
      value: 'init'
    },
    computed: {
      title() {
        return this.data ? '编辑收货地址' : '添加收货地址'
      },
      isEdit() {
        return this.data
      }
    },
    methods: {
      onClickLeft() {
        this.$emit('input', false)
      },
      onClickRight() {
        this.$emit('delete', false)
      },
      init() {
        if (!this.data) {
          this.dataForm = Object.assign({}, defaultForm)
        } else {
          this.dataForm.id = this.data.id
          this.dataForm.name = this.data.name
          this.dataForm.phone = this.data.phone
          this.dataForm.area = JSON.parse(this.data.area)
          this.dataForm.address = this.data.address
          this.dataForm.default = this.data.default
        }
      },
      onSave() {
        if (!this.isEdit) {

        }

        if (!this.dataForm.name) {
          this.$toast('请填写收货人姓名')
          return false
        }

        if (!this.dataForm.phone) {
          this.$toast('请填写手机号')
          return false
        }

        if (!validatePhone(this.dataForm.phone)) {
          this.$toast('请填写正确的手机号')
          return false
        }

        if (!this.dataForm.area) {
          this.$toast('请选择所在地区')
          return false
        }

        if (!this.dataForm.address) {
          this.$toast('请填写详细的收货地址')
          return false
        }

        console.log(this.data)
        console.log(this.dataForm)
        this._emit('update')
      },
      _emit(event_name) {
        this.$toast({
          message: '操作成功',
          onClose: () => {
            this.$emit('input', false)
            this.$emit(event_name)
          }
        })
      }
    },
    components: {
      [NavBar.name]: NavBar,
      [Popup.name]: Popup,
      [Button.name]: Button,
      [Field.name]: Field,
      [CellGroup.name]: CellGroup,
      [SwitchCell.name]: SwitchCell,
      PopupAreaPicker,
      Split,
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="less" rel="stylesheet/less" type="text/less">

</style>
