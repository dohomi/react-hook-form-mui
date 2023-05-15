import {b as t, j as e} from './useThemeProps-3be52b90.js'
import {r as j} from './index-ebeaab24.js'
import {a as n} from './chunk-OPEUWD42-a3b45fd8.js'
import {F as i, B as o, v as R, I as W} from './Button-934b6c03.js'
import {T as r, P as O, a as _} from './PasswordRepeatElement-9f2a473c.js'
import {C as A} from './CheckboxElement-bcbfd255.js'
import {a as L, S as M} from './Shared-e33e4212.js'
import './extends-98964cd2.js'
import './assertThisInitialized-5649ae8b.js'
import './TextField-4354f47c.js'
import './FormHelperText-a02b62e1.js'
import './useId-3f89f7ef.js'
import './Select-c55867f3.js'
import './FormLabel-977af3e7.js'
import './react-is.production.min-a192e302.js'
import './useTheme-ccc2f4e9.js'
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
import './FormGroup-d89e04af.js'
import './FormControlLabel-5a6a631a.js'
import './Checkbox-d8c1e2f4.js'
import './SwitchBase-bb4bde97.js'
import './Box-339dd07d.js'
const qe = {title: 'TextFieldElement', component: r},
  I = (a) =>
    t(i, {
      defaultValues: {},
      onSuccess: n('submit'),
      children: [e(r, {...a}), e('br', {}), e(M, {})],
    }),
  s = {render: I, args: {name: 'core', label: 'Label'}},
  m = (a) =>
    a.type === 'pattern' ? 'Enter an email' : 'This field is required',
  d = () =>
    t(i, {
      defaultValues: {agree: !1},
      onSuccess: n('submit'),
      FormProps: {'aria-autocomplete': 'none', autoComplete: 'new-password'},
      children: [
        e(r, {
          required: !0,
          autoComplete: 'new-password',
          margin: 'dense',
          label: 'Name',
          name: 'default-text-field',
        }),
        e('br', {}),
        e(r, {
          required: !0,
          type: 'email',
          margin: 'dense',
          label: 'Email',
          name: 'default-email-field',
        }),
        e('br', {}),
        e(r, {
          required: !0,
          parseError: m,
          type: 'email',
          margin: 'dense',
          label: 'Email with ParseError',
          name: 'default-email-field-with-parsed',
        }),
        e('br', {}),
        e(r, {
          margin: 'dense',
          label: 'Number',
          name: 'number-text-field',
          required: !0,
          type: 'number',
        }),
        e('br', {}),
        e(O, {
          margin: 'dense',
          label: 'Password',
          required: !0,
          name: 'password',
        }),
        e('br', {}),
        e(_, {
          passwordFieldName: 'password',
          name: 'password-repeat',
          margin: 'dense',
          label: 'Repeat Password',
          required: !0,
        }),
        e('br', {}),
        e(r, {name: 'textarea', multiline: !0}),
        e('br', {}),
        e(A, {
          name: 'agree',
          label: 'Agree',
          required: !0,
          onChange: (f, l) => console.log(f, l),
        }),
        e('br', {}),
        e(o, {
          type: 'submit',
          color: 'primary',
          variant: 'contained',
          children: 'Submit',
        }),
      ],
    }),
  u = () =>
    t(i, {
      defaultValues: {
        'default-text-field': 'Test Data',
        'default-email-field': 'info@nextjs.com',
        'number-text-field': 6,
      },
      onSuccess: n('submit'),
      children: [
        e(r, {
          required: !0,
          margin: 'dense',
          label: 'Name',
          name: 'default-text-field',
        }),
        e('br', {}),
        e(r, {
          required: !0,
          parseError: m,
          type: 'email',
          margin: 'dense',
          label: 'Email',
          name: 'default-email-field',
        }),
        e('br', {}),
        e(r, {
          margin: 'dense',
          label: 'Number',
          name: 'number-text-field',
          required: !0,
          type: 'number',
        }),
        e('br', {}),
        e(o, {
          type: 'submit',
          color: 'primary',
          variant: 'contained',
          children: 'Submit',
        }),
      ],
    }),
  c = () =>
    t(i, {
      defaultValues: {
        a: {'default-text-field': 'Test Data'},
        b: {'default-email-field': 'info@nextjs.com', 'number-text-field': 6},
      },
      onSuccess: n('submit'),
      children: [
        e(r, {
          required: !0,
          margin: 'dense',
          label: 'Name',
          name: 'a.default-text-field',
        }),
        e('br', {}),
        e(r, {
          required: !0,
          parseError: m,
          type: 'email',
          margin: 'dense',
          label: 'Email',
          name: 'b.default-email-field',
        }),
        e('br', {}),
        e(r, {
          margin: 'dense',
          label: 'Number',
          name: 'b.number-text-field',
          required: !0,
          type: 'number',
        }),
        e('br', {}),
        e(o, {
          type: 'submit',
          color: 'primary',
          variant: 'contained',
          children: 'Submit',
        }),
      ],
    }),
  p = () => {
    const a = R({defaultValues: {email: '', name: ''}}),
      {watch: f} = a,
      l = f('email')
    return (
      j.useEffect(() => {
        console.log('email changed', l)
      }, [l]),
      t(i, {
        onSuccess: n('submit'),
        formContext: a,
        children: [
          e(r, {
            name: 'name',
            label: 'Name',
            parseError: m,
            required: !0,
            variant: 'outlined',
            margin: 'dense',
          }),
          e('br', {}),
          e(r, {
            name: 'email',
            type: 'email',
            label: 'Email',
            required: !0,
            parseError: m,
            variant: 'outlined',
            margin: 'dense',
          }),
          e('br', {}),
          e('br', {}),
          e(o, {
            type: 'submit',
            color: 'primary',
            variant: 'contained',
            children: 'Submit',
          }),
        ],
      })
    )
  },
  b = () =>
    e(W, {
      onError: (a) => (
        console.log('you can hook your own error message', a),
        a.type === 'required'
          ? 'Overwritten Error Message'
          : a == null
          ? void 0
          : a.message
      ),
      children: e(i, {
        onSuccess: n('submit'),
        children: t(L, {
          spacing: 3,
          children: [
            e(r, {
              name: 'name',
              label: 'Name',
              required: !0,
              variant: 'outlined',
              margin: 'dense',
            }),
            e(r, {
              name: 'email',
              type: 'email',
              label: 'Email',
              required: !0,
              variant: 'outlined',
              margin: 'dense',
            }),
            e(o, {
              type: 'submit',
              color: 'primary',
              variant: 'contained',
              children: 'Submit',
            }),
          ],
        }),
      }),
    })
var g, E, x
s.parameters = {
  ...s.parameters,
  docs: {
    ...((g = s.parameters) == null ? void 0 : g.docs),
    source: {
      originalSource: `{
  render: Template,
  args: {
    name: 'core',
    label: 'Label'
  }
}`,
      ...((x = (E = s.parameters) == null ? void 0 : E.docs) == null
        ? void 0
        : x.source),
    },
  },
}
var y, F, q
d.parameters = {
  ...d.parameters,
  docs: {
    ...((y = d.parameters) == null ? void 0 : y.docs),
    source: {
      originalSource: `() => {
  const form = {
    agree: false
  };
  return <FormContainer defaultValues={form} onSuccess={action('submit')} FormProps={{
    'aria-autocomplete': 'none',
    autoComplete: 'new-password'
  }}>
      <TextFieldElement required autoComplete={'new-password'} margin={'dense'} label={'Name'} name={'default-text-field'} />
      <br />
      <TextFieldElement required type={'email'} margin={'dense'} label={'Email'} name={'default-email-field'} />
      <br />
      <TextFieldElement required parseError={parseError} type={'email'} margin={'dense'} label={'Email with ParseError'} name={'default-email-field-with-parsed'} />
      <br />
      <TextFieldElement margin={'dense'} label={'Number'} name={'number-text-field'} required type={'number'} />
      <br />
      <PasswordElement margin={'dense'} label={'Password'} required name={'password'} />
      <br />
      <PasswordRepeatElement passwordFieldName={'password'} name={'password-repeat'} margin={'dense'} label={'Repeat Password'} required />
      <br />
      <TextFieldElement name={'textarea'} multiline />
      <br />
      <CheckboxElement name={'agree'} label={'Agree'} required onChange={(ev, checked) => console.log(ev, checked)} />
      <br />
      <Button type={'submit'} color={'primary'} variant={'contained'}>
        Submit
      </Button>
    </FormContainer>;
}`,
      ...((q = (F = d.parameters) == null ? void 0 : F.docs) == null
        ? void 0
        : q.source),
    },
  },
}
var h, w, S
u.parameters = {
  ...u.parameters,
  docs: {
    ...((h = u.parameters) == null ? void 0 : h.docs),
    source: {
      originalSource: `() => <FormContainer defaultValues={{
  'default-text-field': 'Test Data',
  'default-email-field': 'info@nextjs.com',
  'number-text-field': 6
}} onSuccess={action('submit')}>
    <TextFieldElement required margin={'dense'} label={'Name'} name={'default-text-field'} />
    <br />
    <TextFieldElement required parseError={parseError} type={'email'} margin={'dense'} label={'Email'} name={'default-email-field'} />
    <br />
    <TextFieldElement margin={'dense'} label={'Number'} name={'number-text-field'} required type={'number'} />
    <br />
    <Button type={'submit'} color={'primary'} variant={'contained'}>
      Submit
    </Button>
  </FormContainer>`,
      ...((S = (w = u.parameters) == null ? void 0 : w.docs) == null
        ? void 0
        : S.source),
    },
  },
}
var C, v, T
c.parameters = {
  ...c.parameters,
  docs: {
    ...((C = c.parameters) == null ? void 0 : C.docs),
    source: {
      originalSource: `() => <FormContainer defaultValues={{
  a: {
    'default-text-field': 'Test Data'
  },
  b: {
    'default-email-field': 'info@nextjs.com',
    'number-text-field': 6
  }
}} onSuccess={action('submit')}>
    <TextFieldElement required margin={'dense'} label={'Name'} name={'a.default-text-field'} />
    <br />
    <TextFieldElement required parseError={parseError} type={'email'} margin={'dense'} label={'Email'} name={'b.default-email-field'} />
    <br />
    <TextFieldElement margin={'dense'} label={'Number'} name={'b.number-text-field'} required type={'number'} />
    <br />
    <Button type={'submit'} color={'primary'} variant={'contained'}>
      Submit
    </Button>
  </FormContainer>`,
      ...((T = (v = c.parameters) == null ? void 0 : v.docs) == null
        ? void 0
        : T.source),
    },
  },
}
var P, N, B
p.parameters = {
  ...p.parameters,
  docs: {
    ...((P = p.parameters) == null ? void 0 : P.docs),
    source: {
      originalSource: `() => {
  const formContext = useForm<{
    email: string;
    name: string;
  }>({
    defaultValues: {
      email: '',
      name: ''
    }
  });
  const {
    watch
  } = formContext;
  const emailValue = watch('email');
  useEffect(() => {
    console.log('email changed', emailValue);
  }, [emailValue]);
  return <FormContainer onSuccess={action('submit')} formContext={formContext}>
      <TextFieldElement name={'name'} label={'Name'} parseError={parseError} required variant={'outlined'} margin={'dense'} />
      <br />
      <TextFieldElement name={'email'} type="email" label={'Email'} required parseError={parseError} variant={'outlined'} margin={'dense'} />
      <br />
      <br />
      <Button type={'submit'} color={'primary'} variant={'contained'}>
        Submit
      </Button>
    </FormContainer>;
}`,
      ...((B = (N = p.parameters) == null ? void 0 : N.docs) == null
        ? void 0
        : B.source),
    },
  },
}
var V, k, D
b.parameters = {
  ...b.parameters,
  docs: {
    ...((V = b.parameters) == null ? void 0 : V.docs),
    source: {
      originalSource: `() => <FormErrorProvider onError={error => {
  console.log('you can hook your own error message', error);
  if (error.type === 'required') {
    return 'Overwritten Error Message';
  }
  return error?.message;
}}>
    <FormContainer onSuccess={action('submit')}>
      <Stack spacing={3}>
        <TextFieldElement name={'name'} label={'Name'} required variant={'outlined'} margin={'dense'} />
        <TextFieldElement name={'email'} type="email" label={'Email'} required variant={'outlined'} margin={'dense'} />
        <Button type={'submit'} color={'primary'} variant={'contained'}>
          Submit
        </Button>
      </Stack>
    </FormContainer>
  </FormErrorProvider>`,
      ...((D = (k = b.parameters) == null ? void 0 : k.docs) == null
        ? void 0
        : D.source),
    },
  },
}
const he = [
  'Core',
  'Basic',
  'PreDefined',
  'PreDefinedNested',
  'WithFormContext',
  'WithFormErrorProvider',
]
export {
  d as Basic,
  s as Core,
  u as PreDefined,
  c as PreDefinedNested,
  p as WithFormContext,
  b as WithFormErrorProvider,
  he as __namedExportsOrder,
  qe as default,
}
//# sourceMappingURL=TextFieldElement.stories-46b822fa.js.map
