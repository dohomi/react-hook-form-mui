import {
  u as A,
  _ as C,
  j as a,
  b as E,
  d as c,
} from './useThemeProps-3be52b90.js'
import {_ as m} from './extends-98964cd2.js'
import {r as f} from './index-ebeaab24.js'
import {
  n as I,
  o as L,
  p as $,
  K as z,
  M as T,
  c as _,
  q as M,
} from './Button-934b6c03.js'
import {T as R} from './Typography-eebf5bae.js'
function j(n) {
  return L('MuiInputAdornment', n)
}
const F = I('MuiInputAdornment', [
    'root',
    'filled',
    'standard',
    'outlined',
    'positionStart',
    'positionEnd',
    'disablePointerEvents',
    'hiddenLabel',
    'sizeSmall',
  ]),
  b = F
var g
const N = [
    'children',
    'className',
    'component',
    'disablePointerEvents',
    'disableTypography',
    'position',
    'variant',
  ],
  S = (n, t) => {
    const {ownerState: e} = n
    return [
      t.root,
      t[`position${c(e.position)}`],
      e.disablePointerEvents === !0 && t.disablePointerEvents,
      t[e.variant],
    ]
  },
  U = (n) => {
    const {
        classes: t,
        disablePointerEvents: e,
        hiddenLabel: s,
        position: o,
        size: r,
        variant: l,
      } = n,
      d = {
        root: [
          'root',
          e && 'disablePointerEvents',
          o && `position${c(o)}`,
          l,
          s && 'hiddenLabel',
          r && `size${c(r)}`,
        ],
      }
    return M(d, j, t)
  },
  w = $('div', {name: 'MuiInputAdornment', slot: 'Root', overridesResolver: S})(
    ({theme: n, ownerState: t}) =>
      m(
        {
          display: 'flex',
          height: '0.01em',
          maxHeight: '2em',
          alignItems: 'center',
          whiteSpace: 'nowrap',
          color: (n.vars || n).palette.action.active,
        },
        t.variant === 'filled' && {
          [`&.${b.positionStart}&:not(.${b.hiddenLabel})`]: {marginTop: 16},
        },
        t.position === 'start' && {marginRight: 8},
        t.position === 'end' && {marginLeft: 8},
        t.disablePointerEvents === !0 && {pointerEvents: 'none'}
      )
  ),
  q = f.forwardRef(function (t, e) {
    const s = A({props: t, name: 'MuiInputAdornment'}),
      {
        children: o,
        className: r,
        component: l = 'div',
        disablePointerEvents: d = !1,
        disableTypography: P = !1,
        position: u,
        variant: v,
      } = s,
      x = C(s, N),
      i = z() || {}
    let p = v
    v && i.variant, i && !p && (p = i.variant)
    const h = m({}, s, {
        hiddenLabel: i.hiddenLabel,
        size: i.size,
        disablePointerEvents: d,
        position: u,
        variant: p,
      }),
      y = U(h)
    return a(T.Provider, {
      value: null,
      children: a(
        w,
        m({as: l, ownerState: h, className: _(y.root, r), ref: e}, x, {
          children:
            typeof o == 'string' && !P
              ? a(R, {color: 'text.secondary', children: o})
              : E(f.Fragment, {
                  children: [
                    u === 'start'
                      ? g ||
                        (g = a('span', {
                          className: 'notranslate',
                          children: '​',
                        }))
                      : null,
                    o,
                  ],
                }),
        })
      ),
    })
  }),
  D = q
export {D as I}
//# sourceMappingURL=InputAdornment-70f38d8d.js.map
