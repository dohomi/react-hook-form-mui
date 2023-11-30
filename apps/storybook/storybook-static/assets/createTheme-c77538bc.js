import {r as gt} from './index-f1f2c4b1.js'
var Qe = {exports: {}},
  ge = {}
/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var yt = gt,
  bt = Symbol.for('react.element'),
  xt = Symbol.for('react.fragment'),
  wt = Object.prototype.hasOwnProperty,
  $t = yt.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,
  kt = {key: !0, ref: !0, __self: !0, __source: !0}
function Ve(e, t, n) {
  var r,
    s = {},
    i = null,
    a = null
  n !== void 0 && (i = '' + n),
    t.key !== void 0 && (i = '' + t.key),
    t.ref !== void 0 && (a = t.ref)
  for (r in t) wt.call(t, r) && !kt.hasOwnProperty(r) && (s[r] = t[r])
  if (e && e.defaultProps)
    for (r in ((t = e.defaultProps), t)) s[r] === void 0 && (s[r] = t[r])
  return {$$typeof: bt, type: e, key: i, ref: a, props: s, _owner: $t.current}
}
ge.Fragment = xt
ge.jsx = Ve
ge.jsxs = Ve
Qe.exports = ge
var _n = Qe.exports
const Ot = {black: '#000', white: '#fff'},
  se = Ot,
  vt = {
    50: '#ffebee',
    100: '#ffcdd2',
    200: '#ef9a9a',
    300: '#e57373',
    400: '#ef5350',
    500: '#f44336',
    600: '#e53935',
    700: '#d32f2f',
    800: '#c62828',
    900: '#b71c1c',
    A100: '#ff8a80',
    A200: '#ff5252',
    A400: '#ff1744',
    A700: '#d50000',
  },
  H = vt,
  At = {
    50: '#f3e5f5',
    100: '#e1bee7',
    200: '#ce93d8',
    300: '#ba68c8',
    400: '#ab47bc',
    500: '#9c27b0',
    600: '#8e24aa',
    700: '#7b1fa2',
    800: '#6a1b9a',
    900: '#4a148c',
    A100: '#ea80fc',
    A200: '#e040fb',
    A400: '#d500f9',
    A700: '#aa00ff',
  },
  N = At,
  St = {
    50: '#e3f2fd',
    100: '#bbdefb',
    200: '#90caf9',
    300: '#64b5f6',
    400: '#42a5f5',
    500: '#2196f3',
    600: '#1e88e5',
    700: '#1976d2',
    800: '#1565c0',
    900: '#0d47a1',
    A100: '#82b1ff',
    A200: '#448aff',
    A400: '#2979ff',
    A700: '#2962ff',
  },
  U = St,
  Tt = {
    50: '#e1f5fe',
    100: '#b3e5fc',
    200: '#81d4fa',
    300: '#4fc3f7',
    400: '#29b6f6',
    500: '#03a9f4',
    600: '#039be5',
    700: '#0288d1',
    800: '#0277bd',
    900: '#01579b',
    A100: '#80d8ff',
    A200: '#40c4ff',
    A400: '#00b0ff',
    A700: '#0091ea',
  },
  Y = Tt,
  Ct = {
    50: '#e8f5e9',
    100: '#c8e6c9',
    200: '#a5d6a7',
    300: '#81c784',
    400: '#66bb6a',
    500: '#4caf50',
    600: '#43a047',
    700: '#388e3c',
    800: '#2e7d32',
    900: '#1b5e20',
    A100: '#b9f6ca',
    A200: '#69f0ae',
    A400: '#00e676',
    A700: '#00c853',
  },
  X = Ct,
  Rt = {
    50: '#fff3e0',
    100: '#ffe0b2',
    200: '#ffcc80',
    300: '#ffb74d',
    400: '#ffa726',
    500: '#ff9800',
    600: '#fb8c00',
    700: '#f57c00',
    800: '#ef6c00',
    900: '#e65100',
    A100: '#ffd180',
    A200: '#ffab40',
    A400: '#ff9100',
    A700: '#ff6d00',
  },
  te = Rt,
  Pt = {
    50: '#fafafa',
    100: '#f5f5f5',
    200: '#eeeeee',
    300: '#e0e0e0',
    400: '#bdbdbd',
    500: '#9e9e9e',
    600: '#757575',
    700: '#616161',
    800: '#424242',
    900: '#212121',
    A100: '#f5f5f5',
    A200: '#eeeeee',
    A400: '#bdbdbd',
    A700: '#616161',
  },
  _t = Pt
function Re() {
  return (
    (Re = Object.assign
      ? Object.assign.bind()
      : function (e) {
          for (var t = 1; t < arguments.length; t++) {
            var n = arguments[t]
            for (var r in n)
              Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r])
          }
          return e
        }),
    Re.apply(this, arguments)
  )
}
function q(e) {
  return e !== null && typeof e == 'object' && e.constructor === Object
}
function et(e) {
  if (!q(e)) return e
  const t = {}
  return (
    Object.keys(e).forEach((n) => {
      t[n] = et(e[n])
    }),
    t
  )
}
function W(e, t, n = {clone: !0}) {
  const r = n.clone ? Re({}, e) : e
  return (
    q(e) &&
      q(t) &&
      Object.keys(t).forEach((s) => {
        s !== '__proto__' &&
          (q(t[s]) && s in e && q(e[s])
            ? (r[s] = W(e[s], t[s], n))
            : n.clone
            ? (r[s] = q(t[s]) ? et(t[s]) : t[s])
            : (r[s] = t[s]))
      }),
    r
  )
}
function Q(e) {
  let t = 'https://mui.com/production-error/?code=' + e
  for (let n = 1; n < arguments.length; n += 1)
    t += '&args[]=' + encodeURIComponent(arguments[n])
  return 'Minified MUI error #' + e + '; visit ' + t + ' for the full message.'
}
function tt(e) {
  if (typeof e != 'string') throw new Error(Q(7))
  return e.charAt(0).toUpperCase() + e.slice(1)
}
function B() {
  return (
    (B = Object.assign
      ? Object.assign.bind()
      : function (e) {
          for (var t = 1; t < arguments.length; t++) {
            var n = arguments[t]
            for (var r in n)
              Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r])
          }
          return e
        }),
    B.apply(this, arguments)
  )
}
function ye(e, t) {
  if (e == null) return {}
  var n = {},
    r = Object.keys(e),
    s,
    i
  for (i = 0; i < r.length; i++)
    (s = r[i]), !(t.indexOf(s) >= 0) && (n[s] = e[s])
  return n
}
function Bt(e) {
  if (e.sheet) return e.sheet
  for (var t = 0; t < document.styleSheets.length; t++)
    if (document.styleSheets[t].ownerNode === e) return document.styleSheets[t]
}
function jt(e) {
  var t = document.createElement('style')
  return (
    t.setAttribute('data-emotion', e.key),
    e.nonce !== void 0 && t.setAttribute('nonce', e.nonce),
    t.appendChild(document.createTextNode('')),
    t.setAttribute('data-s', ''),
    t
  )
}
var Et = (function () {
    function e(n) {
      var r = this
      ;(this._insertTag = function (s) {
        var i
        r.tags.length === 0
          ? r.insertionPoint
            ? (i = r.insertionPoint.nextSibling)
            : r.prepend
            ? (i = r.container.firstChild)
            : (i = r.before)
          : (i = r.tags[r.tags.length - 1].nextSibling),
          r.container.insertBefore(s, i),
          r.tags.push(s)
      }),
        (this.isSpeedy = n.speedy === void 0 ? !0 : n.speedy),
        (this.tags = []),
        (this.ctr = 0),
        (this.nonce = n.nonce),
        (this.key = n.key),
        (this.container = n.container),
        (this.prepend = n.prepend),
        (this.insertionPoint = n.insertionPoint),
        (this.before = null)
    }
    var t = e.prototype
    return (
      (t.hydrate = function (r) {
        r.forEach(this._insertTag)
      }),
      (t.insert = function (r) {
        this.ctr % (this.isSpeedy ? 65e3 : 1) === 0 && this._insertTag(jt(this))
        var s = this.tags[this.tags.length - 1]
        if (this.isSpeedy) {
          var i = Bt(s)
          try {
            i.insertRule(r, i.cssRules.length)
          } catch {}
        } else s.appendChild(document.createTextNode(r))
        this.ctr++
      }),
      (t.flush = function () {
        this.tags.forEach(function (r) {
          return r.parentNode && r.parentNode.removeChild(r)
        }),
          (this.tags = []),
          (this.ctr = 0)
      }),
      e
    )
  })(),
  C = '-ms-',
  he = '-moz-',
  m = '-webkit-',
  rt = 'comm',
  Be = 'rule',
  je = 'decl',
  Kt = '@import',
  nt = '@keyframes',
  It = '@layer',
  Wt = Math.abs,
  be = String.fromCharCode,
  Mt = Object.assign
function zt(e, t) {
  return T(e, 0) ^ 45
    ? (((((((t << 2) ^ T(e, 0)) << 2) ^ T(e, 1)) << 2) ^ T(e, 2)) << 2) ^
        T(e, 3)
    : 0
}
function st(e) {
  return e.trim()
}
function Lt(e, t) {
  return (e = t.exec(e)) ? e[0] : e
}
function g(e, t, n) {
  return e.replace(t, n)
}
function Pe(e, t) {
  return e.indexOf(t)
}
function T(e, t) {
  return e.charCodeAt(t) | 0
}
function ie(e, t, n) {
  return e.slice(t, n)
}
function K(e) {
  return e.length
}
function Ee(e) {
  return e.length
}
function ue(e, t) {
  return t.push(e), e
}
function Ft(e, t) {
  return e.map(t).join('')
}
var xe = 1,
  V = 1,
  it = 0,
  P = 0,
  S = 0,
  ee = ''
function we(e, t, n, r, s, i, a) {
  return {
    value: e,
    root: t,
    parent: n,
    type: r,
    props: s,
    children: i,
    line: xe,
    column: V,
    length: a,
    return: '',
  }
}
function re(e, t) {
  return Mt(we('', null, null, '', null, null, 0), e, {length: -e.length}, t)
}
function Dt() {
  return S
}
function Gt() {
  return (S = P > 0 ? T(ee, --P) : 0), V--, S === 10 && ((V = 1), xe--), S
}
function j() {
  return (S = P < it ? T(ee, P++) : 0), V++, S === 10 && ((V = 1), xe++), S
}
function M() {
  return T(ee, P)
}
function de() {
  return P
}
function oe(e, t) {
  return ie(ee, e, t)
}
function ae(e) {
  switch (e) {
    case 0:
    case 9:
    case 10:
    case 13:
    case 32:
      return 5
    case 33:
    case 43:
    case 44:
    case 47:
    case 62:
    case 64:
    case 126:
    case 59:
    case 123:
    case 125:
      return 4
    case 58:
      return 3
    case 34:
    case 39:
    case 40:
    case 91:
      return 2
    case 41:
    case 93:
      return 1
  }
  return 0
}
function at(e) {
  return (xe = V = 1), (it = K((ee = e))), (P = 0), []
}
function ot(e) {
  return (ee = ''), e
}
function le(e) {
  return st(oe(P - 1, _e(e === 91 ? e + 2 : e === 40 ? e + 1 : e)))
}
function Ht(e) {
  for (; (S = M()) && S < 33; ) j()
  return ae(e) > 2 || ae(S) > 3 ? '' : ' '
}
function Nt(e, t) {
  for (
    ;
    --t &&
    j() &&
    !(S < 48 || S > 102 || (S > 57 && S < 65) || (S > 70 && S < 97));

  );
  return oe(e, de() + (t < 6 && M() == 32 && j() == 32))
}
function _e(e) {
  for (; j(); )
    switch (S) {
      case e:
        return P
      case 34:
      case 39:
        e !== 34 && e !== 39 && _e(S)
        break
      case 40:
        e === 41 && _e(e)
        break
      case 92:
        j()
        break
    }
  return P
}
function Ut(e, t) {
  for (; j() && e + S !== 47 + 10; ) if (e + S === 42 + 42 && M() === 47) break
  return '/*' + oe(t, P - 1) + '*' + be(e === 47 ? e : j())
}
function Yt(e) {
  for (; !ae(M()); ) j()
  return oe(e, P)
}
function Xt(e) {
  return ot(pe('', null, null, null, [''], (e = at(e)), 0, [0], e))
}
function pe(e, t, n, r, s, i, a, o, u) {
  for (
    var d = 0,
      p = 0,
      l = a,
      f = 0,
      b = 0,
      h = 0,
      c = 1,
      $ = 1,
      x = 1,
      A = 0,
      R = '',
      G = s,
      z = i,
      E = r,
      w = R;
    $;

  )
    switch (((h = A), (A = j()))) {
      case 40:
        if (h != 108 && T(w, l - 1) == 58) {
          Pe((w += g(le(A), '&', '&\f')), '&\f') != -1 && (x = -1)
          break
        }
      case 34:
      case 39:
      case 91:
        w += le(A)
        break
      case 9:
      case 10:
      case 13:
      case 32:
        w += Ht(h)
        break
      case 92:
        w += Nt(de() - 1, 7)
        continue
      case 47:
        switch (M()) {
          case 42:
          case 47:
            ue(qt(Ut(j(), de()), t, n), u)
            break
          default:
            w += '/'
        }
        break
      case 123 * c:
        o[d++] = K(w) * x
      case 125 * c:
      case 59:
      case 0:
        switch (A) {
          case 0:
          case 125:
            $ = 0
          case 59 + p:
            x == -1 && (w = g(w, /\f/g, '')),
              b > 0 &&
                K(w) - l &&
                ue(
                  b > 32
                    ? De(w + ';', r, n, l - 1)
                    : De(g(w, ' ', '') + ';', r, n, l - 2),
                  u
                )
            break
          case 59:
            w += ';'
          default:
            if (
              (ue((E = Fe(w, t, n, d, p, s, o, R, (G = []), (z = []), l)), i),
              A === 123)
            )
              if (p === 0) pe(w, t, E, E, G, i, l, o, z)
              else
                switch (f === 99 && T(w, 3) === 110 ? 100 : f) {
                  case 100:
                  case 108:
                  case 109:
                  case 115:
                    pe(
                      e,
                      E,
                      E,
                      r && ue(Fe(e, E, E, 0, 0, s, o, R, s, (G = []), l), z),
                      s,
                      z,
                      l,
                      o,
                      r ? G : z
                    )
                    break
                  default:
                    pe(w, E, E, E, [''], z, 0, o, z)
                }
        }
        ;(d = p = b = 0), (c = x = 1), (R = w = ''), (l = a)
        break
      case 58:
        ;(l = 1 + K(w)), (b = h)
      default:
        if (c < 1) {
          if (A == 123) --c
          else if (A == 125 && c++ == 0 && Gt() == 125) continue
        }
        switch (((w += be(A)), A * c)) {
          case 38:
            x = p > 0 ? 1 : ((w += '\f'), -1)
            break
          case 44:
            ;(o[d++] = (K(w) - 1) * x), (x = 1)
            break
          case 64:
            M() === 45 && (w += le(j())),
              (f = M()),
              (p = l = K((R = w += Yt(de())))),
              A++
            break
          case 45:
            h === 45 && K(w) == 2 && (c = 0)
        }
    }
  return i
}
function Fe(e, t, n, r, s, i, a, o, u, d, p) {
  for (
    var l = s - 1, f = s === 0 ? i : [''], b = Ee(f), h = 0, c = 0, $ = 0;
    h < r;
    ++h
  )
    for (var x = 0, A = ie(e, l + 1, (l = Wt((c = a[h])))), R = e; x < b; ++x)
      (R = st(c > 0 ? f[x] + ' ' + A : g(A, /&\f/g, f[x]))) && (u[$++] = R)
  return we(e, t, n, s === 0 ? Be : o, u, d, p)
}
function qt(e, t, n) {
  return we(e, t, n, rt, be(Dt()), ie(e, 2, -2), 0)
}
function De(e, t, n, r) {
  return we(e, t, n, je, ie(e, 0, r), ie(e, r + 1, -1), r)
}
function J(e, t) {
  for (var n = '', r = Ee(e), s = 0; s < r; s++) n += t(e[s], s, e, t) || ''
  return n
}
function Jt(e, t, n, r) {
  switch (e.type) {
    case It:
      if (e.children.length) break
    case Kt:
    case je:
      return (e.return = e.return || e.value)
    case rt:
      return ''
    case nt:
      return (e.return = e.value + '{' + J(e.children, r) + '}')
    case Be:
      e.value = e.props.join(',')
  }
  return K((n = J(e.children, r))) ? (e.return = e.value + '{' + n + '}') : ''
}
function Zt(e) {
  var t = Ee(e)
  return function (n, r, s, i) {
    for (var a = '', o = 0; o < t; o++) a += e[o](n, r, s, i) || ''
    return a
  }
}
function Qt(e) {
  return function (t) {
    t.root || ((t = t.return) && e(t))
  }
}
var Vt = function (t, n, r) {
    for (
      var s = 0, i = 0;
      (s = i), (i = M()), s === 38 && i === 12 && (n[r] = 1), !ae(i);

    )
      j()
    return oe(t, P)
  },
  er = function (t, n) {
    var r = -1,
      s = 44
    do
      switch (ae(s)) {
        case 0:
          s === 38 && M() === 12 && (n[r] = 1), (t[r] += Vt(P - 1, n, r))
          break
        case 2:
          t[r] += le(s)
          break
        case 4:
          if (s === 44) {
            ;(t[++r] = M() === 58 ? '&\f' : ''), (n[r] = t[r].length)
            break
          }
        default:
          t[r] += be(s)
      }
    while ((s = j()))
    return t
  },
  tr = function (t, n) {
    return ot(er(at(t), n))
  },
  Ge = new WeakMap(),
  rr = function (t) {
    if (!(t.type !== 'rule' || !t.parent || t.length < 1)) {
      for (
        var n = t.value,
          r = t.parent,
          s = t.column === r.column && t.line === r.line;
        r.type !== 'rule';

      )
        if (((r = r.parent), !r)) return
      if (
        !(t.props.length === 1 && n.charCodeAt(0) !== 58 && !Ge.get(r)) &&
        !s
      ) {
        Ge.set(t, !0)
        for (
          var i = [], a = tr(n, i), o = r.props, u = 0, d = 0;
          u < a.length;
          u++
        )
          for (var p = 0; p < o.length; p++, d++)
            t.props[d] = i[u] ? a[u].replace(/&\f/g, o[p]) : o[p] + ' ' + a[u]
      }
    }
  },
  nr = function (t) {
    if (t.type === 'decl') {
      var n = t.value
      n.charCodeAt(0) === 108 &&
        n.charCodeAt(2) === 98 &&
        ((t.return = ''), (t.value = ''))
    }
  }
function ct(e, t) {
  switch (zt(e, t)) {
    case 5103:
      return m + 'print-' + e + e
    case 5737:
    case 4201:
    case 3177:
    case 3433:
    case 1641:
    case 4457:
    case 2921:
    case 5572:
    case 6356:
    case 5844:
    case 3191:
    case 6645:
    case 3005:
    case 6391:
    case 5879:
    case 5623:
    case 6135:
    case 4599:
    case 4855:
    case 4215:
    case 6389:
    case 5109:
    case 5365:
    case 5621:
    case 3829:
      return m + e + e
    case 5349:
    case 4246:
    case 4810:
    case 6968:
    case 2756:
      return m + e + he + e + C + e + e
    case 6828:
    case 4268:
      return m + e + C + e + e
    case 6165:
      return m + e + C + 'flex-' + e + e
    case 5187:
      return (
        m + e + g(e, /(\w+).+(:[^]+)/, m + 'box-$1$2' + C + 'flex-$1$2') + e
      )
    case 5443:
      return m + e + C + 'flex-item-' + g(e, /flex-|-self/, '') + e
    case 4675:
      return (
        m + e + C + 'flex-line-pack' + g(e, /align-content|flex-|-self/, '') + e
      )
    case 5548:
      return m + e + C + g(e, 'shrink', 'negative') + e
    case 5292:
      return m + e + C + g(e, 'basis', 'preferred-size') + e
    case 6060:
      return (
        m +
        'box-' +
        g(e, '-grow', '') +
        m +
        e +
        C +
        g(e, 'grow', 'positive') +
        e
      )
    case 4554:
      return m + g(e, /([^-])(transform)/g, '$1' + m + '$2') + e
    case 6187:
      return (
        g(g(g(e, /(zoom-|grab)/, m + '$1'), /(image-set)/, m + '$1'), e, '') + e
      )
    case 5495:
    case 3959:
      return g(e, /(image-set\([^]*)/, m + '$1$`$1')
    case 4968:
      return (
        g(
          g(e, /(.+:)(flex-)?(.*)/, m + 'box-pack:$3' + C + 'flex-pack:$3'),
          /s.+-b[^;]+/,
          'justify'
        ) +
        m +
        e +
        e
      )
    case 4095:
    case 3583:
    case 4068:
    case 2532:
      return g(e, /(.+)-inline(.+)/, m + '$1$2') + e
    case 8116:
    case 7059:
    case 5753:
    case 5535:
    case 5445:
    case 5701:
    case 4933:
    case 4677:
    case 5533:
    case 5789:
    case 5021:
    case 4765:
      if (K(e) - 1 - t > 6)
        switch (T(e, t + 1)) {
          case 109:
            if (T(e, t + 4) !== 45) break
          case 102:
            return (
              g(
                e,
                /(.+:)(.+)-([^]+)/,
                '$1' +
                  m +
                  '$2-$3$1' +
                  he +
                  (T(e, t + 3) == 108 ? '$3' : '$2-$3')
              ) + e
            )
          case 115:
            return ~Pe(e, 'stretch')
              ? ct(g(e, 'stretch', 'fill-available'), t) + e
              : e
        }
      break
    case 4949:
      if (T(e, t + 1) !== 115) break
    case 6444:
      switch (T(e, K(e) - 3 - (~Pe(e, '!important') && 10))) {
        case 107:
          return g(e, ':', ':' + m) + e
        case 101:
          return (
            g(
              e,
              /(.+:)([^;!]+)(;|!.+)?/,
              '$1' +
                m +
                (T(e, 14) === 45 ? 'inline-' : '') +
                'box$3$1' +
                m +
                '$2$3$1' +
                C +
                '$2box$3'
            ) + e
          )
      }
      break
    case 5936:
      switch (T(e, t + 11)) {
        case 114:
          return m + e + C + g(e, /[svh]\w+-[tblr]{2}/, 'tb') + e
        case 108:
          return m + e + C + g(e, /[svh]\w+-[tblr]{2}/, 'tb-rl') + e
        case 45:
          return m + e + C + g(e, /[svh]\w+-[tblr]{2}/, 'lr') + e
      }
      return m + e + C + e + e
  }
  return e
}
var sr = function (t, n, r, s) {
    if (t.length > -1 && !t.return)
      switch (t.type) {
        case je:
          t.return = ct(t.value, t.length)
          break
        case nt:
          return J([re(t, {value: g(t.value, '@', '@' + m)})], s)
        case Be:
          if (t.length)
            return Ft(t.props, function (i) {
              switch (Lt(i, /(::plac\w+|:read-\w+)/)) {
                case ':read-only':
                case ':read-write':
                  return J(
                    [re(t, {props: [g(i, /:(read-\w+)/, ':' + he + '$1')]})],
                    s
                  )
                case '::placeholder':
                  return J(
                    [
                      re(t, {
                        props: [g(i, /:(plac\w+)/, ':' + m + 'input-$1')],
                      }),
                      re(t, {props: [g(i, /:(plac\w+)/, ':' + he + '$1')]}),
                      re(t, {props: [g(i, /:(plac\w+)/, C + 'input-$1')]}),
                    ],
                    s
                  )
              }
              return ''
            })
      }
  },
  ir = [sr],
  Bn = function (t) {
    var n = t.key
    if (n === 'css') {
      var r = document.querySelectorAll('style[data-emotion]:not([data-s])')
      Array.prototype.forEach.call(r, function (c) {
        var $ = c.getAttribute('data-emotion')
        $.indexOf(' ') !== -1 &&
          (document.head.appendChild(c), c.setAttribute('data-s', ''))
      })
    }
    var s = t.stylisPlugins || ir,
      i = {},
      a,
      o = []
    ;(a = t.container || document.head),
      Array.prototype.forEach.call(
        document.querySelectorAll('style[data-emotion^="' + n + ' "]'),
        function (c) {
          for (
            var $ = c.getAttribute('data-emotion').split(' '), x = 1;
            x < $.length;
            x++
          )
            i[$[x]] = !0
          o.push(c)
        }
      )
    var u,
      d = [rr, nr]
    {
      var p,
        l = [
          Jt,
          Qt(function (c) {
            p.insert(c)
          }),
        ],
        f = Zt(d.concat(s, l)),
        b = function ($) {
          return J(Xt($), f)
        }
      u = function ($, x, A, R) {
        ;(p = A),
          b($ ? $ + '{' + x.styles + '}' : x.styles),
          R && (h.inserted[x.name] = !0)
      }
    }
    var h = {
      key: n,
      sheet: new Et({
        key: n,
        container: a,
        nonce: t.nonce,
        speedy: t.speedy,
        prepend: t.prepend,
        insertionPoint: t.insertionPoint,
      }),
      nonce: t.nonce,
      inserted: i,
      registered: {},
      insert: u,
    }
    return h.sheet.hydrate(o), h
  }
function F() {
  return (
    (F = Object.assign
      ? Object.assign.bind()
      : function (e) {
          for (var t = 1; t < arguments.length; t++) {
            var n = arguments[t]
            for (var r in n)
              Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r])
          }
          return e
        }),
    F.apply(this, arguments)
  )
}
function ft(e, t) {
  if (e == null) return {}
  var n = {},
    r = Object.keys(e),
    s,
    i
  for (i = 0; i < r.length; i++)
    (s = r[i]), !(t.indexOf(s) >= 0) && (n[s] = e[s])
  return n
}
const ar = ['values', 'unit', 'step'],
  or = (e) => {
    const t = Object.keys(e).map((n) => ({key: n, val: e[n]})) || []
    return (
      t.sort((n, r) => n.val - r.val),
      t.reduce((n, r) => F({}, n, {[r.key]: r.val}), {})
    )
  }
function cr(e) {
  const {
      values: t = {xs: 0, sm: 600, md: 900, lg: 1200, xl: 1536},
      unit: n = 'px',
      step: r = 5,
    } = e,
    s = ft(e, ar),
    i = or(t),
    a = Object.keys(i)
  function o(f) {
    return `@media (min-width:${typeof t[f] == 'number' ? t[f] : f}${n})`
  }
  function u(f) {
    return `@media (max-width:${
      (typeof t[f] == 'number' ? t[f] : f) - r / 100
    }${n})`
  }
  function d(f, b) {
    const h = a.indexOf(b)
    return `@media (min-width:${
      typeof t[f] == 'number' ? t[f] : f
    }${n}) and (max-width:${
      (h !== -1 && typeof t[a[h]] == 'number' ? t[a[h]] : b) - r / 100
    }${n})`
  }
  function p(f) {
    return a.indexOf(f) + 1 < a.length ? d(f, a[a.indexOf(f) + 1]) : o(f)
  }
  function l(f) {
    const b = a.indexOf(f)
    return b === 0
      ? o(a[1])
      : b === a.length - 1
      ? u(a[b])
      : d(f, a[a.indexOf(f) + 1]).replace('@media', '@media not all and')
  }
  return F(
    {keys: a, values: i, up: o, down: u, between: d, only: p, not: l, unit: n},
    s
  )
}
const fr = {borderRadius: 4},
  ur = fr
function ne(e, t) {
  return t ? W(e, t, {clone: !1}) : e
}
const Ke = {xs: 0, sm: 600, md: 900, lg: 1200, xl: 1536},
  He = {
    keys: ['xs', 'sm', 'md', 'lg', 'xl'],
    up: (e) => `@media (min-width:${Ke[e]}px)`,
  }
function L(e, t, n) {
  const r = e.theme || {}
  if (Array.isArray(t)) {
    const i = r.breakpoints || He
    return t.reduce((a, o, u) => ((a[i.up(i.keys[u])] = n(t[u])), a), {})
  }
  if (typeof t == 'object') {
    const i = r.breakpoints || He
    return Object.keys(t).reduce((a, o) => {
      if (Object.keys(i.values || Ke).indexOf(o) !== -1) {
        const u = i.up(o)
        a[u] = n(t[o], o)
      } else {
        const u = o
        a[u] = t[u]
      }
      return a
    }, {})
  }
  return n(t)
}
function ut(e = {}) {
  var t
  return (
    ((t = e.keys) == null
      ? void 0
      : t.reduce((r, s) => {
          const i = e.up(s)
          return (r[i] = {}), r
        }, {})) || {}
  )
}
function dt(e, t) {
  return e.reduce((n, r) => {
    const s = n[r]
    return (!s || Object.keys(s).length === 0) && delete n[r], n
  }, t)
}
function jn(e, ...t) {
  const n = ut(e),
    r = [n, ...t].reduce((s, i) => W(s, i), {})
  return dt(Object.keys(n), r)
}
function dr(e, t) {
  if (typeof e != 'object') return {}
  const n = {},
    r = Object.keys(t)
  return (
    Array.isArray(e)
      ? r.forEach((s, i) => {
          i < e.length && (n[s] = !0)
        })
      : r.forEach((s) => {
          e[s] != null && (n[s] = !0)
        }),
    n
  )
}
function En({values: e, breakpoints: t, base: n}) {
  const r = n || dr(e, t),
    s = Object.keys(r)
  if (s.length === 0) return e
  let i
  return s.reduce(
    (a, o, u) => (
      Array.isArray(e)
        ? ((a[o] = e[u] != null ? e[u] : e[i]), (i = u))
        : typeof e == 'object'
        ? ((a[o] = e[o] != null ? e[o] : e[i]), (i = o))
        : (a[o] = e),
      a
    ),
    {}
  )
}
function $e(e, t, n = !0) {
  if (!t || typeof t != 'string') return null
  if (e && e.vars && n) {
    const r = `vars.${t}`
      .split('.')
      .reduce((s, i) => (s && s[i] ? s[i] : null), e)
    if (r != null) return r
  }
  return t.split('.').reduce((r, s) => (r && r[s] != null ? r[s] : null), e)
}
function me(e, t, n, r = n) {
  let s
  return (
    typeof e == 'function'
      ? (s = e(n))
      : Array.isArray(e)
      ? (s = e[n] || r)
      : (s = $e(e, n) || r),
    t && (s = t(s, r, e)),
    s
  )
}
function y(e) {
  const {prop: t, cssProperty: n = e.prop, themeKey: r, transform: s} = e,
    i = (a) => {
      if (a[t] == null) return null
      const o = a[t],
        u = a.theme,
        d = $e(u, r) || {}
      return L(a, o, (l) => {
        let f = me(d, s, l)
        return (
          l === f &&
            typeof l == 'string' &&
            (f = me(d, s, `${t}${l === 'default' ? '' : tt(l)}`, l)),
          n === !1 ? f : {[n]: f}
        )
      })
    }
  return (i.propTypes = {}), (i.filterProps = [t]), i
}
function lr(e) {
  const t = {}
  return (n) => (t[n] === void 0 && (t[n] = e(n)), t[n])
}
const pr = {m: 'margin', p: 'padding'},
  hr = {
    t: 'Top',
    r: 'Right',
    b: 'Bottom',
    l: 'Left',
    x: ['Left', 'Right'],
    y: ['Top', 'Bottom'],
  },
  Ne = {marginX: 'mx', marginY: 'my', paddingX: 'px', paddingY: 'py'},
  mr = lr((e) => {
    if (e.length > 2)
      if (Ne[e]) e = Ne[e]
      else return [e]
    const [t, n] = e.split(''),
      r = pr[t],
      s = hr[n] || ''
    return Array.isArray(s) ? s.map((i) => r + i) : [r + s]
  }),
  Ie = [
    'm',
    'mt',
    'mr',
    'mb',
    'ml',
    'mx',
    'my',
    'margin',
    'marginTop',
    'marginRight',
    'marginBottom',
    'marginLeft',
    'marginX',
    'marginY',
    'marginInline',
    'marginInlineStart',
    'marginInlineEnd',
    'marginBlock',
    'marginBlockStart',
    'marginBlockEnd',
  ],
  We = [
    'p',
    'pt',
    'pr',
    'pb',
    'pl',
    'px',
    'py',
    'padding',
    'paddingTop',
    'paddingRight',
    'paddingBottom',
    'paddingLeft',
    'paddingX',
    'paddingY',
    'paddingInline',
    'paddingInlineStart',
    'paddingInlineEnd',
    'paddingBlock',
    'paddingBlockStart',
    'paddingBlockEnd',
  ]
;[...Ie, ...We]
function ce(e, t, n, r) {
  var s
  const i = (s = $e(e, t, !1)) != null ? s : n
  return typeof i == 'number'
    ? (a) => (typeof a == 'string' ? a : i * a)
    : Array.isArray(i)
    ? (a) => (typeof a == 'string' ? a : i[a])
    : typeof i == 'function'
    ? i
    : () => {}
}
function lt(e) {
  return ce(e, 'spacing', 8)
}
function fe(e, t) {
  if (typeof t == 'string' || t == null) return t
  const n = Math.abs(t),
    r = e(n)
  return t >= 0 ? r : typeof r == 'number' ? -r : `-${r}`
}
function gr(e, t) {
  return (n) => e.reduce((r, s) => ((r[s] = fe(t, n)), r), {})
}
function yr(e, t, n, r) {
  if (t.indexOf(n) === -1) return null
  const s = mr(n),
    i = gr(s, r),
    a = e[n]
  return L(e, a, i)
}
function pt(e, t) {
  const n = lt(e.theme)
  return Object.keys(e)
    .map((r) => yr(e, t, r, n))
    .reduce(ne, {})
}
function O(e) {
  return pt(e, Ie)
}
O.propTypes = {}
O.filterProps = Ie
function v(e) {
  return pt(e, We)
}
v.propTypes = {}
v.filterProps = We
function br(e = 8) {
  if (e.mui) return e
  const t = lt({spacing: e}),
    n = (...r) =>
      (r.length === 0 ? [1] : r)
        .map((i) => {
          const a = t(i)
          return typeof a == 'number' ? `${a}px` : a
        })
        .join(' ')
  return (n.mui = !0), n
}
function ke(...e) {
  const t = e.reduce(
      (r, s) => (
        s.filterProps.forEach((i) => {
          r[i] = s
        }),
        r
      ),
      {}
    ),
    n = (r) => Object.keys(r).reduce((s, i) => (t[i] ? ne(s, t[i](r)) : s), {})
  return (
    (n.propTypes = {}),
    (n.filterProps = e.reduce((r, s) => r.concat(s.filterProps), [])),
    n
  )
}
function I(e) {
  return typeof e != 'number' ? e : `${e}px solid`
}
const xr = y({prop: 'border', themeKey: 'borders', transform: I}),
  wr = y({prop: 'borderTop', themeKey: 'borders', transform: I}),
  $r = y({prop: 'borderRight', themeKey: 'borders', transform: I}),
  kr = y({prop: 'borderBottom', themeKey: 'borders', transform: I}),
  Or = y({prop: 'borderLeft', themeKey: 'borders', transform: I}),
  vr = y({prop: 'borderColor', themeKey: 'palette'}),
  Ar = y({prop: 'borderTopColor', themeKey: 'palette'}),
  Sr = y({prop: 'borderRightColor', themeKey: 'palette'}),
  Tr = y({prop: 'borderBottomColor', themeKey: 'palette'}),
  Cr = y({prop: 'borderLeftColor', themeKey: 'palette'}),
  Oe = (e) => {
    if (e.borderRadius !== void 0 && e.borderRadius !== null) {
      const t = ce(e.theme, 'shape.borderRadius', 4),
        n = (r) => ({borderRadius: fe(t, r)})
      return L(e, e.borderRadius, n)
    }
    return null
  }
Oe.propTypes = {}
Oe.filterProps = ['borderRadius']
ke(xr, wr, $r, kr, Or, vr, Ar, Sr, Tr, Cr, Oe)
const ve = (e) => {
  if (e.gap !== void 0 && e.gap !== null) {
    const t = ce(e.theme, 'spacing', 8),
      n = (r) => ({gap: fe(t, r)})
    return L(e, e.gap, n)
  }
  return null
}
ve.propTypes = {}
ve.filterProps = ['gap']
const Ae = (e) => {
  if (e.columnGap !== void 0 && e.columnGap !== null) {
    const t = ce(e.theme, 'spacing', 8),
      n = (r) => ({columnGap: fe(t, r)})
    return L(e, e.columnGap, n)
  }
  return null
}
Ae.propTypes = {}
Ae.filterProps = ['columnGap']
const Se = (e) => {
  if (e.rowGap !== void 0 && e.rowGap !== null) {
    const t = ce(e.theme, 'spacing', 8),
      n = (r) => ({rowGap: fe(t, r)})
    return L(e, e.rowGap, n)
  }
  return null
}
Se.propTypes = {}
Se.filterProps = ['rowGap']
const Rr = y({prop: 'gridColumn'}),
  Pr = y({prop: 'gridRow'}),
  _r = y({prop: 'gridAutoFlow'}),
  Br = y({prop: 'gridAutoColumns'}),
  jr = y({prop: 'gridAutoRows'}),
  Er = y({prop: 'gridTemplateColumns'}),
  Kr = y({prop: 'gridTemplateRows'}),
  Ir = y({prop: 'gridTemplateAreas'}),
  Wr = y({prop: 'gridArea'})
ke(ve, Ae, Se, Rr, Pr, _r, Br, jr, Er, Kr, Ir, Wr)
function Z(e, t) {
  return t === 'grey' ? t : e
}
const Mr = y({prop: 'color', themeKey: 'palette', transform: Z}),
  zr = y({
    prop: 'bgcolor',
    cssProperty: 'backgroundColor',
    themeKey: 'palette',
    transform: Z,
  }),
  Lr = y({prop: 'backgroundColor', themeKey: 'palette', transform: Z})
ke(Mr, zr, Lr)
function _(e) {
  return e <= 1 && e !== 0 ? `${e * 100}%` : e
}
const Fr = y({prop: 'width', transform: _}),
  Me = (e) => {
    if (e.maxWidth !== void 0 && e.maxWidth !== null) {
      const t = (n) => {
        var r, s
        const i =
          ((r = e.theme) == null ||
          (r = r.breakpoints) == null ||
          (r = r.values) == null
            ? void 0
            : r[n]) || Ke[n]
        return i
          ? ((s = e.theme) == null || (s = s.breakpoints) == null
              ? void 0
              : s.unit) !== 'px'
            ? {maxWidth: `${i}${e.theme.breakpoints.unit}`}
            : {maxWidth: i}
          : {maxWidth: _(n)}
      }
      return L(e, e.maxWidth, t)
    }
    return null
  }
Me.filterProps = ['maxWidth']
const Dr = y({prop: 'minWidth', transform: _}),
  Gr = y({prop: 'height', transform: _}),
  Hr = y({prop: 'maxHeight', transform: _}),
  Nr = y({prop: 'minHeight', transform: _})
y({prop: 'size', cssProperty: 'width', transform: _})
y({prop: 'size', cssProperty: 'height', transform: _})
const Ur = y({prop: 'boxSizing'})
ke(Fr, Me, Dr, Gr, Hr, Nr, Ur)
const Yr = {
    border: {themeKey: 'borders', transform: I},
    borderTop: {themeKey: 'borders', transform: I},
    borderRight: {themeKey: 'borders', transform: I},
    borderBottom: {themeKey: 'borders', transform: I},
    borderLeft: {themeKey: 'borders', transform: I},
    borderColor: {themeKey: 'palette'},
    borderTopColor: {themeKey: 'palette'},
    borderRightColor: {themeKey: 'palette'},
    borderBottomColor: {themeKey: 'palette'},
    borderLeftColor: {themeKey: 'palette'},
    borderRadius: {themeKey: 'shape.borderRadius', style: Oe},
    color: {themeKey: 'palette', transform: Z},
    bgcolor: {
      themeKey: 'palette',
      cssProperty: 'backgroundColor',
      transform: Z,
    },
    backgroundColor: {themeKey: 'palette', transform: Z},
    p: {style: v},
    pt: {style: v},
    pr: {style: v},
    pb: {style: v},
    pl: {style: v},
    px: {style: v},
    py: {style: v},
    padding: {style: v},
    paddingTop: {style: v},
    paddingRight: {style: v},
    paddingBottom: {style: v},
    paddingLeft: {style: v},
    paddingX: {style: v},
    paddingY: {style: v},
    paddingInline: {style: v},
    paddingInlineStart: {style: v},
    paddingInlineEnd: {style: v},
    paddingBlock: {style: v},
    paddingBlockStart: {style: v},
    paddingBlockEnd: {style: v},
    m: {style: O},
    mt: {style: O},
    mr: {style: O},
    mb: {style: O},
    ml: {style: O},
    mx: {style: O},
    my: {style: O},
    margin: {style: O},
    marginTop: {style: O},
    marginRight: {style: O},
    marginBottom: {style: O},
    marginLeft: {style: O},
    marginX: {style: O},
    marginY: {style: O},
    marginInline: {style: O},
    marginInlineStart: {style: O},
    marginInlineEnd: {style: O},
    marginBlock: {style: O},
    marginBlockStart: {style: O},
    marginBlockEnd: {style: O},
    displayPrint: {
      cssProperty: !1,
      transform: (e) => ({'@media print': {display: e}}),
    },
    display: {},
    overflow: {},
    textOverflow: {},
    visibility: {},
    whiteSpace: {},
    flexBasis: {},
    flexDirection: {},
    flexWrap: {},
    justifyContent: {},
    alignItems: {},
    alignContent: {},
    order: {},
    flex: {},
    flexGrow: {},
    flexShrink: {},
    alignSelf: {},
    justifyItems: {},
    justifySelf: {},
    gap: {style: ve},
    rowGap: {style: Se},
    columnGap: {style: Ae},
    gridColumn: {},
    gridRow: {},
    gridAutoFlow: {},
    gridAutoColumns: {},
    gridAutoRows: {},
    gridTemplateColumns: {},
    gridTemplateRows: {},
    gridTemplateAreas: {},
    gridArea: {},
    position: {},
    zIndex: {themeKey: 'zIndex'},
    top: {},
    right: {},
    bottom: {},
    left: {},
    boxShadow: {themeKey: 'shadows'},
    width: {transform: _},
    maxWidth: {style: Me},
    minWidth: {transform: _},
    height: {transform: _},
    maxHeight: {transform: _},
    minHeight: {transform: _},
    boxSizing: {},
    fontFamily: {themeKey: 'typography'},
    fontSize: {themeKey: 'typography'},
    fontStyle: {themeKey: 'typography'},
    fontWeight: {themeKey: 'typography'},
    letterSpacing: {},
    textTransform: {},
    lineHeight: {},
    textAlign: {},
    typography: {cssProperty: !1, themeKey: 'typography'},
  },
  ze = Yr
function Xr(...e) {
  const t = e.reduce((r, s) => r.concat(Object.keys(s)), []),
    n = new Set(t)
  return e.every((r) => n.size === Object.keys(r).length)
}
function qr(e, t) {
  return typeof e == 'function' ? e(t) : e
}
function Jr() {
  function e(n, r, s, i) {
    const a = {[n]: r, theme: s},
      o = i[n]
    if (!o) return {[n]: r}
    const {cssProperty: u = n, themeKey: d, transform: p, style: l} = o
    if (r == null) return null
    if (d === 'typography' && r === 'inherit') return {[n]: r}
    const f = $e(s, d) || {}
    return l
      ? l(a)
      : L(a, r, (h) => {
          let c = me(f, p, h)
          return (
            h === c &&
              typeof h == 'string' &&
              (c = me(f, p, `${n}${h === 'default' ? '' : tt(h)}`, h)),
            u === !1 ? c : {[u]: c}
          )
        })
  }
  function t(n) {
    var r
    const {sx: s, theme: i = {}} = n || {}
    if (!s) return null
    const a = (r = i.unstable_sxConfig) != null ? r : ze
    function o(u) {
      let d = u
      if (typeof u == 'function') d = u(i)
      else if (typeof u != 'object') return u
      if (!d) return null
      const p = ut(i.breakpoints),
        l = Object.keys(p)
      let f = p
      return (
        Object.keys(d).forEach((b) => {
          const h = qr(d[b], i)
          if (h != null)
            if (typeof h == 'object')
              if (a[b]) f = ne(f, e(b, h, i, a))
              else {
                const c = L({theme: i}, h, ($) => ({[b]: $}))
                Xr(c, h) ? (f[b] = t({sx: h, theme: i})) : (f = ne(f, c))
              }
            else f = ne(f, e(b, h, i, a))
        }),
        dt(l, f)
      )
    }
    return Array.isArray(s) ? s.map(o) : o(s)
  }
  return t
}
const ht = Jr()
ht.filterProps = ['sx']
const mt = ht,
  Zr = ['breakpoints', 'palette', 'spacing', 'shape']
function Qr(e = {}, ...t) {
  const {breakpoints: n = {}, palette: r = {}, spacing: s, shape: i = {}} = e,
    a = ft(e, Zr),
    o = cr(n),
    u = br(s)
  let d = W(
    {
      breakpoints: o,
      direction: 'ltr',
      components: {},
      palette: F({mode: 'light'}, r),
      spacing: u,
      shape: F({}, ur, i),
    },
    a
  )
  return (
    (d = t.reduce((p, l) => W(p, l), d)),
    (d.unstable_sxConfig = F({}, ze, a == null ? void 0 : a.unstable_sxConfig)),
    (d.unstable_sx = function (l) {
      return mt({sx: l, theme: this})
    }),
    d
  )
}
function Le(e, t = 0, n = 1) {
  return Math.min(Math.max(t, e), n)
}
function Vr(e) {
  e = e.slice(1)
  const t = new RegExp(`.{1,${e.length >= 6 ? 2 : 1}}`, 'g')
  let n = e.match(t)
  return (
    n && n[0].length === 1 && (n = n.map((r) => r + r)),
    n
      ? `rgb${n.length === 4 ? 'a' : ''}(${n
          .map((r, s) =>
            s < 3
              ? parseInt(r, 16)
              : Math.round((parseInt(r, 16) / 255) * 1e3) / 1e3
          )
          .join(', ')})`
      : ''
  )
}
function D(e) {
  if (e.type) return e
  if (e.charAt(0) === '#') return D(Vr(e))
  const t = e.indexOf('('),
    n = e.substring(0, t)
  if (['rgb', 'rgba', 'hsl', 'hsla', 'color'].indexOf(n) === -1)
    throw new Error(Q(9, e))
  let r = e.substring(t + 1, e.length - 1),
    s
  if (n === 'color') {
    if (
      ((r = r.split(' ')),
      (s = r.shift()),
      r.length === 4 && r[3].charAt(0) === '/' && (r[3] = r[3].slice(1)),
      ['srgb', 'display-p3', 'a98-rgb', 'prophoto-rgb', 'rec-2020'].indexOf(
        s
      ) === -1)
    )
      throw new Error(Q(10, s))
  } else r = r.split(',')
  return (r = r.map((i) => parseFloat(i))), {type: n, values: r, colorSpace: s}
}
function Te(e) {
  const {type: t, colorSpace: n} = e
  let {values: r} = e
  return (
    t.indexOf('rgb') !== -1
      ? (r = r.map((s, i) => (i < 3 ? parseInt(s, 10) : s)))
      : t.indexOf('hsl') !== -1 && ((r[1] = `${r[1]}%`), (r[2] = `${r[2]}%`)),
    t.indexOf('color') !== -1
      ? (r = `${n} ${r.join(' ')}`)
      : (r = `${r.join(', ')}`),
    `${t}(${r})`
  )
}
function en(e) {
  e = D(e)
  const {values: t} = e,
    n = t[0],
    r = t[1] / 100,
    s = t[2] / 100,
    i = r * Math.min(s, 1 - s),
    a = (d, p = (d + n / 30) % 12) =>
      s - i * Math.max(Math.min(p - 3, 9 - p, 1), -1)
  let o = 'rgb'
  const u = [
    Math.round(a(0) * 255),
    Math.round(a(8) * 255),
    Math.round(a(4) * 255),
  ]
  return (
    e.type === 'hsla' && ((o += 'a'), u.push(t[3])), Te({type: o, values: u})
  )
}
function Ue(e) {
  e = D(e)
  let t = e.type === 'hsl' || e.type === 'hsla' ? D(en(e)).values : e.values
  return (
    (t = t.map(
      (n) => (
        e.type !== 'color' && (n /= 255),
        n <= 0.03928 ? n / 12.92 : ((n + 0.055) / 1.055) ** 2.4
      )
    )),
    Number((0.2126 * t[0] + 0.7152 * t[1] + 0.0722 * t[2]).toFixed(3))
  )
}
function tn(e, t) {
  const n = Ue(e),
    r = Ue(t)
  return (Math.max(n, r) + 0.05) / (Math.min(n, r) + 0.05)
}
function Kn(e, t) {
  return (
    (e = D(e)),
    (t = Le(t)),
    (e.type === 'rgb' || e.type === 'hsl') && (e.type += 'a'),
    e.type === 'color' ? (e.values[3] = `/${t}`) : (e.values[3] = t),
    Te(e)
  )
}
function rn(e, t) {
  if (((e = D(e)), (t = Le(t)), e.type.indexOf('hsl') !== -1))
    e.values[2] *= 1 - t
  else if (e.type.indexOf('rgb') !== -1 || e.type.indexOf('color') !== -1)
    for (let n = 0; n < 3; n += 1) e.values[n] *= 1 - t
  return Te(e)
}
function nn(e, t) {
  if (((e = D(e)), (t = Le(t)), e.type.indexOf('hsl') !== -1))
    e.values[2] += (100 - e.values[2]) * t
  else if (e.type.indexOf('rgb') !== -1)
    for (let n = 0; n < 3; n += 1) e.values[n] += (255 - e.values[n]) * t
  else if (e.type.indexOf('color') !== -1)
    for (let n = 0; n < 3; n += 1) e.values[n] += (1 - e.values[n]) * t
  return Te(e)
}
function sn(e, t) {
  return B(
    {
      toolbar: {
        minHeight: 56,
        [e.up('xs')]: {'@media (orientation: landscape)': {minHeight: 48}},
        [e.up('sm')]: {minHeight: 64},
      },
    },
    t
  )
}
const an = ['mode', 'contrastThreshold', 'tonalOffset'],
  Ye = {
    text: {
      primary: 'rgba(0, 0, 0, 0.87)',
      secondary: 'rgba(0, 0, 0, 0.6)',
      disabled: 'rgba(0, 0, 0, 0.38)',
    },
    divider: 'rgba(0, 0, 0, 0.12)',
    background: {paper: se.white, default: se.white},
    action: {
      active: 'rgba(0, 0, 0, 0.54)',
      hover: 'rgba(0, 0, 0, 0.04)',
      hoverOpacity: 0.04,
      selected: 'rgba(0, 0, 0, 0.08)',
      selectedOpacity: 0.08,
      disabled: 'rgba(0, 0, 0, 0.26)',
      disabledBackground: 'rgba(0, 0, 0, 0.12)',
      disabledOpacity: 0.38,
      focus: 'rgba(0, 0, 0, 0.12)',
      focusOpacity: 0.12,
      activatedOpacity: 0.12,
    },
  },
  Ce = {
    text: {
      primary: se.white,
      secondary: 'rgba(255, 255, 255, 0.7)',
      disabled: 'rgba(255, 255, 255, 0.5)',
      icon: 'rgba(255, 255, 255, 0.5)',
    },
    divider: 'rgba(255, 255, 255, 0.12)',
    background: {paper: '#121212', default: '#121212'},
    action: {
      active: se.white,
      hover: 'rgba(255, 255, 255, 0.08)',
      hoverOpacity: 0.08,
      selected: 'rgba(255, 255, 255, 0.16)',
      selectedOpacity: 0.16,
      disabled: 'rgba(255, 255, 255, 0.3)',
      disabledBackground: 'rgba(255, 255, 255, 0.12)',
      disabledOpacity: 0.38,
      focus: 'rgba(255, 255, 255, 0.12)',
      focusOpacity: 0.12,
      activatedOpacity: 0.24,
    },
  }
function Xe(e, t, n, r) {
  const s = r.light || r,
    i = r.dark || r * 1.5
  e[t] ||
    (e.hasOwnProperty(n)
      ? (e[t] = e[n])
      : t === 'light'
      ? (e.light = nn(e.main, s))
      : t === 'dark' && (e.dark = rn(e.main, i)))
}
function on(e = 'light') {
  return e === 'dark'
    ? {main: U[200], light: U[50], dark: U[400]}
    : {main: U[700], light: U[400], dark: U[800]}
}
function cn(e = 'light') {
  return e === 'dark'
    ? {main: N[200], light: N[50], dark: N[400]}
    : {main: N[500], light: N[300], dark: N[700]}
}
function fn(e = 'light') {
  return e === 'dark'
    ? {main: H[500], light: H[300], dark: H[700]}
    : {main: H[700], light: H[400], dark: H[800]}
}
function un(e = 'light') {
  return e === 'dark'
    ? {main: Y[400], light: Y[300], dark: Y[700]}
    : {main: Y[700], light: Y[500], dark: Y[900]}
}
function dn(e = 'light') {
  return e === 'dark'
    ? {main: X[400], light: X[300], dark: X[700]}
    : {main: X[800], light: X[500], dark: X[900]}
}
function ln(e = 'light') {
  return e === 'dark'
    ? {main: te[400], light: te[300], dark: te[700]}
    : {main: '#ed6c02', light: te[500], dark: te[900]}
}
function pn(e) {
  const {mode: t = 'light', contrastThreshold: n = 3, tonalOffset: r = 0.2} = e,
    s = ye(e, an),
    i = e.primary || on(t),
    a = e.secondary || cn(t),
    o = e.error || fn(t),
    u = e.info || un(t),
    d = e.success || dn(t),
    p = e.warning || ln(t)
  function l(c) {
    return tn(c, Ce.text.primary) >= n ? Ce.text.primary : Ye.text.primary
  }
  const f = ({
      color: c,
      name: $,
      mainShade: x = 500,
      lightShade: A = 300,
      darkShade: R = 700,
    }) => {
      if (
        ((c = B({}, c)),
        !c.main && c[x] && (c.main = c[x]),
        !c.hasOwnProperty('main'))
      )
        throw new Error(Q(11, $ ? ` (${$})` : '', x))
      if (typeof c.main != 'string')
        throw new Error(Q(12, $ ? ` (${$})` : '', JSON.stringify(c.main)))
      return (
        Xe(c, 'light', A, r),
        Xe(c, 'dark', R, r),
        c.contrastText || (c.contrastText = l(c.main)),
        c
      )
    },
    b = {dark: Ce, light: Ye}
  return W(
    B(
      {
        common: B({}, se),
        mode: t,
        primary: f({color: i, name: 'primary'}),
        secondary: f({
          color: a,
          name: 'secondary',
          mainShade: 'A400',
          lightShade: 'A200',
          darkShade: 'A700',
        }),
        error: f({color: o, name: 'error'}),
        warning: f({color: p, name: 'warning'}),
        info: f({color: u, name: 'info'}),
        success: f({color: d, name: 'success'}),
        grey: _t,
        contrastThreshold: n,
        getContrastText: l,
        augmentColor: f,
        tonalOffset: r,
      },
      b[t]
    ),
    s
  )
}
const hn = [
  'fontFamily',
  'fontSize',
  'fontWeightLight',
  'fontWeightRegular',
  'fontWeightMedium',
  'fontWeightBold',
  'htmlFontSize',
  'allVariants',
  'pxToRem',
]
function mn(e) {
  return Math.round(e * 1e5) / 1e5
}
const qe = {textTransform: 'uppercase'},
  Je = '"Roboto", "Helvetica", "Arial", sans-serif'
function gn(e, t) {
  const n = typeof t == 'function' ? t(e) : t,
    {
      fontFamily: r = Je,
      fontSize: s = 14,
      fontWeightLight: i = 300,
      fontWeightRegular: a = 400,
      fontWeightMedium: o = 500,
      fontWeightBold: u = 700,
      htmlFontSize: d = 16,
      allVariants: p,
      pxToRem: l,
    } = n,
    f = ye(n, hn),
    b = s / 14,
    h = l || ((x) => `${(x / d) * b}rem`),
    c = (x, A, R, G, z) =>
      B(
        {fontFamily: r, fontWeight: x, fontSize: h(A), lineHeight: R},
        r === Je ? {letterSpacing: `${mn(G / A)}em`} : {},
        z,
        p
      ),
    $ = {
      h1: c(i, 96, 1.167, -1.5),
      h2: c(i, 60, 1.2, -0.5),
      h3: c(a, 48, 1.167, 0),
      h4: c(a, 34, 1.235, 0.25),
      h5: c(a, 24, 1.334, 0),
      h6: c(o, 20, 1.6, 0.15),
      subtitle1: c(a, 16, 1.75, 0.15),
      subtitle2: c(o, 14, 1.57, 0.1),
      body1: c(a, 16, 1.5, 0.15),
      body2: c(a, 14, 1.43, 0.15),
      button: c(o, 14, 1.75, 0.4, qe),
      caption: c(a, 12, 1.66, 0.4),
      overline: c(a, 12, 2.66, 1, qe),
      inherit: {
        fontFamily: 'inherit',
        fontWeight: 'inherit',
        fontSize: 'inherit',
        lineHeight: 'inherit',
        letterSpacing: 'inherit',
      },
    }
  return W(
    B(
      {
        htmlFontSize: d,
        pxToRem: h,
        fontFamily: r,
        fontSize: s,
        fontWeightLight: i,
        fontWeightRegular: a,
        fontWeightMedium: o,
        fontWeightBold: u,
      },
      $
    ),
    f,
    {clone: !1}
  )
}
const yn = 0.2,
  bn = 0.14,
  xn = 0.12
function k(...e) {
  return [
    `${e[0]}px ${e[1]}px ${e[2]}px ${e[3]}px rgba(0,0,0,${yn})`,
    `${e[4]}px ${e[5]}px ${e[6]}px ${e[7]}px rgba(0,0,0,${bn})`,
    `${e[8]}px ${e[9]}px ${e[10]}px ${e[11]}px rgba(0,0,0,${xn})`,
  ].join(',')
}
const wn = [
    'none',
    k(0, 2, 1, -1, 0, 1, 1, 0, 0, 1, 3, 0),
    k(0, 3, 1, -2, 0, 2, 2, 0, 0, 1, 5, 0),
    k(0, 3, 3, -2, 0, 3, 4, 0, 0, 1, 8, 0),
    k(0, 2, 4, -1, 0, 4, 5, 0, 0, 1, 10, 0),
    k(0, 3, 5, -1, 0, 5, 8, 0, 0, 1, 14, 0),
    k(0, 3, 5, -1, 0, 6, 10, 0, 0, 1, 18, 0),
    k(0, 4, 5, -2, 0, 7, 10, 1, 0, 2, 16, 1),
    k(0, 5, 5, -3, 0, 8, 10, 1, 0, 3, 14, 2),
    k(0, 5, 6, -3, 0, 9, 12, 1, 0, 3, 16, 2),
    k(0, 6, 6, -3, 0, 10, 14, 1, 0, 4, 18, 3),
    k(0, 6, 7, -4, 0, 11, 15, 1, 0, 4, 20, 3),
    k(0, 7, 8, -4, 0, 12, 17, 2, 0, 5, 22, 4),
    k(0, 7, 8, -4, 0, 13, 19, 2, 0, 5, 24, 4),
    k(0, 7, 9, -4, 0, 14, 21, 2, 0, 5, 26, 4),
    k(0, 8, 9, -5, 0, 15, 22, 2, 0, 6, 28, 5),
    k(0, 8, 10, -5, 0, 16, 24, 2, 0, 6, 30, 5),
    k(0, 8, 11, -5, 0, 17, 26, 2, 0, 6, 32, 5),
    k(0, 9, 11, -5, 0, 18, 28, 2, 0, 7, 34, 6),
    k(0, 9, 12, -6, 0, 19, 29, 2, 0, 7, 36, 6),
    k(0, 10, 13, -6, 0, 20, 31, 3, 0, 8, 38, 7),
    k(0, 10, 13, -6, 0, 21, 33, 3, 0, 8, 40, 7),
    k(0, 10, 14, -6, 0, 22, 35, 3, 0, 8, 42, 7),
    k(0, 11, 14, -7, 0, 23, 36, 3, 0, 9, 44, 8),
    k(0, 11, 15, -7, 0, 24, 38, 3, 0, 9, 46, 8),
  ],
  $n = wn,
  kn = ['duration', 'easing', 'delay'],
  On = {
    easeInOut: 'cubic-bezier(0.4, 0, 0.2, 1)',
    easeOut: 'cubic-bezier(0.0, 0, 0.2, 1)',
    easeIn: 'cubic-bezier(0.4, 0, 1, 1)',
    sharp: 'cubic-bezier(0.4, 0, 0.6, 1)',
  },
  vn = {
    shortest: 150,
    shorter: 200,
    short: 250,
    standard: 300,
    complex: 375,
    enteringScreen: 225,
    leavingScreen: 195,
  }
function Ze(e) {
  return `${Math.round(e)}ms`
}
function An(e) {
  if (!e) return 0
  const t = e / 36
  return Math.round((4 + 15 * t ** 0.25 + t / 5) * 10)
}
function Sn(e) {
  const t = B({}, On, e.easing),
    n = B({}, vn, e.duration)
  return B(
    {
      getAutoHeightDuration: An,
      create: (s = ['all'], i = {}) => {
        const {
          duration: a = n.standard,
          easing: o = t.easeInOut,
          delay: u = 0,
        } = i
        return (
          ye(i, kn),
          (Array.isArray(s) ? s : [s])
            .map(
              (d) =>
                `${d} ${typeof a == 'string' ? a : Ze(a)} ${o} ${
                  typeof u == 'string' ? u : Ze(u)
                }`
            )
            .join(',')
        )
      },
    },
    e,
    {easing: t, duration: n}
  )
}
const Tn = {
    mobileStepper: 1e3,
    fab: 1050,
    speedDial: 1050,
    appBar: 1100,
    drawer: 1200,
    modal: 1300,
    snackbar: 1400,
    tooltip: 1500,
  },
  Cn = Tn,
  Rn = [
    'breakpoints',
    'mixins',
    'spacing',
    'palette',
    'transitions',
    'typography',
    'shape',
  ]
function In(e = {}, ...t) {
  const {
      mixins: n = {},
      palette: r = {},
      transitions: s = {},
      typography: i = {},
    } = e,
    a = ye(e, Rn)
  if (e.vars) throw new Error(Q(18))
  const o = pn(r),
    u = Qr(e)
  let d = W(u, {
    mixins: sn(u.breakpoints, n),
    palette: o,
    shadows: $n.slice(),
    typography: gn(o, i),
    transitions: Sn(s),
    zIndex: B({}, Cn),
  })
  return (
    (d = W(d, a)),
    (d = t.reduce((p, l) => W(p, l), d)),
    (d.unstable_sxConfig = B({}, ze, a == null ? void 0 : a.unstable_sxConfig)),
    (d.unstable_sx = function (l) {
      return mt({sx: l, theme: this})
    }),
    d
  )
}
export {
  ft as _,
  F as a,
  Bn as b,
  In as c,
  B as d,
  tt as e,
  Kn as f,
  ye as g,
  Re as h,
  Qr as i,
  _n as j,
  ze as k,
  q as l,
  W as m,
  L as n,
  En as o,
  lt as p,
  jn as q,
  H as r,
  mt as s,
  fe as t,
  Q as u,
  nn as v,
  rn as w,
}
//# sourceMappingURL=createTheme-c77538bc.js.map
