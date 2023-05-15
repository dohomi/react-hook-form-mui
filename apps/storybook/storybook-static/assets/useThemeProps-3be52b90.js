import {r as pe} from './index-ebeaab24.js'
import {_ as T} from './extends-98964cd2.js'
var je = {exports: {}},
  ae = {}
/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var qe = pe,
  Xe = Symbol.for('react.element'),
  Je = Symbol.for('react.fragment'),
  Ze = Object.prototype.hasOwnProperty,
  Ge = qe.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,
  Qe = {key: !0, ref: !0, __self: !0, __source: !0}
function Be(e, t, n) {
  var r,
    s = {},
    a = null,
    i = null
  n !== void 0 && (a = '' + n),
    t.key !== void 0 && (a = '' + t.key),
    t.ref !== void 0 && (i = t.ref)
  for (r in t) Ze.call(t, r) && !Qe.hasOwnProperty(r) && (s[r] = t[r])
  if (e && e.defaultProps)
    for (r in ((t = e.defaultProps), t)) s[r] === void 0 && (s[r] = t[r])
  return {$$typeof: Xe, type: e, key: a, ref: i, props: s, _owner: Ge.current}
}
ae.Fragment = Je
ae.jsx = Be
ae.jsxs = Be
je.exports = ae
var ge = je.exports
const Ve = ge.Fragment,
  et = ge.jsx,
  tt = ge.jsxs,
  Zr = Object.freeze(
    Object.defineProperty(
      {__proto__: null, Fragment: Ve, jsx: et, jsxs: tt},
      Symbol.toStringTag,
      {value: 'Module'}
    )
  ),
  rt = {black: '#000', white: '#fff'},
  J = rt,
  nt = {
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
  z = nt,
  st = {
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
  L = st,
  at = {
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
  D = at,
  it = {
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
  W = it,
  ct = {
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
  K = ct,
  ot = {
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
  q = ot,
  ft = {
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
  ut = ft
function H(e, t) {
  if (e == null) return {}
  var n = {},
    r = Object.keys(e),
    s,
    a
  for (a = 0; a < r.length; a++)
    (s = r[a]), !(t.indexOf(s) >= 0) && (n[s] = e[s])
  return n
}
function dt(e) {
  if (e.sheet) return e.sheet
  for (var t = 0; t < document.styleSheets.length; t++)
    if (document.styleSheets[t].ownerNode === e) return document.styleSheets[t]
}
function ht(e) {
  var t = document.createElement('style')
  return (
    t.setAttribute('data-emotion', e.key),
    e.nonce !== void 0 && t.setAttribute('nonce', e.nonce),
    t.appendChild(document.createTextNode('')),
    t.setAttribute('data-s', ''),
    t
  )
}
var pt = (function () {
    function e(n) {
      var r = this
      ;(this._insertTag = function (s) {
        var a
        r.tags.length === 0
          ? r.insertionPoint
            ? (a = r.insertionPoint.nextSibling)
            : r.prepend
            ? (a = r.container.firstChild)
            : (a = r.before)
          : (a = r.tags[r.tags.length - 1].nextSibling),
          r.container.insertBefore(s, a),
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
        this.ctr % (this.isSpeedy ? 65e3 : 1) === 0 && this._insertTag(ht(this))
        var s = this.tags[this.tags.length - 1]
        if (this.isSpeedy) {
          var a = dt(s)
          try {
            a.insertRule(r, a.cssRules.length)
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
  A = '-ms-',
  se = '-moz-',
  p = '-webkit-',
  Ie = 'comm',
  le = 'rule',
  me = 'decl',
  gt = '@import',
  Ce = '@keyframes',
  lt = Math.abs,
  ie = String.fromCharCode,
  mt = Object.assign
function bt(e, t) {
  return O(e, 0) ^ 45
    ? (((((((t << 2) ^ O(e, 0)) << 2) ^ O(e, 1)) << 2) ^ O(e, 2)) << 2) ^
        O(e, 3)
    : 0
}
function Me(e) {
  return e.trim()
}
function yt(e, t) {
  return (e = t.exec(e)) ? e[0] : e
}
function l(e, t, n) {
  return e.replace(t, n)
}
function de(e, t) {
  return e.indexOf(t)
}
function O(e, t) {
  return e.charCodeAt(t) | 0
}
function Z(e, t, n) {
  return e.slice(t, n)
}
function R(e) {
  return e.length
}
function be(e) {
  return e.length
}
function V(e, t) {
  return t.push(e), e
}
function xt(e, t) {
  return e.map(t).join('')
}
var ce = 1,
  N = 1,
  ze = 0,
  _ = 0,
  v = 0,
  Y = ''
function oe(e, t, n, r, s, a, i) {
  return {
    value: e,
    root: t,
    parent: n,
    type: r,
    props: s,
    children: a,
    line: ce,
    column: N,
    length: i,
    return: '',
  }
}
function X(e, t) {
  return mt(oe('', null, null, '', null, null, 0), e, {length: -e.length}, t)
}
function $t() {
  return v
}
function kt() {
  return (v = _ > 0 ? O(Y, --_) : 0), N--, v === 10 && ((N = 1), ce--), v
}
function E() {
  return (v = _ < ze ? O(Y, _++) : 0), N++, v === 10 && ((N = 1), ce++), v
}
function j() {
  return O(Y, _)
}
function te() {
  return _
}
function Q(e, t) {
  return Z(Y, e, t)
}
function G(e) {
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
function Le(e) {
  return (ce = N = 1), (ze = R((Y = e))), (_ = 0), []
}
function De(e) {
  return (Y = ''), e
}
function re(e) {
  return Me(Q(_ - 1, he(e === 91 ? e + 2 : e === 40 ? e + 1 : e)))
}
function wt(e) {
  for (; (v = j()) && v < 33; ) E()
  return G(e) > 2 || G(v) > 3 ? '' : ' '
}
function vt(e, t) {
  for (
    ;
    --t &&
    E() &&
    !(v < 48 || v > 102 || (v > 57 && v < 65) || (v > 70 && v < 97));

  );
  return Q(e, te() + (t < 6 && j() == 32 && E() == 32))
}
function he(e) {
  for (; E(); )
    switch (v) {
      case e:
        return _
      case 34:
      case 39:
        e !== 34 && e !== 39 && he(v)
        break
      case 40:
        e === 41 && he(e)
        break
      case 92:
        E()
        break
    }
  return _
}
function Ot(e, t) {
  for (; E() && e + v !== 47 + 10; ) if (e + v === 42 + 42 && j() === 47) break
  return '/*' + Q(t, _ - 1) + '*' + ie(e === 47 ? e : E())
}
function At(e) {
  for (; !G(j()); ) E()
  return Q(e, _)
}
function Tt(e) {
  return De(ne('', null, null, null, [''], (e = Le(e)), 0, [0], e))
}
function ne(e, t, n, r, s, a, i, c, f) {
  for (
    var d = 0,
      g = 0,
      h = i,
      u = 0,
      $ = 0,
      k = 0,
      o = 1,
      x = 1,
      m = 1,
      w = 0,
      S = '',
      M = s,
      B = a,
      P = r,
      y = S;
    x;

  )
    switch (((k = w), (w = E()))) {
      case 40:
        if (k != 108 && O(y, h - 1) == 58) {
          de((y += l(re(w), '&', '&\f')), '&\f') != -1 && (m = -1)
          break
        }
      case 34:
      case 39:
      case 91:
        y += re(w)
        break
      case 9:
      case 10:
      case 13:
      case 32:
        y += wt(k)
        break
      case 92:
        y += vt(te() - 1, 7)
        continue
      case 47:
        switch (j()) {
          case 42:
          case 47:
            V(St(Ot(E(), te()), t, n), f)
            break
          default:
            y += '/'
        }
        break
      case 123 * o:
        c[d++] = R(y) * m
      case 125 * o:
      case 59:
      case 0:
        switch (w) {
          case 0:
          case 125:
            x = 0
          case 59 + g:
            $ > 0 &&
              R(y) - h &&
              V(
                $ > 32
                  ? ke(y + ';', r, n, h - 1)
                  : ke(l(y, ' ', '') + ';', r, n, h - 2),
                f
              )
            break
          case 59:
            y += ';'
          default:
            if (
              (V((P = $e(y, t, n, d, g, s, c, S, (M = []), (B = []), h)), a),
              w === 123)
            )
              if (g === 0) ne(y, t, P, P, M, a, h, c, B)
              else
                switch (u === 99 && O(y, 3) === 110 ? 100 : u) {
                  case 100:
                  case 109:
                  case 115:
                    ne(
                      e,
                      P,
                      P,
                      r && V($e(e, P, P, 0, 0, s, c, S, s, (M = []), h), B),
                      s,
                      B,
                      h,
                      c,
                      r ? M : B
                    )
                    break
                  default:
                    ne(y, P, P, P, [''], B, 0, c, B)
                }
        }
        ;(d = g = $ = 0), (o = m = 1), (S = y = ''), (h = i)
        break
      case 58:
        ;(h = 1 + R(y)), ($ = k)
      default:
        if (o < 1) {
          if (w == 123) --o
          else if (w == 125 && o++ == 0 && kt() == 125) continue
        }
        switch (((y += ie(w)), w * o)) {
          case 38:
            m = g > 0 ? 1 : ((y += '\f'), -1)
            break
          case 44:
            ;(c[d++] = (R(y) - 1) * m), (m = 1)
            break
          case 64:
            j() === 45 && (y += re(E())),
              (u = j()),
              (g = h = R((S = y += At(te())))),
              w++
            break
          case 45:
            k === 45 && R(y) == 2 && (o = 0)
        }
    }
  return a
}
function $e(e, t, n, r, s, a, i, c, f, d, g) {
  for (
    var h = s - 1, u = s === 0 ? a : [''], $ = be(u), k = 0, o = 0, x = 0;
    k < r;
    ++k
  )
    for (var m = 0, w = Z(e, h + 1, (h = lt((o = i[k])))), S = e; m < $; ++m)
      (S = Me(o > 0 ? u[m] + ' ' + w : l(w, /&\f/g, u[m]))) && (f[x++] = S)
  return oe(e, t, n, s === 0 ? le : c, f, d, g)
}
function St(e, t, n) {
  return oe(e, t, n, Ie, ie($t()), Z(e, 2, -2), 0)
}
function ke(e, t, n, r) {
  return oe(e, t, n, me, Z(e, 0, r), Z(e, r + 1, -1), r)
}
function U(e, t) {
  for (var n = '', r = be(e), s = 0; s < r; s++) n += t(e[s], s, e, t) || ''
  return n
}
function _t(e, t, n, r) {
  switch (e.type) {
    case gt:
    case me:
      return (e.return = e.return || e.value)
    case Ie:
      return ''
    case Ce:
      return (e.return = e.value + '{' + U(e.children, r) + '}')
    case le:
      e.value = e.props.join(',')
  }
  return R((n = U(e.children, r))) ? (e.return = e.value + '{' + n + '}') : ''
}
function Et(e) {
  var t = be(e)
  return function (n, r, s, a) {
    for (var i = '', c = 0; c < t; c++) i += e[c](n, r, s, a) || ''
    return i
  }
}
function Pt(e) {
  return function (t) {
    t.root || ((t = t.return) && e(t))
  }
}
var Rt = function (t, n, r) {
    for (
      var s = 0, a = 0;
      (s = a), (a = j()), s === 38 && a === 12 && (n[r] = 1), !G(a);

    )
      E()
    return Q(t, _)
  },
  jt = function (t, n) {
    var r = -1,
      s = 44
    do
      switch (G(s)) {
        case 0:
          s === 38 && j() === 12 && (n[r] = 1), (t[r] += Rt(_ - 1, n, r))
          break
        case 2:
          t[r] += re(s)
          break
        case 4:
          if (s === 44) {
            ;(t[++r] = j() === 58 ? '&\f' : ''), (n[r] = t[r].length)
            break
          }
        default:
          t[r] += ie(s)
      }
    while ((s = E()))
    return t
  },
  Bt = function (t, n) {
    return De(jt(Le(t), n))
  },
  we = new WeakMap(),
  It = function (t) {
    if (!(t.type !== 'rule' || !t.parent || t.length < 1)) {
      for (
        var n = t.value,
          r = t.parent,
          s = t.column === r.column && t.line === r.line;
        r.type !== 'rule';

      )
        if (((r = r.parent), !r)) return
      if (
        !(t.props.length === 1 && n.charCodeAt(0) !== 58 && !we.get(r)) &&
        !s
      ) {
        we.set(t, !0)
        for (
          var a = [], i = Bt(n, a), c = r.props, f = 0, d = 0;
          f < i.length;
          f++
        )
          for (var g = 0; g < c.length; g++, d++)
            t.props[d] = a[f] ? i[f].replace(/&\f/g, c[g]) : c[g] + ' ' + i[f]
      }
    }
  },
  Ct = function (t) {
    if (t.type === 'decl') {
      var n = t.value
      n.charCodeAt(0) === 108 &&
        n.charCodeAt(2) === 98 &&
        ((t.return = ''), (t.value = ''))
    }
  }
function We(e, t) {
  switch (bt(e, t)) {
    case 5103:
      return p + 'print-' + e + e
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
      return p + e + e
    case 5349:
    case 4246:
    case 4810:
    case 6968:
    case 2756:
      return p + e + se + e + A + e + e
    case 6828:
    case 4268:
      return p + e + A + e + e
    case 6165:
      return p + e + A + 'flex-' + e + e
    case 5187:
      return (
        p + e + l(e, /(\w+).+(:[^]+)/, p + 'box-$1$2' + A + 'flex-$1$2') + e
      )
    case 5443:
      return p + e + A + 'flex-item-' + l(e, /flex-|-self/, '') + e
    case 4675:
      return (
        p + e + A + 'flex-line-pack' + l(e, /align-content|flex-|-self/, '') + e
      )
    case 5548:
      return p + e + A + l(e, 'shrink', 'negative') + e
    case 5292:
      return p + e + A + l(e, 'basis', 'preferred-size') + e
    case 6060:
      return (
        p +
        'box-' +
        l(e, '-grow', '') +
        p +
        e +
        A +
        l(e, 'grow', 'positive') +
        e
      )
    case 4554:
      return p + l(e, /([^-])(transform)/g, '$1' + p + '$2') + e
    case 6187:
      return (
        l(l(l(e, /(zoom-|grab)/, p + '$1'), /(image-set)/, p + '$1'), e, '') + e
      )
    case 5495:
    case 3959:
      return l(e, /(image-set\([^]*)/, p + '$1$`$1')
    case 4968:
      return (
        l(
          l(e, /(.+:)(flex-)?(.*)/, p + 'box-pack:$3' + A + 'flex-pack:$3'),
          /s.+-b[^;]+/,
          'justify'
        ) +
        p +
        e +
        e
      )
    case 4095:
    case 3583:
    case 4068:
    case 2532:
      return l(e, /(.+)-inline(.+)/, p + '$1$2') + e
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
      if (R(e) - 1 - t > 6)
        switch (O(e, t + 1)) {
          case 109:
            if (O(e, t + 4) !== 45) break
          case 102:
            return (
              l(
                e,
                /(.+:)(.+)-([^]+)/,
                '$1' +
                  p +
                  '$2-$3$1' +
                  se +
                  (O(e, t + 3) == 108 ? '$3' : '$2-$3')
              ) + e
            )
          case 115:
            return ~de(e, 'stretch')
              ? We(l(e, 'stretch', 'fill-available'), t) + e
              : e
        }
      break
    case 4949:
      if (O(e, t + 1) !== 115) break
    case 6444:
      switch (O(e, R(e) - 3 - (~de(e, '!important') && 10))) {
        case 107:
          return l(e, ':', ':' + p) + e
        case 101:
          return (
            l(
              e,
              /(.+:)([^;!]+)(;|!.+)?/,
              '$1' +
                p +
                (O(e, 14) === 45 ? 'inline-' : '') +
                'box$3$1' +
                p +
                '$2$3$1' +
                A +
                '$2box$3'
            ) + e
          )
      }
      break
    case 5936:
      switch (O(e, t + 11)) {
        case 114:
          return p + e + A + l(e, /[svh]\w+-[tblr]{2}/, 'tb') + e
        case 108:
          return p + e + A + l(e, /[svh]\w+-[tblr]{2}/, 'tb-rl') + e
        case 45:
          return p + e + A + l(e, /[svh]\w+-[tblr]{2}/, 'lr') + e
      }
      return p + e + A + e + e
  }
  return e
}
var Mt = function (t, n, r, s) {
    if (t.length > -1 && !t.return)
      switch (t.type) {
        case me:
          t.return = We(t.value, t.length)
          break
        case Ce:
          return U([X(t, {value: l(t.value, '@', '@' + p)})], s)
        case le:
          if (t.length)
            return xt(t.props, function (a) {
              switch (yt(a, /(::plac\w+|:read-\w+)/)) {
                case ':read-only':
                case ':read-write':
                  return U(
                    [X(t, {props: [l(a, /:(read-\w+)/, ':' + se + '$1')]})],
                    s
                  )
                case '::placeholder':
                  return U(
                    [
                      X(t, {props: [l(a, /:(plac\w+)/, ':' + p + 'input-$1')]}),
                      X(t, {props: [l(a, /:(plac\w+)/, ':' + se + '$1')]}),
                      X(t, {props: [l(a, /:(plac\w+)/, A + 'input-$1')]}),
                    ],
                    s
                  )
              }
              return ''
            })
      }
  },
  zt = [Mt],
  Gr = function (t) {
    var n = t.key
    if (n === 'css') {
      var r = document.querySelectorAll('style[data-emotion]:not([data-s])')
      Array.prototype.forEach.call(r, function (o) {
        var x = o.getAttribute('data-emotion')
        x.indexOf(' ') !== -1 &&
          (document.head.appendChild(o), o.setAttribute('data-s', ''))
      })
    }
    var s = t.stylisPlugins || zt,
      a = {},
      i,
      c = []
    ;(i = t.container || document.head),
      Array.prototype.forEach.call(
        document.querySelectorAll('style[data-emotion^="' + n + ' "]'),
        function (o) {
          for (
            var x = o.getAttribute('data-emotion').split(' '), m = 1;
            m < x.length;
            m++
          )
            a[x[m]] = !0
          c.push(o)
        }
      )
    var f,
      d = [It, Ct]
    {
      var g,
        h = [
          _t,
          Pt(function (o) {
            g.insert(o)
          }),
        ],
        u = Et(d.concat(s, h)),
        $ = function (x) {
          return U(Tt(x), u)
        }
      f = function (x, m, w, S) {
        ;(g = w),
          $(x ? x + '{' + m.styles + '}' : m.styles),
          S && (k.inserted[m.name] = !0)
      }
    }
    var k = {
      key: n,
      sheet: new pt({
        key: n,
        container: i,
        nonce: t.nonce,
        speedy: t.speedy,
        prepend: t.prepend,
        insertionPoint: t.insertionPoint,
      }),
      nonce: t.nonce,
      inserted: a,
      registered: {},
      insert: f,
    }
    return k.sheet.hydrate(c), k
  }
function ee(e) {
  return e !== null && typeof e == 'object' && e.constructor === Object
}
function I(e, t, n = {clone: !0}) {
  const r = n.clone ? T({}, e) : e
  return (
    ee(e) &&
      ee(t) &&
      Object.keys(t).forEach((s) => {
        s !== '__proto__' &&
          (ee(t[s]) && s in e && ee(e[s])
            ? (r[s] = I(e[s], t[s], n))
            : (r[s] = t[s]))
      }),
    r
  )
}
function F(e) {
  let t = 'https://mui.com/production-error/?code=' + e
  for (let n = 1; n < arguments.length; n += 1)
    t += '&args[]=' + encodeURIComponent(arguments[n])
  return 'Minified MUI error #' + e + '; visit ' + t + ' for the full message.'
}
function Lt(e) {
  if (typeof e != 'string') throw new Error(F(7))
  return e.charAt(0).toUpperCase() + e.slice(1)
}
function Dt(e, t) {
  const n = T({}, t)
  return (
    Object.keys(e).forEach((r) => {
      n[r] === void 0 && (n[r] = e[r])
    }),
    n
  )
}
function Wt(e, t) {
  return t ? I(e, t, {clone: !1}) : e
}
const Ke = {xs: 0, sm: 600, md: 900, lg: 1200, xl: 1536},
  ve = {
    keys: ['xs', 'sm', 'md', 'lg', 'xl'],
    up: (e) => `@media (min-width:${Ke[e]}px)`,
  }
function Ue(e, t, n) {
  const r = e.theme || {}
  if (Array.isArray(t)) {
    const a = r.breakpoints || ve
    return t.reduce((i, c, f) => ((i[a.up(a.keys[f])] = n(t[f])), i), {})
  }
  if (typeof t == 'object') {
    const a = r.breakpoints || ve
    return Object.keys(t).reduce((i, c) => {
      if (Object.keys(a.values || Ke).indexOf(c) !== -1) {
        const f = a.up(c)
        i[f] = n(t[c], c)
      } else {
        const f = c
        i[f] = t[f]
      }
      return i
    }, {})
  }
  return n(t)
}
function Qr(e = {}) {
  var t
  return (
    ((t = e.keys) == null
      ? void 0
      : t.reduce((r, s) => {
          const a = e.up(s)
          return (r[a] = {}), r
        }, {})) || {}
  )
}
function Vr(e, t) {
  return e.reduce((n, r) => {
    const s = n[r]
    return (!s || Object.keys(s).length === 0) && delete n[r], n
  }, t)
}
function Kt(e, t) {
  if (typeof e != 'object') return {}
  const n = {},
    r = Object.keys(t)
  return (
    Array.isArray(e)
      ? r.forEach((s, a) => {
          a < e.length && (n[s] = !0)
        })
      : r.forEach((s) => {
          e[s] != null && (n[s] = !0)
        }),
    n
  )
}
function en({values: e, breakpoints: t, base: n}) {
  const r = n || Kt(e, t),
    s = Object.keys(r)
  if (s.length === 0) return e
  let a
  return s.reduce(
    (i, c, f) => (
      Array.isArray(e)
        ? ((i[c] = e[f] != null ? e[f] : e[a]), (a = f))
        : typeof e == 'object'
        ? ((i[c] = e[c] != null ? e[c] : e[a]), (a = c))
        : (i[c] = e),
      i
    ),
    {}
  )
}
function ye(e, t, n = !0) {
  if (!t || typeof t != 'string') return null
  if (e && e.vars && n) {
    const r = `vars.${t}`
      .split('.')
      .reduce((s, a) => (s && s[a] ? s[a] : null), e)
    if (r != null) return r
  }
  return t.split('.').reduce((r, s) => (r && r[s] != null ? r[s] : null), e)
}
function Oe(e, t, n, r = n) {
  let s
  return (
    typeof e == 'function'
      ? (s = e(n))
      : Array.isArray(e)
      ? (s = e[n] || r)
      : (s = ye(e, n) || r),
    t && (s = t(s, r)),
    s
  )
}
function tn(e) {
  const {prop: t, cssProperty: n = e.prop, themeKey: r, transform: s} = e,
    a = (i) => {
      if (i[t] == null) return null
      const c = i[t],
        f = i.theme,
        d = ye(f, r) || {}
      return Ue(i, c, (h) => {
        let u = Oe(d, s, h)
        return (
          h === u &&
            typeof h == 'string' &&
            (u = Oe(d, s, `${t}${h === 'default' ? '' : Lt(h)}`, h)),
          n === !1 ? u : {[n]: u}
        )
      })
    }
  return (a.propTypes = {}), (a.filterProps = [t]), a
}
function Ut(e) {
  const t = {}
  return (n) => (t[n] === void 0 && (t[n] = e(n)), t[n])
}
const Nt = {m: 'margin', p: 'padding'},
  Ft = {
    t: 'Top',
    r: 'Right',
    b: 'Bottom',
    l: 'Left',
    x: ['Left', 'Right'],
    y: ['Top', 'Bottom'],
  },
  Ae = {marginX: 'mx', marginY: 'my', paddingX: 'px', paddingY: 'py'},
  Ht = Ut((e) => {
    if (e.length > 2)
      if (Ae[e]) e = Ae[e]
      else return [e]
    const [t, n] = e.split(''),
      r = Nt[t],
      s = Ft[n] || ''
    return Array.isArray(s) ? s.map((a) => r + a) : [r + s]
  }),
  Yt = [
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
  qt = [
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
  ],
  Ne = [...Yt, ...qt]
function Xt(e, t, n, r) {
  var s
  const a = (s = ye(e, t, !1)) != null ? s : n
  return typeof a == 'number'
    ? (i) => (typeof i == 'string' ? i : a * i)
    : Array.isArray(a)
    ? (i) => (typeof i == 'string' ? i : a[i])
    : typeof a == 'function'
    ? a
    : () => {}
}
function Fe(e) {
  return Xt(e, 'spacing', 8)
}
function Jt(e, t) {
  if (typeof t == 'string' || t == null) return t
  const n = Math.abs(t),
    r = e(n)
  return t >= 0 ? r : typeof r == 'number' ? -r : `-${r}`
}
function Zt(e, t) {
  return (n) => e.reduce((r, s) => ((r[s] = Jt(t, n)), r), {})
}
function Gt(e, t, n, r) {
  if (t.indexOf(n) === -1) return null
  const s = Ht(n),
    a = Zt(s, r),
    i = e[n]
  return Ue(e, i, a)
}
function Qt(e, t) {
  const n = Fe(e.theme)
  return Object.keys(e)
    .map((r) => Gt(e, t, r, n))
    .reduce(Wt, {})
}
function He(e) {
  return Qt(e, Ne)
}
He.propTypes = {}
He.filterProps = Ne
const Vt = ['values', 'unit', 'step'],
  er = (e) => {
    const t = Object.keys(e).map((n) => ({key: n, val: e[n]})) || []
    return (
      t.sort((n, r) => n.val - r.val),
      t.reduce((n, r) => T({}, n, {[r.key]: r.val}), {})
    )
  }
function tr(e) {
  const {
      values: t = {xs: 0, sm: 600, md: 900, lg: 1200, xl: 1536},
      unit: n = 'px',
      step: r = 5,
    } = e,
    s = H(e, Vt),
    a = er(t),
    i = Object.keys(a)
  function c(u) {
    return `@media (min-width:${typeof t[u] == 'number' ? t[u] : u}${n})`
  }
  function f(u) {
    return `@media (max-width:${
      (typeof t[u] == 'number' ? t[u] : u) - r / 100
    }${n})`
  }
  function d(u, $) {
    const k = i.indexOf($)
    return `@media (min-width:${
      typeof t[u] == 'number' ? t[u] : u
    }${n}) and (max-width:${
      (k !== -1 && typeof t[i[k]] == 'number' ? t[i[k]] : $) - r / 100
    }${n})`
  }
  function g(u) {
    return i.indexOf(u) + 1 < i.length ? d(u, i[i.indexOf(u) + 1]) : c(u)
  }
  function h(u) {
    const $ = i.indexOf(u)
    return $ === 0
      ? c(i[1])
      : $ === i.length - 1
      ? f(i[$])
      : d(u, i[i.indexOf(u) + 1]).replace('@media', '@media not all and')
  }
  return T(
    {keys: i, values: a, up: c, down: f, between: d, only: g, not: h, unit: n},
    s
  )
}
const rr = {borderRadius: 4},
  nr = rr
function sr(e = 8) {
  if (e.mui) return e
  const t = Fe({spacing: e}),
    n = (...r) =>
      (r.length === 0 ? [1] : r)
        .map((a) => {
          const i = t(a)
          return typeof i == 'number' ? `${i}px` : i
        })
        .join(' ')
  return (n.mui = !0), n
}
const ar = ['breakpoints', 'palette', 'spacing', 'shape']
function Ye(e = {}, ...t) {
  const {breakpoints: n = {}, palette: r = {}, spacing: s, shape: a = {}} = e,
    i = H(e, ar),
    c = tr(n),
    f = sr(s)
  let d = I(
    {
      breakpoints: c,
      direction: 'ltr',
      components: {},
      palette: T({mode: 'light'}, r),
      spacing: f,
      shape: T({}, nr, a),
    },
    i
  )
  return (d = t.reduce((g, h) => I(g, h), d)), d
}
const ir = pe.createContext(null),
  cr = ir
function or() {
  return pe.useContext(cr)
}
function fr(e) {
  return Object.keys(e).length === 0
}
function ur(e = null) {
  const t = or()
  return !t || fr(t) ? e : t
}
const dr = Ye()
function hr(e = dr) {
  return ur(e)
}
function pr(e) {
  const {theme: t, name: n, props: r} = e
  return !t ||
    !t.components ||
    !t.components[n] ||
    !t.components[n].defaultProps
    ? r
    : Dt(t.components[n].defaultProps, r)
}
function gr({props: e, name: t, defaultTheme: n}) {
  const r = hr(n)
  return pr({theme: r, name: t, props: e})
}
function xe(e, t = 0, n = 1) {
  return Math.min(Math.max(t, e), n)
}
function lr(e) {
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
function C(e) {
  if (e.type) return e
  if (e.charAt(0) === '#') return C(lr(e))
  const t = e.indexOf('('),
    n = e.substring(0, t)
  if (['rgb', 'rgba', 'hsl', 'hsla', 'color'].indexOf(n) === -1)
    throw new Error(F(9, e))
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
      throw new Error(F(10, s))
  } else r = r.split(',')
  return (r = r.map((a) => parseFloat(a))), {type: n, values: r, colorSpace: s}
}
function fe(e) {
  const {type: t, colorSpace: n} = e
  let {values: r} = e
  return (
    t.indexOf('rgb') !== -1
      ? (r = r.map((s, a) => (a < 3 ? parseInt(s, 10) : s)))
      : t.indexOf('hsl') !== -1 && ((r[1] = `${r[1]}%`), (r[2] = `${r[2]}%`)),
    t.indexOf('color') !== -1
      ? (r = `${n} ${r.join(' ')}`)
      : (r = `${r.join(', ')}`),
    `${t}(${r})`
  )
}
function mr(e) {
  e = C(e)
  const {values: t} = e,
    n = t[0],
    r = t[1] / 100,
    s = t[2] / 100,
    a = r * Math.min(s, 1 - s),
    i = (d, g = (d + n / 30) % 12) =>
      s - a * Math.max(Math.min(g - 3, 9 - g, 1), -1)
  let c = 'rgb'
  const f = [
    Math.round(i(0) * 255),
    Math.round(i(8) * 255),
    Math.round(i(4) * 255),
  ]
  return (
    e.type === 'hsla' && ((c += 'a'), f.push(t[3])), fe({type: c, values: f})
  )
}
function Te(e) {
  e = C(e)
  let t = e.type === 'hsl' || e.type === 'hsla' ? C(mr(e)).values : e.values
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
function br(e, t) {
  const n = Te(e),
    r = Te(t)
  return (Math.max(n, r) + 0.05) / (Math.min(n, r) + 0.05)
}
function rn(e, t) {
  return (
    (e = C(e)),
    (t = xe(t)),
    (e.type === 'rgb' || e.type === 'hsl') && (e.type += 'a'),
    e.type === 'color' ? (e.values[3] = `/${t}`) : (e.values[3] = t),
    fe(e)
  )
}
function yr(e, t) {
  if (((e = C(e)), (t = xe(t)), e.type.indexOf('hsl') !== -1))
    e.values[2] *= 1 - t
  else if (e.type.indexOf('rgb') !== -1 || e.type.indexOf('color') !== -1)
    for (let n = 0; n < 3; n += 1) e.values[n] *= 1 - t
  return fe(e)
}
function xr(e, t) {
  if (((e = C(e)), (t = xe(t)), e.type.indexOf('hsl') !== -1))
    e.values[2] += (100 - e.values[2]) * t
  else if (e.type.indexOf('rgb') !== -1)
    for (let n = 0; n < 3; n += 1) e.values[n] += (255 - e.values[n]) * t
  else if (e.type.indexOf('color') !== -1)
    for (let n = 0; n < 3; n += 1) e.values[n] += (1 - e.values[n]) * t
  return fe(e)
}
function $r(e, t) {
  return T(
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
const kr = ['mode', 'contrastThreshold', 'tonalOffset'],
  Se = {
    text: {
      primary: 'rgba(0, 0, 0, 0.87)',
      secondary: 'rgba(0, 0, 0, 0.6)',
      disabled: 'rgba(0, 0, 0, 0.38)',
    },
    divider: 'rgba(0, 0, 0, 0.12)',
    background: {paper: J.white, default: J.white},
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
  ue = {
    text: {
      primary: J.white,
      secondary: 'rgba(255, 255, 255, 0.7)',
      disabled: 'rgba(255, 255, 255, 0.5)',
      icon: 'rgba(255, 255, 255, 0.5)',
    },
    divider: 'rgba(255, 255, 255, 0.12)',
    background: {paper: '#121212', default: '#121212'},
    action: {
      active: J.white,
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
function _e(e, t, n, r) {
  const s = r.light || r,
    a = r.dark || r * 1.5
  e[t] ||
    (e.hasOwnProperty(n)
      ? (e[t] = e[n])
      : t === 'light'
      ? (e.light = xr(e.main, s))
      : t === 'dark' && (e.dark = yr(e.main, a)))
}
function wr(e = 'light') {
  return e === 'dark'
    ? {main: D[200], light: D[50], dark: D[400]}
    : {main: D[700], light: D[400], dark: D[800]}
}
function vr(e = 'light') {
  return e === 'dark'
    ? {main: L[200], light: L[50], dark: L[400]}
    : {main: L[500], light: L[300], dark: L[700]}
}
function Or(e = 'light') {
  return e === 'dark'
    ? {main: z[500], light: z[300], dark: z[700]}
    : {main: z[700], light: z[400], dark: z[800]}
}
function Ar(e = 'light') {
  return e === 'dark'
    ? {main: W[400], light: W[300], dark: W[700]}
    : {main: W[700], light: W[500], dark: W[900]}
}
function Tr(e = 'light') {
  return e === 'dark'
    ? {main: K[400], light: K[300], dark: K[700]}
    : {main: K[800], light: K[500], dark: K[900]}
}
function Sr(e = 'light') {
  return e === 'dark'
    ? {main: q[400], light: q[300], dark: q[700]}
    : {main: '#ed6c02', light: q[500], dark: q[900]}
}
function _r(e) {
  const {mode: t = 'light', contrastThreshold: n = 3, tonalOffset: r = 0.2} = e,
    s = H(e, kr),
    a = e.primary || wr(t),
    i = e.secondary || vr(t),
    c = e.error || Or(t),
    f = e.info || Ar(t),
    d = e.success || Tr(t),
    g = e.warning || Sr(t)
  function h(o) {
    return br(o, ue.text.primary) >= n ? ue.text.primary : Se.text.primary
  }
  const u = ({
      color: o,
      name: x,
      mainShade: m = 500,
      lightShade: w = 300,
      darkShade: S = 700,
    }) => {
      if (
        ((o = T({}, o)),
        !o.main && o[m] && (o.main = o[m]),
        !o.hasOwnProperty('main'))
      )
        throw new Error(F(11, x ? ` (${x})` : '', m))
      if (typeof o.main != 'string')
        throw new Error(F(12, x ? ` (${x})` : '', JSON.stringify(o.main)))
      return (
        _e(o, 'light', w, r),
        _e(o, 'dark', S, r),
        o.contrastText || (o.contrastText = h(o.main)),
        o
      )
    },
    $ = {dark: ue, light: Se}
  return I(
    T(
      {
        common: T({}, J),
        mode: t,
        primary: u({color: a, name: 'primary'}),
        secondary: u({
          color: i,
          name: 'secondary',
          mainShade: 'A400',
          lightShade: 'A200',
          darkShade: 'A700',
        }),
        error: u({color: c, name: 'error'}),
        warning: u({color: g, name: 'warning'}),
        info: u({color: f, name: 'info'}),
        success: u({color: d, name: 'success'}),
        grey: ut,
        contrastThreshold: n,
        getContrastText: h,
        augmentColor: u,
        tonalOffset: r,
      },
      $[t]
    ),
    s
  )
}
const Er = [
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
function Pr(e) {
  return Math.round(e * 1e5) / 1e5
}
const Ee = {textTransform: 'uppercase'},
  Pe = '"Roboto", "Helvetica", "Arial", sans-serif'
function Rr(e, t) {
  const n = typeof t == 'function' ? t(e) : t,
    {
      fontFamily: r = Pe,
      fontSize: s = 14,
      fontWeightLight: a = 300,
      fontWeightRegular: i = 400,
      fontWeightMedium: c = 500,
      fontWeightBold: f = 700,
      htmlFontSize: d = 16,
      allVariants: g,
      pxToRem: h,
    } = n,
    u = H(n, Er),
    $ = s / 14,
    k = h || ((m) => `${(m / d) * $}rem`),
    o = (m, w, S, M, B) =>
      T(
        {fontFamily: r, fontWeight: m, fontSize: k(w), lineHeight: S},
        r === Pe ? {letterSpacing: `${Pr(M / w)}em`} : {},
        B,
        g
      ),
    x = {
      h1: o(a, 96, 1.167, -1.5),
      h2: o(a, 60, 1.2, -0.5),
      h3: o(i, 48, 1.167, 0),
      h4: o(i, 34, 1.235, 0.25),
      h5: o(i, 24, 1.334, 0),
      h6: o(c, 20, 1.6, 0.15),
      subtitle1: o(i, 16, 1.75, 0.15),
      subtitle2: o(c, 14, 1.57, 0.1),
      body1: o(i, 16, 1.5, 0.15),
      body2: o(i, 14, 1.43, 0.15),
      button: o(c, 14, 1.75, 0.4, Ee),
      caption: o(i, 12, 1.66, 0.4),
      overline: o(i, 12, 2.66, 1, Ee),
    }
  return I(
    T(
      {
        htmlFontSize: d,
        pxToRem: k,
        fontFamily: r,
        fontSize: s,
        fontWeightLight: a,
        fontWeightRegular: i,
        fontWeightMedium: c,
        fontWeightBold: f,
      },
      x
    ),
    u,
    {clone: !1}
  )
}
const jr = 0.2,
  Br = 0.14,
  Ir = 0.12
function b(...e) {
  return [
    `${e[0]}px ${e[1]}px ${e[2]}px ${e[3]}px rgba(0,0,0,${jr})`,
    `${e[4]}px ${e[5]}px ${e[6]}px ${e[7]}px rgba(0,0,0,${Br})`,
    `${e[8]}px ${e[9]}px ${e[10]}px ${e[11]}px rgba(0,0,0,${Ir})`,
  ].join(',')
}
const Cr = [
    'none',
    b(0, 2, 1, -1, 0, 1, 1, 0, 0, 1, 3, 0),
    b(0, 3, 1, -2, 0, 2, 2, 0, 0, 1, 5, 0),
    b(0, 3, 3, -2, 0, 3, 4, 0, 0, 1, 8, 0),
    b(0, 2, 4, -1, 0, 4, 5, 0, 0, 1, 10, 0),
    b(0, 3, 5, -1, 0, 5, 8, 0, 0, 1, 14, 0),
    b(0, 3, 5, -1, 0, 6, 10, 0, 0, 1, 18, 0),
    b(0, 4, 5, -2, 0, 7, 10, 1, 0, 2, 16, 1),
    b(0, 5, 5, -3, 0, 8, 10, 1, 0, 3, 14, 2),
    b(0, 5, 6, -3, 0, 9, 12, 1, 0, 3, 16, 2),
    b(0, 6, 6, -3, 0, 10, 14, 1, 0, 4, 18, 3),
    b(0, 6, 7, -4, 0, 11, 15, 1, 0, 4, 20, 3),
    b(0, 7, 8, -4, 0, 12, 17, 2, 0, 5, 22, 4),
    b(0, 7, 8, -4, 0, 13, 19, 2, 0, 5, 24, 4),
    b(0, 7, 9, -4, 0, 14, 21, 2, 0, 5, 26, 4),
    b(0, 8, 9, -5, 0, 15, 22, 2, 0, 6, 28, 5),
    b(0, 8, 10, -5, 0, 16, 24, 2, 0, 6, 30, 5),
    b(0, 8, 11, -5, 0, 17, 26, 2, 0, 6, 32, 5),
    b(0, 9, 11, -5, 0, 18, 28, 2, 0, 7, 34, 6),
    b(0, 9, 12, -6, 0, 19, 29, 2, 0, 7, 36, 6),
    b(0, 10, 13, -6, 0, 20, 31, 3, 0, 8, 38, 7),
    b(0, 10, 13, -6, 0, 21, 33, 3, 0, 8, 40, 7),
    b(0, 10, 14, -6, 0, 22, 35, 3, 0, 8, 42, 7),
    b(0, 11, 14, -7, 0, 23, 36, 3, 0, 9, 44, 8),
    b(0, 11, 15, -7, 0, 24, 38, 3, 0, 9, 46, 8),
  ],
  Mr = Cr,
  zr = ['duration', 'easing', 'delay'],
  Lr = {
    easeInOut: 'cubic-bezier(0.4, 0, 0.2, 1)',
    easeOut: 'cubic-bezier(0.0, 0, 0.2, 1)',
    easeIn: 'cubic-bezier(0.4, 0, 1, 1)',
    sharp: 'cubic-bezier(0.4, 0, 0.6, 1)',
  },
  Dr = {
    shortest: 150,
    shorter: 200,
    short: 250,
    standard: 300,
    complex: 375,
    enteringScreen: 225,
    leavingScreen: 195,
  }
function Re(e) {
  return `${Math.round(e)}ms`
}
function Wr(e) {
  if (!e) return 0
  const t = e / 36
  return Math.round((4 + 15 * t ** 0.25 + t / 5) * 10)
}
function Kr(e) {
  const t = T({}, Lr, e.easing),
    n = T({}, Dr, e.duration)
  return T(
    {
      getAutoHeightDuration: Wr,
      create: (s = ['all'], a = {}) => {
        const {
          duration: i = n.standard,
          easing: c = t.easeInOut,
          delay: f = 0,
        } = a
        return (
          H(a, zr),
          (Array.isArray(s) ? s : [s])
            .map(
              (d) =>
                `${d} ${typeof i == 'string' ? i : Re(i)} ${c} ${
                  typeof f == 'string' ? f : Re(f)
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
const Ur = {
    mobileStepper: 1e3,
    fab: 1050,
    speedDial: 1050,
    appBar: 1100,
    drawer: 1200,
    modal: 1300,
    snackbar: 1400,
    tooltip: 1500,
  },
  Nr = Ur,
  Fr = [
    'breakpoints',
    'mixins',
    'spacing',
    'palette',
    'transitions',
    'typography',
    'shape',
  ]
function Hr(e = {}, ...t) {
  const {
      mixins: n = {},
      palette: r = {},
      transitions: s = {},
      typography: a = {},
    } = e,
    i = H(e, Fr)
  if (e.vars) throw new Error(F(18))
  const c = _r(r),
    f = Ye(e)
  let d = I(f, {
    mixins: $r(f.breakpoints, n),
    palette: c,
    shadows: Mr.slice(),
    typography: Rr(c, a),
    transitions: Kr(s),
    zIndex: T({}, Nr),
  })
  return (d = I(d, i)), (d = t.reduce((g, h) => I(g, h), d)), d
}
const Yr = Hr(),
  qr = Yr
function nn({props: e, name: t}) {
  return gr({props: e, name: t, defaultTheme: qr})
}
export {
  He as A,
  Qr as B,
  Vr as C,
  Ye as D,
  Ve as F,
  H as _,
  Hr as a,
  tt as b,
  Gr as c,
  Lt as d,
  rn as e,
  hr as f,
  yr as g,
  Dt as h,
  en as i,
  et as j,
  Ue as k,
  xr as l,
  ur as m,
  pr as n,
  ee as o,
  qr as p,
  F as q,
  z as r,
  I as s,
  Zr as t,
  nn as u,
  Wt as v,
  tn as w,
  Xt as x,
  Jt as y,
  Ke as z,
}
//# sourceMappingURL=useThemeProps-3be52b90.js.map
