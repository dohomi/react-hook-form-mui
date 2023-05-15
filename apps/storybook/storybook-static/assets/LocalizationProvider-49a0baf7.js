import {r as s} from './index-ebeaab24.js'
import {u as g, j as L} from './useThemeProps-3be52b90.js'
function c() {
  return (
    (c = Object.assign
      ? Object.assign.bind()
      : function (e) {
          for (var a = 1; a < arguments.length; a++) {
            var t = arguments[a]
            for (var r in t)
              Object.prototype.hasOwnProperty.call(t, r) && (e[r] = t[r])
          }
          return e
        }),
    c.apply(this, arguments)
  )
}
function b(e, a) {
  if (e == null) return {}
  var t = {},
    r = Object.keys(e),
    o,
    n
  for (n = 0; n < r.length; n++)
    (o = r[n]), !(a.indexOf(o) >= 0) && (t[o] = e[o])
  return t
}
const y = ['localeText'],
  T = s.createContext(null)
function P(e) {
  var a
  const {localeText: t} = e,
    r = b(e, y),
    {utils: o, localeText: n} =
      (a = s.useContext(T)) != null ? a : {utils: void 0, localeText: void 0},
    j = g({props: r, name: 'MuiLocalizationProvider'}),
    {
      children: v,
      dateAdapter: l,
      dateFormats: u,
      dateLibInstance: d,
      adapterLocale: p,
      localeText: m,
    } = j,
    f = s.useMemo(() => c({}, m, n, t), [m, n, t]),
    i = s.useMemo(() => {
      if (!l) return o || null
      const h = new l({locale: p, formats: u, instance: d})
      if (!h.isMUIAdapter)
        throw new Error(
          [
            'MUI: The date adapter should be imported from `@mui/x-date-pickers` or `@mui/x-date-pickers-pro`, not from `@date-io`',
            "For example, `import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs'` instead of `import AdapterDayjs from '@date-io/dayjs'`",
            'More information on the installation documentation: https://mui.com/x/react-date-pickers/getting-started/#installation',
          ].join(`
`)
        )
      return h
    }, [l, p, u, d, o]),
    x = s.useMemo(
      () =>
        i
          ? {
              minDate: i.date('1900-01-01T00:00:00.000'),
              maxDate: i.date('2099-12-31T00:00:00.000'),
            }
          : null,
      [i]
    ),
    M = s.useMemo(() => ({utils: i, defaultDates: x, localeText: f}), [x, i, f])
  return L(T.Provider, {value: M, children: v})
}
export {P as L, T as M, b as _, c as a}
//# sourceMappingURL=LocalizationProvider-49a0baf7.js.map
