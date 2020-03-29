// const url = `//api.map.baidu.com/api?v=2.0&ak=您的密钥&callback=init`
const url = `//api.map.baidu.com/api?v=2.0&ak=RUjYZ87U0gdVwNh0fAsMfscWbTVhkww9&callback=init`

export default function bmap() {
  return new Promise((resolve, reject) => {
    if (window.BMap) {
      resolve(window.BMap)
    } else {
      const script = document.createElement('script')
      script.src = url
      script.onerror = reject
      document.head.appendChild(script)
    }
    window.init = () => {
      resolve(window.BMap)
    }
  })
}
