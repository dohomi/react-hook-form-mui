import {
  a3 as Yt,
  b as Et,
  a4 as _t,
} from './TextareaAutosizeElement-36296a48.js'
import {_ as Ut, c as v} from './assertThisInitialized-4401020c.js'
import {_ as Nt, a as Ke} from './isNativeReflectConstruct-e378569d.js'
import {g as Wt} from './index-f1f2c4b1.js'
function b(i) {
  if (i === null || i === !0 || i === !1) return NaN
  var a = Number(i)
  return isNaN(a) ? a : a < 0 ? Math.ceil(a) : Math.floor(a)
}
function G(i) {
  '@babel/helpers - typeof'
  return (
    (G =
      typeof Symbol == 'function' && typeof Symbol.iterator == 'symbol'
        ? function (a) {
            return typeof a
          }
        : function (a) {
            return a &&
              typeof Symbol == 'function' &&
              a.constructor === Symbol &&
              a !== Symbol.prototype
              ? 'symbol'
              : typeof a
          }),
    G(i)
  )
}
function c(i, a) {
  if (a.length < i)
    throw new TypeError(
      i +
        ' argument' +
        (i > 1 ? 's' : '') +
        ' required, but only ' +
        a.length +
        ' present'
    )
}
function d(i) {
  c(1, arguments)
  var a = Object.prototype.toString.call(i)
  return i instanceof Date || (G(i) === 'object' && a === '[object Date]')
    ? new Date(i.getTime())
    : typeof i == 'number' || a === '[object Number]'
    ? new Date(i)
    : ((typeof i == 'string' || a === '[object String]') &&
        typeof console < 'u' &&
        (console.warn(
          "Starting with v2.0.0-beta.1 date-fns doesn't accept strings as date arguments. Please use `parseISO` to parse strings. See: https://github.com/date-fns/date-fns/blob/master/docs/upgradeGuide.md#string-arguments"
        ),
        console.warn(new Error().stack)),
      new Date(NaN))
}
function Ie(i, a) {
  c(2, arguments)
  var r = d(i),
    t = b(a)
  return isNaN(t) ? new Date(NaN) : (t && r.setDate(r.getDate() + t), r)
}
function Oe(i, a) {
  c(2, arguments)
  var r = d(i).getTime(),
    t = b(a)
  return new Date(r + t)
}
function Ht(i, a) {
  c(2, arguments)
  var r = b(a)
  return Oe(i, r * 1e3)
}
var It = 6e4
function Lt(i, a) {
  c(2, arguments)
  var r = b(a)
  return Oe(i, r * It)
}
var Ft = 36e5
function St(i, a) {
  c(2, arguments)
  var r = b(a)
  return Oe(i, r * Ft)
}
function $t(i, a) {
  c(2, arguments)
  var r = b(a),
    t = r * 7
  return Ie(i, t)
}
function Te(i, a) {
  c(2, arguments)
  var r = d(i),
    t = b(a)
  if (isNaN(t)) return new Date(NaN)
  if (!t) return r
  var e = r.getDate(),
    o = new Date(r.getTime())
  o.setMonth(r.getMonth() + t + 1, 0)
  var n = o.getDate()
  return e >= n ? o : (r.setFullYear(o.getFullYear(), o.getMonth(), e), r)
}
function Je(i, a) {
  c(2, arguments)
  var r = b(a)
  return Te(i, r * 12)
}
function At(i, a) {
  c(2, arguments)
  var r = d(i),
    t = d(a)
  return r.getFullYear() - t.getFullYear()
}
function ve(i, a) {
  c(2, arguments)
  var r = d(i),
    t = d(a),
    e = r.getTime() - t.getTime()
  return e < 0 ? -1 : e > 0 ? 1 : e
}
function Rt(i, a) {
  c(2, arguments)
  var r = d(i),
    t = d(a),
    e = ve(r, t),
    o = Math.abs(At(r, t))
  r.setFullYear(1584), t.setFullYear(1584)
  var n = ve(r, t) === -e,
    u = e * (o - Number(n))
  return u === 0 ? 0 : u
}
function qt(i, a) {
  c(2, arguments)
  var r = d(i),
    t = d(a),
    e = r.getFullYear() - t.getFullYear(),
    o = r.getMonth() - t.getMonth()
  return e * 12 + o
}
function Le(i) {
  c(1, arguments)
  var a = d(i)
  return a.setHours(23, 59, 59, 999), a
}
function Fe(i) {
  c(1, arguments)
  var a = d(i),
    r = a.getMonth()
  return (
    a.setFullYear(a.getFullYear(), r + 1, 0), a.setHours(23, 59, 59, 999), a
  )
}
function Qt(i) {
  c(1, arguments)
  var a = d(i)
  return Le(a).getTime() === Fe(a).getTime()
}
function ct(i, a) {
  c(2, arguments)
  var r = d(i),
    t = d(a),
    e = ve(r, t),
    o = Math.abs(qt(r, t)),
    n
  if (o < 1) n = 0
  else {
    r.getMonth() === 1 && r.getDate() > 27 && r.setDate(30),
      r.setMonth(r.getMonth() - e * o)
    var u = ve(r, t) === -e
    Qt(d(i)) && o === 1 && ve(i, t) === 1 && (u = !1), (n = e * (o - Number(u)))
  }
  return n === 0 ? 0 : n
}
var et = {
    ceil: Math.ceil,
    round: Math.round,
    floor: Math.floor,
    trunc: function (a) {
      return a < 0 ? Math.ceil(a) : Math.floor(a)
    },
  },
  Bt = 'trunc'
function he(i) {
  return i ? et[i] : et[Bt]
}
function Xt(i, a, r) {
  c(2, arguments)
  var t = ct(i, a) / 3
  return he(r == null ? void 0 : r.roundingMethod)(t)
}
function be(i) {
  var a = new Date(
    Date.UTC(
      i.getFullYear(),
      i.getMonth(),
      i.getDate(),
      i.getHours(),
      i.getMinutes(),
      i.getSeconds(),
      i.getMilliseconds()
    )
  )
  return a.setUTCFullYear(i.getFullYear()), i.getTime() - a.getTime()
}
function ae(i) {
  c(1, arguments)
  var a = d(i)
  return a.setHours(0, 0, 0, 0), a
}
var Gt = 864e5
function jt(i, a) {
  c(2, arguments)
  var r = ae(i),
    t = ae(a),
    e = r.getTime() - be(r),
    o = t.getTime() - be(t)
  return Math.round((e - o) / Gt)
}
function tt(i, a) {
  var r =
    i.getFullYear() - a.getFullYear() ||
    i.getMonth() - a.getMonth() ||
    i.getDate() - a.getDate() ||
    i.getHours() - a.getHours() ||
    i.getMinutes() - a.getMinutes() ||
    i.getSeconds() - a.getSeconds() ||
    i.getMilliseconds() - a.getMilliseconds()
  return r < 0 ? -1 : r > 0 ? 1 : r
}
function dt(i, a) {
  c(2, arguments)
  var r = d(i),
    t = d(a),
    e = tt(r, t),
    o = Math.abs(jt(r, t))
  r.setDate(r.getDate() - e * o)
  var n = +(tt(r, t) === -e),
    u = e * (o - n)
  return u === 0 ? 0 : u
}
function zt(i, a, r) {
  c(2, arguments)
  var t = dt(i, a) / 7
  return he(r == null ? void 0 : r.roundingMethod)(t)
}
var Pe = 6e4,
  ke = 36e5,
  Vt = 1e3
function Ce(i, a) {
  return c(2, arguments), d(i).getTime() - d(a).getTime()
}
function Zt(i, a, r) {
  c(2, arguments)
  var t = Ce(i, a) / ke
  return he(r == null ? void 0 : r.roundingMethod)(t)
}
function Kt(i, a, r) {
  c(2, arguments)
  var t = Ce(i, a) / Pe
  return he(r == null ? void 0 : r.roundingMethod)(t)
}
function Jt(i, a, r) {
  c(2, arguments)
  var t = Ce(i, a) / 1e3
  return he(r == null ? void 0 : r.roundingMethod)(t)
}
function er(i, a) {
  var r
  c(1, arguments)
  var t = i || {},
    e = d(t.start),
    o = d(t.end),
    n = o.getTime()
  if (!(e.getTime() <= n)) throw new RangeError('Invalid interval')
  var u = [],
    s = e
  s.setHours(0, 0, 0, 0)
  var l = Number(
    (r = a == null ? void 0 : a.step) !== null && r !== void 0 ? r : 1
  )
  if (l < 1 || isNaN(l))
    throw new RangeError('`options.step` must be a number greater than 1')
  for (; s.getTime() <= n; )
    u.push(d(s)), s.setDate(s.getDate() + l), s.setHours(0, 0, 0, 0)
  return u
}
var tr = {}
function q() {
  return tr
}
function _e(i, a) {
  var r, t, e, o, n, u, s, l
  c(1, arguments)
  var m = q(),
    h = b(
      (r =
        (t =
          (e =
            (o = a == null ? void 0 : a.weekStartsOn) !== null && o !== void 0
              ? o
              : a == null ||
                (n = a.locale) === null ||
                n === void 0 ||
                (u = n.options) === null ||
                u === void 0
              ? void 0
              : u.weekStartsOn) !== null && e !== void 0
            ? e
            : m.weekStartsOn) !== null && t !== void 0
          ? t
          : (s = m.locale) === null ||
            s === void 0 ||
            (l = s.options) === null ||
            l === void 0
          ? void 0
          : l.weekStartsOn) !== null && r !== void 0
        ? r
        : 0
    )
  if (!(h >= 0 && h <= 6))
    throw new RangeError('weekStartsOn must be between 0 and 6 inclusively')
  var w = d(i),
    g = w.getDay(),
    O = (g < h ? -7 : 0) + 6 - (g - h)
  return w.setDate(w.getDate() + O), w.setHours(23, 59, 59, 999), w
}
function Ue(i) {
  c(1, arguments)
  var a = d(i),
    r = a.getFullYear()
  return a.setFullYear(r + 1, 0, 0), a.setHours(23, 59, 59, 999), a
}
function rr(i) {
  return (
    c(1, arguments),
    i instanceof Date ||
      (G(i) === 'object' &&
        Object.prototype.toString.call(i) === '[object Date]')
  )
}
function ft(i) {
  if ((c(1, arguments), !rr(i) && typeof i != 'number')) return !1
  var a = d(i)
  return !isNaN(Number(a))
}
function vt(i, a) {
  c(2, arguments)
  var r = b(a)
  return Oe(i, -r)
}
var ar = 864e5
function nr(i) {
  c(1, arguments)
  var a = d(i),
    r = a.getTime()
  a.setUTCMonth(0, 1), a.setUTCHours(0, 0, 0, 0)
  var t = a.getTime(),
    e = r - t
  return Math.floor(e / ar) + 1
}
function ne(i) {
  c(1, arguments)
  var a = 1,
    r = d(i),
    t = r.getUTCDay(),
    e = (t < a ? 7 : 0) + t - a
  return r.setUTCDate(r.getUTCDate() - e), r.setUTCHours(0, 0, 0, 0), r
}
function ht(i) {
  c(1, arguments)
  var a = d(i),
    r = a.getUTCFullYear(),
    t = new Date(0)
  t.setUTCFullYear(r + 1, 0, 4), t.setUTCHours(0, 0, 0, 0)
  var e = ne(t),
    o = new Date(0)
  o.setUTCFullYear(r, 0, 4), o.setUTCHours(0, 0, 0, 0)
  var n = ne(o)
  return a.getTime() >= e.getTime()
    ? r + 1
    : a.getTime() >= n.getTime()
    ? r
    : r - 1
}
function ir(i) {
  c(1, arguments)
  var a = ht(i),
    r = new Date(0)
  r.setUTCFullYear(a, 0, 4), r.setUTCHours(0, 0, 0, 0)
  var t = ne(r)
  return t
}
var or = 6048e5
function mt(i) {
  c(1, arguments)
  var a = d(i),
    r = ne(a).getTime() - ir(a).getTime()
  return Math.round(r / or) + 1
}
function te(i, a) {
  var r, t, e, o, n, u, s, l
  c(1, arguments)
  var m = q(),
    h = b(
      (r =
        (t =
          (e =
            (o = a == null ? void 0 : a.weekStartsOn) !== null && o !== void 0
              ? o
              : a == null ||
                (n = a.locale) === null ||
                n === void 0 ||
                (u = n.options) === null ||
                u === void 0
              ? void 0
              : u.weekStartsOn) !== null && e !== void 0
            ? e
            : m.weekStartsOn) !== null && t !== void 0
          ? t
          : (s = m.locale) === null ||
            s === void 0 ||
            (l = s.options) === null ||
            l === void 0
          ? void 0
          : l.weekStartsOn) !== null && r !== void 0
        ? r
        : 0
    )
  if (!(h >= 0 && h <= 6))
    throw new RangeError('weekStartsOn must be between 0 and 6 inclusively')
  var w = d(i),
    g = w.getUTCDay(),
    O = (g < h ? 7 : 0) + g - h
  return w.setUTCDate(w.getUTCDate() - O), w.setUTCHours(0, 0, 0, 0), w
}
function Ae(i, a) {
  var r, t, e, o, n, u, s, l
  c(1, arguments)
  var m = d(i),
    h = m.getUTCFullYear(),
    w = q(),
    g = b(
      (r =
        (t =
          (e =
            (o = a == null ? void 0 : a.firstWeekContainsDate) !== null &&
            o !== void 0
              ? o
              : a == null ||
                (n = a.locale) === null ||
                n === void 0 ||
                (u = n.options) === null ||
                u === void 0
              ? void 0
              : u.firstWeekContainsDate) !== null && e !== void 0
            ? e
            : w.firstWeekContainsDate) !== null && t !== void 0
          ? t
          : (s = w.locale) === null ||
            s === void 0 ||
            (l = s.options) === null ||
            l === void 0
          ? void 0
          : l.firstWeekContainsDate) !== null && r !== void 0
        ? r
        : 1
    )
  if (!(g >= 1 && g <= 7))
    throw new RangeError(
      'firstWeekContainsDate must be between 1 and 7 inclusively'
    )
  var O = new Date(0)
  O.setUTCFullYear(h + 1, 0, g), O.setUTCHours(0, 0, 0, 0)
  var W = te(O, a),
    _ = new Date(0)
  _.setUTCFullYear(h, 0, g), _.setUTCHours(0, 0, 0, 0)
  var I = te(_, a)
  return m.getTime() >= W.getTime()
    ? h + 1
    : m.getTime() >= I.getTime()
    ? h
    : h - 1
}
function ur(i, a) {
  var r, t, e, o, n, u, s, l
  c(1, arguments)
  var m = q(),
    h = b(
      (r =
        (t =
          (e =
            (o = a == null ? void 0 : a.firstWeekContainsDate) !== null &&
            o !== void 0
              ? o
              : a == null ||
                (n = a.locale) === null ||
                n === void 0 ||
                (u = n.options) === null ||
                u === void 0
              ? void 0
              : u.firstWeekContainsDate) !== null && e !== void 0
            ? e
            : m.firstWeekContainsDate) !== null && t !== void 0
          ? t
          : (s = m.locale) === null ||
            s === void 0 ||
            (l = s.options) === null ||
            l === void 0
          ? void 0
          : l.firstWeekContainsDate) !== null && r !== void 0
        ? r
        : 1
    ),
    w = Ae(i, a),
    g = new Date(0)
  g.setUTCFullYear(w, 0, h), g.setUTCHours(0, 0, 0, 0)
  var O = te(g, a)
  return O
}
var sr = 6048e5
function gt(i, a) {
  c(1, arguments)
  var r = d(i),
    t = te(r, a).getTime() - ur(r, a).getTime()
  return Math.round(t / sr) + 1
}
function y(i, a) {
  for (var r = i < 0 ? '-' : '', t = Math.abs(i).toString(); t.length < a; )
    t = '0' + t
  return r + t
}
var lr = {
  y: function (a, r) {
    var t = a.getUTCFullYear(),
      e = t > 0 ? t : 1 - t
    return y(r === 'yy' ? e % 100 : e, r.length)
  },
  M: function (a, r) {
    var t = a.getUTCMonth()
    return r === 'M' ? String(t + 1) : y(t + 1, 2)
  },
  d: function (a, r) {
    return y(a.getUTCDate(), r.length)
  },
  a: function (a, r) {
    var t = a.getUTCHours() / 12 >= 1 ? 'pm' : 'am'
    switch (r) {
      case 'a':
      case 'aa':
        return t.toUpperCase()
      case 'aaa':
        return t
      case 'aaaaa':
        return t[0]
      case 'aaaa':
      default:
        return t === 'am' ? 'a.m.' : 'p.m.'
    }
  },
  h: function (a, r) {
    return y(a.getUTCHours() % 12 || 12, r.length)
  },
  H: function (a, r) {
    return y(a.getUTCHours(), r.length)
  },
  m: function (a, r) {
    return y(a.getUTCMinutes(), r.length)
  },
  s: function (a, r) {
    return y(a.getUTCSeconds(), r.length)
  },
  S: function (a, r) {
    var t = r.length,
      e = a.getUTCMilliseconds(),
      o = Math.floor(e * Math.pow(10, t - 3))
    return y(o, r.length)
  },
}
const V = lr
var re = {
    am: 'am',
    pm: 'pm',
    midnight: 'midnight',
    noon: 'noon',
    morning: 'morning',
    afternoon: 'afternoon',
    evening: 'evening',
    night: 'night',
  },
  cr = {
    G: function (a, r, t) {
      var e = a.getUTCFullYear() > 0 ? 1 : 0
      switch (r) {
        case 'G':
        case 'GG':
        case 'GGG':
          return t.era(e, {width: 'abbreviated'})
        case 'GGGGG':
          return t.era(e, {width: 'narrow'})
        case 'GGGG':
        default:
          return t.era(e, {width: 'wide'})
      }
    },
    y: function (a, r, t) {
      if (r === 'yo') {
        var e = a.getUTCFullYear(),
          o = e > 0 ? e : 1 - e
        return t.ordinalNumber(o, {unit: 'year'})
      }
      return V.y(a, r)
    },
    Y: function (a, r, t, e) {
      var o = Ae(a, e),
        n = o > 0 ? o : 1 - o
      if (r === 'YY') {
        var u = n % 100
        return y(u, 2)
      }
      return r === 'Yo' ? t.ordinalNumber(n, {unit: 'year'}) : y(n, r.length)
    },
    R: function (a, r) {
      var t = ht(a)
      return y(t, r.length)
    },
    u: function (a, r) {
      var t = a.getUTCFullYear()
      return y(t, r.length)
    },
    Q: function (a, r, t) {
      var e = Math.ceil((a.getUTCMonth() + 1) / 3)
      switch (r) {
        case 'Q':
          return String(e)
        case 'QQ':
          return y(e, 2)
        case 'Qo':
          return t.ordinalNumber(e, {unit: 'quarter'})
        case 'QQQ':
          return t.quarter(e, {width: 'abbreviated', context: 'formatting'})
        case 'QQQQQ':
          return t.quarter(e, {width: 'narrow', context: 'formatting'})
        case 'QQQQ':
        default:
          return t.quarter(e, {width: 'wide', context: 'formatting'})
      }
    },
    q: function (a, r, t) {
      var e = Math.ceil((a.getUTCMonth() + 1) / 3)
      switch (r) {
        case 'q':
          return String(e)
        case 'qq':
          return y(e, 2)
        case 'qo':
          return t.ordinalNumber(e, {unit: 'quarter'})
        case 'qqq':
          return t.quarter(e, {width: 'abbreviated', context: 'standalone'})
        case 'qqqqq':
          return t.quarter(e, {width: 'narrow', context: 'standalone'})
        case 'qqqq':
        default:
          return t.quarter(e, {width: 'wide', context: 'standalone'})
      }
    },
    M: function (a, r, t) {
      var e = a.getUTCMonth()
      switch (r) {
        case 'M':
        case 'MM':
          return V.M(a, r)
        case 'Mo':
          return t.ordinalNumber(e + 1, {unit: 'month'})
        case 'MMM':
          return t.month(e, {width: 'abbreviated', context: 'formatting'})
        case 'MMMMM':
          return t.month(e, {width: 'narrow', context: 'formatting'})
        case 'MMMM':
        default:
          return t.month(e, {width: 'wide', context: 'formatting'})
      }
    },
    L: function (a, r, t) {
      var e = a.getUTCMonth()
      switch (r) {
        case 'L':
          return String(e + 1)
        case 'LL':
          return y(e + 1, 2)
        case 'Lo':
          return t.ordinalNumber(e + 1, {unit: 'month'})
        case 'LLL':
          return t.month(e, {width: 'abbreviated', context: 'standalone'})
        case 'LLLLL':
          return t.month(e, {width: 'narrow', context: 'standalone'})
        case 'LLLL':
        default:
          return t.month(e, {width: 'wide', context: 'standalone'})
      }
    },
    w: function (a, r, t, e) {
      var o = gt(a, e)
      return r === 'wo' ? t.ordinalNumber(o, {unit: 'week'}) : y(o, r.length)
    },
    I: function (a, r, t) {
      var e = mt(a)
      return r === 'Io' ? t.ordinalNumber(e, {unit: 'week'}) : y(e, r.length)
    },
    d: function (a, r, t) {
      return r === 'do'
        ? t.ordinalNumber(a.getUTCDate(), {unit: 'date'})
        : V.d(a, r)
    },
    D: function (a, r, t) {
      var e = nr(a)
      return r === 'Do'
        ? t.ordinalNumber(e, {unit: 'dayOfYear'})
        : y(e, r.length)
    },
    E: function (a, r, t) {
      var e = a.getUTCDay()
      switch (r) {
        case 'E':
        case 'EE':
        case 'EEE':
          return t.day(e, {width: 'abbreviated', context: 'formatting'})
        case 'EEEEE':
          return t.day(e, {width: 'narrow', context: 'formatting'})
        case 'EEEEEE':
          return t.day(e, {width: 'short', context: 'formatting'})
        case 'EEEE':
        default:
          return t.day(e, {width: 'wide', context: 'formatting'})
      }
    },
    e: function (a, r, t, e) {
      var o = a.getUTCDay(),
        n = (o - e.weekStartsOn + 8) % 7 || 7
      switch (r) {
        case 'e':
          return String(n)
        case 'ee':
          return y(n, 2)
        case 'eo':
          return t.ordinalNumber(n, {unit: 'day'})
        case 'eee':
          return t.day(o, {width: 'abbreviated', context: 'formatting'})
        case 'eeeee':
          return t.day(o, {width: 'narrow', context: 'formatting'})
        case 'eeeeee':
          return t.day(o, {width: 'short', context: 'formatting'})
        case 'eeee':
        default:
          return t.day(o, {width: 'wide', context: 'formatting'})
      }
    },
    c: function (a, r, t, e) {
      var o = a.getUTCDay(),
        n = (o - e.weekStartsOn + 8) % 7 || 7
      switch (r) {
        case 'c':
          return String(n)
        case 'cc':
          return y(n, r.length)
        case 'co':
          return t.ordinalNumber(n, {unit: 'day'})
        case 'ccc':
          return t.day(o, {width: 'abbreviated', context: 'standalone'})
        case 'ccccc':
          return t.day(o, {width: 'narrow', context: 'standalone'})
        case 'cccccc':
          return t.day(o, {width: 'short', context: 'standalone'})
        case 'cccc':
        default:
          return t.day(o, {width: 'wide', context: 'standalone'})
      }
    },
    i: function (a, r, t) {
      var e = a.getUTCDay(),
        o = e === 0 ? 7 : e
      switch (r) {
        case 'i':
          return String(o)
        case 'ii':
          return y(o, r.length)
        case 'io':
          return t.ordinalNumber(o, {unit: 'day'})
        case 'iii':
          return t.day(e, {width: 'abbreviated', context: 'formatting'})
        case 'iiiii':
          return t.day(e, {width: 'narrow', context: 'formatting'})
        case 'iiiiii':
          return t.day(e, {width: 'short', context: 'formatting'})
        case 'iiii':
        default:
          return t.day(e, {width: 'wide', context: 'formatting'})
      }
    },
    a: function (a, r, t) {
      var e = a.getUTCHours(),
        o = e / 12 >= 1 ? 'pm' : 'am'
      switch (r) {
        case 'a':
        case 'aa':
          return t.dayPeriod(o, {width: 'abbreviated', context: 'formatting'})
        case 'aaa':
          return t
            .dayPeriod(o, {width: 'abbreviated', context: 'formatting'})
            .toLowerCase()
        case 'aaaaa':
          return t.dayPeriod(o, {width: 'narrow', context: 'formatting'})
        case 'aaaa':
        default:
          return t.dayPeriod(o, {width: 'wide', context: 'formatting'})
      }
    },
    b: function (a, r, t) {
      var e = a.getUTCHours(),
        o
      switch (
        (e === 12
          ? (o = re.noon)
          : e === 0
          ? (o = re.midnight)
          : (o = e / 12 >= 1 ? 'pm' : 'am'),
        r)
      ) {
        case 'b':
        case 'bb':
          return t.dayPeriod(o, {width: 'abbreviated', context: 'formatting'})
        case 'bbb':
          return t
            .dayPeriod(o, {width: 'abbreviated', context: 'formatting'})
            .toLowerCase()
        case 'bbbbb':
          return t.dayPeriod(o, {width: 'narrow', context: 'formatting'})
        case 'bbbb':
        default:
          return t.dayPeriod(o, {width: 'wide', context: 'formatting'})
      }
    },
    B: function (a, r, t) {
      var e = a.getUTCHours(),
        o
      switch (
        (e >= 17
          ? (o = re.evening)
          : e >= 12
          ? (o = re.afternoon)
          : e >= 4
          ? (o = re.morning)
          : (o = re.night),
        r)
      ) {
        case 'B':
        case 'BB':
        case 'BBB':
          return t.dayPeriod(o, {width: 'abbreviated', context: 'formatting'})
        case 'BBBBB':
          return t.dayPeriod(o, {width: 'narrow', context: 'formatting'})
        case 'BBBB':
        default:
          return t.dayPeriod(o, {width: 'wide', context: 'formatting'})
      }
    },
    h: function (a, r, t) {
      if (r === 'ho') {
        var e = a.getUTCHours() % 12
        return e === 0 && (e = 12), t.ordinalNumber(e, {unit: 'hour'})
      }
      return V.h(a, r)
    },
    H: function (a, r, t) {
      return r === 'Ho'
        ? t.ordinalNumber(a.getUTCHours(), {unit: 'hour'})
        : V.H(a, r)
    },
    K: function (a, r, t) {
      var e = a.getUTCHours() % 12
      return r === 'Ko' ? t.ordinalNumber(e, {unit: 'hour'}) : y(e, r.length)
    },
    k: function (a, r, t) {
      var e = a.getUTCHours()
      return (
        e === 0 && (e = 24),
        r === 'ko' ? t.ordinalNumber(e, {unit: 'hour'}) : y(e, r.length)
      )
    },
    m: function (a, r, t) {
      return r === 'mo'
        ? t.ordinalNumber(a.getUTCMinutes(), {unit: 'minute'})
        : V.m(a, r)
    },
    s: function (a, r, t) {
      return r === 'so'
        ? t.ordinalNumber(a.getUTCSeconds(), {unit: 'second'})
        : V.s(a, r)
    },
    S: function (a, r) {
      return V.S(a, r)
    },
    X: function (a, r, t, e) {
      var o = e._originalDate || a,
        n = o.getTimezoneOffset()
      if (n === 0) return 'Z'
      switch (r) {
        case 'X':
          return at(n)
        case 'XXXX':
        case 'XX':
          return J(n)
        case 'XXXXX':
        case 'XXX':
        default:
          return J(n, ':')
      }
    },
    x: function (a, r, t, e) {
      var o = e._originalDate || a,
        n = o.getTimezoneOffset()
      switch (r) {
        case 'x':
          return at(n)
        case 'xxxx':
        case 'xx':
          return J(n)
        case 'xxxxx':
        case 'xxx':
        default:
          return J(n, ':')
      }
    },
    O: function (a, r, t, e) {
      var o = e._originalDate || a,
        n = o.getTimezoneOffset()
      switch (r) {
        case 'O':
        case 'OO':
        case 'OOO':
          return 'GMT' + rt(n, ':')
        case 'OOOO':
        default:
          return 'GMT' + J(n, ':')
      }
    },
    z: function (a, r, t, e) {
      var o = e._originalDate || a,
        n = o.getTimezoneOffset()
      switch (r) {
        case 'z':
        case 'zz':
        case 'zzz':
          return 'GMT' + rt(n, ':')
        case 'zzzz':
        default:
          return 'GMT' + J(n, ':')
      }
    },
    t: function (a, r, t, e) {
      var o = e._originalDate || a,
        n = Math.floor(o.getTime() / 1e3)
      return y(n, r.length)
    },
    T: function (a, r, t, e) {
      var o = e._originalDate || a,
        n = o.getTime()
      return y(n, r.length)
    },
  }
function rt(i, a) {
  var r = i > 0 ? '-' : '+',
    t = Math.abs(i),
    e = Math.floor(t / 60),
    o = t % 60
  if (o === 0) return r + String(e)
  var n = a || ''
  return r + String(e) + n + y(o, 2)
}
function at(i, a) {
  if (i % 60 === 0) {
    var r = i > 0 ? '-' : '+'
    return r + y(Math.abs(i) / 60, 2)
  }
  return J(i, a)
}
function J(i, a) {
  var r = a || '',
    t = i > 0 ? '-' : '+',
    e = Math.abs(i),
    o = y(Math.floor(e / 60), 2),
    n = y(e % 60, 2)
  return t + o + r + n
}
const dr = cr
var nt = function (a, r) {
    switch (a) {
      case 'P':
        return r.date({width: 'short'})
      case 'PP':
        return r.date({width: 'medium'})
      case 'PPP':
        return r.date({width: 'long'})
      case 'PPPP':
      default:
        return r.date({width: 'full'})
    }
  },
  wt = function (a, r) {
    switch (a) {
      case 'p':
        return r.time({width: 'short'})
      case 'pp':
        return r.time({width: 'medium'})
      case 'ppp':
        return r.time({width: 'long'})
      case 'pppp':
      default:
        return r.time({width: 'full'})
    }
  },
  fr = function (a, r) {
    var t = a.match(/(P+)(p+)?/) || [],
      e = t[1],
      o = t[2]
    if (!o) return nt(a, r)
    var n
    switch (e) {
      case 'P':
        n = r.dateTime({width: 'short'})
        break
      case 'PP':
        n = r.dateTime({width: 'medium'})
        break
      case 'PPP':
        n = r.dateTime({width: 'long'})
        break
      case 'PPPP':
      default:
        n = r.dateTime({width: 'full'})
        break
    }
    return n.replace('{{date}}', nt(e, r)).replace('{{time}}', wt(o, r))
  },
  vr = {p: wt, P: fr}
const Se = vr
var hr = ['D', 'DD'],
  mr = ['YY', 'YYYY']
function yt(i) {
  return hr.indexOf(i) !== -1
}
function pt(i) {
  return mr.indexOf(i) !== -1
}
function De(i, a, r) {
  if (i === 'YYYY')
    throw new RangeError(
      'Use `yyyy` instead of `YYYY` (in `'
        .concat(a, '`) for formatting years to the input `')
        .concat(
          r,
          '`; see: https://github.com/date-fns/date-fns/blob/master/docs/unicodeTokens.md'
        )
    )
  if (i === 'YY')
    throw new RangeError(
      'Use `yy` instead of `YY` (in `'
        .concat(a, '`) for formatting years to the input `')
        .concat(
          r,
          '`; see: https://github.com/date-fns/date-fns/blob/master/docs/unicodeTokens.md'
        )
    )
  if (i === 'D')
    throw new RangeError(
      'Use `d` instead of `D` (in `'
        .concat(a, '`) for formatting days of the month to the input `')
        .concat(
          r,
          '`; see: https://github.com/date-fns/date-fns/blob/master/docs/unicodeTokens.md'
        )
    )
  if (i === 'DD')
    throw new RangeError(
      'Use `dd` instead of `DD` (in `'
        .concat(a, '`) for formatting days of the month to the input `')
        .concat(
          r,
          '`; see: https://github.com/date-fns/date-fns/blob/master/docs/unicodeTokens.md'
        )
    )
}
var gr = {
    lessThanXSeconds: {
      one: 'less than a second',
      other: 'less than {{count}} seconds',
    },
    xSeconds: {one: '1 second', other: '{{count}} seconds'},
    halfAMinute: 'half a minute',
    lessThanXMinutes: {
      one: 'less than a minute',
      other: 'less than {{count}} minutes',
    },
    xMinutes: {one: '1 minute', other: '{{count}} minutes'},
    aboutXHours: {one: 'about 1 hour', other: 'about {{count}} hours'},
    xHours: {one: '1 hour', other: '{{count}} hours'},
    xDays: {one: '1 day', other: '{{count}} days'},
    aboutXWeeks: {one: 'about 1 week', other: 'about {{count}} weeks'},
    xWeeks: {one: '1 week', other: '{{count}} weeks'},
    aboutXMonths: {one: 'about 1 month', other: 'about {{count}} months'},
    xMonths: {one: '1 month', other: '{{count}} months'},
    aboutXYears: {one: 'about 1 year', other: 'about {{count}} years'},
    xYears: {one: '1 year', other: '{{count}} years'},
    overXYears: {one: 'over 1 year', other: 'over {{count}} years'},
    almostXYears: {one: 'almost 1 year', other: 'almost {{count}} years'},
  },
  wr = function (a, r, t) {
    var e,
      o = gr[a]
    return (
      typeof o == 'string'
        ? (e = o)
        : r === 1
        ? (e = o.one)
        : (e = o.other.replace('{{count}}', r.toString())),
      t != null && t.addSuffix
        ? t.comparison && t.comparison > 0
          ? 'in ' + e
          : e + ' ago'
        : e
    )
  }
const yr = wr
function Ne(i) {
  return function () {
    var a = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {},
      r = a.width ? String(a.width) : i.defaultWidth,
      t = i.formats[r] || i.formats[i.defaultWidth]
    return t
  }
}
var pr = {
    full: 'EEEE, MMMM do, y',
    long: 'MMMM do, y',
    medium: 'MMM d, y',
    short: 'MM/dd/yyyy',
  },
  Tr = {
    full: 'h:mm:ss a zzzz',
    long: 'h:mm:ss a z',
    medium: 'h:mm:ss a',
    short: 'h:mm a',
  },
  br = {
    full: "{{date}} 'at' {{time}}",
    long: "{{date}} 'at' {{time}}",
    medium: '{{date}}, {{time}}',
    short: '{{date}}, {{time}}',
  },
  Dr = {
    date: Ne({formats: pr, defaultWidth: 'full'}),
    time: Ne({formats: Tr, defaultWidth: 'full'}),
    dateTime: Ne({formats: br, defaultWidth: 'full'}),
  }
const Mr = Dr
var Or = {
    lastWeek: "'last' eeee 'at' p",
    yesterday: "'yesterday at' p",
    today: "'today at' p",
    tomorrow: "'tomorrow at' p",
    nextWeek: "eeee 'at' p",
    other: 'P',
  },
  Pr = function (a, r, t, e) {
    return Or[a]
  }
const kr = Pr
function le(i) {
  return function (a, r) {
    var t = r != null && r.context ? String(r.context) : 'standalone',
      e
    if (t === 'formatting' && i.formattingValues) {
      var o = i.defaultFormattingWidth || i.defaultWidth,
        n = r != null && r.width ? String(r.width) : o
      e = i.formattingValues[n] || i.formattingValues[o]
    } else {
      var u = i.defaultWidth,
        s = r != null && r.width ? String(r.width) : i.defaultWidth
      e = i.values[s] || i.values[u]
    }
    var l = i.argumentCallback ? i.argumentCallback(a) : a
    return e[l]
  }
}
var Cr = {
    narrow: ['B', 'A'],
    abbreviated: ['BC', 'AD'],
    wide: ['Before Christ', 'Anno Domini'],
  },
  xr = {
    narrow: ['1', '2', '3', '4'],
    abbreviated: ['Q1', 'Q2', 'Q3', 'Q4'],
    wide: ['1st quarter', '2nd quarter', '3rd quarter', '4th quarter'],
  },
  Yr = {
    narrow: ['J', 'F', 'M', 'A', 'M', 'J', 'J', 'A', 'S', 'O', 'N', 'D'],
    abbreviated: [
      'Jan',
      'Feb',
      'Mar',
      'Apr',
      'May',
      'Jun',
      'Jul',
      'Aug',
      'Sep',
      'Oct',
      'Nov',
      'Dec',
    ],
    wide: [
      'January',
      'February',
      'March',
      'April',
      'May',
      'June',
      'July',
      'August',
      'September',
      'October',
      'November',
      'December',
    ],
  },
  Er = {
    narrow: ['S', 'M', 'T', 'W', 'T', 'F', 'S'],
    short: ['Su', 'Mo', 'Tu', 'We', 'Th', 'Fr', 'Sa'],
    abbreviated: ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'],
    wide: [
      'Sunday',
      'Monday',
      'Tuesday',
      'Wednesday',
      'Thursday',
      'Friday',
      'Saturday',
    ],
  },
  _r = {
    narrow: {
      am: 'a',
      pm: 'p',
      midnight: 'mi',
      noon: 'n',
      morning: 'morning',
      afternoon: 'afternoon',
      evening: 'evening',
      night: 'night',
    },
    abbreviated: {
      am: 'AM',
      pm: 'PM',
      midnight: 'midnight',
      noon: 'noon',
      morning: 'morning',
      afternoon: 'afternoon',
      evening: 'evening',
      night: 'night',
    },
    wide: {
      am: 'a.m.',
      pm: 'p.m.',
      midnight: 'midnight',
      noon: 'noon',
      morning: 'morning',
      afternoon: 'afternoon',
      evening: 'evening',
      night: 'night',
    },
  },
  Ur = {
    narrow: {
      am: 'a',
      pm: 'p',
      midnight: 'mi',
      noon: 'n',
      morning: 'in the morning',
      afternoon: 'in the afternoon',
      evening: 'in the evening',
      night: 'at night',
    },
    abbreviated: {
      am: 'AM',
      pm: 'PM',
      midnight: 'midnight',
      noon: 'noon',
      morning: 'in the morning',
      afternoon: 'in the afternoon',
      evening: 'in the evening',
      night: 'at night',
    },
    wide: {
      am: 'a.m.',
      pm: 'p.m.',
      midnight: 'midnight',
      noon: 'noon',
      morning: 'in the morning',
      afternoon: 'in the afternoon',
      evening: 'in the evening',
      night: 'at night',
    },
  },
  Nr = function (a, r) {
    var t = Number(a),
      e = t % 100
    if (e > 20 || e < 10)
      switch (e % 10) {
        case 1:
          return t + 'st'
        case 2:
          return t + 'nd'
        case 3:
          return t + 'rd'
      }
    return t + 'th'
  },
  Wr = {
    ordinalNumber: Nr,
    era: le({values: Cr, defaultWidth: 'wide'}),
    quarter: le({
      values: xr,
      defaultWidth: 'wide',
      argumentCallback: function (a) {
        return a - 1
      },
    }),
    month: le({values: Yr, defaultWidth: 'wide'}),
    day: le({values: Er, defaultWidth: 'wide'}),
    dayPeriod: le({
      values: _r,
      defaultWidth: 'wide',
      formattingValues: Ur,
      defaultFormattingWidth: 'wide',
    }),
  }
const Hr = Wr
function ce(i) {
  return function (a) {
    var r = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {},
      t = r.width,
      e = (t && i.matchPatterns[t]) || i.matchPatterns[i.defaultMatchWidth],
      o = a.match(e)
    if (!o) return null
    var n = o[0],
      u = (t && i.parsePatterns[t]) || i.parsePatterns[i.defaultParseWidth],
      s = Array.isArray(u)
        ? Lr(u, function (h) {
            return h.test(n)
          })
        : Ir(u, function (h) {
            return h.test(n)
          }),
      l
    ;(l = i.valueCallback ? i.valueCallback(s) : s),
      (l = r.valueCallback ? r.valueCallback(l) : l)
    var m = a.slice(n.length)
    return {value: l, rest: m}
  }
}
function Ir(i, a) {
  for (var r in i) if (i.hasOwnProperty(r) && a(i[r])) return r
}
function Lr(i, a) {
  for (var r = 0; r < i.length; r++) if (a(i[r])) return r
}
function Fr(i) {
  return function (a) {
    var r = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {},
      t = a.match(i.matchPattern)
    if (!t) return null
    var e = t[0],
      o = a.match(i.parsePattern)
    if (!o) return null
    var n = i.valueCallback ? i.valueCallback(o[0]) : o[0]
    n = r.valueCallback ? r.valueCallback(n) : n
    var u = a.slice(e.length)
    return {value: n, rest: u}
  }
}
var Sr = /^(\d+)(th|st|nd|rd)?/i,
  $r = /\d+/i,
  Ar = {
    narrow: /^(b|a)/i,
    abbreviated: /^(b\.?\s?c\.?|b\.?\s?c\.?\s?e\.?|a\.?\s?d\.?|c\.?\s?e\.?)/i,
    wide: /^(before christ|before common era|anno domini|common era)/i,
  },
  Rr = {any: [/^b/i, /^(a|c)/i]},
  qr = {
    narrow: /^[1234]/i,
    abbreviated: /^q[1234]/i,
    wide: /^[1234](th|st|nd|rd)? quarter/i,
  },
  Qr = {any: [/1/i, /2/i, /3/i, /4/i]},
  Br = {
    narrow: /^[jfmasond]/i,
    abbreviated: /^(jan|feb|mar|apr|may|jun|jul|aug|sep|oct|nov|dec)/i,
    wide: /^(january|february|march|april|may|june|july|august|september|october|november|december)/i,
  },
  Xr = {
    narrow: [
      /^j/i,
      /^f/i,
      /^m/i,
      /^a/i,
      /^m/i,
      /^j/i,
      /^j/i,
      /^a/i,
      /^s/i,
      /^o/i,
      /^n/i,
      /^d/i,
    ],
    any: [
      /^ja/i,
      /^f/i,
      /^mar/i,
      /^ap/i,
      /^may/i,
      /^jun/i,
      /^jul/i,
      /^au/i,
      /^s/i,
      /^o/i,
      /^n/i,
      /^d/i,
    ],
  },
  Gr = {
    narrow: /^[smtwf]/i,
    short: /^(su|mo|tu|we|th|fr|sa)/i,
    abbreviated: /^(sun|mon|tue|wed|thu|fri|sat)/i,
    wide: /^(sunday|monday|tuesday|wednesday|thursday|friday|saturday)/i,
  },
  jr = {
    narrow: [/^s/i, /^m/i, /^t/i, /^w/i, /^t/i, /^f/i, /^s/i],
    any: [/^su/i, /^m/i, /^tu/i, /^w/i, /^th/i, /^f/i, /^sa/i],
  },
  zr = {
    narrow: /^(a|p|mi|n|(in the|at) (morning|afternoon|evening|night))/i,
    any: /^([ap]\.?\s?m\.?|midnight|noon|(in the|at) (morning|afternoon|evening|night))/i,
  },
  Vr = {
    any: {
      am: /^a/i,
      pm: /^p/i,
      midnight: /^mi/i,
      noon: /^no/i,
      morning: /morning/i,
      afternoon: /afternoon/i,
      evening: /evening/i,
      night: /night/i,
    },
  },
  Zr = {
    ordinalNumber: Fr({
      matchPattern: Sr,
      parsePattern: $r,
      valueCallback: function (a) {
        return parseInt(a, 10)
      },
    }),
    era: ce({
      matchPatterns: Ar,
      defaultMatchWidth: 'wide',
      parsePatterns: Rr,
      defaultParseWidth: 'any',
    }),
    quarter: ce({
      matchPatterns: qr,
      defaultMatchWidth: 'wide',
      parsePatterns: Qr,
      defaultParseWidth: 'any',
      valueCallback: function (a) {
        return a + 1
      },
    }),
    month: ce({
      matchPatterns: Br,
      defaultMatchWidth: 'wide',
      parsePatterns: Xr,
      defaultParseWidth: 'any',
    }),
    day: ce({
      matchPatterns: Gr,
      defaultMatchWidth: 'wide',
      parsePatterns: jr,
      defaultParseWidth: 'any',
    }),
    dayPeriod: ce({
      matchPatterns: zr,
      defaultMatchWidth: 'any',
      parsePatterns: Vr,
      defaultParseWidth: 'any',
    }),
  }
const Kr = Zr
var Jr = {
  code: 'en-US',
  formatDistance: yr,
  formatLong: Mr,
  formatRelative: kr,
  localize: Hr,
  match: Kr,
  options: {weekStartsOn: 0, firstWeekContainsDate: 1},
}
const Re = Jr
var ea = /[yYQqMLwIdDecihHKkms]o|(\w)\1*|''|'(''|[^'])+('|$)|./g,
  ta = /P+p+|P+|p+|''|'(''|[^'])+('|$)|./g,
  ra = /^'([^]*?)'?$/,
  aa = /''/g,
  na = /[a-zA-Z]/
function ia(i, a, r) {
  var t, e, o, n, u, s, l, m, h, w, g, O, W, _, I, $, Q, B
  c(2, arguments)
  var Z = String(a),
    H = q(),
    F =
      (t =
        (e = r == null ? void 0 : r.locale) !== null && e !== void 0
          ? e
          : H.locale) !== null && t !== void 0
        ? t
        : Re,
    X = b(
      (o =
        (n =
          (u =
            (s = r == null ? void 0 : r.firstWeekContainsDate) !== null &&
            s !== void 0
              ? s
              : r == null ||
                (l = r.locale) === null ||
                l === void 0 ||
                (m = l.options) === null ||
                m === void 0
              ? void 0
              : m.firstWeekContainsDate) !== null && u !== void 0
            ? u
            : H.firstWeekContainsDate) !== null && n !== void 0
          ? n
          : (h = H.locale) === null ||
            h === void 0 ||
            (w = h.options) === null ||
            w === void 0
          ? void 0
          : w.firstWeekContainsDate) !== null && o !== void 0
        ? o
        : 1
    )
  if (!(X >= 1 && X <= 7))
    throw new RangeError(
      'firstWeekContainsDate must be between 1 and 7 inclusively'
    )
  var j = b(
    (g =
      (O =
        (W =
          (_ = r == null ? void 0 : r.weekStartsOn) !== null && _ !== void 0
            ? _
            : r == null ||
              (I = r.locale) === null ||
              I === void 0 ||
              ($ = I.options) === null ||
              $ === void 0
            ? void 0
            : $.weekStartsOn) !== null && W !== void 0
          ? W
          : H.weekStartsOn) !== null && O !== void 0
        ? O
        : (Q = H.locale) === null ||
          Q === void 0 ||
          (B = Q.options) === null ||
          B === void 0
        ? void 0
        : B.weekStartsOn) !== null && g !== void 0
      ? g
      : 0
  )
  if (!(j >= 0 && j <= 6))
    throw new RangeError('weekStartsOn must be between 0 and 6 inclusively')
  if (!F.localize) throw new RangeError('locale must contain localize property')
  if (!F.formatLong)
    throw new RangeError('locale must contain formatLong property')
  var z = d(i)
  if (!ft(z)) throw new RangeError('Invalid time value')
  var ie = be(z),
    oe = vt(z, ie),
    ue = {
      firstWeekContainsDate: X,
      weekStartsOn: j,
      locale: F,
      _originalDate: z,
    },
    xe = Z.match(ta)
      .map(function (N) {
        var L = N[0]
        if (L === 'p' || L === 'P') {
          var K = Se[L]
          return K(N, F.formatLong)
        }
        return N
      })
      .join('')
      .match(ea)
      .map(function (N) {
        if (N === "''") return "'"
        var L = N[0]
        if (L === "'") return oa(N)
        var K = dr[L]
        if (K)
          return (
            !(r != null && r.useAdditionalWeekYearTokens) &&
              pt(N) &&
              De(N, a, String(i)),
            !(r != null && r.useAdditionalDayOfYearTokens) &&
              yt(N) &&
              De(N, a, String(i)),
            K(oe, N, F.localize, ue)
          )
        if (L.match(na))
          throw new RangeError(
            'Format string contains an unescaped latin alphabet character `' +
              L +
              '`'
          )
        return N
      })
      .join('')
  return xe
}
function oa(i) {
  var a = i.match(ra)
  return a ? a[1].replace(aa, "'") : i
}
function ua(i) {
  c(1, arguments)
  var a = d(i),
    r = a.getDate()
  return r
}
function Tt(i) {
  c(1, arguments)
  var a = d(i),
    r = a.getFullYear(),
    t = a.getMonth(),
    e = new Date(0)
  return e.setFullYear(r, t + 1, 0), e.setHours(0, 0, 0, 0), e.getDate()
}
function sa(i) {
  c(1, arguments)
  var a = d(i),
    r = a.getHours()
  return r
}
function la(i) {
  c(1, arguments)
  var a = d(i),
    r = a.getMinutes()
  return r
}
function ca(i) {
  c(1, arguments)
  var a = d(i),
    r = a.getMonth()
  return r
}
function da(i) {
  c(1, arguments)
  var a = d(i),
    r = a.getSeconds()
  return r
}
function fa(i) {
  c(1, arguments)
  var a = d(i),
    r = a.getMilliseconds()
  return r
}
function ee(i, a) {
  var r, t, e, o, n, u, s, l
  c(1, arguments)
  var m = q(),
    h = b(
      (r =
        (t =
          (e =
            (o = a == null ? void 0 : a.weekStartsOn) !== null && o !== void 0
              ? o
              : a == null ||
                (n = a.locale) === null ||
                n === void 0 ||
                (u = n.options) === null ||
                u === void 0
              ? void 0
              : u.weekStartsOn) !== null && e !== void 0
            ? e
            : m.weekStartsOn) !== null && t !== void 0
          ? t
          : (s = m.locale) === null ||
            s === void 0 ||
            (l = s.options) === null ||
            l === void 0
          ? void 0
          : l.weekStartsOn) !== null && r !== void 0
        ? r
        : 0
    )
  if (!(h >= 0 && h <= 6))
    throw new RangeError('weekStartsOn must be between 0 and 6 inclusively')
  var w = d(i),
    g = w.getDay(),
    O = (g < h ? 7 : 0) + g - h
  return w.setDate(w.getDate() - O), w.setHours(0, 0, 0, 0), w
}
function va(i, a) {
  var r, t, e, o, n, u, s, l
  c(1, arguments)
  var m = d(i),
    h = m.getFullYear(),
    w = q(),
    g = b(
      (r =
        (t =
          (e =
            (o = a == null ? void 0 : a.firstWeekContainsDate) !== null &&
            o !== void 0
              ? o
              : a == null ||
                (n = a.locale) === null ||
                n === void 0 ||
                (u = n.options) === null ||
                u === void 0
              ? void 0
              : u.firstWeekContainsDate) !== null && e !== void 0
            ? e
            : w.firstWeekContainsDate) !== null && t !== void 0
          ? t
          : (s = w.locale) === null ||
            s === void 0 ||
            (l = s.options) === null ||
            l === void 0
          ? void 0
          : l.firstWeekContainsDate) !== null && r !== void 0
        ? r
        : 1
    )
  if (!(g >= 1 && g <= 7))
    throw new RangeError(
      'firstWeekContainsDate must be between 1 and 7 inclusively'
    )
  var O = new Date(0)
  O.setFullYear(h + 1, 0, g), O.setHours(0, 0, 0, 0)
  var W = ee(O, a),
    _ = new Date(0)
  _.setFullYear(h, 0, g), _.setHours(0, 0, 0, 0)
  var I = ee(_, a)
  return m.getTime() >= W.getTime()
    ? h + 1
    : m.getTime() >= I.getTime()
    ? h
    : h - 1
}
function ha(i, a) {
  var r, t, e, o, n, u, s, l
  c(1, arguments)
  var m = q(),
    h = b(
      (r =
        (t =
          (e =
            (o = a == null ? void 0 : a.firstWeekContainsDate) !== null &&
            o !== void 0
              ? o
              : a == null ||
                (n = a.locale) === null ||
                n === void 0 ||
                (u = n.options) === null ||
                u === void 0
              ? void 0
              : u.firstWeekContainsDate) !== null && e !== void 0
            ? e
            : m.firstWeekContainsDate) !== null && t !== void 0
          ? t
          : (s = m.locale) === null ||
            s === void 0 ||
            (l = s.options) === null ||
            l === void 0
          ? void 0
          : l.firstWeekContainsDate) !== null && r !== void 0
        ? r
        : 1
    ),
    w = va(i, a),
    g = new Date(0)
  g.setFullYear(w, 0, h), g.setHours(0, 0, 0, 0)
  var O = ee(g, a)
  return O
}
var ma = 6048e5
function ga(i, a) {
  c(1, arguments)
  var r = d(i),
    t = ee(r, a).getTime() - ha(r, a).getTime()
  return Math.round(t / ma) + 1
}
function wa(i) {
  return c(1, arguments), d(i).getFullYear()
}
function We(i, a) {
  c(2, arguments)
  var r = d(i),
    t = d(a)
  return r.getTime() > t.getTime()
}
function de(i, a) {
  c(2, arguments)
  var r = d(i),
    t = d(a)
  return r.getTime() < t.getTime()
}
function ya(i, a) {
  c(2, arguments)
  var r = d(i),
    t = d(a)
  return r.getTime() === t.getTime()
}
function pa(i, a) {
  c(2, arguments)
  var r = ae(i),
    t = ae(a)
  return r.getTime() === t.getTime()
}
function Ta(i, a) {
  c(2, arguments)
  var r = d(i),
    t = d(a)
  return r.getFullYear() === t.getFullYear()
}
function ba(i, a) {
  c(2, arguments)
  var r = d(i),
    t = d(a)
  return r.getFullYear() === t.getFullYear() && r.getMonth() === t.getMonth()
}
function it(i) {
  c(1, arguments)
  var a = d(i)
  return a.setMinutes(0, 0, 0), a
}
function Da(i, a) {
  c(2, arguments)
  var r = it(i),
    t = it(a)
  return r.getTime() === t.getTime()
}
function ot(i, a) {
  ;(a == null || a > i.length) && (a = i.length)
  for (var r = 0, t = new Array(a); r < a; r++) t[r] = i[r]
  return t
}
function Ma(i, a) {
  if (i) {
    if (typeof i == 'string') return ot(i, a)
    var r = Object.prototype.toString.call(i).slice(8, -1)
    if (
      (r === 'Object' && i.constructor && (r = i.constructor.name),
      r === 'Map' || r === 'Set')
    )
      return Array.from(i)
    if (r === 'Arguments' || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r))
      return ot(i, a)
  }
}
function ut(i, a) {
  var r = (typeof Symbol < 'u' && i[Symbol.iterator]) || i['@@iterator']
  if (!r) {
    if (
      Array.isArray(i) ||
      (r = Ma(i)) ||
      (a && i && typeof i.length == 'number')
    ) {
      r && (i = r)
      var t = 0,
        e = function () {}
      return {
        s: e,
        n: function () {
          return t >= i.length ? {done: !0} : {done: !1, value: i[t++]}
        },
        e: function (l) {
          throw l
        },
        f: e,
      }
    }
    throw new TypeError(`Invalid attempt to iterate non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)
  }
  var o = !0,
    n = !1,
    u
  return {
    s: function () {
      r = r.call(i)
    },
    n: function () {
      var l = r.next()
      return (o = l.done), l
    },
    e: function (l) {
      ;(n = !0), (u = l)
    },
    f: function () {
      try {
        !o && r.return != null && r.return()
      } finally {
        if (n) throw u
      }
    },
  }
}
function Oa(i, a) {
  if (i == null)
    throw new TypeError(
      'assign requires that input parameter not be null or undefined'
    )
  for (var r in a) Object.prototype.hasOwnProperty.call(a, r) && (i[r] = a[r])
  return i
}
function D(i, a) {
  if (typeof a != 'function' && a !== null)
    throw new TypeError('Super expression must either be null or a function')
  ;(i.prototype = Object.create(a && a.prototype, {
    constructor: {value: i, writable: !0, configurable: !0},
  })),
    Object.defineProperty(i, 'prototype', {writable: !1}),
    a && Ut(i, a)
}
function Pa(i, a) {
  if (a && (G(a) === 'object' || typeof a == 'function')) return a
  if (a !== void 0)
    throw new TypeError(
      'Derived constructors may only return object or undefined'
    )
  return v(i)
}
function M(i) {
  var a = Nt()
  return function () {
    var t = Ke(i),
      e
    if (a) {
      var o = Ke(this).constructor
      e = Reflect.construct(t, arguments, o)
    } else e = t.apply(this, arguments)
    return Pa(this, e)
  }
}
function p(i, a) {
  if (!(i instanceof a))
    throw new TypeError('Cannot call a class as a function')
}
function ka(i, a) {
  if (G(i) !== 'object' || i === null) return i
  var r = i[Symbol.toPrimitive]
  if (r !== void 0) {
    var t = r.call(i, a || 'default')
    if (G(t) !== 'object') return t
    throw new TypeError('@@toPrimitive must return a primitive value.')
  }
  return (a === 'string' ? String : Number)(i)
}
function bt(i) {
  var a = ka(i, 'string')
  return G(a) === 'symbol' ? a : String(a)
}
function st(i, a) {
  for (var r = 0; r < a.length; r++) {
    var t = a[r]
    ;(t.enumerable = t.enumerable || !1),
      (t.configurable = !0),
      'value' in t && (t.writable = !0),
      Object.defineProperty(i, bt(t.key), t)
  }
}
function T(i, a, r) {
  return (
    a && st(i.prototype, a),
    r && st(i, r),
    Object.defineProperty(i, 'prototype', {writable: !1}),
    i
  )
}
function f(i, a, r) {
  return (
    (a = bt(a)),
    a in i
      ? Object.defineProperty(i, a, {
          value: r,
          enumerable: !0,
          configurable: !0,
          writable: !0,
        })
      : (i[a] = r),
    i
  )
}
var Ca = 10,
  Dt = (function () {
    function i() {
      p(this, i), f(this, 'priority', void 0), f(this, 'subPriority', 0)
    }
    return (
      T(i, [
        {
          key: 'validate',
          value: function (r, t) {
            return !0
          },
        },
      ]),
      i
    )
  })(),
  xa = (function (i) {
    D(r, i)
    var a = M(r)
    function r(t, e, o, n, u) {
      var s
      return (
        p(this, r),
        (s = a.call(this)),
        (s.value = t),
        (s.validateValue = e),
        (s.setValue = o),
        (s.priority = n),
        u && (s.subPriority = u),
        s
      )
    }
    return (
      T(r, [
        {
          key: 'validate',
          value: function (e, o) {
            return this.validateValue(e, this.value, o)
          },
        },
        {
          key: 'set',
          value: function (e, o, n) {
            return this.setValue(e, o, this.value, n)
          },
        },
      ]),
      r
    )
  })(Dt),
  Ya = (function (i) {
    D(r, i)
    var a = M(r)
    function r() {
      var t
      p(this, r)
      for (var e = arguments.length, o = new Array(e), n = 0; n < e; n++)
        o[n] = arguments[n]
      return (
        (t = a.call.apply(a, [this].concat(o))),
        f(v(t), 'priority', Ca),
        f(v(t), 'subPriority', -1),
        t
      )
    }
    return (
      T(r, [
        {
          key: 'set',
          value: function (e, o) {
            if (o.timestampIsSet) return e
            var n = new Date(0)
            return (
              n.setFullYear(
                e.getUTCFullYear(),
                e.getUTCMonth(),
                e.getUTCDate()
              ),
              n.setHours(
                e.getUTCHours(),
                e.getUTCMinutes(),
                e.getUTCSeconds(),
                e.getUTCMilliseconds()
              ),
              n
            )
          },
        },
      ]),
      r
    )
  })(Dt),
  P = (function () {
    function i() {
      p(this, i),
        f(this, 'incompatibleTokens', void 0),
        f(this, 'priority', void 0),
        f(this, 'subPriority', void 0)
    }
    return (
      T(i, [
        {
          key: 'run',
          value: function (r, t, e, o) {
            var n = this.parse(r, t, e, o)
            return n
              ? {
                  setter: new xa(
                    n.value,
                    this.validate,
                    this.set,
                    this.priority,
                    this.subPriority
                  ),
                  rest: n.rest,
                }
              : null
          },
        },
        {
          key: 'validate',
          value: function (r, t, e) {
            return !0
          },
        },
      ]),
      i
    )
  })(),
  Ea = (function (i) {
    D(r, i)
    var a = M(r)
    function r() {
      var t
      p(this, r)
      for (var e = arguments.length, o = new Array(e), n = 0; n < e; n++)
        o[n] = arguments[n]
      return (
        (t = a.call.apply(a, [this].concat(o))),
        f(v(t), 'priority', 140),
        f(v(t), 'incompatibleTokens', ['R', 'u', 't', 'T']),
        t
      )
    }
    return (
      T(r, [
        {
          key: 'parse',
          value: function (e, o, n) {
            switch (o) {
              case 'G':
              case 'GG':
              case 'GGG':
                return (
                  n.era(e, {width: 'abbreviated'}) ||
                  n.era(e, {width: 'narrow'})
                )
              case 'GGGGG':
                return n.era(e, {width: 'narrow'})
              case 'GGGG':
              default:
                return (
                  n.era(e, {width: 'wide'}) ||
                  n.era(e, {width: 'abbreviated'}) ||
                  n.era(e, {width: 'narrow'})
                )
            }
          },
        },
        {
          key: 'set',
          value: function (e, o, n) {
            return (
              (o.era = n),
              e.setUTCFullYear(n, 0, 1),
              e.setUTCHours(0, 0, 0, 0),
              e
            )
          },
        },
      ]),
      r
    )
  })(P),
  Y = {
    month: /^(1[0-2]|0?\d)/,
    date: /^(3[0-1]|[0-2]?\d)/,
    dayOfYear: /^(36[0-6]|3[0-5]\d|[0-2]?\d?\d)/,
    week: /^(5[0-3]|[0-4]?\d)/,
    hour23h: /^(2[0-3]|[0-1]?\d)/,
    hour24h: /^(2[0-4]|[0-1]?\d)/,
    hour11h: /^(1[0-1]|0?\d)/,
    hour12h: /^(1[0-2]|0?\d)/,
    minute: /^[0-5]?\d/,
    second: /^[0-5]?\d/,
    singleDigit: /^\d/,
    twoDigits: /^\d{1,2}/,
    threeDigits: /^\d{1,3}/,
    fourDigits: /^\d{1,4}/,
    anyDigitsSigned: /^-?\d+/,
    singleDigitSigned: /^-?\d/,
    twoDigitsSigned: /^-?\d{1,2}/,
    threeDigitsSigned: /^-?\d{1,3}/,
    fourDigitsSigned: /^-?\d{1,4}/,
  },
  A = {
    basicOptionalMinutes: /^([+-])(\d{2})(\d{2})?|Z/,
    basic: /^([+-])(\d{2})(\d{2})|Z/,
    basicOptionalSeconds: /^([+-])(\d{2})(\d{2})((\d{2}))?|Z/,
    extended: /^([+-])(\d{2}):(\d{2})|Z/,
    extendedOptionalSeconds: /^([+-])(\d{2}):(\d{2})(:(\d{2}))?|Z/,
  }
function E(i, a) {
  return i && {value: a(i.value), rest: i.rest}
}
function C(i, a) {
  var r = a.match(i)
  return r ? {value: parseInt(r[0], 10), rest: a.slice(r[0].length)} : null
}
function R(i, a) {
  var r = a.match(i)
  if (!r) return null
  if (r[0] === 'Z') return {value: 0, rest: a.slice(1)}
  var t = r[1] === '+' ? 1 : -1,
    e = r[2] ? parseInt(r[2], 10) : 0,
    o = r[3] ? parseInt(r[3], 10) : 0,
    n = r[5] ? parseInt(r[5], 10) : 0
  return {value: t * (e * ke + o * Pe + n * Vt), rest: a.slice(r[0].length)}
}
function Mt(i) {
  return C(Y.anyDigitsSigned, i)
}
function x(i, a) {
  switch (i) {
    case 1:
      return C(Y.singleDigit, a)
    case 2:
      return C(Y.twoDigits, a)
    case 3:
      return C(Y.threeDigits, a)
    case 4:
      return C(Y.fourDigits, a)
    default:
      return C(new RegExp('^\\d{1,' + i + '}'), a)
  }
}
function Me(i, a) {
  switch (i) {
    case 1:
      return C(Y.singleDigitSigned, a)
    case 2:
      return C(Y.twoDigitsSigned, a)
    case 3:
      return C(Y.threeDigitsSigned, a)
    case 4:
      return C(Y.fourDigitsSigned, a)
    default:
      return C(new RegExp('^-?\\d{1,' + i + '}'), a)
  }
}
function qe(i) {
  switch (i) {
    case 'morning':
      return 4
    case 'evening':
      return 17
    case 'pm':
    case 'noon':
    case 'afternoon':
      return 12
    case 'am':
    case 'midnight':
    case 'night':
    default:
      return 0
  }
}
function Ot(i, a) {
  var r = a > 0,
    t = r ? a : 1 - a,
    e
  if (t <= 50) e = i || 100
  else {
    var o = t + 50,
      n = Math.floor(o / 100) * 100,
      u = i >= o % 100
    e = i + n - (u ? 100 : 0)
  }
  return r ? e : 1 - e
}
function Pt(i) {
  return i % 400 === 0 || (i % 4 === 0 && i % 100 !== 0)
}
var _a = (function (i) {
    D(r, i)
    var a = M(r)
    function r() {
      var t
      p(this, r)
      for (var e = arguments.length, o = new Array(e), n = 0; n < e; n++)
        o[n] = arguments[n]
      return (
        (t = a.call.apply(a, [this].concat(o))),
        f(v(t), 'priority', 130),
        f(v(t), 'incompatibleTokens', [
          'Y',
          'R',
          'u',
          'w',
          'I',
          'i',
          'e',
          'c',
          't',
          'T',
        ]),
        t
      )
    }
    return (
      T(r, [
        {
          key: 'parse',
          value: function (e, o, n) {
            var u = function (l) {
              return {year: l, isTwoDigitYear: o === 'yy'}
            }
            switch (o) {
              case 'y':
                return E(x(4, e), u)
              case 'yo':
                return E(n.ordinalNumber(e, {unit: 'year'}), u)
              default:
                return E(x(o.length, e), u)
            }
          },
        },
        {
          key: 'validate',
          value: function (e, o) {
            return o.isTwoDigitYear || o.year > 0
          },
        },
        {
          key: 'set',
          value: function (e, o, n) {
            var u = e.getUTCFullYear()
            if (n.isTwoDigitYear) {
              var s = Ot(n.year, u)
              return e.setUTCFullYear(s, 0, 1), e.setUTCHours(0, 0, 0, 0), e
            }
            var l = !('era' in o) || o.era === 1 ? n.year : 1 - n.year
            return e.setUTCFullYear(l, 0, 1), e.setUTCHours(0, 0, 0, 0), e
          },
        },
      ]),
      r
    )
  })(P),
  Ua = (function (i) {
    D(r, i)
    var a = M(r)
    function r() {
      var t
      p(this, r)
      for (var e = arguments.length, o = new Array(e), n = 0; n < e; n++)
        o[n] = arguments[n]
      return (
        (t = a.call.apply(a, [this].concat(o))),
        f(v(t), 'priority', 130),
        f(v(t), 'incompatibleTokens', [
          'y',
          'R',
          'u',
          'Q',
          'q',
          'M',
          'L',
          'I',
          'd',
          'D',
          'i',
          't',
          'T',
        ]),
        t
      )
    }
    return (
      T(r, [
        {
          key: 'parse',
          value: function (e, o, n) {
            var u = function (l) {
              return {year: l, isTwoDigitYear: o === 'YY'}
            }
            switch (o) {
              case 'Y':
                return E(x(4, e), u)
              case 'Yo':
                return E(n.ordinalNumber(e, {unit: 'year'}), u)
              default:
                return E(x(o.length, e), u)
            }
          },
        },
        {
          key: 'validate',
          value: function (e, o) {
            return o.isTwoDigitYear || o.year > 0
          },
        },
        {
          key: 'set',
          value: function (e, o, n, u) {
            var s = Ae(e, u)
            if (n.isTwoDigitYear) {
              var l = Ot(n.year, s)
              return (
                e.setUTCFullYear(l, 0, u.firstWeekContainsDate),
                e.setUTCHours(0, 0, 0, 0),
                te(e, u)
              )
            }
            var m = !('era' in o) || o.era === 1 ? n.year : 1 - n.year
            return (
              e.setUTCFullYear(m, 0, u.firstWeekContainsDate),
              e.setUTCHours(0, 0, 0, 0),
              te(e, u)
            )
          },
        },
      ]),
      r
    )
  })(P),
  Na = (function (i) {
    D(r, i)
    var a = M(r)
    function r() {
      var t
      p(this, r)
      for (var e = arguments.length, o = new Array(e), n = 0; n < e; n++)
        o[n] = arguments[n]
      return (
        (t = a.call.apply(a, [this].concat(o))),
        f(v(t), 'priority', 130),
        f(v(t), 'incompatibleTokens', [
          'G',
          'y',
          'Y',
          'u',
          'Q',
          'q',
          'M',
          'L',
          'w',
          'd',
          'D',
          'e',
          'c',
          't',
          'T',
        ]),
        t
      )
    }
    return (
      T(r, [
        {
          key: 'parse',
          value: function (e, o) {
            return Me(o === 'R' ? 4 : o.length, e)
          },
        },
        {
          key: 'set',
          value: function (e, o, n) {
            var u = new Date(0)
            return u.setUTCFullYear(n, 0, 4), u.setUTCHours(0, 0, 0, 0), ne(u)
          },
        },
      ]),
      r
    )
  })(P),
  Wa = (function (i) {
    D(r, i)
    var a = M(r)
    function r() {
      var t
      p(this, r)
      for (var e = arguments.length, o = new Array(e), n = 0; n < e; n++)
        o[n] = arguments[n]
      return (
        (t = a.call.apply(a, [this].concat(o))),
        f(v(t), 'priority', 130),
        f(v(t), 'incompatibleTokens', [
          'G',
          'y',
          'Y',
          'R',
          'w',
          'I',
          'i',
          'e',
          'c',
          't',
          'T',
        ]),
        t
      )
    }
    return (
      T(r, [
        {
          key: 'parse',
          value: function (e, o) {
            return Me(o === 'u' ? 4 : o.length, e)
          },
        },
        {
          key: 'set',
          value: function (e, o, n) {
            return e.setUTCFullYear(n, 0, 1), e.setUTCHours(0, 0, 0, 0), e
          },
        },
      ]),
      r
    )
  })(P),
  Ha = (function (i) {
    D(r, i)
    var a = M(r)
    function r() {
      var t
      p(this, r)
      for (var e = arguments.length, o = new Array(e), n = 0; n < e; n++)
        o[n] = arguments[n]
      return (
        (t = a.call.apply(a, [this].concat(o))),
        f(v(t), 'priority', 120),
        f(v(t), 'incompatibleTokens', [
          'Y',
          'R',
          'q',
          'M',
          'L',
          'w',
          'I',
          'd',
          'D',
          'i',
          'e',
          'c',
          't',
          'T',
        ]),
        t
      )
    }
    return (
      T(r, [
        {
          key: 'parse',
          value: function (e, o, n) {
            switch (o) {
              case 'Q':
              case 'QQ':
                return x(o.length, e)
              case 'Qo':
                return n.ordinalNumber(e, {unit: 'quarter'})
              case 'QQQ':
                return (
                  n.quarter(e, {width: 'abbreviated', context: 'formatting'}) ||
                  n.quarter(e, {width: 'narrow', context: 'formatting'})
                )
              case 'QQQQQ':
                return n.quarter(e, {width: 'narrow', context: 'formatting'})
              case 'QQQQ':
              default:
                return (
                  n.quarter(e, {width: 'wide', context: 'formatting'}) ||
                  n.quarter(e, {width: 'abbreviated', context: 'formatting'}) ||
                  n.quarter(e, {width: 'narrow', context: 'formatting'})
                )
            }
          },
        },
        {
          key: 'validate',
          value: function (e, o) {
            return o >= 1 && o <= 4
          },
        },
        {
          key: 'set',
          value: function (e, o, n) {
            return e.setUTCMonth((n - 1) * 3, 1), e.setUTCHours(0, 0, 0, 0), e
          },
        },
      ]),
      r
    )
  })(P),
  Ia = (function (i) {
    D(r, i)
    var a = M(r)
    function r() {
      var t
      p(this, r)
      for (var e = arguments.length, o = new Array(e), n = 0; n < e; n++)
        o[n] = arguments[n]
      return (
        (t = a.call.apply(a, [this].concat(o))),
        f(v(t), 'priority', 120),
        f(v(t), 'incompatibleTokens', [
          'Y',
          'R',
          'Q',
          'M',
          'L',
          'w',
          'I',
          'd',
          'D',
          'i',
          'e',
          'c',
          't',
          'T',
        ]),
        t
      )
    }
    return (
      T(r, [
        {
          key: 'parse',
          value: function (e, o, n) {
            switch (o) {
              case 'q':
              case 'qq':
                return x(o.length, e)
              case 'qo':
                return n.ordinalNumber(e, {unit: 'quarter'})
              case 'qqq':
                return (
                  n.quarter(e, {width: 'abbreviated', context: 'standalone'}) ||
                  n.quarter(e, {width: 'narrow', context: 'standalone'})
                )
              case 'qqqqq':
                return n.quarter(e, {width: 'narrow', context: 'standalone'})
              case 'qqqq':
              default:
                return (
                  n.quarter(e, {width: 'wide', context: 'standalone'}) ||
                  n.quarter(e, {width: 'abbreviated', context: 'standalone'}) ||
                  n.quarter(e, {width: 'narrow', context: 'standalone'})
                )
            }
          },
        },
        {
          key: 'validate',
          value: function (e, o) {
            return o >= 1 && o <= 4
          },
        },
        {
          key: 'set',
          value: function (e, o, n) {
            return e.setUTCMonth((n - 1) * 3, 1), e.setUTCHours(0, 0, 0, 0), e
          },
        },
      ]),
      r
    )
  })(P),
  La = (function (i) {
    D(r, i)
    var a = M(r)
    function r() {
      var t
      p(this, r)
      for (var e = arguments.length, o = new Array(e), n = 0; n < e; n++)
        o[n] = arguments[n]
      return (
        (t = a.call.apply(a, [this].concat(o))),
        f(v(t), 'incompatibleTokens', [
          'Y',
          'R',
          'q',
          'Q',
          'L',
          'w',
          'I',
          'D',
          'i',
          'e',
          'c',
          't',
          'T',
        ]),
        f(v(t), 'priority', 110),
        t
      )
    }
    return (
      T(r, [
        {
          key: 'parse',
          value: function (e, o, n) {
            var u = function (l) {
              return l - 1
            }
            switch (o) {
              case 'M':
                return E(C(Y.month, e), u)
              case 'MM':
                return E(x(2, e), u)
              case 'Mo':
                return E(n.ordinalNumber(e, {unit: 'month'}), u)
              case 'MMM':
                return (
                  n.month(e, {width: 'abbreviated', context: 'formatting'}) ||
                  n.month(e, {width: 'narrow', context: 'formatting'})
                )
              case 'MMMMM':
                return n.month(e, {width: 'narrow', context: 'formatting'})
              case 'MMMM':
              default:
                return (
                  n.month(e, {width: 'wide', context: 'formatting'}) ||
                  n.month(e, {width: 'abbreviated', context: 'formatting'}) ||
                  n.month(e, {width: 'narrow', context: 'formatting'})
                )
            }
          },
        },
        {
          key: 'validate',
          value: function (e, o) {
            return o >= 0 && o <= 11
          },
        },
        {
          key: 'set',
          value: function (e, o, n) {
            return e.setUTCMonth(n, 1), e.setUTCHours(0, 0, 0, 0), e
          },
        },
      ]),
      r
    )
  })(P),
  Fa = (function (i) {
    D(r, i)
    var a = M(r)
    function r() {
      var t
      p(this, r)
      for (var e = arguments.length, o = new Array(e), n = 0; n < e; n++)
        o[n] = arguments[n]
      return (
        (t = a.call.apply(a, [this].concat(o))),
        f(v(t), 'priority', 110),
        f(v(t), 'incompatibleTokens', [
          'Y',
          'R',
          'q',
          'Q',
          'M',
          'w',
          'I',
          'D',
          'i',
          'e',
          'c',
          't',
          'T',
        ]),
        t
      )
    }
    return (
      T(r, [
        {
          key: 'parse',
          value: function (e, o, n) {
            var u = function (l) {
              return l - 1
            }
            switch (o) {
              case 'L':
                return E(C(Y.month, e), u)
              case 'LL':
                return E(x(2, e), u)
              case 'Lo':
                return E(n.ordinalNumber(e, {unit: 'month'}), u)
              case 'LLL':
                return (
                  n.month(e, {width: 'abbreviated', context: 'standalone'}) ||
                  n.month(e, {width: 'narrow', context: 'standalone'})
                )
              case 'LLLLL':
                return n.month(e, {width: 'narrow', context: 'standalone'})
              case 'LLLL':
              default:
                return (
                  n.month(e, {width: 'wide', context: 'standalone'}) ||
                  n.month(e, {width: 'abbreviated', context: 'standalone'}) ||
                  n.month(e, {width: 'narrow', context: 'standalone'})
                )
            }
          },
        },
        {
          key: 'validate',
          value: function (e, o) {
            return o >= 0 && o <= 11
          },
        },
        {
          key: 'set',
          value: function (e, o, n) {
            return e.setUTCMonth(n, 1), e.setUTCHours(0, 0, 0, 0), e
          },
        },
      ]),
      r
    )
  })(P)
function Sa(i, a, r) {
  c(2, arguments)
  var t = d(i),
    e = b(a),
    o = gt(t, r) - e
  return t.setUTCDate(t.getUTCDate() - o * 7), t
}
var $a = (function (i) {
  D(r, i)
  var a = M(r)
  function r() {
    var t
    p(this, r)
    for (var e = arguments.length, o = new Array(e), n = 0; n < e; n++)
      o[n] = arguments[n]
    return (
      (t = a.call.apply(a, [this].concat(o))),
      f(v(t), 'priority', 100),
      f(v(t), 'incompatibleTokens', [
        'y',
        'R',
        'u',
        'q',
        'Q',
        'M',
        'L',
        'I',
        'd',
        'D',
        'i',
        't',
        'T',
      ]),
      t
    )
  }
  return (
    T(r, [
      {
        key: 'parse',
        value: function (e, o, n) {
          switch (o) {
            case 'w':
              return C(Y.week, e)
            case 'wo':
              return n.ordinalNumber(e, {unit: 'week'})
            default:
              return x(o.length, e)
          }
        },
      },
      {
        key: 'validate',
        value: function (e, o) {
          return o >= 1 && o <= 53
        },
      },
      {
        key: 'set',
        value: function (e, o, n, u) {
          return te(Sa(e, n, u), u)
        },
      },
    ]),
    r
  )
})(P)
function Aa(i, a) {
  c(2, arguments)
  var r = d(i),
    t = b(a),
    e = mt(r) - t
  return r.setUTCDate(r.getUTCDate() - e * 7), r
}
var Ra = (function (i) {
    D(r, i)
    var a = M(r)
    function r() {
      var t
      p(this, r)
      for (var e = arguments.length, o = new Array(e), n = 0; n < e; n++)
        o[n] = arguments[n]
      return (
        (t = a.call.apply(a, [this].concat(o))),
        f(v(t), 'priority', 100),
        f(v(t), 'incompatibleTokens', [
          'y',
          'Y',
          'u',
          'q',
          'Q',
          'M',
          'L',
          'w',
          'd',
          'D',
          'e',
          'c',
          't',
          'T',
        ]),
        t
      )
    }
    return (
      T(r, [
        {
          key: 'parse',
          value: function (e, o, n) {
            switch (o) {
              case 'I':
                return C(Y.week, e)
              case 'Io':
                return n.ordinalNumber(e, {unit: 'week'})
              default:
                return x(o.length, e)
            }
          },
        },
        {
          key: 'validate',
          value: function (e, o) {
            return o >= 1 && o <= 53
          },
        },
        {
          key: 'set',
          value: function (e, o, n) {
            return ne(Aa(e, n))
          },
        },
      ]),
      r
    )
  })(P),
  qa = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31],
  Qa = [31, 29, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31],
  Ba = (function (i) {
    D(r, i)
    var a = M(r)
    function r() {
      var t
      p(this, r)
      for (var e = arguments.length, o = new Array(e), n = 0; n < e; n++)
        o[n] = arguments[n]
      return (
        (t = a.call.apply(a, [this].concat(o))),
        f(v(t), 'priority', 90),
        f(v(t), 'subPriority', 1),
        f(v(t), 'incompatibleTokens', [
          'Y',
          'R',
          'q',
          'Q',
          'w',
          'I',
          'D',
          'i',
          'e',
          'c',
          't',
          'T',
        ]),
        t
      )
    }
    return (
      T(r, [
        {
          key: 'parse',
          value: function (e, o, n) {
            switch (o) {
              case 'd':
                return C(Y.date, e)
              case 'do':
                return n.ordinalNumber(e, {unit: 'date'})
              default:
                return x(o.length, e)
            }
          },
        },
        {
          key: 'validate',
          value: function (e, o) {
            var n = e.getUTCFullYear(),
              u = Pt(n),
              s = e.getUTCMonth()
            return u ? o >= 1 && o <= Qa[s] : o >= 1 && o <= qa[s]
          },
        },
        {
          key: 'set',
          value: function (e, o, n) {
            return e.setUTCDate(n), e.setUTCHours(0, 0, 0, 0), e
          },
        },
      ]),
      r
    )
  })(P),
  Xa = (function (i) {
    D(r, i)
    var a = M(r)
    function r() {
      var t
      p(this, r)
      for (var e = arguments.length, o = new Array(e), n = 0; n < e; n++)
        o[n] = arguments[n]
      return (
        (t = a.call.apply(a, [this].concat(o))),
        f(v(t), 'priority', 90),
        f(v(t), 'subpriority', 1),
        f(v(t), 'incompatibleTokens', [
          'Y',
          'R',
          'q',
          'Q',
          'M',
          'L',
          'w',
          'I',
          'd',
          'E',
          'i',
          'e',
          'c',
          't',
          'T',
        ]),
        t
      )
    }
    return (
      T(r, [
        {
          key: 'parse',
          value: function (e, o, n) {
            switch (o) {
              case 'D':
              case 'DD':
                return C(Y.dayOfYear, e)
              case 'Do':
                return n.ordinalNumber(e, {unit: 'date'})
              default:
                return x(o.length, e)
            }
          },
        },
        {
          key: 'validate',
          value: function (e, o) {
            var n = e.getUTCFullYear(),
              u = Pt(n)
            return u ? o >= 1 && o <= 366 : o >= 1 && o <= 365
          },
        },
        {
          key: 'set',
          value: function (e, o, n) {
            return e.setUTCMonth(0, n), e.setUTCHours(0, 0, 0, 0), e
          },
        },
      ]),
      r
    )
  })(P)
function Qe(i, a, r) {
  var t, e, o, n, u, s, l, m
  c(2, arguments)
  var h = q(),
    w = b(
      (t =
        (e =
          (o =
            (n = r == null ? void 0 : r.weekStartsOn) !== null && n !== void 0
              ? n
              : r == null ||
                (u = r.locale) === null ||
                u === void 0 ||
                (s = u.options) === null ||
                s === void 0
              ? void 0
              : s.weekStartsOn) !== null && o !== void 0
            ? o
            : h.weekStartsOn) !== null && e !== void 0
          ? e
          : (l = h.locale) === null ||
            l === void 0 ||
            (m = l.options) === null ||
            m === void 0
          ? void 0
          : m.weekStartsOn) !== null && t !== void 0
        ? t
        : 0
    )
  if (!(w >= 0 && w <= 6))
    throw new RangeError('weekStartsOn must be between 0 and 6 inclusively')
  var g = d(i),
    O = b(a),
    W = g.getUTCDay(),
    _ = O % 7,
    I = (_ + 7) % 7,
    $ = (I < w ? 7 : 0) + O - W
  return g.setUTCDate(g.getUTCDate() + $), g
}
var Ga = (function (i) {
    D(r, i)
    var a = M(r)
    function r() {
      var t
      p(this, r)
      for (var e = arguments.length, o = new Array(e), n = 0; n < e; n++)
        o[n] = arguments[n]
      return (
        (t = a.call.apply(a, [this].concat(o))),
        f(v(t), 'priority', 90),
        f(v(t), 'incompatibleTokens', ['D', 'i', 'e', 'c', 't', 'T']),
        t
      )
    }
    return (
      T(r, [
        {
          key: 'parse',
          value: function (e, o, n) {
            switch (o) {
              case 'E':
              case 'EE':
              case 'EEE':
                return (
                  n.day(e, {width: 'abbreviated', context: 'formatting'}) ||
                  n.day(e, {width: 'short', context: 'formatting'}) ||
                  n.day(e, {width: 'narrow', context: 'formatting'})
                )
              case 'EEEEE':
                return n.day(e, {width: 'narrow', context: 'formatting'})
              case 'EEEEEE':
                return (
                  n.day(e, {width: 'short', context: 'formatting'}) ||
                  n.day(e, {width: 'narrow', context: 'formatting'})
                )
              case 'EEEE':
              default:
                return (
                  n.day(e, {width: 'wide', context: 'formatting'}) ||
                  n.day(e, {width: 'abbreviated', context: 'formatting'}) ||
                  n.day(e, {width: 'short', context: 'formatting'}) ||
                  n.day(e, {width: 'narrow', context: 'formatting'})
                )
            }
          },
        },
        {
          key: 'validate',
          value: function (e, o) {
            return o >= 0 && o <= 6
          },
        },
        {
          key: 'set',
          value: function (e, o, n, u) {
            return (e = Qe(e, n, u)), e.setUTCHours(0, 0, 0, 0), e
          },
        },
      ]),
      r
    )
  })(P),
  ja = (function (i) {
    D(r, i)
    var a = M(r)
    function r() {
      var t
      p(this, r)
      for (var e = arguments.length, o = new Array(e), n = 0; n < e; n++)
        o[n] = arguments[n]
      return (
        (t = a.call.apply(a, [this].concat(o))),
        f(v(t), 'priority', 90),
        f(v(t), 'incompatibleTokens', [
          'y',
          'R',
          'u',
          'q',
          'Q',
          'M',
          'L',
          'I',
          'd',
          'D',
          'E',
          'i',
          'c',
          't',
          'T',
        ]),
        t
      )
    }
    return (
      T(r, [
        {
          key: 'parse',
          value: function (e, o, n, u) {
            var s = function (m) {
              var h = Math.floor((m - 1) / 7) * 7
              return ((m + u.weekStartsOn + 6) % 7) + h
            }
            switch (o) {
              case 'e':
              case 'ee':
                return E(x(o.length, e), s)
              case 'eo':
                return E(n.ordinalNumber(e, {unit: 'day'}), s)
              case 'eee':
                return (
                  n.day(e, {width: 'abbreviated', context: 'formatting'}) ||
                  n.day(e, {width: 'short', context: 'formatting'}) ||
                  n.day(e, {width: 'narrow', context: 'formatting'})
                )
              case 'eeeee':
                return n.day(e, {width: 'narrow', context: 'formatting'})
              case 'eeeeee':
                return (
                  n.day(e, {width: 'short', context: 'formatting'}) ||
                  n.day(e, {width: 'narrow', context: 'formatting'})
                )
              case 'eeee':
              default:
                return (
                  n.day(e, {width: 'wide', context: 'formatting'}) ||
                  n.day(e, {width: 'abbreviated', context: 'formatting'}) ||
                  n.day(e, {width: 'short', context: 'formatting'}) ||
                  n.day(e, {width: 'narrow', context: 'formatting'})
                )
            }
          },
        },
        {
          key: 'validate',
          value: function (e, o) {
            return o >= 0 && o <= 6
          },
        },
        {
          key: 'set',
          value: function (e, o, n, u) {
            return (e = Qe(e, n, u)), e.setUTCHours(0, 0, 0, 0), e
          },
        },
      ]),
      r
    )
  })(P),
  za = (function (i) {
    D(r, i)
    var a = M(r)
    function r() {
      var t
      p(this, r)
      for (var e = arguments.length, o = new Array(e), n = 0; n < e; n++)
        o[n] = arguments[n]
      return (
        (t = a.call.apply(a, [this].concat(o))),
        f(v(t), 'priority', 90),
        f(v(t), 'incompatibleTokens', [
          'y',
          'R',
          'u',
          'q',
          'Q',
          'M',
          'L',
          'I',
          'd',
          'D',
          'E',
          'i',
          'e',
          't',
          'T',
        ]),
        t
      )
    }
    return (
      T(r, [
        {
          key: 'parse',
          value: function (e, o, n, u) {
            var s = function (m) {
              var h = Math.floor((m - 1) / 7) * 7
              return ((m + u.weekStartsOn + 6) % 7) + h
            }
            switch (o) {
              case 'c':
              case 'cc':
                return E(x(o.length, e), s)
              case 'co':
                return E(n.ordinalNumber(e, {unit: 'day'}), s)
              case 'ccc':
                return (
                  n.day(e, {width: 'abbreviated', context: 'standalone'}) ||
                  n.day(e, {width: 'short', context: 'standalone'}) ||
                  n.day(e, {width: 'narrow', context: 'standalone'})
                )
              case 'ccccc':
                return n.day(e, {width: 'narrow', context: 'standalone'})
              case 'cccccc':
                return (
                  n.day(e, {width: 'short', context: 'standalone'}) ||
                  n.day(e, {width: 'narrow', context: 'standalone'})
                )
              case 'cccc':
              default:
                return (
                  n.day(e, {width: 'wide', context: 'standalone'}) ||
                  n.day(e, {width: 'abbreviated', context: 'standalone'}) ||
                  n.day(e, {width: 'short', context: 'standalone'}) ||
                  n.day(e, {width: 'narrow', context: 'standalone'})
                )
            }
          },
        },
        {
          key: 'validate',
          value: function (e, o) {
            return o >= 0 && o <= 6
          },
        },
        {
          key: 'set',
          value: function (e, o, n, u) {
            return (e = Qe(e, n, u)), e.setUTCHours(0, 0, 0, 0), e
          },
        },
      ]),
      r
    )
  })(P)
function Va(i, a) {
  c(2, arguments)
  var r = b(a)
  r % 7 === 0 && (r = r - 7)
  var t = 1,
    e = d(i),
    o = e.getUTCDay(),
    n = r % 7,
    u = (n + 7) % 7,
    s = (u < t ? 7 : 0) + r - o
  return e.setUTCDate(e.getUTCDate() + s), e
}
var Za = (function (i) {
    D(r, i)
    var a = M(r)
    function r() {
      var t
      p(this, r)
      for (var e = arguments.length, o = new Array(e), n = 0; n < e; n++)
        o[n] = arguments[n]
      return (
        (t = a.call.apply(a, [this].concat(o))),
        f(v(t), 'priority', 90),
        f(v(t), 'incompatibleTokens', [
          'y',
          'Y',
          'u',
          'q',
          'Q',
          'M',
          'L',
          'w',
          'd',
          'D',
          'E',
          'e',
          'c',
          't',
          'T',
        ]),
        t
      )
    }
    return (
      T(r, [
        {
          key: 'parse',
          value: function (e, o, n) {
            var u = function (l) {
              return l === 0 ? 7 : l
            }
            switch (o) {
              case 'i':
              case 'ii':
                return x(o.length, e)
              case 'io':
                return n.ordinalNumber(e, {unit: 'day'})
              case 'iii':
                return E(
                  n.day(e, {width: 'abbreviated', context: 'formatting'}) ||
                    n.day(e, {width: 'short', context: 'formatting'}) ||
                    n.day(e, {width: 'narrow', context: 'formatting'}),
                  u
                )
              case 'iiiii':
                return E(n.day(e, {width: 'narrow', context: 'formatting'}), u)
              case 'iiiiii':
                return E(
                  n.day(e, {width: 'short', context: 'formatting'}) ||
                    n.day(e, {width: 'narrow', context: 'formatting'}),
                  u
                )
              case 'iiii':
              default:
                return E(
                  n.day(e, {width: 'wide', context: 'formatting'}) ||
                    n.day(e, {width: 'abbreviated', context: 'formatting'}) ||
                    n.day(e, {width: 'short', context: 'formatting'}) ||
                    n.day(e, {width: 'narrow', context: 'formatting'}),
                  u
                )
            }
          },
        },
        {
          key: 'validate',
          value: function (e, o) {
            return o >= 1 && o <= 7
          },
        },
        {
          key: 'set',
          value: function (e, o, n) {
            return (e = Va(e, n)), e.setUTCHours(0, 0, 0, 0), e
          },
        },
      ]),
      r
    )
  })(P),
  Ka = (function (i) {
    D(r, i)
    var a = M(r)
    function r() {
      var t
      p(this, r)
      for (var e = arguments.length, o = new Array(e), n = 0; n < e; n++)
        o[n] = arguments[n]
      return (
        (t = a.call.apply(a, [this].concat(o))),
        f(v(t), 'priority', 80),
        f(v(t), 'incompatibleTokens', ['b', 'B', 'H', 'k', 't', 'T']),
        t
      )
    }
    return (
      T(r, [
        {
          key: 'parse',
          value: function (e, o, n) {
            switch (o) {
              case 'a':
              case 'aa':
              case 'aaa':
                return (
                  n.dayPeriod(e, {
                    width: 'abbreviated',
                    context: 'formatting',
                  }) || n.dayPeriod(e, {width: 'narrow', context: 'formatting'})
                )
              case 'aaaaa':
                return n.dayPeriod(e, {width: 'narrow', context: 'formatting'})
              case 'aaaa':
              default:
                return (
                  n.dayPeriod(e, {width: 'wide', context: 'formatting'}) ||
                  n.dayPeriod(e, {
                    width: 'abbreviated',
                    context: 'formatting',
                  }) ||
                  n.dayPeriod(e, {width: 'narrow', context: 'formatting'})
                )
            }
          },
        },
        {
          key: 'set',
          value: function (e, o, n) {
            return e.setUTCHours(qe(n), 0, 0, 0), e
          },
        },
      ]),
      r
    )
  })(P),
  Ja = (function (i) {
    D(r, i)
    var a = M(r)
    function r() {
      var t
      p(this, r)
      for (var e = arguments.length, o = new Array(e), n = 0; n < e; n++)
        o[n] = arguments[n]
      return (
        (t = a.call.apply(a, [this].concat(o))),
        f(v(t), 'priority', 80),
        f(v(t), 'incompatibleTokens', ['a', 'B', 'H', 'k', 't', 'T']),
        t
      )
    }
    return (
      T(r, [
        {
          key: 'parse',
          value: function (e, o, n) {
            switch (o) {
              case 'b':
              case 'bb':
              case 'bbb':
                return (
                  n.dayPeriod(e, {
                    width: 'abbreviated',
                    context: 'formatting',
                  }) || n.dayPeriod(e, {width: 'narrow', context: 'formatting'})
                )
              case 'bbbbb':
                return n.dayPeriod(e, {width: 'narrow', context: 'formatting'})
              case 'bbbb':
              default:
                return (
                  n.dayPeriod(e, {width: 'wide', context: 'formatting'}) ||
                  n.dayPeriod(e, {
                    width: 'abbreviated',
                    context: 'formatting',
                  }) ||
                  n.dayPeriod(e, {width: 'narrow', context: 'formatting'})
                )
            }
          },
        },
        {
          key: 'set',
          value: function (e, o, n) {
            return e.setUTCHours(qe(n), 0, 0, 0), e
          },
        },
      ]),
      r
    )
  })(P),
  en = (function (i) {
    D(r, i)
    var a = M(r)
    function r() {
      var t
      p(this, r)
      for (var e = arguments.length, o = new Array(e), n = 0; n < e; n++)
        o[n] = arguments[n]
      return (
        (t = a.call.apply(a, [this].concat(o))),
        f(v(t), 'priority', 80),
        f(v(t), 'incompatibleTokens', ['a', 'b', 't', 'T']),
        t
      )
    }
    return (
      T(r, [
        {
          key: 'parse',
          value: function (e, o, n) {
            switch (o) {
              case 'B':
              case 'BB':
              case 'BBB':
                return (
                  n.dayPeriod(e, {
                    width: 'abbreviated',
                    context: 'formatting',
                  }) || n.dayPeriod(e, {width: 'narrow', context: 'formatting'})
                )
              case 'BBBBB':
                return n.dayPeriod(e, {width: 'narrow', context: 'formatting'})
              case 'BBBB':
              default:
                return (
                  n.dayPeriod(e, {width: 'wide', context: 'formatting'}) ||
                  n.dayPeriod(e, {
                    width: 'abbreviated',
                    context: 'formatting',
                  }) ||
                  n.dayPeriod(e, {width: 'narrow', context: 'formatting'})
                )
            }
          },
        },
        {
          key: 'set',
          value: function (e, o, n) {
            return e.setUTCHours(qe(n), 0, 0, 0), e
          },
        },
      ]),
      r
    )
  })(P),
  tn = (function (i) {
    D(r, i)
    var a = M(r)
    function r() {
      var t
      p(this, r)
      for (var e = arguments.length, o = new Array(e), n = 0; n < e; n++)
        o[n] = arguments[n]
      return (
        (t = a.call.apply(a, [this].concat(o))),
        f(v(t), 'priority', 70),
        f(v(t), 'incompatibleTokens', ['H', 'K', 'k', 't', 'T']),
        t
      )
    }
    return (
      T(r, [
        {
          key: 'parse',
          value: function (e, o, n) {
            switch (o) {
              case 'h':
                return C(Y.hour12h, e)
              case 'ho':
                return n.ordinalNumber(e, {unit: 'hour'})
              default:
                return x(o.length, e)
            }
          },
        },
        {
          key: 'validate',
          value: function (e, o) {
            return o >= 1 && o <= 12
          },
        },
        {
          key: 'set',
          value: function (e, o, n) {
            var u = e.getUTCHours() >= 12
            return (
              u && n < 12
                ? e.setUTCHours(n + 12, 0, 0, 0)
                : !u && n === 12
                ? e.setUTCHours(0, 0, 0, 0)
                : e.setUTCHours(n, 0, 0, 0),
              e
            )
          },
        },
      ]),
      r
    )
  })(P),
  rn = (function (i) {
    D(r, i)
    var a = M(r)
    function r() {
      var t
      p(this, r)
      for (var e = arguments.length, o = new Array(e), n = 0; n < e; n++)
        o[n] = arguments[n]
      return (
        (t = a.call.apply(a, [this].concat(o))),
        f(v(t), 'priority', 70),
        f(v(t), 'incompatibleTokens', ['a', 'b', 'h', 'K', 'k', 't', 'T']),
        t
      )
    }
    return (
      T(r, [
        {
          key: 'parse',
          value: function (e, o, n) {
            switch (o) {
              case 'H':
                return C(Y.hour23h, e)
              case 'Ho':
                return n.ordinalNumber(e, {unit: 'hour'})
              default:
                return x(o.length, e)
            }
          },
        },
        {
          key: 'validate',
          value: function (e, o) {
            return o >= 0 && o <= 23
          },
        },
        {
          key: 'set',
          value: function (e, o, n) {
            return e.setUTCHours(n, 0, 0, 0), e
          },
        },
      ]),
      r
    )
  })(P),
  an = (function (i) {
    D(r, i)
    var a = M(r)
    function r() {
      var t
      p(this, r)
      for (var e = arguments.length, o = new Array(e), n = 0; n < e; n++)
        o[n] = arguments[n]
      return (
        (t = a.call.apply(a, [this].concat(o))),
        f(v(t), 'priority', 70),
        f(v(t), 'incompatibleTokens', ['h', 'H', 'k', 't', 'T']),
        t
      )
    }
    return (
      T(r, [
        {
          key: 'parse',
          value: function (e, o, n) {
            switch (o) {
              case 'K':
                return C(Y.hour11h, e)
              case 'Ko':
                return n.ordinalNumber(e, {unit: 'hour'})
              default:
                return x(o.length, e)
            }
          },
        },
        {
          key: 'validate',
          value: function (e, o) {
            return o >= 0 && o <= 11
          },
        },
        {
          key: 'set',
          value: function (e, o, n) {
            var u = e.getUTCHours() >= 12
            return (
              u && n < 12
                ? e.setUTCHours(n + 12, 0, 0, 0)
                : e.setUTCHours(n, 0, 0, 0),
              e
            )
          },
        },
      ]),
      r
    )
  })(P),
  nn = (function (i) {
    D(r, i)
    var a = M(r)
    function r() {
      var t
      p(this, r)
      for (var e = arguments.length, o = new Array(e), n = 0; n < e; n++)
        o[n] = arguments[n]
      return (
        (t = a.call.apply(a, [this].concat(o))),
        f(v(t), 'priority', 70),
        f(v(t), 'incompatibleTokens', ['a', 'b', 'h', 'H', 'K', 't', 'T']),
        t
      )
    }
    return (
      T(r, [
        {
          key: 'parse',
          value: function (e, o, n) {
            switch (o) {
              case 'k':
                return C(Y.hour24h, e)
              case 'ko':
                return n.ordinalNumber(e, {unit: 'hour'})
              default:
                return x(o.length, e)
            }
          },
        },
        {
          key: 'validate',
          value: function (e, o) {
            return o >= 1 && o <= 24
          },
        },
        {
          key: 'set',
          value: function (e, o, n) {
            var u = n <= 24 ? n % 24 : n
            return e.setUTCHours(u, 0, 0, 0), e
          },
        },
      ]),
      r
    )
  })(P),
  on = (function (i) {
    D(r, i)
    var a = M(r)
    function r() {
      var t
      p(this, r)
      for (var e = arguments.length, o = new Array(e), n = 0; n < e; n++)
        o[n] = arguments[n]
      return (
        (t = a.call.apply(a, [this].concat(o))),
        f(v(t), 'priority', 60),
        f(v(t), 'incompatibleTokens', ['t', 'T']),
        t
      )
    }
    return (
      T(r, [
        {
          key: 'parse',
          value: function (e, o, n) {
            switch (o) {
              case 'm':
                return C(Y.minute, e)
              case 'mo':
                return n.ordinalNumber(e, {unit: 'minute'})
              default:
                return x(o.length, e)
            }
          },
        },
        {
          key: 'validate',
          value: function (e, o) {
            return o >= 0 && o <= 59
          },
        },
        {
          key: 'set',
          value: function (e, o, n) {
            return e.setUTCMinutes(n, 0, 0), e
          },
        },
      ]),
      r
    )
  })(P),
  un = (function (i) {
    D(r, i)
    var a = M(r)
    function r() {
      var t
      p(this, r)
      for (var e = arguments.length, o = new Array(e), n = 0; n < e; n++)
        o[n] = arguments[n]
      return (
        (t = a.call.apply(a, [this].concat(o))),
        f(v(t), 'priority', 50),
        f(v(t), 'incompatibleTokens', ['t', 'T']),
        t
      )
    }
    return (
      T(r, [
        {
          key: 'parse',
          value: function (e, o, n) {
            switch (o) {
              case 's':
                return C(Y.second, e)
              case 'so':
                return n.ordinalNumber(e, {unit: 'second'})
              default:
                return x(o.length, e)
            }
          },
        },
        {
          key: 'validate',
          value: function (e, o) {
            return o >= 0 && o <= 59
          },
        },
        {
          key: 'set',
          value: function (e, o, n) {
            return e.setUTCSeconds(n, 0), e
          },
        },
      ]),
      r
    )
  })(P),
  sn = (function (i) {
    D(r, i)
    var a = M(r)
    function r() {
      var t
      p(this, r)
      for (var e = arguments.length, o = new Array(e), n = 0; n < e; n++)
        o[n] = arguments[n]
      return (
        (t = a.call.apply(a, [this].concat(o))),
        f(v(t), 'priority', 30),
        f(v(t), 'incompatibleTokens', ['t', 'T']),
        t
      )
    }
    return (
      T(r, [
        {
          key: 'parse',
          value: function (e, o) {
            var n = function (s) {
              return Math.floor(s * Math.pow(10, -o.length + 3))
            }
            return E(x(o.length, e), n)
          },
        },
        {
          key: 'set',
          value: function (e, o, n) {
            return e.setUTCMilliseconds(n), e
          },
        },
      ]),
      r
    )
  })(P),
  ln = (function (i) {
    D(r, i)
    var a = M(r)
    function r() {
      var t
      p(this, r)
      for (var e = arguments.length, o = new Array(e), n = 0; n < e; n++)
        o[n] = arguments[n]
      return (
        (t = a.call.apply(a, [this].concat(o))),
        f(v(t), 'priority', 10),
        f(v(t), 'incompatibleTokens', ['t', 'T', 'x']),
        t
      )
    }
    return (
      T(r, [
        {
          key: 'parse',
          value: function (e, o) {
            switch (o) {
              case 'X':
                return R(A.basicOptionalMinutes, e)
              case 'XX':
                return R(A.basic, e)
              case 'XXXX':
                return R(A.basicOptionalSeconds, e)
              case 'XXXXX':
                return R(A.extendedOptionalSeconds, e)
              case 'XXX':
              default:
                return R(A.extended, e)
            }
          },
        },
        {
          key: 'set',
          value: function (e, o, n) {
            return o.timestampIsSet ? e : new Date(e.getTime() - n)
          },
        },
      ]),
      r
    )
  })(P),
  cn = (function (i) {
    D(r, i)
    var a = M(r)
    function r() {
      var t
      p(this, r)
      for (var e = arguments.length, o = new Array(e), n = 0; n < e; n++)
        o[n] = arguments[n]
      return (
        (t = a.call.apply(a, [this].concat(o))),
        f(v(t), 'priority', 10),
        f(v(t), 'incompatibleTokens', ['t', 'T', 'X']),
        t
      )
    }
    return (
      T(r, [
        {
          key: 'parse',
          value: function (e, o) {
            switch (o) {
              case 'x':
                return R(A.basicOptionalMinutes, e)
              case 'xx':
                return R(A.basic, e)
              case 'xxxx':
                return R(A.basicOptionalSeconds, e)
              case 'xxxxx':
                return R(A.extendedOptionalSeconds, e)
              case 'xxx':
              default:
                return R(A.extended, e)
            }
          },
        },
        {
          key: 'set',
          value: function (e, o, n) {
            return o.timestampIsSet ? e : new Date(e.getTime() - n)
          },
        },
      ]),
      r
    )
  })(P),
  dn = (function (i) {
    D(r, i)
    var a = M(r)
    function r() {
      var t
      p(this, r)
      for (var e = arguments.length, o = new Array(e), n = 0; n < e; n++)
        o[n] = arguments[n]
      return (
        (t = a.call.apply(a, [this].concat(o))),
        f(v(t), 'priority', 40),
        f(v(t), 'incompatibleTokens', '*'),
        t
      )
    }
    return (
      T(r, [
        {
          key: 'parse',
          value: function (e) {
            return Mt(e)
          },
        },
        {
          key: 'set',
          value: function (e, o, n) {
            return [new Date(n * 1e3), {timestampIsSet: !0}]
          },
        },
      ]),
      r
    )
  })(P),
  fn = (function (i) {
    D(r, i)
    var a = M(r)
    function r() {
      var t
      p(this, r)
      for (var e = arguments.length, o = new Array(e), n = 0; n < e; n++)
        o[n] = arguments[n]
      return (
        (t = a.call.apply(a, [this].concat(o))),
        f(v(t), 'priority', 20),
        f(v(t), 'incompatibleTokens', '*'),
        t
      )
    }
    return (
      T(r, [
        {
          key: 'parse',
          value: function (e) {
            return Mt(e)
          },
        },
        {
          key: 'set',
          value: function (e, o, n) {
            return [new Date(n), {timestampIsSet: !0}]
          },
        },
      ]),
      r
    )
  })(P),
  vn = {
    G: new Ea(),
    y: new _a(),
    Y: new Ua(),
    R: new Na(),
    u: new Wa(),
    Q: new Ha(),
    q: new Ia(),
    M: new La(),
    L: new Fa(),
    w: new $a(),
    I: new Ra(),
    d: new Ba(),
    D: new Xa(),
    E: new Ga(),
    e: new ja(),
    c: new za(),
    i: new Za(),
    a: new Ka(),
    b: new Ja(),
    B: new en(),
    h: new tn(),
    H: new rn(),
    K: new an(),
    k: new nn(),
    m: new on(),
    s: new un(),
    S: new sn(),
    X: new ln(),
    x: new cn(),
    t: new dn(),
    T: new fn(),
  },
  hn = /[yYQqMLwIdDecihHKkms]o|(\w)\1*|''|'(''|[^'])+('|$)|./g,
  mn = /P+p+|P+|p+|''|'(''|[^'])+('|$)|./g,
  gn = /^'([^]*?)'?$/,
  wn = /''/g,
  yn = /\S/,
  pn = /[a-zA-Z]/
function Tn(i, a, r, t) {
  var e, o, n, u, s, l, m, h, w, g, O, W, _, I, $, Q, B, Z
  c(3, arguments)
  var H = String(i),
    F = String(a),
    X = q(),
    j =
      (e =
        (o = t == null ? void 0 : t.locale) !== null && o !== void 0
          ? o
          : X.locale) !== null && e !== void 0
        ? e
        : Re
  if (!j.match) throw new RangeError('locale must contain match property')
  var z = b(
    (n =
      (u =
        (s =
          (l = t == null ? void 0 : t.firstWeekContainsDate) !== null &&
          l !== void 0
            ? l
            : t == null ||
              (m = t.locale) === null ||
              m === void 0 ||
              (h = m.options) === null ||
              h === void 0
            ? void 0
            : h.firstWeekContainsDate) !== null && s !== void 0
          ? s
          : X.firstWeekContainsDate) !== null && u !== void 0
        ? u
        : (w = X.locale) === null ||
          w === void 0 ||
          (g = w.options) === null ||
          g === void 0
        ? void 0
        : g.firstWeekContainsDate) !== null && n !== void 0
      ? n
      : 1
  )
  if (!(z >= 1 && z <= 7))
    throw new RangeError(
      'firstWeekContainsDate must be between 1 and 7 inclusively'
    )
  var ie = b(
    (O =
      (W =
        (_ =
          (I = t == null ? void 0 : t.weekStartsOn) !== null && I !== void 0
            ? I
            : t == null ||
              ($ = t.locale) === null ||
              $ === void 0 ||
              (Q = $.options) === null ||
              Q === void 0
            ? void 0
            : Q.weekStartsOn) !== null && _ !== void 0
          ? _
          : X.weekStartsOn) !== null && W !== void 0
        ? W
        : (B = X.locale) === null ||
          B === void 0 ||
          (Z = B.options) === null ||
          Z === void 0
        ? void 0
        : Z.weekStartsOn) !== null && O !== void 0
      ? O
      : 0
  )
  if (!(ie >= 0 && ie <= 6))
    throw new RangeError('weekStartsOn must be between 0 and 6 inclusively')
  if (F === '') return H === '' ? d(r) : new Date(NaN)
  var oe = {firstWeekContainsDate: z, weekStartsOn: ie, locale: j},
    ue = [new Ya()],
    xe = F.match(mn)
      .map(function (U) {
        var k = U[0]
        if (k in Se) {
          var S = Se[k]
          return S(U, j.formatLong)
        }
        return U
      })
      .join('')
      .match(hn),
    N = [],
    L = ut(xe),
    K
  try {
    var Ct = function () {
      var k = K.value
      !(t != null && t.useAdditionalWeekYearTokens) && pt(k) && De(k, F, i),
        !(t != null && t.useAdditionalDayOfYearTokens) && yt(k) && De(k, F, i)
      var S = k[0],
        we = vn[S]
      if (we) {
        var ze = we.incompatibleTokens
        if (Array.isArray(ze)) {
          var Ve = N.find(function (Ze) {
            return ze.includes(Ze.token) || Ze.token === S
          })
          if (Ve)
            throw new RangeError(
              "The format string mustn't contain `"
                .concat(Ve.fullToken, '` and `')
                .concat(k, '` at the same time')
            )
        } else if (we.incompatibleTokens === '*' && N.length > 0)
          throw new RangeError(
            "The format string mustn't contain `".concat(
              k,
              '` and any other token at the same time'
            )
          )
        N.push({token: S, fullToken: k})
        var Ee = we.run(H, k, j.match, oe)
        if (!Ee) return {v: new Date(NaN)}
        ue.push(Ee.setter), (H = Ee.rest)
      } else {
        if (S.match(pn))
          throw new RangeError(
            'Format string contains an unescaped latin alphabet character `' +
              S +
              '`'
          )
        if (
          (k === "''" ? (k = "'") : S === "'" && (k = bn(k)),
          H.indexOf(k) === 0)
        )
          H = H.slice(k.length)
        else return {v: new Date(NaN)}
      }
    }
    for (L.s(); !(K = L.n()).done; ) {
      var Be = Ct()
      if (G(Be) === 'object') return Be.v
    }
  } catch (U) {
    L.e(U)
  } finally {
    L.f()
  }
  if (H.length > 0 && yn.test(H)) return new Date(NaN)
  var xt = ue
      .map(function (U) {
        return U.priority
      })
      .sort(function (U, k) {
        return k - U
      })
      .filter(function (U, k, S) {
        return S.indexOf(U) === k
      })
      .map(function (U) {
        return ue
          .filter(function (k) {
            return k.priority === U
          })
          .sort(function (k, S) {
            return S.subPriority - k.subPriority
          })
      })
      .map(function (U) {
        return U[0]
      }),
    Ye = d(r)
  if (isNaN(Ye.getTime())) return new Date(NaN)
  var se = vt(Ye, be(Ye)),
    Xe = {},
    me = ut(xt),
    Ge
  try {
    for (me.s(); !(Ge = me.n()).done; ) {
      var je = Ge.value
      if (!je.validate(se, oe)) return new Date(NaN)
      var ge = je.set(se, Xe, oe)
      Array.isArray(ge) ? ((se = ge[0]), Oa(Xe, ge[1])) : (se = ge)
    }
  } catch (U) {
    me.e(U)
  } finally {
    me.f()
  }
  return se
}
function bn(i) {
  return i.match(gn)[1].replace(wn, "'")
}
function Dn(i, a) {
  c(2, arguments)
  var r = d(i),
    t = b(a)
  return r.setDate(t), r
}
function Mn(i, a) {
  c(2, arguments)
  var r = d(i),
    t = b(a)
  return r.setHours(t), r
}
function On(i, a) {
  c(2, arguments)
  var r = d(i),
    t = b(a)
  return r.setMinutes(t), r
}
function Pn(i, a) {
  c(2, arguments)
  var r = d(i),
    t = b(a),
    e = r.getFullYear(),
    o = r.getDate(),
    n = new Date(0)
  n.setFullYear(e, t, 15), n.setHours(0, 0, 0, 0)
  var u = Tt(n)
  return r.setMonth(t, Math.min(o, u)), r
}
function kn(i, a) {
  c(2, arguments)
  var r = d(i),
    t = b(a)
  return r.setSeconds(t), r
}
function Cn(i, a) {
  c(2, arguments)
  var r = d(i),
    t = b(a)
  return r.setMilliseconds(t), r
}
function xn(i, a) {
  c(2, arguments)
  var r = d(i),
    t = b(a)
  return isNaN(r.getTime()) ? new Date(NaN) : (r.setFullYear(t), r)
}
function lt(i) {
  c(1, arguments)
  var a = d(i)
  return a.setDate(1), a.setHours(0, 0, 0, 0), a
}
function ye(i) {
  c(1, arguments)
  var a = d(i),
    r = new Date(0)
  return r.setFullYear(a.getFullYear(), 0, 1), r.setHours(0, 0, 0, 0), r
}
function Yn(i, a) {
  var r
  c(1, arguments)
  var t = b(
    (r = a == null ? void 0 : a.additionalDigits) !== null && r !== void 0
      ? r
      : 2
  )
  if (t !== 2 && t !== 1 && t !== 0)
    throw new RangeError('additionalDigits must be 0, 1 or 2')
  if (
    !(
      typeof i == 'string' ||
      Object.prototype.toString.call(i) === '[object String]'
    )
  )
    return new Date(NaN)
  var e = Nn(i),
    o
  if (e.date) {
    var n = Wn(e.date, t)
    o = Hn(n.restDateString, n.year)
  }
  if (!o || isNaN(o.getTime())) return new Date(NaN)
  var u = o.getTime(),
    s = 0,
    l
  if (e.time && ((s = In(e.time)), isNaN(s))) return new Date(NaN)
  if (e.timezone) {
    if (((l = Ln(e.timezone)), isNaN(l))) return new Date(NaN)
  } else {
    var m = new Date(u + s),
      h = new Date(0)
    return (
      h.setFullYear(m.getUTCFullYear(), m.getUTCMonth(), m.getUTCDate()),
      h.setHours(
        m.getUTCHours(),
        m.getUTCMinutes(),
        m.getUTCSeconds(),
        m.getUTCMilliseconds()
      ),
      h
    )
  }
  return new Date(u + s + l)
}
var pe = {
    dateTimeDelimiter: /[T ]/,
    timeZoneDelimiter: /[Z ]/i,
    timezone: /([Z+-].*)$/,
  },
  En = /^-?(?:(\d{3})|(\d{2})(?:-?(\d{2}))?|W(\d{2})(?:-?(\d{1}))?|)$/,
  _n =
    /^(\d{2}(?:[.,]\d*)?)(?::?(\d{2}(?:[.,]\d*)?))?(?::?(\d{2}(?:[.,]\d*)?))?$/,
  Un = /^([+-])(\d{2})(?::?(\d{2}))?$/
function Nn(i) {
  var a = {},
    r = i.split(pe.dateTimeDelimiter),
    t
  if (r.length > 2) return a
  if (
    (/:/.test(r[0])
      ? (t = r[0])
      : ((a.date = r[0]),
        (t = r[1]),
        pe.timeZoneDelimiter.test(a.date) &&
          ((a.date = i.split(pe.timeZoneDelimiter)[0]),
          (t = i.substr(a.date.length, i.length)))),
    t)
  ) {
    var e = pe.timezone.exec(t)
    e ? ((a.time = t.replace(e[1], '')), (a.timezone = e[1])) : (a.time = t)
  }
  return a
}
function Wn(i, a) {
  var r = new RegExp(
      '^(?:(\\d{4}|[+-]\\d{' +
        (4 + a) +
        '})|(\\d{2}|[+-]\\d{' +
        (2 + a) +
        '})$)'
    ),
    t = i.match(r)
  if (!t) return {year: NaN, restDateString: ''}
  var e = t[1] ? parseInt(t[1]) : null,
    o = t[2] ? parseInt(t[2]) : null
  return {
    year: o === null ? e : o * 100,
    restDateString: i.slice((t[1] || t[2]).length),
  }
}
function Hn(i, a) {
  if (a === null) return new Date(NaN)
  var r = i.match(En)
  if (!r) return new Date(NaN)
  var t = !!r[4],
    e = fe(r[1]),
    o = fe(r[2]) - 1,
    n = fe(r[3]),
    u = fe(r[4]),
    s = fe(r[5]) - 1
  if (t) return Rn(a, u, s) ? Fn(a, u, s) : new Date(NaN)
  var l = new Date(0)
  return !$n(a, o, n) || !An(a, e)
    ? new Date(NaN)
    : (l.setUTCFullYear(a, o, Math.max(e, n)), l)
}
function fe(i) {
  return i ? parseInt(i) : 1
}
function In(i) {
  var a = i.match(_n)
  if (!a) return NaN
  var r = He(a[1]),
    t = He(a[2]),
    e = He(a[3])
  return qn(r, t, e) ? r * ke + t * Pe + e * 1e3 : NaN
}
function He(i) {
  return (i && parseFloat(i.replace(',', '.'))) || 0
}
function Ln(i) {
  if (i === 'Z') return 0
  var a = i.match(Un)
  if (!a) return 0
  var r = a[1] === '+' ? -1 : 1,
    t = parseInt(a[2]),
    e = (a[3] && parseInt(a[3])) || 0
  return Qn(t, e) ? r * (t * ke + e * Pe) : NaN
}
function Fn(i, a, r) {
  var t = new Date(0)
  t.setUTCFullYear(i, 0, 4)
  var e = t.getUTCDay() || 7,
    o = (a - 1) * 7 + r + 1 - e
  return t.setUTCDate(t.getUTCDate() + o), t
}
var Sn = [31, null, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31]
function kt(i) {
  return i % 400 === 0 || (i % 4 === 0 && i % 100 !== 0)
}
function $n(i, a, r) {
  return a >= 0 && a <= 11 && r >= 1 && r <= (Sn[a] || (kt(i) ? 29 : 28))
}
function An(i, a) {
  return a >= 1 && a <= (kt(i) ? 366 : 365)
}
function Rn(i, a, r) {
  return a >= 1 && a <= 53 && r >= 0 && r <= 6
}
function qn(i, a, r) {
  return i === 24
    ? a === 0 && r === 0
    : r >= 0 && r < 60 && a >= 0 && a < 60 && i >= 0 && i < 25
}
function Qn(i, a) {
  return a >= 0 && a <= 59
}
function Bn(i, a) {
  var r, t
  c(1, arguments)
  var e = d(i)
  if (isNaN(e.getTime())) throw new RangeError('Invalid time value')
  var o = String(
      (r = a == null ? void 0 : a.format) !== null && r !== void 0
        ? r
        : 'extended'
    ),
    n = String(
      (t = a == null ? void 0 : a.representation) !== null && t !== void 0
        ? t
        : 'complete'
    )
  if (o !== 'extended' && o !== 'basic')
    throw new RangeError("format must be 'extended' or 'basic'")
  if (n !== 'date' && n !== 'time' && n !== 'complete')
    throw new RangeError("representation must be 'date', 'time', or 'complete'")
  var u = '',
    s = '',
    l = o === 'extended' ? '-' : '',
    m = o === 'extended' ? ':' : ''
  if (n !== 'time') {
    var h = y(e.getDate(), 2),
      w = y(e.getMonth() + 1, 2),
      g = y(e.getFullYear(), 4)
    u = ''.concat(g).concat(l).concat(w).concat(l).concat(h)
  }
  if (n !== 'date') {
    var O = e.getTimezoneOffset()
    if (O !== 0) {
      var W = Math.abs(O),
        _ = y(Math.floor(W / 60), 2),
        I = y(W % 60, 2),
        $ = O < 0 ? '+' : '-'
      s = ''.concat($).concat(_, ':').concat(I)
    } else s = 'Z'
    var Q = y(e.getHours(), 2),
      B = y(e.getMinutes(), 2),
      Z = y(e.getSeconds(), 2),
      H = u === '' ? '' : 'T',
      F = [Q, B, Z].join(m)
    u = ''.concat(u).concat(H).concat(F).concat(s)
  }
  return u
}
function Xn(i, a) {
  c(2, arguments)
  var r = d(i).getTime(),
    t = d(a.start).getTime(),
    e = d(a.end).getTime()
  if (!(t <= e)) throw new RangeError('Invalid interval')
  return r >= t && r <= e
}
var $e = {exports: {}}
;(function (i, a) {
  Object.defineProperty(a, '__esModule', {value: !0}), (a.default = void 0)
  var r = function (s, l) {
      switch (s) {
        case 'P':
          return l.date({width: 'short'})
        case 'PP':
          return l.date({width: 'medium'})
        case 'PPP':
          return l.date({width: 'long'})
        case 'PPPP':
        default:
          return l.date({width: 'full'})
      }
    },
    t = function (s, l) {
      switch (s) {
        case 'p':
          return l.time({width: 'short'})
        case 'pp':
          return l.time({width: 'medium'})
        case 'ppp':
          return l.time({width: 'long'})
        case 'pppp':
        default:
          return l.time({width: 'full'})
      }
    },
    e = function (s, l) {
      var m = s.match(/(P+)(p+)?/) || [],
        h = m[1],
        w = m[2]
      if (!w) return r(s, l)
      var g
      switch (h) {
        case 'P':
          g = l.dateTime({width: 'short'})
          break
        case 'PP':
          g = l.dateTime({width: 'medium'})
          break
        case 'PPP':
          g = l.dateTime({width: 'long'})
          break
        case 'PPPP':
        default:
          g = l.dateTime({width: 'full'})
          break
      }
      return g.replace('{{date}}', r(h, l)).replace('{{time}}', t(w, l))
    },
    o = {p: t, P: e},
    n = o
  ;(a.default = n), (i.exports = a.default)
})($e, $e.exports)
var Gn = $e.exports
const jn = Wt(Gn),
  zn = {
    y: {sectionType: 'year', contentType: 'digit', maxLength: 4},
    yy: 'year',
    yyy: {sectionType: 'year', contentType: 'digit', maxLength: 4},
    yyyy: 'year',
    M: {sectionType: 'month', contentType: 'digit', maxLength: 2},
    MM: 'month',
    MMMM: {sectionType: 'month', contentType: 'letter'},
    MMM: {sectionType: 'month', contentType: 'letter'},
    L: {sectionType: 'month', contentType: 'digit', maxLength: 2},
    LL: 'month',
    LLL: {sectionType: 'month', contentType: 'letter'},
    LLLL: {sectionType: 'month', contentType: 'letter'},
    d: {sectionType: 'day', contentType: 'digit', maxLength: 2},
    dd: 'day',
    do: {sectionType: 'day', contentType: 'digit-with-letter'},
    E: {sectionType: 'weekDay', contentType: 'letter'},
    EE: {sectionType: 'weekDay', contentType: 'letter'},
    EEE: {sectionType: 'weekDay', contentType: 'letter'},
    EEEE: {sectionType: 'weekDay', contentType: 'letter'},
    EEEEE: {sectionType: 'weekDay', contentType: 'letter'},
    i: {sectionType: 'weekDay', contentType: 'digit', maxLength: 1},
    ii: 'weekDay',
    iii: {sectionType: 'weekDay', contentType: 'letter'},
    iiii: {sectionType: 'weekDay', contentType: 'letter'},
    e: {sectionType: 'weekDay', contentType: 'digit', maxLength: 1},
    ee: 'weekDay',
    eee: {sectionType: 'weekDay', contentType: 'letter'},
    eeee: {sectionType: 'weekDay', contentType: 'letter'},
    eeeee: {sectionType: 'weekDay', contentType: 'letter'},
    eeeeee: {sectionType: 'weekDay', contentType: 'letter'},
    c: {sectionType: 'weekDay', contentType: 'digit', maxLength: 1},
    cc: 'weekDay',
    ccc: {sectionType: 'weekDay', contentType: 'letter'},
    cccc: {sectionType: 'weekDay', contentType: 'letter'},
    ccccc: {sectionType: 'weekDay', contentType: 'letter'},
    cccccc: {sectionType: 'weekDay', contentType: 'letter'},
    a: 'meridiem',
    aa: 'meridiem',
    aaa: 'meridiem',
    H: {sectionType: 'hours', contentType: 'digit', maxLength: 2},
    HH: 'hours',
    h: {sectionType: 'hours', contentType: 'digit', maxLength: 2},
    hh: 'hours',
    m: {sectionType: 'minutes', contentType: 'digit', maxLength: 2},
    mm: 'minutes',
    s: {sectionType: 'seconds', contentType: 'digit', maxLength: 2},
    ss: 'seconds',
  },
  Vn = {
    year: 'yyyy',
    month: 'LLLL',
    monthShort: 'MMM',
    dayOfMonth: 'd',
    weekday: 'EEEE',
    weekdayShort: 'EEEEEE',
    hours24h: 'HH',
    hours12h: 'hh',
    meridiem: 'aa',
    minutes: 'mm',
    seconds: 'ss',
    fullDate: 'PP',
    fullDateWithWeekday: 'PPPP',
    keyboardDate: 'P',
    shortDate: 'MMM d',
    normalDate: 'd MMMM',
    normalDateWithWeekday: 'EEE, MMM d',
    monthAndYear: 'LLLL yyyy',
    monthAndDate: 'MMMM d',
    fullTime: 'p',
    fullTime12h: 'hh:mm aa',
    fullTime24h: 'HH:mm',
    fullDateTime: 'PP p',
    fullDateTime12h: 'PP hh:mm aa',
    fullDateTime24h: 'PP HH:mm',
    keyboardDateTime: 'P p',
    keyboardDateTime12h: 'P hh:mm aa',
    keyboardDateTime24h: 'P HH:mm',
  }
class Zn {
  constructor({locale: a, formats: r} = {}) {
    ;(this.isMUIAdapter = !0),
      (this.isTimezoneCompatible = !1),
      (this.lib = 'date-fns'),
      (this.locale = void 0),
      (this.formats = void 0),
      (this.formatTokenMap = zn),
      (this.escapedCharacters = {start: "'", end: "'"}),
      (this.date = (t) =>
        typeof t > 'u' ? new Date() : t === null ? null : new Date(t)),
      (this.dateWithTimezone = (t) => this.date(t)),
      (this.getTimezone = () => 'default'),
      (this.setTimezone = (t) => t),
      (this.toJsDate = (t) => t),
      (this.parseISO = (t) => Yn(t)),
      (this.toISO = (t) => Bn(t, {format: 'extended'})),
      (this.parse = (t, e) =>
        t === '' ? null : Tn(t, e, new Date(), {locale: this.locale})),
      (this.getCurrentLocaleCode = () => {
        var t
        return ((t = this.locale) == null ? void 0 : t.code) || 'en-US'
      }),
      (this.is12HourCycleInCurrentLocale = () =>
        this.locale ? /a/.test(this.locale.formatLong.time()) : !0),
      (this.expandFormat = (t) => {
        const e = /P+p+|P+|p+|''|'(''|[^'])+('|$)|./g
        return t
          .match(e)
          .map((o) => {
            const n = o[0]
            if (n === 'p' || n === 'P') {
              const u = jn[n],
                s = this.locale || Re
              return u(o, s.formatLong, {})
            }
            return o
          })
          .join('')
      }),
      (this.getFormatHelperText = (t) =>
        this.expandFormat(t)
          .replace(/(aaa|aa|a)/g, '(a|p)m')
          .toLocaleLowerCase()),
      (this.isNull = (t) => t === null),
      (this.isValid = (t) => ft(this.date(t))),
      (this.format = (t, e) => this.formatByString(t, this.formats[e])),
      (this.formatByString = (t, e) => ia(t, e, {locale: this.locale})),
      (this.formatNumber = (t) => t),
      (this.getDiff = (t, e, o) => {
        switch (o) {
          case 'years':
            return Rt(t, this.date(e))
          case 'quarters':
            return Xt(t, this.date(e))
          case 'months':
            return ct(t, this.date(e))
          case 'weeks':
            return zt(t, this.date(e))
          case 'days':
            return dt(t, this.date(e))
          case 'hours':
            return Zt(t, this.date(e))
          case 'minutes':
            return Kt(t, this.date(e))
          case 'seconds':
            return Jt(t, this.date(e))
          default:
            return Ce(t, this.date(e))
        }
      }),
      (this.isEqual = (t, e) => (t === null && e === null ? !0 : ya(t, e))),
      (this.isSameYear = (t, e) => Ta(t, e)),
      (this.isSameMonth = (t, e) => ba(t, e)),
      (this.isSameDay = (t, e) => pa(t, e)),
      (this.isSameHour = (t, e) => Da(t, e)),
      (this.isAfter = (t, e) => We(t, e)),
      (this.isAfterYear = (t, e) => We(t, Ue(e))),
      (this.isAfterDay = (t, e) => We(t, Le(e))),
      (this.isBefore = (t, e) => de(t, e)),
      (this.isBeforeYear = (t, e) => de(t, ye(e))),
      (this.isBeforeDay = (t, e) => de(t, ae(e))),
      (this.isWithinRange = (t, [e, o]) => Xn(t, {start: e, end: o})),
      (this.startOfYear = (t) => ye(t)),
      (this.startOfMonth = (t) => lt(t)),
      (this.startOfWeek = (t) => ee(t, {locale: this.locale})),
      (this.startOfDay = (t) => ae(t)),
      (this.endOfYear = (t) => Ue(t)),
      (this.endOfMonth = (t) => Fe(t)),
      (this.endOfWeek = (t) => _e(t, {locale: this.locale})),
      (this.endOfDay = (t) => Le(t)),
      (this.addYears = (t, e) => Je(t, e)),
      (this.addMonths = (t, e) => Te(t, e)),
      (this.addWeeks = (t, e) => $t(t, e)),
      (this.addDays = (t, e) => Ie(t, e)),
      (this.addHours = (t, e) => St(t, e)),
      (this.addMinutes = (t, e) => Lt(t, e)),
      (this.addSeconds = (t, e) => Ht(t, e)),
      (this.getYear = (t) => wa(t)),
      (this.getMonth = (t) => ca(t)),
      (this.getDate = (t) => ua(t)),
      (this.getHours = (t) => sa(t)),
      (this.getMinutes = (t) => la(t)),
      (this.getSeconds = (t) => da(t)),
      (this.getMilliseconds = (t) => fa(t)),
      (this.setYear = (t, e) => xn(t, e)),
      (this.setMonth = (t, e) => Pn(t, e)),
      (this.setDate = (t, e) => Dn(t, e)),
      (this.setHours = (t, e) => Mn(t, e)),
      (this.setMinutes = (t, e) => On(t, e)),
      (this.setSeconds = (t, e) => kn(t, e)),
      (this.setMilliseconds = (t, e) => Cn(t, e)),
      (this.getDaysInMonth = (t) => Tt(t)),
      (this.getNextMonth = (t) => Te(t, 1)),
      (this.getPreviousMonth = (t) => Te(t, -1)),
      (this.getMonthArray = (t) => {
        const o = [ye(t)]
        for (; o.length < 12; ) {
          const n = o[o.length - 1]
          o.push(this.getNextMonth(n))
        }
        return o
      }),
      (this.mergeDateAndTime = (t, e) =>
        this.setSeconds(
          this.setMinutes(
            this.setHours(t, this.getHours(e)),
            this.getMinutes(e)
          ),
          this.getSeconds(e)
        )),
      (this.getWeekdays = () => {
        const t = new Date()
        return er({
          start: ee(t, {locale: this.locale}),
          end: _e(t, {locale: this.locale}),
        }).map((e) => this.formatByString(e, 'EEEEEE'))
      }),
      (this.getWeekArray = (t) => {
        const e = ee(lt(t), {locale: this.locale}),
          o = _e(Fe(t), {locale: this.locale})
        let n = 0,
          u = e
        const s = []
        for (; de(u, o); ) {
          const l = Math.floor(n / 7)
          ;(s[l] = s[l] || []), s[l].push(u), (u = Ie(u, 1)), (n += 1)
        }
        return s
      }),
      (this.getWeekNumber = (t) => ga(t, {locale: this.locale})),
      (this.getYearRange = (t, e) => {
        const o = ye(t),
          n = Ue(e),
          u = []
        let s = o
        for (; de(s, n); ) u.push(s), (s = Je(s, 1))
        return u
      }),
      (this.getMeridiemText = (t) => (t === 'am' ? 'AM' : 'PM')),
      (this.locale = a),
      (this.formats = Yt({}, Vn, r))
  }
}
function ri({children: i, ...a}) {
  const {dateAdapter: r, ...t} = a
  return Et(_t, {dateAdapter: r || Zn, ...t, children: i})
}
export {ri as D}
//# sourceMappingURL=DateFnsProvider-e5a232b5.js.map
