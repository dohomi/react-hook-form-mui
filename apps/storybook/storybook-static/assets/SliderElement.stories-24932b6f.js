import {
  b as Le,
  j as L,
  _ as lt,
  d as O,
  l as pt,
  g as mt,
  e as Ue,
  u as bt,
} from './useThemeProps-3be52b90.js'
import {
  n as st,
  o as ft,
  c as Z,
  E as Be,
  G as vt,
  r as De,
  q as ht,
  p as pe,
  H as it,
  t as gt,
  C as kt,
  F as xt,
} from './Button-934b6c03.js'
import {r as C} from './index-ebeaab24.js'
import {F as St, a as Lt} from './FormHelperText-a02b62e1.js'
import {F as yt} from './FormLabel-977af3e7.js'
import {_ as l} from './extends-98964cd2.js'
import {u as Pt} from './useTheme-ccc2f4e9.js'
import {o as Fe, u as ne, i as Ve} from './useSlotProps-692f4a62.js'
import {u as $t} from './useControlled-32189460.js'
import {u as Ct} from './useIsFocusVisible-1a875561.js'
import {a as Tt} from './chunk-OPEUWD42-a3b45fd8.js'
import {S as _t} from './Shared-e33e4212.js'
import './assertThisInitialized-5649ae8b.js'
import './Box-339dd07d.js'
const Rt = {
    border: 0,
    clip: 'rect(0 0 0 0)',
    height: '1px',
    margin: -1,
    overflow: 'hidden',
    padding: 0,
    position: 'absolute',
    whiteSpace: 'nowrap',
    width: '1px',
  },
  wt = Rt
function Se(e) {
  return ft('MuiSlider', e)
}
const Mt = st('MuiSlider', [
    'root',
    'active',
    'focusVisible',
    'disabled',
    'dragging',
    'marked',
    'vertical',
    'trackInverted',
    'trackFalse',
    'rail',
    'track',
    'mark',
    'markActive',
    'markLabel',
    'markLabelActive',
    'thumb',
    'valueLabel',
    'valueLabelOpen',
    'valueLabelCircle',
    'valueLabelLabel',
  ]),
  Ee = Mt,
  It = (e) => {
    const {open: t} = e
    return {
      offset: Z(t && Ee.valueLabelOpen),
      circle: Ee.valueLabelCircle,
      label: Ee.valueLabelLabel,
    }
  }
function ct(e) {
  const {children: t, className: o, value: n} = e,
    p = It(e)
  return C.cloneElement(
    t,
    {className: Z(t.props.className)},
    Le(C.Fragment, {
      children: [
        t.props.children,
        L('span', {
          className: Z(p.offset, o),
          'aria-hidden': !0,
          children: L('span', {
            className: p.circle,
            children: L('span', {className: p.label, children: n}),
          }),
        }),
      ],
    })
  )
}
const zt = 2
function ut(e, t) {
  return e - t
}
function xe(e, t, o) {
  return e == null ? t : Math.min(Math.max(t, e), o)
}
function je(e, t) {
  var o
  const {index: n} =
    (o = e.reduce((p, g, $) => {
      const v = Math.abs(t - g)
      return p === null || v < p.distance || v === p.distance
        ? {distance: v, index: $}
        : p
    }, null)) != null
      ? o
      : {}
  return n
}
function Ce(e, t) {
  if (t.current !== void 0 && e.changedTouches) {
    const o = e
    for (let n = 0; n < o.changedTouches.length; n += 1) {
      const p = o.changedTouches[n]
      if (p.identifier === t.current) return {x: p.clientX, y: p.clientY}
    }
    return !1
  }
  return {x: e.clientX, y: e.clientY}
}
function Ne(e, t, o) {
  return ((e - t) * 100) / (o - t)
}
function Ft(e, t, o) {
  return (o - t) * e + t
}
function Vt(e) {
  if (Math.abs(e) < 1) {
    const o = e.toExponential().split('e-'),
      n = o[0].split('.')[1]
    return (n ? n.length : 0) + parseInt(o[1], 10)
  }
  const t = e.toString().split('.')[1]
  return t ? t.length : 0
}
function Et(e, t, o) {
  const n = Math.round((e - o) / t) * t + o
  return Number(n.toFixed(Vt(t)))
}
function We({values: e, newValue: t, index: o}) {
  const n = e.slice()
  return (n[o] = t), n.sort(ut)
}
function Te({sliderRef: e, activeIndex: t, setActive: o}) {
  var n, p
  const g = Fe(e.current)
  if (
    !((n = e.current) != null && n.contains(g.activeElement)) ||
    Number(
      g == null || (p = g.activeElement) == null
        ? void 0
        : p.getAttribute('data-index')
    ) !== t
  ) {
    var $
    ;($ = e.current) == null ||
      $.querySelector(`[type="range"][data-index="${t}"]`).focus()
  }
  o && o(t)
}
const Nt = {
    horizontal: {
      offset: (e) => ({left: `${e}%`}),
      leap: (e) => ({width: `${e}%`}),
    },
    'horizontal-reverse': {
      offset: (e) => ({right: `${e}%`}),
      leap: (e) => ({width: `${e}%`}),
    },
    vertical: {
      offset: (e) => ({bottom: `${e}%`}),
      leap: (e) => ({height: `${e}%`}),
    },
  },
  At = (e) => e
let _e
function qe() {
  return (
    _e === void 0 &&
      (typeof CSS < 'u' && typeof CSS.supports == 'function'
        ? (_e = CSS.supports('touch-action', 'none'))
        : (_e = !0)),
    _e
  )
}
function Ot(e) {
  const {
      'aria-labelledby': t,
      defaultValue: o,
      disabled: n = !1,
      disableSwap: p = !1,
      isRtl: g = !1,
      marks: $ = !1,
      max: v = 100,
      min: k = 0,
      name: H,
      onChange: X,
      onChangeCommitted: D,
      orientation: V = 'horizontal',
      ref: U,
      scale: q = At,
      step: E = 1,
      tabIndex: me,
      value: se,
    } = e,
    N = C.useRef(),
    [ee, B] = C.useState(-1),
    [G, I] = C.useState(-1),
    [ie, j] = C.useState(!1),
    J = C.useRef(0),
    [z, W] = $t({controlled: se, default: o ?? k, name: 'Slider'}),
    T =
      X &&
      ((r, a, i) => {
        const u = r.nativeEvent || r,
          w = new u.constructor(u.type, u)
        Object.defineProperty(w, 'target', {
          writable: !0,
          value: {value: a, name: H},
        }),
          X(w, a, i)
      }),
    K = Array.isArray(z)
  let c = K ? z.slice().sort(ut) : [z]
  c = c.map((r) => xe(r, k, v))
  const m =
      $ === !0 && E !== null
        ? [...Array(Math.floor((v - k) / E) + 1)].map((r, a) => ({
            value: k + E * a,
          }))
        : $ || [],
    _ = m.map((r) => r.value),
    {isFocusVisibleRef: h, onBlur: b, onFocus: x, ref: ve} = Ct(),
    [be, te] = C.useState(-1),
    y = C.useRef(),
    re = Be(ve, y),
    ce = Be(U, re),
    oe = (r) => (a) => {
      var i
      const u = Number(a.currentTarget.getAttribute('data-index'))
      x(a),
        h.current === !0 && te(u),
        I(u),
        r == null || (i = r.onFocus) == null || i.call(r, a)
    },
    fe = (r) => (a) => {
      var i
      b(a),
        h.current === !1 && te(-1),
        I(-1),
        r == null || (i = r.onBlur) == null || i.call(r, a)
    }
  vt(() => {
    if (n && y.current.contains(document.activeElement)) {
      var r
      ;(r = document.activeElement) == null || r.blur()
    }
  }, [n]),
    n && ee !== -1 && B(-1),
    n && be !== -1 && te(-1)
  const ue = (r) => (a) => {
      var i
      ;(i = r.onChange) == null || i.call(r, a)
      const u = Number(a.currentTarget.getAttribute('data-index')),
        w = c[u],
        d = _.indexOf(w)
      let s = a.target.valueAsNumber
      if (
        (m && E == null && (s = s < w ? _[d - 1] : _[d + 1]),
        (s = xe(s, k, v)),
        m && E == null)
      ) {
        const M = _.indexOf(c[u])
        s = s < c[u] ? _[M - 1] : _[M + 1]
      }
      if (K) {
        p && (s = xe(s, c[u - 1] || -1 / 0, c[u + 1] || 1 / 0))
        const M = s
        s = We({values: c, newValue: s, index: u})
        let f = u
        p || (f = s.indexOf(M)), Te({sliderRef: y, activeIndex: f})
      }
      W(s), te(u), T && T(a, s, u), D && D(a, s)
    },
    R = C.useRef()
  let ae = V
  g && V === 'horizontal' && (ae += '-reverse')
  const Y = ({finger: r, move: a = !1}) => {
      const {current: i} = y,
        {width: u, height: w, bottom: d, left: s} = i.getBoundingClientRect()
      let M
      ae.indexOf('vertical') === 0 ? (M = (d - r.y) / w) : (M = (r.x - s) / u),
        ae.indexOf('-reverse') !== -1 && (M = 1 - M)
      let f
      if (((f = Ft(M, k, v)), E)) f = Et(f, E, k)
      else {
        const He = je(_, f)
        f = _[He]
      }
      f = xe(f, k, v)
      let P = 0
      if (K) {
        a ? (P = R.current) : (P = je(c, f)),
          p && (f = xe(f, c[P - 1] || -1 / 0, c[P + 1] || 1 / 0))
        const He = f
        ;(f = We({values: c, newValue: f, index: P})),
          (p && a) || ((P = f.indexOf(He)), (R.current = P))
      }
      return {newValue: f, activeIndex: P}
    },
    S = De((r) => {
      const a = Ce(r, N)
      if (!a) return
      if (((J.current += 1), r.type === 'mousemove' && r.buttons === 0)) {
        F(r)
        return
      }
      const {newValue: i, activeIndex: u} = Y({finger: a, move: !0})
      Te({sliderRef: y, activeIndex: u, setActive: B}),
        W(i),
        !ie && J.current > zt && j(!0),
        T && i !== z && T(r, i, u)
    }),
    F = De((r) => {
      const a = Ce(r, N)
      if ((j(!1), !a)) return
      const {newValue: i} = Y({finger: a, move: !0})
      B(-1),
        r.type === 'touchend' && I(-1),
        D && D(r, i),
        (N.current = void 0),
        A()
    }),
    Q = De((r) => {
      if (n) return
      qe() || r.preventDefault()
      const a = r.changedTouches[0]
      a != null && (N.current = a.identifier)
      const i = Ce(r, N)
      if (i !== !1) {
        const {newValue: w, activeIndex: d} = Y({finger: i})
        Te({sliderRef: y, activeIndex: d, setActive: B}), W(w), T && T(r, w, d)
      }
      J.current = 0
      const u = Fe(y.current)
      u.addEventListener('touchmove', S), u.addEventListener('touchend', F)
    }),
    A = C.useCallback(() => {
      const r = Fe(y.current)
      r.removeEventListener('mousemove', S),
        r.removeEventListener('mouseup', F),
        r.removeEventListener('touchmove', S),
        r.removeEventListener('touchend', F)
    }, [F, S])
  C.useEffect(() => {
    const {current: r} = y
    return (
      r.addEventListener('touchstart', Q, {passive: qe()}),
      () => {
        r.removeEventListener('touchstart', Q, {passive: qe()}), A()
      }
    )
  }, [A, Q]),
    C.useEffect(() => {
      n && A()
    }, [n, A])
  const he = (r) => (a) => {
      var i
      if (
        ((i = r.onMouseDown) == null || i.call(r, a),
        n || a.defaultPrevented || a.button !== 0)
      )
        return
      a.preventDefault()
      const u = Ce(a, N)
      if (u !== !1) {
        const {newValue: d, activeIndex: s} = Y({finger: u})
        Te({sliderRef: y, activeIndex: s, setActive: B}), W(d), T && T(a, d, s)
      }
      J.current = 0
      const w = Fe(y.current)
      w.addEventListener('mousemove', S), w.addEventListener('mouseup', F)
    },
    de = Ne(K ? c[0] : k, k, v),
    ge = Ne(c[c.length - 1], k, v) - de,
    ye = (r = {}) => {
      const a = {onMouseDown: he(r || {})},
        i = l({}, r, a)
      return l({ref: ce}, i)
    },
    ke = (r) => (a) => {
      var i
      ;(i = r.onMouseOver) == null || i.call(r, a)
      const u = Number(a.currentTarget.getAttribute('data-index'))
      I(u)
    },
    Pe = (r) => (a) => {
      var i
      ;(i = r.onMouseLeave) == null || i.call(r, a), I(-1)
    }
  return {
    active: ee,
    axis: ae,
    axisProps: Nt,
    dragging: ie,
    focusedThumbIndex: be,
    getHiddenInputProps: (r = {}) => {
      var a
      const i = {
          onChange: ue(r || {}),
          onFocus: oe(r || {}),
          onBlur: fe(r || {}),
        },
        u = l({}, r, i)
      return l(
        {
          tabIndex: me,
          'aria-labelledby': t,
          'aria-orientation': V,
          'aria-valuemax': q(v),
          'aria-valuemin': q(k),
          name: H,
          type: 'range',
          min: e.min,
          max: e.max,
          step: (a = e.step) != null ? a : void 0,
          disabled: n,
        },
        u,
        {
          style: l({}, wt, {
            direction: g ? 'rtl' : 'ltr',
            width: '100%',
            height: '100%',
          }),
        }
      )
    },
    getRootProps: ye,
    getThumbProps: (r = {}) => {
      const a = {onMouseOver: ke(r || {}), onMouseLeave: Pe(r || {})}
      return l({}, r, a)
    },
    marks: m,
    open: G,
    range: K,
    trackLeap: ge,
    trackOffset: de,
    values: c,
  }
}
const Ht = [
    'aria-label',
    'aria-valuetext',
    'aria-labelledby',
    'className',
    'component',
    'classes',
    'disableSwap',
    'disabled',
    'getAriaLabel',
    'getAriaValueText',
    'marks',
    'max',
    'min',
    'name',
    'onChange',
    'onChangeCommitted',
    'orientation',
    'scale',
    'step',
    'tabIndex',
    'track',
    'value',
    'valueLabelDisplay',
    'valueLabelFormat',
    'isRtl',
    'slotProps',
    'slots',
  ],
  Ye = (e) => e,
  Dt = (e) => {
    const {
      disabled: t,
      dragging: o,
      marked: n,
      orientation: p,
      track: g,
      classes: $,
    } = e
    return ht(
      {
        root: [
          'root',
          t && 'disabled',
          o && 'dragging',
          n && 'marked',
          p === 'vertical' && 'vertical',
          g === 'inverted' && 'trackInverted',
          g === !1 && 'trackFalse',
        ],
        rail: ['rail'],
        track: ['track'],
        mark: ['mark'],
        markActive: ['markActive'],
        markLabel: ['markLabel'],
        markLabelActive: ['markLabelActive'],
        valueLabel: ['valueLabel'],
        thumb: ['thumb', t && 'disabled'],
        active: ['active'],
        disabled: ['disabled'],
        focusVisible: ['focusVisible'],
      },
      Se,
      $
    )
  },
  qt = ({children: e}) => e,
  Ut = C.forwardRef(function (t, o) {
    var n, p, g, $, v, k, H
    const {
        'aria-label': X,
        'aria-valuetext': D,
        'aria-labelledby': V,
        className: U,
        component: q,
        classes: E,
        disableSwap: me = !1,
        disabled: se = !1,
        getAriaLabel: N,
        getAriaValueText: ee,
        marks: B = !1,
        max: G = 100,
        min: I = 0,
        orientation: ie = 'horizontal',
        scale: j = Ye,
        step: J = 1,
        track: z = 'normal',
        valueLabelDisplay: W = 'off',
        valueLabelFormat: T = Ye,
        isRtl: K = !1,
        slotProps: c = {},
        slots: m = {},
      } = t,
      _ = lt(t, Ht),
      h = l({}, t, {
        marks: B,
        classes: E,
        disabled: se,
        isRtl: K,
        max: G,
        min: I,
        orientation: ie,
        scale: j,
        step: J,
        track: z,
        valueLabelDisplay: W,
        valueLabelFormat: T,
      }),
      {
        axisProps: b,
        getRootProps: x,
        getHiddenInputProps: ve,
        getThumbProps: be,
        open: te,
        active: y,
        axis: re,
        range: ce,
        focusedThumbIndex: oe,
        dragging: fe,
        marks: ue,
        values: R,
        trackOffset: ae,
        trackLeap: Y,
      } = Ot(l({}, h, {ref: o}))
    ;(h.marked = ue.length > 0 && ue.some((d) => d.label)),
      (h.dragging = fe),
      (h.focusedThumbIndex = oe)
    const S = Dt(h),
      F = (n = q ?? m.root) != null ? n : 'span',
      Q = ne({
        elementType: F,
        getSlotProps: x,
        externalSlotProps: c.root,
        externalForwardedProps: _,
        ownerState: h,
        className: [S.root, U],
      }),
      A = (p = m.rail) != null ? p : 'span',
      he = ne({
        elementType: A,
        externalSlotProps: c.rail,
        ownerState: h,
        className: S.rail,
      }),
      de = (g = m.track) != null ? g : 'span',
      ge = ne({
        elementType: de,
        externalSlotProps: c.track,
        additionalProps: {style: l({}, b[re].offset(ae), b[re].leap(Y))},
        ownerState: h,
        className: S.track,
      }),
      ye = ($ = m.thumb) != null ? $ : 'span',
      ke = ne({
        elementType: ye,
        getSlotProps: be,
        externalSlotProps: c.thumb,
        ownerState: h,
      }),
      Pe = (v = m.valueLabel) != null ? v : ct,
      Oe = ne({
        elementType: Pe,
        externalSlotProps: c.valueLabel,
        ownerState: h,
      }),
      $e = (k = m.mark) != null ? k : 'span',
      r = ne({
        elementType: $e,
        externalSlotProps: c.mark,
        ownerState: h,
        className: S.mark,
      }),
      a = (H = m.markLabel) != null ? H : 'span',
      i = ne({elementType: a, externalSlotProps: c.markLabel, ownerState: h}),
      u = m.input || 'input',
      w = ne({
        elementType: u,
        getSlotProps: ve,
        externalSlotProps: c.input,
        ownerState: h,
      })
    return Le(
      F,
      l({}, Q, {
        children: [
          L(A, l({}, he)),
          L(de, l({}, ge)),
          ue
            .filter((d) => d.value >= I && d.value <= G)
            .map((d, s) => {
              const M = Ne(d.value, I, G),
                f = b[re].offset(M)
              let P
              return (
                z === !1
                  ? (P = R.indexOf(d.value) !== -1)
                  : (P =
                      (z === 'normal' &&
                        (ce
                          ? d.value >= R[0] && d.value <= R[R.length - 1]
                          : d.value <= R[0])) ||
                      (z === 'inverted' &&
                        (ce
                          ? d.value <= R[0] || d.value >= R[R.length - 1]
                          : d.value >= R[0]))),
                Le(
                  C.Fragment,
                  {
                    children: [
                      L(
                        $e,
                        l({'data-index': s}, r, !Ve($e) && {markActive: P}, {
                          style: l({}, f, r.style),
                          className: Z(r.className, P && S.markActive),
                        })
                      ),
                      d.label != null
                        ? L(
                            a,
                            l(
                              {'aria-hidden': !0, 'data-index': s},
                              i,
                              !Ve(a) && {markLabelActive: P},
                              {
                                style: l({}, f, i.style),
                                className: Z(
                                  S.markLabel,
                                  i.className,
                                  P && S.markLabelActive
                                ),
                                children: d.label,
                              }
                            )
                          )
                        : null,
                    ],
                  },
                  s
                )
              )
            }),
          R.map((d, s) => {
            const M = Ne(d, I, G),
              f = b[re].offset(M),
              P = W === 'off' ? qt : Pe
            return L(
              C.Fragment,
              {
                children: L(
                  P,
                  l(
                    {},
                    !Ve(P) && {
                      valueLabelFormat: T,
                      valueLabelDisplay: W,
                      value: typeof T == 'function' ? T(j(d), s) : T,
                      index: s,
                      open: te === s || y === s || W === 'on',
                      disabled: se,
                    },
                    Oe,
                    {
                      className: Z(S.valueLabel, Oe.className),
                      children: L(
                        ye,
                        l(
                          {'data-index': s, 'data-focusvisible': oe === s},
                          ke,
                          {
                            className: Z(
                              S.thumb,
                              ke.className,
                              y === s && S.active,
                              oe === s && S.focusVisible
                            ),
                            style: l(
                              {},
                              f,
                              {pointerEvents: me && y !== s ? 'none' : void 0},
                              ke.style
                            ),
                            children: L(
                              u,
                              l(
                                {
                                  'data-index': s,
                                  'aria-label': N ? N(s) : X,
                                  'aria-valuenow': j(d),
                                  'aria-labelledby': V,
                                  'aria-valuetext': ee ? ee(j(d), s) : D,
                                  value: R[s],
                                },
                                w
                              )
                            ),
                          }
                        )
                      ),
                    }
                  )
                ),
              },
              s
            )
          }),
        ],
      })
    )
  }),
  Bt = Ut,
  jt = (e) => !e || !Ve(e),
  Re = jt,
  Wt = [
    'component',
    'components',
    'componentsProps',
    'color',
    'size',
    'slotProps',
    'slots',
  ],
  le = l(
    {},
    Ee,
    st('MuiSlider', [
      'colorPrimary',
      'colorSecondary',
      'thumbColorPrimary',
      'thumbColorSecondary',
      'sizeSmall',
      'thumbSizeSmall',
    ])
  ),
  Yt = pe('span', {
    name: 'MuiSlider',
    slot: 'Root',
    overridesResolver: (e, t) => {
      const {ownerState: o} = e
      return [
        t.root,
        t[`color${O(o.color)}`],
        o.size !== 'medium' && t[`size${O(o.size)}`],
        o.marked && t.marked,
        o.orientation === 'vertical' && t.vertical,
        o.track === 'inverted' && t.trackInverted,
        o.track === !1 && t.trackFalse,
      ]
    },
  })(({theme: e, ownerState: t}) =>
    l(
      {
        borderRadius: 12,
        boxSizing: 'content-box',
        display: 'inline-block',
        position: 'relative',
        cursor: 'pointer',
        touchAction: 'none',
        color: (e.vars || e).palette[t.color].main,
        WebkitTapHighlightColor: 'transparent',
      },
      t.orientation === 'horizontal' &&
        l(
          {
            height: 4,
            width: '100%',
            padding: '13px 0',
            '@media (pointer: coarse)': {padding: '20px 0'},
          },
          t.size === 'small' && {height: 2},
          t.marked && {marginBottom: 20}
        ),
      t.orientation === 'vertical' &&
        l(
          {
            height: '100%',
            width: 4,
            padding: '0 13px',
            '@media (pointer: coarse)': {padding: '0 20px'},
          },
          t.size === 'small' && {width: 2},
          t.marked && {marginRight: 44}
        ),
      {
        '@media print': {colorAdjust: 'exact'},
        [`&.${le.disabled}`]: {
          pointerEvents: 'none',
          cursor: 'default',
          color: (e.vars || e).palette.grey[400],
        },
        [`&.${le.dragging}`]: {
          [`& .${le.thumb}, & .${le.track}`]: {transition: 'none'},
        },
      }
    )
  ),
  Xt = pe('span', {
    name: 'MuiSlider',
    slot: 'Rail',
    overridesResolver: (e, t) => t.rail,
  })(({ownerState: e}) =>
    l(
      {
        display: 'block',
        position: 'absolute',
        borderRadius: 'inherit',
        backgroundColor: 'currentColor',
        opacity: 0.38,
      },
      e.orientation === 'horizontal' && {
        width: '100%',
        height: 'inherit',
        top: '50%',
        transform: 'translateY(-50%)',
      },
      e.orientation === 'vertical' && {
        height: '100%',
        width: 'inherit',
        left: '50%',
        transform: 'translateX(-50%)',
      },
      e.track === 'inverted' && {opacity: 1}
    )
  ),
  Gt = pe('span', {
    name: 'MuiSlider',
    slot: 'Track',
    overridesResolver: (e, t) => t.track,
  })(({theme: e, ownerState: t}) => {
    const o =
      e.palette.mode === 'light'
        ? pt(e.palette[t.color].main, 0.62)
        : mt(e.palette[t.color].main, 0.5)
    return l(
      {
        display: 'block',
        position: 'absolute',
        borderRadius: 'inherit',
        border: '1px solid currentColor',
        backgroundColor: 'currentColor',
        transition: e.transitions.create(
          ['left', 'width', 'bottom', 'height'],
          {duration: e.transitions.duration.shortest}
        ),
      },
      t.size === 'small' && {border: 'none'},
      t.orientation === 'horizontal' && {
        height: 'inherit',
        top: '50%',
        transform: 'translateY(-50%)',
      },
      t.orientation === 'vertical' && {
        width: 'inherit',
        left: '50%',
        transform: 'translateX(-50%)',
      },
      t.track === !1 && {display: 'none'},
      t.track === 'inverted' && {
        backgroundColor: e.vars ? e.vars.palette.Slider[`${t.color}Track`] : o,
        borderColor: e.vars ? e.vars.palette.Slider[`${t.color}Track`] : o,
      }
    )
  }),
  Jt = pe('span', {
    name: 'MuiSlider',
    slot: 'Thumb',
    overridesResolver: (e, t) => {
      const {ownerState: o} = e
      return [
        t.thumb,
        t[`thumbColor${O(o.color)}`],
        o.size !== 'medium' && t[`thumbSize${O(o.size)}`],
      ]
    },
  })(({theme: e, ownerState: t}) =>
    l(
      {
        position: 'absolute',
        width: 20,
        height: 20,
        boxSizing: 'border-box',
        borderRadius: '50%',
        outline: 0,
        backgroundColor: 'currentColor',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        transition: e.transitions.create(['box-shadow', 'left', 'bottom'], {
          duration: e.transitions.duration.shortest,
        }),
      },
      t.size === 'small' && {width: 12, height: 12},
      t.orientation === 'horizontal' && {
        top: '50%',
        transform: 'translate(-50%, -50%)',
      },
      t.orientation === 'vertical' && {
        left: '50%',
        transform: 'translate(-50%, 50%)',
      },
      {
        '&:before': l(
          {
            position: 'absolute',
            content: '""',
            borderRadius: 'inherit',
            width: '100%',
            height: '100%',
            boxShadow: (e.vars || e).shadows[2],
          },
          t.size === 'small' && {boxShadow: 'none'}
        ),
        '&::after': {
          position: 'absolute',
          content: '""',
          borderRadius: '50%',
          width: 42,
          height: 42,
          top: '50%',
          left: '50%',
          transform: 'translate(-50%, -50%)',
        },
        [`&:hover, &.${le.focusVisible}`]: {
          boxShadow: `0px 0px 0px 8px ${
            e.vars
              ? `rgba(${e.vars.palette[t.color].mainChannel} / 0.16)`
              : Ue(e.palette[t.color].main, 0.16)
          }`,
          '@media (hover: none)': {boxShadow: 'none'},
        },
        [`&.${le.active}`]: {
          boxShadow: `0px 0px 0px 14px ${
            e.vars
              ? `rgba(${e.vars.palette[t.color].mainChannel} / 0.16)`
              : Ue(e.palette[t.color].main, 0.16)
          }`,
        },
        [`&.${le.disabled}`]: {'&:hover': {boxShadow: 'none'}},
      }
    )
  ),
  Kt = pe(ct, {
    name: 'MuiSlider',
    slot: 'ValueLabel',
    overridesResolver: (e, t) => t.valueLabel,
  })(({theme: e, ownerState: t}) =>
    l(
      {
        [`&.${le.valueLabelOpen}`]: {transform: 'translateY(-100%) scale(1)'},
        zIndex: 1,
        whiteSpace: 'nowrap',
      },
      e.typography.body2,
      {
        fontWeight: 500,
        transition: e.transitions.create(['transform'], {
          duration: e.transitions.duration.shortest,
        }),
        transform: 'translateY(-100%) scale(0)',
        position: 'absolute',
        backgroundColor: (e.vars || e).palette.grey[600],
        borderRadius: 2,
        color: (e.vars || e).palette.common.white,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        padding: '0.25rem 0.75rem',
      },
      t.orientation === 'horizontal' && {
        top: '-10px',
        transformOrigin: 'bottom center',
        '&:before': {
          position: 'absolute',
          content: '""',
          width: 8,
          height: 8,
          transform: 'translate(-50%, 50%) rotate(45deg)',
          backgroundColor: 'inherit',
          bottom: 0,
          left: '50%',
        },
      },
      t.orientation === 'vertical' && {
        right: '30px',
        top: '24px',
        transformOrigin: 'right center',
        '&:before': {
          position: 'absolute',
          content: '""',
          width: 8,
          height: 8,
          transform: 'translate(-50%, 50%) rotate(45deg)',
          backgroundColor: 'inherit',
          right: '-20%',
          top: '25%',
        },
      },
      t.size === 'small' && {
        fontSize: e.typography.pxToRem(12),
        padding: '0.25rem 0.5rem',
      }
    )
  ),
  Qt = pe('span', {
    name: 'MuiSlider',
    slot: 'Mark',
    shouldForwardProp: (e) => it(e) && e !== 'markActive',
    overridesResolver: (e, t) => t.mark,
  })(({theme: e, ownerState: t, markActive: o}) =>
    l(
      {
        position: 'absolute',
        width: 2,
        height: 2,
        borderRadius: 1,
        backgroundColor: 'currentColor',
      },
      t.orientation === 'horizontal' && {
        top: '50%',
        transform: 'translate(-1px, -50%)',
      },
      t.orientation === 'vertical' && {
        left: '50%',
        transform: 'translate(-50%, 1px)',
      },
      o && {
        backgroundColor: (e.vars || e).palette.background.paper,
        opacity: 0.8,
      }
    )
  ),
  Zt = pe('span', {
    name: 'MuiSlider',
    slot: 'MarkLabel',
    shouldForwardProp: (e) => it(e) && e !== 'markLabelActive',
    overridesResolver: (e, t) => t.markLabel,
  })(({theme: e, ownerState: t, markLabelActive: o}) =>
    l(
      {},
      e.typography.body2,
      {
        color: (e.vars || e).palette.text.secondary,
        position: 'absolute',
        whiteSpace: 'nowrap',
      },
      t.orientation === 'horizontal' && {
        top: 30,
        transform: 'translateX(-50%)',
        '@media (pointer: coarse)': {top: 40},
      },
      t.orientation === 'vertical' && {
        left: 36,
        transform: 'translateY(50%)',
        '@media (pointer: coarse)': {left: 44},
      },
      o && {color: (e.vars || e).palette.text.primary}
    )
  ),
  er = (e) => {
    const {color: t, size: o, classes: n = {}} = e
    return l({}, n, {
      root: Z(
        n.root,
        Se(`color${O(t)}`),
        n[`color${O(t)}`],
        o && [Se(`size${O(o)}`), n[`size${O(o)}`]]
      ),
      thumb: Z(
        n.thumb,
        Se(`thumbColor${O(t)}`),
        n[`thumbColor${O(t)}`],
        o && [Se(`thumbSize${O(o)}`), n[`thumbSize${O(o)}`]]
      ),
    })
  },
  tr = C.forwardRef(function (t, o) {
    var n, p, g, $, v, k, H, X, D, V, U, q, E, me, se, N, ee, B, G, I, ie, j, J
    const z = bt({props: t, name: 'MuiSlider'}),
      T = Pt().direction === 'rtl',
      {
        component: K = 'span',
        components: c = {},
        componentsProps: m = {},
        color: _ = 'primary',
        size: h = 'medium',
        slotProps: b,
        slots: x,
      } = z,
      ve = lt(z, Wt),
      be = l({}, z, {color: _, size: h}),
      te = er(be),
      y =
        (n = (p = x == null ? void 0 : x.root) != null ? p : c.Root) != null
          ? n
          : Yt,
      re =
        (g = ($ = x == null ? void 0 : x.rail) != null ? $ : c.Rail) != null
          ? g
          : Xt,
      ce =
        (v = (k = x == null ? void 0 : x.track) != null ? k : c.Track) != null
          ? v
          : Gt,
      oe =
        (H = (X = x == null ? void 0 : x.thumb) != null ? X : c.Thumb) != null
          ? H
          : Jt,
      fe =
        (D =
          (V = x == null ? void 0 : x.valueLabel) != null ? V : c.ValueLabel) !=
        null
          ? D
          : Kt,
      ue =
        (U = (q = x == null ? void 0 : x.mark) != null ? q : c.Mark) != null
          ? U
          : Qt,
      R =
        (E =
          (me = x == null ? void 0 : x.markLabel) != null ? me : c.MarkLabel) !=
        null
          ? E
          : Zt,
      ae = (se = x == null ? void 0 : x.input) != null ? se : c.Input,
      Y = (N = b == null ? void 0 : b.root) != null ? N : m.root,
      S = (ee = b == null ? void 0 : b.rail) != null ? ee : m.rail,
      F = (B = b == null ? void 0 : b.track) != null ? B : m.track,
      Q = (G = b == null ? void 0 : b.thumb) != null ? G : m.thumb,
      A = (I = b == null ? void 0 : b.valueLabel) != null ? I : m.valueLabel,
      he = (ie = b == null ? void 0 : b.mark) != null ? ie : m.mark,
      de = (j = b == null ? void 0 : b.markLabel) != null ? j : m.markLabel,
      ge = (J = b == null ? void 0 : b.input) != null ? J : m.input
    return L(
      Bt,
      l({}, ve, {
        isRtl: T,
        slots: {
          root: y,
          rail: re,
          track: ce,
          thumb: oe,
          valueLabel: fe,
          mark: ue,
          markLabel: R,
          input: ae,
        },
        slotProps: l({}, m, {
          root: l(
            {},
            Y,
            Re(y) && {
              as: K,
              ownerState: l({}, Y == null ? void 0 : Y.ownerState, {
                color: _,
                size: h,
              }),
            }
          ),
          rail: S,
          thumb: l(
            {},
            Q,
            Re(oe) && {
              ownerState: l({}, Q == null ? void 0 : Q.ownerState, {
                color: _,
                size: h,
              }),
            }
          ),
          track: l(
            {},
            F,
            Re(ce) && {
              ownerState: l({}, F == null ? void 0 : F.ownerState, {
                color: _,
                size: h,
              }),
            }
          ),
          valueLabel: l(
            {},
            A,
            Re(fe) && {
              ownerState: l({}, A == null ? void 0 : A.ownerState, {
                color: _,
                size: h,
              }),
            }
          ),
          mark: he,
          markLabel: de,
          input: ge,
        }),
        classes: te,
        ref: o,
      })
    )
  }),
  rr = tr
function dt({
  name: e,
  control: t,
  label: o,
  rules: n = {},
  parseError: p,
  required: g,
  formControlProps: $,
  ...v
}) {
  const k = gt(),
    H = p || k
  return (
    g && !n.required && (n.required = 'This field is required'),
    L(kt, {
      name: e,
      control: t,
      rules: n,
      render: ({
        field: {onChange: X, value: D},
        fieldState: {invalid: V, error: U},
      }) => {
        const q = U ? (typeof H == 'function' ? H(U) : U.message) : null
        return Le(St, {
          error: V,
          required: g,
          fullWidth: !0,
          ...$,
          children: [
            o && L(yt, {component: 'legend', error: V, children: o}),
            L(rr, {
              ...v,
              value: D,
              onChange: X,
              valueLabelDisplay: v.valueLabelDisplay || 'auto',
            }),
            q && L(Lt, {error: V, children: q}),
          ],
        })
      },
    })
  )
}
const hr = {title: 'Slider Element', component: dt},
  Ae = (e) =>
    Le(xt, {
      defaultValues: {},
      onSuccess: Tt('submit'),
      children: [L(dt, {...e}), L('br', {}), L(_t, {})],
    }),
  we = {render: Ae, args: {name: 'slider'}},
  Me = {render: Ae, args: {name: 'slider', label: 'Slider Label'}},
  Ie = {
    render: Ae,
    args: {name: 'slider_required', label: 'Required Label', required: !0},
  },
  ze = {
    render: Ae,
    args: {
      name: 'slider',
      label: 'Slider With Options',
      min: 0,
      max: 10,
      marks: !0,
    },
  }
var Xe, Ge, Je
we.parameters = {
  ...we.parameters,
  docs: {
    ...((Xe = we.parameters) == null ? void 0 : Xe.docs),
    source: {
      originalSource: `{
  render: Template,
  args: {
    name: 'slider'
  }
}`,
      ...((Je = (Ge = we.parameters) == null ? void 0 : Ge.docs) == null
        ? void 0
        : Je.source),
    },
  },
}
var Ke, Qe, Ze
Me.parameters = {
  ...Me.parameters,
  docs: {
    ...((Ke = Me.parameters) == null ? void 0 : Ke.docs),
    source: {
      originalSource: `{
  render: Template,
  args: {
    name: 'slider',
    label: 'Slider Label'
  }
}`,
      ...((Ze = (Qe = Me.parameters) == null ? void 0 : Qe.docs) == null
        ? void 0
        : Ze.source),
    },
  },
}
var et, tt, rt
Ie.parameters = {
  ...Ie.parameters,
  docs: {
    ...((et = Ie.parameters) == null ? void 0 : et.docs),
    source: {
      originalSource: `{
  render: Template,
  args: {
    name: 'slider_required',
    label: 'Required Label',
    required: true
  }
}`,
      ...((rt = (tt = Ie.parameters) == null ? void 0 : tt.docs) == null
        ? void 0
        : rt.source),
    },
  },
}
var ot, at, nt
ze.parameters = {
  ...ze.parameters,
  docs: {
    ...((ot = ze.parameters) == null ? void 0 : ot.docs),
    source: {
      originalSource: `{
  render: Template,
  args: {
    name: 'slider',
    label: 'Slider With Options',
    min: 0,
    max: 10,
    marks: true
  }
}`,
      ...((nt = (at = ze.parameters) == null ? void 0 : at.docs) == null
        ? void 0
        : nt.source),
    },
  },
}
const gr = ['Basic', 'Label', 'Required', 'WithOptions']
export {
  we as Basic,
  Me as Label,
  Ie as Required,
  ze as WithOptions,
  gr as __namedExportsOrder,
  hr as default,
}
//# sourceMappingURL=SliderElement.stories-24932b6f.js.map
