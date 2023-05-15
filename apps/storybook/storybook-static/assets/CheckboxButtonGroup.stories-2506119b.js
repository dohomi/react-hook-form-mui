import {b as O, j as s} from './useThemeProps-3be52b90.js'
import {a as B} from './chunk-OPEUWD42-a3b45fd8.js'
import {F as R} from './Button-934b6c03.js'
import './index-ebeaab24.js'
import {C as S} from './CheckboxButtonGroup-7f2ce8f9.js'
import {S as T} from './Shared-e33e4212.js'
import './extends-98964cd2.js'
import './assertThisInitialized-5649ae8b.js'
import './useTheme-ccc2f4e9.js'
import './FormHelperText-a02b62e1.js'
import './FormLabel-977af3e7.js'
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
const W = {title: 'CheckboxButtonGroup', component: S},
  e = (f) =>
    O(R, {
      defaultValues: {},
      onSuccess: B('submit'),
      children: [s(S, {...f}), s('br', {}), s(T, {})],
    }),
  r = {
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
  a = {
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
  o = {
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
  l = {
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
var t, i, b
r.parameters = {
  ...r.parameters,
  docs: {
    ...((t = r.parameters) == null ? void 0 : t.docs),
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
      ...((b = (i = r.parameters) == null ? void 0 : i.docs) == null
        ? void 0
        : b.source),
    },
  },
}
var c, d, m
a.parameters = {
  ...a.parameters,
  docs: {
    ...((c = a.parameters) == null ? void 0 : c.docs),
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
      ...((m = (d = a.parameters) == null ? void 0 : d.docs) == null
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
o.parameters = {
  ...o.parameters,
  docs: {
    ...((x = o.parameters) == null ? void 0 : x.docs),
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
      ...((k = (h = o.parameters) == null ? void 0 : h.docs) == null
        ? void 0
        : k.source),
    },
  },
}
var L, j, q
l.parameters = {
  ...l.parameters,
  docs: {
    ...((L = l.parameters) == null ? void 0 : L.docs),
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
      ...((q = (j = l.parameters) == null ? void 0 : j.docs) == null
        ? void 0
        : q.source),
    },
  },
}
const X = ['Basic', 'Inline', 'ReturnObject', 'Required', 'Disabled']
export {
  r as Basic,
  l as Disabled,
  a as Inline,
  o as Required,
  n as ReturnObject,
  X as __namedExportsOrder,
  W as default,
}
//# sourceMappingURL=CheckboxButtonGroup.stories-2506119b.js.map
