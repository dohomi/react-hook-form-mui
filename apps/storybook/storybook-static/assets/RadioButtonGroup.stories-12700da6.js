import {
  R as D,
  j as I,
  F as N,
  b as l,
} from './TextareaAutosizeElement-36296a48.js'
import './index-f1f2c4b1.js'
import {a as j} from './chunk-AY7I2SME-c7b6cf8a.js'
import {S as G} from './Shared-07615c22.js'
import './index-d6b32626.js'
import './createTheme-c77538bc.js'
import './assertThisInitialized-4401020c.js'
import './index-c74c9f7f.js'
import './Box-228f8f89.js'
const L = {title: 'RadioButtonGroup', component: D},
  e = (a) =>
    I(N, {
      defaultValues: {},
      onSuccess: j('submit'),
      children: [l(D, {...a}), l('br', {}), l(G, {})],
    }),
  r = [
    {id: '1', label: 'Label 1'},
    {id: '2', label: 'label 2'},
  ],
  n = {render: e, args: {label: 'Basic', name: 'basic', options: r}},
  s = {render: e, args: {label: 'Inline', name: 'inline', row: !0, options: r}},
  o = {
    render: e,
    args: {label: 'Required', name: 'inline', required: !0, options: r},
  },
  t = {
    render: e,
    args: {
      label: 'Required',
      name: 'number_value',
      required: !0,
      type: 'number',
      options: r.map((a) => ({id: Number(a.id), label: a.label})),
    },
  },
  i = {
    render: e,
    args: {label: 'Disabled', name: 'disabled', options: r, disabled: !0},
  }
var m, d, u
n.parameters = {
  ...n.parameters,
  docs: {
    ...((m = n.parameters) == null ? void 0 : m.docs),
    source: {
      originalSource: `{
  render: Template,
  args: {
    label: 'Basic',
    name: 'basic',
    options
  }
}`,
      ...((u = (d = n.parameters) == null ? void 0 : d.docs) == null
        ? void 0
        : u.source),
    },
  },
}
var p, c, b
s.parameters = {
  ...s.parameters,
  docs: {
    ...((p = s.parameters) == null ? void 0 : p.docs),
    source: {
      originalSource: `{
  render: Template,
  args: {
    label: 'Inline',
    name: 'inline',
    row: true,
    options
  }
}`,
      ...((b = (c = s.parameters) == null ? void 0 : c.docs) == null
        ? void 0
        : b.source),
    },
  },
}
var g, q, R
o.parameters = {
  ...o.parameters,
  docs: {
    ...((g = o.parameters) == null ? void 0 : g.docs),
    source: {
      originalSource: `{
  render: Template,
  args: {
    label: 'Required',
    name: 'inline',
    required: true,
    options
  }
}`,
      ...((R = (q = o.parameters) == null ? void 0 : q.docs) == null
        ? void 0
        : R.source),
    },
  },
}
var B, S, T
t.parameters = {
  ...t.parameters,
  docs: {
    ...((B = t.parameters) == null ? void 0 : B.docs),
    source: {
      originalSource: `{
  render: Template,
  args: {
    label: 'Required',
    name: 'number_value',
    required: true,
    type: 'number',
    options: options.map(i => ({
      id: Number(i.id),
      label: i.label
    }))
  }
}`,
      ...((T = (S = t.parameters) == null ? void 0 : S.docs) == null
        ? void 0
        : T.source),
    },
  },
}
var f, _, x
i.parameters = {
  ...i.parameters,
  docs: {
    ...((f = i.parameters) == null ? void 0 : f.docs),
    source: {
      originalSource: `{
  render: Template,
  args: {
    label: 'Disabled',
    name: 'disabled',
    options,
    disabled: true
  }
}`,
      ...((x = (_ = i.parameters) == null ? void 0 : _.docs) == null
        ? void 0
        : x.source),
    },
  },
}
const O = ['Basic', 'Inline', 'Required', 'ValueAsNumber', 'Disabled']
export {
  n as Basic,
  i as Disabled,
  s as Inline,
  o as Required,
  t as ValueAsNumber,
  O as __namedExportsOrder,
  L as default,
}
//# sourceMappingURL=RadioButtonGroup.stories-12700da6.js.map
