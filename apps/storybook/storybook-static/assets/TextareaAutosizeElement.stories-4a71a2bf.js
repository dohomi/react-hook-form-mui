import {
  a as g,
  j as z,
  F as q,
  b as o,
} from './TextareaAutosizeElement-36296a48.js'
import './index-f1f2c4b1.js'
import {a as w} from './chunk-AY7I2SME-c7b6cf8a.js'
import {S as f} from './Shared-07615c22.js'
import './index-d6b32626.js'
import './createTheme-c77538bc.js'
import './assertThisInitialized-4401020c.js'
import './index-c74c9f7f.js'
import './Box-228f8f89.js'
const h = {title: 'TextareaAutosizeElement', component: g},
  s = (R) =>
    z(q, {
      defaultValues: {},
      onSuccess: w('submit'),
      children: [o(g, {...R}), o('br', {}), o(f, {})],
    }),
  e = {render: s, args: {label: 'Simple Textarea', name: 'textarea'}},
  r = {
    render: s,
    args: {label: 'Required Textarea', name: 'textarea-req', required: !0},
  },
  a = {
    render: s,
    args: {label: 'Simple Textarea', name: 'textarea-rows', rows: 5},
  },
  t = {
    render: s,
    args: {
      label: 'Vertical Resize',
      name: 'textarea-vertical',
      resizeStyle: 'vertical',
      rows: 3,
    },
  }
var n, m, i
e.parameters = {
  ...e.parameters,
  docs: {
    ...((n = e.parameters) == null ? void 0 : n.docs),
    source: {
      originalSource: `{
  render: Template,
  args: {
    label: 'Simple Textarea',
    name: 'textarea'
  }
}`,
      ...((i = (m = e.parameters) == null ? void 0 : m.docs) == null
        ? void 0
        : i.source),
    },
  },
}
var l, c, p
r.parameters = {
  ...r.parameters,
  docs: {
    ...((l = r.parameters) == null ? void 0 : l.docs),
    source: {
      originalSource: `{
  render: Template,
  args: {
    label: 'Required Textarea',
    name: 'textarea-req',
    required: true
  }
}`,
      ...((p = (c = r.parameters) == null ? void 0 : c.docs) == null
        ? void 0
        : p.source),
    },
  },
}
var d, u, x
a.parameters = {
  ...a.parameters,
  docs: {
    ...((d = a.parameters) == null ? void 0 : d.docs),
    source: {
      originalSource: `{
  render: Template,
  args: {
    label: 'Simple Textarea',
    name: 'textarea-rows',
    rows: 5
  }
}`,
      ...((x = (u = a.parameters) == null ? void 0 : u.docs) == null
        ? void 0
        : x.source),
    },
  },
}
var S, T, b
t.parameters = {
  ...t.parameters,
  docs: {
    ...((S = t.parameters) == null ? void 0 : S.docs),
    source: {
      originalSource: `{
  render: Template,
  args: {
    label: 'Vertical Resize',
    name: 'textarea-vertical',
    resizeStyle: 'vertical',
    rows: 3
  }
}`,
      ...((b = (T = t.parameters) == null ? void 0 : T.docs) == null
        ? void 0
        : b.source),
    },
  },
}
const C = ['Basic', 'Required', 'Rows', 'ResizeStyle']
export {
  e as Basic,
  r as Required,
  t as ResizeStyle,
  a as Rows,
  C as __namedExportsOrder,
  h as default,
}
//# sourceMappingURL=TextareaAutosizeElement.stories-4a71a2bf.js.map
