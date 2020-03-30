// set function parseTime,formatTime to filter
export {parseTime, formatTime} from '@/utils'
// vanilla-masker
import mask from 'vanilla-masker'

function pluralize(time, label) {
  if (time === 1) {
    return time + label
  }
  return time + label + 's'
}

export function timeAgo(time) {
  const between = Date.now() / 1000 - Number(time)
  if (between < 3600) {
    return pluralize(~~(between / 60), ' minute')
  } else if (between < 86400) {
    return pluralize(~~(between / 3600), ' hour')
  } else {
    return pluralize(~~(between / 86400), ' day')
  }
}

/* 数字 格式化*/
export function nFormatter(num, digits) {
  const si = [
    {value: 1E18, symbol: 'E'},
    {value: 1E15, symbol: 'P'},
    {value: 1E12, symbol: 'T'},
    {value: 1E9, symbol: 'G'},
    {value: 1E6, symbol: 'M'},
    {value: 1E3, symbol: 'k'}
  ]
  for (let i = 0; i < si.length; i++) {
    if (num >= si[i].value) {
      return (num / si[i].value + 0.1).toFixed(digits).replace(/\.0+$|(\.[0-9]*[1-9])0+$/, '$1') + si[i].symbol
    }
  }
  return num.toString()
}

export function toThousandslsFilter(num) {
  return (+num || 0).toString().replace(/^-?\d+/g, m => m.replace(/(?=(?!\b)(\d{3})+$)/g, ','))
}

// 格式化金额,单位:分(eg:430分=4.30元)
export function format(price, digits = 2, prefix = '', suffix = '') {
  if (!price) {
    return 0
  }
  return prefix + Number(price / 100).toFixed(digits) + suffix
}

// 隐藏手机号中间4位
export function formatPhone(phone) {
  phone += ''
  return phone.replace(/(\d{3})\d*(\d{4})/g, '$1***$2')
}

// 隐藏身份证号中11位
export function formatIdentity(number) {
  number += ''
  return number.replace(/(\d{3})\d*(\d{4})/g, '$1***********$2')
}

// 15800066380 => 158 0006 6380
export function maskerFilter(val = '', pattern) {
  return mask.toPattern(val, pattern)
}