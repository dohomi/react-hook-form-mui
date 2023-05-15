import {j as a, b as P} from './useThemeProps-3be52b90.js'
import {r as j} from './index-ebeaab24.js'
import {t as L, C as M} from './Button-934b6c03.js'
import {T as k} from './TextField-4354f47c.js'
import {M as q} from './MenuItem-4620b72b.js'
function y({
  name: f,
  required: p,
  valueKey: t = 'id',
  labelKey: h = 'label',
  options: c = [],
  parseError: b,
  type: l,
  objectOnChange: x,
  validation: i = {},
  control: C,
  ...e
}) {
  var d
  const g = L(),
    m = b || g,
    u = !!((d = e.SelectProps) != null && d.native),
    E = u ? 'option' : q
  return (
    p && !i.required && (i.required = 'This field is required'),
    a(M, {
      name: f,
      rules: i,
      control: C,
      render: ({
        field: {onBlur: S, onChange: T, value: n, ref: F},
        fieldState: {error: s},
      }) => (
        l === 'number' &&
          typeof n < 'u' &&
          ((e.InputLabelProps = e.InputLabelProps || {}),
          (e.InputLabelProps.shrink = !0)),
        (n = (n == null ? void 0 : n[t]) ?? n),
        P(k, {
          ...e,
          name: f,
          value: n ?? '',
          onBlur: S,
          onChange: (r) => {
            let o = r.target.value
            l === 'number' && o && (o = Number(o)),
              T(o),
              typeof e.onChange == 'function' &&
                (x && (o = c.find((I) => I[t] === o)), e.onChange(o))
          },
          select: !0,
          required: p,
          error: !!s,
          helperText: s
            ? typeof m == 'function'
              ? m(s)
              : s.message
            : e.helperText,
          inputRef: F,
          children: [
            u && a('option', {}),
            c.map((r) =>
              j.createElement(
                E,
                {key: `${f}_${r[t]}`, value: (r == null ? void 0 : r[t]) ?? r},
                r[h]
              )
            ),
          ],
        })
      ),
    })
  )
}
export {y as S}
//# sourceMappingURL=SelectElement-b47525b5.js.map
