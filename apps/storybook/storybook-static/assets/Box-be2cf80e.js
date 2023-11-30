import {
  s as h,
  p as i,
  q as B,
  b as p,
  r as N,
  t as _,
  v as C,
} from './TextareaAutosizeElement-ce2d51c3.js'
import {s as T, _ as P, a as g, c as v} from './createTheme-c77538bc.js'
import {r as E} from './index-f1f2c4b1.js'
const I = ['className', 'component']
function M(n = {}) {
  const {
      themeId: t,
      defaultTheme: m,
      defaultClassName: o = 'MuiBox-root',
      generateClassName: a,
    } = n,
    c = h('div', {
      shouldForwardProp: (e) => e !== 'theme' && e !== 'sx' && e !== 'as',
    })(T)
  return E.forwardRef(function (x, d) {
    const s = i(m),
      r = B(x),
      {className: l, component: u = 'div'} = r,
      f = P(r, I)
    return p(
      c,
      g(
        {as: u, ref: d, className: N(l, a ? a(o) : o), theme: (t && s[t]) || s},
        f
      )
    )
  })
}
const S = v(),
  b = M({
    themeId: _,
    defaultTheme: S,
    defaultClassName: 'MuiBox-root',
    generateClassName: C.generate,
  }),
  R = b
export {R as B}
//# sourceMappingURL=Box-be2cf80e.js.map
