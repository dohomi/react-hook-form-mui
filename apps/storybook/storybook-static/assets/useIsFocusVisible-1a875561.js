import {r as a} from './index-ebeaab24.js'
let i = !0,
  s = !1,
  l
const c = {
  text: !0,
  search: !0,
  url: !0,
  tel: !0,
  email: !0,
  password: !0,
  number: !0,
  date: !0,
  month: !0,
  week: !0,
  time: !0,
  datetime: !0,
  'datetime-local': !0,
}
function f(e) {
  const {type: t, tagName: r} = e
  return !!(
    (r === 'INPUT' && c[t] && !e.readOnly) ||
    (r === 'TEXTAREA' && !e.readOnly) ||
    e.isContentEditable
  )
}
function d(e) {
  e.metaKey || e.altKey || e.ctrlKey || (i = !0)
}
function n() {
  i = !1
}
function h() {
  this.visibilityState === 'hidden' && s && (i = !0)
}
function y(e) {
  e.addEventListener('keydown', d, !0),
    e.addEventListener('mousedown', n, !0),
    e.addEventListener('pointerdown', n, !0),
    e.addEventListener('touchstart', n, !0),
    e.addEventListener('visibilitychange', h, !0)
}
function b(e) {
  const {target: t} = e
  try {
    return t.matches(':focus-visible')
  } catch {}
  return i || f(t)
}
function w() {
  const e = a.useCallback((u) => {
      u != null && y(u.ownerDocument)
    }, []),
    t = a.useRef(!1)
  function r() {
    return t.current
      ? ((s = !0),
        window.clearTimeout(l),
        (l = window.setTimeout(() => {
          s = !1
        }, 100)),
        (t.current = !1),
        !0)
      : !1
  }
  function o(u) {
    return b(u) ? ((t.current = !0), !0) : !1
  }
  return {isFocusVisibleRef: t, onFocus: o, onBlur: r, ref: e}
}
export {w as u}
//# sourceMappingURL=useIsFocusVisible-1a875561.js.map
