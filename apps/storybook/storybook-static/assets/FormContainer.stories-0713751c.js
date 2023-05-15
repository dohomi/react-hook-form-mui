import {b as m, j as e, F as A} from './useThemeProps-3be52b90.js'
import {T as n, P as M, a as H} from './PasswordRepeatElement-9f2a473c.js'
import {F as l, v as h, B as i, w as v} from './Button-934b6c03.js'
import {D as G} from './DatePickerElement-3c97afa3.js'
import {C as I} from './CheckboxElement-bcbfd255.js'
import {S as j} from './SelectElement-b47525b5.js'
import {C as O} from './CheckboxButtonGroup-7f2ce8f9.js'
import {M as z} from './MultiSelectElement-ab320ab0.js'
import {R as J} from './RadioButtonGroup-ff97222d.js'
import {S as K} from './SwitchElement-d2ce8082.js'
import {A as S} from './AutocompleteElement-eb924e8a.js'
import './index-ebeaab24.js'
import {a as r} from './chunk-OPEUWD42-a3b45fd8.js'
import {D as L} from './DateFnsProvider-29c29f1b.js'
import './extends-98964cd2.js'
import './TextField-4354f47c.js'
import './FormHelperText-a02b62e1.js'
import './useId-3f89f7ef.js'
import './Select-c55867f3.js'
import './FormLabel-977af3e7.js'
import './react-is.production.min-a192e302.js'
import './useTheme-ccc2f4e9.js'
import './assertThisInitialized-5649ae8b.js'
import './index-9c09ad76.js'
import './useSlotProps-692f4a62.js'
import './useControlled-32189460.js'
import './createSvgIcon-2ce5bfe4.js'
import './createSvgIcon-f095371f.js'
import './useIsFocusVisible-1a875561.js'
import './jsx-runtime_commonjs-proxy-93a23ed8.js'
import './InputAdornment-70f38d8d.js'
import './Typography-eebf5bae.js'
import './IconButton-ab13b570.js'
import './ButtonBase-4a75c9e0.js'
import './LocalizationProvider-49a0baf7.js'
import './useMobilePicker-2ac4f9db.js'
import './Popper-852f71a7.js'
import './index-aff217c3.js'
import './Chip-6299b5c8.js'
import './dateViewRenderers-10b499e5.js'
import './FormGroup-d89e04af.js'
import './FormControlLabel-5a6a631a.js'
import './Checkbox-d8c1e2f4.js'
import './SwitchBase-bb4bde97.js'
import './MenuItem-4620b72b.js'
const ve = {title: 'FormContainer'},
  q = () => {
    const [t, o] = v({name: ['name', 'email']})
    return (
      console.log(t, o),
      e(A, {
        children: e(i, {
          type: 'submit',
          color: 'primary',
          disabled: !(t && o),
          children: 'Submit',
        }),
      })
    )
  },
  s = () =>
    m(l, {
      defaultValues: {name: ''},
      onSuccess: r('submit'),
      children: [
        e(n, {name: 'name', label: 'Name', required: !0}),
        ' ',
        e('br', {}),
        e(n, {name: 'email', label: 'Email', required: !0, type: 'email'}),
        ' ',
        e('br', {}),
        e(n, {name: 'interest', label: 'Interest'}),
        ' ',
        e('br', {}),
        e(q, {}),
      ],
    }),
  c = () =>
    m(l, {
      defaultValues: {name: ''},
      onSuccess: r('submit'),
      onError: r('error'),
      children: [
        e(n, {name: 'name', label: 'Name', required: !0}),
        ' ',
        e('br', {}),
        e(n, {name: 'email', label: 'Email', required: !0, type: 'email'}),
        ' ',
        e('br', {}),
        e(n, {name: 'interest', label: 'Interest'}),
        ' ',
        e('br', {}),
        e(q, {}),
      ],
    }),
  u = () => {
    const t = h({defaultValues: {name: ''}})
    return m(l, {
      formContext: t,
      onSuccess: r('submit'),
      children: [
        e(n, {name: 'name', label: 'Name'}),
        e('br', {}),
        e(i, {type: 'submit', color: 'primary', children: 'Submit'}),
      ],
    })
  },
  b = () => {
    const t = h({defaultValues: {name: 'Hans'}}),
      {handleSubmit: o} = t
    return m(l, {
      formContext: t,
      handleSubmit: o(r('submit')),
      children: [
        e(n, {name: 'name', label: 'Name'}),
        e('br', {}),
        e(i, {type: 'submit', color: 'primary', children: 'Submit'}),
      ],
    })
  },
  p = () =>
    m(l, {
      onSuccess: r('submit'),
      children: [
        e(n, {name: 'name', label: 'Name'}),
        e('br', {}),
        e(i, {type: 'submit', color: 'primary', children: 'Submit'}),
      ],
    }),
  d = () => {
    const {control: t, handleSubmit: o} = h({defaultValues: {name: ''}}),
      a = [
        {id: 'one', label: 'One'},
        {id: 'two', label: 'Two'},
        {id: 'three', label: 'Three'},
      ]
    return e(L, {
      children: m('form', {
        onSubmit: o(r('submit')),
        noValidate: !0,
        children: [
          e(n, {name: 'name', label: 'Name', control: t, fullWidth: !0}),
          e('br', {}),
          e('br', {}),
          e(S, {name: 'auto', label: 'Autocomplete', control: t, options: a}),
          e('br', {}),
          e(S, {
            name: 'auto_multi',
            label: 'Autocomplete Multiple',
            multiple: !0,
            control: t,
            options: a,
          }),
          e('br', {}),
          e(j, {
            name: 'select',
            label: 'Select',
            control: t,
            options: a,
            fullWidth: !0,
          }),
          e('br', {}),
          e('br', {}),
          e(z, {
            showCheckbox: !0,
            name: 'multi_select',
            label: 'Multi Select',
            control: t,
            options: a,
            fullWidth: !0,
          }),
          e('br', {}),
          e('br', {}),
          e(G, {name: 'date', control: t}),
          ' ',
          e('br', {}),
          e(J, {name: 'radio', label: 'Radio', control: t, options: a}),
          e('br', {}),
          e(O, {name: 'checkbox', label: 'Radio', control: t, options: a}),
          e('br', {}),
          e(M, {name: 'password', label: 'Password', control: t}),
          e('br', {}),
          e('br', {}),
          e(H, {
            name: 'password_repeat',
            label: 'Password Repeat',
            passwordFieldName: 'password',
            control: t,
          }),
          e('br', {}),
          e(K, {name: 'switch', label: 'Switch', control: t}),
          e('br', {}),
          e(I, {name: 'check', label: 'Check', control: t}),
          e('br', {}),
          e(i, {type: 'submit', color: 'primary', children: 'Submit'}),
        ],
      }),
    })
  }
var f, F, C
s.parameters = {
  ...s.parameters,
  docs: {
    ...((f = s.parameters) == null ? void 0 : f.docs),
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
      ...((C = (F = s.parameters) == null ? void 0 : F.docs) == null
        ? void 0
        : C.source),
    },
  },
}
var E, x, w
c.parameters = {
  ...c.parameters,
  docs: {
    ...((E = c.parameters) == null ? void 0 : E.docs),
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
var y, g, T
u.parameters = {
  ...u.parameters,
  docs: {
    ...((y = u.parameters) == null ? void 0 : y.docs),
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
      ...((T = (g = u.parameters) == null ? void 0 : g.docs) == null
        ? void 0
        : T.source),
    },
  },
}
var k, B, N
b.parameters = {
  ...b.parameters,
  docs: {
    ...((k = b.parameters) == null ? void 0 : k.docs),
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
      ...((N = (B = b.parameters) == null ? void 0 : B.docs) == null
        ? void 0
        : N.source),
    },
  },
}
var P, V, W
p.parameters = {
  ...p.parameters,
  docs: {
    ...((P = p.parameters) == null ? void 0 : P.docs),
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
      ...((W = (V = p.parameters) == null ? void 0 : V.docs) == null
        ? void 0
        : W.source),
    },
  },
}
var _, R, D
d.parameters = {
  ...d.parameters,
  docs: {
    ...((_ = d.parameters) == null ? void 0 : _.docs),
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
      <form onSubmit={handleSubmit(action('submit'))} noValidate>
        <TextFieldElement name={'name'} label={'Name'} control={control} fullWidth />
        <br />
        <br />
        <AutocompleteElement name={'auto'} label={'Autocomplete'} control={control} options={options} />
        <br />
        <AutocompleteElement name={'auto_multi'} label={'Autocomplete Multiple'} multiple control={control} options={options} />
        <br />
        <SelectElement name={'select'} label={'Select'} control={control} options={options} fullWidth />
        <br />
        <br />
        <MultiSelectElement showCheckbox name={'multi_select'} label={'Multi Select'} control={control} options={options} fullWidth />
        <br />
        <br />
        <DatePickerElement name={'date'} control={control} /> <br />
        <RadioButtonGroup name={'radio'} label={'Radio'} control={control} options={options} />
        <br />
        <CheckboxButtonGroup name={'checkbox'} label={'Radio'} control={control} options={options} />
        <br />
        <PasswordElement name={'password'} label={'Password'} control={control} />
        <br />
        <br />
        <PasswordRepeatElement name={'password_repeat'} label={'Password Repeat'} passwordFieldName={'password'} control={control} />
        <br />
        <SwitchElement name={'switch'} label={'Switch'} control={control} />
        <br />
        <CheckboxElement name={'check'} label={'Check'} control={control} />
        <br />
        <Button type={'submit'} color={'primary'}>
          Submit
        </Button>
      </form>
    </DateFnsProvider>;
}`,
      ...((D = (R = d.parameters) == null ? void 0 : R.docs) == null
        ? void 0
        : D.source),
    },
  },
}
const Ge = [
  'Basic',
  'WithErrorHandler',
  'WithContext',
  'WithHandleSubmit',
  'NoDefaultValues',
  'StrictTypingForm',
]
export {
  s as Basic,
  p as NoDefaultValues,
  d as StrictTypingForm,
  u as WithContext,
  c as WithErrorHandler,
  b as WithHandleSubmit,
  Ge as __namedExportsOrder,
  ve as default,
}
//# sourceMappingURL=FormContainer.stories-0713751c.js.map
