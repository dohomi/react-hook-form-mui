import {e as c, u as G, _ as N, j as y} from './useThemeProps-3be52b90.js'
import {_ as i} from './extends-98964cd2.js'
import {r as g} from './index-ebeaab24.js'
import {
  n as d,
  o as L,
  p as P,
  D as S,
  G as U,
  E as _,
  c as x,
  q as j,
} from './Button-934b6c03.js'
import {L as I} from './Select-c55867f3.js'
import {B as D} from './ButtonBase-4a75c9e0.js'
const E = d('MuiDivider', [
    'root',
    'absolute',
    'fullWidth',
    'inset',
    'middle',
    'flexItem',
    'light',
    'vertical',
    'withChildren',
    'withChildrenVertical',
    'textAlignRight',
    'textAlignLeft',
    'wrapper',
    'wrapperVertical',
  ]),
  $ = E,
  H = d('MuiListItemIcon', ['root', 'alignItemsFlexStart']),
  M = H
function ae(e) {
  return L('MuiListItemText', e)
}
const W = d('MuiListItemText', [
    'root',
    'multiline',
    'dense',
    'inset',
    'primary',
    'secondary',
  ]),
  O = W
function z(e) {
  return L('MuiMenuItem', e)
}
const A = d('MuiMenuItem', [
    'root',
    'focusVisible',
    'dense',
    'disabled',
    'divider',
    'gutters',
    'selected',
  ]),
  o = A,
  q = [
    'autoFocus',
    'component',
    'dense',
    'divider',
    'disableGutters',
    'focusVisibleClassName',
    'role',
    'tabIndex',
    'className',
  ],
  h = (e, t) => {
    const {ownerState: s} = e
    return [
      t.root,
      s.dense && t.dense,
      s.divider && t.divider,
      !s.disableGutters && t.gutters,
    ]
  },
  J = (e) => {
    const {
        disabled: t,
        dense: s,
        divider: a,
        disableGutters: n,
        selected: p,
        classes: r,
      } = e,
      l = j(
        {
          root: [
            'root',
            s && 'dense',
            t && 'disabled',
            !n && 'gutters',
            a && 'divider',
            p && 'selected',
          ],
        },
        z,
        r
      )
    return i({}, r, l)
  },
  K = P(D, {
    shouldForwardProp: (e) => S(e) || e === 'classes',
    name: 'MuiMenuItem',
    slot: 'Root',
    overridesResolver: h,
  })(({theme: e, ownerState: t}) =>
    i(
      {},
      e.typography.body1,
      {
        display: 'flex',
        justifyContent: 'flex-start',
        alignItems: 'center',
        position: 'relative',
        textDecoration: 'none',
        minHeight: 48,
        paddingTop: 6,
        paddingBottom: 6,
        boxSizing: 'border-box',
        whiteSpace: 'nowrap',
      },
      !t.disableGutters && {paddingLeft: 16, paddingRight: 16},
      t.divider && {
        borderBottom: `1px solid ${(e.vars || e).palette.divider}`,
        backgroundClip: 'padding-box',
      },
      {
        '&:hover': {
          textDecoration: 'none',
          backgroundColor: (e.vars || e).palette.action.hover,
          '@media (hover: none)': {backgroundColor: 'transparent'},
        },
        [`&.${o.selected}`]: {
          backgroundColor: e.vars
            ? `rgba(${e.vars.palette.primary.mainChannel} / ${e.vars.palette.action.selectedOpacity})`
            : c(e.palette.primary.main, e.palette.action.selectedOpacity),
          [`&.${o.focusVisible}`]: {
            backgroundColor: e.vars
              ? `rgba(${e.vars.palette.primary.mainChannel} / calc(${e.vars.palette.action.selectedOpacity} + ${e.vars.palette.action.focusOpacity}))`
              : c(
                  e.palette.primary.main,
                  e.palette.action.selectedOpacity +
                    e.palette.action.focusOpacity
                ),
          },
        },
        [`&.${o.selected}:hover`]: {
          backgroundColor: e.vars
            ? `rgba(${e.vars.palette.primary.mainChannel} / calc(${e.vars.palette.action.selectedOpacity} + ${e.vars.palette.action.hoverOpacity}))`
            : c(
                e.palette.primary.main,
                e.palette.action.selectedOpacity + e.palette.action.hoverOpacity
              ),
          '@media (hover: none)': {
            backgroundColor: e.vars
              ? `rgba(${e.vars.palette.primary.mainChannel} / ${e.vars.palette.action.selectedOpacity})`
              : c(e.palette.primary.main, e.palette.action.selectedOpacity),
          },
        },
        [`&.${o.focusVisible}`]: {
          backgroundColor: (e.vars || e).palette.action.focus,
        },
        [`&.${o.disabled}`]: {
          opacity: (e.vars || e).palette.action.disabledOpacity,
        },
        [`& + .${$.root}`]: {
          marginTop: e.spacing(1),
          marginBottom: e.spacing(1),
        },
        [`& + .${$.inset}`]: {marginLeft: 52},
        [`& .${O.root}`]: {marginTop: 0, marginBottom: 0},
        [`& .${O.inset}`]: {paddingLeft: 36},
        [`& .${M.root}`]: {minWidth: 36},
      },
      !t.dense && {[e.breakpoints.up('sm')]: {minHeight: 'auto'}},
      t.dense &&
        i(
          {minHeight: 32, paddingTop: 4, paddingBottom: 4},
          e.typography.body2,
          {[`& .${M.root} svg`]: {fontSize: '1.25rem'}}
        )
    )
  ),
  Q = g.forwardRef(function (t, s) {
    const a = G({props: t, name: 'MuiMenuItem'}),
      {
        autoFocus: n = !1,
        component: p = 'li',
        dense: r = !1,
        divider: f = !1,
        disableGutters: l = !1,
        focusVisibleClassName: k,
        role: R = 'menuitem',
        tabIndex: b,
        className: T,
      } = a,
      w = N(a, q),
      V = g.useContext(I),
      v = {dense: r || V.dense || !1, disableGutters: l},
      u = g.useRef(null)
    U(() => {
      n && u.current && u.current.focus()
    }, [n])
    const B = i({}, a, {dense: v.dense, divider: f, disableGutters: l}),
      m = J(a),
      F = _(u, s)
    let C
    return (
      a.disabled || (C = b !== void 0 ? b : -1),
      y(I.Provider, {
        value: v,
        children: y(
          K,
          i(
            {
              ref: F,
              role: R,
              tabIndex: C,
              component: p,
              focusVisibleClassName: x(m.focusVisible, k),
              className: x(m.root, T),
            },
            w,
            {ownerState: B, classes: m}
          )
        ),
      })
    )
  }),
  oe = Q
export {oe as M, ae as g, O as l}
//# sourceMappingURL=MenuItem-4620b72b.js.map
