import {
  S as u,
  j as h,
  F as S,
  b as s,
} from './TextareaAutosizeElement-ce2d51c3.js'
import './index-f1f2c4b1.js'
import {a as w} from './chunk-AY7I2SME-c7b6cf8a.js'
import {S as g} from './Shared-1769472a.js'
import './index-d6b32626.js'
import './createTheme-c77538bc.js'
import './assertThisInitialized-4401020c.js'
import './index-c74c9f7f.js'
import './Box-be2cf80e.js'
const C = {title: 'Switch Element', component: u, decorators: [f]}
function f(d) {
  return h(S, {
    defaultValues: {},
    onSuccess: w('submit'),
    children: [s(d, {}), s('br', {}), s(g, {})],
  })
}
const e = {args: {name: 'switch', label: 'Switch Label'}},
  a = {args: {name: 'switch', label: 'Switch Label', labelPlacement: 'start'}},
  r = {args: {name: 'switch', label: 'Disabled Switch', disabled: !0}}
var t, o, n
e.parameters = {
  ...e.parameters,
  docs: {
    ...((t = e.parameters) == null ? void 0 : t.docs),
    source: {
      originalSource: `{
  args: {
    name: 'switch',
    label: 'Switch Label'
  }
}`,
      ...((n = (o = e.parameters) == null ? void 0 : o.docs) == null
        ? void 0
        : n.source),
    },
  },
}
var c, i, m
a.parameters = {
  ...a.parameters,
  docs: {
    ...((c = a.parameters) == null ? void 0 : c.docs),
    source: {
      originalSource: `{
  args: {
    name: 'switch',
    label: 'Switch Label',
    labelPlacement: 'start'
  }
}`,
      ...((m = (i = a.parameters) == null ? void 0 : i.docs) == null
        ? void 0
        : m.source),
    },
  },
}
var l, p, b
r.parameters = {
  ...r.parameters,
  docs: {
    ...((l = r.parameters) == null ? void 0 : l.docs),
    source: {
      originalSource: `{
  args: {
    name: 'switch',
    label: 'Disabled Switch',
    disabled: true
  }
}`,
      ...((b = (p = r.parameters) == null ? void 0 : p.docs) == null
        ? void 0
        : b.source),
    },
  },
}
const O = ['Basic', 'LabelPosition', 'Disabled']
export {
  e as Basic,
  r as Disabled,
  a as LabelPosition,
  O as __namedExportsOrder,
  C as default,
}
//# sourceMappingURL=Switch.stories-1b4255a4.js.map
