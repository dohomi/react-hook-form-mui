import {
  i as u,
  j as L,
  F as x,
  b as s,
} from './TextareaAutosizeElement-36296a48.js'
import {a as P} from './chunk-AY7I2SME-c7b6cf8a.js'
import './index-f1f2c4b1.js'
import {S} from './Shared-07615c22.js'
import './index-d6b32626.js'
import './createTheme-c77538bc.js'
import './assertThisInitialized-4401020c.js'
import './index-c74c9f7f.js'
import './Box-228f8f89.js'
const F = {title: 'Checkbox', component: u},
  o = (g) =>
    L(x, {
      defaultValues: {},
      onSuccess: P('submit'),
      children: [s(u, {...g}), s('br', {}), s(S, {})],
    }),
  e = {render: o, args: {label: 'Label', name: 'basic'}},
  a = {render: o, args: {label: 'Label', name: 'basic', required: !0}},
  r = {
    render: o,
    args: {label: 'Label', name: 'basic', labelProps: {labelPlacement: 'top'}},
  }
var n, t, l
e.parameters = {
  ...e.parameters,
  docs: {
    ...((n = e.parameters) == null ? void 0 : n.docs),
    source: {
      originalSource: `{
  render: Template,
  args: {
    label: 'Label',
    name: 'basic'
  }
}`,
      ...((l = (t = e.parameters) == null ? void 0 : t.docs) == null
        ? void 0
        : l.source),
    },
  },
}
var m, c, i
a.parameters = {
  ...a.parameters,
  docs: {
    ...((m = a.parameters) == null ? void 0 : m.docs),
    source: {
      originalSource: `{
  render: Template,
  args: {
    label: 'Label',
    name: 'basic',
    required: true
  }
}`,
      ...((i = (c = a.parameters) == null ? void 0 : c.docs) == null
        ? void 0
        : i.source),
    },
  },
}
var p, b, d
r.parameters = {
  ...r.parameters,
  docs: {
    ...((p = r.parameters) == null ? void 0 : p.docs),
    source: {
      originalSource: `{
  render: Template,
  args: {
    label: 'Label',
    name: 'basic',
    labelProps: {
      labelPlacement: 'top'
    }
  }
}`,
      ...((d = (b = r.parameters) == null ? void 0 : b.docs) == null
        ? void 0
        : d.source),
    },
  },
}
const R = ['Basic', 'Required', 'LabelPosition']
export {
  e as Basic,
  r as LabelPosition,
  a as Required,
  R as __namedExportsOrder,
  F as default,
}
//# sourceMappingURL=Checkbox.stories-78b37d7c.js.map
