import {
  j as l,
  F as m,
  b as e,
  f as t,
  u as h,
  B as s,
  g as A,
  A as S,
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
  l as L,
} from './TextareaAutosizeElement-36296a48.js'
import './index-f1f2c4b1.js'
import {a as o} from './chunk-AY7I2SME-c7b6cf8a.js'
import {D as Q} from './DateFnsProvider-e5a232b5.js'
import './index-d6b32626.js'
import './createTheme-c77538bc.js'
import './assertThisInitialized-4401020c.js'
import './index-c74c9f7f.js'
import './isNativeReflectConstruct-e378569d.js'
const ae = {title: 'FormContainer'},
  D = () => {
    const [n, a] = K({name: ['name', 'email']})
    return (
      console.log(n, a),
      e(L, {
        children: e(s, {
          type: 'submit',
          color: 'primary',
          disabled: !(n && a),
          children: 'Submit',
        }),
      })
    )
  },
  i = () =>
    l(m, {
      defaultValues: {name: ''},
      onSuccess: o('submit'),
      children: [
        e(t, {name: 'name', label: 'Name', required: !0}),
        ' ',
        e('br', {}),
        e(t, {name: 'email', label: 'Email', required: !0, type: 'email'}),
        ' ',
        e('br', {}),
        e(t, {name: 'interest', label: 'Interest'}),
        ' ',
        e('br', {}),
        e(D, {}),
      ],
    }),
  c = () =>
    l(m, {
      defaultValues: {name: ''},
      onSuccess: o('submit'),
      onError: o('error'),
      children: [
        e(t, {name: 'name', label: 'Name', required: !0}),
        ' ',
        e('br', {}),
        e(t, {name: 'email', label: 'Email', required: !0, type: 'email'}),
        ' ',
        e('br', {}),
        e(t, {name: 'interest', label: 'Interest'}),
        ' ',
        e('br', {}),
        e(D, {}),
      ],
    }),
  u = () => {
    const n = h({defaultValues: {name: ''}})
    return l(m, {
      formContext: n,
      onSuccess: o('submit'),
      children: [
        e(t, {name: 'name', label: 'Name'}),
        e('br', {}),
        e(s, {type: 'submit', color: 'primary', children: 'Submit'}),
      ],
    })
  },
  d = () => {
    const n = h({defaultValues: {name: 'Hans'}}),
      {handleSubmit: a} = n
    return l(m, {
      formContext: n,
      handleSubmit: a(o('submit')),
      children: [
        e(t, {name: 'name', label: 'Name'}),
        e('br', {}),
        e(s, {type: 'submit', color: 'primary', children: 'Submit'}),
      ],
    })
  },
  b = () =>
    l(m, {
      onSuccess: o('submit'),
      children: [
        e(t, {name: 'name', label: 'Name'}),
        e('br', {}),
        e(s, {type: 'submit', color: 'primary', children: 'Submit'}),
      ],
    }),
  p = () => {
    const {control: n, handleSubmit: a} = h({defaultValues: {name: ''}}),
      r = [
        {id: 'one', label: 'One'},
        {id: 'two', label: 'Two'},
        {id: 'three', label: 'Three'},
      ]
    return e(Q, {
      children: e('form', {
        onSubmit: a(() => o('submit')),
        noValidate: !0,
        children: l(A, {
          spacing: 2,
          children: [
            e(t, {
              name: 'name',
              label: 'Name',
              control: n,
              required: !0,
              fullWidth: !0,
            }),
            e(S, {name: 'auto', label: 'Autocomplete', control: n, options: r}),
            e(S, {
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
  }
var E, F, C
i.parameters = {
  ...i.parameters,
  docs: {
    ...((E = i.parameters) == null ? void 0 : E.docs),
    source: {
      originalSource: `() => <FormContainer defaultValues={{
  name: ''
}} onSuccess={action('submit')}>
    <TextFieldElement name={'name'} label={'Name'} required /> <br />
    <TextFieldElement name={'email'} label={'Email'} required type={'email'} />{' '}
    <br />
    <TextFieldElement name={'interest'} label={'Interest'} /> <br />
    <SubComponent />
  </FormContainer>`,
      ...((C = (F = i.parameters) == null ? void 0 : F.docs) == null
        ? void 0
        : C.source),
    },
  },
}
var f, x, w
c.parameters = {
  ...c.parameters,
  docs: {
    ...((f = c.parameters) == null ? void 0 : f.docs),
    source: {
      originalSource: `() => <FormContainer defaultValues={{
  name: ''
}} onSuccess={action('submit')} onError={action('error')}>
    <TextFieldElement name={'name'} label={'Name'} required /> <br />
    <TextFieldElement name={'email'} label={'Email'} required type={'email'} />{' '}
    <br />
    <TextFieldElement name={'interest'} label={'Interest'} /> <br />
    <SubComponent />
  </FormContainer>`,
      ...((w = (x = c.parameters) == null ? void 0 : x.docs) == null
        ? void 0
        : w.source),
    },
  },
}
var g, y, k
u.parameters = {
  ...u.parameters,
  docs: {
    ...((g = u.parameters) == null ? void 0 : g.docs),
    source: {
      originalSource: `() => {
  const formContext = useForm<{
    name: string;
  }>({
    defaultValues: {
      name: ''
    }
  });
  return <FormContainer formContext={formContext} onSuccess={action('submit')}>
      <TextFieldElement name={'name'} label={'Name'} />
      <br />
      <Button type={'submit'} color={'primary'}>
        Submit
      </Button>
    </FormContainer>;
}`,
      ...((k = (y = u.parameters) == null ? void 0 : y.docs) == null
        ? void 0
        : k.source),
    },
  },
}
var T, B, N
d.parameters = {
  ...d.parameters,
  docs: {
    ...((T = d.parameters) == null ? void 0 : T.docs),
    source: {
      originalSource: `() => {
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
      <TextFieldElement name={'name'} label={'Name'} />
      <br />
      <Button type={'submit'} color={'primary'}>
        Submit
      </Button>
    </FormContainer>;
}`,
      ...((N = (B = d.parameters) == null ? void 0 : B.docs) == null
        ? void 0
        : N.source),
    },
  },
}
var P, V, W
b.parameters = {
  ...b.parameters,
  docs: {
    ...((P = b.parameters) == null ? void 0 : P.docs),
    source: {
      originalSource: `() => {
  return <FormContainer onSuccess={action('submit')}>
      <TextFieldElement name={'name'} label={'Name'} />
      <br />
      <Button type={'submit'} color={'primary'}>
        Submit
      </Button>
    </FormContainer>;
}`,
      ...((W = (V = b.parameters) == null ? void 0 : V.docs) == null
        ? void 0
        : W.source),
    },
  },
}
var _, R, q
p.parameters = {
  ...p.parameters,
  docs: {
    ...((_ = p.parameters) == null ? void 0 : _.docs),
    source: {
      originalSource: `() => {
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
}`,
      ...((q = (R = p.parameters) == null ? void 0 : R.docs) == null
        ? void 0
        : q.source),
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
  i as Basic,
  b as NoDefaultValues,
  p as StrictTypingForm,
  u as WithContext,
  c as WithErrorHandler,
  d as WithHandleSubmit,
  re as __namedExportsOrder,
  ae as default,
}
//# sourceMappingURL=FormContainer.stories-b435bc13.js.map
