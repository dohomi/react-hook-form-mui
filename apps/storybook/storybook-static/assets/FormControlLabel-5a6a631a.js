import {
  d as P,
  u as R,
  _ as $,
  j as T,
  b as _,
} from './useThemeProps-3be52b90.js'
import {_ as c} from './extends-98964cd2.js'
import {r as C} from './index-ebeaab24.js'
import {
  n as j,
  o as M,
  p as N,
  K as U,
  L as w,
  c as D,
  q as E,
} from './Button-934b6c03.js'
import {T as g} from './Typography-eebf5bae.js'
function S(o) {
  return M('MuiFormControlLabel', o)
}
const W = j('MuiFormControlLabel', [
    'root',
    'labelPlacementStart',
    'labelPlacementTop',
    'labelPlacementBottom',
    'disabled',
    'label',
    'error',
  ]),
  i = W,
  q = [
    'checked',
    'className',
    'componentsProps',
    'control',
    'disabled',
    'disableTypography',
    'inputRef',
    'label',
    'labelPlacement',
    'name',
    'onChange',
    'value',
  ],
  z = (o) => {
    const {classes: e, disabled: t, labelPlacement: l, error: m} = o,
      d = {
        root: ['root', t && 'disabled', `labelPlacement${P(l)}`, m && 'error'],
        label: ['label', t && 'disabled'],
      }
    return E(d, S, e)
  },
  A = N('label', {
    name: 'MuiFormControlLabel',
    slot: 'Root',
    overridesResolver: (o, e) => {
      const {ownerState: t} = o
      return [
        {[`& .${i.label}`]: e.label},
        e.root,
        e[`labelPlacement${P(t.labelPlacement)}`],
      ]
    },
  })(({theme: o, ownerState: e}) =>
    c(
      {
        display: 'inline-flex',
        alignItems: 'center',
        cursor: 'pointer',
        verticalAlign: 'middle',
        WebkitTapHighlightColor: 'transparent',
        marginLeft: -11,
        marginRight: 16,
        [`&.${i.disabled}`]: {cursor: 'default'},
      },
      e.labelPlacement === 'start' && {
        flexDirection: 'row-reverse',
        marginLeft: 16,
        marginRight: -11,
      },
      e.labelPlacement === 'top' && {
        flexDirection: 'column-reverse',
        marginLeft: 16,
      },
      e.labelPlacement === 'bottom' && {
        flexDirection: 'column',
        marginLeft: 16,
      },
      {
        [`& .${i.label}`]: {
          [`&.${i.disabled}`]: {color: (o.vars || o).palette.text.disabled},
        },
      }
    )
  ),
  B = C.forwardRef(function (e, t) {
    const l = R({props: e, name: 'MuiFormControlLabel'}),
      {
        className: m,
        componentsProps: d = {},
        control: s,
        disabled: h,
        disableTypography: L,
        label: y,
        labelPlacement: x = 'end',
      } = l,
      F = $(l, q),
      b = U()
    let a = h
    typeof a > 'u' && typeof s.props.disabled < 'u' && (a = s.props.disabled),
      typeof a > 'u' && b && (a = b.disabled)
    const p = {disabled: a}
    ;['checked', 'name', 'onChange', 'value', 'inputRef'].forEach((n) => {
      typeof s.props[n] > 'u' && typeof l[n] < 'u' && (p[n] = l[n])
    })
    const v = w({props: l, muiFormControl: b, states: ['error']}),
      f = c({}, l, {disabled: a, labelPlacement: x, error: v.error}),
      u = z(f)
    let r = y
    return (
      r != null &&
        r.type !== g &&
        !L &&
        (r = T(
          g,
          c({component: 'span', className: u.label}, d.typography, {
            children: r,
          })
        )),
      _(
        A,
        c({className: D(u.root, m), ownerState: f, ref: t}, F, {
          children: [C.cloneElement(s, p), r],
        })
      )
    )
  }),
  J = B
export {J as F}
//# sourceMappingURL=FormControlLabel-5a6a631a.js.map
