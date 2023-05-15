import {u as p, _ as f, j as w} from './useThemeProps-3be52b90.js'
import {_ as e} from './extends-98964cd2.js'
import {r as F} from './index-ebeaab24.js'
import {
  o as x,
  n as G,
  p as d,
  K as C,
  L as y,
  c as _,
  q as M,
} from './Button-934b6c03.js'
function R(o) {
  return x('MuiFormGroup', o)
}
G('MuiFormGroup', ['root', 'row', 'error'])
const S = ['className', 'row'],
  U = (o) => {
    const {classes: r, row: t, error: s} = o
    return M({root: ['root', t && 'row', s && 'error']}, R, r)
  },
  g = d('div', {
    name: 'MuiFormGroup',
    slot: 'Root',
    overridesResolver: (o, r) => {
      const {ownerState: t} = o
      return [r.root, t.row && r.row]
    },
  })(({ownerState: o}) =>
    e(
      {display: 'flex', flexDirection: 'column', flexWrap: 'wrap'},
      o.row && {flexDirection: 'row'}
    )
  ),
  h = F.forwardRef(function (r, t) {
    const s = p({props: r, name: 'MuiFormGroup'}),
      {className: a, row: c = !1} = s,
      l = f(s, S),
      m = C(),
      i = y({props: s, muiFormControl: m, states: ['error']}),
      n = e({}, s, {row: c, error: i.error}),
      u = U(n)
    return w(g, e({className: _(u.root, a), ownerState: n, ref: t}, l))
  }),
  L = h
export {L as F}
//# sourceMappingURL=FormGroup-d89e04af.js.map
