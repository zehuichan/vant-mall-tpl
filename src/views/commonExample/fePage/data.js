export function genList(len = 150) {
  return new Array(len).fill('').map((item, index) => index + 1)
}
