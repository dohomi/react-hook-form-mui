import {T as p} from './TextareaAutosizeElement-36296a48.js'
import './createTheme-c77538bc.js'
import './index-f1f2c4b1.js'
import {F as l} from './FormDecorator-32548d2a.js'
import './index-d6b32626.js'
import './assertThisInitialized-4401020c.js'
import './index-c74c9f7f.js'
import './chunk-AY7I2SME-c7b6cf8a.js'
import './Shared-07615c22.js'
import './Box-228f8f89.js'
import './DateFnsProvider-e5a232b5.js'
import './isNativeReflectConstruct-e378569d.js'
const E = {title: 'TimePickerElement', component: p, decorators: [l]},
  e = {args: {label: 'Time Picker', name: 'required_picker', required: !0}},
  r = {
    args: {
      label: 'Time Picker',
      name: 'required_picker_custom',
      required: !0,
      validation: {required: 'Custom required message'},
    },
  },
  i = {
    args: {
      label: 'Required Picker',
      name: 'requiredCustomMessage',
      required: !0,
      textReadOnly: !0,
    },
  }
var t, a, s
e.parameters = {
  ...e.parameters,
  docs: {
    ...((t = e.parameters) == null ? void 0 : t.docs),
    source: {
      originalSource: `{
  args: {
    label: 'Time Picker',
    name: 'required_picker',
    required: true
  }
}`,
      ...((s = (a = e.parameters) == null ? void 0 : a.docs) == null
        ? void 0
        : s.source),
    },
  },
}
var o, m, u
r.parameters = {
  ...r.parameters,
  docs: {
    ...((o = r.parameters) == null ? void 0 : o.docs),
    source: {
      originalSource: `{
  args: {
    label: 'Time Picker',
    name: 'required_picker_custom',
    required: true,
    validation: {
      required: 'Custom required message'
    }
  }
}`,
      ...((u = (m = r.parameters) == null ? void 0 : m.docs) == null
        ? void 0
        : u.source),
    },
  },
}
var n, c, d
i.parameters = {
  ...i.parameters,
  docs: {
    ...((n = i.parameters) == null ? void 0 : n.docs),
    source: {
      originalSource: `{
  args: {
    label: 'Required Picker',
    name: 'requiredCustomMessage',
    required: true,
    textReadOnly: true
  }
}`,
      ...((d = (c = i.parameters) == null ? void 0 : c.docs) == null
        ? void 0
        : d.source),
    },
  },
}
const O = ['RequiredPicker', 'RequiredPickerCustom', 'DisableTextInput']
export {
  i as DisableTextInput,
  e as RequiredPicker,
  r as RequiredPickerCustom,
  O as __namedExportsOrder,
  E as default,
}
//# sourceMappingURL=TimePickerElement.stories-8efdd773.js.map
