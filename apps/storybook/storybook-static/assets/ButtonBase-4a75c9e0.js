import {_ as O} from './extends-98964cd2.js'
import {j as F, u as ue, _ as ce, b as Ee} from './useThemeProps-3be52b90.js'
import {r as t} from './index-ebeaab24.js'
import {
  c as T,
  n as pe,
  y as Z,
  p as v,
  T as Ne,
  o as Ie,
  E as ne,
  r as H,
  q as Ue,
} from './Button-934b6c03.js'
import {u as Fe} from './useIsFocusVisible-1a875561.js'
function Ke(s) {
  const {
      className: M,
      classes: l,
      pulsate: a = !1,
      rippleX: k,
      rippleY: n,
      rippleSize: c,
      in: L,
      onExited: p,
      timeout: i,
    } = s,
    [d, h] = t.useState(!1),
    f = T(M, l.ripple, l.rippleVisible, a && l.ripplePulsate),
    P = {width: c, height: c, top: -(c / 2) + n, left: -(c / 2) + k},
    r = T(l.child, d && l.childLeaving, a && l.childPulsate)
  return (
    !L && !d && h(!0),
    t.useEffect(() => {
      if (!L && p != null) {
        const m = setTimeout(p, i)
        return () => {
          clearTimeout(m)
        }
      }
    }, [p, L, i]),
    F('span', {className: f, style: P, children: F('span', {className: r})})
  )
}
const _e = pe('MuiTouchRipple', [
    'root',
    'ripple',
    'rippleVisible',
    'ripplePulsate',
    'child',
    'childLeaving',
    'childPulsate',
  ]),
  u = _e,
  ze = ['center', 'classes', 'className']
let W = (s) => s,
  ie,
  re,
  le,
  ae
const Q = 550,
  Xe = 80,
  Ye = Z(
    ie ||
      (ie = W`
  0% {
    transform: scale(0);
    opacity: 0.1;
  }

  100% {
    transform: scale(1);
    opacity: 0.3;
  }
`)
  ),
  Ae = Z(
    re ||
      (re = W`
  0% {
    opacity: 1;
  }

  100% {
    opacity: 0;
  }
`)
  ),
  je = Z(
    le ||
      (le = W`
  0% {
    transform: scale(1);
  }

  50% {
    transform: scale(0.92);
  }

  100% {
    transform: scale(1);
  }
`)
  ),
  He = v('span', {name: 'MuiTouchRipple', slot: 'Root'})({
    overflow: 'hidden',
    pointerEvents: 'none',
    position: 'absolute',
    zIndex: 0,
    top: 0,
    right: 0,
    bottom: 0,
    left: 0,
    borderRadius: 'inherit',
  }),
  Oe = v(Ke, {name: 'MuiTouchRipple', slot: 'Ripple'})(
    ae ||
      (ae = W`
  opacity: 0;
  position: absolute;

  &.${0} {
    opacity: 0.3;
    transform: scale(1);
    animation-name: ${0};
    animation-duration: ${0}ms;
    animation-timing-function: ${0};
  }

  &.${0} {
    animation-duration: ${0}ms;
  }

  & .${0} {
    opacity: 1;
    display: block;
    width: 100%;
    height: 100%;
    border-radius: 50%;
    background-color: currentColor;
  }

  & .${0} {
    opacity: 0;
    animation-name: ${0};
    animation-duration: ${0}ms;
    animation-timing-function: ${0};
  }

  & .${0} {
    position: absolute;
    /* @noflip */
    left: 0px;
    top: 0;
    animation-name: ${0};
    animation-duration: 2500ms;
    animation-timing-function: ${0};
    animation-iteration-count: infinite;
    animation-delay: 200ms;
  }
`),
    u.rippleVisible,
    Ye,
    Q,
    ({theme: s}) => s.transitions.easing.easeInOut,
    u.ripplePulsate,
    ({theme: s}) => s.transitions.duration.shorter,
    u.child,
    u.childLeaving,
    Ae,
    Q,
    ({theme: s}) => s.transitions.easing.easeInOut,
    u.childPulsate,
    je,
    ({theme: s}) => s.transitions.easing.easeInOut
  ),
  We = t.forwardRef(function (M, l) {
    const a = ue({props: M, name: 'MuiTouchRipple'}),
      {center: k = !1, classes: n = {}, className: c} = a,
      L = ce(a, ze),
      [p, i] = t.useState([]),
      d = t.useRef(0),
      h = t.useRef(null)
    t.useEffect(() => {
      h.current && (h.current(), (h.current = null))
    }, [p])
    const f = t.useRef(!1),
      P = t.useRef(null),
      r = t.useRef(null),
      m = t.useRef(null)
    t.useEffect(
      () => () => {
        clearTimeout(P.current)
      },
      []
    )
    const K = t.useCallback(
        (o) => {
          const {pulsate: b, rippleX: R, rippleY: S, rippleSize: U, cb: z} = o
          i((g) => [
            ...g,
            F(
              Oe,
              {
                classes: {
                  ripple: T(n.ripple, u.ripple),
                  rippleVisible: T(n.rippleVisible, u.rippleVisible),
                  ripplePulsate: T(n.ripplePulsate, u.ripplePulsate),
                  child: T(n.child, u.child),
                  childLeaving: T(n.childLeaving, u.childLeaving),
                  childPulsate: T(n.childPulsate, u.childPulsate),
                },
                timeout: Q,
                pulsate: b,
                rippleX: R,
                rippleY: S,
                rippleSize: U,
              },
              d.current
            ),
          ]),
            (d.current += 1),
            (h.current = z)
        },
        [n]
      ),
      N = t.useCallback(
        (o = {}, b = {}, R) => {
          const {
            pulsate: S = !1,
            center: U = k || b.pulsate,
            fakeElement: z = !1,
          } = b
          if ((o == null ? void 0 : o.type) === 'mousedown' && f.current) {
            f.current = !1
            return
          }
          ;(o == null ? void 0 : o.type) === 'touchstart' && (f.current = !0)
          const g = z ? null : m.current,
            w = g
              ? g.getBoundingClientRect()
              : {width: 0, height: 0, left: 0, top: 0}
          let C, V, $
          if (
            U ||
            o === void 0 ||
            (o.clientX === 0 && o.clientY === 0) ||
            (!o.clientX && !o.touches)
          )
            (C = Math.round(w.width / 2)), (V = Math.round(w.height / 2))
          else {
            const {clientX: D, clientY: B} =
              o.touches && o.touches.length > 0 ? o.touches[0] : o
            ;(C = Math.round(D - w.left)), (V = Math.round(B - w.top))
          }
          if (U)
            ($ = Math.sqrt((2 * w.width ** 2 + w.height ** 2) / 3)),
              $ % 2 === 0 && ($ += 1)
          else {
            const D =
                Math.max(Math.abs((g ? g.clientWidth : 0) - C), C) * 2 + 2,
              B = Math.max(Math.abs((g ? g.clientHeight : 0) - V), V) * 2 + 2
            $ = Math.sqrt(D ** 2 + B ** 2)
          }
          o != null && o.touches
            ? r.current === null &&
              ((r.current = () => {
                K({pulsate: S, rippleX: C, rippleY: V, rippleSize: $, cb: R})
              }),
              (P.current = setTimeout(() => {
                r.current && (r.current(), (r.current = null))
              }, Xe)))
            : K({pulsate: S, rippleX: C, rippleY: V, rippleSize: $, cb: R})
        },
        [k, K]
      ),
      _ = t.useCallback(() => {
        N({}, {pulsate: !0})
      }, [N]),
      I = t.useCallback((o, b) => {
        if (
          (clearTimeout(P.current),
          (o == null ? void 0 : o.type) === 'touchend' && r.current)
        ) {
          r.current(),
            (r.current = null),
            (P.current = setTimeout(() => {
              I(o, b)
            }))
          return
        }
        ;(r.current = null),
          i((R) => (R.length > 0 ? R.slice(1) : R)),
          (h.current = b)
      }, [])
    return (
      t.useImperativeHandle(l, () => ({pulsate: _, start: N, stop: I}), [
        _,
        N,
        I,
      ]),
      F(
        He,
        O({className: T(u.root, n.root, c), ref: m}, L, {
          children: F(Ne, {component: null, exit: !0, children: p}),
        })
      )
    )
  }),
  qe = We
function Ge(s) {
  return Ie('MuiButtonBase', s)
}
const Je = pe('MuiButtonBase', ['root', 'disabled', 'focusVisible']),
  Qe = Je,
  Ze = [
    'action',
    'centerRipple',
    'children',
    'className',
    'component',
    'disabled',
    'disableRipple',
    'disableTouchRipple',
    'focusRipple',
    'focusVisibleClassName',
    'LinkComponent',
    'onBlur',
    'onClick',
    'onContextMenu',
    'onDragLeave',
    'onFocus',
    'onFocusVisible',
    'onKeyDown',
    'onKeyUp',
    'onMouseDown',
    'onMouseLeave',
    'onMouseUp',
    'onTouchEnd',
    'onTouchMove',
    'onTouchStart',
    'tabIndex',
    'TouchRippleProps',
    'touchRippleRef',
    'type',
  ],
  ve = (s) => {
    const {
        disabled: M,
        focusVisible: l,
        focusVisibleClassName: a,
        classes: k,
      } = s,
      c = Ue({root: ['root', M && 'disabled', l && 'focusVisible']}, Ge, k)
    return l && a && (c.root += ` ${a}`), c
  },
  et = v('button', {
    name: 'MuiButtonBase',
    slot: 'Root',
    overridesResolver: (s, M) => M.root,
  })({
    display: 'inline-flex',
    alignItems: 'center',
    justifyContent: 'center',
    position: 'relative',
    boxSizing: 'border-box',
    WebkitTapHighlightColor: 'transparent',
    backgroundColor: 'transparent',
    outline: 0,
    border: 0,
    margin: 0,
    borderRadius: 0,
    padding: 0,
    cursor: 'pointer',
    userSelect: 'none',
    verticalAlign: 'middle',
    MozAppearance: 'none',
    WebkitAppearance: 'none',
    textDecoration: 'none',
    color: 'inherit',
    '&::-moz-focus-inner': {borderStyle: 'none'},
    [`&.${Qe.disabled}`]: {pointerEvents: 'none', cursor: 'default'},
    '@media print': {colorAdjust: 'exact'},
  }),
  tt = t.forwardRef(function (M, l) {
    const a = ue({props: M, name: 'MuiButtonBase'}),
      {
        action: k,
        centerRipple: n = !1,
        children: c,
        className: L,
        component: p = 'button',
        disabled: i = !1,
        disableRipple: d = !1,
        disableTouchRipple: h = !1,
        focusRipple: f = !1,
        LinkComponent: P = 'a',
        onBlur: r,
        onClick: m,
        onContextMenu: K,
        onDragLeave: N,
        onFocus: _,
        onFocusVisible: I,
        onKeyDown: o,
        onKeyUp: b,
        onMouseDown: R,
        onMouseLeave: S,
        onMouseUp: U,
        onTouchEnd: z,
        onTouchMove: g,
        onTouchStart: w,
        tabIndex: C = 0,
        TouchRippleProps: V,
        touchRippleRef: $,
        type: D,
      } = a,
      B = ce(a, Ze),
      X = t.useRef(null),
      y = t.useRef(null),
      fe = ne(y, $),
      {isFocusVisibleRef: ee, onFocus: de, onBlur: he, ref: me} = Fe(),
      [E, A] = t.useState(!1)
    i && E && A(!1),
      t.useImperativeHandle(
        k,
        () => ({
          focusVisible: () => {
            A(!0), X.current.focus()
          },
        }),
        []
      )
    const [q, be] = t.useState(!1)
    t.useEffect(() => {
      be(!0)
    }, [])
    const Re = q && !d && !i
    t.useEffect(() => {
      E && f && !d && q && y.current.pulsate()
    }, [d, f, E, q])
    function x(e, oe, De = h) {
      return H((se) => (oe && oe(se), !De && y.current && y.current[e](se), !0))
    }
    const ge = x('start', R),
      ye = x('stop', K),
      Te = x('stop', N),
      Me = x('stop', U),
      Ce = x('stop', (e) => {
        E && e.preventDefault(), S && S(e)
      }),
      Be = x('start', w),
      xe = x('stop', z),
      ke = x('stop', g),
      Pe = x(
        'stop',
        (e) => {
          he(e), ee.current === !1 && A(!1), r && r(e)
        },
        !1
      ),
      we = H((e) => {
        X.current || (X.current = e.currentTarget),
          de(e),
          ee.current === !0 && (A(!0), I && I(e)),
          _ && _(e)
      }),
      G = () => {
        const e = X.current
        return p && p !== 'button' && !(e.tagName === 'A' && e.href)
      },
      J = t.useRef(!1),
      Ve = H((e) => {
        f &&
          !J.current &&
          E &&
          y.current &&
          e.key === ' ' &&
          ((J.current = !0),
          y.current.stop(e, () => {
            y.current.start(e)
          })),
          e.target === e.currentTarget &&
            G() &&
            e.key === ' ' &&
            e.preventDefault(),
          o && o(e),
          e.target === e.currentTarget &&
            G() &&
            e.key === 'Enter' &&
            !i &&
            (e.preventDefault(), m && m(e))
      }),
      $e = H((e) => {
        f &&
          e.key === ' ' &&
          y.current &&
          E &&
          !e.defaultPrevented &&
          ((J.current = !1),
          y.current.stop(e, () => {
            y.current.pulsate(e)
          })),
          b && b(e),
          m &&
            e.target === e.currentTarget &&
            G() &&
            e.key === ' ' &&
            !e.defaultPrevented &&
            m(e)
      })
    let j = p
    j === 'button' && (B.href || B.to) && (j = P)
    const Y = {}
    j === 'button'
      ? ((Y.type = D === void 0 ? 'button' : D), (Y.disabled = i))
      : (!B.href && !B.to && (Y.role = 'button'), i && (Y['aria-disabled'] = i))
    const Le = ne(l, me, X),
      te = O({}, a, {
        centerRipple: n,
        component: p,
        disabled: i,
        disableRipple: d,
        disableTouchRipple: h,
        focusRipple: f,
        tabIndex: C,
        focusVisible: E,
      }),
      Se = ve(te)
    return Ee(
      et,
      O(
        {
          as: j,
          className: T(Se.root, L),
          ownerState: te,
          onBlur: Pe,
          onClick: m,
          onContextMenu: ye,
          onFocus: we,
          onKeyDown: Ve,
          onKeyUp: $e,
          onMouseDown: ge,
          onMouseLeave: Ce,
          onMouseUp: Me,
          onDragLeave: Te,
          onTouchEnd: xe,
          onTouchMove: ke,
          onTouchStart: Be,
          ref: Le,
          tabIndex: i ? -1 : C,
          type: D,
        },
        Y,
        B,
        {children: [c, Re ? F(qe, O({ref: fe, center: n}, V)) : null]}
      )
    )
  }),
  at = tt
export {at as B}
//# sourceMappingURL=ButtonBase-4a75c9e0.js.map
