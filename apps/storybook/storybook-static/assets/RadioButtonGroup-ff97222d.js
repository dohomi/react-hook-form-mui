import {
  j as a,
  b as G,
  d as N,
  e as L,
  u as A,
  _ as U,
} from './useThemeProps-3be52b90.js'
import {r as c} from './index-ebeaab24.js'
import {
  p as z,
  n as O,
  o as T,
  D as W,
  c as Z,
  q as J,
  E as Q,
  t as X,
  A as Y,
} from './Button-934b6c03.js'
import {F as K, a as oo} from './FormHelperText-a02b62e1.js'
import {F as eo} from './FormLabel-977af3e7.js'
import {_ as R} from './extends-98964cd2.js'
import {u as to} from './useControlled-32189460.js'
import {c as no, u as ao} from './useId-3f89f7ef.js'
import {F as ro} from './FormGroup-d89e04af.js'
import {F as P} from './FormControlLabel-5a6a631a.js'
import {S as so} from './SwitchBase-bb4bde97.js'
import {c as V} from './createSvgIcon-2ce5bfe4.js'
import {u as co} from './useTheme-ccc2f4e9.js'
const io = V(
    a('path', {
      d: 'M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.42 0-8-3.58-8-8s3.58-8 8-8 8 3.58 8 8-3.58 8-8 8z',
    }),
    'RadioButtonUnchecked'
  ),
  lo = V(
    a('path', {
      d: 'M8.465 8.465C9.37 7.56 10.62 7 12 7C14.76 7 17 9.24 17 12C17 13.38 16.44 14.63 15.535 15.535C14.63 16.44 13.38 17 12 17C9.24 17 7 14.76 7 12C7 10.62 7.56 9.37 8.465 8.465Z',
    }),
    'RadioButtonChecked'
  ),
  uo = z('span')({position: 'relative', display: 'flex'}),
  fo = z(io)({transform: 'scale(1)'}),
  po = z(lo)(({theme: o, ownerState: e}) =>
    R(
      {
        left: 0,
        position: 'absolute',
        transform: 'scale(0)',
        transition: o.transitions.create('transform', {
          easing: o.transitions.easing.easeIn,
          duration: o.transitions.duration.shortest,
        }),
      },
      e.checked && {
        transform: 'scale(1)',
        transition: o.transitions.create('transform', {
          easing: o.transitions.easing.easeOut,
          duration: o.transitions.duration.shortest,
        }),
      }
    )
  )
function q(o) {
  const {checked: e = !1, classes: t = {}, fontSize: r} = o,
    s = R({}, o, {checked: e})
  return G(uo, {
    className: t.root,
    ownerState: s,
    children: [
      a(fo, {fontSize: r, className: t.background, ownerState: s}),
      a(po, {fontSize: r, className: t.dot, ownerState: s}),
    ],
  })
}
const mo = c.createContext(void 0),
  j = mo
function ho() {
  return c.useContext(j)
}
function Co(o) {
  return T('MuiRadio', o)
}
const Ro = O('MuiRadio', [
    'root',
    'checked',
    'disabled',
    'colorPrimary',
    'colorSecondary',
  ]),
  E = Ro,
  go = [
    'checked',
    'checkedIcon',
    'color',
    'icon',
    'name',
    'onChange',
    'size',
    'className',
  ],
  vo = (o) => {
    const {classes: e, color: t} = o,
      r = {root: ['root', `color${N(t)}`]}
    return R({}, e, J(r, Co, e))
  },
  ko = z(so, {
    shouldForwardProp: (o) => W(o) || o === 'classes',
    name: 'MuiRadio',
    slot: 'Root',
    overridesResolver: (o, e) => {
      const {ownerState: t} = o
      return [e.root, e[`color${N(t.color)}`]]
    },
  })(({theme: o, ownerState: e}) =>
    R(
      {
        color: (o.vars || o).palette.text.secondary,
        '&:hover': {
          backgroundColor: o.vars
            ? `rgba(${
                e.color === 'default'
                  ? o.vars.palette.action.activeChannel
                  : o.vars.palette[e.color].mainChannel
              } / ${o.vars.palette.action.hoverOpacity})`
            : L(
                e.color === 'default'
                  ? o.palette.action.active
                  : o.palette[e.color].main,
                o.palette.action.hoverOpacity
              ),
          '@media (hover: none)': {backgroundColor: 'transparent'},
        },
      },
      e.color !== 'default' && {
        [`&.${E.checked}`]: {color: (o.vars || o).palette[e.color].main},
      },
      {[`&.${E.disabled}`]: {color: (o.vars || o).palette.action.disabled}}
    )
  )
function So(o, e) {
  return typeof e == 'object' && e !== null ? o === e : String(o) === String(e)
}
const _ = a(q, {checked: !0}),
  w = a(q, {}),
  yo = c.forwardRef(function (e, t) {
    var r, s
    const i = A({props: e, name: 'MuiRadio'}),
      {
        checked: l,
        checkedIcon: f = _,
        color: g = 'primary',
        icon: v = w,
        name: p,
        onChange: I,
        size: m = 'medium',
        className: k,
      } = i,
      x = U(i, go),
      S = R({}, i, {color: g, size: m}),
      n = vo(S),
      d = ho()
    let F = l
    const b = no(I, d && d.onChange)
    let u = p
    return (
      d &&
        (typeof F > 'u' && (F = So(d.value, i.value)),
        typeof u > 'u' && (u = d.name)),
      a(
        ko,
        R(
          {
            type: 'radio',
            icon: c.cloneElement(v, {
              fontSize: (r = w.props.fontSize) != null ? r : m,
            }),
            checkedIcon: c.cloneElement(f, {
              fontSize: (s = _.props.fontSize) != null ? s : m,
            }),
            ownerState: S,
            classes: n,
            name: u,
            checked: F,
            onChange: b,
            ref: t,
            className: Z(n.root, k),
          },
          x
        )
      )
    )
  }),
  M = yo,
  Io = ['actions', 'children', 'defaultValue', 'name', 'onChange', 'value'],
  xo = c.forwardRef(function (e, t) {
    const {
        actions: r,
        children: s,
        defaultValue: i,
        name: l,
        onChange: f,
        value: g,
      } = e,
      v = U(e, Io),
      p = c.useRef(null),
      [I, m] = to({controlled: g, default: i, name: 'RadioGroup'})
    c.useImperativeHandle(
      r,
      () => ({
        focus: () => {
          let n = p.current.querySelector('input:not(:disabled):checked')
          n || (n = p.current.querySelector('input:not(:disabled)')),
            n && n.focus()
        },
      }),
      []
    )
    const k = Q(t, p),
      x = (n) => {
        m(n.target.value), f && f(n, n.target.value)
      },
      S = ao(l)
    return a(j.Provider, {
      value: {name: S, onChange: x, value: I},
      children: a(ro, R({role: 'radiogroup', ref: k}, v, {children: s})),
    })
  }),
  Fo = xo
function qo({
  helperText: o,
  options: e,
  label: t,
  name: r,
  parseError: s,
  labelKey: i = 'label',
  valueKey: l = 'id',
  required: f,
  emptyOptionLabel: g,
  returnObject: v,
  row: p,
  control: I,
  type: m,
  labelProps: k,
  disabled: x,
  formLabelProps: S,
  ...n
}) {
  const d = co(),
    F = X(),
    b = s || F,
    {
      field: {value: u, onChange: D},
      fieldState: {error: h},
    } = Y({
      name: r,
      rules: f ? {required: 'This field is required'} : void 0,
      control: I,
    })
  o = h ? (typeof b == 'function' ? b(h) : h.message) : o
  const H = ($) => {
    const C = $.target.value,
      y = v ? e.find((B) => B[l] === C) : C
    D(y), typeof n.onChange == 'function' && n.onChange(y)
  }
  return G(K, {
    error: !!h,
    children: [
      t && a(eo, {...S, required: f, error: !!h, children: t}),
      G(Fo, {
        onChange: H,
        name: r,
        row: p,
        value: u || '',
        children: [
          g &&
            a(P, {
              ...k,
              control: a(M, {
                sx: {color: h ? d.palette.error.main : void 0},
                checked: !u,
              }),
              label: g,
              value: '',
            }),
          e.map(($) => {
            const C = $[l]
            C ||
              console.error(
                `CheckboxButtonGroup: valueKey ${l} does not exist on option`,
                $
              )
            let y = v ? u[l] : u
            m === 'number' && (y = Number(y))
            const B = y === C
            return c.createElement(P, {
              ...k,
              control: a(M, {
                sx: {color: h ? d.palette.error.main : void 0},
                disabled: x,
                checked: B,
              }),
              value: C,
              label: $[i],
              key: C,
            })
          }),
        ],
      }),
      o && a(oo, {children: o}),
    ],
  })
}
export {qo as R}
//# sourceMappingURL=RadioButtonGroup-ff97222d.js.map
