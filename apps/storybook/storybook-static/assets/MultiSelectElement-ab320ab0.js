import {u as k, _ as A, j as t, b as C} from './useThemeProps-3be52b90.js'
import {r as H, i as B} from './createSvgIcon-f095371f.js'
import {r as G} from './jsx-runtime_commonjs-proxy-93a23ed8.js'
import {p as O, c as U, q as V, t as J, C as K} from './Button-934b6c03.js'
import {F as Q, a as X} from './FormHelperText-a02b62e1.js'
import {L as Y, I as Z, S as ee} from './Select-c55867f3.js'
import {C as re} from './Chip-6299b5c8.js'
import {l as q, g as se, M as te} from './MenuItem-4620b72b.js'
import {C as ae} from './Checkbox-d8c1e2f4.js'
import {_ as T} from './extends-98964cd2.js'
import {r as w} from './index-ebeaab24.js'
import {T as M} from './Typography-eebf5bae.js'
const oe = [
    'children',
    'className',
    'disableTypography',
    'inset',
    'primary',
    'primaryTypographyProps',
    'secondary',
    'secondaryTypographyProps',
  ],
  ie = (s) => {
    const {classes: e, inset: a, primary: d, secondary: x, dense: m} = s
    return V(
      {
        root: ['root', a && 'inset', m && 'dense', d && x && 'multiline'],
        primary: ['primary'],
        secondary: ['secondary'],
      },
      se,
      e
    )
  },
  ne = O('div', {
    name: 'MuiListItemText',
    slot: 'Root',
    overridesResolver: (s, e) => {
      const {ownerState: a} = s
      return [
        {[`& .${q.primary}`]: e.primary},
        {[`& .${q.secondary}`]: e.secondary},
        e.root,
        a.inset && e.inset,
        a.primary && a.secondary && e.multiline,
        a.dense && e.dense,
      ]
    },
  })(({ownerState: s}) =>
    T(
      {flex: '1 1 auto', minWidth: 0, marginTop: 4, marginBottom: 4},
      s.primary && s.secondary && {marginTop: 6, marginBottom: 6},
      s.inset && {paddingLeft: 56}
    )
  ),
  le = w.forwardRef(function (e, a) {
    const d = k({props: e, name: 'MuiListItemText'}),
      {
        children: x,
        className: m,
        disableTypography: n = !1,
        inset: _ = !1,
        primary: y,
        primaryTypographyProps: g,
        secondary: b,
        secondaryTypographyProps: L,
      } = d,
      u = A(d, oe),
      {dense: v} = w.useContext(Y)
    let l = y ?? x,
      p = b
    const I = T({}, d, {
        disableTypography: n,
        inset: _,
        primary: !!l,
        secondary: !!p,
        dense: v,
      }),
      c = ie(I)
    return (
      l != null &&
        l.type !== M &&
        !n &&
        (l = t(
          M,
          T(
            {
              variant: v ? 'body2' : 'body1',
              className: c.primary,
              component: g != null && g.variant ? void 0 : 'span',
              display: 'block',
            },
            g,
            {children: l}
          )
        )),
      p != null &&
        p.type !== M &&
        !n &&
        (p = t(
          M,
          T(
            {
              variant: 'body2',
              className: c.secondary,
              color: 'text.secondary',
              display: 'block',
            },
            L,
            {children: p}
          )
        )),
      C(
        ne,
        T({className: U(c.root, m), ownerState: I, ref: a}, u, {
          children: [l, p],
        })
      )
    )
  }),
  pe = le
var W = {},
  ce = B
Object.defineProperty(W, '__esModule', {value: !0})
var z = (W.default = void 0),
  de = ce(H()),
  me = G,
  ye = (0, de.default)(
    (0, me.jsx)('path', {
      d: 'M12 2C6.47 2 2 6.47 2 12s4.47 10 10 10 10-4.47 10-10S17.53 2 12 2zm5 13.59L15.59 17 12 13.41 8.41 17 7 15.59 10.59 12 7 8.41 8.41 7 12 10.59 15.59 7 17 8.41 13.41 12 17 15.59z',
    }),
    'Cancel'
  )
z = W.default = ye
const ue = 48,
  fe = 8
function We({
  options: s,
  label: e = '',
  itemKey: a = 'id',
  itemValue: d = '',
  itemLabel: x = 'label',
  required: m = !1,
  validation: n = {},
  parseError: _,
  name: y,
  menuMaxHeight: g = ue * 4.5 + fe,
  menuMaxWidth: b = 250,
  minWidth: L = 120,
  helperText: u,
  showChips: v,
  preserveOrder: l,
  control: p,
  showCheckbox: I,
  formControlProps: c,
  ...r
}) {
  const D = J(),
    j = _ || D
  return (
    m && !n.required && (n.required = 'This field is required'),
    t(K, {
      name: y,
      rules: n,
      control: p,
      render: ({
        field: {value: P, onChange: E, onBlur: N},
        fieldState: {error: f},
      }) => {
        var R, S, F
        return (
          (u = f ? (typeof j == 'function' ? j(f) : f.message) : u),
          C(Q, {
            ...c,
            style: {...(c == null ? void 0 : c.style), minWidth: L},
            variant: r.variant,
            fullWidth: r.fullWidth,
            error: !!f,
            size: r.size,
            children: [
              e &&
                t(Z, {
                  size: r.size === 'small' ? 'small' : void 0,
                  error: !!f,
                  htmlFor: r.id || `select-multi-select-${y}`,
                  required: m,
                  children: e,
                }),
              t(ee, {
                ...r,
                id: r.id || `select-multi-select-${y}`,
                multiple: !0,
                label: e || void 0,
                error: !!f,
                value: P || [],
                required: m,
                onChange: E,
                onBlur: N,
                MenuProps: {
                  ...r.MenuProps,
                  PaperProps: {
                    ...(((R = r.MenuProps) == null ? void 0 : R.PaperProps) ?? {
                      style: {
                        maxHeight: g,
                        width: b,
                        ...((F =
                          (S = r.MenuProps) == null ? void 0 : S.PaperProps) ==
                        null
                          ? void 0
                          : F.style),
                      },
                    }),
                  },
                },
                renderValue:
                  typeof r.renderValue == 'function'
                    ? r.renderValue
                    : v
                    ? (o) =>
                        t('div', {
                          style: {display: 'flex', flexWrap: 'wrap'},
                          children: (l
                            ? s.filter((i) => o.includes(i))
                            : o || []
                          ).map((i) =>
                            t(
                              re,
                              {
                                label: i,
                                style: {display: 'flex', flexWrap: 'wrap'},
                                onDelete: () => {
                                  E(P.filter((h) => h !== i))
                                },
                                deleteIcon: t(z, {
                                  onMouseDown: (h) => {
                                    h.stopPropagation()
                                  },
                                }),
                              },
                              i
                            )
                          ),
                        })
                    : (o) => (Array.isArray(o) ? o.join(', ') : ''),
                children: s.map((o) => {
                  const i = o[d || a] || o,
                    h = Array.isArray(P) ? P.includes(i) : !1
                  return C(
                    te,
                    {
                      value: i,
                      sx: {
                        fontWeight: ($) =>
                          h
                            ? $.typography.fontWeightBold
                            : $.typography.fontWeightRegular,
                      },
                      children: [
                        I && t(ae, {checked: h}),
                        t(pe, {primary: o[x] || o}),
                      ],
                    },
                    i
                  )
                }),
              }),
              u && t(X, {children: u}),
            ],
          })
        )
      },
    })
  )
}
export {We as M}
//# sourceMappingURL=MultiSelectElement-ab320ab0.js.map
