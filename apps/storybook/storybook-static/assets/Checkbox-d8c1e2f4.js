import {
  j as t,
  d as f,
  e as P,
  u as B,
  _ as S,
} from './useThemeProps-3be52b90.js'
import {_ as a} from './extends-98964cd2.js'
import {r as d} from './index-ebeaab24.js'
import {
  n as g,
  o as M,
  p as _,
  D as H,
  c as R,
  q as O,
} from './Button-934b6c03.js'
import {S as U} from './SwitchBase-bb4bde97.js'
import {c as m} from './createSvgIcon-2ce5bfe4.js'
const V = m(
    t('path', {
      d: 'M19 5v14H5V5h14m0-2H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2z',
    }),
    'CheckBoxOutlineBlank'
  ),
  j = m(
    t('path', {
      d: 'M19 3H5c-1.11 0-2 .9-2 2v14c0 1.1.89 2 2 2h14c1.11 0 2-.9 2-2V5c0-1.1-.89-2-2-2zm-9 14l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z',
    }),
    'CheckBox'
  ),
  E = m(
    t('path', {
      d: 'M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm-2 10H7v-2h10v2z',
    }),
    'IndeterminateCheckBox'
  )
function L(o) {
  return M('MuiCheckbox', o)
}
const N = g('MuiCheckbox', [
    'root',
    'checked',
    'disabled',
    'indeterminate',
    'colorPrimary',
    'colorSecondary',
  ]),
  p = N,
  w = [
    'checkedIcon',
    'color',
    'icon',
    'indeterminate',
    'indeterminateIcon',
    'inputProps',
    'size',
    'className',
  ],
  F = (o) => {
    const {classes: e, indeterminate: c, color: r} = o,
      s = {root: ['root', c && 'indeterminate', `color${f(r)}`]},
      n = O(s, L, e)
    return a({}, e, n)
  },
  q = _(U, {
    shouldForwardProp: (o) => H(o) || o === 'classes',
    name: 'MuiCheckbox',
    slot: 'Root',
    overridesResolver: (o, e) => {
      const {ownerState: c} = o
      return [
        e.root,
        c.indeterminate && e.indeterminate,
        c.color !== 'default' && e[`color${f(c.color)}`],
      ]
    },
  })(({theme: o, ownerState: e}) =>
    a(
      {color: (o.vars || o).palette.text.secondary},
      !e.disableRipple && {
        '&:hover': {
          backgroundColor: o.vars
            ? `rgba(${
                e.color === 'default'
                  ? o.vars.palette.action.activeChannel
                  : o.vars.palette.primary.mainChannel
              } / ${o.vars.palette.action.hoverOpacity})`
            : P(
                e.color === 'default'
                  ? o.palette.action.active
                  : o.palette[e.color].main,
                o.palette.action.hoverOpacity
              ),
          '@media (hover: none)': {backgroundColor: 'transparent'},
        },
      },
      e.color !== 'default' && {
        [`&.${p.checked}, &.${p.indeterminate}`]: {
          color: (o.vars || o).palette[e.color].main,
        },
        [`&.${p.disabled}`]: {color: (o.vars || o).palette.action.disabled},
      }
    )
  ),
  D = t(j, {}),
  T = t(V, {}),
  W = t(E, {}),
  A = d.forwardRef(function (e, c) {
    var r, s
    const n = B({props: e, name: 'MuiCheckbox'}),
      {
        checkedIcon: v = D,
        color: b = 'primary',
        icon: I = T,
        indeterminate: i = !1,
        indeterminateIcon: u = W,
        inputProps: z,
        size: l = 'medium',
        className: $,
      } = n,
      y = S(n, w),
      h = i ? u : I,
      C = i ? u : v,
      k = a({}, n, {color: b, indeterminate: i, size: l}),
      x = F(k)
    return t(
      q,
      a(
        {
          type: 'checkbox',
          inputProps: a({'data-indeterminate': i}, z),
          icon: d.cloneElement(h, {
            fontSize: (r = h.props.fontSize) != null ? r : l,
          }),
          checkedIcon: d.cloneElement(C, {
            fontSize: (s = C.props.fontSize) != null ? s : l,
          }),
          ownerState: k,
          ref: c,
          className: R(x.root, $),
        },
        y,
        {classes: x}
      )
    )
  }),
  Z = A
export {Z as C}
//# sourceMappingURL=Checkbox-d8c1e2f4.js.map
