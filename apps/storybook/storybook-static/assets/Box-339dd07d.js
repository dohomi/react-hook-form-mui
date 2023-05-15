import {
  $ as x,
  a0 as n,
  a1 as y,
  a2 as B,
  a3 as N,
  a4 as S,
  u as j,
  c as C,
  a5 as T,
  a6 as _,
} from './Button-934b6c03.js'
import {r as p} from './index-ebeaab24.js'
import {j as F} from './useThemeProps-3be52b90.js'
const b = ['sx'],
  g = (t) => {
    const e = {systemProps: {}, otherProps: {}}
    return (
      Object.keys(t).forEach((s) => {
        y[s] ? (e.systemProps[s] = t[s]) : (e.otherProps[s] = t[s])
      }),
      e
    )
  }
function $(t) {
  const {sx: e} = t,
    s = x(t, b),
    {systemProps: o, otherProps: c} = g(s)
  let r
  return (
    Array.isArray(e)
      ? (r = [o, ...e])
      : typeof e == 'function'
      ? (r = (...l) => {
          const a = e(...l)
          return B(a) ? n({}, o, a) : o
        })
      : (r = n({}, o, e)),
    n({}, c, {sx: r})
  )
}
const v = ['className', 'component']
function w(t = {}) {
  const {
      defaultTheme: e,
      defaultClassName: s = 'MuiBox-root',
      generateClassName: o,
      styleFunctionSx: c = S,
    } = t,
    r = N('div', {
      shouldForwardProp: (a) => a !== 'theme' && a !== 'sx' && a !== 'as',
    })(c)
  return p.forwardRef(function (i, m) {
    const f = j(e),
      u = $(i),
      {className: d, component: h = 'div'} = u,
      P = x(u, v)
    return F(r, n({as: h, ref: m, className: C(d, o ? o(s) : s), theme: f}, P))
  })
}
const A = T(),
  E = w({
    defaultTheme: A,
    defaultClassName: 'MuiBox-root',
    generateClassName: _.generate,
  }),
  k = E
export {k as B, $ as e}
//# sourceMappingURL=Box-339dd07d.js.map
