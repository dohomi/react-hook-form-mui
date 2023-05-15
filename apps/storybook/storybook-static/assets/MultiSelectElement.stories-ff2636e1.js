import {b as ae, j as h} from './useThemeProps-3be52b90.js'
import {F as ne} from './Button-934b6c03.js'
import './index-ebeaab24.js'
import {M as Z} from './MultiSelectElement-ab320ab0.js'
import {a as se} from './chunk-OPEUWD42-a3b45fd8.js'
import {S as oe} from './Shared-e33e4212.js'
import './extends-98964cd2.js'
import './assertThisInitialized-5649ae8b.js'
import './createSvgIcon-f095371f.js'
import './createSvgIcon-2ce5bfe4.js'
import './Select-c55867f3.js'
import './FormLabel-977af3e7.js'
import './react-is.production.min-a192e302.js'
import './useTheme-ccc2f4e9.js'
import './index-9c09ad76.js'
import './useSlotProps-692f4a62.js'
import './useId-3f89f7ef.js'
import './FormHelperText-a02b62e1.js'
import './useControlled-32189460.js'
import './useIsFocusVisible-1a875561.js'
import './jsx-runtime_commonjs-proxy-93a23ed8.js'
import './Chip-6299b5c8.js'
import './ButtonBase-4a75c9e0.js'
import './MenuItem-4620b72b.js'
import './Checkbox-d8c1e2f4.js'
import './SwitchBase-bb4bde97.js'
import './Typography-eebf5bae.js'
import './Box-339dd07d.js'
const Ve = {title: 'MultiSelectElement', component: Z},
  e = (b) =>
    ae(ne, {
      defaultValues: {},
      onSuccess: se('submit'),
      children: [h(Z, {...b}), h('br', {}), h(oe, {})],
    }),
  r = [
    'Oliver Hansen',
    'Van Henry',
    'April Tucker',
    'Ralph Hubbard',
    'Omar Alexander',
    'Carlos Abbott',
    'Miriam Wagner',
    'Bradley Wilkerson',
    'Virginia Andrews',
    'Kelly Snyder',
  ],
  ee = [
    'January',
    'February',
    'March',
    'April',
    'May',
    'June',
    'July',
    'August',
    'September',
    'October',
    'November',
    'December',
  ],
  a = {render: e, args: {name: 'basic', options: r}},
  n = {render: e, args: {name: 'filled', options: r, variant: 'filled'}},
  s = {render: e, args: {name: 'basic', label: 'Select Field', options: r}},
  o = {
    render: e,
    args: {
      name: 'basic_small',
      size: 'small',
      label: 'Select Field',
      options: r,
    },
  },
  t = {
    render: e,
    args: {name: 'required', label: 'Required Field', options: r, required: !0},
  },
  i = {
    render: e,
    args: {name: 'chips', label: 'Required Field', options: r, showChips: !0},
  },
  m = {
    render: e,
    args: {
      name: 'chips',
      label: 'Required Field',
      options: r,
      showChips: !0,
      preserveOrder: !0,
    },
  },
  l = {
    render: e,
    args: {
      name: 'checkbox',
      label: 'Checkbox Field',
      options: r,
      showCheckbox: !0,
    },
  },
  re = [
    {id: 1, name: 'Alpha'},
    {id: 2, name: 'Beta'},
    {id: 3, name: 'Celsius'},
    {id: 4, name: 'Delta'},
  ],
  p = {
    render: e,
    args: {
      name: 'object',
      label: 'Object Field',
      options: re,
      itemKey: 'id',
      itemLabel: 'name',
    },
  },
  c = {
    render: e,
    args: {
      name: 'object',
      label: 'Object Field',
      options: re,
      itemKey: 'id',
      itemLabel: 'name',
      renderValue: (b) => {
        var g
        return `You selected: ${(g = b || []) == null ? void 0 : g.length}`
      },
    },
  },
  d = {
    render: e,
    args: {
      name: 'month',
      options: ee,
      label: 'Months',
      MenuProps: {
        PaperProps: {
          sx: {
            '& .MuiList-root': {
              display: 'grid',
              gridTemplateColumns: 'repeat(3, 1fr)',
              gap: '4px',
            },
          },
        },
      },
    },
  },
  u = {
    render: e,
    args: {
      name: 'months_small',
      options: ee,
      label: 'Months',
      size: 'small',
      MenuProps: {
        PaperProps: {
          sx: {
            '& .MuiList-root': {
              display: 'grid',
              gridTemplateColumns: 'repeat(3, 1fr)',
              gap: '4px',
            },
          },
        },
      },
    },
  }
var S, M, x
a.parameters = {
  ...a.parameters,
  docs: {
    ...((S = a.parameters) == null ? void 0 : S.docs),
    source: {
      originalSource: `{
  render: Template,
  args: {
    name: 'basic',
    options: names
  }
}`,
      ...((x = (M = a.parameters) == null ? void 0 : M.docs) == null
        ? void 0
        : x.source),
    },
  },
}
var C, F, y
n.parameters = {
  ...n.parameters,
  docs: {
    ...((C = n.parameters) == null ? void 0 : C.docs),
    source: {
      originalSource: `{
  render: Template,
  args: {
    name: 'filled',
    options: names,
    variant: 'filled'
  }
}`,
      ...((y = (F = n.parameters) == null ? void 0 : F.docs) == null
        ? void 0
        : y.source),
    },
  },
}
var P, T, j
s.parameters = {
  ...s.parameters,
  docs: {
    ...((P = s.parameters) == null ? void 0 : P.docs),
    source: {
      originalSource: `{
  render: Template,
  args: {
    name: 'basic',
    label: 'Select Field',
    options: names
  }
}`,
      ...((j = (T = s.parameters) == null ? void 0 : T.docs) == null
        ? void 0
        : j.source),
    },
  },
}
var O, f, k
o.parameters = {
  ...o.parameters,
  docs: {
    ...((O = o.parameters) == null ? void 0 : O.docs),
    source: {
      originalSource: `{
  render: Template,
  args: {
    name: 'basic_small',
    size: 'small',
    label: 'Select Field',
    options: names
  }
}`,
      ...((k = (f = o.parameters) == null ? void 0 : f.docs) == null
        ? void 0
        : k.source),
    },
  },
}
var W, q, L
t.parameters = {
  ...t.parameters,
  docs: {
    ...((W = t.parameters) == null ? void 0 : W.docs),
    source: {
      originalSource: `{
  render: Template,
  args: {
    name: 'required',
    label: 'Required Field',
    options: names,
    required: true
  }
}`,
      ...((L = (q = t.parameters) == null ? void 0 : q.docs) == null
        ? void 0
        : L.source),
    },
  },
}
var R, v, V
i.parameters = {
  ...i.parameters,
  docs: {
    ...((R = i.parameters) == null ? void 0 : R.docs),
    source: {
      originalSource: `{
  render: Template,
  args: {
    name: 'chips',
    label: 'Required Field',
    options: names,
    showChips: true
  }
}`,
      ...((V = (v = i.parameters) == null ? void 0 : v.docs) == null
        ? void 0
        : V.source),
    },
  },
}
var w, A, _
m.parameters = {
  ...m.parameters,
  docs: {
    ...((w = m.parameters) == null ? void 0 : w.docs),
    source: {
      originalSource: `{
  render: Template,
  args: {
    name: 'chips',
    label: 'Required Field',
    options: names,
    showChips: true,
    preserveOrder: true
  }
}`,
      ...((_ = (A = m.parameters) == null ? void 0 : A.docs) == null
        ? void 0
        : _.source),
    },
  },
}
var B, K, z
l.parameters = {
  ...l.parameters,
  docs: {
    ...((B = l.parameters) == null ? void 0 : B.docs),
    source: {
      originalSource: `{
  render: Template,
  args: {
    name: 'checkbox',
    label: 'Checkbox Field',
    options: names,
    showCheckbox: true
  }
}`,
      ...((z = (K = l.parameters) == null ? void 0 : K.docs) == null
        ? void 0
        : z.source),
    },
  },
}
var E, H, J
p.parameters = {
  ...p.parameters,
  docs: {
    ...((E = p.parameters) == null ? void 0 : E.docs),
    source: {
      originalSource: `{
  render: Template,
  args: {
    name: 'object',
    label: 'Object Field',
    options: objectVals,
    itemKey: 'id',
    itemLabel: 'name'
  }
}`,
      ...((J = (H = p.parameters) == null ? void 0 : H.docs) == null
        ? void 0
        : J.source),
    },
  },
}
var D, Y, $
c.parameters = {
  ...c.parameters,
  docs: {
    ...((D = c.parameters) == null ? void 0 : D.docs),
    source: {
      originalSource: `{
  render: Template,
  args: {
    name: 'object',
    label: 'Object Field',
    options: objectVals,
    itemKey: 'id',
    itemLabel: 'name',
    renderValue: (selected: any) => \`You selected: \${(selected || [])?.length}\`
  }
}`,
      ...(($ = (Y = c.parameters) == null ? void 0 : Y.docs) == null
        ? void 0
        : $.source),
    },
  },
}
var N, G, I
d.parameters = {
  ...d.parameters,
  docs: {
    ...((N = d.parameters) == null ? void 0 : N.docs),
    source: {
      originalSource: `{
  render: Template,
  args: {
    name: 'month',
    options: months,
    label: 'Months',
    MenuProps: {
      PaperProps: {
        sx: {
          '& .MuiList-root': {
            display: 'grid',
            gridTemplateColumns: 'repeat(3, 1fr)',
            gap: '4px'
          }
        }
      }
    }
  }
}`,
      ...((I = (G = d.parameters) == null ? void 0 : G.docs) == null
        ? void 0
        : I.source),
    },
  },
}
var Q, U, X
u.parameters = {
  ...u.parameters,
  docs: {
    ...((Q = u.parameters) == null ? void 0 : Q.docs),
    source: {
      originalSource: `{
  render: Template,
  args: {
    name: 'months_small',
    options: months,
    label: 'Months',
    size: 'small',
    MenuProps: {
      PaperProps: {
        sx: {
          '& .MuiList-root': {
            display: 'grid',
            gridTemplateColumns: 'repeat(3, 1fr)',
            gap: '4px'
          }
        }
      }
    }
  }
}`,
      ...((X = (U = u.parameters) == null ? void 0 : U.docs) == null
        ? void 0
        : X.source),
    },
  },
}
const we = [
  'Basic',
  'Filled',
  'WithLabel',
  'WithLabelSmall',
  'Required',
  'WithChips',
  'WithChipsPreserveOrder',
  'WithCheckbox',
  'WithObjectArray',
  'OverwriteRenderValue',
  'MonthPicker',
  'MonthPickerSmall',
]
export {
  a as Basic,
  n as Filled,
  d as MonthPicker,
  u as MonthPickerSmall,
  c as OverwriteRenderValue,
  t as Required,
  l as WithCheckbox,
  i as WithChips,
  m as WithChipsPreserveOrder,
  s as WithLabel,
  o as WithLabelSmall,
  p as WithObjectArray,
  we as __namedExportsOrder,
  Ve as default,
}
//# sourceMappingURL=MultiSelectElement.stories-ff2636e1.js.map
