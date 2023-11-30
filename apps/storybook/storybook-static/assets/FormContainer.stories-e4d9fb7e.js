import {
  F as o,
  b as e,
  j as l,
  f as m,
  g as t,
  u as S,
  B as s,
  A as E,
  d as M,
  M as H,
  D as G,
  R as I,
  C as j,
  P as v,
  h as O,
  S as z,
  i as J,
  k as K,
} from './TextareaAutosizeElement-ce2d51c3.js'
import './index-f1f2c4b1.js'
import {a} from './chunk-AY7I2SME-c7b6cf8a.js'
import {D as L} from './DateFnsProvider-70a79c58.js'
import './index-d6b32626.js'
import './createTheme-c77538bc.js'
import './assertThisInitialized-4401020c.js'
import './index-c74c9f7f.js'
import './isNativeReflectConstruct-e378569d.js'
const ae = {title: 'FormContainer', component: o}
function A() {
  const [n, i] = K({name: ['name', 'email']})
  return e(s, {
    type: 'submit',
    color: 'primary',
    disabled: !(n && i),
    children: 'Submit',
  })
}
const c = {
    render: () =>
      e(o, {
        defaultValues: {name: ''},
        onSuccess: a('submit'),
        children: l(m, {
          spacing: 2,
          children: [
            e(t, {name: 'name', label: 'Name', required: !0}),
            e(t, {name: 'email', label: 'Email', required: !0, type: 'email'}),
            ' ',
            e(t, {name: 'interest', label: 'Interest'}),
            e(A, {}),
          ],
        }),
      }),
  },
  u = {
    render: () =>
      e(o, {
        defaultValues: {name: ''},
        onSuccess: a('submit'),
        onError: a('error'),
        children: l(m, {
          spacing: 2,
          children: [
            e(t, {name: 'name', label: 'Name', required: !0}),
            e(t, {name: 'email', label: 'Email', required: !0, type: 'email'}),
            ' ',
            e(t, {name: 'interest', label: 'Interest'}),
            e(A, {}),
          ],
        }),
      }),
  },
  d = {
    render: () => {
      const n = S({defaultValues: {name: ''}})
      return e(o, {
        formContext: n,
        onSuccess: a('submit'),
        children: l(m, {
          spacing: 2,
          children: [
            e(t, {name: 'name', label: 'Name'}),
            e(s, {type: 'submit', color: 'primary', children: 'Submit'}),
          ],
        }),
      })
    },
  },
  p = {
    render: () => {
      const n = S({defaultValues: {name: 'Hans'}}),
        {handleSubmit: i} = n
      return e(o, {
        formContext: n,
        handleSubmit: i(a('submit')),
        children: l(m, {
          spacing: 2,
          children: [
            e(t, {name: 'name', label: 'Name'}),
            e(s, {type: 'submit', color: 'primary', children: 'Submit'}),
          ],
        }),
      })
    },
  },
  b = {
    render: () =>
      e(o, {
        onSuccess: a('submit'),
        children: l(m, {
          spacing: 2,
          children: [
            e(t, {name: 'name', label: 'Name'}),
            e(s, {type: 'submit', color: 'primary', children: 'Submit'}),
          ],
        }),
      }),
  },
  h = {
    render: () => {
      const {control: n, handleSubmit: i} = S({defaultValues: {name: ''}}),
        r = [
          {id: 'one', label: 'One'},
          {id: 'two', label: 'Two'},
          {id: 'three', label: 'Three'},
        ]
      return e(L, {
        children: e('form', {
          onSubmit: i(() => a('submit')),
          noValidate: !0,
          children: l(m, {
            spacing: 2,
            children: [
              e(t, {
                name: 'name',
                label: 'Name',
                control: n,
                required: !0,
                fullWidth: !0,
              }),
              e(E, {
                name: 'auto',
                label: 'Autocomplete',
                control: n,
                options: r,
              }),
              e(E, {
                name: 'auto_multi',
                label: 'Autocomplete Multiple',
                multiple: !0,
                control: n,
                options: r,
              }),
              e(M, {
                name: 'select',
                label: 'Select',
                control: n,
                options: r,
                fullWidth: !0,
              }),
              e(H, {
                showCheckbox: !0,
                name: 'multi_select',
                label: 'Multi Select',
                control: n,
                options: r,
                fullWidth: !0,
              }),
              e(G, {name: 'date', control: n}),
              ' ',
              e('br', {}),
              e(I, {name: 'radio', label: 'Radio', control: n, options: r}),
              e(j, {name: 'checkbox', label: 'Radio', control: n, options: r}),
              e(v, {name: 'password', label: 'Password', control: n}),
              e(O, {
                name: 'password_repeat',
                label: 'Password Repeat',
                passwordFieldName: 'password',
                control: n,
              }),
              e(z, {name: 'switch', label: 'Switch', control: n}),
              e(J, {name: 'check', label: 'Check', control: n}),
              e(s, {type: 'submit', color: 'primary', children: 'Submit'}),
            ],
          }),
        }),
      })
    },
  }
var f, x, C
c.parameters = {
  ...c.parameters,
  docs: {
    ...((f = c.parameters) == null ? void 0 : f.docs),
    source: {
      originalSource: `{
  render: () => <FormContainer defaultValues={{
    name: ''
  }} onSuccess={action('submit')}>
      <Stack spacing={2}>
        <TextFieldElement name={'name'} label={'Name'} required />
        <TextFieldElement name={'email'} label={'Email'} required type={'email'} />{' '}
        <TextFieldElement name={'interest'} label={'Interest'} />
        <SubComponent />
      </Stack>
    </FormContainer>
}`,
      ...((C = (x = c.parameters) == null ? void 0 : x.docs) == null
        ? void 0
        : C.source),
    },
  },
}
var F, g, w
u.parameters = {
  ...u.parameters,
  docs: {
    ...((F = u.parameters) == null ? void 0 : F.docs),
    source: {
      originalSource: `{
  render: () => <FormContainer defaultValues={{
    name: ''
  }} onSuccess={action('submit')} onError={action('error')}>
      <Stack spacing={2}>
        <TextFieldElement name={'name'} label={'Name'} required />
        <TextFieldElement name={'email'} label={'Email'} required type={'email'} />{' '}
        <TextFieldElement name={'interest'} label={'Interest'} />
        <SubComponent />
      </Stack>
    </FormContainer>
}`,
      ...((w = (g = u.parameters) == null ? void 0 : g.docs) == null
        ? void 0
        : w.source),
    },
  },
}
var k, y, T
d.parameters = {
  ...d.parameters,
  docs: {
    ...((k = d.parameters) == null ? void 0 : k.docs),
    source: {
      originalSource: `{
  render: () => {
    const formContext = useForm<{
      name: string;
    }>({
      defaultValues: {
        name: ''
      }
    });
    return <FormContainer formContext={formContext} onSuccess={action('submit')}>
        <Stack spacing={2}>
          <TextFieldElement name={'name'} label={'Name'} />
          <Button type={'submit'} color={'primary'}>
            Submit
          </Button>
        </Stack>
      </FormContainer>;
  }
}`,
      ...((T = (y = d.parameters) == null ? void 0 : y.docs) == null
        ? void 0
        : T.source),
    },
  },
}
var B, N, P
p.parameters = {
  ...p.parameters,
  docs: {
    ...((B = p.parameters) == null ? void 0 : B.docs),
    source: {
      originalSource: `{
  render: () => {
    const formContext = useForm<{
      name: string;
    }>({
      defaultValues: {
        name: 'Hans'
      }
    });
    const {
      handleSubmit
    } = formContext;
    return <FormContainer formContext={formContext} handleSubmit={handleSubmit(action('submit'))}>
        <Stack spacing={2}>
          <TextFieldElement name={'name'} label={'Name'} />
          <Button type={'submit'} color={'primary'}>
            Submit
          </Button>
        </Stack>
      </FormContainer>;
  }
}`,
      ...((P = (N = p.parameters) == null ? void 0 : N.docs) == null
        ? void 0
        : P.source),
    },
  },
}
var V, W, R
b.parameters = {
  ...b.parameters,
  docs: {
    ...((V = b.parameters) == null ? void 0 : V.docs),
    source: {
      originalSource: `{
  render: () => {
    return <FormContainer onSuccess={action('submit')}>
        <Stack spacing={2}>
          <TextFieldElement name={'name'} label={'Name'} />
          <Button type={'submit'} color={'primary'}>
            Submit
          </Button>
        </Stack>
      </FormContainer>;
  }
}`,
      ...((R = (W = b.parameters) == null ? void 0 : W.docs) == null
        ? void 0
        : R.source),
    },
  },
}
var _, q, D
h.parameters = {
  ...h.parameters,
  docs: {
    ...((_ = h.parameters) == null ? void 0 : _.docs),
    source: {
      originalSource: `{
  render: () => {
    const {
      control,
      handleSubmit
    } = useForm<{
      multi_select: string[];
      name: string;
      auto: string;
      auto_multi: string[];
      select: string;
      switch: boolean;
      checkbox: string[];
      check: boolean;
      date: string;
      radio: string;
      password: string;
      password_repeat: string;
    }>({
      defaultValues: {
        name: ''
      }
    });
    const options = [{
      id: 'one',
      label: 'One'
    }, {
      id: 'two',
      label: 'Two'
    }, {
      id: 'three',
      label: 'Three'
    }];
    return <DateFnsProvider>
        <form onSubmit={handleSubmit(() => action('submit'))} noValidate>
          <Stack spacing={2}>
            <TextFieldElement name={'name'} label={'Name'} control={control} required fullWidth />
            <AutocompleteElement name={'auto'} label={'Autocomplete'} control={control} options={options} />
            <AutocompleteElement name={'auto_multi'} label={'Autocomplete Multiple'} multiple control={control} options={options} />
            <SelectElement name={'select'} label={'Select'} control={control} options={options} fullWidth />
            <MultiSelectElement showCheckbox name={'multi_select'} label={'Multi Select'} control={control} options={options} fullWidth />
            <DatePickerElement name={'date'} control={control} /> <br />
            <RadioButtonGroup name={'radio'} label={'Radio'} control={control} options={options} />
            <CheckboxButtonGroup name={'checkbox'} label={'Radio'} control={control} options={options} />
            <PasswordElement name={'password'} label={'Password'} control={control} />
            <PasswordRepeatElement name={'password_repeat'} label={'Password Repeat'} passwordFieldName={'password'} control={control} />
            <SwitchElement name={'switch'} label={'Switch'} control={control} />
            <CheckboxElement name={'check'} label={'Check'} control={control} />
            <Button type={'submit'} color={'primary'}>
              Submit
            </Button>
          </Stack>
        </form>
      </DateFnsProvider>;
  }
}`,
      ...((D = (q = h.parameters) == null ? void 0 : q.docs) == null
        ? void 0
        : D.source),
    },
  },
}
const re = [
  'Basic',
  'WithErrorHandler',
  'WithContext',
  'WithHandleSubmit',
  'NoDefaultValues',
  'StrictTypingForm',
]
export {
  c as Basic,
  b as NoDefaultValues,
  h as StrictTypingForm,
  d as WithContext,
  u as WithErrorHandler,
  p as WithHandleSubmit,
  re as __namedExportsOrder,
  ae as default,
}
//# sourceMappingURL=FormContainer.stories-e4d9fb7e.js.map
