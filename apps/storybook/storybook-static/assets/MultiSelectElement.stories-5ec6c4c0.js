import {
  M as se,
  j as oe,
  F as ie,
  b as g,
} from './TextareaAutosizeElement-36296a48.js'
import './index-f1f2c4b1.js'
import {a as le} from './chunk-AY7I2SME-c7b6cf8a.js'
import {S as me} from './Shared-07615c22.js'
import './index-d6b32626.js'
import './createTheme-c77538bc.js'
import './assertThisInitialized-4401020c.js'
import './index-c74c9f7f.js'
import './Box-228f8f89.js'
const je = {title: 'MultiSelectElement', component: se},
  e = (h) =>
    oe(ie, {
      defaultValues: {},
      onSuccess: le('submit'),
      children: [g(se, {...h}), g('br', {}), g(me, {})],
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
  te = [
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
  t = {
    render: e,
    args: {
      name: 'basic_small',
      size: 'small',
      label: 'Select Field',
      options: r,
    },
  },
  o = {
    render: e,
    args: {name: 'required', label: 'Required Field', options: r, required: !0},
  },
  i = {
    render: e,
    args: {name: 'chips', label: 'Required Field', options: r, showChips: !0},
  },
  l = {
    render: e,
    args: {
      name: 'chips',
      label: 'Required Field',
      options: r,
      showChips: !0,
      preserveOrder: !0,
    },
  },
  m = {
    render: e,
    args: {
      name: 'checkbox',
      label: 'Checkbox Field',
      options: r,
      showCheckbox: !0,
    },
  },
  S = [
    {id: 1, name: 'Alpha'},
    {id: 2, name: 'Beta'},
    {id: 3, name: 'Celsius'},
    {id: 4, name: 'Delta'},
  ],
  c = {
    render: e,
    args: {
      name: 'object',
      label: 'Object Field',
      options: S,
      itemKey: 'id',
      itemLabel: 'name',
    },
  },
  p = {
    render: e,
    args: {
      name: 'object',
      label: 'Object Field',
      options: S,
      itemKey: 'id',
      itemLabel: 'name',
      showChips: !0,
    },
  },
  d = {
    render: e,
    args: {
      name: 'object',
      label: 'Object Field',
      options: S,
      itemKey: 'id',
      itemLabel: 'name',
      renderValue: (h) => {
        var C
        return `You selected: ${(C = h || []) == null ? void 0 : C.length}`
      },
    },
  },
  u = {
    render: e,
    args: {
      name: 'month',
      options: te,
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
  b = {
    render: e,
    args: {
      name: 'months_small',
      options: te,
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
var j, y, F
a.parameters = {
  ...a.parameters,
  docs: {
    ...((j = a.parameters) == null ? void 0 : j.docs),
    source: {
      originalSource: `{
  render: Template,
  args: {
    name: 'basic',
    options: names
  }
}`,
      ...((F = (y = a.parameters) == null ? void 0 : y.docs) == null
        ? void 0
        : F.source),
    },
  },
}
var M, x, O
n.parameters = {
  ...n.parameters,
  docs: {
    ...((M = n.parameters) == null ? void 0 : M.docs),
    source: {
      originalSource: `{
  render: Template,
  args: {
    name: 'filled',
    options: names,
    variant: 'filled'
  }
}`,
      ...((O = (x = n.parameters) == null ? void 0 : x.docs) == null
        ? void 0
        : O.source),
    },
  },
}
var T, P, W
s.parameters = {
  ...s.parameters,
  docs: {
    ...((T = s.parameters) == null ? void 0 : T.docs),
    source: {
      originalSource: `{
  render: Template,
  args: {
    name: 'basic',
    label: 'Select Field',
    options: names
  }
}`,
      ...((W = (P = s.parameters) == null ? void 0 : P.docs) == null
        ? void 0
        : W.source),
    },
  },
}
var k, L, f
t.parameters = {
  ...t.parameters,
  docs: {
    ...((k = t.parameters) == null ? void 0 : k.docs),
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
      ...((f = (L = t.parameters) == null ? void 0 : L.docs) == null
        ? void 0
        : f.source),
    },
  },
}
var q, w, A
o.parameters = {
  ...o.parameters,
  docs: {
    ...((q = o.parameters) == null ? void 0 : q.docs),
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
      ...((A = (w = o.parameters) == null ? void 0 : w.docs) == null
        ? void 0
        : A.source),
    },
  },
}
var R, V, v
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
      ...((v = (V = i.parameters) == null ? void 0 : V.docs) == null
        ? void 0
        : v.source),
    },
  },
}
var K, _, B
l.parameters = {
  ...l.parameters,
  docs: {
    ...((K = l.parameters) == null ? void 0 : K.docs),
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
      ...((B = (_ = l.parameters) == null ? void 0 : _.docs) == null
        ? void 0
        : B.source),
    },
  },
}
var z, E, H
m.parameters = {
  ...m.parameters,
  docs: {
    ...((z = m.parameters) == null ? void 0 : z.docs),
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
      ...((H = (E = m.parameters) == null ? void 0 : E.docs) == null
        ? void 0
        : H.source),
    },
  },
}
var J, D, Y
c.parameters = {
  ...c.parameters,
  docs: {
    ...((J = c.parameters) == null ? void 0 : J.docs),
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
      ...((Y = (D = c.parameters) == null ? void 0 : D.docs) == null
        ? void 0
        : Y.source),
    },
  },
}
var $, N, G
p.parameters = {
  ...p.parameters,
  docs: {
    ...(($ = p.parameters) == null ? void 0 : $.docs),
    source: {
      originalSource: `{
  render: Template,
  args: {
    name: 'object',
    label: 'Object Field',
    options: objectVals,
    itemKey: 'id',
    itemLabel: 'name',
    showChips: true
  }
}`,
      ...((G = (N = p.parameters) == null ? void 0 : N.docs) == null
        ? void 0
        : G.source),
    },
  },
}
var I, Q, U
d.parameters = {
  ...d.parameters,
  docs: {
    ...((I = d.parameters) == null ? void 0 : I.docs),
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
      ...((U = (Q = d.parameters) == null ? void 0 : Q.docs) == null
        ? void 0
        : U.source),
    },
  },
}
var X, Z, ee
u.parameters = {
  ...u.parameters,
  docs: {
    ...((X = u.parameters) == null ? void 0 : X.docs),
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
      ...((ee = (Z = u.parameters) == null ? void 0 : Z.docs) == null
        ? void 0
        : ee.source),
    },
  },
}
var re, ae, ne
b.parameters = {
  ...b.parameters,
  docs: {
    ...((re = b.parameters) == null ? void 0 : re.docs),
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
      ...((ne = (ae = b.parameters) == null ? void 0 : ae.docs) == null
        ? void 0
        : ne.source),
    },
  },
}
const ye = [
  'Basic',
  'Filled',
  'WithLabel',
  'WithLabelSmall',
  'Required',
  'WithChips',
  'WithChipsPreserveOrder',
  'WithCheckbox',
  'WithObjectArray',
  'WithObjectArrayChips',
  'OverwriteRenderValue',
  'MonthPicker',
  'MonthPickerSmall',
]
export {
  a as Basic,
  n as Filled,
  u as MonthPicker,
  b as MonthPickerSmall,
  d as OverwriteRenderValue,
  o as Required,
  m as WithCheckbox,
  i as WithChips,
  l as WithChipsPreserveOrder,
  s as WithLabel,
  t as WithLabelSmall,
  c as WithObjectArray,
  p as WithObjectArrayChips,
  ye as __namedExportsOrder,
  je as default,
}
//# sourceMappingURL=MultiSelectElement.stories-5ec6c4c0.js.map
