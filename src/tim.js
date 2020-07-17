// SDK
import TIM from 'tim-js-sdk'
import COS from 'cos-js-sdk-v5'

const options = {
  SDKAppID: 1400353447 // 接入时需要将0替换为您的即时通信 IM 应用的 SDKAppID
}

// 创建 SDK 实例，TIM.create() 方法对于同一个 SDKAppID 只会返回同一份实例
const tim = TIM.create(options)

// 设置 SDK 日志输出级别
tim.setLogLevel(4)

// 注册 COS SDK 插件
tim.registerPlugin({'cos-js-sdk': COS})

tim.login({
  userID: 'chan',
  userSig: 'eJyrVgrxCdYrSy1SslIy0jNQ0gHzM1NS80oy0zLBwskZiXlQ8eKU7MSCgswUJStDEwMDY1NjExNziExqRUFmUSpQ3NTU1MjAwAAiWpKZCxazNDE3MDG0tICakpkONLYsOUY-N93cvcjRK8nQKTcwN6fUKUbfwjsxPNjJJN*z1Kc0zDgrt9Ik3yw8x8BWqRYAR4kxmg__'
})

export default tim