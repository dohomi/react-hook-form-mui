import {b as I, j as m} from './useThemeProps-3be52b90.js'
import {F as N} from './Button-934b6c03.js'
import './index-ebeaab24.js'
import {R as D} from './RadioButtonGroup-ff97222d.js'
import {a as j} from './chunk-OPEUWD42-a3b45fd8.js'
import {S as G} from './Shared-e33e4212.js'
import './extends-98964cd2.js'
import './assertThisInitialized-5649ae8b.js'
import './FormHelperText-a02b62e1.js'
import './FormLabel-977af3e7.js'
import './useControlled-32189460.js'
import './useId-3f89f7ef.js'
import './FormGroup-d89e04af.js'
import './FormControlLabel-5a6a631a.js'
import './Typography-eebf5bae.js'
import './SwitchBase-bb4bde97.js'
import './ButtonBase-4a75c9e0.js'
import './useIsFocusVisible-1a875561.js'
import './createSvgIcon-2ce5bfe4.js'
import './useTheme-ccc2f4e9.js'
import './Box-339dd07d.js'
const X = {title: 'RadioButtonGroup', component: D},
  e = (a) =>
    I(N, {
      defaultValues: {},
      onSuccess: j('submit'),
      children: [m(D, {...a}), m('br', {}), m(G, {})],
    }),
  r = [
    {id: '1', label: 'Label 1'},
    {id: '2', label: 'label 2'},
  ],
  n = {render: e, args: {label: 'Basic', name: 'basic', options: r}},
  o = {render: e, args: {label: 'Inline', name: 'inline', row: !0, options: r}},
  s = {
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
var l, p, d
n.parameters = {
  ...n.parameters,
  docs: {
    ...((l = n.parameters) == null ? void 0 : l.docs),
    source: {
      originalSource: `{
  render: Template,
  args: {
    label: 'Basic',
    name: 'basic',
    options
  }
}`,
      ...((d = (p = n.parameters) == null ? void 0 : p.docs) == null
        ? void 0
        : d.source),
    },
  },
}
var u, c, b
o.parameters = {
  ...o.parameters,
  docs: {
    ...((u = o.parameters) == null ? void 0 : u.docs),
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
      ...((b = (c = o.parameters) == null ? void 0 : c.docs) == null
        ? void 0
        : b.source),
    },
  },
}
var g, q, R
s.parameters = {
  ...s.parameters,
  docs: {
    ...((g = s.parameters) == null ? void 0 : g.docs),
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
      ...((R = (q = s.parameters) == null ? void 0 : q.docs) == null
        ? void 0
        : R.source),
    },
  },
}
var B, S, f
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
      ...((f = (S = t.parameters) == null ? void 0 : S.docs) == null
        ? void 0
        : f.source),
    },
  },
}
var T, _, x
i.parameters = {
  ...i.parameters,
  docs: {
    ...((T = i.parameters) == null ? void 0 : T.docs),
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
const Y = ['Basic', 'Inline', 'Required', 'ValueAsNumber', 'Disabled']
export {
  n as Basic,
  i as Disabled,
  o as Inline,
  s as Required,
  t as ValueAsNumber,
  Y as __namedExportsOrder,
  X as default,
}
//# sourceMappingURL=RadioButtonGroup.stories-dd5a64d2.js.map
