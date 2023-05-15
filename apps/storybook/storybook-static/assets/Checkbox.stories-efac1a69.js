import {b, j as a} from './useThemeProps-3be52b90.js'
import {a as d} from './chunk-OPEUWD42-a3b45fd8.js'
import {F as u} from './Button-934b6c03.js'
import {C as p} from './CheckboxElement-bcbfd255.js'
import './index-ebeaab24.js'
import {S as f} from './Shared-e33e4212.js'
import './extends-98964cd2.js'
import './assertThisInitialized-5649ae8b.js'
import './FormHelperText-a02b62e1.js'
import './FormGroup-d89e04af.js'
import './FormControlLabel-5a6a631a.js'
import './Typography-eebf5bae.js'
import './Checkbox-d8c1e2f4.js'
import './SwitchBase-bb4bde97.js'
import './ButtonBase-4a75c9e0.js'
import './useIsFocusVisible-1a875561.js'
import './useControlled-32189460.js'
import './createSvgIcon-2ce5bfe4.js'
import './Box-339dd07d.js'
const y = {title: 'Checkbox', component: p},
  l = (c) =>
    b(u, {
      defaultValues: {},
      onSuccess: d('submit'),
      children: [a(p, {...c}), a('br', {}), a(f, {})],
    }),
  e = {render: l, args: {label: 'Label', name: 'basic'}},
  r = {
    render: l,
    args: {label: 'Label', name: 'basic', labelProps: {labelPlacement: 'top'}},
  }
var o, t, s
e.parameters = {
  ...e.parameters,
  docs: {
    ...((o = e.parameters) == null ? void 0 : o.docs),
    source: {
      originalSource: `{
  render: Template,
  args: {
    label: 'Label',
    name: 'basic'
  }
}`,
      ...((s = (t = e.parameters) == null ? void 0 : t.docs) == null
        ? void 0
        : s.source),
    },
  },
}
var m, n, i
r.parameters = {
  ...r.parameters,
  docs: {
    ...((m = r.parameters) == null ? void 0 : m.docs),
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
      ...((i = (n = r.parameters) == null ? void 0 : n.docs) == null
        ? void 0
        : i.source),
    },
  },
}
const z = ['Basic', 'LabelPosition']
export {e as Basic, r as LabelPosition, z as __namedExportsOrder, y as default}
//# sourceMappingURL=Checkbox.stories-efac1a69.js.map
