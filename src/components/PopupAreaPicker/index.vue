<template>
  <div class="popup-area-picker van-cell">
    <van-field
      v-bind="$props"
      :value="text"
      :right-icon="showIcon"
      readonly
      clickable
      @click.stop="onClick"
      @click-right-icon.stop="onClear"
    />

    <van-popup v-model="show" position="bottom" get-container="body">
      <van-area
        ref="area"
        :area-list="area"
        :columns-placeholder="['请选择', '请选择', '请选择']"
        @cancel="onCancel"
        @confirm="onConfirm"
      />
    </van-popup>
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

      // Picker.props
      ...Area.props,

      value: [String, Number, Object, Array],
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
        return Array.from(this.value).pop()
      },
      $area() {
        return this.$refs.area
      }
    },
    data() {
      return {
        area,
        show: false,
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
          this.$area.reset(this.code && this.code.code)
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
