import {j as a, b as f} from './useThemeProps-3be52b90.js'
import {
  s as b,
  e as k,
  _ as j,
  f as h,
  S as y,
  U as u,
  V as S,
  W as V,
  X as R,
  Y as P,
  Z as F,
  B,
} from './Button-934b6c03.js'
import {e as M, B as C} from './Box-339dd07d.js'
import {r as d} from './index-ebeaab24.js'
const D = ['component', 'direction', 'spacing', 'divider', 'children']
function N(e, r) {
  const s = d.Children.toArray(e).filter(Boolean)
  return s.reduce(
    (i, c, t) => (
      i.push(c),
      t < s.length - 1 && i.push(d.cloneElement(r, {key: `separator-${t}`})),
      i
    ),
    []
  )
}
const E = (e) =>
    ({
      row: 'Left',
      'row-reverse': 'Right',
      column: 'Top',
      'column-reverse': 'Bottom',
    }[e]),
  I = ({ownerState: e, theme: r}) => {
    let s = h(
      {display: 'flex', flexDirection: 'column'},
      y(
        {theme: r},
        u({values: e.direction, breakpoints: r.breakpoints.values}),
        (i) => ({flexDirection: i})
      )
    )
    if (e.spacing) {
      const i = S(r),
        c = Object.keys(r.breakpoints.values).reduce(
          (n, o) => (
            ((typeof e.spacing == 'object' && e.spacing[o] != null) ||
              (typeof e.direction == 'object' && e.direction[o] != null)) &&
              (n[o] = !0),
            n
          ),
          {}
        ),
        t = u({values: e.direction, base: c}),
        l = u({values: e.spacing, base: c})
      typeof t == 'object' &&
        Object.keys(t).forEach((n, o, p) => {
          if (!t[n]) {
            const x = o > 0 ? t[p[o - 1]] : 'column'
            t[n] = x
          }
        }),
        (s = V(
          s,
          y({theme: r}, l, (n, o) => ({
            '& > :not(style) + :not(style)': {
              margin: 0,
              [`margin${E(o ? t[o] : e.direction)}`]: P(i, n),
            },
          }))
        ))
    }
    return (s = R(r.breakpoints, s)), s
  },
  O = b('div', {
    name: 'MuiStack',
    slot: 'Root',
    overridesResolver: (e, r) => [r.root],
  })(I),
  $ = d.forwardRef(function (r, s) {
    const i = k({props: r, name: 'MuiStack'}),
      c = M(i),
      {
        component: t = 'div',
        direction: l = 'column',
        spacing: m = 0,
        divider: n,
        children: o,
      } = c,
      p = j(c, D)
    return a(
      O,
      h({as: t, ownerState: {direction: l, spacing: m}, ref: s}, p, {
        children: n ? N(o, n) : o,
      })
    )
  }),
  A = $
function L() {
  const {reset: e} = F()
  return a(B, {
    onClick: () => {
      e({})
    },
    children: 'Reset',
  })
}
const g = ({children: e}) => a(C, {sx: {marginY: 2}, children: e}),
  _ = () =>
    f(A, {
      direction: 'row',
      spacing: 2,
      children: [
        a(L, {}),
        f(B, {type: 'submit', color: 'primary', children: [' ', 'Submit']}),
      ],
    })
try {
  ;(g.displayName = 'BoxMargin'),
    (g.__docgenInfo = {description: '', displayName: 'BoxMargin', props: {}})
} catch {}
try {
  ;(_.displayName = 'SubmitButton'),
    (_.__docgenInfo = {description: '', displayName: 'SubmitButton', props: {}})
} catch {}
export {_ as S, A as a}
//# sourceMappingURL=Shared-e33e4212.js.map
