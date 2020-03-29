import {parseTime} from '@/utils'

/**
 * @param {Number} timeStamp 传入的时间戳
 * @param {Number} currentTime 当前时间时间戳
 * @returns {Boolean} 传入的时间戳是否早于当前时间戳
 */
function isEarly(timeStamp, currentTime) {
  return timeStamp <= currentTime
}

/**
 * @param {String|Number} timeStamp 时间戳
 * @returns {String} 相对时间字符串
 */
export function getRelativeTime(timeStamp) {
  // 获取当前时间时间戳
  const currentTime = Date.now()

  // 判断传入时间戳是否早于当前时间戳
  const IS_EARLY = isEarly(timeStamp, currentTime)
  // 获取两个时间戳差值
  let diff = currentTime - timeStamp
  // 如果IS_EARLY为false则差值取反
  if (!IS_EARLY) diff = -diff
  let resStr = ''
  let dirStr = IS_EARLY ? '前' : '后'

  if (diff < 1000) {
    // 少于等于59秒
    resStr = '刚刚'
  } else if (diff < 60000) {
    // 多于59秒，少于等于59分钟59秒
    resStr = parseInt(diff / 1000) + '秒' + dirStr
  } else if (diff >= 60000 && diff < 3600000) {
    // 多于59分钟59秒，少于等于23小时59分钟59秒
    resStr = parseInt(diff / 60000) + '分钟' + dirStr
  } else if (diff >= 3600000 && diff < 86400000) {
    // 多于23小时59分钟59秒，少于等于29天59分钟59秒
    resStr = parseInt(diff / 3600 * 1000) + '小时' + dirStr
  } else if (diff >= 86400000 && diff < 2623860000) {
    // 多于29天59分钟59秒，少于364天23小时59分钟59秒，且传入的时间戳早于当前
    resStr = parseInt(diff / 86400000) + '天' + dirStr
  } else if (diff >= 2623860000 && diff <= 31567860000 && IS_EARLY) {
    resStr = parseTime(timeStamp, '{y}-{m}-{d} {h}:{i}')
  } else {
    resStr = parseTime(timeStamp)
  }
  return resStr
}

export default function (timestamp) {
  return getRelativeTime(timestamp)
}
