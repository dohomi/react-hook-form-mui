import {b as S, j as t} from './useThemeProps-3be52b90.js'
import {F as w} from './Button-934b6c03.js'
import './index-ebeaab24.js'
import {S as u} from './SwitchElement-d2ce8082.js'
import {a as g} from './chunk-OPEUWD42-a3b45fd8.js'
import {S as f} from './Shared-e33e4212.js'
import './extends-98964cd2.js'
import './assertThisInitialized-5649ae8b.js'
import './FormControlLabel-5a6a631a.js'
import './Typography-eebf5bae.js'
import './SwitchBase-bb4bde97.js'
import './ButtonBase-4a75c9e0.js'
import './useIsFocusVisible-1a875561.js'
import './useControlled-32189460.js'
import './Box-339dd07d.js'
const v = {title: 'Switch Element', component: u},
  s = (h) =>
    S(w, {
      defaultValues: {},
      onSuccess: g('submit'),
      children: [t(u, {...h}), t('br', {}), t(f, {})],
    }),
  e = {render: s, args: {name: 'switch', label: 'Switch Label'}},
  r = {
    render: s,
    args: {name: 'switch', label: 'Switch Label', labelPlacement: 'start'},
  },
  a = {
    render: s,
    args: {name: 'switch', label: 'Disabled Switch', disabled: !0},
  }
var o, n, i
e.parameters = {
  ...e.parameters,
  docs: {
    ...((o = e.parameters) == null ? void 0 : o.docs),
    source: {
      originalSource: `{
  render: Template,
  args: {
    name: 'switch',
    label: 'Switch Label'
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
  render: Template,
  args: {
    name: 'switch',
    label: 'Switch Label',
    labelPlacement: 'start'
  }
}`,
      ...((l = (c = r.parameters) == null ? void 0 : c.docs) == null
        ? void 0
        : l.source),
    },
  },
}
var p, d, b
a.parameters = {
  ...a.parameters,
  docs: {
    ...((p = a.parameters) == null ? void 0 : p.docs),
    source: {
      originalSource: `{
  render: Template,
  args: {
    name: 'switch',
    label: 'Disabled Switch',
    disabled: true
  }
}`,
      ...((b = (d = a.parameters) == null ? void 0 : d.docs) == null
        ? void 0
        : b.source),
    },
  },
}
const y = ['Basic', 'LabelPosition', 'Disabled']
export {
  e as Basic,
  a as Disabled,
  r as LabelPosition,
  y as __namedExportsOrder,
  v as default,
}
//# sourceMappingURL=Switch.stories-dd1cc63d.js.map
