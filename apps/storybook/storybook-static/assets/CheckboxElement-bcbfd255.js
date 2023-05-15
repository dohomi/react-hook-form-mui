import {j as e, b as F} from './useThemeProps-3be52b90.js'
import {t as u, C as b} from './Button-934b6c03.js'
import {F as g, a as y} from './FormHelperText-a02b62e1.js'
import {F as j} from './FormGroup-d89e04af.js'
import {F as k} from './FormControlLabel-5a6a631a.js'
import {C as E} from './Checkbox-d8c1e2f4.js'
function L({
  name: c,
  validation: s = {},
  required: m,
  parseError: a,
  label: f,
  control: l,
  helperText: p,
  labelProps: x,
  ...r
}) {
  const C = u(),
    i = a || C
  return (
    m && !s.required && (s.required = 'This field is required'),
    e(b, {
      name: c,
      rules: s,
      control: l,
      render: ({field: {value: n, onChange: d}, fieldState: {error: o}}) => {
        const t = o ? (typeof i == 'function' ? i(o) : o.message) : p
        return F(g, {
          required: m,
          error: !!o,
          children: [
            e(j, {
              row: !0,
              children: e(k, {
                ...x,
                label: f || '',
                control: e(E, {
                  ...r,
                  color: r.color || 'primary',
                  sx: [
                    ...(Array.isArray(r.sx) ? r.sx : [r.sx]),
                    {color: o ? 'error.main' : void 0},
                  ],
                  value: n,
                  checked: !!n,
                  onChange: (h) => {
                    d(!n), typeof r.onChange == 'function' && r.onChange(h, !n)
                  },
                }),
              }),
            }),
            t && e(y, {error: !!o, children: t}),
          ],
        })
      },
    })
  )
}
export {L as C}
//# sourceMappingURL=CheckboxElement-bcbfd255.js.map
