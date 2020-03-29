//map.qq.com/api/js?v=2.exp&key=您申请的key值&callback=initQMap
const url = `//map.qq.com/api/js?v=2.exp&key=5XWBZ-Q7U6J-UKSFG-K2P3R-NLOWE-3QBFN&callback=initQMap`

export default function qmap() {
  return new Promise((resolve, reject) => {
    if (window.qq) {
      resolve(window.qq)
    } else {
      const script = document.createElement('script')
      script.src = url
      script.onerror = reject
      document.head.appendChild(script)
    }
    window.initQMap = () => {
      resolve(window.qq)
    }
  })
}
