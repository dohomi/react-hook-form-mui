import {
  c as f,
  j as x,
  F as L,
  b as o,
} from './TextareaAutosizeElement-ce2d51c3.js'
import './index-f1f2c4b1.js'
import {a as h} from './chunk-AY7I2SME-c7b6cf8a.js'
import {S as O} from './Shared-1769472a.js'
import './index-d6b32626.js'
import './createTheme-c77538bc.js'
import './assertThisInitialized-4401020c.js'
import './index-c74c9f7f.js'
import './Box-be2cf80e.js'
const v = {title: 'Slider Element', component: f, decorators: [W]}
function W(q) {
  return x(L, {
    defaultValues: {},
    onSuccess: h('submit'),
    children: [o(q, {}), o('br', {}), o(O, {})],
  })
}
const e = {args: {name: 'slider'}},
  r = {args: {name: 'slider', label: 'Slider Label'}},
  a = {args: {name: 'slider_required', label: 'Required Label', required: !0}},
  s = {
    args: {
      name: 'slider',
      label: 'Slider With Options',
      min: 0,
      max: 10,
      marks: !0,
    },
  }
var t, n, i
e.parameters = {
  ...e.parameters,
  docs: {
    ...((t = e.parameters) == null ? void 0 : t.docs),
    source: {
      originalSource: `{
  args: {
    name: 'slider'
  }
}`,
      ...((i = (n = e.parameters) == null ? void 0 : n.docs) == null
        ? void 0
        : i.source),
    },
  },
}
var m, l, c
r.parameters = {
  ...r.parameters,
  docs: {
    ...((m = r.parameters) == null ? void 0 : m.docs),
    source: {
      originalSource: `{
  args: {
    name: 'slider',
    label: 'Slider Label'
  }
}`,
      ...((c = (l = r.parameters) == null ? void 0 : l.docs) == null
        ? void 0
        : c.source),
    },
  },
}
var d, p, u
a.parameters = {
  ...a.parameters,
  docs: {
    ...((d = a.parameters) == null ? void 0 : d.docs),
    source: {
      originalSource: `{
  args: {
    name: 'slider_required',
    label: 'Required Label',
    required: true
  }
}`,
      ...((u = (p = a.parameters) == null ? void 0 : p.docs) == null
        ? void 0
        : u.source),
    },
  },
}
var b, S, g
s.parameters = {
  ...s.parameters,
  docs: {
    ...((b = s.parameters) == null ? void 0 : b.docs),
    source: {
      originalSource: `{
  args: {
    name: 'slider',
    label: 'Slider With Options',
    min: 0,
    max: 10,
    marks: true
  }
}`,
      ...((g = (S = s.parameters) == null ? void 0 : S.docs) == null
        ? void 0
        : g.source),
    },
  },
}
const w = ['Basic', 'Label', 'Required', 'WithOptions']
export {
  e as Basic,
  r as Label,
  a as Required,
  s as WithOptions,
  w as __namedExportsOrder,
  v as default,
}
//# sourceMappingURL=SliderElement.stories-8f0661e7.js.map
