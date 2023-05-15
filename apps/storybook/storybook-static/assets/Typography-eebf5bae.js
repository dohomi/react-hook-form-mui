import {
  _ as u,
  o as T,
  d as f,
  u as B,
  j as W,
} from './useThemeProps-3be52b90.js'
import {_ as s} from './extends-98964cd2.js'
import {r as C} from './index-ebeaab24.js'
import {
  N as M,
  o as _,
  n as j,
  p as R,
  c as N,
  q as U,
} from './Button-934b6c03.js'
const $ = ['sx'],
  A = (r) => {
    const t = {systemProps: {}, otherProps: {}}
    return (
      Object.keys(r).forEach((o) => {
        M[o] ? (t.systemProps[o] = r[o]) : (t.otherProps[o] = r[o])
      }),
      t
    )
  }
function O(r) {
  const {sx: t} = r,
    o = u(r, $),
    {systemProps: n, otherProps: i} = A(o)
  let a
  return (
    Array.isArray(t)
      ? (a = [n, ...t])
      : typeof t == 'function'
      ? (a = (...p) => {
          const e = t(...p)
          return T(e) ? s({}, n, e) : n
        })
      : (a = s({}, n, t)),
    s({}, i, {sx: a})
  )
}
function E(r) {
  return _('MuiTypography', r)
}
j('MuiTypography', [
  'root',
  'h1',
  'h2',
  'h3',
  'h4',
  'h5',
  'h6',
  'subtitle1',
  'subtitle2',
  'body1',
  'body2',
  'inherit',
  'button',
  'caption',
  'overline',
  'alignLeft',
  'alignRight',
  'alignCenter',
  'alignJustify',
  'noWrap',
  'gutterBottom',
  'paragraph',
])
const L = [
    'align',
    'className',
    'component',
    'gutterBottom',
    'noWrap',
    'paragraph',
    'variant',
    'variantMapping',
  ],
  S = (r) => {
    const {
        align: t,
        gutterBottom: o,
        noWrap: n,
        paragraph: i,
        variant: a,
        classes: p,
      } = r,
      e = {
        root: [
          'root',
          a,
          r.align !== 'inherit' && `align${f(t)}`,
          o && 'gutterBottom',
          n && 'noWrap',
          i && 'paragraph',
        ],
      }
    return U(e, E, p)
  },
  k = R('span', {
    name: 'MuiTypography',
    slot: 'Root',
    overridesResolver: (r, t) => {
      const {ownerState: o} = r
      return [
        t.root,
        o.variant && t[o.variant],
        o.align !== 'inherit' && t[`align${f(o.align)}`],
        o.noWrap && t.noWrap,
        o.gutterBottom && t.gutterBottom,
        o.paragraph && t.paragraph,
      ]
    },
  })(({theme: r, ownerState: t}) =>
    s(
      {margin: 0},
      t.variant && r.typography[t.variant],
      t.align !== 'inherit' && {textAlign: t.align},
      t.noWrap && {
        overflow: 'hidden',
        textOverflow: 'ellipsis',
        whiteSpace: 'nowrap',
      },
      t.gutterBottom && {marginBottom: '0.35em'},
      t.paragraph && {marginBottom: 16}
    )
  ),
  y = {
    h1: 'h1',
    h2: 'h2',
    h3: 'h3',
    h4: 'h4',
    h5: 'h5',
    h6: 'h6',
    subtitle1: 'h6',
    subtitle2: 'h6',
    body1: 'p',
    body2: 'p',
    inherit: 'p',
  },
  q = {
    primary: 'primary.main',
    textPrimary: 'text.primary',
    secondary: 'secondary.main',
    textSecondary: 'text.secondary',
    error: 'error.main',
  },
  w = (r) => q[r] || r,
  z = C.forwardRef(function (t, o) {
    const n = B({props: t, name: 'MuiTypography'}),
      i = w(n.color),
      a = O(s({}, n, {color: i})),
      {
        align: p = 'inherit',
        className: e,
        component: c,
        gutterBottom: d = !1,
        noWrap: x = !1,
        paragraph: h = !1,
        variant: l = 'body1',
        variantMapping: g = y,
      } = a,
      v = u(a, L),
      m = s({}, a, {
        align: p,
        color: i,
        className: e,
        component: c,
        gutterBottom: d,
        noWrap: x,
        paragraph: h,
        variant: l,
        variantMapping: g,
      }),
      b = c || (h ? 'p' : g[l] || y[l]) || 'span',
      P = S(m)
    return W(k, s({as: b, ref: o, ownerState: m, className: N(P.root, e)}, v))
  }),
  G = z
export {G as T, O as e}
//# sourceMappingURL=Typography-eebf5bae.js.map
