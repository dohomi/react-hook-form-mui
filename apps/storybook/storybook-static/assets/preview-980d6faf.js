import {a as n} from './chunk-AY7I2SME-c7b6cf8a.js'
var p = (t, i) => typeof i[t] > 'u' && !(t in i),
  o = (t) => {
    let {
      initialArgs: i,
      argTypes: a,
      parameters: {actions: r},
    } = t
    if (!r || r.disable || !r.argTypesRegex || !a) return {}
    let g = new RegExp(r.argTypesRegex)
    return Object.entries(a)
      .filter(([e]) => !!g.test(e))
      .reduce((e, [s, y]) => (p(s, i) && (e[s] = n(s)), e), {})
  },
  l = (t) => {
    let {
      initialArgs: i,
      argTypes: a,
      parameters: {actions: r},
    } = t
    return (r != null && r.disable) || !a
      ? {}
      : Object.entries(a)
          .filter(([g, e]) => !!e.action)
          .reduce(
            (g, [e, s]) => (
              p(e, i) && (g[e] = n(typeof s.action == 'string' ? s.action : e)),
              g
            ),
            {}
          )
  },
  f = [l, o]
export {f as argsEnhancers}
//# sourceMappingURL=preview-980d6faf.js.map
