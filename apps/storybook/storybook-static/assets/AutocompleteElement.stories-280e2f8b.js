import {j as g, b as qe} from './useThemeProps-3be52b90.js'
import {
  u as Oo,
  d as Io,
  c as X,
  a as eo,
  s as Me,
  b as Lo,
  e as to,
  _ as He,
  f as p,
  g as oo,
  h as ko,
  i as Fo,
  j as ro,
  k as no,
  l as Ao,
  m as No,
  F as Do,
  B as Wo,
} from './Button-934b6c03.js'
import {r as s} from './index-ebeaab24.js'
import {A as Ve} from './AutocompleteElement-eb924e8a.js'
import {a as qo} from './chunk-OPEUWD42-a3b45fd8.js'
import {
  C as Bo,
  u as Uo,
  a as jo,
  r as Ho,
  i as Vo,
} from './createSvgIcon-1bf1c715.js'
import {r as zo} from './jsx-runtime_commonjs-proxy-93a23ed8.js'
import {r as Go} from './index-9c09ad76.js'
import {c as Ko} from './Popper-852f71a7.js'
import {T as Zo} from './Select-c55867f3.js'
import {B as Xo} from './Box-339dd07d.js'
import './extends-98964cd2.js'
import './assertThisInitialized-5649ae8b.js'
import './createSvgIcon-2ce5bfe4.js'
import './IconButton-ab13b570.js'
import './ButtonBase-4a75c9e0.js'
import './useIsFocusVisible-1a875561.js'
import './useId-3f89f7ef.js'
import './useControlled-32189460.js'
import './Chip-6299b5c8.js'
import './Checkbox-d8c1e2f4.js'
import './SwitchBase-bb4bde97.js'
import './TextField-4354f47c.js'
import './FormHelperText-a02b62e1.js'
import './useSlotProps-692f4a62.js'
import './FormLabel-977af3e7.js'
import './react-is.production.min-a192e302.js'
import './useTheme-ccc2f4e9.js'
function so() {
  return Oo(Io)
}
function P() {
  return (
    (P = Object.assign
      ? Object.assign.bind()
      : function (e) {
          for (var t = 1; t < arguments.length; t++) {
            var o = arguments[t]
            for (var r in o)
              Object.prototype.hasOwnProperty.call(o, r) && (e[r] = o[r])
          }
          return e
        }),
    P.apply(this, arguments)
  )
}
function Yo(e) {
  return typeof e == 'string'
}
function se(e, t, o) {
  return Yo(e) ? t : P({}, t, {ownerState: P({}, t.ownerState, o)})
}
function Jo(e, t = []) {
  if (e === void 0) return {}
  const o = {}
  return (
    Object.keys(e)
      .filter(
        (r) =>
          r.match(/^on[A-Z]/) && typeof e[r] == 'function' && !t.includes(r)
      )
      .forEach((r) => {
        o[r] = e[r]
      }),
    o
  )
}
function Qo(e, t) {
  return typeof e == 'function' ? e(t) : e
}
function ze(e, t) {
  if (e == null) return {}
  var o = {},
    r = Object.keys(e),
    n,
    i
  for (i = 0; i < r.length; i++)
    (n = r[i]), !(t.indexOf(n) >= 0) && (o[n] = e[n])
  return o
}
function er(e) {
  return (e && e.ownerDocument) || document
}
function Be(e, t) {
  typeof e == 'function' ? e(t) : e && (e.current = t)
}
const tr = typeof window < 'u' ? s.useLayoutEffect : s.useEffect,
  Se = tr
function Ce(...e) {
  return s.useMemo(
    () =>
      e.every((t) => t == null)
        ? null
        : (t) => {
            e.forEach((o) => {
              Be(o, t)
            })
          },
    e
  )
}
const or = {
  active: 'active',
  checked: 'checked',
  completed: 'completed',
  disabled: 'disabled',
  error: 'error',
  expanded: 'expanded',
  focused: 'focused',
  focusVisible: 'focusVisible',
  required: 'required',
  selected: 'selected',
}
function io(e, t, o = 'Mui') {
  const r = or[t]
  return r ? `${o}-${r}` : `${Bo.generate(e)}-${t}`
}
function rr(e, t, o = 'Mui') {
  const r = {}
  return (
    t.forEach((n) => {
      r[n] = io(e, n, o)
    }),
    r
  )
}
function ht(e) {
  if (e === void 0) return {}
  const t = {}
  return (
    Object.keys(e)
      .filter((o) => !(o.match(/^on[A-Z]/) && typeof e[o] == 'function'))
      .forEach((o) => {
        t[o] = e[o]
      }),
    t
  )
}
function nr(e) {
  const {
    getSlotProps: t,
    additionalProps: o,
    externalSlotProps: r,
    externalForwardedProps: n,
    className: i,
  } = e
  if (!t) {
    const y = X(
        n == null ? void 0 : n.className,
        r == null ? void 0 : r.className,
        i,
        o == null ? void 0 : o.className
      ),
      v = P(
        {},
        o == null ? void 0 : o.style,
        n == null ? void 0 : n.style,
        r == null ? void 0 : r.style
      ),
      m = P({}, o, n, r)
    return (
      y.length > 0 && (m.className = y),
      Object.keys(v).length > 0 && (m.style = v),
      {props: m, internalRef: void 0}
    )
  }
  const l = Jo(P({}, n, r)),
    f = ht(r),
    d = ht(n),
    u = t(l),
    h = X(
      u == null ? void 0 : u.className,
      o == null ? void 0 : o.className,
      i,
      n == null ? void 0 : n.className,
      r == null ? void 0 : r.className
    ),
    b = P(
      {},
      u == null ? void 0 : u.style,
      o == null ? void 0 : o.style,
      n == null ? void 0 : n.style,
      r == null ? void 0 : r.style
    ),
    $ = P({}, u, o, d, f)
  return (
    h.length > 0 && ($.className = h),
    Object.keys(b).length > 0 && ($.style = b),
    {props: $, internalRef: u.ref}
  )
}
const sr = ['elementType', 'externalSlotProps', 'ownerState']
function ir(e) {
  var t
  const {elementType: o, externalSlotProps: r, ownerState: n} = e,
    i = ze(e, sr),
    l = Qo(r, n),
    {props: f, internalRef: d} = nr(P({}, i, {externalSlotProps: l})),
    u = Ce(
      d,
      l == null ? void 0 : l.ref,
      (t = e.additionalProps) == null ? void 0 : t.ref
    )
  return se(o, P({}, f, {ref: u}), n)
}
function ar(e) {
  return typeof e == 'function' ? e() : e
}
const lr = s.forwardRef(function (t, o) {
    const {children: r, container: n, disablePortal: i = !1} = t,
      [l, f] = s.useState(null),
      d = Ce(s.isValidElement(r) ? r.ref : null, o)
    return (
      Se(() => {
        i || f(ar(n) || document.body)
      }, [n, i]),
      Se(() => {
        if (l && !i)
          return (
            Be(o, l),
            () => {
              Be(o, null)
            }
          )
      }, [o, l, i]),
      i
        ? s.isValidElement(r)
          ? s.cloneElement(r, {ref: d})
          : r
        : g(s.Fragment, {children: l && Go.createPortal(r, l)})
    )
  }),
  pr = lr
function cr(e) {
  return io('MuiPopperUnstyled', e)
}
rr('MuiPopperUnstyled', ['root'])
const ur = [
    'anchorEl',
    'children',
    'component',
    'direction',
    'disablePortal',
    'modifiers',
    'open',
    'ownerState',
    'placement',
    'popperOptions',
    'popperRef',
    'slotProps',
    'slots',
    'TransitionProps',
  ],
  dr = [
    'anchorEl',
    'children',
    'container',
    'direction',
    'disablePortal',
    'keepMounted',
    'modifiers',
    'open',
    'placement',
    'popperOptions',
    'popperRef',
    'style',
    'transition',
  ]
function mr(e, t) {
  if (t === 'ltr') return e
  switch (e) {
    case 'bottom-end':
      return 'bottom-start'
    case 'bottom-start':
      return 'bottom-end'
    case 'top-end':
      return 'top-start'
    case 'top-start':
      return 'top-end'
    default:
      return e
  }
}
function Ue(e) {
  return typeof e == 'function' ? e() : e
}
const fr = () => eo({root: ['root']}, cr, {}),
  hr = {},
  gr = s.forwardRef(function (t, o) {
    var r
    const {
        anchorEl: n,
        children: i,
        component: l,
        direction: f,
        disablePortal: d,
        modifiers: u,
        open: h,
        ownerState: b,
        placement: $,
        popperOptions: y,
        popperRef: v,
        slotProps: m = {},
        slots: q = {},
        TransitionProps: _,
      } = t,
      A = ze(t, ur),
      O = s.useRef(null),
      w = Ce(O, o),
      R = s.useRef(null),
      D = Ce(R, v),
      S = s.useRef(D)
    Se(() => {
      S.current = D
    }, [D]),
      s.useImperativeHandle(v, () => R.current, [])
    const x = mr($, f),
      [B, I] = s.useState(x)
    s.useEffect(() => {
      R.current && R.current.forceUpdate()
    }),
      Se(() => {
        if (!n || !h) return
        const c = (N) => {
          I(N.placement)
        }
        Ue(n)
        let T = [
          {name: 'preventOverflow', options: {altBoundary: d}},
          {name: 'flip', options: {altBoundary: d}},
          {
            name: 'onUpdate',
            enabled: !0,
            phase: 'afterWrite',
            fn: ({state: N}) => {
              c(N)
            },
          },
        ]
        u != null && (T = T.concat(u)),
          y && y.modifiers != null && (T = T.concat(y.modifiers))
        const E = Ko(Ue(n), O.current, P({placement: x}, y, {modifiers: T}))
        return (
          S.current(E),
          () => {
            E.destroy(), S.current(null)
          }
        )
      }, [n, d, u, h, y, x])
    const K = {placement: B}
    _ !== null && (K.TransitionProps = _)
    const Y = fr(),
      H = (r = l ?? q.root) != null ? r : 'div',
      J = ir({
        elementType: H,
        externalSlotProps: m.root,
        externalForwardedProps: A,
        additionalProps: {role: 'tooltip', ref: w},
        ownerState: P({}, t, b),
        className: Y.root,
      })
    return g(H, P({}, J, {children: typeof i == 'function' ? i(K) : i}))
  }),
  Tr = s.forwardRef(function (t, o) {
    const {
        anchorEl: r,
        children: n,
        container: i,
        direction: l = 'ltr',
        disablePortal: f = !1,
        keepMounted: d = !1,
        modifiers: u,
        open: h,
        placement: b = 'bottom',
        popperOptions: $ = hr,
        popperRef: y,
        style: v,
        transition: m = !1,
      } = t,
      q = ze(t, dr),
      [_, A] = s.useState(!0),
      O = () => {
        A(!1)
      },
      w = () => {
        A(!0)
      }
    if (!d && !h && (!m || _)) return null
    const R = i || (r ? er(Ue(r)).body : void 0)
    return g(pr, {
      disablePortal: f,
      container: R,
      children: g(
        gr,
        P(
          {
            anchorEl: r,
            direction: l,
            disablePortal: f,
            modifiers: u,
            ref: o,
            open: m ? !_ : h,
            placement: b,
            popperOptions: $,
            popperRef: y,
          },
          q,
          {
            style: P(
              {
                position: 'fixed',
                top: 0,
                left: 0,
                display: !h && d && (!m || _) ? 'none' : null,
              },
              v
            ),
            TransitionProps: m ? {in: h, onEnter: O, onExited: w} : null,
            children: n,
          }
        )
      ),
    })
  }),
  Pr = Tr,
  yr = (e) => e.scrollTop
function gt(e, t) {
  var o, r
  const {timeout: n, easing: i, style: l = {}} = e
  return {
    duration:
      (o = l.transitionDuration) != null
        ? o
        : typeof n == 'number'
        ? n
        : n[t.mode] || 0,
    easing:
      (r = l.transitionTimingFunction) != null
        ? r
        : typeof i == 'object'
        ? i[t.mode]
        : i,
    delay: l.transitionDelay,
  }
}
const br = ['components', 'componentsProps', 'slots', 'slotProps'],
  vr = Me(Pr, {
    name: 'MuiPopper',
    slot: 'Root',
    overridesResolver: (e, t) => t.root,
  })({}),
  Rr = s.forwardRef(function (t, o) {
    var r
    const n = Lo(),
      i = to({props: t, name: 'MuiPopper'}),
      {components: l, componentsProps: f, slots: d, slotProps: u} = i,
      h = He(i, br),
      b =
        (r = d == null ? void 0 : d.root) != null
          ? r
          : l == null
          ? void 0
          : l.Root
    return g(
      vr,
      p(
        {
          direction: n == null ? void 0 : n.direction,
          slots: {root: b},
          slotProps: u ?? f,
        },
        h,
        {ref: o}
      )
    )
  }),
  ao = Rr,
  xr = [
    'addEndListener',
    'appear',
    'children',
    'easing',
    'in',
    'onEnter',
    'onEntered',
    'onEntering',
    'onExit',
    'onExited',
    'onExiting',
    'style',
    'timeout',
    'TransitionComponent',
  ]
function je(e) {
  return `scale(${e}, ${e ** 2})`
}
const Er = {
    entering: {opacity: 1, transform: je(1)},
    entered: {opacity: 1, transform: 'none'},
  },
  De =
    typeof navigator < 'u' &&
    /^((?!chrome|android).)*(safari|mobile)/i.test(navigator.userAgent) &&
    /(os |version\/)15(.|_)4/i.test(navigator.userAgent),
  lo = s.forwardRef(function (t, o) {
    const {
        addEndListener: r,
        appear: n = !0,
        children: i,
        easing: l,
        in: f,
        onEnter: d,
        onEntered: u,
        onEntering: h,
        onExit: b,
        onExited: $,
        onExiting: y,
        style: v,
        timeout: m = 'auto',
        TransitionComponent: q = Zo,
      } = t,
      _ = He(t, xr),
      A = s.useRef(),
      O = s.useRef(),
      w = so(),
      R = s.useRef(null),
      D = oo(R, i.ref, o),
      S = (c) => (T) => {
        if (c) {
          const E = R.current
          T === void 0 ? c(E) : c(E, T)
        }
      },
      x = S(h),
      B = S((c, T) => {
        yr(c)
        const {
          duration: E,
          delay: N,
          easing: C,
        } = gt({style: v, timeout: m, easing: l}, {mode: 'enter'})
        let U
        m === 'auto'
          ? ((U = w.transitions.getAutoHeightDuration(c.clientHeight)),
            (O.current = U))
          : (U = E),
          (c.style.transition = [
            w.transitions.create('opacity', {duration: U, delay: N}),
            w.transitions.create('transform', {
              duration: De ? U : U * 0.666,
              delay: N,
              easing: C,
            }),
          ].join(',')),
          d && d(c, T)
      }),
      I = S(u),
      K = S(y),
      Y = S((c) => {
        const {
          duration: T,
          delay: E,
          easing: N,
        } = gt({style: v, timeout: m, easing: l}, {mode: 'exit'})
        let C
        m === 'auto'
          ? ((C = w.transitions.getAutoHeightDuration(c.clientHeight)),
            (O.current = C))
          : (C = T),
          (c.style.transition = [
            w.transitions.create('opacity', {duration: C, delay: E}),
            w.transitions.create('transform', {
              duration: De ? C : C * 0.666,
              delay: De ? E : E || C * 0.333,
              easing: N,
            }),
          ].join(',')),
          (c.style.opacity = 0),
          (c.style.transform = je(0.75)),
          b && b(c)
      }),
      H = S($),
      J = (c) => {
        m === 'auto' && (A.current = setTimeout(c, O.current || 0)),
          r && r(R.current, c)
      }
    return (
      s.useEffect(
        () => () => {
          clearTimeout(A.current)
        },
        []
      ),
      g(
        q,
        p(
          {
            appear: n,
            in: f,
            nodeRef: R,
            onEnter: B,
            onEntered: I,
            onEntering: x,
            onExit: Y,
            onExited: H,
            onExiting: K,
            addEndListener: J,
            timeout: m === 'auto' ? null : m,
          },
          _,
          {
            children: (c, T) =>
              s.cloneElement(
                i,
                p(
                  {
                    style: p(
                      {
                        opacity: 0,
                        transform: je(0.75),
                        visibility: c === 'exited' && !f ? 'hidden' : void 0,
                      },
                      Er[c],
                      v,
                      i.props.style
                    ),
                    ref: D,
                  },
                  T
                )
              ),
          }
        )
      )
    )
  })
lo.muiSupportAuto = !0
const Tt = lo
function wr(e) {
  return Fo('MuiTooltip', e)
}
const Sr = ko('MuiTooltip', [
    'popper',
    'popperInteractive',
    'popperArrow',
    'popperClose',
    'tooltip',
    'tooltipArrow',
    'touch',
    'tooltipPlacementLeft',
    'tooltipPlacementRight',
    'tooltipPlacementTop',
    'tooltipPlacementBottom',
    'arrow',
  ]),
  j = Sr,
  Cr = [
    'arrow',
    'children',
    'classes',
    'components',
    'componentsProps',
    'describeChild',
    'disableFocusListener',
    'disableHoverListener',
    'disableInteractive',
    'disableTouchListener',
    'enterDelay',
    'enterNextDelay',
    'enterTouchDelay',
    'followCursor',
    'id',
    'leaveDelay',
    'leaveTouchDelay',
    'onClose',
    'onOpen',
    'open',
    'placement',
    'PopperComponent',
    'PopperProps',
    'slotProps',
    'slots',
    'title',
    'TransitionComponent',
    'TransitionProps',
  ]
function Mr(e) {
  return Math.round(e * 1e5) / 1e5
}
const $r = (e) => {
    const {
        classes: t,
        disableInteractive: o,
        arrow: r,
        touch: n,
        placement: i,
      } = e,
      l = {
        popper: ['popper', !o && 'popperInteractive', r && 'popperArrow'],
        tooltip: [
          'tooltip',
          r && 'tooltipArrow',
          n && 'touch',
          `tooltipPlacement${ro(i.split('-')[0])}`,
        ],
        arrow: ['arrow'],
      }
    return eo(l, wr, t)
  },
  _r = Me(ao, {
    name: 'MuiTooltip',
    slot: 'Popper',
    overridesResolver: (e, t) => {
      const {ownerState: o} = e
      return [
        t.popper,
        !o.disableInteractive && t.popperInteractive,
        o.arrow && t.popperArrow,
        !o.open && t.popperClose,
      ]
    },
  })(({theme: e, ownerState: t, open: o}) =>
    p(
      {zIndex: (e.vars || e).zIndex.tooltip, pointerEvents: 'none'},
      !t.disableInteractive && {pointerEvents: 'auto'},
      !o && {pointerEvents: 'none'},
      t.arrow && {
        [`&[data-popper-placement*="bottom"] .${j.arrow}`]: {
          top: 0,
          marginTop: '-0.71em',
          '&::before': {transformOrigin: '0 100%'},
        },
        [`&[data-popper-placement*="top"] .${j.arrow}`]: {
          bottom: 0,
          marginBottom: '-0.71em',
          '&::before': {transformOrigin: '100% 0'},
        },
        [`&[data-popper-placement*="right"] .${j.arrow}`]: p(
          {},
          t.isRtl
            ? {right: 0, marginRight: '-0.71em'}
            : {left: 0, marginLeft: '-0.71em'},
          {
            height: '1em',
            width: '0.71em',
            '&::before': {transformOrigin: '100% 100%'},
          }
        ),
        [`&[data-popper-placement*="left"] .${j.arrow}`]: p(
          {},
          t.isRtl
            ? {left: 0, marginLeft: '-0.71em'}
            : {right: 0, marginRight: '-0.71em'},
          {
            height: '1em',
            width: '0.71em',
            '&::before': {transformOrigin: '0 0'},
          }
        ),
      }
    )
  ),
  Or = Me('div', {
    name: 'MuiTooltip',
    slot: 'Tooltip',
    overridesResolver: (e, t) => {
      const {ownerState: o} = e
      return [
        t.tooltip,
        o.touch && t.touch,
        o.arrow && t.tooltipArrow,
        t[`tooltipPlacement${ro(o.placement.split('-')[0])}`],
      ]
    },
  })(({theme: e, ownerState: t}) =>
    p(
      {
        backgroundColor: e.vars
          ? e.vars.palette.Tooltip.bg
          : no(e.palette.grey[700], 0.92),
        borderRadius: (e.vars || e).shape.borderRadius,
        color: (e.vars || e).palette.common.white,
        fontFamily: e.typography.fontFamily,
        padding: '4px 8px',
        fontSize: e.typography.pxToRem(11),
        maxWidth: 300,
        margin: 2,
        wordWrap: 'break-word',
        fontWeight: e.typography.fontWeightMedium,
      },
      t.arrow && {position: 'relative', margin: 0},
      t.touch && {
        padding: '8px 16px',
        fontSize: e.typography.pxToRem(14),
        lineHeight: `${Mr(16 / 14)}em`,
        fontWeight: e.typography.fontWeightRegular,
      },
      {
        [`.${j.popper}[data-popper-placement*="left"] &`]: p(
          {transformOrigin: 'right center'},
          t.isRtl
            ? p({marginLeft: '14px'}, t.touch && {marginLeft: '24px'})
            : p({marginRight: '14px'}, t.touch && {marginRight: '24px'})
        ),
        [`.${j.popper}[data-popper-placement*="right"] &`]: p(
          {transformOrigin: 'left center'},
          t.isRtl
            ? p({marginRight: '14px'}, t.touch && {marginRight: '24px'})
            : p({marginLeft: '14px'}, t.touch && {marginLeft: '24px'})
        ),
        [`.${j.popper}[data-popper-placement*="top"] &`]: p(
          {transformOrigin: 'center bottom', marginBottom: '14px'},
          t.touch && {marginBottom: '24px'}
        ),
        [`.${j.popper}[data-popper-placement*="bottom"] &`]: p(
          {transformOrigin: 'center top', marginTop: '14px'},
          t.touch && {marginTop: '24px'}
        ),
      }
    )
  ),
  Ir = Me('span', {
    name: 'MuiTooltip',
    slot: 'Arrow',
    overridesResolver: (e, t) => t.arrow,
  })(({theme: e}) => ({
    overflow: 'hidden',
    position: 'absolute',
    width: '1em',
    height: '0.71em',
    boxSizing: 'border-box',
    color: e.vars ? e.vars.palette.Tooltip.bg : no(e.palette.grey[700], 0.9),
    '&::before': {
      content: '""',
      margin: 'auto',
      display: 'block',
      width: '100%',
      height: '100%',
      backgroundColor: 'currentColor',
      transform: 'rotate(45deg)',
    },
  }))
let de = !1,
  We = null
function me(e, t) {
  return (o) => {
    t && t(o), e(o)
  }
}
const Lr = s.forwardRef(function (t, o) {
    var r, n, i, l, f, d, u, h, b, $, y, v, m, q, _, A, O, w, R
    const D = to({props: t, name: 'MuiTooltip'}),
      {
        arrow: S = !1,
        children: x,
        components: B = {},
        componentsProps: I = {},
        describeChild: K = !1,
        disableFocusListener: Y = !1,
        disableHoverListener: H = !1,
        disableInteractive: J = !1,
        disableTouchListener: c = !1,
        enterDelay: T = 100,
        enterNextDelay: E = 0,
        enterTouchDelay: N = 700,
        followCursor: C = !1,
        id: U,
        leaveDelay: Ke = 0,
        leaveTouchDelay: uo = 1500,
        onClose: Ze,
        onOpen: Xe,
        open: mo,
        placement: Ye = 'bottom',
        PopperComponent: $e,
        PopperProps: V = {},
        slotProps: z = {},
        slots: ie = {},
        title: Z,
        TransitionComponent: fo = Tt,
        TransitionProps: ho,
      } = D,
      Je = He(D, Cr),
      _e = so(),
      go = _e.direction === 'rtl',
      [Q, Qe] = s.useState(),
      [Oe, To] = s.useState(null),
      ae = s.useRef(!1),
      Ie = J || C,
      le = s.useRef(),
      pe = s.useRef(),
      G = s.useRef(),
      et = s.useRef(),
      [Po, tt] = Uo({
        controlled: mo,
        default: !1,
        name: 'Tooltip',
        state: 'open',
      })
    let W = Po
    const Le = jo(U),
      ee = s.useRef(),
      ce = s.useCallback(() => {
        ee.current !== void 0 &&
          ((document.body.style.WebkitUserSelect = ee.current),
          (ee.current = void 0)),
          clearTimeout(et.current)
      }, [])
    s.useEffect(
      () => () => {
        clearTimeout(le.current),
          clearTimeout(pe.current),
          clearTimeout(G.current),
          ce()
      },
      [ce]
    )
    const ot = (a) => {
        clearTimeout(We), (de = !0), tt(!0), Xe && !W && Xe(a)
      },
      ue = Ao((a) => {
        clearTimeout(We),
          (We = setTimeout(() => {
            de = !1
          }, 800 + Ke)),
          tt(!1),
          Ze && W && Ze(a),
          clearTimeout(le.current),
          (le.current = setTimeout(() => {
            ae.current = !1
          }, _e.transitions.duration.shortest))
      }),
      ke = (a) => {
        ;(ae.current && a.type !== 'touchstart') ||
          (Q && Q.removeAttribute('title'),
          clearTimeout(pe.current),
          clearTimeout(G.current),
          T || (de && E)
            ? (pe.current = setTimeout(
                () => {
                  ot(a)
                },
                de ? E : T
              ))
            : ot(a))
      },
      rt = (a) => {
        clearTimeout(pe.current),
          clearTimeout(G.current),
          (G.current = setTimeout(() => {
            ue(a)
          }, Ke))
      },
      {isFocusVisibleRef: nt, onBlur: yo, onFocus: bo, ref: vo} = No(),
      [, st] = s.useState(!1),
      it = (a) => {
        yo(a), nt.current === !1 && (st(!1), rt(a))
      },
      at = (a) => {
        Q || Qe(a.currentTarget), bo(a), nt.current === !0 && (st(!0), ke(a))
      },
      lt = (a) => {
        ae.current = !0
        const M = x.props
        M.onTouchStart && M.onTouchStart(a)
      },
      pt = ke,
      ct = rt,
      Ro = (a) => {
        lt(a),
          clearTimeout(G.current),
          clearTimeout(le.current),
          ce(),
          (ee.current = document.body.style.WebkitUserSelect),
          (document.body.style.WebkitUserSelect = 'none'),
          (et.current = setTimeout(() => {
            ;(document.body.style.WebkitUserSelect = ee.current), ke(a)
          }, N))
      },
      xo = (a) => {
        x.props.onTouchEnd && x.props.onTouchEnd(a),
          ce(),
          clearTimeout(G.current),
          (G.current = setTimeout(() => {
            ue(a)
          }, uo))
      }
    s.useEffect(() => {
      if (!W) return
      function a(M) {
        ;(M.key === 'Escape' || M.key === 'Esc') && ue(M)
      }
      return (
        document.addEventListener('keydown', a),
        () => {
          document.removeEventListener('keydown', a)
        }
      )
    }, [ue, W])
    const Eo = oo(x.ref, vo, Qe, o)
    !Z && Z !== 0 && (W = !1)
    const te = s.useRef({x: 0, y: 0}),
      Fe = s.useRef(),
      wo = (a) => {
        const M = x.props
        M.onMouseMove && M.onMouseMove(a),
          (te.current = {x: a.clientX, y: a.clientY}),
          Fe.current && Fe.current.update()
      },
      oe = {},
      Ae = typeof Z == 'string'
    K
      ? ((oe.title = !W && Ae && !H ? Z : null),
        (oe['aria-describedby'] = W ? Le : null))
      : ((oe['aria-label'] = Ae ? Z : null),
        (oe['aria-labelledby'] = W && !Ae ? Le : null))
    const L = p(
        {},
        oe,
        Je,
        x.props,
        {
          className: X(Je.className, x.props.className),
          onTouchStart: lt,
          ref: Eo,
        },
        C ? {onMouseMove: wo} : {}
      ),
      re = {}
    c || ((L.onTouchStart = Ro), (L.onTouchEnd = xo)),
      H ||
        ((L.onMouseOver = me(pt, L.onMouseOver)),
        (L.onMouseLeave = me(ct, L.onMouseLeave)),
        Ie || ((re.onMouseOver = pt), (re.onMouseLeave = ct))),
      Y ||
        ((L.onFocus = me(at, L.onFocus)),
        (L.onBlur = me(it, L.onBlur)),
        Ie || ((re.onFocus = at), (re.onBlur = it)))
    const So = s.useMemo(() => {
        var a
        let M = [
          {name: 'arrow', enabled: !!Oe, options: {element: Oe, padding: 4}},
        ]
        return (
          (a = V.popperOptions) != null &&
            a.modifiers &&
            (M = M.concat(V.popperOptions.modifiers)),
          p({}, V.popperOptions, {modifiers: M})
        )
      }, [Oe, V]),
      ne = p({}, D, {
        isRtl: go,
        arrow: S,
        disableInteractive: Ie,
        placement: Ye,
        PopperComponentProp: $e,
        touch: ae.current,
      }),
      Ne = $r(ne),
      ut = (r = (n = ie.popper) != null ? n : B.Popper) != null ? r : _r,
      dt =
        (i =
          (l = (f = ie.transition) != null ? f : B.Transition) != null
            ? l
            : fo) != null
          ? i
          : Tt,
      mt = (d = (u = ie.tooltip) != null ? u : B.Tooltip) != null ? d : Or,
      ft = (h = (b = ie.arrow) != null ? b : B.Arrow) != null ? h : Ir,
      Co = se(
        ut,
        p({}, V, ($ = z.popper) != null ? $ : I.popper, {
          className: X(
            Ne.popper,
            V == null ? void 0 : V.className,
            (y = (v = z.popper) != null ? v : I.popper) == null
              ? void 0
              : y.className
          ),
        }),
        ne
      ),
      Mo = se(dt, p({}, ho, (m = z.transition) != null ? m : I.transition), ne),
      $o = se(
        mt,
        p({}, (q = z.tooltip) != null ? q : I.tooltip, {
          className: X(
            Ne.tooltip,
            (_ = (A = z.tooltip) != null ? A : I.tooltip) == null
              ? void 0
              : _.className
          ),
        }),
        ne
      ),
      _o = se(
        ft,
        p({}, (O = z.arrow) != null ? O : I.arrow, {
          className: X(
            Ne.arrow,
            (w = (R = z.arrow) != null ? R : I.arrow) == null
              ? void 0
              : w.className
          ),
        }),
        ne
      )
    return qe(s.Fragment, {
      children: [
        s.cloneElement(x, L),
        g(
          ut,
          p(
            {
              as: $e ?? ao,
              placement: Ye,
              anchorEl: C
                ? {
                    getBoundingClientRect: () => ({
                      top: te.current.y,
                      left: te.current.x,
                      right: te.current.x,
                      bottom: te.current.y,
                      width: 0,
                      height: 0,
                    }),
                  }
                : Q,
              popperRef: Fe,
              open: Q ? W : !1,
              id: Le,
              transition: !0,
            },
            re,
            Co,
            {
              popperOptions: So,
              children: ({TransitionProps: a}) =>
                g(
                  dt,
                  p({timeout: _e.transitions.duration.shorter}, a, Mo, {
                    'data-foo': 'bar',
                    children: qe(
                      mt,
                      p({}, $o, {
                        children: [Z, S ? g(ft, p({}, _o, {ref: To})) : null],
                      })
                    ),
                  })
                ),
            }
          )
        ),
      ],
    })
  }),
  kr = Lr
var Ge = {},
  Fr = Vo
Object.defineProperty(Ge, '__esModule', {value: !0})
var po = (Ge.default = void 0),
  Ar = Fr(Ho()),
  Nr = zo,
  Dr = (0, Ar.default)(
    (0, Nr.jsx)('path', {
      d: 'M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z',
    }),
    'LocationOn'
  )
po = Ge.default = Dr
const fn = {title: 'Autocomplete', component: Ve},
  co = ({children: e}) =>
    qe(Do, {
      onSuccess: qo('form-submit'),
      defaultValues: {
        preselect: {id: 2, label: 'Second'},
        'multi-preselect': [{id: 2, label: 'Second'}],
        'match-id': 2,
        'match-id-multi': [2, 3],
      },
      children: [
        e,
        g(Xo, {
          marginTop: 2,
          children: g(Wo, {type: 'submit', children: 'Submit'}),
        }),
      ],
    }),
  k = (e) => g(co, {children: g(Ve, {...e})}),
  F = [
    {label: 'First', id: 1},
    {label: 'Second', id: 2},
    {label: 'Third', id: 3},
    {label: 'Four', id: 4},
  ],
  fe = {render: k, args: {name: 'basic', options: F}},
  he = {render: k, args: {name: 'preselect', options: F}},
  ge = {render: k, args: {name: 'multi', options: F, multiple: !0}},
  Te = {
    render: k,
    args: {
      label: 'Multiple Required',
      name: 'multi-required',
      options: F,
      multiple: !0,
      required: !0,
    },
  },
  Pe = {
    render: k,
    args: {
      label: 'Multiple Required Custom',
      name: 'multi-required-custom',
      options: F,
      multiple: !0,
      rules: {required: 'Please fill out.'},
    },
  },
  ye = {render: k, args: {name: 'multi-preselect', options: F, multiple: !0}},
  be = {
    render: k,
    args: {name: 'multicheck', options: F, multiple: !0, showCheckbox: !0},
  },
  ve = {
    render: k,
    args: {
      label: 'Loading State',
      name: 'loading',
      options: [],
      multiple: !0,
      showCheckbox: !0,
      loading: !0,
    },
  },
  Re = {
    render: k,
    args: {label: 'Match ID', name: 'match-id', options: F, matchId: !0},
  },
  xe = {
    render: k,
    args: {
      label: 'Match ID',
      name: 'match-id-multi',
      options: F,
      multiple: !0,
      matchId: !0,
    },
  },
  Ee = {
    render: k,
    args: {
      name: 'custom-input',
      options: F,
      textFieldProps: {
        placeholder: 'Some placeholder',
        InputProps: {startAdornment: g(po, {}), endAdornment: null},
      },
    },
  },
  we = () =>
    g(co, {
      children: g(kr, {
        title: 'Some Tooltip',
        children: g('div', {
          children: g(Ve, {options: F, name: 'tooltip', label: 'With Tooltip'}),
        }),
      }),
    })
var Pt, yt, bt
fe.parameters = {
  ...fe.parameters,
  docs: {
    ...((Pt = fe.parameters) == null ? void 0 : Pt.docs),
    source: {
      originalSource: `{
  render: Template,
  args: {
    name: 'basic',
    options
  }
}`,
      ...((bt = (yt = fe.parameters) == null ? void 0 : yt.docs) == null
        ? void 0
        : bt.source),
    },
  },
}
var vt, Rt, xt
he.parameters = {
  ...he.parameters,
  docs: {
    ...((vt = he.parameters) == null ? void 0 : vt.docs),
    source: {
      originalSource: `{
  render: Template,
  args: {
    name: 'preselect',
    options
  }
}`,
      ...((xt = (Rt = he.parameters) == null ? void 0 : Rt.docs) == null
        ? void 0
        : xt.source),
    },
  },
}
var Et, wt, St
ge.parameters = {
  ...ge.parameters,
  docs: {
    ...((Et = ge.parameters) == null ? void 0 : Et.docs),
    source: {
      originalSource: `{
  render: Template,
  args: {
    name: 'multi',
    options,
    multiple: true
  }
}`,
      ...((St = (wt = ge.parameters) == null ? void 0 : wt.docs) == null
        ? void 0
        : St.source),
    },
  },
}
var Ct, Mt, $t
Te.parameters = {
  ...Te.parameters,
  docs: {
    ...((Ct = Te.parameters) == null ? void 0 : Ct.docs),
    source: {
      originalSource: `{
  render: Template,
  args: {
    label: 'Multiple Required',
    name: 'multi-required',
    options,
    multiple: true,
    required: true
  }
}`,
      ...(($t = (Mt = Te.parameters) == null ? void 0 : Mt.docs) == null
        ? void 0
        : $t.source),
    },
  },
}
var _t, Ot, It
Pe.parameters = {
  ...Pe.parameters,
  docs: {
    ...((_t = Pe.parameters) == null ? void 0 : _t.docs),
    source: {
      originalSource: `{
  render: Template,
  args: {
    label: 'Multiple Required Custom',
    name: 'multi-required-custom',
    options,
    multiple: true,
    rules: {
      required: 'Please fill out.'
    }
  }
}`,
      ...((It = (Ot = Pe.parameters) == null ? void 0 : Ot.docs) == null
        ? void 0
        : It.source),
    },
  },
}
var Lt, kt, Ft
ye.parameters = {
  ...ye.parameters,
  docs: {
    ...((Lt = ye.parameters) == null ? void 0 : Lt.docs),
    source: {
      originalSource: `{
  render: Template,
  args: {
    name: 'multi-preselect',
    options,
    multiple: true
  }
}`,
      ...((Ft = (kt = ye.parameters) == null ? void 0 : kt.docs) == null
        ? void 0
        : Ft.source),
    },
  },
}
var At, Nt, Dt
be.parameters = {
  ...be.parameters,
  docs: {
    ...((At = be.parameters) == null ? void 0 : At.docs),
    source: {
      originalSource: `{
  render: Template,
  args: {
    name: 'multicheck',
    options,
    multiple: true,
    showCheckbox: true
  }
}`,
      ...((Dt = (Nt = be.parameters) == null ? void 0 : Nt.docs) == null
        ? void 0
        : Dt.source),
    },
  },
}
var Wt, qt, Bt
ve.parameters = {
  ...ve.parameters,
  docs: {
    ...((Wt = ve.parameters) == null ? void 0 : Wt.docs),
    source: {
      originalSource: `{
  render: Template,
  args: {
    label: 'Loading State',
    name: 'loading',
    options: [],
    multiple: true,
    showCheckbox: true,
    loading: true
  }
}`,
      ...((Bt = (qt = ve.parameters) == null ? void 0 : qt.docs) == null
        ? void 0
        : Bt.source),
    },
  },
}
var Ut, jt, Ht
Re.parameters = {
  ...Re.parameters,
  docs: {
    ...((Ut = Re.parameters) == null ? void 0 : Ut.docs),
    source: {
      originalSource: `{
  render: Template,
  args: {
    label: 'Match ID',
    name: 'match-id',
    options,
    matchId: true
  }
}`,
      ...((Ht = (jt = Re.parameters) == null ? void 0 : jt.docs) == null
        ? void 0
        : Ht.source),
    },
  },
}
var Vt, zt, Gt
xe.parameters = {
  ...xe.parameters,
  docs: {
    ...((Vt = xe.parameters) == null ? void 0 : Vt.docs),
    source: {
      originalSource: `{
  render: Template,
  args: {
    label: 'Match ID',
    name: 'match-id-multi',
    options,
    multiple: true,
    matchId: true
  }
}`,
      ...((Gt = (zt = xe.parameters) == null ? void 0 : zt.docs) == null
        ? void 0
        : Gt.source),
    },
  },
}
var Kt, Zt, Xt
Ee.parameters = {
  ...Ee.parameters,
  docs: {
    ...((Kt = Ee.parameters) == null ? void 0 : Kt.docs),
    source: {
      originalSource: `{
  render: Template,
  args: {
    name: 'custom-input',
    options,
    textFieldProps: {
      placeholder: 'Some placeholder',
      InputProps: {
        startAdornment: <LocationIcon />,
        endAdornment: null
      }
    }
  }
}`,
      ...((Xt = (Zt = Ee.parameters) == null ? void 0 : Zt.docs) == null
        ? void 0
        : Xt.source),
    },
  },
}
var Yt, Jt, Qt
we.parameters = {
  ...we.parameters,
  docs: {
    ...((Yt = we.parameters) == null ? void 0 : Yt.docs),
    source: {
      originalSource: `() => <FormWrap>
    <Tooltip title={'Some Tooltip'}>
      <div>
        <AutocompleteElement options={options} name={'tooltip'} label={'With Tooltip'} />
      </div>
    </Tooltip>
  </FormWrap>`,
      ...((Qt = (Jt = we.parameters) == null ? void 0 : Jt.docs) == null
        ? void 0
        : Qt.source),
    },
  },
}
const hn = [
  'Basic',
  'BasicPreSelect',
  'MultiSelect',
  'MultiSelectRequired',
  'MultiSelectRequiredCustom',
  'MultiSelectPredefined',
  'MultiSelectCheckbox',
  'Loading',
  'MatchId',
  'MatchIdMulti',
  'CustomInput',
  'WithTooltip',
]
export {
  fe as Basic,
  he as BasicPreSelect,
  Ee as CustomInput,
  ve as Loading,
  Re as MatchId,
  xe as MatchIdMulti,
  ge as MultiSelect,
  be as MultiSelectCheckbox,
  ye as MultiSelectPredefined,
  Te as MultiSelectRequired,
  Pe as MultiSelectRequiredCustom,
  we as WithTooltip,
  hn as __namedExportsOrder,
  fn as default,
}
//# sourceMappingURL=AutocompleteElement.stories-280e2f8b.js.map
