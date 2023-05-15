import {r as i, b as o} from './index-ebeaab24.js'
var s = function (e) {
    return e()
  },
  a = o['useInsertionEffect'] ? o['useInsertionEffect'] : !1,
  p = a || s,
  y = a || i.useLayoutEffect
function r(t, e) {
  return (
    (r = Object.setPrototypeOf
      ? Object.setPrototypeOf.bind()
      : function (n, c) {
          return (n.__proto__ = c), n
        }),
    r(t, e)
  )
}
function b(t, e) {
  ;(t.prototype = Object.create(e.prototype)),
    (t.prototype.constructor = t),
    r(t, e)
}
function l(t) {
  if (t === void 0)
    throw new ReferenceError(
      "this hasn't been initialised - super() hasn't been called"
    )
  return t
}
export {b as _, p as a, l as b, r as c, y as u}
//# sourceMappingURL=assertThisInitialized-5649ae8b.js.map
