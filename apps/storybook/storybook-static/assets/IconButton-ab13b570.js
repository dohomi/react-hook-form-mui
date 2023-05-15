import {
  d as r,
  e as u,
  u as z,
  _ as m,
  j as R,
} from './useThemeProps-3be52b90.js'
import {_ as t} from './extends-98964cd2.js'
import {r as y} from './index-ebeaab24.js'
import {n as B, o as C, p as $, c as x, q as I} from './Button-934b6c03.js'
import {B as h} from './ButtonBase-4a75c9e0.js'
function k(o) {
  return C('MuiIconButton', o)
}
const M = B('MuiIconButton', [
    'root',
    'disabled',
    'colorInherit',
    'colorPrimary',
    'colorSecondary',
    'edgeStart',
    'edgeEnd',
    'sizeSmall',
    'sizeMedium',
    'sizeLarge',
  ]),
  _ = M,
  O = [
    'edge',
    'children',
    'className',
    'color',
    'disabled',
    'disableFocusRipple',
    'size',
  ],
  T = (o) => {
    const {classes: a, disabled: s, color: e, edge: i, size: n} = o,
      l = {
        root: [
          'root',
          s && 'disabled',
          e !== 'default' && `color${r(e)}`,
          i && `edge${r(i)}`,
          `size${r(n)}`,
        ],
      }
    return I(l, k, a)
  },
  U = $(h, {
    name: 'MuiIconButton',
    slot: 'Root',
    overridesResolver: (o, a) => {
      const {ownerState: s} = o
      return [
        a.root,
        s.color !== 'default' && a[`color${r(s.color)}`],
        s.edge && a[`edge${r(s.edge)}`],
        a[`size${r(s.size)}`],
      ]
    },
  })(
    ({theme: o, ownerState: a}) =>
      t(
        {
          textAlign: 'center',
          flex: '0 0 auto',
          fontSize: o.typography.pxToRem(24),
          padding: 8,
          borderRadius: '50%',
          overflow: 'visible',
          color: (o.vars || o).palette.action.active,
          transition: o.transitions.create('background-color', {
            duration: o.transitions.duration.shortest,
          }),
        },
        !a.disableRipple && {
          '&:hover': {
            backgroundColor: o.vars
              ? `rgba(${o.vars.palette.action.activeChannel} / ${o.vars.palette.action.hoverOpacity})`
              : u(o.palette.action.active, o.palette.action.hoverOpacity),
            '@media (hover: none)': {backgroundColor: 'transparent'},
          },
        },
        a.edge === 'start' && {marginLeft: a.size === 'small' ? -3 : -12},
        a.edge === 'end' && {marginRight: a.size === 'small' ? -3 : -12}
      ),
    ({theme: o, ownerState: a}) =>
      t(
        {},
        a.color === 'inherit' && {color: 'inherit'},
        a.color !== 'inherit' &&
          a.color !== 'default' &&
          t(
            {color: (o.vars || o).palette[a.color].main},
            !a.disableRipple && {
              '&:hover': {
                backgroundColor: o.vars
                  ? `rgba(${o.vars.palette[a.color].mainChannel} / ${
                      o.vars.palette.action.hoverOpacity
                    })`
                  : u(o.palette[a.color].main, o.palette.action.hoverOpacity),
                '@media (hover: none)': {backgroundColor: 'transparent'},
              },
            }
          ),
        a.size === 'small' && {padding: 5, fontSize: o.typography.pxToRem(18)},
        a.size === 'large' && {padding: 12, fontSize: o.typography.pxToRem(28)},
        {
          [`&.${_.disabled}`]: {
            backgroundColor: 'transparent',
            color: (o.vars || o).palette.action.disabled,
          },
        }
      )
  ),
  j = y.forwardRef(function (a, s) {
    const e = z({props: a, name: 'MuiIconButton'}),
      {
        edge: i = !1,
        children: n,
        className: l,
        color: g = 'default',
        disabled: c = !1,
        disableFocusRipple: d = !1,
        size: f = 'medium',
      } = e,
      v = m(e, O),
      p = t({}, e, {
        edge: i,
        color: g,
        disabled: c,
        disableFocusRipple: d,
        size: f,
      }),
      b = T(p)
    return R(
      U,
      t(
        {
          className: x(b.root, l),
          centerRipple: !0,
          focusRipple: !d,
          disabled: c,
          ref: s,
          ownerState: p,
        },
        v,
        {children: n}
      )
    )
  }),
  q = j
export {q as I}
//# sourceMappingURL=IconButton-ab13b570.js.map
