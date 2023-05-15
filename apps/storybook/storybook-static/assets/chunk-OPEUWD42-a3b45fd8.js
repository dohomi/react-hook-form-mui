var g = 'storybook/actions',
  O = `${g}/action-event`
let i
const h = new Uint8Array(16)
function D() {
  if (
    !i &&
    ((i =
      typeof crypto < 'u' &&
      crypto.getRandomValues &&
      crypto.getRandomValues.bind(crypto)),
    !i)
  )
    throw new Error(
      'crypto.getRandomValues() not supported. See https://github.com/uuidjs/uuid#getrandomvalues-not-supported'
    )
  return i(h)
}
const o = []
for (let t = 0; t < 256; ++t) o.push((t + 256).toString(16).slice(1))
function U(t, n = 0) {
  return (
    o[t[n + 0]] +
    o[t[n + 1]] +
    o[t[n + 2]] +
    o[t[n + 3]] +
    '-' +
    o[t[n + 4]] +
    o[t[n + 5]] +
    '-' +
    o[t[n + 6]] +
    o[t[n + 7]] +
    '-' +
    o[t[n + 8]] +
    o[t[n + 9]] +
    '-' +
    o[t[n + 10]] +
    o[t[n + 11]] +
    o[t[n + 12]] +
    o[t[n + 13]] +
    o[t[n + 14]] +
    o[t[n + 15]]
  ).toLowerCase()
}
const v =
    typeof crypto < 'u' && crypto.randomUUID && crypto.randomUUID.bind(crypto),
  u = {randomUUID: v}
function b(t, n, e) {
  if (u.randomUUID && !n && !t) return u.randomUUID()
  t = t || {}
  const r = t.random || (t.rng || D)()
  if (((r[6] = (r[6] & 15) | 64), (r[8] = (r[8] & 63) | 128), n)) {
    e = e || 0
    for (let c = 0; c < 16; ++c) n[e + c] = r[c]
    return n
  }
  return U(r)
}
const {addons: j} = __STORYBOOK_MODULE_PREVIEW_API__
var w = {depth: 10, clearOnStoryChange: !0, limit: 50},
  a = (t, n) => {
    let e = Object.getPrototypeOf(t)
    return !e || n(e) ? e : a(e, n)
  },
  E = (t) =>
    !!(
      typeof t == 'object' &&
      t &&
      a(t, (n) => /^Synthetic(?:Base)?Event$/.test(n.constructor.name)) &&
      typeof t.persist == 'function'
    ),
  I = (t) => {
    if (E(t)) {
      let n = Object.create(
        t.constructor.prototype,
        Object.getOwnPropertyDescriptors(t)
      )
      n.persist()
      let e = Object.getOwnPropertyDescriptor(n, 'view'),
        r = e == null ? void 0 : e.value
      return (
        typeof r == 'object' &&
          (r == null ? void 0 : r.constructor.name) === 'Window' &&
          Object.defineProperty(n, 'view', {
            ...e,
            value: Object.create(r.constructor.prototype),
          }),
        n
      )
    }
    return t
  }
function _(t, n = {}) {
  let e = {...w, ...n},
    r = function (...c) {
      let d = j.getChannel(),
        l = b(),
        y = 5,
        p = c.map(I),
        s = c.length > 1 ? p : p[0],
        m = {
          id: l,
          count: 0,
          data: {name: t, args: s},
          options: {
            ...e,
            maxDepth: y + (e.depth || 3),
            allowFunction: e.allowFunction || !1,
          },
        }
      d.emit(O, m)
    }
  return (r.isAction = !0), r
}
export {_ as a}
//# sourceMappingURL=chunk-OPEUWD42-a3b45fd8.js.map
