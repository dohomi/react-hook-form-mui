var t = {}
/**
 * @license React
 * react-is.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var S = Symbol.for('react.element'),
  d = Symbol.for('react.portal'),
  o = Symbol.for('react.fragment'),
  n = Symbol.for('react.strict_mode'),
  c = Symbol.for('react.profiler'),
  f = Symbol.for('react.provider'),
  s = Symbol.for('react.context'),
  a = Symbol.for('react.server_context'),
  u = Symbol.for('react.forward_ref'),
  i = Symbol.for('react.suspense'),
  l = Symbol.for('react.suspense_list'),
  y = Symbol.for('react.memo'),
  m = Symbol.for('react.lazy'),
  $ = Symbol.for('react.offscreen'),
  b
b = Symbol.for('react.module.reference')
function r(e) {
  if (typeof e == 'object' && e !== null) {
    var p = e.$$typeof
    switch (p) {
      case S:
        switch (((e = e.type), e)) {
          case o:
          case c:
          case n:
          case i:
          case l:
            return e
          default:
            switch (((e = e && e.$$typeof), e)) {
              case a:
              case s:
              case u:
              case m:
              case y:
              case f:
                return e
              default:
                return p
            }
        }
      case d:
        return p
    }
  }
}
t.ContextConsumer = s
t.ContextProvider = f
t.Element = S
t.ForwardRef = u
t.Fragment = o
t.Lazy = m
t.Memo = y
t.Portal = d
t.Profiler = c
t.StrictMode = n
t.Suspense = i
t.SuspenseList = l
t.isAsyncMode = function () {
  return !1
}
t.isConcurrentMode = function () {
  return !1
}
t.isContextConsumer = function (e) {
  return r(e) === s
}
t.isContextProvider = function (e) {
  return r(e) === f
}
t.isElement = function (e) {
  return typeof e == 'object' && e !== null && e.$$typeof === S
}
t.isForwardRef = function (e) {
  return r(e) === u
}
t.isFragment = function (e) {
  return r(e) === o
}
t.isLazy = function (e) {
  return r(e) === m
}
t.isMemo = function (e) {
  return r(e) === y
}
t.isPortal = function (e) {
  return r(e) === d
}
t.isProfiler = function (e) {
  return r(e) === c
}
t.isStrictMode = function (e) {
  return r(e) === n
}
t.isSuspense = function (e) {
  return r(e) === i
}
t.isSuspenseList = function (e) {
  return r(e) === l
}
t.isValidElementType = function (e) {
  return (
    typeof e == 'string' ||
    typeof e == 'function' ||
    e === o ||
    e === c ||
    e === n ||
    e === i ||
    e === l ||
    e === $ ||
    (typeof e == 'object' &&
      e !== null &&
      (e.$$typeof === m ||
        e.$$typeof === y ||
        e.$$typeof === f ||
        e.$$typeof === s ||
        e.$$typeof === u ||
        e.$$typeof === b ||
        e.getModuleId !== void 0))
  )
}
t.typeOf = r
//# sourceMappingURL=react-is.production.min-a192e302.js.map
