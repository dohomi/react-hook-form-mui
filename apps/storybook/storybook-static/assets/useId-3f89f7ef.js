import {r as s, b as l} from './index-ebeaab24.js'
function i(...t) {
  return t.reduce(
    (n, e) =>
      e == null
        ? n
        : function (...a) {
            n.apply(this, a), e.apply(this, a)
          },
    () => {}
  )
}
let c = 0
function r(t) {
  const [n, e] = s.useState(t),
    u = t || n
  return (
    s.useEffect(() => {
      n == null && ((c += 1), e(`mui-${c}`))
    }, [n]),
    u
  )
}
const o = l['useId']
function d(t) {
  if (o !== void 0) {
    const n = o()
    return t ?? n
  }
  return r(t)
}
export {i as c, d as u}
//# sourceMappingURL=useId-3f89f7ef.js.map
