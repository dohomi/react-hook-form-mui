import {
  s as h,
  q as i,
  r as B,
  b as N,
  t as p,
  v as _,
  w as C,
} from './TextareaAutosizeElement-36296a48.js'
import {s as T, _ as P, a as g, c as v} from './createTheme-c77538bc.js'
import {r as w} from './index-f1f2c4b1.js'
const E = ['className', 'component']
function I(n = {}) {
  const {
      themeId: t,
      defaultTheme: m,
      defaultClassName: o = 'MuiBox-root',
      generateClassName: a,
    } = n,
    c = h('div', {
      shouldForwardProp: (e) => e !== 'theme' && e !== 'sx' && e !== 'as',
    })(T)
  return w.forwardRef(function (x, d) {
    const s = i(m),
      r = B(x),
      {className: l, component: u = 'div'} = r,
      f = P(r, E)
    return N(
      c,
      g(
        {as: u, ref: d, className: p(l, a ? a(o) : o), theme: (t && s[t]) || s},
        f
      )
    )
  })
}
const M = v(),
  S = I({
    themeId: _,
    defaultTheme: M,
    defaultClassName: 'MuiBox-root',
    generateClassName: C.generate,
  }),
  R = S
export {R as B}
//# sourceMappingURL=Box-228f8f89.js.map
