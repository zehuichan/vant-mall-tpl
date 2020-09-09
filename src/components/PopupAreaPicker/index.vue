<template>
  <div class="popup-area-picker van-cell">
    <van-field
        v-bind="$props"
        :value="text"
        :right-icon="showIcon"
        readonly
        clickable
        @click-input="onClick"
        @click-right-icon="onClear"
    >
      <van-popup v-model="show" slot="extra" position="bottom" get-container="body">
        <van-area
            ref="area"
            title="请选择"
            :loading="loading"
            :area-list="area"
            :columns-placeholder="['请选择', '请选择', '请选择']"
            @cancel="onCancel"
            @confirm="onConfirm"
        />
      </van-popup>
    </van-field>
  </div>
</template>

<script>
  // data 可后端拿数据
  import area from './area'
  // components
  import {Field, Area, Popup} from 'vant'

  export default {
    name: 'popup-area-picker',
    model: {
      prop: 'value',
      event: 'input'
    },
    props: {
      // Field.props
      ...Field.props,

      value: {
        type: Array,
        default: () => []
      },
      placeholder: String,
      disabled: Boolean,
      clearable: Boolean,
      separator: {
        type: String,
        default: ' '
      }
    },
    computed: {
      showIcon() {
        return this.clearable && this.value.length ? 'clear' : 'arrow'
      },
      text() {
        const curr = Array.from(this.value).map(v => v.name)
        return curr.join(this.separator)
      },
      code() {
        const curr = Array.from(this.value).pop()
        return curr && curr.code
      },
      $area() {
        return this.$refs.area
      }
    },
    data() {
      return {
        area,
        show: false,
        loading: false,
      }
    },
    methods: {
      onClear() {
        if (!this.clearable) {
          return false
        }
        this.$emit('input', '')
      },
      onCancel() {
        this.show = false
      },
      onConfirm(value, index) {
        this.show = false
        this.$emit('input', value)
        this.$emit('change', value, index)
      },
      onClick() {
        this.show = true
        this.$nextTick(() => {
          this.$area.reset(this.code)
        })
      }
    },
    components: {
      [Field.name]: Field,
      [Area.name]: Area,
      [Popup.name]: Popup
    }
  }
</script>


<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="less" rel="stylesheet/less" type="text/less">
  .popup-area-picker.van-cell {
    padding: 0;

    .van-field__right-icon {
      color: #c8c9cc;
    }
  }
</style>
