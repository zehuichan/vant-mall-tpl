<template>
  <div class="home">
    <van-cell-group :border="false" title="picker相关">
      <popup-picker
          v-model="picker1"
          label="picker1"
          :columns="columns1"
          clearable
          placeholder="请选择"
          @change="onChange1"
      />
      <popup-picker
          v-model="picker2"
          label="picker2"
          :columns="columns2"
          clearable
          placeholder="请选择"
          @change="onChange2"
      />
      <popup-area-picker v-model="area" label="省市区" clearable placeholder="请选择" separator="-"/>
      <popup-map-address-picker v-model="address" clearable/>
    </van-cell-group>

    <van-cell-group :border="false" title="时间日期相关">
      <popup-datetime-picker v-model="date" label="日期" clearable placeholder="请选择"/>
      <popup-timer-picker v-model="time" label="时间" clearable placeholder="请选择"/>
      <popup-calendar-picker v-model="calendar" label="单个日期" clearable placeholder="请选择"/>
      <popup-calendar-picker v-model="calendar_multiple" label="多个日期" type="multiple" clearable placeholder="请选择"/>
      <popup-calendar-picker v-model="calendar_range" label="日期区间" type="range" clearable placeholder="请选择"/>
    </van-cell-group>

    <van-cell-group :border="false" title="个性组件相关">
      <van-cell title="Timer组件">
        <timer :time="time2"></timer>
      </van-cell>
    </van-cell-group>
    <h3 class="demo-title">测试</h3>
    <div class="demo-block">
      <code>
        {{calendar}}
        {{calendar_multiple}}
        {{calendar_range}}
      </code>
    </div>
  </div>
</template>

<script>
  // utils
  import {parseTime} from '@/utils'
  // components
  import {Field, Cell, CellGroup} from 'vant'
  import PopupPicker from '@/components/PopupPicker'
  import PopupAreaPicker from '@/components/PopupAreaPicker'
  import PopupDatetimePicker from '@/components/PopupDatetimePicker'
  import PopupTimerPicker from '@/components/PopupTimerPicker'
  import PopupMapAddressPicker from '@/components/PopupMapAddressPicker'
  import PopupCalendarPicker from '@/components/PopupCalendarPicker'
  import Timer from '@/components/Timer'

  export default {
    name: 'home',
    data() {
      return {
        columns1: [
          {text: '杭州', value: 1},
          {text: '宁波', value: 2},
          {text: '温州', value: 3},
          {text: '嘉兴', value: 4},
          {text: '湖州', value: 5},
        ],
        columns2: [
          {text: '杭州1', value: 6},
          {text: '宁波2', value: 7},
          {text: '温州3', value: 8},
          {text: '嘉兴4', value: 9},
          {text: '湖州5', value: 10},
        ],
        picker1: 2,
        picker2: 6,

        area: [
          {code: '110000', name: '北京市'},
          {code: '110100', name: '北京市'},
          {code: '110105', name: '朝阳区'}
        ],

        address: {},

        date: parseTime(new Date(), '{y}-{m}-{d}'),
        time: '',

        time2: (new Date()).getTime() - 86400 * 3 * 1000,

        calendar: parseTime(new Date(Date.now() + 3 * 1000 * 3600 * 24), '{y}-{m}-{d}'),
        calendar_multiple: ['2020-03-29', '2020-03-30'],
        calendar_range: ['2020-03-25', '2020-03-28']
      }
    },
    methods: {
      onChange1(val) {
        if (this.bbb) {
          this.$toast('只能选一个')
          this.bbb = null
        }
      },
      onChange2(val) {
        if (this.aaa) {
          this.$toast('只能选一个')
          this.aaa = null
        }
      },
    },
    components: {
      [Field.name]: Field,
      [Cell.name]: Cell,
      [CellGroup.name]: CellGroup,
      PopupPicker,
      PopupAreaPicker,
      PopupDatetimePicker,
      PopupTimerPicker,
      PopupMapAddressPicker,
      PopupCalendarPicker,
      Timer
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="less" rel="stylesheet/less" type="text/less">

</style>
