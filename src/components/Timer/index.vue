<template>
  <span>{{date}}</span>
</template>

<script>
  // utils
  import {oneOf, parseTime} from '@/utils'
  import Time from './time'

  export default {
    name: 'timer',
    props: {
      time: {
        type: [Number, Date, String],
        required: true
      },
      type: {
        type: String,
        validator(value) {
          return oneOf(value, ['relative', 'date', 'datetime'])
        },
        default: 'relative'
      }
    },
    data() {
      return {
        date: ''
      }
    },
    mounted() {
      this.setTime()
    },
    methods: {
      setTime() {
        const type = typeof this.time
        let time

        if (type === 'number') {
          const timestamp = this.time.toString().length > 10 ? this.time : this.time * 1000
          time = (new Date(timestamp)).getTime()
        } else if (type === 'object') {
          time = this.time.getTime()
        } else if (type === 'string') {
          time = (new Date(this.time)).getTime()
        }

        if (this.type === 'relative') {
          this.date = Time(time)
        } else {
          const date = new Date(this.time)

          if (this.type === 'datetime') {
            this.date = parseTime(date)
          } else if (this.type === 'date') {
            this.date = parseTime(date, '{y}-{m}-{d}')
          }
        }
      }
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="less" rel="stylesheet/less" type="text/less">

</style>
