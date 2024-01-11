import {r as f, a} from './index-f1f2c4b1.js'
function s() {
  return (
    (s = Object.assign
      ? Object.assign.bind()
      : function (t) {
          for (var e = 1; e < arguments.length; e++) {
            var r = arguments[e]
            for (var n in r)
              Object.prototype.hasOwnProperty.call(r, n) && (t[n] = r[n])
          }
          return t
        }),
    s.apply(this, arguments)
  )
}
var u = function (e) {
    return e()
  },
  c = a['useInsertionEffect'] ? a['useInsertionEffect'] : !1,
  y = c || u,
  l = c || f.useLayoutEffect
function o(t, e) {
  return (
    (o = Object.setPrototypeOf
      ? Object.setPrototypeOf.bind()
      : function (n, i) {
          return (n.__proto__ = i), n
        }),
    o(t, e)
  )
}
function b(t, e) {
  ;(t.prototype = Object.create(e.prototype)),
    (t.prototype.constructor = t),
    o(t, e)
}
function h(t) {
  if (t === void 0)
    throw new ReferenceError(
      "this hasn't been initialised - super() hasn't been called"
    )
  return t
}
export {o as _, y as a, b, h as c, s as d, l as u}
//# sourceMappingURL=assertThisInitialized-4401020c.js.map
