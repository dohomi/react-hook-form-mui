import {_ as t} from './extends-98964cd2.js'
import {u as G, _ as J, j as i, b as K} from './useThemeProps-3be52b90.js'
import {r as Q} from './index-ebeaab24.js'
import {o as X, n as Y, p as Z, c as ee, q as te} from './Button-934b6c03.js'
import {F as oe, a as se} from './FormHelperText-a02b62e1.js'
import {u as le} from './useId-3f89f7ef.js'
import {I as re, S as ne, k as ae, l as ie, O as ue} from './Select-c55867f3.js'
function de(o) {
  return X('MuiTextField', o)
}
Y('MuiTextField', ['root'])
const pe = [
    'autoComplete',
    'autoFocus',
    'children',
    'className',
    'color',
    'defaultValue',
    'disabled',
    'error',
    'FormHelperTextProps',
    'fullWidth',
    'helperText',
    'id',
    'InputLabelProps',
    'inputProps',
    'InputProps',
    'inputRef',
    'label',
    'maxRows',
    'minRows',
    'multiline',
    'name',
    'onBlur',
    'onChange',
    'onFocus',
    'placeholder',
    'required',
    'rows',
    'select',
    'SelectProps',
    'type',
    'value',
    'variant',
  ],
  ce = {standard: ae, filled: ie, outlined: ue},
  me = (o) => {
    const {classes: s} = o
    return te({root: ['root']}, de, s)
  },
  fe = Z(oe, {
    name: 'MuiTextField',
    slot: 'Root',
    overridesResolver: (o, s) => s.root,
  })({}),
  he = Q.forwardRef(function (s, h) {
    const u = G({props: s, name: 'MuiTextField'}),
      {
        autoComplete: w,
        autoFocus: x = !1,
        children: g,
        className: S,
        color: F = 'primary',
        defaultValue: L,
        disabled: b = !1,
        error: T = !1,
        FormHelperTextProps: M,
        fullWidth: d = !1,
        helperText: p,
        id: W,
        InputLabelProps: n,
        inputProps: _,
        InputProps: j,
        inputRef: q,
        label: l,
        maxRows: U,
        minRows: k,
        multiline: I = !1,
        name: B,
        onBlur: H,
        onChange: N,
        onFocus: O,
        placeholder: V,
        required: C = !1,
        rows: $,
        select: c = !1,
        SelectProps: m,
        type: E,
        value: y,
        variant: a = 'outlined',
      } = u,
      z = J(u, pe),
      P = t({}, u, {
        autoFocus: x,
        color: F,
        disabled: b,
        error: T,
        fullWidth: d,
        multiline: I,
        required: C,
        select: c,
        variant: a,
      }),
      A = me(P),
      r = {}
    a === 'outlined' &&
      (n && typeof n.shrink < 'u' && (r.notched = n.shrink), (r.label = l)),
      c &&
        ((!m || !m.native) && (r.id = void 0), (r['aria-describedby'] = void 0))
    const e = le(W),
      f = p && e ? `${e}-helper-text` : void 0,
      R = l && e ? `${e}-label` : void 0,
      D = ce[a],
      v = i(
        D,
        t(
          {
            'aria-describedby': f,
            autoComplete: w,
            autoFocus: x,
            defaultValue: L,
            fullWidth: d,
            multiline: I,
            name: B,
            rows: $,
            maxRows: U,
            minRows: k,
            type: E,
            value: y,
            id: e,
            inputRef: q,
            onBlur: H,
            onChange: N,
            onFocus: O,
            placeholder: V,
            inputProps: _,
          },
          r,
          j
        )
      )
    return K(
      fe,
      t(
        {
          className: ee(A.root, S),
          disabled: b,
          error: T,
          fullWidth: d,
          ref: h,
          required: C,
          color: F,
          variant: a,
          ownerState: P,
        },
        z,
        {
          children: [
            l != null &&
              l !== '' &&
              i(re, t({htmlFor: e, id: R}, n, {children: l})),
            c
              ? i(
                  ne,
                  t(
                    {
                      'aria-describedby': f,
                      id: e,
                      labelId: R,
                      value: y,
                      input: v,
                    },
                    m,
                    {children: g}
                  )
                )
              : v,
            p && i(se, t({id: f}, M, {children: p})),
          ],
        }
      )
    )
  }),
  Pe = he
export {Pe as T}
//# sourceMappingURL=TextField-4354f47c.js.map
