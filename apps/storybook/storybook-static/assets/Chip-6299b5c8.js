import {
  j as z,
  d as r,
  e as s,
  u as H,
  _ as q,
  b as G,
} from './useThemeProps-3be52b90.js'
import {_ as p} from './extends-98964cd2.js'
import {r as v} from './index-ebeaab24.js'
import {
  n as J,
  o as Q,
  p as S,
  E as X,
  c as f,
  q as Y,
} from './Button-934b6c03.js'
import {c as Z} from './createSvgIcon-2ce5bfe4.js'
import {B as E} from './ButtonBase-4a75c9e0.js'
const h = Z(
  z('path', {
    d: 'M12 2C6.47 2 2 6.47 2 12s4.47 10 10 10 10-4.47 10-10S17.53 2 12 2zm5 13.59L15.59 17 12 13.41 8.41 17 7 15.59 10.59 12 7 8.41 8.41 7 12 10.59 15.59 7 17 8.41 13.41 12 17 15.59z',
  }),
  'Cancel'
)
function w(a) {
  return Q('MuiChip', a)
}
const aa = J('MuiChip', [
    'root',
    'sizeSmall',
    'sizeMedium',
    'colorError',
    'colorInfo',
    'colorPrimary',
    'colorSecondary',
    'colorSuccess',
    'colorWarning',
    'disabled',
    'clickable',
    'clickableColorPrimary',
    'clickableColorSecondary',
    'deletable',
    'deletableColorPrimary',
    'deletableColorSecondary',
    'outlined',
    'filled',
    'outlinedPrimary',
    'outlinedSecondary',
    'filledPrimary',
    'filledSecondary',
    'avatar',
    'avatarSmall',
    'avatarMedium',
    'avatarColorPrimary',
    'avatarColorSecondary',
    'icon',
    'iconSmall',
    'iconMedium',
    'iconColorPrimary',
    'iconColorSecondary',
    'label',
    'labelSmall',
    'labelMedium',
    'deleteIcon',
    'deleteIconSmall',
    'deleteIconMedium',
    'deleteIconColorPrimary',
    'deleteIconColorSecondary',
    'deleteIconOutlinedColorPrimary',
    'deleteIconOutlinedColorSecondary',
    'deleteIconFilledColorPrimary',
    'deleteIconFilledColorSecondary',
    'focusVisible',
  ]),
  l = aa,
  oa = [
    'avatar',
    'className',
    'clickable',
    'color',
    'component',
    'deleteIcon',
    'disabled',
    'icon',
    'label',
    'onClick',
    'onDelete',
    'onKeyDown',
    'onKeyUp',
    'size',
    'variant',
  ],
  la = (a) => {
    const {
        classes: o,
        disabled: t,
        size: e,
        color: c,
        onDelete: b,
        clickable: n,
        variant: d,
      } = a,
      g = {
        root: [
          'root',
          d,
          t && 'disabled',
          `size${r(e)}`,
          `color${r(c)}`,
          n && 'clickable',
          n && `clickableColor${r(c)}`,
          b && 'deletable',
          b && `deletableColor${r(c)}`,
          `${d}${r(c)}`,
        ],
        label: ['label', `label${r(e)}`],
        avatar: ['avatar', `avatar${r(e)}`, `avatarColor${r(c)}`],
        icon: ['icon', `icon${r(e)}`, `iconColor${r(c)}`],
        deleteIcon: [
          'deleteIcon',
          `deleteIcon${r(e)}`,
          `deleteIconColor${r(c)}`,
          `deleteIcon${r(d)}Color${r(c)}`,
        ],
      }
    return Y(g, w, o)
  },
  ra = S('div', {
    name: 'MuiChip',
    slot: 'Root',
    overridesResolver: (a, o) => {
      const {ownerState: t} = a,
        {color: e, clickable: c, onDelete: b, size: n, variant: d} = t
      return [
        {[`& .${l.avatar}`]: o.avatar},
        {[`& .${l.avatar}`]: o[`avatar${r(n)}`]},
        {[`& .${l.avatar}`]: o[`avatarColor${r(e)}`]},
        {[`& .${l.icon}`]: o.icon},
        {[`& .${l.icon}`]: o[`icon${r(n)}`]},
        {[`& .${l.icon}`]: o[`iconColor${r(e)}`]},
        {[`& .${l.deleteIcon}`]: o.deleteIcon},
        {[`& .${l.deleteIcon}`]: o[`deleteIcon${r(n)}`]},
        {[`& .${l.deleteIcon}`]: o[`deleteIconColor${r(e)}`]},
        {[`& .${l.deleteIcon}`]: o[`deleteIcon${r(d)}Color${r(e)}`]},
        o.root,
        o[`size${r(n)}`],
        o[`color${r(e)}`],
        c && o.clickable,
        c && e !== 'default' && o[`clickableColor${r(e)})`],
        b && o.deletable,
        b && e !== 'default' && o[`deletableColor${r(e)}`],
        o[d],
        o[`${d}${r(e)}`],
      ]
    },
  })(
    ({theme: a, ownerState: o}) => {
      const t = s(a.palette.text.primary, 0.26),
        e =
          a.palette.mode === 'light' ? a.palette.grey[700] : a.palette.grey[300]
      return p(
        {
          maxWidth: '100%',
          fontFamily: a.typography.fontFamily,
          fontSize: a.typography.pxToRem(13),
          display: 'inline-flex',
          alignItems: 'center',
          justifyContent: 'center',
          height: 32,
          color: (a.vars || a).palette.text.primary,
          backgroundColor: (a.vars || a).palette.action.selected,
          borderRadius: 32 / 2,
          whiteSpace: 'nowrap',
          transition: a.transitions.create(['background-color', 'box-shadow']),
          cursor: 'default',
          outline: 0,
          textDecoration: 'none',
          border: 0,
          padding: 0,
          verticalAlign: 'middle',
          boxSizing: 'border-box',
          [`&.${l.disabled}`]: {
            opacity: (a.vars || a).palette.action.disabledOpacity,
            pointerEvents: 'none',
          },
          [`& .${l.avatar}`]: {
            marginLeft: 5,
            marginRight: -6,
            width: 24,
            height: 24,
            color: a.vars ? a.vars.palette.Chip.defaultAvatarColor : e,
            fontSize: a.typography.pxToRem(12),
          },
          [`& .${l.avatarColorPrimary}`]: {
            color: (a.vars || a).palette.primary.contrastText,
            backgroundColor: (a.vars || a).palette.primary.dark,
          },
          [`& .${l.avatarColorSecondary}`]: {
            color: (a.vars || a).palette.secondary.contrastText,
            backgroundColor: (a.vars || a).palette.secondary.dark,
          },
          [`& .${l.avatarSmall}`]: {
            marginLeft: 4,
            marginRight: -4,
            width: 18,
            height: 18,
            fontSize: a.typography.pxToRem(10),
          },
          [`& .${l.icon}`]: p(
            {
              color: a.vars ? a.vars.palette.Chip.defaultIconColor : e,
              marginLeft: 5,
              marginRight: -6,
            },
            o.size === 'small' && {
              fontSize: 18,
              marginLeft: 4,
              marginRight: -4,
            },
            o.color !== 'default' && {color: 'inherit'}
          ),
          [`& .${l.deleteIcon}`]: p(
            {
              WebkitTapHighlightColor: 'transparent',
              color: a.vars
                ? `rgba(${a.vars.palette.text.primaryChannel} / 0.26)`
                : t,
              fontSize: 22,
              cursor: 'pointer',
              margin: '0 5px 0 -6px',
              '&:hover': {
                color: a.vars
                  ? `rgba(${a.vars.palette.text.primaryChannel} / 0.4)`
                  : s(t, 0.4),
              },
            },
            o.size === 'small' && {
              fontSize: 16,
              marginRight: 4,
              marginLeft: -4,
            },
            o.color !== 'default' && {
              color: a.vars
                ? `rgba(${a.vars.palette[o.color].contrastTextChannel} / 0.7)`
                : s(a.palette[o.color].contrastText, 0.7),
              '&:hover, &:active': {
                color: (a.vars || a).palette[o.color].contrastText,
              },
            }
          ),
        },
        o.size === 'small' && {height: 24},
        o.color !== 'default' && {
          backgroundColor: (a.vars || a).palette[o.color].main,
          color: (a.vars || a).palette[o.color].contrastText,
        },
        o.onDelete && {
          [`&.${l.focusVisible}`]: {
            backgroundColor: a.vars
              ? `rgba(${a.vars.palette.action.selectedChannel} / calc(${
                  a.vars.palette.action.selectedOpacity +
                  a.vars.palette.action.focusOpacity
                }))`
              : s(
                  a.palette.action.selected,
                  a.palette.action.selectedOpacity +
                    a.palette.action.focusOpacity
                ),
          },
        },
        o.onDelete &&
          o.color !== 'default' && {
            [`&.${l.focusVisible}`]: {
              backgroundColor: (a.vars || a).palette[o.color].dark,
            },
          }
      )
    },
    ({theme: a, ownerState: o}) =>
      p(
        {},
        o.clickable && {
          userSelect: 'none',
          WebkitTapHighlightColor: 'transparent',
          cursor: 'pointer',
          '&:hover': {
            backgroundColor: a.vars
              ? `rgba(${a.vars.palette.action.selectedChannel} / calc(${
                  a.vars.palette.action.selectedOpacity +
                  a.vars.palette.action.hoverOpacity
                }))`
              : s(
                  a.palette.action.selected,
                  a.palette.action.selectedOpacity +
                    a.palette.action.hoverOpacity
                ),
          },
          [`&.${l.focusVisible}`]: {
            backgroundColor: a.vars
              ? `rgba(${a.vars.palette.action.selectedChannel} / calc(${
                  a.vars.palette.action.selectedOpacity +
                  a.vars.palette.action.focusOpacity
                }))`
              : s(
                  a.palette.action.selected,
                  a.palette.action.selectedOpacity +
                    a.palette.action.focusOpacity
                ),
          },
          '&:active': {boxShadow: (a.vars || a).shadows[1]},
        },
        o.clickable &&
          o.color !== 'default' && {
            [`&:hover, &.${l.focusVisible}`]: {
              backgroundColor: (a.vars || a).palette[o.color].dark,
            },
          }
      ),
    ({theme: a, ownerState: o}) =>
      p(
        {},
        o.variant === 'outlined' && {
          backgroundColor: 'transparent',
          border: a.vars
            ? `1px solid ${a.vars.palette.Chip.defaultBorder}`
            : `1px solid ${
                a.palette.mode === 'light'
                  ? a.palette.grey[400]
                  : a.palette.grey[700]
              }`,
          [`&.${l.clickable}:hover`]: {
            backgroundColor: (a.vars || a).palette.action.hover,
          },
          [`&.${l.focusVisible}`]: {
            backgroundColor: (a.vars || a).palette.action.focus,
          },
          [`& .${l.avatar}`]: {marginLeft: 4},
          [`& .${l.avatarSmall}`]: {marginLeft: 2},
          [`& .${l.icon}`]: {marginLeft: 4},
          [`& .${l.iconSmall}`]: {marginLeft: 2},
          [`& .${l.deleteIcon}`]: {marginRight: 5},
          [`& .${l.deleteIconSmall}`]: {marginRight: 3},
        },
        o.variant === 'outlined' &&
          o.color !== 'default' && {
            color: (a.vars || a).palette[o.color].main,
            border: `1px solid ${
              a.vars
                ? `rgba(${a.vars.palette[o.color].mainChannel} / 0.7)`
                : s(a.palette[o.color].main, 0.7)
            }`,
            [`&.${l.clickable}:hover`]: {
              backgroundColor: a.vars
                ? `rgba(${a.vars.palette[o.color].mainChannel} / ${
                    a.vars.palette.action.hoverOpacity
                  })`
                : s(a.palette[o.color].main, a.palette.action.hoverOpacity),
            },
            [`&.${l.focusVisible}`]: {
              backgroundColor: a.vars
                ? `rgba(${a.vars.palette[o.color].mainChannel} / ${
                    a.vars.palette.action.focusOpacity
                  })`
                : s(a.palette[o.color].main, a.palette.action.focusOpacity),
            },
            [`& .${l.deleteIcon}`]: {
              color: a.vars
                ? `rgba(${a.vars.palette[o.color].mainChannel} / 0.7)`
                : s(a.palette[o.color].main, 0.7),
              '&:hover, &:active': {color: (a.vars || a).palette[o.color].main},
            },
          }
      )
  ),
  ea = S('span', {
    name: 'MuiChip',
    slot: 'Label',
    overridesResolver: (a, o) => {
      const {ownerState: t} = a,
        {size: e} = t
      return [o.label, o[`label${r(e)}`]]
    },
  })(({ownerState: a}) =>
    p(
      {
        overflow: 'hidden',
        textOverflow: 'ellipsis',
        paddingLeft: 12,
        paddingRight: 12,
        whiteSpace: 'nowrap',
      },
      a.size === 'small' && {paddingLeft: 8, paddingRight: 8}
    )
  )
function M(a) {
  return a.key === 'Backspace' || a.key === 'Delete'
}
const ca = v.forwardRef(function (o, t) {
    const e = H({props: o, name: 'MuiChip'}),
      {
        avatar: c,
        className: b,
        clickable: n,
        color: d = 'default',
        component: g,
        deleteIcon: $,
        disabled: R = !1,
        icon: y,
        label: K,
        onClick: O,
        onDelete: u,
        onKeyDown: P,
        onKeyUp: D,
        size: U = 'medium',
        variant: j = 'filled',
      } = e,
      B = q(e, oa),
      k = v.useRef(null),
      F = X(k, t),
      L = (i) => {
        i.stopPropagation(), u && u(i)
      },
      W = (i) => {
        i.currentTarget === i.target && M(i) && i.preventDefault(), P && P(i)
      },
      _ = (i) => {
        i.currentTarget === i.target &&
          (u && M(i)
            ? u(i)
            : i.key === 'Escape' && k.current && k.current.blur()),
          D && D(i)
      },
      I = n !== !1 && O ? !0 : n,
      x = I || u ? E : g || 'div',
      m = p({}, e, {
        component: x,
        disabled: R,
        size: U,
        color: d,
        onDelete: !!u,
        clickable: I,
        variant: j,
      }),
      C = la(m),
      A =
        x === E
          ? p(
              {component: g || 'div', focusVisibleClassName: C.focusVisible},
              u && {disableRipple: !0}
            )
          : {}
    let T = null
    u &&
      (T =
        $ && v.isValidElement($)
          ? v.cloneElement($, {
              className: f($.props.className, C.deleteIcon),
              onClick: L,
            })
          : z(h, {className: f(C.deleteIcon), onClick: L}))
    let N = null
    c &&
      v.isValidElement(c) &&
      (N = v.cloneElement(c, {className: f(C.avatar, c.props.className)}))
    let V = null
    return (
      y &&
        v.isValidElement(y) &&
        (V = v.cloneElement(y, {className: f(C.icon, y.props.className)})),
      G(
        ra,
        p(
          {
            as: x,
            className: f(C.root, b),
            disabled: I && R ? !0 : void 0,
            onClick: O,
            onKeyDown: W,
            onKeyUp: _,
            ref: F,
            ownerState: m,
          },
          A,
          B,
          {
            children: [
              N || V,
              z(ea, {className: f(C.label), ownerState: m, children: K}),
              T,
            ],
          }
        )
      )
    )
  }),
  ua = ca
export {ua as C}
//# sourceMappingURL=Chip-6299b5c8.js.map
