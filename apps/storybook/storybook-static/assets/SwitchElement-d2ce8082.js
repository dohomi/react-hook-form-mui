import {
  d as e,
  e as b,
  l as $,
  g as m,
  u as S,
  _ as f,
  j as i,
  b as C,
} from './useThemeProps-3be52b90.js'
import {
  n as x,
  o as y,
  p as d,
  c as z,
  q as B,
  C as R,
} from './Button-934b6c03.js'
import {F as M} from './FormControlLabel-5a6a631a.js'
import {_ as c} from './extends-98964cd2.js'
import {r as T} from './index-ebeaab24.js'
import {S as j} from './SwitchBase-bb4bde97.js'
function N(o) {
  return y('MuiSwitch', o)
}
const _ = x('MuiSwitch', [
    'root',
    'edgeStart',
    'edgeEnd',
    'switchBase',
    'colorPrimary',
    'colorSecondary',
    'sizeSmall',
    'sizeMedium',
    'checked',
    'disabled',
    'input',
    'thumb',
    'track',
  ]),
  a = _,
  I = ['className', 'color', 'edge', 'size', 'sx'],
  O = (o) => {
    const {classes: t, edge: r, size: s, color: p, checked: u, disabled: h} = o,
      g = {
        root: ['root', r && `edge${e(r)}`, `size${e(s)}`],
        switchBase: [
          'switchBase',
          `color${e(p)}`,
          u && 'checked',
          h && 'disabled',
        ],
        thumb: ['thumb'],
        track: ['track'],
        input: ['input'],
      },
      v = B(g, N, t)
    return c({}, t, v)
  },
  U = d('span', {
    name: 'MuiSwitch',
    slot: 'Root',
    overridesResolver: (o, t) => {
      const {ownerState: r} = o
      return [t.root, r.edge && t[`edge${e(r.edge)}`], t[`size${e(r.size)}`]]
    },
  })(({ownerState: o}) =>
    c(
      {
        display: 'inline-flex',
        width: 34 + 12 * 2,
        height: 14 + 12 * 2,
        overflow: 'hidden',
        padding: 12,
        boxSizing: 'border-box',
        position: 'relative',
        flexShrink: 0,
        zIndex: 0,
        verticalAlign: 'middle',
        '@media print': {colorAdjust: 'exact'},
      },
      o.edge === 'start' && {marginLeft: -8},
      o.edge === 'end' && {marginRight: -8},
      o.size === 'small' && {
        width: 40,
        height: 24,
        padding: 7,
        [`& .${a.thumb}`]: {width: 16, height: 16},
        [`& .${a.switchBase}`]: {
          padding: 4,
          [`&.${a.checked}`]: {transform: 'translateX(16px)'},
        },
      }
    )
  ),
  D = d(j, {
    name: 'MuiSwitch',
    slot: 'SwitchBase',
    overridesResolver: (o, t) => {
      const {ownerState: r} = o
      return [
        t.switchBase,
        {[`& .${a.input}`]: t.input},
        r.color !== 'default' && t[`color${e(r.color)}`],
      ]
    },
  })(
    ({theme: o}) => ({
      position: 'absolute',
      top: 0,
      left: 0,
      zIndex: 1,
      color: o.vars
        ? o.vars.palette.Switch.defaultColor
        : `${
            o.palette.mode === 'light'
              ? o.palette.common.white
              : o.palette.grey[300]
          }`,
      transition: o.transitions.create(['left', 'transform'], {
        duration: o.transitions.duration.shortest,
      }),
      [`&.${a.checked}`]: {transform: 'translateX(20px)'},
      [`&.${a.disabled}`]: {
        color: o.vars
          ? o.vars.palette.Switch.defaultDisabledColor
          : `${
              o.palette.mode === 'light'
                ? o.palette.grey[100]
                : o.palette.grey[600]
            }`,
      },
      [`&.${a.checked} + .${a.track}`]: {opacity: 0.5},
      [`&.${a.disabled} + .${a.track}`]: {
        opacity: o.vars
          ? o.vars.opacity.switchTrackDisabled
          : `${o.palette.mode === 'light' ? 0.12 : 0.2}`,
      },
      [`& .${a.input}`]: {left: '-100%', width: '300%'},
    }),
    ({theme: o, ownerState: t}) =>
      c(
        {
          '&:hover': {
            backgroundColor: o.vars
              ? `rgba(${o.vars.palette.action.activeChannel} / ${o.vars.palette.action.hoverOpacity})`
              : b(o.palette.action.active, o.palette.action.hoverOpacity),
            '@media (hover: none)': {backgroundColor: 'transparent'},
          },
        },
        t.color !== 'default' && {
          [`&.${a.checked}`]: {
            color: (o.vars || o).palette[t.color].main,
            '&:hover': {
              backgroundColor: o.vars
                ? `rgba(${o.vars.palette[t.color].mainChannel} / ${
                    o.vars.palette.action.hoverOpacity
                  })`
                : b(o.palette[t.color].main, o.palette.action.hoverOpacity),
              '@media (hover: none)': {backgroundColor: 'transparent'},
            },
            [`&.${a.disabled}`]: {
              color: o.vars
                ? o.vars.palette.Switch[`${t.color}DisabledColor`]
                : `${
                    o.palette.mode === 'light'
                      ? $(o.palette[t.color].main, 0.62)
                      : m(o.palette[t.color].main, 0.55)
                  }`,
            },
          },
          [`&.${a.checked} + .${a.track}`]: {
            backgroundColor: (o.vars || o).palette[t.color].main,
          },
        }
      )
  ),
  E = d('span', {
    name: 'MuiSwitch',
    slot: 'Track',
    overridesResolver: (o, t) => t.track,
  })(({theme: o}) => ({
    height: '100%',
    width: '100%',
    borderRadius: 14 / 2,
    zIndex: -1,
    transition: o.transitions.create(['opacity', 'background-color'], {
      duration: o.transitions.duration.shortest,
    }),
    backgroundColor: o.vars
      ? o.vars.palette.common.onBackground
      : `${
          o.palette.mode === 'light'
            ? o.palette.common.black
            : o.palette.common.white
        }`,
    opacity: o.vars
      ? o.vars.opacity.switchTrack
      : `${o.palette.mode === 'light' ? 0.38 : 0.3}`,
  })),
  L = d('span', {
    name: 'MuiSwitch',
    slot: 'Thumb',
    overridesResolver: (o, t) => t.thumb,
  })(({theme: o}) => ({
    boxShadow: (o.vars || o).shadows[1],
    backgroundColor: 'currentColor',
    width: 20,
    height: 20,
    borderRadius: '50%',
  })),
  P = T.forwardRef(function (t, r) {
    const s = S({props: t, name: 'MuiSwitch'}),
      {
        className: p,
        color: u = 'primary',
        edge: h = !1,
        size: g = 'medium',
        sx: v,
      } = s,
      k = f(s, I),
      l = c({}, s, {color: u, edge: h, size: g}),
      n = O(l),
      w = i(L, {className: n.thumb, ownerState: l})
    return C(U, {
      className: z(n.root, p),
      sx: v,
      ownerState: l,
      children: [
        i(
          D,
          c(
            {type: 'checkbox', icon: w, checkedIcon: w, ref: r, ownerState: l},
            k,
            {classes: c({}, n, {root: n.switchBase})}
          )
        ),
        i(E, {className: n.track, ownerState: l}),
      ],
    })
  }),
  A = P
function J({name: o, control: t, ...r}) {
  return i(R, {
    name: o,
    control: t,
    render: ({field: s}) =>
      i(M, {control: i(A, {...s, checked: !!s.value}), ...r}),
  })
}
export {J as S}
//# sourceMappingURL=SwitchElement-d2ce8082.js.map
