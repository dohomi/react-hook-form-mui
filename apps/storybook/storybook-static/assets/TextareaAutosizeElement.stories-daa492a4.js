import {j as r, b as P} from './useThemeProps-3be52b90.js'
import {t as I, C as M, F as O} from './Button-934b6c03.js'
import './index-ebeaab24.js'
import {T as k} from './TextField-4354f47c.js'
import {e as D} from './Select-c55867f3.js'
import {a as G} from './chunk-OPEUWD42-a3b45fd8.js'
import {S as H} from './Shared-e33e4212.js'
import './extends-98964cd2.js'
import './assertThisInitialized-5649ae8b.js'
import './FormHelperText-a02b62e1.js'
import './useId-3f89f7ef.js'
import './FormLabel-977af3e7.js'
import './react-is.production.min-a192e302.js'
import './useTheme-ccc2f4e9.js'
import './index-9c09ad76.js'
import './useSlotProps-692f4a62.js'
import './useControlled-32189460.js'
import './createSvgIcon-2ce5bfe4.js'
import './Box-339dd07d.js'
function y({
  validation: e = {},
  parseError: C,
  required: l,
  name: p,
  control: E,
  rows: F,
  resizeStyle: A,
  ...a
}) {
  const j = I(),
    c = C || j
  return (
    l && !e.required && (e.required = 'This field is required'),
    r(M, {
      name: p,
      control: E,
      rules: e,
      render: ({
        field: {value: v, onChange: B, onBlur: V, ref: _},
        fieldState: {error: t},
      }) =>
        r(k, {
          ...a,
          name: p,
          value: v ?? '',
          onChange: (u) => {
            B(u.target.value), typeof a.onChange == 'function' && a.onChange(u)
          },
          onBlur: V,
          required: l,
          error: !!t,
          helperText: t
            ? typeof c == 'function'
              ? c(t)
              : t.message
            : a.helperText,
          inputRef: _,
          multiline: !0,
          InputProps: {
            inputComponent: D,
            inputProps: {minRows: F, style: {resize: A || 'both'}},
          },
        }),
    })
  )
}
const me = {title: 'TextareaAutosizeElement', component: y},
  m = (e) =>
    P(O, {
      defaultValues: {},
      onSuccess: G('submit'),
      children: [r(y, {...e}), r('br', {}), r(H, {})],
    }),
  s = {render: m, args: {label: 'Simple Textarea', name: 'textarea'}},
  o = {
    render: m,
    args: {label: 'Required Textarea', name: 'textarea-req', required: !0},
  },
  n = {
    render: m,
    args: {label: 'Simple Textarea', name: 'textarea-rows', rows: 5},
  },
  i = {
    render: m,
    args: {
      label: 'Vertical Resize',
      name: 'textarea-vertical',
      resizeStyle: 'vertical',
      rows: 3,
    },
  }
var d, x, T
s.parameters = {
  ...s.parameters,
  docs: {
    ...((d = s.parameters) == null ? void 0 : d.docs),
    source: {
      originalSource: `{
  render: Template,
  args: {
    label: 'Simple Textarea',
    name: 'textarea'
  }
}`,
      ...((T = (x = s.parameters) == null ? void 0 : x.docs) == null
        ? void 0
        : T.source),
    },
  },
}
var f, g, S
o.parameters = {
  ...o.parameters,
  docs: {
    ...((f = o.parameters) == null ? void 0 : f.docs),
    source: {
      originalSource: `{
  render: Template,
  args: {
    label: 'Required Textarea',
    name: 'textarea-req',
    required: true
  }
}`,
      ...((S = (g = o.parameters) == null ? void 0 : g.docs) == null
        ? void 0
        : S.source),
    },
  },
}
var b, R, z
n.parameters = {
  ...n.parameters,
  docs: {
    ...((b = n.parameters) == null ? void 0 : b.docs),
    source: {
      originalSource: `{
  render: Template,
  args: {
    label: 'Simple Textarea',
    name: 'textarea-rows',
    rows: 5
  }
}`,
      ...((z = (R = n.parameters) == null ? void 0 : R.docs) == null
        ? void 0
        : z.source),
    },
  },
}
var q, w, h
i.parameters = {
  ...i.parameters,
  docs: {
    ...((q = i.parameters) == null ? void 0 : q.docs),
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
      ...((h = (w = i.parameters) == null ? void 0 : w.docs) == null
        ? void 0
        : h.source),
    },
  },
}
const le = ['Basic', 'Required', 'Rows', 'ResizeStyle']
export {
  s as Basic,
  o as Required,
  i as ResizeStyle,
  n as Rows,
  le as __namedExportsOrder,
  me as default,
}
//# sourceMappingURL=TextareaAutosizeElement.stories-daa492a4.js.map
