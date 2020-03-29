<template>
  <van-progress :percentage="progress"/>
</template>

<script>
  // utils
  import {between} from './utils'
  // components
  import {Progress} from 'vant'

  const xhr = XMLHttpRequest
  const send = xhr.prototype.send
  const stackStart = []
  const stackStop = []

  let highjackCount = 0

  export default {
    name: 'ajax-bar',
    data() {
      return {
        calls: 0,
        progress: 0,
        onScreen: false,
        animate: true,
      }
    },
    mounted() {
      if (!this.skipHijack) {
        this.hijacked = true
        this.highjackAjax(this.start, this.stop)
      }
    },
    beforeDestroy() {
      clearTimeout(this.timer)
      this.hijacked && this.restoreAjax(this.start, this.stop)
    },
    methods: {
      start(speed = 300) {
        this.calls++
        if (this.calls > 1) {
          return
        }

        clearTimeout(this.timer)
        this.$emit('start')

        if (this.onScreen) {
          return
        }

        this.progress = 0
        this.onScreen = true
        this.animate = false
        this.timer = setTimeout(() => {
          this.animate = true
          this.__work(speed)
        }, 100)
      },
      increment(amount) {
        this.calls > 0 && (this.progress = this.inc(this.progress, amount))
      },
      stop() {
        this.calls = Math.max(0, this.calls - 1)
        if (this.calls > 0) {
          return
        }

        clearTimeout(this.timer)
        this.$emit('stop')

        const end = () => {
          this.animate = true
          this.progress = 100
          this.timer = setTimeout(() => {
            this.onScreen = true
          }, 1000)
        }

        if (this.progress === 0) {
          this.timer = setTimeout(end, 1)
        } else {
          end()
        }
      },
      __work(speed) {
        if (this.progress < 100) {
          this.timer = setTimeout(() => {
            this.increment()
            this.__work(speed)
          }, speed)
        }
      },
      inc(p, amount) {
        if (typeof amount !== 'number') {
          if (p < 25) {
            amount = Math.random() * 3 + 3
          } else if (p < 65) {
            amount = Math.random() * 3
          } else if (p < 85) {
            amount = Math.random() * 2
          } else if (p < 99) {
            amount = 0.6
          } else {
            amount = 0
          }
        }
        return between(p + amount, 0, 100)
      },
      highjackAjax(start, stop) {
        stackStart.push(start)
        stackStop.push(stop)

        highjackCount++

        if (highjackCount > 1) {
          return
        }

        function endHandler() {
          stackStop.forEach(fn => {
            fn()
          })
        }

        xhr.prototype.send = function (/* ...args */) {
          stackStart.forEach(fn => {
            fn()
          })
          this.addEventListener('loadend', endHandler, false)
          send.apply(this, arguments)
        }
      },
      restoreAjax(start, stop) {
        stackStart.splice(stackStart.indexOf(start), 1)
        stackStop.splice(stackStop.indexOf(stop), 1)

        highjackCount = Math.max(0, highjackCount - 1)
        if (!highjackCount) {
          xhr.prototype.send = send
        }
      }
    },
    components: {
      [Progress.name]: Progress
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="less" rel="stylesheet/less" type="text/less">

</style>
