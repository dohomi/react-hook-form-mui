import {d as C, u as R, _ as W, j as F} from './useThemeProps-3be52b90.js'
import {_ as c} from './extends-98964cd2.js'
import {r as i} from './index-ebeaab24.js'
import {
  o as A,
  n as E,
  p as _,
  M as Q,
  c as L,
  q as U,
  K as X,
  L as Y,
} from './Button-934b6c03.js'
function h(e, r) {
  return i.isValidElement(e) && r.indexOf(e.type.muiName) !== -1
}
function $(e) {
  return e != null && !(Array.isArray(e) && e.length === 0)
}
function Z(e, r = !1) {
  return (
    e &&
    (($(e.value) && e.value !== '') ||
      (r && $(e.defaultValue) && e.defaultValue !== ''))
  )
}
function j(e) {
  return e.startAdornment
}
function ee(e) {
  return A('MuiFormControl', e)
}
E('MuiFormControl', [
  'root',
  'marginNone',
  'marginNormal',
  'marginDense',
  'fullWidth',
  'disabled',
])
const re = [
    'children',
    'className',
    'color',
    'component',
    'disabled',
    'error',
    'focused',
    'fullWidth',
    'hiddenLabel',
    'margin',
    'required',
    'size',
    'variant',
  ],
  oe = (e) => {
    const {classes: r, margin: t, fullWidth: s} = e,
      n = {root: ['root', t !== 'none' && `margin${C(t)}`, s && 'fullWidth']}
    return U(n, ee, r)
  },
  te = _('div', {
    name: 'MuiFormControl',
    slot: 'Root',
    overridesResolver: ({ownerState: e}, r) =>
      c({}, r.root, r[`margin${C(e.margin)}`], e.fullWidth && r.fullWidth),
  })(({ownerState: e}) =>
    c(
      {
        display: 'inline-flex',
        flexDirection: 'column',
        position: 'relative',
        minWidth: 0,
        padding: 0,
        margin: 0,
        border: 0,
        verticalAlign: 'top',
      },
      e.margin === 'normal' && {marginTop: 16, marginBottom: 8},
      e.margin === 'dense' && {marginTop: 8, marginBottom: 4},
      e.fullWidth && {width: '100%'}
    )
  ),
  se = i.forwardRef(function (r, t) {
    const s = R({props: r, name: 'MuiFormControl'}),
      {
        children: n,
        className: m,
        color: l = 'primary',
        component: u = 'div',
        disabled: a = !1,
        error: o = !1,
        focused: f,
        fullWidth: g = !1,
        hiddenLabel: v = !1,
        margin: B = 'none',
        required: T = !1,
        size: b = 'medium',
        variant: z = 'outlined',
      } = s,
      w = W(s, re),
      S = c({}, s, {
        color: l,
        component: u,
        disabled: a,
        error: o,
        fullWidth: g,
        hiddenLabel: v,
        margin: B,
        required: T,
        size: b,
        variant: z,
      }),
      V = oe(S),
      [P, k] = i.useState(() => {
        let p = !1
        return (
          n &&
            i.Children.forEach(n, (d) => {
              if (!h(d, ['Input', 'Select'])) return
              const M = h(d, ['Select']) ? d.props.input : d
              M && j(M.props) && (p = !0)
            }),
          p
        )
      }),
      [D, y] = i.useState(() => {
        let p = !1
        return (
          n &&
            i.Children.forEach(n, (d) => {
              h(d, ['Input', 'Select']) && Z(d.props, !0) && (p = !0)
            }),
          p
        )
      }),
      [H, x] = i.useState(!1)
    a && H && x(!1)
    const I = f !== void 0 && !a ? f : H
    let K
    const O = i.useCallback(() => {
        y(!0)
      }, []),
      G = i.useCallback(() => {
        y(!1)
      }, []),
      J = {
        adornedStart: P,
        setAdornedStart: k,
        color: l,
        disabled: a,
        error: o,
        filled: D,
        focused: I,
        fullWidth: g,
        hiddenLabel: v,
        size: b,
        onBlur: () => {
          x(!1)
        },
        onEmpty: G,
        onFilled: O,
        onFocus: () => {
          x(!0)
        },
        registerEffect: K,
        required: T,
        variant: z,
      }
    return F(Q.Provider, {
      value: J,
      children: F(
        te,
        c({as: u, ownerState: S, className: L(V.root, m), ref: t}, w, {
          children: n,
        })
      ),
    })
  }),
  ge = se
function ne(e) {
  return A('MuiFormHelperText', e)
}
const ie = E('MuiFormHelperText', [
    'root',
    'error',
    'disabled',
    'sizeSmall',
    'sizeMedium',
    'contained',
    'focused',
    'filled',
    'required',
  ]),
  q = ie
var N
const ae = [
    'children',
    'className',
    'component',
    'disabled',
    'error',
    'filled',
    'focused',
    'margin',
    'required',
    'variant',
  ],
  le = (e) => {
    const {
        classes: r,
        contained: t,
        size: s,
        disabled: n,
        error: m,
        filled: l,
        focused: u,
        required: a,
      } = e,
      o = {
        root: [
          'root',
          n && 'disabled',
          m && 'error',
          s && `size${C(s)}`,
          t && 'contained',
          u && 'focused',
          l && 'filled',
          a && 'required',
        ],
      }
    return U(o, ne, r)
  },
  de = _('p', {
    name: 'MuiFormHelperText',
    slot: 'Root',
    overridesResolver: (e, r) => {
      const {ownerState: t} = e
      return [
        r.root,
        t.size && r[`size${C(t.size)}`],
        t.contained && r.contained,
        t.filled && r.filled,
      ]
    },
  })(({theme: e, ownerState: r}) =>
    c(
      {color: (e.vars || e).palette.text.secondary},
      e.typography.caption,
      {
        textAlign: 'left',
        marginTop: 3,
        marginRight: 0,
        marginBottom: 0,
        marginLeft: 0,
        [`&.${q.disabled}`]: {color: (e.vars || e).palette.text.disabled},
        [`&.${q.error}`]: {color: (e.vars || e).palette.error.main},
      },
      r.size === 'small' && {marginTop: 4},
      r.contained && {marginLeft: 14, marginRight: 14}
    )
  ),
  ce = i.forwardRef(function (r, t) {
    const s = R({props: r, name: 'MuiFormHelperText'}),
      {children: n, className: m, component: l = 'p'} = s,
      u = W(s, ae),
      a = X(),
      o = Y({
        props: s,
        muiFormControl: a,
        states: [
          'variant',
          'size',
          'disabled',
          'error',
          'filled',
          'focused',
          'required',
        ],
      }),
      f = c({}, s, {
        component: l,
        contained: o.variant === 'filled' || o.variant === 'outlined',
        variant: o.variant,
        size: o.size,
        disabled: o.disabled,
        error: o.error,
        filled: o.filled,
        focused: o.focused,
        required: o.required,
      }),
      g = le(f)
    return F(
      de,
      c({as: l, ownerState: f, className: L(g.root, m), ref: t}, u, {
        children:
          n === ' '
            ? N || (N = F('span', {className: 'notranslate', children: '​'}))
            : n,
      })
    )
  }),
  Fe = ce
export {ge as F, Fe as a, Z as b, h as i}
//# sourceMappingURL=FormHelperText-a02b62e1.js.map
