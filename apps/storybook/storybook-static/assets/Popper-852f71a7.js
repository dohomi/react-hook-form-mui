import {_} from './extends-98964cd2.js'
import {_ as Ce, j as be, m as yt, u as bt} from './useThemeProps-3be52b90.js'
import {r as H} from './index-ebeaab24.js'
import {
  o as wt,
  n as xt,
  E as Ye,
  G as ze,
  q as Ot,
  p as Pt,
} from './Button-934b6c03.js'
import {o as Et, u as Rt} from './useSlotProps-692f4a62.js'
import {P as At} from './Select-c55867f3.js'
var $ = 'top',
  k = 'bottom',
  L = 'right',
  B = 'left',
  Te = 'auto',
  le = [$, k, L, B],
  ee = 'start',
  fe = 'end',
  Dt = 'clippingParents',
  ot = 'viewport',
  ie = 'popper',
  jt = 'reference',
  Ge = le.reduce(function (e, t) {
    return e.concat([t + '-' + ee, t + '-' + fe])
  }, []),
  nt = [].concat(le, [Te]).reduce(function (e, t) {
    return e.concat([t, t + '-' + ee, t + '-' + fe])
  }, []),
  Ct = 'beforeRead',
  Tt = 'read',
  $t = 'afterRead',
  Bt = 'beforeMain',
  St = 'main',
  Mt = 'afterMain',
  kt = 'beforeWrite',
  Lt = 'write',
  Wt = 'afterWrite',
  Ht = [Ct, Tt, $t, Bt, St, Mt, kt, Lt, Wt]
function V(e) {
  return e ? (e.nodeName || '').toLowerCase() : null
}
function W(e) {
  if (e == null) return window
  if (e.toString() !== '[object Window]') {
    var t = e.ownerDocument
    return (t && t.defaultView) || window
  }
  return e
}
function Q(e) {
  var t = W(e).Element
  return e instanceof t || e instanceof Element
}
function M(e) {
  var t = W(e).HTMLElement
  return e instanceof t || e instanceof HTMLElement
}
function $e(e) {
  if (typeof ShadowRoot > 'u') return !1
  var t = W(e).ShadowRoot
  return e instanceof t || e instanceof ShadowRoot
}
function Ut(e) {
  var t = e.state
  Object.keys(t.elements).forEach(function (r) {
    var o = t.styles[r] || {},
      n = t.attributes[r] || {},
      a = t.elements[r]
    !M(a) ||
      !V(a) ||
      (Object.assign(a.style, o),
      Object.keys(n).forEach(function (f) {
        var s = n[f]
        s === !1 ? a.removeAttribute(f) : a.setAttribute(f, s === !0 ? '' : s)
      }))
  })
}
function Vt(e) {
  var t = e.state,
    r = {
      popper: {position: t.options.strategy, left: '0', top: '0', margin: '0'},
      arrow: {position: 'absolute'},
      reference: {},
    }
  return (
    Object.assign(t.elements.popper.style, r.popper),
    (t.styles = r),
    t.elements.arrow && Object.assign(t.elements.arrow.style, r.arrow),
    function () {
      Object.keys(t.elements).forEach(function (o) {
        var n = t.elements[o],
          a = t.attributes[o] || {},
          f = Object.keys(t.styles.hasOwnProperty(o) ? t.styles[o] : r[o]),
          s = f.reduce(function (i, c) {
            return (i[c] = ''), i
          }, {})
        !M(n) ||
          !V(n) ||
          (Object.assign(n.style, s),
          Object.keys(a).forEach(function (i) {
            n.removeAttribute(i)
          }))
      })
    }
  )
}
const Nt = {
  name: 'applyStyles',
  enabled: !0,
  phase: 'write',
  fn: Ut,
  effect: Vt,
  requires: ['computeStyles'],
}
function U(e) {
  return e.split('-')[0]
}
var K = Math.max,
  we = Math.min,
  te = Math.round
function Ae() {
  var e = navigator.userAgentData
  return e != null && e.brands
    ? e.brands
        .map(function (t) {
          return t.brand + '/' + t.version
        })
        .join(' ')
    : navigator.userAgent
}
function at() {
  return !/^((?!chrome|android).)*safari/i.test(Ae())
}
function re(e, t, r) {
  t === void 0 && (t = !1), r === void 0 && (r = !1)
  var o = e.getBoundingClientRect(),
    n = 1,
    a = 1
  t &&
    M(e) &&
    ((n = (e.offsetWidth > 0 && te(o.width) / e.offsetWidth) || 1),
    (a = (e.offsetHeight > 0 && te(o.height) / e.offsetHeight) || 1))
  var f = Q(e) ? W(e) : window,
    s = f.visualViewport,
    i = !at() && r,
    c = (o.left + (i && s ? s.offsetLeft : 0)) / n,
    p = (o.top + (i && s ? s.offsetTop : 0)) / a,
    m = o.width / n,
    b = o.height / a
  return {
    width: m,
    height: b,
    top: p,
    right: c + m,
    bottom: p + b,
    left: c,
    x: c,
    y: p,
  }
}
function Be(e) {
  var t = re(e),
    r = e.offsetWidth,
    o = e.offsetHeight
  return (
    Math.abs(t.width - r) <= 1 && (r = t.width),
    Math.abs(t.height - o) <= 1 && (o = t.height),
    {x: e.offsetLeft, y: e.offsetTop, width: r, height: o}
  )
}
function it(e, t) {
  var r = t.getRootNode && t.getRootNode()
  if (e.contains(t)) return !0
  if (r && $e(r)) {
    var o = t
    do {
      if (o && e.isSameNode(o)) return !0
      o = o.parentNode || o.host
    } while (o)
  }
  return !1
}
function q(e) {
  return W(e).getComputedStyle(e)
}
function Ft(e) {
  return ['table', 'td', 'th'].indexOf(V(e)) >= 0
}
function Y(e) {
  return ((Q(e) ? e.ownerDocument : e.document) || window.document)
    .documentElement
}
function xe(e) {
  return V(e) === 'html'
    ? e
    : e.assignedSlot || e.parentNode || ($e(e) ? e.host : null) || Y(e)
}
function Je(e) {
  return !M(e) || q(e).position === 'fixed' ? null : e.offsetParent
}
function qt(e) {
  var t = /firefox/i.test(Ae()),
    r = /Trident/i.test(Ae())
  if (r && M(e)) {
    var o = q(e)
    if (o.position === 'fixed') return null
  }
  var n = xe(e)
  for ($e(n) && (n = n.host); M(n) && ['html', 'body'].indexOf(V(n)) < 0; ) {
    var a = q(n)
    if (
      a.transform !== 'none' ||
      a.perspective !== 'none' ||
      a.contain === 'paint' ||
      ['transform', 'perspective'].indexOf(a.willChange) !== -1 ||
      (t && a.willChange === 'filter') ||
      (t && a.filter && a.filter !== 'none')
    )
      return n
    n = n.parentNode
  }
  return null
}
function ue(e) {
  for (var t = W(e), r = Je(e); r && Ft(r) && q(r).position === 'static'; )
    r = Je(r)
  return r &&
    (V(r) === 'html' || (V(r) === 'body' && q(r).position === 'static'))
    ? t
    : r || qt(e) || t
}
function Se(e) {
  return ['top', 'bottom'].indexOf(e) >= 0 ? 'x' : 'y'
}
function se(e, t, r) {
  return K(e, we(t, r))
}
function It(e, t, r) {
  var o = se(e, t, r)
  return o > r ? r : o
}
function st() {
  return {top: 0, right: 0, bottom: 0, left: 0}
}
function pt(e) {
  return Object.assign({}, st(), e)
}
function ft(e, t) {
  return t.reduce(function (r, o) {
    return (r[o] = e), r
  }, {})
}
var Xt = function (t, r) {
  return (
    (t =
      typeof t == 'function'
        ? t(Object.assign({}, r.rects, {placement: r.placement}))
        : t),
    pt(typeof t != 'number' ? t : ft(t, le))
  )
}
function Yt(e) {
  var t,
    r = e.state,
    o = e.name,
    n = e.options,
    a = r.elements.arrow,
    f = r.modifiersData.popperOffsets,
    s = U(r.placement),
    i = Se(s),
    c = [B, L].indexOf(s) >= 0,
    p = c ? 'height' : 'width'
  if (!(!a || !f)) {
    var m = Xt(n.padding, r),
      b = Be(a),
      l = i === 'y' ? $ : B,
      w = i === 'y' ? k : L,
      d =
        r.rects.reference[p] + r.rects.reference[i] - f[i] - r.rects.popper[p],
      v = f[i] - r.rects.reference[i],
      g = ue(a),
      x = g ? (i === 'y' ? g.clientHeight || 0 : g.clientWidth || 0) : 0,
      O = d / 2 - v / 2,
      u = m[l],
      h = x - b[p] - m[w],
      y = x / 2 - b[p] / 2 + O,
      P = se(u, y, h),
      E = i
    r.modifiersData[o] = ((t = {}), (t[E] = P), (t.centerOffset = P - y), t)
  }
}
function zt(e) {
  var t = e.state,
    r = e.options,
    o = r.element,
    n = o === void 0 ? '[data-popper-arrow]' : o
  n != null &&
    ((typeof n == 'string' && ((n = t.elements.popper.querySelector(n)), !n)) ||
      (it(t.elements.popper, n) && (t.elements.arrow = n)))
}
const Gt = {
  name: 'arrow',
  enabled: !0,
  phase: 'main',
  fn: Yt,
  effect: zt,
  requires: ['popperOffsets'],
  requiresIfExists: ['preventOverflow'],
}
function oe(e) {
  return e.split('-')[1]
}
var Jt = {top: 'auto', right: 'auto', bottom: 'auto', left: 'auto'}
function Kt(e) {
  var t = e.x,
    r = e.y,
    o = window,
    n = o.devicePixelRatio || 1
  return {x: te(t * n) / n || 0, y: te(r * n) / n || 0}
}
function Ke(e) {
  var t,
    r = e.popper,
    o = e.popperRect,
    n = e.placement,
    a = e.variation,
    f = e.offsets,
    s = e.position,
    i = e.gpuAcceleration,
    c = e.adaptive,
    p = e.roundOffsets,
    m = e.isFixed,
    b = f.x,
    l = b === void 0 ? 0 : b,
    w = f.y,
    d = w === void 0 ? 0 : w,
    v = typeof p == 'function' ? p({x: l, y: d}) : {x: l, y: d}
  ;(l = v.x), (d = v.y)
  var g = f.hasOwnProperty('x'),
    x = f.hasOwnProperty('y'),
    O = B,
    u = $,
    h = window
  if (c) {
    var y = ue(r),
      P = 'clientHeight',
      E = 'clientWidth'
    if (
      (y === W(r) &&
        ((y = Y(r)),
        q(y).position !== 'static' &&
          s === 'absolute' &&
          ((P = 'scrollHeight'), (E = 'scrollWidth'))),
      (y = y),
      n === $ || ((n === B || n === L) && a === fe))
    ) {
      u = k
      var A = m && y === h && h.visualViewport ? h.visualViewport.height : y[P]
      ;(d -= A - o.height), (d *= i ? 1 : -1)
    }
    if (n === B || ((n === $ || n === k) && a === fe)) {
      O = L
      var R = m && y === h && h.visualViewport ? h.visualViewport.width : y[E]
      ;(l -= R - o.width), (l *= i ? 1 : -1)
    }
  }
  var D = Object.assign({position: s}, c && Jt),
    S = p === !0 ? Kt({x: l, y: d}) : {x: l, y: d}
  if (((l = S.x), (d = S.y), i)) {
    var C
    return Object.assign(
      {},
      D,
      ((C = {}),
      (C[u] = x ? '0' : ''),
      (C[O] = g ? '0' : ''),
      (C.transform =
        (h.devicePixelRatio || 1) <= 1
          ? 'translate(' + l + 'px, ' + d + 'px)'
          : 'translate3d(' + l + 'px, ' + d + 'px, 0)'),
      C)
    )
  }
  return Object.assign(
    {},
    D,
    ((t = {}),
    (t[u] = x ? d + 'px' : ''),
    (t[O] = g ? l + 'px' : ''),
    (t.transform = ''),
    t)
  )
}
function Qt(e) {
  var t = e.state,
    r = e.options,
    o = r.gpuAcceleration,
    n = o === void 0 ? !0 : o,
    a = r.adaptive,
    f = a === void 0 ? !0 : a,
    s = r.roundOffsets,
    i = s === void 0 ? !0 : s,
    c = {
      placement: U(t.placement),
      variation: oe(t.placement),
      popper: t.elements.popper,
      popperRect: t.rects.popper,
      gpuAcceleration: n,
      isFixed: t.options.strategy === 'fixed',
    }
  t.modifiersData.popperOffsets != null &&
    (t.styles.popper = Object.assign(
      {},
      t.styles.popper,
      Ke(
        Object.assign({}, c, {
          offsets: t.modifiersData.popperOffsets,
          position: t.options.strategy,
          adaptive: f,
          roundOffsets: i,
        })
      )
    )),
    t.modifiersData.arrow != null &&
      (t.styles.arrow = Object.assign(
        {},
        t.styles.arrow,
        Ke(
          Object.assign({}, c, {
            offsets: t.modifiersData.arrow,
            position: 'absolute',
            adaptive: !1,
            roundOffsets: i,
          })
        )
      )),
    (t.attributes.popper = Object.assign({}, t.attributes.popper, {
      'data-popper-placement': t.placement,
    }))
}
const Zt = {
  name: 'computeStyles',
  enabled: !0,
  phase: 'beforeWrite',
  fn: Qt,
  data: {},
}
var ge = {passive: !0}
function _t(e) {
  var t = e.state,
    r = e.instance,
    o = e.options,
    n = o.scroll,
    a = n === void 0 ? !0 : n,
    f = o.resize,
    s = f === void 0 ? !0 : f,
    i = W(t.elements.popper),
    c = [].concat(t.scrollParents.reference, t.scrollParents.popper)
  return (
    a &&
      c.forEach(function (p) {
        p.addEventListener('scroll', r.update, ge)
      }),
    s && i.addEventListener('resize', r.update, ge),
    function () {
      a &&
        c.forEach(function (p) {
          p.removeEventListener('scroll', r.update, ge)
        }),
        s && i.removeEventListener('resize', r.update, ge)
    }
  )
}
const er = {
  name: 'eventListeners',
  enabled: !0,
  phase: 'write',
  fn: function () {},
  effect: _t,
  data: {},
}
var tr = {left: 'right', right: 'left', bottom: 'top', top: 'bottom'}
function ye(e) {
  return e.replace(/left|right|bottom|top/g, function (t) {
    return tr[t]
  })
}
var rr = {start: 'end', end: 'start'}
function Qe(e) {
  return e.replace(/start|end/g, function (t) {
    return rr[t]
  })
}
function Me(e) {
  var t = W(e),
    r = t.pageXOffset,
    o = t.pageYOffset
  return {scrollLeft: r, scrollTop: o}
}
function ke(e) {
  return re(Y(e)).left + Me(e).scrollLeft
}
function or(e, t) {
  var r = W(e),
    o = Y(e),
    n = r.visualViewport,
    a = o.clientWidth,
    f = o.clientHeight,
    s = 0,
    i = 0
  if (n) {
    ;(a = n.width), (f = n.height)
    var c = at()
    ;(c || (!c && t === 'fixed')) && ((s = n.offsetLeft), (i = n.offsetTop))
  }
  return {width: a, height: f, x: s + ke(e), y: i}
}
function nr(e) {
  var t,
    r = Y(e),
    o = Me(e),
    n = (t = e.ownerDocument) == null ? void 0 : t.body,
    a = K(
      r.scrollWidth,
      r.clientWidth,
      n ? n.scrollWidth : 0,
      n ? n.clientWidth : 0
    ),
    f = K(
      r.scrollHeight,
      r.clientHeight,
      n ? n.scrollHeight : 0,
      n ? n.clientHeight : 0
    ),
    s = -o.scrollLeft + ke(e),
    i = -o.scrollTop
  return (
    q(n || r).direction === 'rtl' &&
      (s += K(r.clientWidth, n ? n.clientWidth : 0) - a),
    {width: a, height: f, x: s, y: i}
  )
}
function Le(e) {
  var t = q(e),
    r = t.overflow,
    o = t.overflowX,
    n = t.overflowY
  return /auto|scroll|overlay|hidden/.test(r + n + o)
}
function ct(e) {
  return ['html', 'body', '#document'].indexOf(V(e)) >= 0
    ? e.ownerDocument.body
    : M(e) && Le(e)
    ? e
    : ct(xe(e))
}
function pe(e, t) {
  var r
  t === void 0 && (t = [])
  var o = ct(e),
    n = o === ((r = e.ownerDocument) == null ? void 0 : r.body),
    a = W(o),
    f = n ? [a].concat(a.visualViewport || [], Le(o) ? o : []) : o,
    s = t.concat(f)
  return n ? s : s.concat(pe(xe(f)))
}
function De(e) {
  return Object.assign({}, e, {
    left: e.x,
    top: e.y,
    right: e.x + e.width,
    bottom: e.y + e.height,
  })
}
function ar(e, t) {
  var r = re(e, !1, t === 'fixed')
  return (
    (r.top = r.top + e.clientTop),
    (r.left = r.left + e.clientLeft),
    (r.bottom = r.top + e.clientHeight),
    (r.right = r.left + e.clientWidth),
    (r.width = e.clientWidth),
    (r.height = e.clientHeight),
    (r.x = r.left),
    (r.y = r.top),
    r
  )
}
function Ze(e, t, r) {
  return t === ot ? De(or(e, r)) : Q(t) ? ar(t, r) : De(nr(Y(e)))
}
function ir(e) {
  var t = pe(xe(e)),
    r = ['absolute', 'fixed'].indexOf(q(e).position) >= 0,
    o = r && M(e) ? ue(e) : e
  return Q(o)
    ? t.filter(function (n) {
        return Q(n) && it(n, o) && V(n) !== 'body'
      })
    : []
}
function sr(e, t, r, o) {
  var n = t === 'clippingParents' ? ir(e) : [].concat(t),
    a = [].concat(n, [r]),
    f = a[0],
    s = a.reduce(function (i, c) {
      var p = Ze(e, c, o)
      return (
        (i.top = K(p.top, i.top)),
        (i.right = we(p.right, i.right)),
        (i.bottom = we(p.bottom, i.bottom)),
        (i.left = K(p.left, i.left)),
        i
      )
    }, Ze(e, f, o))
  return (
    (s.width = s.right - s.left),
    (s.height = s.bottom - s.top),
    (s.x = s.left),
    (s.y = s.top),
    s
  )
}
function lt(e) {
  var t = e.reference,
    r = e.element,
    o = e.placement,
    n = o ? U(o) : null,
    a = o ? oe(o) : null,
    f = t.x + t.width / 2 - r.width / 2,
    s = t.y + t.height / 2 - r.height / 2,
    i
  switch (n) {
    case $:
      i = {x: f, y: t.y - r.height}
      break
    case k:
      i = {x: f, y: t.y + t.height}
      break
    case L:
      i = {x: t.x + t.width, y: s}
      break
    case B:
      i = {x: t.x - r.width, y: s}
      break
    default:
      i = {x: t.x, y: t.y}
  }
  var c = n ? Se(n) : null
  if (c != null) {
    var p = c === 'y' ? 'height' : 'width'
    switch (a) {
      case ee:
        i[c] = i[c] - (t[p] / 2 - r[p] / 2)
        break
      case fe:
        i[c] = i[c] + (t[p] / 2 - r[p] / 2)
        break
    }
  }
  return i
}
function ce(e, t) {
  t === void 0 && (t = {})
  var r = t,
    o = r.placement,
    n = o === void 0 ? e.placement : o,
    a = r.strategy,
    f = a === void 0 ? e.strategy : a,
    s = r.boundary,
    i = s === void 0 ? Dt : s,
    c = r.rootBoundary,
    p = c === void 0 ? ot : c,
    m = r.elementContext,
    b = m === void 0 ? ie : m,
    l = r.altBoundary,
    w = l === void 0 ? !1 : l,
    d = r.padding,
    v = d === void 0 ? 0 : d,
    g = pt(typeof v != 'number' ? v : ft(v, le)),
    x = b === ie ? jt : ie,
    O = e.rects.popper,
    u = e.elements[w ? x : b],
    h = sr(Q(u) ? u : u.contextElement || Y(e.elements.popper), i, p, f),
    y = re(e.elements.reference),
    P = lt({reference: y, element: O, strategy: 'absolute', placement: n}),
    E = De(Object.assign({}, O, P)),
    A = b === ie ? E : y,
    R = {
      top: h.top - A.top + g.top,
      bottom: A.bottom - h.bottom + g.bottom,
      left: h.left - A.left + g.left,
      right: A.right - h.right + g.right,
    },
    D = e.modifiersData.offset
  if (b === ie && D) {
    var S = D[n]
    Object.keys(R).forEach(function (C) {
      var N = [L, k].indexOf(C) >= 0 ? 1 : -1,
        F = [$, k].indexOf(C) >= 0 ? 'y' : 'x'
      R[C] += S[F] * N
    })
  }
  return R
}
function pr(e, t) {
  t === void 0 && (t = {})
  var r = t,
    o = r.placement,
    n = r.boundary,
    a = r.rootBoundary,
    f = r.padding,
    s = r.flipVariations,
    i = r.allowedAutoPlacements,
    c = i === void 0 ? nt : i,
    p = oe(o),
    m = p
      ? s
        ? Ge
        : Ge.filter(function (w) {
            return oe(w) === p
          })
      : le,
    b = m.filter(function (w) {
      return c.indexOf(w) >= 0
    })
  b.length === 0 && (b = m)
  var l = b.reduce(function (w, d) {
    return (
      (w[d] = ce(e, {placement: d, boundary: n, rootBoundary: a, padding: f})[
        U(d)
      ]),
      w
    )
  }, {})
  return Object.keys(l).sort(function (w, d) {
    return l[w] - l[d]
  })
}
function fr(e) {
  if (U(e) === Te) return []
  var t = ye(e)
  return [Qe(e), t, Qe(t)]
}
function cr(e) {
  var t = e.state,
    r = e.options,
    o = e.name
  if (!t.modifiersData[o]._skip) {
    for (
      var n = r.mainAxis,
        a = n === void 0 ? !0 : n,
        f = r.altAxis,
        s = f === void 0 ? !0 : f,
        i = r.fallbackPlacements,
        c = r.padding,
        p = r.boundary,
        m = r.rootBoundary,
        b = r.altBoundary,
        l = r.flipVariations,
        w = l === void 0 ? !0 : l,
        d = r.allowedAutoPlacements,
        v = t.options.placement,
        g = U(v),
        x = g === v,
        O = i || (x || !w ? [ye(v)] : fr(v)),
        u = [v].concat(O).reduce(function (Z, X) {
          return Z.concat(
            U(X) === Te
              ? pr(t, {
                  placement: X,
                  boundary: p,
                  rootBoundary: m,
                  padding: c,
                  flipVariations: w,
                  allowedAutoPlacements: d,
                })
              : X
          )
        }, []),
        h = t.rects.reference,
        y = t.rects.popper,
        P = new Map(),
        E = !0,
        A = u[0],
        R = 0;
      R < u.length;
      R++
    ) {
      var D = u[R],
        S = U(D),
        C = oe(D) === ee,
        N = [$, k].indexOf(S) >= 0,
        F = N ? 'width' : 'height',
        j = ce(t, {
          placement: D,
          boundary: p,
          rootBoundary: m,
          altBoundary: b,
          padding: c,
        }),
        T = N ? (C ? L : B) : C ? k : $
      h[F] > y[F] && (T = ye(T))
      var I = ye(T),
        z = []
      if (
        (a && z.push(j[S] <= 0),
        s && z.push(j[T] <= 0, j[I] <= 0),
        z.every(function (Z) {
          return Z
        }))
      ) {
        ;(A = D), (E = !1)
        break
      }
      P.set(D, z)
    }
    if (E)
      for (
        var de = w ? 3 : 1,
          Oe = function (X) {
            var ae = u.find(function (me) {
              var G = P.get(me)
              if (G)
                return G.slice(0, X).every(function (Pe) {
                  return Pe
                })
            })
            if (ae) return (A = ae), 'break'
          },
          ne = de;
        ne > 0;
        ne--
      ) {
        var ve = Oe(ne)
        if (ve === 'break') break
      }
    t.placement !== A &&
      ((t.modifiersData[o]._skip = !0), (t.placement = A), (t.reset = !0))
  }
}
const lr = {
  name: 'flip',
  enabled: !0,
  phase: 'main',
  fn: cr,
  requiresIfExists: ['offset'],
  data: {_skip: !1},
}
function _e(e, t, r) {
  return (
    r === void 0 && (r = {x: 0, y: 0}),
    {
      top: e.top - t.height - r.y,
      right: e.right - t.width + r.x,
      bottom: e.bottom - t.height + r.y,
      left: e.left - t.width - r.x,
    }
  )
}
function et(e) {
  return [$, L, k, B].some(function (t) {
    return e[t] >= 0
  })
}
function ur(e) {
  var t = e.state,
    r = e.name,
    o = t.rects.reference,
    n = t.rects.popper,
    a = t.modifiersData.preventOverflow,
    f = ce(t, {elementContext: 'reference'}),
    s = ce(t, {altBoundary: !0}),
    i = _e(f, o),
    c = _e(s, n, a),
    p = et(i),
    m = et(c)
  ;(t.modifiersData[r] = {
    referenceClippingOffsets: i,
    popperEscapeOffsets: c,
    isReferenceHidden: p,
    hasPopperEscaped: m,
  }),
    (t.attributes.popper = Object.assign({}, t.attributes.popper, {
      'data-popper-reference-hidden': p,
      'data-popper-escaped': m,
    }))
}
const dr = {
  name: 'hide',
  enabled: !0,
  phase: 'main',
  requiresIfExists: ['preventOverflow'],
  fn: ur,
}
function vr(e, t, r) {
  var o = U(e),
    n = [B, $].indexOf(o) >= 0 ? -1 : 1,
    a = typeof r == 'function' ? r(Object.assign({}, t, {placement: e})) : r,
    f = a[0],
    s = a[1]
  return (
    (f = f || 0),
    (s = (s || 0) * n),
    [B, L].indexOf(o) >= 0 ? {x: s, y: f} : {x: f, y: s}
  )
}
function mr(e) {
  var t = e.state,
    r = e.options,
    o = e.name,
    n = r.offset,
    a = n === void 0 ? [0, 0] : n,
    f = nt.reduce(function (p, m) {
      return (p[m] = vr(m, t.rects, a)), p
    }, {}),
    s = f[t.placement],
    i = s.x,
    c = s.y
  t.modifiersData.popperOffsets != null &&
    ((t.modifiersData.popperOffsets.x += i),
    (t.modifiersData.popperOffsets.y += c)),
    (t.modifiersData[o] = f)
}
const hr = {
  name: 'offset',
  enabled: !0,
  phase: 'main',
  requires: ['popperOffsets'],
  fn: mr,
}
function gr(e) {
  var t = e.state,
    r = e.name
  t.modifiersData[r] = lt({
    reference: t.rects.reference,
    element: t.rects.popper,
    strategy: 'absolute',
    placement: t.placement,
  })
}
const yr = {name: 'popperOffsets', enabled: !0, phase: 'read', fn: gr, data: {}}
function br(e) {
  return e === 'x' ? 'y' : 'x'
}
function wr(e) {
  var t = e.state,
    r = e.options,
    o = e.name,
    n = r.mainAxis,
    a = n === void 0 ? !0 : n,
    f = r.altAxis,
    s = f === void 0 ? !1 : f,
    i = r.boundary,
    c = r.rootBoundary,
    p = r.altBoundary,
    m = r.padding,
    b = r.tether,
    l = b === void 0 ? !0 : b,
    w = r.tetherOffset,
    d = w === void 0 ? 0 : w,
    v = ce(t, {boundary: i, rootBoundary: c, padding: m, altBoundary: p}),
    g = U(t.placement),
    x = oe(t.placement),
    O = !x,
    u = Se(g),
    h = br(u),
    y = t.modifiersData.popperOffsets,
    P = t.rects.reference,
    E = t.rects.popper,
    A =
      typeof d == 'function'
        ? d(Object.assign({}, t.rects, {placement: t.placement}))
        : d,
    R =
      typeof A == 'number'
        ? {mainAxis: A, altAxis: A}
        : Object.assign({mainAxis: 0, altAxis: 0}, A),
    D = t.modifiersData.offset ? t.modifiersData.offset[t.placement] : null,
    S = {x: 0, y: 0}
  if (y) {
    if (a) {
      var C,
        N = u === 'y' ? $ : B,
        F = u === 'y' ? k : L,
        j = u === 'y' ? 'height' : 'width',
        T = y[u],
        I = T + v[N],
        z = T - v[F],
        de = l ? -E[j] / 2 : 0,
        Oe = x === ee ? P[j] : E[j],
        ne = x === ee ? -E[j] : -P[j],
        ve = t.elements.arrow,
        Z = l && ve ? Be(ve) : {width: 0, height: 0},
        X = t.modifiersData['arrow#persistent']
          ? t.modifiersData['arrow#persistent'].padding
          : st(),
        ae = X[N],
        me = X[F],
        G = se(0, P[j], Z[j]),
        Pe = O ? P[j] / 2 - de - G - ae - R.mainAxis : Oe - G - ae - R.mainAxis,
        ut = O
          ? -P[j] / 2 + de + G + me + R.mainAxis
          : ne + G + me + R.mainAxis,
        Ee = t.elements.arrow && ue(t.elements.arrow),
        dt = Ee ? (u === 'y' ? Ee.clientTop || 0 : Ee.clientLeft || 0) : 0,
        We = (C = D == null ? void 0 : D[u]) != null ? C : 0,
        vt = T + Pe - We - dt,
        mt = T + ut - We,
        He = se(l ? we(I, vt) : I, T, l ? K(z, mt) : z)
      ;(y[u] = He), (S[u] = He - T)
    }
    if (s) {
      var Ue,
        ht = u === 'x' ? $ : B,
        gt = u === 'x' ? k : L,
        J = y[h],
        he = h === 'y' ? 'height' : 'width',
        Ve = J + v[ht],
        Ne = J - v[gt],
        Re = [$, B].indexOf(g) !== -1,
        Fe = (Ue = D == null ? void 0 : D[h]) != null ? Ue : 0,
        qe = Re ? Ve : J - P[he] - E[he] - Fe + R.altAxis,
        Ie = Re ? J + P[he] + E[he] - Fe - R.altAxis : Ne,
        Xe = l && Re ? It(qe, J, Ie) : se(l ? qe : Ve, J, l ? Ie : Ne)
      ;(y[h] = Xe), (S[h] = Xe - J)
    }
    t.modifiersData[o] = S
  }
}
const xr = {
  name: 'preventOverflow',
  enabled: !0,
  phase: 'main',
  fn: wr,
  requiresIfExists: ['offset'],
}
function Or(e) {
  return {scrollLeft: e.scrollLeft, scrollTop: e.scrollTop}
}
function Pr(e) {
  return e === W(e) || !M(e) ? Me(e) : Or(e)
}
function Er(e) {
  var t = e.getBoundingClientRect(),
    r = te(t.width) / e.offsetWidth || 1,
    o = te(t.height) / e.offsetHeight || 1
  return r !== 1 || o !== 1
}
function Rr(e, t, r) {
  r === void 0 && (r = !1)
  var o = M(t),
    n = M(t) && Er(t),
    a = Y(t),
    f = re(e, n, r),
    s = {scrollLeft: 0, scrollTop: 0},
    i = {x: 0, y: 0}
  return (
    (o || (!o && !r)) &&
      ((V(t) !== 'body' || Le(a)) && (s = Pr(t)),
      M(t)
        ? ((i = re(t, !0)), (i.x += t.clientLeft), (i.y += t.clientTop))
        : a && (i.x = ke(a))),
    {
      x: f.left + s.scrollLeft - i.x,
      y: f.top + s.scrollTop - i.y,
      width: f.width,
      height: f.height,
    }
  )
}
function Ar(e) {
  var t = new Map(),
    r = new Set(),
    o = []
  e.forEach(function (a) {
    t.set(a.name, a)
  })
  function n(a) {
    r.add(a.name)
    var f = [].concat(a.requires || [], a.requiresIfExists || [])
    f.forEach(function (s) {
      if (!r.has(s)) {
        var i = t.get(s)
        i && n(i)
      }
    }),
      o.push(a)
  }
  return (
    e.forEach(function (a) {
      r.has(a.name) || n(a)
    }),
    o
  )
}
function Dr(e) {
  var t = Ar(e)
  return Ht.reduce(function (r, o) {
    return r.concat(
      t.filter(function (n) {
        return n.phase === o
      })
    )
  }, [])
}
function jr(e) {
  var t
  return function () {
    return (
      t ||
        (t = new Promise(function (r) {
          Promise.resolve().then(function () {
            ;(t = void 0), r(e())
          })
        })),
      t
    )
  }
}
function Cr(e) {
  var t = e.reduce(function (r, o) {
    var n = r[o.name]
    return (
      (r[o.name] = n
        ? Object.assign({}, n, o, {
            options: Object.assign({}, n.options, o.options),
            data: Object.assign({}, n.data, o.data),
          })
        : o),
      r
    )
  }, {})
  return Object.keys(t).map(function (r) {
    return t[r]
  })
}
var tt = {placement: 'bottom', modifiers: [], strategy: 'absolute'}
function rt() {
  for (var e = arguments.length, t = new Array(e), r = 0; r < e; r++)
    t[r] = arguments[r]
  return !t.some(function (o) {
    return !(o && typeof o.getBoundingClientRect == 'function')
  })
}
function Tr(e) {
  e === void 0 && (e = {})
  var t = e,
    r = t.defaultModifiers,
    o = r === void 0 ? [] : r,
    n = t.defaultOptions,
    a = n === void 0 ? tt : n
  return function (s, i, c) {
    c === void 0 && (c = a)
    var p = {
        placement: 'bottom',
        orderedModifiers: [],
        options: Object.assign({}, tt, a),
        modifiersData: {},
        elements: {reference: s, popper: i},
        attributes: {},
        styles: {},
      },
      m = [],
      b = !1,
      l = {
        state: p,
        setOptions: function (g) {
          var x = typeof g == 'function' ? g(p.options) : g
          d(),
            (p.options = Object.assign({}, a, p.options, x)),
            (p.scrollParents = {
              reference: Q(s)
                ? pe(s)
                : s.contextElement
                ? pe(s.contextElement)
                : [],
              popper: pe(i),
            })
          var O = Dr(Cr([].concat(o, p.options.modifiers)))
          return (
            (p.orderedModifiers = O.filter(function (u) {
              return u.enabled
            })),
            w(),
            l.update()
          )
        },
        forceUpdate: function () {
          if (!b) {
            var g = p.elements,
              x = g.reference,
              O = g.popper
            if (rt(x, O)) {
              ;(p.rects = {
                reference: Rr(x, ue(O), p.options.strategy === 'fixed'),
                popper: Be(O),
              }),
                (p.reset = !1),
                (p.placement = p.options.placement),
                p.orderedModifiers.forEach(function (R) {
                  return (p.modifiersData[R.name] = Object.assign({}, R.data))
                })
              for (var u = 0; u < p.orderedModifiers.length; u++) {
                if (p.reset === !0) {
                  ;(p.reset = !1), (u = -1)
                  continue
                }
                var h = p.orderedModifiers[u],
                  y = h.fn,
                  P = h.options,
                  E = P === void 0 ? {} : P,
                  A = h.name
                typeof y == 'function' &&
                  (p = y({state: p, options: E, name: A, instance: l}) || p)
              }
            }
          }
        },
        update: jr(function () {
          return new Promise(function (v) {
            l.forceUpdate(), v(p)
          })
        }),
        destroy: function () {
          d(), (b = !0)
        },
      }
    if (!rt(s, i)) return l
    l.setOptions(c).then(function (v) {
      !b && c.onFirstUpdate && c.onFirstUpdate(v)
    })
    function w() {
      p.orderedModifiers.forEach(function (v) {
        var g = v.name,
          x = v.options,
          O = x === void 0 ? {} : x,
          u = v.effect
        if (typeof u == 'function') {
          var h = u({state: p, name: g, instance: l, options: O}),
            y = function () {}
          m.push(h || y)
        }
      })
    }
    function d() {
      m.forEach(function (v) {
        return v()
      }),
        (m = [])
    }
    return l
  }
}
var $r = [er, yr, Zt, Nt, hr, lr, xr, Gt, dr],
  Br = Tr({defaultModifiers: $r})
function Sr(e) {
  return wt('MuiPopperUnstyled', e)
}
xt('MuiPopperUnstyled', ['root'])
const Mr = [
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
  kr = [
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
function Lr(e, t) {
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
function je(e) {
  return typeof e == 'function' ? e() : e
}
const Wr = () => Ot({root: ['root']}, Sr, {}),
  Hr = {},
  Ur = H.forwardRef(function (t, r) {
    var o
    const {
        anchorEl: n,
        children: a,
        component: f,
        direction: s,
        disablePortal: i,
        modifiers: c,
        open: p,
        ownerState: m,
        placement: b,
        popperOptions: l,
        popperRef: w,
        slotProps: d = {},
        slots: v = {},
        TransitionProps: g,
      } = t,
      x = Ce(t, Mr),
      O = H.useRef(null),
      u = Ye(O, r),
      h = H.useRef(null),
      y = Ye(h, w),
      P = H.useRef(y)
    ze(() => {
      P.current = y
    }, [y]),
      H.useImperativeHandle(w, () => h.current, [])
    const E = Lr(b, s),
      [A, R] = H.useState(E)
    H.useEffect(() => {
      h.current && h.current.forceUpdate()
    }),
      ze(() => {
        if (!n || !p) return
        const F = (I) => {
          R(I.placement)
        }
        je(n)
        let j = [
          {name: 'preventOverflow', options: {altBoundary: i}},
          {name: 'flip', options: {altBoundary: i}},
          {
            name: 'onUpdate',
            enabled: !0,
            phase: 'afterWrite',
            fn: ({state: I}) => {
              F(I)
            },
          },
        ]
        c != null && (j = j.concat(c)),
          l && l.modifiers != null && (j = j.concat(l.modifiers))
        const T = Br(je(n), O.current, _({placement: E}, l, {modifiers: j}))
        return (
          P.current(T),
          () => {
            T.destroy(), P.current(null)
          }
        )
      }, [n, i, c, p, l, E])
    const D = {placement: A}
    g !== null && (D.TransitionProps = g)
    const S = Wr(),
      C = (o = f ?? v.root) != null ? o : 'div',
      N = Rt({
        elementType: C,
        externalSlotProps: d.root,
        externalForwardedProps: x,
        additionalProps: {role: 'tooltip', ref: u},
        ownerState: _({}, t, m),
        className: S.root,
      })
    return be(C, _({}, N, {children: typeof a == 'function' ? a(D) : a}))
  }),
  Vr = H.forwardRef(function (t, r) {
    const {
        anchorEl: o,
        children: n,
        container: a,
        direction: f = 'ltr',
        disablePortal: s = !1,
        keepMounted: i = !1,
        modifiers: c,
        open: p,
        placement: m = 'bottom',
        popperOptions: b = Hr,
        popperRef: l,
        style: w,
        transition: d = !1,
      } = t,
      v = Ce(t, kr),
      [g, x] = H.useState(!0),
      O = () => {
        x(!1)
      },
      u = () => {
        x(!0)
      }
    if (!i && !p && (!d || g)) return null
    const h = a || (o ? Et(je(o)).body : void 0)
    return be(At, {
      disablePortal: s,
      container: h,
      children: be(
        Ur,
        _(
          {
            anchorEl: o,
            direction: f,
            disablePortal: s,
            modifiers: c,
            ref: r,
            open: d ? !g : p,
            placement: m,
            popperOptions: b,
            popperRef: l,
          },
          v,
          {
            style: _(
              {
                position: 'fixed',
                top: 0,
                left: 0,
                display: !p && i && (!d || g) ? 'none' : null,
              },
              w
            ),
            TransitionProps: d ? {in: p, onEnter: O, onExited: u} : null,
            children: n,
          }
        )
      ),
    })
  }),
  Nr = Vr,
  Fr = ['components', 'componentsProps', 'slots', 'slotProps'],
  qr = Pt(Nr, {
    name: 'MuiPopper',
    slot: 'Root',
    overridesResolver: (e, t) => t.root,
  })({}),
  Ir = H.forwardRef(function (t, r) {
    var o
    const n = yt(),
      a = bt({props: t, name: 'MuiPopper'}),
      {components: f, componentsProps: s, slots: i, slotProps: c} = a,
      p = Ce(a, Fr),
      m =
        (o = i == null ? void 0 : i.root) != null
          ? o
          : f == null
          ? void 0
          : f.Root
    return be(
      qr,
      _(
        {
          direction: n == null ? void 0 : n.direction,
          slots: {root: m},
          slotProps: c ?? s,
        },
        p,
        {ref: r}
      )
    )
  }),
  Qr = Ir
export {Qr as M, Br as c}
//# sourceMappingURL=Popper-852f71a7.js.map
