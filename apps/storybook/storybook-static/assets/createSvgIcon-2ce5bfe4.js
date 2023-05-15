import {_ as g} from './extends-98964cd2.js'
import {r as $} from './index-ebeaab24.js'
import {
  d as S,
  u as w,
  _ as C,
  b as R,
  j as z,
} from './useThemeProps-3be52b90.js'
import {o as b, n as N, p as B, c as M, q as T} from './Button-934b6c03.js'
function j(o) {
  return b('MuiSvgIcon', o)
}
N('MuiSvgIcon', [
  'root',
  'colorPrimary',
  'colorSecondary',
  'colorAction',
  'colorError',
  'colorDisabled',
  'fontSizeInherit',
  'fontSizeSmall',
  'fontSizeMedium',
  'fontSizeLarge',
])
const U = [
    'children',
    'className',
    'color',
    'component',
    'fontSize',
    'htmlColor',
    'inheritViewBox',
    'titleAccess',
    'viewBox',
  ],
  A = (o) => {
    const {color: e, fontSize: t, classes: n} = o,
      i = {root: ['root', e !== 'inherit' && `color${S(e)}`, `fontSize${S(t)}`]}
    return T(i, j, n)
  },
  k = B('svg', {
    name: 'MuiSvgIcon',
    slot: 'Root',
    overridesResolver: (o, e) => {
      const {ownerState: t} = o
      return [
        e.root,
        t.color !== 'inherit' && e[`color${S(t.color)}`],
        e[`fontSize${S(t.fontSize)}`],
      ]
    },
  })(({theme: o, ownerState: e}) => {
    var t, n, i, m, a, s, c, v, l, r, d, f, u, p, h, y, _
    return {
      userSelect: 'none',
      width: '1em',
      height: '1em',
      display: 'inline-block',
      fill: 'currentColor',
      flexShrink: 0,
      transition:
        (t = o.transitions) == null || (n = t.create) == null
          ? void 0
          : n.call(t, 'fill', {
              duration:
                (i = o.transitions) == null || (m = i.duration) == null
                  ? void 0
                  : m.shorter,
            }),
      fontSize: {
        inherit: 'inherit',
        small:
          ((a = o.typography) == null || (s = a.pxToRem) == null
            ? void 0
            : s.call(a, 20)) || '1.25rem',
        medium:
          ((c = o.typography) == null || (v = c.pxToRem) == null
            ? void 0
            : v.call(c, 24)) || '1.5rem',
        large:
          ((l = o.typography) == null || (r = l.pxToRem) == null
            ? void 0
            : r.call(l, 35)) || '2.1875rem',
      }[e.fontSize],
      color:
        (d =
          (f = (o.vars || o).palette) == null || (u = f[e.color]) == null
            ? void 0
            : u.main) != null
          ? d
          : {
              action:
                (p = (o.vars || o).palette) == null || (h = p.action) == null
                  ? void 0
                  : h.active,
              disabled:
                (y = (o.vars || o).palette) == null || (_ = y.action) == null
                  ? void 0
                  : _.disabled,
              inherit: void 0,
            }[e.color],
    }
  }),
  I = $.forwardRef(function (e, t) {
    const n = w({props: e, name: 'MuiSvgIcon'}),
      {
        children: i,
        className: m,
        color: a = 'inherit',
        component: s = 'svg',
        fontSize: c = 'medium',
        htmlColor: v,
        inheritViewBox: l = !1,
        titleAccess: r,
        viewBox: d = '0 0 24 24',
      } = n,
      f = C(n, U),
      u = g({}, n, {
        color: a,
        component: s,
        fontSize: c,
        instanceFontSize: e.fontSize,
        inheritViewBox: l,
        viewBox: d,
      }),
      p = {}
    l || (p.viewBox = d)
    const h = A(u)
    return R(
      k,
      g(
        {
          as: s,
          className: M(h.root, m),
          focusable: 'false',
          color: v,
          'aria-hidden': r ? void 0 : !0,
          role: r ? 'img' : void 0,
          ref: t,
        },
        p,
        f,
        {ownerState: u, children: [i, r ? z('title', {children: r}) : null]}
      )
    )
  })
I.muiName = 'SvgIcon'
const x = I
function q(o, e) {
  function t(n, i) {
    return z(x, g({'data-testid': `${e}Icon`, ref: i}, n, {children: o}))
  }
  return (t.muiName = x.muiName), $.memo($.forwardRef(t))
}
export {q as c}
//# sourceMappingURL=createSvgIcon-2ce5bfe4.js.map
