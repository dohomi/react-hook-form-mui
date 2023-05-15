import {_ as l} from './extends-98964cd2.js'
import {_ as g} from './useThemeProps-3be52b90.js'
import {c as S, E as h} from './Button-934b6c03.js'
function R(e) {
  return (e && e.ownerDocument) || document
}
function x(e) {
  return typeof e == 'string'
}
function N(e, o = {}, n) {
  return x(e) ? o : l({}, o, {ownerState: l({}, o.ownerState, n)})
}
function w(e, o = []) {
  if (e === void 0) return {}
  const n = {}
  return (
    Object.keys(e)
      .filter(
        (t) =>
          t.match(/^on[A-Z]/) && typeof e[t] == 'function' && !o.includes(t)
      )
      .forEach((t) => {
        n[t] = e[t]
      }),
    n
  )
}
function E(e, o) {
  return typeof e == 'function' ? e(o) : e
}
function P(e) {
  if (e === void 0) return {}
  const o = {}
  return (
    Object.keys(e)
      .filter((n) => !(n.match(/^on[A-Z]/) && typeof e[n] == 'function'))
      .forEach((n) => {
        o[n] = e[n]
      }),
    o
  )
}
function H(e) {
  const {
    getSlotProps: o,
    additionalProps: n,
    externalSlotProps: t,
    externalForwardedProps: s,
    className: a,
  } = e
  if (!o) {
    const v = S(
        s == null ? void 0 : s.className,
        t == null ? void 0 : t.className,
        a,
        n == null ? void 0 : n.className
      ),
      y = l(
        {},
        n == null ? void 0 : n.style,
        s == null ? void 0 : s.style,
        t == null ? void 0 : t.style
      ),
      m = l({}, n, s, t)
    return (
      v.length > 0 && (m.className = v),
      Object.keys(y).length > 0 && (m.style = y),
      {props: m, internalRef: void 0}
    )
  }
  const i = w(l({}, s, t)),
    u = P(t),
    c = P(s),
    r = o(i),
    d = S(
      r == null ? void 0 : r.className,
      n == null ? void 0 : n.className,
      a,
      s == null ? void 0 : s.className,
      t == null ? void 0 : t.className
    ),
    p = l(
      {},
      r == null ? void 0 : r.style,
      n == null ? void 0 : n.style,
      s == null ? void 0 : s.style,
      t == null ? void 0 : t.style
    ),
    f = l({}, r, n, c, u)
  return (
    d.length > 0 && (f.className = d),
    Object.keys(p).length > 0 && (f.style = p),
    {props: f, internalRef: r.ref}
  )
}
const _ = ['elementType', 'externalSlotProps', 'ownerState']
function W(e) {
  var o
  const {elementType: n, externalSlotProps: t, ownerState: s} = e,
    a = g(e, _),
    i = E(t, s),
    {props: u, internalRef: c} = H(l({}, a, {externalSlotProps: i})),
    r = h(
      c,
      i == null ? void 0 : i.ref,
      (o = e.additionalProps) == null ? void 0 : o.ref
    )
  return N(n, l({}, u, {ref: r}), s)
}
export {x as i, R as o, E as r, W as u}
//# sourceMappingURL=useSlotProps-692f4a62.js.map
