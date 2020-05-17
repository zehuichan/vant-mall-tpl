<template>
  <div class="popup-picker van-cell">
    <van-field
        v-bind="$props"
        :value="text"
        :right-icon="showIcon"
        readonly
        clickable
        @click-input="onClick"
        @click-right-icon="onClear">
      <van-popup v-model="show" slot="extra" position="bottom" get-container="body">
        <van-picker
            ref="picker"
            show-toolbar
            :columns="columns"
            @cancel="onCancel"
            @confirm="onConfirm">
        </van-picker>
      </van-popup>
    </van-field>
  </div>
</template>

<script>
  // components
  import {Field, Picker, Popup} from 'vant'

  export default {
    name: 'popup-picker',
    model: {
      prop: 'value',
      event: 'input'
    },
    props: {
      // Field.props
      ...Field.props,

      // Picker.props
      ...Picker.props,

      columns: {
        type: Array,
        default: () => []
      },
      value: [String, Number, Object, Array],
      placeholder: String,
      disabled: Boolean,
      clearable: Boolean,
    },
    computed: {
      showIcon() {
        return this.clearable && this.value ? 'clear' : 'arrow'
      },
      text() {
        const curr = Array.from(this.columns).find(v => v.value === this.value) || ''
        return curr.text
      },
      index() {
        for (let i = 0; i < this.columns.length; i++) {
          const item = this.columns[i]
          if (item.value === this.value) {
            return i
          }
        }
        return 0
      },
      $picker() {
        return this.$refs.picker
      }
    },
    data() {
      return {
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
        console.log(value)
        this.$emit('input', value.value)
        this.$emit('change', value.value, index)
      },
      onClick() {
        this.show = true
        this.$nextTick(() => {
          this.$picker.setIndexes([this.index])
        })
      }
    },
    components: {
      [Field.name]: Field,
      [Picker.name]: Picker,
      [Popup.name]: Popup
    }
  }
</script>


<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="less" rel="stylesheet/less" type="text/less">
  .popup-picker.van-cell {
    padding: 0;

    .van-field__right-icon {
      color: #c8c9cc;
    }
  }
</style>
