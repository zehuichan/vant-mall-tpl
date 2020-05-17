<template>
  <div class="popup-datetimePicker van-cell">
    <van-field
        v-bind="$props"
        :value="value"
        :right-icon="showIcon"
        readonly
        clickable
        @click-input="onClick"
        @click-right-icon="onClear"
    >
      <van-popup v-model="show" slot="extra" position="bottom" get-container="body">
        <van-datetime-picker
            type="date"
            v-model="date"
            @confirm="onConfirm"
            @cancel="onCancel"
        />
      </van-popup>
    </van-field>
  </div>
</template>

<script>
  // utils
  import {parseTime} from '@/utils'
  // components
  import {Field, DatetimePicker, Popup} from 'vant'

  export default {
    name: 'popup-datetimePicker',
    model: {
      prop: 'value',
      event: 'input'
    },
    props: {
      // Field.props
      ...Field.props,

      value: String,
      placeholder: String,
      clearable: Boolean,
    },
    data() {
      return {
        show: false,
        date: new Date()
      }
    },
    computed: {
      showIcon() {
        return this.clearable && this.value ? 'clear' : 'clock-o'
      },
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
      onConfirm(value) {
        this.show = false
        this.$emit('input', parseTime(value, '{y}-{m}-{d}'))
        this.$emit('change', parseTime(value, '{y}-{m}-{d}'))
      },
      onClick() {
        this.show = true
        if (this.value) {
          this.date = new Date(this.value)
        } else {
          this.date = new Date()
        }
      },
    },
    components: {
      [Field.name]: Field,
      [DatetimePicker.name]: DatetimePicker,
      [Popup.name]: Popup
    }
  }
</script>


<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="less" rel="stylesheet/less" type="text/less">
  .popup-datetimePicker.van-cell {
    padding: 0;

    .van-field__right-icon {
      color: #c8c9cc;
    }
  }
</style>
