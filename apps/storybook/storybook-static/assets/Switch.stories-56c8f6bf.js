import {
  S as u,
  j as S,
  F as w,
  b as s,
} from './TextareaAutosizeElement-36296a48.js'
import './index-f1f2c4b1.js'
import {a as g} from './chunk-AY7I2SME-c7b6cf8a.js'
import {S as L} from './Shared-07615c22.js'
import './index-d6b32626.js'
import './createTheme-c77538bc.js'
import './assertThisInitialized-4401020c.js'
import './index-c74c9f7f.js'
import './Box-228f8f89.js'
const F = {title: 'Switch Element', component: u},
  t = (h) =>
    S(w, {
      defaultValues: {},
      onSuccess: g('submit'),
      children: [s(u, {...h}), s('br', {}), s(L, {})],
    }),
  e = {render: t, args: {name: 'switch', label: 'Switch Label'}},
  a = {
    render: t,
    args: {name: 'switch', label: 'Switch Label', labelPlacement: 'start'},
  },
  r = {
    render: t,
    args: {name: 'switch', label: 'Disabled Switch', disabled: !0},
  }
var n, o, i
e.parameters = {
  ...e.parameters,
  docs: {
    ...((n = e.parameters) == null ? void 0 : n.docs),
    source: {
      originalSource: `{
  render: Template,
  args: {
    name: 'switch',
    label: 'Switch Label'
  }
}`,
      ...((i = (o = e.parameters) == null ? void 0 : o.docs) == null
        ? void 0
        : i.source),
    },
  },
}
var c, l, m
a.parameters = {
  ...a.parameters,
  docs: {
    ...((c = a.parameters) == null ? void 0 : c.docs),
    source: {
      originalSource: `{
  render: Template,
  args: {
    name: 'switch',
    label: 'Switch Label',
    labelPlacement: 'start'
  }
}`,
      ...((m = (l = a.parameters) == null ? void 0 : l.docs) == null
        ? void 0
        : m.source),
    },
  },
}
var d, p, b
r.parameters = {
  ...r.parameters,
  docs: {
    ...((d = r.parameters) == null ? void 0 : d.docs),
    source: {
      originalSource: `{
  render: Template,
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
const C = ['Basic', 'LabelPosition', 'Disabled']
export {
  e as Basic,
  r as Disabled,
  a as LabelPosition,
  C as __namedExportsOrder,
  F as default,
}
//# sourceMappingURL=Switch.stories-56c8f6bf.js.map
