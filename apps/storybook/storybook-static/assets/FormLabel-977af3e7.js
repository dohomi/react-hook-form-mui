import {u as L, _ as F, b as p, d as y} from './useThemeProps-3be52b90.js'
import {_ as i} from './extends-98964cd2.js'
import {r as C} from './index-ebeaab24.js'
import {
  n as v,
  o as q,
  p as b,
  K as x,
  L as k,
  c as $,
  q as g,
} from './Button-934b6c03.js'
function M(r) {
  return q('MuiFormLabel', r)
}
const R = v('MuiFormLabel', [
    'root',
    'colorSecondary',
    'focused',
    'disabled',
    'error',
    'filled',
    'required',
    'asterisk',
  ]),
  t = R,
  S = [
    'children',
    'className',
    'color',
    'component',
    'disabled',
    'error',
    'filled',
    'focused',
    'required',
  ],
  _ = (r) => {
    const {
        classes: o,
        color: c,
        focused: s,
        disabled: d,
        error: a,
        filled: l,
        required: n,
      } = r,
      u = {
        root: [
          'root',
          `color${y(c)}`,
          d && 'disabled',
          a && 'error',
          l && 'filled',
          s && 'focused',
          n && 'required',
        ],
        asterisk: ['asterisk', a && 'error'],
      }
    return g(u, M, o)
  },
  N = b('label', {
    name: 'MuiFormLabel',
    slot: 'Root',
    overridesResolver: ({ownerState: r}, o) =>
      i(
        {},
        o.root,
        r.color === 'secondary' && o.colorSecondary,
        r.filled && o.filled
      ),
  })(({theme: r, ownerState: o}) =>
    i({color: (r.vars || r).palette.text.secondary}, r.typography.body1, {
      lineHeight: '1.4375em',
      padding: 0,
      position: 'relative',
      [`&.${t.focused}`]: {color: (r.vars || r).palette[o.color].main},
      [`&.${t.disabled}`]: {color: (r.vars || r).palette.text.disabled},
      [`&.${t.error}`]: {color: (r.vars || r).palette.error.main},
    })
  ),
  U = b('span', {
    name: 'MuiFormLabel',
    slot: 'Asterisk',
    overridesResolver: (r, o) => o.asterisk,
  })(({theme: r}) => ({
    [`&.${t.error}`]: {color: (r.vars || r).palette.error.main},
  })),
  w = C.forwardRef(function (o, c) {
    const s = L({props: o, name: 'MuiFormLabel'}),
      {children: d, className: a, component: l = 'label'} = s,
      n = F(s, S),
      u = x(),
      e = k({
        props: s,
        muiFormControl: u,
        states: ['color', 'required', 'focused', 'disabled', 'error', 'filled'],
      }),
      m = i({}, s, {
        color: e.color || 'primary',
        component: l,
        disabled: e.disabled,
        error: e.error,
        filled: e.filled,
        focused: e.focused,
        required: e.required,
      }),
      f = _(m)
    return p(
      N,
      i({as: l, ownerState: m, className: $(f.root, a), ref: c}, n, {
        children: [
          d,
          e.required &&
            p(U, {
              ownerState: m,
              'aria-hidden': !0,
              className: f.asterisk,
              children: [' ', '*'],
            }),
        ],
      })
    )
  }),
  z = w
export {z as F, t as f}
//# sourceMappingURL=FormLabel-977af3e7.js.map
