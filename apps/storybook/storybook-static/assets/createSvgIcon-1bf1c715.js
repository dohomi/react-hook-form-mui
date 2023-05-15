import {r as a, b as M, a as G} from './index-ebeaab24.js'
import {
  i as P,
  h as j,
  s as q,
  j as h,
  e as D,
  _ as F,
  f as y,
  c as U,
  a as V,
  Q as k,
  R as B,
  l as A,
  g as L,
  m as O,
} from './Button-934b6c03.js'
import {b as W, j as R} from './useThemeProps-3be52b90.js'
function Q(...e) {
  return e.reduce(
    (t, o) =>
      o == null
        ? t
        : function (...r) {
            t.apply(this, r), o.apply(this, r)
          },
    () => {}
  )
}
function Y(e, t = 166) {
  let o
  function n(...r) {
    const i = () => {
      e.apply(this, r)
    }
    clearTimeout(o), (o = setTimeout(i, t))
  }
  return (
    (n.clear = () => {
      clearTimeout(o)
    }),
    n
  )
}
function H(e, t) {
  return () => null
}
function J(e, t) {
  return a.isValidElement(e) && t.indexOf(e.type.muiName) !== -1
}
function z(e) {
  return (e && e.ownerDocument) || document
}
function K(e) {
  return z(e).defaultView || window
}
function X(e, t) {
  return () => null
}
let x = 0
function Z(e) {
  const [t, o] = a.useState(e),
    n = e || t
  return (
    a.useEffect(() => {
      t == null && ((x += 1), o(`mui-${x}`))
    }, [t]),
    n
  )
}
const b = M['useId']
function ee(e) {
  if (b !== void 0) {
    const t = b()
    return e ?? t
  }
  return Z(e)
}
function te(e, t, o, n, r) {
  return null
}
function oe({controlled: e, default: t, name: o, state: n = 'value'}) {
  const {current: r} = a.useRef(e !== void 0),
    [i, s] = a.useState(t),
    l = r ? e : i,
    u = a.useCallback((d) => {
      r || s(d)
    }, [])
  return [l, u]
}
const C = (e) => e,
  ne = () => {
    let e = C
    return {
      configure(t) {
        e = t
      },
      generate(t) {
        return e(t)
      },
      reset() {
        e = C
      },
    }
  },
  re = ne(),
  ae = re
function ie(e) {
  return P('MuiSvgIcon', e)
}
j('MuiSvgIcon', [
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
const se = [
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
  le = (e) => {
    const {color: t, fontSize: o, classes: n} = e,
      r = {root: ['root', t !== 'inherit' && `color${h(t)}`, `fontSize${h(o)}`]}
    return V(r, ie, n)
  },
  ue = q('svg', {
    name: 'MuiSvgIcon',
    slot: 'Root',
    overridesResolver: (e, t) => {
      const {ownerState: o} = e
      return [
        t.root,
        o.color !== 'inherit' && t[`color${h(o.color)}`],
        t[`fontSize${h(o.fontSize)}`],
      ]
    },
  })(({theme: e, ownerState: t}) => {
    var o, n, r, i, s, l, u, d, f, c, p, g, m, v, S, $, I
    return {
      userSelect: 'none',
      width: '1em',
      height: '1em',
      display: 'inline-block',
      fill: 'currentColor',
      flexShrink: 0,
      transition:
        (o = e.transitions) == null || (n = o.create) == null
          ? void 0
          : n.call(o, 'fill', {
              duration:
                (r = e.transitions) == null || (i = r.duration) == null
                  ? void 0
                  : i.shorter,
            }),
      fontSize: {
        inherit: 'inherit',
        small:
          ((s = e.typography) == null || (l = s.pxToRem) == null
            ? void 0
            : l.call(s, 20)) || '1.25rem',
        medium:
          ((u = e.typography) == null || (d = u.pxToRem) == null
            ? void 0
            : d.call(u, 24)) || '1.5rem',
        large:
          ((f = e.typography) == null || (c = f.pxToRem) == null
            ? void 0
            : c.call(f, 35)) || '2.1875rem',
      }[t.fontSize],
      color:
        (p =
          (g = (e.vars || e).palette) == null || (m = g[t.color]) == null
            ? void 0
            : m.main) != null
          ? p
          : {
              action:
                (v = (e.vars || e).palette) == null || (S = v.action) == null
                  ? void 0
                  : S.active,
              disabled:
                ($ = (e.vars || e).palette) == null || (I = $.action) == null
                  ? void 0
                  : I.disabled,
              inherit: void 0,
            }[t.color],
    }
  }),
  E = a.forwardRef(function (t, o) {
    const n = D({props: t, name: 'MuiSvgIcon'}),
      {
        children: r,
        className: i,
        color: s = 'inherit',
        component: l = 'svg',
        fontSize: u = 'medium',
        htmlColor: d,
        inheritViewBox: f = !1,
        titleAccess: c,
        viewBox: p = '0 0 24 24',
      } = n,
      g = F(n, se),
      m = y({}, n, {
        color: s,
        component: l,
        fontSize: u,
        instanceFontSize: t.fontSize,
        inheritViewBox: f,
        viewBox: p,
      }),
      v = {}
    f || (v.viewBox = p)
    const S = le(m)
    return W(
      ue,
      y(
        {
          as: l,
          className: U(S.root, i),
          focusable: 'false',
          color: d,
          'aria-hidden': c ? void 0 : !0,
          role: c ? 'img' : void 0,
          ref: o,
        },
        v,
        g,
        {ownerState: m, children: [r, c ? R('title', {children: c}) : null]}
      )
    )
  })
E.muiName = 'SvgIcon'
const w = E
function ce(e, t) {
  function o(n, r) {
    return R(w, y({'data-testid': `${t}Icon`, ref: r}, n, {children: e}))
  }
  return (o.muiName = w.muiName), a.memo(a.forwardRef(o))
}
const de = {
    configure: (e) => {
      console.warn(
        [
          'MUI: `ClassNameGenerator` import from `@mui/material/utils` is outdated and might cause unexpected issues.',
          '',
          "You should use `import { unstable_ClassNameGenerator } from '@mui/material/className'` instead",
          '',
          'The detail of the issue: https://github.com/mui/material-ui/issues/30011#issuecomment-1024993401',
          '',
          'The updated documentation: https://mui.com/guides/classname-generator/',
        ].join(`
`)
      ),
        ae.configure(e)
    },
  },
  fe = Object.freeze(
    Object.defineProperty(
      {
        __proto__: null,
        capitalize: h,
        createChainedFunction: Q,
        createSvgIcon: ce,
        debounce: Y,
        deprecatedPropType: H,
        isMuiElement: J,
        ownerDocument: z,
        ownerWindow: K,
        requirePropFactory: X,
        setRef: k,
        unstable_ClassNameGenerator: de,
        unstable_useEnhancedEffect: B,
        unstable_useId: ee,
        unsupportedProp: te,
        useControlled: oe,
        useEventCallback: A,
        useForkRef: L,
        useIsFocusVisible: O,
      },
      Symbol.toStringTag,
      {value: 'Module'}
    )
  )
var T = {exports: {}}
;(function (e) {
  function t(o) {
    return o && o.__esModule ? o : {default: o}
  }
  ;(e.exports = t), (e.exports.__esModule = !0), (e.exports.default = e.exports)
})(T)
var ge = T.exports,
  _ = {}
const pe = G(fe)
var N
function Se() {
  return (
    N ||
      ((N = 1),
      (function (e) {
        Object.defineProperty(e, '__esModule', {value: !0}),
          Object.defineProperty(e, 'default', {
            enumerable: !0,
            get: function () {
              return t.createSvgIcon
            },
          })
        var t = pe
      })(_)),
    _
  )
}
export {ae as C, ee as a, ge as i, Se as r, oe as u}
//# sourceMappingURL=createSvgIcon-1bf1c715.js.map
