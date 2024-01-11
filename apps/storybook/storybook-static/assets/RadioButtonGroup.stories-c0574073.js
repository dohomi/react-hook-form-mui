import {R as N} from './TextareaAutosizeElement-ce2d51c3.js'
import './createTheme-c77538bc.js'
import './index-f1f2c4b1.js'
import {F as _} from './FormDecorator-3a6a16e7.js'
import './index-d6b32626.js'
import './assertThisInitialized-4401020c.js'
import './index-c74c9f7f.js'
import './chunk-AY7I2SME-c7b6cf8a.js'
import './Shared-1769472a.js'
import './Box-be2cf80e.js'
import './DateFnsProvider-70a79c58.js'
import './isNativeReflectConstruct-e378569d.js'
const O = {title: 'RadioButtonGroup', component: N, decorators: [_]},
  e = [
    {id: '1', label: 'Label 1'},
    {id: '2', label: 'label 2'},
  ],
  r = {args: {label: 'Basic', name: 'basic', options: e}},
  a = {args: {label: 'Inline', name: 'inline', row: !0, options: e}},
  n = {args: {label: 'Required', name: 'inline', required: !0, options: e}},
  s = {
    args: {
      label: 'Required',
      name: 'number_value',
      required: !0,
      type: 'number',
      options: e.map((i) => ({id: Number(i.id), label: i.label})),
    },
  },
  o = {args: {label: 'Disabled', name: 'disabled', options: e, disabled: !0}}
var t, l, m
r.parameters = {
  ...r.parameters,
  docs: {
    ...((t = r.parameters) == null ? void 0 : t.docs),
    source: {
      originalSource: `{
  args: {
    label: 'Basic',
    name: 'basic',
    options
  }
}`,
      ...((m = (l = r.parameters) == null ? void 0 : l.docs) == null
        ? void 0
        : m.source),
    },
  },
}
var u, d, p
a.parameters = {
  ...a.parameters,
  docs: {
    ...((u = a.parameters) == null ? void 0 : u.docs),
    source: {
      originalSource: `{
  args: {
    label: 'Inline',
    name: 'inline',
    row: true,
    options
  }
}`,
      ...((p = (d = a.parameters) == null ? void 0 : d.docs) == null
        ? void 0
        : p.source),
    },
  },
}
var c, b, g
n.parameters = {
  ...n.parameters,
  docs: {
    ...((c = n.parameters) == null ? void 0 : c.docs),
    source: {
      originalSource: `{
  args: {
    label: 'Required',
    name: 'inline',
    required: true,
    options
  }
}`,
      ...((g = (b = n.parameters) == null ? void 0 : b.docs) == null
        ? void 0
        : g.source),
    },
  },
}
var q, R, B
s.parameters = {
  ...s.parameters,
  docs: {
    ...((q = s.parameters) == null ? void 0 : q.docs),
    source: {
      originalSource: `{
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
      ...((B = (R = s.parameters) == null ? void 0 : R.docs) == null
        ? void 0
        : B.source),
    },
  },
}
var D, S, I
o.parameters = {
  ...o.parameters,
  docs: {
    ...((D = o.parameters) == null ? void 0 : D.docs),
    source: {
      originalSource: `{
  args: {
    label: 'Disabled',
    name: 'disabled',
    options,
    disabled: true
  }
}`,
      ...((I = (S = o.parameters) == null ? void 0 : S.docs) == null
        ? void 0
        : I.source),
    },
  },
}
const h = ['Basic', 'Inline', 'Required', 'ValueAsNumber', 'Disabled']
export {
  r as Basic,
  o as Disabled,
  a as Inline,
  n as Required,
  s as ValueAsNumber,
  h as __namedExportsOrder,
  O as default,
}
//# sourceMappingURL=RadioButtonGroup.stories-c0574073.js.map
