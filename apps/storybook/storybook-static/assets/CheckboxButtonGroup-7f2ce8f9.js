import {b as L, j as i} from './useThemeProps-3be52b90.js'
import {r as q} from './index-ebeaab24.js'
import {t as w, A as H} from './Button-934b6c03.js'
import {u as M} from './useTheme-ccc2f4e9.js'
import {F as S, a as $} from './FormHelperText-a02b62e1.js'
import {F as j} from './FormLabel-977af3e7.js'
import {F as z} from './FormGroup-d89e04af.js'
import {F as D} from './FormControlLabel-5a6a631a.js'
import {C as J} from './Checkbox-d8c1e2f4.js'
function Y({
  helperText: t,
  options: c,
  label: f,
  name: C,
  parseError: u,
  required: l,
  labelKey: F = 'label',
  valueKey: e = 'id',
  returnObject: m,
  disabled: g,
  row: x,
  control: k,
  checkboxColor: b,
  rules: E,
  labelProps: G,
  ...p
}) {
  const I = w(),
    d = u || I,
    y = M(),
    {
      field: {value: a = [], onChange: A},
      fieldState: {error: n},
    } = H({
      name: C,
      rules: l ? {required: 'This field is required'} : E,
      control: k,
    })
  t = n ? (typeof d == 'function' ? d(n) : n.message) : t
  const B = (r) => {
    const o = [...a]
    a.findIndex((s) => (m ? s[e] === r : s === r)) === -1
      ? o.push(m ? c.find((s) => s[e] === r) : r)
      : o.splice(
          a.findIndex((s) => (m ? s[e] === r : s === r)),
          1
        ),
      A(o),
      typeof p.onChange == 'function' && p.onChange(o)
  }
  return L(S, {
    error: !!n,
    required: l,
    children: [
      f && i(j, {error: !!n, children: f}),
      i(z, {
        row: x,
        children: c.map((r) => {
          const o = r[e]
          o ||
            console.error(
              `CheckboxButtonGroup: valueKey ${e} does not exist on option`,
              r
            )
          const h = a.findIndex((s) => (m ? s[e] === o : s === o)) !== -1
          return q.createElement(D, {
            ...G,
            control: i(J, {
              sx: {color: n ? y.palette.error.main : void 0},
              color: b || 'primary',
              value: o,
              checked: h,
              disabled: g,
              onChange: () => B(o),
            }),
            label: r[F],
            key: o,
          })
        }),
      }),
      t && i($, {children: t}),
    ],
  })
}
export {Y as C}
//# sourceMappingURL=CheckboxButtonGroup-7f2ce8f9.js.map
