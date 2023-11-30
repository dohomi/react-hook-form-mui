import {
  a as R,
  j as q,
  F as w,
  b as s,
} from './TextareaAutosizeElement-ce2d51c3.js'
import './index-f1f2c4b1.js'
import {a as z} from './chunk-AY7I2SME-c7b6cf8a.js'
import {S as T} from './Shared-1769472a.js'
import './index-d6b32626.js'
import './createTheme-c77538bc.js'
import './assertThisInitialized-4401020c.js'
import './index-c74c9f7f.js'
import './Box-be2cf80e.js'
const h = {title: 'TextareaAutosizeElement', component: R, decorators: [f]}
function f(g) {
  return q(w, {
    defaultValues: {},
    onSuccess: z('submit'),
    children: [s(g, {}), s('br', {}), s(T, {})],
  })
}
const e = {args: {label: 'Simple Textarea', name: 'textarea'}},
  r = {args: {label: 'Required Textarea', name: 'textarea-req', required: !0}},
  a = {args: {label: 'Simple Textarea', name: 'textarea-rows', rows: 5}},
  t = {
    args: {
      label: 'Vertical Resize',
      name: 'textarea-vertical',
      resizeStyle: 'vertical',
      rows: 3,
    },
  }
var o, n, i
e.parameters = {
  ...e.parameters,
  docs: {
    ...((o = e.parameters) == null ? void 0 : o.docs),
    source: {
      originalSource: `{
  args: {
    label: 'Simple Textarea',
    name: 'textarea'
  }
}`,
      ...((i = (n = e.parameters) == null ? void 0 : n.docs) == null
        ? void 0
        : i.source),
    },
  },
}
var m, c, l
r.parameters = {
  ...r.parameters,
  docs: {
    ...((m = r.parameters) == null ? void 0 : m.docs),
    source: {
      originalSource: `{
  args: {
    label: 'Required Textarea',
    name: 'textarea-req',
    required: true
  }
}`,
      ...((l = (c = r.parameters) == null ? void 0 : c.docs) == null
        ? void 0
        : l.source),
    },
  },
}
var p, u, d
a.parameters = {
  ...a.parameters,
  docs: {
    ...((p = a.parameters) == null ? void 0 : p.docs),
    source: {
      originalSource: `{
  args: {
    label: 'Simple Textarea',
    name: 'textarea-rows',
    rows: 5
  }
}`,
      ...((d = (u = a.parameters) == null ? void 0 : u.docs) == null
        ? void 0
        : d.source),
    },
  },
}
var x, S, b
t.parameters = {
  ...t.parameters,
  docs: {
    ...((x = t.parameters) == null ? void 0 : x.docs),
    source: {
      originalSource: `{
  args: {
    label: 'Vertical Resize',
    name: 'textarea-vertical',
    resizeStyle: 'vertical',
    rows: 3
  }
}`,
      ...((b = (S = t.parameters) == null ? void 0 : S.docs) == null
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
//# sourceMappingURL=TextareaAutosizeElement.stories-9a9f6433.js.map
