<template>
  <div class="popup-calendar-picker van-cell">
    <van-field
      :value="text"
      :label="label"
      :right-icon="showIcon"
      :placeholder="placeholder"
      readonly
      clickable
      :autosize="autosize"
      :type="fieldtype"
      @click.stop="onClick"
      @click-right-icon.stop="onClear"
    />

    <van-calendar
      v-model="show"
      :type="type"
      :default-date="currentDate"
      get-container="body"
      @confirm="onConfirm"
    />
  </div>
</template>

<script>
// utils
import { oneOf, parseTime } from '@/utils'
// components
import { Field, Calendar } from 'vant'

export default {
  name: 'popup-calendar-picker',
  model: {
    prop: 'value',
    event: 'input'
  },
  props: {
    value: [String, Array],
    label: String,
    type: {
      type: String,
      validator(value) {
        return oneOf(value, ['single', 'multiple', 'range'])
      },
      default: 'single',
    },
    format: {
      type: String,
      default: '{y}-{m}-{d}'
    },
    placeholder: String,
    disabled: Boolean,
    clearable: Boolean,
  },
  data() {
    return {
      show: false,
      currentDate: this.getInitValue()
    }
  },
  computed: {
    showIcon() {
      return this.clearable && this.value ? 'clear' : 'arrow'
    },
    text() {
      if (this.type === 'range') {
        return this.value.join(' 至 ')
      }

      if (this.type === 'multiple') {
        return this.value.map(item => parseTime(item, this.format)).join(',')
      }

      return this.value
    },
    autosize() {
      return this.type === 'multiple'
    },
    fieldtype() {
      return this.type === 'multiple' ? 'textarea' : 'text'
    },
  },
  methods: {
    getInitValue() {
      const { value, type } = this

      if (type === 'range') {
        const [startDay, endDay] = value.map(item => new Date(item))
        return [startDay, endDay]
      }

      if (type === 'multiple') {
        return value.map(item => new Date(item))
      }

      return value ? new Date(value) : new Date()
    },
    onClear() {
      if (!this.clearable) {
        return false
      }

      this.$emit('input', this.type === 'single' ? '' : [])
    },
    onClick() {
      this.currentDate = this.getInitValue()
      this.show = true
    },
    onConfirm(date) {
      let d

      if (this.type === 'single') {
        d = parseTime(date, this.format)
      }

      if (this.type === 'multiple') {
        d = date.map(item => parseTime(item, this.format))
      }

      if (this.type === 'range') {
        const [startDay, endDay] = date.map(item => parseTime(item, this.format))
        d = [startDay, endDay]
      }

      this.$emit('input', d)
      this.$emit('change', d)

      this.show = false
    },
  },
  components: {
    [Field.name]: Field,
    [Calendar.name]: Calendar
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="less" rel="stylesheet/less" type="text/less">
.popup-calendar-picker.van-cell {
  padding: 0;

  .van-field__right-icon {
    color: #c8c9cc;
  }
}
</style>
