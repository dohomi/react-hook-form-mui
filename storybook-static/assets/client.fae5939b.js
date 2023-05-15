import {r as f} from './iframe.b13c84ce.js'
function y(o, u) {
  return (
    u.forEach(function (t) {
      t &&
        typeof t != 'string' &&
        !Array.isArray(t) &&
        Object.keys(t).forEach(function (e) {
          if (e !== 'default' && !(e in o)) {
            var a = Object.getOwnPropertyDescriptor(t, e)
            Object.defineProperty(
              o,
              e,
              a.get
                ? a
                : {
                    enumerable: !0,
                    get: function () {
                      return t[e]
                    },
                  }
            )
          }
        })
    }),
    Object.freeze(
      Object.defineProperty(o, Symbol.toStringTag, {value: 'Module'})
    )
  )
}
var r = {},
  n,
  i,
  c = f.exports
;(i = r.createRoot = c.createRoot), (n = r.hydrateRoot = c.hydrateRoot)
var p = y(
  {
    __proto__: null,
    default: r,
    get createRoot() {
      return i
    },
    get hydrateRoot() {
      return n
    },
  },
  [r]
)
export {p as c}
//# sourceMappingURL=client.fae5939b.js.map
