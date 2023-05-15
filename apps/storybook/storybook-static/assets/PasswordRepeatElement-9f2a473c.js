import {j as r} from './useThemeProps-3be52b90.js'
import {r as I} from './index-ebeaab24.js'
import {t as M, C as P, w as b} from './Button-934b6c03.js'
import {T as j} from './TextField-4354f47c.js'
import {r as m, i as p} from './createSvgIcon-f095371f.js'
import {r as v} from './jsx-runtime_commonjs-proxy-93a23ed8.js'
import {I as $} from './InputAdornment-70f38d8d.js'
import {I as q} from './IconButton-ab13b570.js'
function y({
  validation: t = {},
  parseError: o,
  type: a,
  required: e,
  name: s,
  control: u,
  ...n
}) {
  const h = M(),
    c = o || h
  return (
    e && !t.required && (t.required = 'This field is required'),
    a === 'email' &&
      !t.pattern &&
      (t.pattern = {
        value:
          /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
        message: 'Please enter a valid email address',
      }),
    r(P, {
      name: s,
      control: u,
      rules: t,
      render: ({
        field: {value: g, onChange: C, onBlur: w, ref: z},
        fieldState: {error: i},
      }) =>
        r(j, {
          ...n,
          name: s,
          value: g ?? '',
          onChange: (l) => {
            C(
              a === 'number' && l.target.value
                ? +l.target.value
                : l.target.value
            ),
              typeof n.onChange == 'function' && n.onChange(l)
          },
          onBlur: w,
          required: e,
          type: a,
          error: !!i,
          helperText: i
            ? typeof c == 'function'
              ? c(i)
              : i.message
            : n.helperText,
          inputRef: z,
        }),
    })
  )
}
var f = {},
  E = p
Object.defineProperty(f, '__esModule', {value: !0})
var x = (f.default = void 0),
  R = E(m()),
  T = v,
  D = (0, R.default)(
    (0, T.jsx)('path', {
      d: 'M12 4.5C7 4.5 2.73 7.61 1 12c1.73 4.39 6 7.5 11 7.5s9.27-3.11 11-7.5c-1.73-4.39-6-7.5-11-7.5zM12 17c-2.76 0-5-2.24-5-5s2.24-5 5-5 5 2.24 5 5-2.24 5-5 5zm0-8c-1.66 0-3 1.34-3 3s1.34 3 3 3 3-1.34 3-3-1.34-3-3-3z',
    }),
    'Visibility'
  )
x = f.default = D
var d = {},
  F = p
Object.defineProperty(d, '__esModule', {value: !0})
var _ = (d.default = void 0),
  S = F(m()),
  V = v,
  A = (0, S.default)(
    (0, V.jsx)('path', {
      d: 'M12 7c2.76 0 5 2.24 5 5 0 .65-.13 1.26-.36 1.83l2.92 2.92c1.51-1.26 2.7-2.89 3.43-4.75-1.73-4.39-6-7.5-11-7.5-1.4 0-2.74.25-3.98.7l2.16 2.16C10.74 7.13 11.35 7 12 7zM2 4.27l2.28 2.28.46.46C3.08 8.3 1.78 10.02 1 12c1.73 4.39 6 7.5 11 7.5 1.55 0 3.03-.3 4.38-.84l.42.42L19.73 22 21 20.73 3.27 3 2 4.27zM7.53 9.8l1.55 1.55c-.05.21-.08.43-.08.65 0 1.66 1.34 3 3 3 .22 0 .44-.03.65-.08l1.55 1.55c-.67.33-1.41.53-2.2.53-2.76 0-5-2.24-5-5 0-.79.2-1.53.53-2.2zm4.31-.78 3.15 3.15.02-.16c0-1.66-1.34-3-3-3l-.17.01z',
    }),
    'VisibilityOff'
  )
_ = d.default = A
function O({
  iconColor: t,
  renderIcon: o = (e) => (e ? r(x, {}) : r(_, {})),
  ...a
}) {
  const [e, s] = I.useState(!0)
  return r(y, {
    ...a,
    InputProps: {
      endAdornment: r($, {
        position: 'end',
        children: r(q, {
          onMouseDown: (u) => u.preventDefault(),
          onClick: () => s(!e),
          tabIndex: -1,
          color: t ?? 'default',
          children: o(e),
        }),
      }),
    },
    type: e ? 'password' : 'text',
  })
}
function K({passwordFieldName: t, ...o}) {
  const a = b({name: t, control: o.control})
  return r(O, {
    ...o,
    validation: {validate: (e) => e === a || 'Password should match'},
  })
}
export {O as P, y as T, K as a}
//# sourceMappingURL=PasswordRepeatElement-9f2a473c.js.map
