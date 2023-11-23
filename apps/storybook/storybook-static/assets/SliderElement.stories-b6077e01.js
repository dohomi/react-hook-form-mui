import {
  c as x,
  j as f,
  F as h,
  b as t,
} from './TextareaAutosizeElement-36296a48.js'
import './index-f1f2c4b1.js'
import {a as O} from './chunk-AY7I2SME-c7b6cf8a.js'
import {S as T} from './Shared-07615c22.js'
import './index-d6b32626.js'
import './createTheme-c77538bc.js'
import './assertThisInitialized-4401020c.js'
import './index-c74c9f7f.js'
import './Box-228f8f89.js'
const V = {title: 'Slider Element', component: x},
  n = (L) =>
    f(h, {
      defaultValues: {},
      onSuccess: O('submit'),
      children: [t(x, {...L}), t('br', {}), t(T, {})],
    }),
  e = {render: n, args: {name: 'slider'}},
  r = {render: n, args: {name: 'slider', label: 'Slider Label'}},
  a = {
    render: n,
    args: {name: 'slider_required', label: 'Required Label', required: !0},
  },
  s = {
    render: n,
    args: {
      name: 'slider',
      label: 'Slider With Options',
      min: 0,
      max: 10,
      marks: !0,
    },
  }
var o, i, m
e.parameters = {
  ...e.parameters,
  docs: {
    ...((o = e.parameters) == null ? void 0 : o.docs),
    source: {
      originalSource: `{
  render: Template,
  args: {
    name: 'slider'
  }
}`,
      ...((m = (i = e.parameters) == null ? void 0 : i.docs) == null
        ? void 0
        : m.source),
    },
  },
}
var l, d, c
r.parameters = {
  ...r.parameters,
  docs: {
    ...((l = r.parameters) == null ? void 0 : l.docs),
    source: {
      originalSource: `{
  render: Template,
  args: {
    name: 'slider',
    label: 'Slider Label'
  }
}`,
      ...((c = (d = r.parameters) == null ? void 0 : d.docs) == null
        ? void 0
        : c.source),
    },
  },
}
var p, u, b
a.parameters = {
  ...a.parameters,
  docs: {
    ...((p = a.parameters) == null ? void 0 : p.docs),
    source: {
      originalSource: `{
  render: Template,
  args: {
    name: 'slider_required',
    label: 'Required Label',
    required: true
  }
}`,
      ...((b = (u = a.parameters) == null ? void 0 : u.docs) == null
        ? void 0
        : b.source),
    },
  },
}
var S, g, q
s.parameters = {
  ...s.parameters,
  docs: {
    ...((S = s.parameters) == null ? void 0 : S.docs),
    source: {
      originalSource: `{
  render: Template,
  args: {
    name: 'slider',
    label: 'Slider With Options',
    min: 0,
    max: 10,
    marks: true
  }
}`,
      ...((q = (g = s.parameters) == null ? void 0 : g.docs) == null
        ? void 0
        : q.source),
    },
  },
}
const v = ['Basic', 'Label', 'Required', 'WithOptions']
export {
  e as Basic,
  r as Label,
  a as Required,
  s as WithOptions,
  v as __namedExportsOrder,
  V as default,
}
//# sourceMappingURL=SliderElement.stories-b6077e01.js.map
