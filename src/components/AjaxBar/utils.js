export function between(v, min, max) {
  return max <= min
    ? min
    : Math.min(max, Math.max(min, v))
}
