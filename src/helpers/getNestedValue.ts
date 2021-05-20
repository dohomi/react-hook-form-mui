export default function getNestedValue(o: any, s: string) {
  if (!s.includes('.')) {
    return o[s]
  }
  const a = s.split('.')
  for (let i = 0, n = a.length; i < n; i++) {
    const k = a[i]
    if (k in o) {
      o = o[k]
    } else {
      return
    }
  }
  return o
}
