import {
  n as N,
  b as e,
  f as r,
  j as t,
  F as T,
  I as C,
  P as S,
  h as A,
  i as k,
  o as I,
  g as D,
} from './TextareaAutosizeElement-36296a48.js'
import {a as j} from './chunk-AY7I2SME-c7b6cf8a.js'
import './index-f1f2c4b1.js'
import {S as R} from './Shared-07615c22.js'
import './index-d6b32626.js'
import './createTheme-c77538bc.js'
import './assertThisInitialized-4401020c.js'
import './index-c74c9f7f.js'
import './Box-228f8f89.js'
const z = N(
    e('path', {
      d: 'M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 4c1.93 0 3.5 1.57 3.5 3.5S13.93 13 12 13s-3.5-1.57-3.5-3.5S10.07 6 12 6zm0 14c-2.03 0-4.43-.82-6.14-2.88C7.55 15.8 9.68 15 12 15s4.45.8 6.14 2.12C16.43 19.18 14.03 20 12 20z',
    }),
    'AccountCircle'
  ),
  K = {title: 'TextFieldElement', component: r, decorators: [B]}
function B(a) {
  return t(T, {
    defaultValues: {
      'default-text-field': 'Test Data',
      'default-email-field': 'info@nextjs.com',
      'number-text-field': 6,
      a: {'default-text-field': 'Test Data'},
      b: {'default-email-field': 'info@nextjs.com', 'number-text-field': 6},
    },
    onSuccess: j('submit'),
    FormProps: {'aria-autocomplete': 'none', autoComplete: 'new-password'},
    children: [e(a, {}), e('br', {}), e(R, {})],
  })
}
const n = {args: {name: 'core', label: 'Label'}},
  s = (a) =>
    a.type === 'pattern' ? 'Enter an email' : 'This field is required',
  i = () =>
    t('div', {
      children: [
        e(r, {
          required: !0,
          autoComplete: 'new-password',
          margin: 'dense',
          label: 'Name',
          name: 'default-text',
        }),
        e('br', {}),
        e(r, {
          required: !0,
          type: 'email',
          margin: 'dense',
          label: 'Email',
          InputProps: {
            startAdornment: e(C, {position: 'start', children: e(z, {})}),
          },
          name: 'default-email',
        }),
        e('br', {}),
        e(r, {
          required: !0,
          parseError: s,
          type: 'email',
          margin: 'dense',
          label: 'Email with ParseError',
          name: 'default-email-field-with-parsed',
        }),
        e('br', {}),
        e(r, {
          margin: 'dense',
          label: 'Number',
          name: 'number-text',
          required: !0,
          type: 'number',
        }),
        e('br', {}),
        e(S, {
          margin: 'dense',
          label: 'Password',
          required: !0,
          name: 'password',
        }),
        e('br', {}),
        e(A, {
          passwordFieldName: 'password',
          name: 'password-repeat',
          margin: 'dense',
          label: 'Repeat Password',
          required: !0,
        }),
        e('br', {}),
        e(r, {name: 'textarea', multiline: !0}),
        e('br', {}),
        e(k, {
          name: 'agree',
          label: 'Agree',
          required: !0,
          onChange: (a, P) => console.log(a, P),
        }),
      ],
    }),
  l = () =>
    t('div', {
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
          parseError: s,
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
      ],
    }),
  m = () =>
    t('div', {
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
          parseError: s,
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
      ],
    }),
  d = () =>
    e(I, {
      onError: (a) => (
        console.log('you can hook your own error message', a),
        a.type === 'required'
          ? 'Overwritten Error Message'
          : a == null
          ? void 0
          : a.message
      ),
      children: t(D, {
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
        ],
      }),
    })
var o, u, p
n.parameters = {
  ...n.parameters,
  docs: {
    ...((o = n.parameters) == null ? void 0 : o.docs),
    source: {
      originalSource: `{
  args: {
    name: 'core',
    label: 'Label'
  }
}`,
      ...((p = (u = n.parameters) == null ? void 0 : u.docs) == null
        ? void 0
        : p.source),
    },
  },
}
var c, b, f
i.parameters = {
  ...i.parameters,
  docs: {
    ...((c = i.parameters) == null ? void 0 : c.docs),
    source: {
      originalSource: `() => {
  return <div>
      <TextFieldElement required autoComplete={'new-password'} margin={'dense'} label={'Name'} name={'default-text'} />
      <br />
      <TextFieldElement required type={'email'} margin={'dense'} label={'Email'} InputProps={{
      startAdornment: <InputAdornment position="start">
              <AccountCircle />
            </InputAdornment>
    }} name={'default-email'} />
      <br />
      <TextFieldElement required parseError={parseError} type={'email'} margin={'dense'} label={'Email with ParseError'} name={'default-email-field-with-parsed'} />
      <br />
      <TextFieldElement margin={'dense'} label={'Number'} name={'number-text'} required type={'number'} />
      <br />
      <PasswordElement margin={'dense'} label={'Password'} required name={'password'} />
      <br />
      <PasswordRepeatElement passwordFieldName={'password'} name={'password-repeat'} margin={'dense'} label={'Repeat Password'} required />
      <br />
      <TextFieldElement name={'textarea'} multiline />
      <br />
      <CheckboxElement name={'agree'} label={'Agree'} required onChange={(ev, checked) => console.log(ev, checked)} />
    </div>;
}`,
      ...((f = (b = i.parameters) == null ? void 0 : b.docs) == null
        ? void 0
        : f.source),
    },
  },
}
var g, E, x
l.parameters = {
  ...l.parameters,
  docs: {
    ...((g = l.parameters) == null ? void 0 : g.docs),
    source: {
      originalSource: `() => <div>
    <TextFieldElement required margin={'dense'} label={'Name'} name={'default-text-field'} />
    <br />
    <TextFieldElement required parseError={parseError} type={'email'} margin={'dense'} label={'Email'} name={'default-email-field'} />
    <br />
    <TextFieldElement margin={'dense'} label={'Number'} name={'number-text-field'} required type={'number'} />
  </div>`,
      ...((x = (E = l.parameters) == null ? void 0 : E.docs) == null
        ? void 0
        : x.source),
    },
  },
}
var q, w, F
m.parameters = {
  ...m.parameters,
  docs: {
    ...((q = m.parameters) == null ? void 0 : q.docs),
    source: {
      originalSource: `() => <div>
    <TextFieldElement required margin={'dense'} label={'Name'} name={'a.default-text-field'} />
    <br />
    <TextFieldElement required parseError={parseError} type={'email'} margin={'dense'} label={'Email'} name={'b.default-email-field'} />
    <br />
    <TextFieldElement margin={'dense'} label={'Number'} name={'b.number-text-field'} required type={'number'} />
  </div>`,
      ...((F = (w = m.parameters) == null ? void 0 : w.docs) == null
        ? void 0
        : F.source),
    },
  },
}
var h, v, y
d.parameters = {
  ...d.parameters,
  docs: {
    ...((h = d.parameters) == null ? void 0 : h.docs),
    source: {
      originalSource: `() => <FormErrorProvider onError={error => {
  console.log('you can hook your own error message', error);
  if (error.type === 'required') {
    return 'Overwritten Error Message';
  }
  return error?.message;
}}>
    <Stack spacing={3}>
      <TextFieldElement name={'name'} label={'Name'} required variant={'outlined'} margin={'dense'} />
      <TextFieldElement name={'email'} type="email" label={'Email'} required variant={'outlined'} margin={'dense'} />
    </Stack>
  </FormErrorProvider>`,
      ...((y = (v = d.parameters) == null ? void 0 : v.docs) == null
        ? void 0
        : y.source),
    },
  },
}
const Q = [
  'Core',
  'Basic',
  'PreDefined',
  'PreDefinedNested',
  'WithFormErrorProvider',
]
export {
  i as Basic,
  n as Core,
  l as PreDefined,
  m as PreDefinedNested,
  d as WithFormErrorProvider,
  Q as __namedExportsOrder,
  K as default,
}
//# sourceMappingURL=TextFieldElement.stories-6a5dd367.js.map
