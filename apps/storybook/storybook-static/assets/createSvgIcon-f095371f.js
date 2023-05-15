import {a as u} from './index-ebeaab24.js'
import {c as s} from './createSvgIcon-2ce5bfe4.js'
import {J as i, x as c, G as m, r as l, E as p} from './Button-934b6c03.js'
import {d as f, o as d} from './Select-c55867f3.js'
import {o as g} from './useSlotProps-692f4a62.js'
import {d as _} from './useThemeProps-3be52b90.js'
import {c as v, u as h} from './useId-3f89f7ef.js'
import {i as b} from './FormHelperText-a02b62e1.js'
import {u as I} from './useControlled-32189460.js'
import {u as C} from './useIsFocusVisible-1a875561.js'
function N(e, r) {
  return () => null
}
function x(e, r) {
  return () => null
}
function E(e, r, t, M, P) {
  return null
}
const S = {
    configure: (e) => {
      console.warn(
        [
          'MUI: `ClassNameGenerator` import from `@mui/material/utils` is outdated and might cause unexpected issues.',
          '',
          "You should use `import { unstable_ClassNameGenerator } from '@mui/material/className'` instead",
          '',
          'The detail of the issue: https://github.com/mui/material-ui/issues/30011#issuecomment-1024993401',
          '',
          'The updated documentation: https://mui.com/guides/classname-generator/',
        ].join(`
`)
      ),
        i.configure(e)
    },
  },
  q = Object.freeze(
    Object.defineProperty(
      {
        __proto__: null,
        capitalize: _,
        createChainedFunction: v,
        createSvgIcon: s,
        debounce: f,
        deprecatedPropType: N,
        isMuiElement: b,
        ownerDocument: g,
        ownerWindow: d,
        requirePropFactory: x,
        setRef: c,
        unstable_ClassNameGenerator: S,
        unstable_useEnhancedEffect: m,
        unstable_useId: h,
        unsupportedProp: E,
        useControlled: I,
        useEventCallback: l,
        useForkRef: p,
        useIsFocusVisible: C,
      },
      Symbol.toStringTag,
      {value: 'Module'}
    )
  )
var n = {exports: {}}
;(function (e) {
  function r(t) {
    return t && t.__esModule ? t : {default: t}
  }
  ;(e.exports = r), (e.exports.__esModule = !0), (e.exports.default = e.exports)
})(n)
var z = n.exports,
  o = {}
const y = u(q)
var a
function A() {
  return (
    a ||
      ((a = 1),
      (function (e) {
        Object.defineProperty(e, '__esModule', {value: !0}),
          Object.defineProperty(e, 'default', {
            enumerable: !0,
            get: function () {
              return r.createSvgIcon
            },
          })
        var r = y
      })(o)),
    o
  )
}
export {z as i, A as r}
//# sourceMappingURL=createSvgIcon-f095371f.js.map
