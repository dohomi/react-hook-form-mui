import {
  C as S,
  j as B,
  F as R,
  b as s,
} from './TextareaAutosizeElement-36296a48.js'
import {a as T} from './chunk-AY7I2SME-c7b6cf8a.js'
import './index-f1f2c4b1.js'
import {S as f} from './Shared-07615c22.js'
import './index-d6b32626.js'
import './createTheme-c77538bc.js'
import './assertThisInitialized-4401020c.js'
import './index-c74c9f7f.js'
import './Box-228f8f89.js'
const v = {title: 'CheckboxButtonGroup', component: S},
  e = (O) =>
    B(R, {
      defaultValues: {},
      onSuccess: T('submit'),
      children: [s(S, {...O}), s('br', {}), s(f, {})],
    }),
  a = {
    render: e,
    args: {
      label: 'Label',
      name: 'basic-checkbox-button-group',
      options: [
        {id: '1', label: 'Label 1'},
        {id: '2', label: 'label 2'},
      ],
    },
  },
  r = {
    render: e,
    args: {
      label: 'Inline',
      row: !0,
      name: 'basic-checkbox-inline',
      options: [
        {id: '1', label: 'Label 1'},
        {id: '2', label: 'label 2'},
      ],
    },
  },
  n = {
    render: e,
    args: {
      label: 'Object',
      returnObject: !0,
      name: 'basic-checkbox-object',
      options: [
        {id: '1', label: 'Label 1'},
        {id: '2', label: 'label 2'},
      ],
    },
  },
  l = {
    render: e,
    args: {
      label: 'Required',
      required: !0,
      name: 'basic-checkbox-required',
      options: [
        {id: '1', label: 'Label 1'},
        {id: '2', label: 'label 2'},
      ],
    },
  },
  o = {
    render: e,
    args: {
      label: 'Disabled',
      disabled: !0,
      name: 'basic-checkbox-disabled',
      options: [
        {id: '1', label: 'Label 1'},
        {id: '2', label: 'label 2'},
      ],
    },
  }
var b, t, i
a.parameters = {
  ...a.parameters,
  docs: {
    ...((b = a.parameters) == null ? void 0 : b.docs),
    source: {
      originalSource: `{
  render: Template,
  args: {
    label: 'Label',
    name: 'basic-checkbox-button-group',
    options: [{
      id: '1',
      label: 'Label 1'
    }, {
      id: '2',
      label: 'label 2'
    }]
  }
}`,
      ...((i = (t = a.parameters) == null ? void 0 : t.docs) == null
        ? void 0
        : i.source),
    },
  },
}
var c, d, m
r.parameters = {
  ...r.parameters,
  docs: {
    ...((c = r.parameters) == null ? void 0 : c.docs),
    source: {
      originalSource: `{
  render: Template,
  args: {
    label: 'Inline',
    row: true,
    name: 'basic-checkbox-inline',
    options: [{
      id: '1',
      label: 'Label 1'
    }, {
      id: '2',
      label: 'label 2'
    }]
  }
}`,
      ...((m = (d = r.parameters) == null ? void 0 : d.docs) == null
        ? void 0
        : m.source),
    },
  },
}
var p, u, g
n.parameters = {
  ...n.parameters,
  docs: {
    ...((p = n.parameters) == null ? void 0 : p.docs),
    source: {
      originalSource: `{
  render: Template,
  args: {
    label: 'Object',
    returnObject: true,
    name: 'basic-checkbox-object',
    options: [{
      id: '1',
      label: 'Label 1'
    }, {
      id: '2',
      label: 'label 2'
    }]
  }
}`,
      ...((g = (u = n.parameters) == null ? void 0 : u.docs) == null
        ? void 0
        : g.source),
    },
  },
}
var x, h, k
l.parameters = {
  ...l.parameters,
  docs: {
    ...((x = l.parameters) == null ? void 0 : x.docs),
    source: {
      originalSource: `{
  render: Template,
  args: {
    label: 'Required',
    required: true,
    name: 'basic-checkbox-required',
    options: [{
      id: '1',
      label: 'Label 1'
    }, {
      id: '2',
      label: 'label 2'
    }]
  }
}`,
      ...((k = (h = l.parameters) == null ? void 0 : h.docs) == null
        ? void 0
        : k.source),
    },
  },
}
var L, j, q
o.parameters = {
  ...o.parameters,
  docs: {
    ...((L = o.parameters) == null ? void 0 : L.docs),
    source: {
      originalSource: `{
  render: Template,
  args: {
    label: 'Disabled',
    disabled: true,
    name: 'basic-checkbox-disabled',
    options: [{
      id: '1',
      label: 'Label 1'
    }, {
      id: '2',
      label: 'label 2'
    }]
  }
}`,
      ...((q = (j = o.parameters) == null ? void 0 : j.docs) == null
        ? void 0
        : q.source),
    },
  },
}
const y = ['Basic', 'Inline', 'ReturnObject', 'Required', 'Disabled']
export {
  a as Basic,
  o as Disabled,
  r as Inline,
  l as Required,
  n as ReturnObject,
  y as __namedExportsOrder,
  v as default,
}
//# sourceMappingURL=CheckboxButtonGroup.stories-ee69d81e.js.map
