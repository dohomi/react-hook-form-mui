import {_ as $, b as K, j as W, d as A} from './useThemeProps-3be52b90.js'
import {_ as d} from './extends-98964cd2.js'
import {r as D} from './index-ebeaab24.js'
import {
  o as G,
  n as H,
  p as x,
  K as J,
  c as M,
  q as Q,
} from './Button-934b6c03.js'
import {B as T} from './ButtonBase-4a75c9e0.js'
import {u as V} from './useControlled-32189460.js'
function X(e) {
  return G('PrivateSwitchBase', e)
}
H('PrivateSwitchBase', [
  'root',
  'checked',
  'disabled',
  'input',
  'edgeStart',
  'edgeEnd',
])
const Y = [
    'autoFocus',
    'checked',
    'checkedIcon',
    'className',
    'defaultChecked',
    'disabled',
    'disableFocusRipple',
    'edge',
    'icon',
    'id',
    'inputProps',
    'inputRef',
    'name',
    'onBlur',
    'onChange',
    'onFocus',
    'readOnly',
    'required',
    'tabIndex',
    'type',
    'value',
  ],
  Z = (e) => {
    const {classes: o, checked: i, disabled: r, edge: a} = e,
      l = {
        root: ['root', i && 'checked', r && 'disabled', a && `edge${A(a)}`],
        input: ['input'],
      }
    return Q(l, X, o)
  },
  ee = x(T)(({ownerState: e}) =>
    d(
      {padding: 9, borderRadius: '50%'},
      e.edge === 'start' && {marginLeft: e.size === 'small' ? -3 : -12},
      e.edge === 'end' && {marginRight: e.size === 'small' ? -3 : -12}
    )
  ),
  te = x('input')({
    cursor: 'inherit',
    position: 'absolute',
    opacity: 0,
    width: '100%',
    height: '100%',
    top: 0,
    left: 0,
    margin: 0,
    padding: 0,
    zIndex: 1,
  }),
  se = D.forwardRef(function (o, i) {
    const {
        autoFocus: r,
        checked: a,
        checkedIcon: l,
        className: F,
        defaultChecked: h,
        disabled: y,
        disableFocusRipple: p = !1,
        edge: w = !1,
        icon: S,
        id: R,
        inputProps: I,
        inputRef: P,
        name: _,
        onBlur: f,
        onChange: m,
        onFocus: b,
        readOnly: j,
        required: q,
        tabIndex: z,
        type: c,
        value: g,
      } = o,
      N = $(o, Y),
      [k, U] = V({
        controlled: a,
        default: !!h,
        name: 'SwitchBase',
        state: 'checked',
      }),
      s = J(),
      v = (t) => {
        b && b(t), s && s.onFocus && s.onFocus(t)
      },
      E = (t) => {
        f && f(t), s && s.onBlur && s.onBlur(t)
      },
      L = (t) => {
        if (t.nativeEvent.defaultPrevented) return
        const C = t.target.checked
        U(C), m && m(t, C)
      }
    let n = y
    s && typeof n > 'u' && (n = s.disabled)
    const O = c === 'checkbox' || c === 'radio',
      u = d({}, o, {checked: k, disabled: n, disableFocusRipple: p, edge: w}),
      B = Z(u)
    return K(
      ee,
      d(
        {
          component: 'span',
          className: M(B.root, F),
          centerRipple: !0,
          focusRipple: !p,
          disabled: n,
          tabIndex: null,
          role: void 0,
          onFocus: v,
          onBlur: E,
          ownerState: u,
          ref: i,
        },
        N,
        {
          children: [
            W(
              te,
              d(
                {
                  autoFocus: r,
                  checked: a,
                  defaultChecked: h,
                  className: B.input,
                  disabled: n,
                  id: O && R,
                  name: _,
                  onChange: L,
                  readOnly: j,
                  ref: P,
                  required: q,
                  ownerState: u,
                  tabIndex: z,
                  type: c,
                },
                c === 'checkbox' && g === void 0 ? {} : {value: g},
                I
              )
            ),
            k ? l : S,
          ],
        }
      )
    )
  }),
  re = se
export {re as S}
//# sourceMappingURL=SwitchBase-bb4bde97.js.map
