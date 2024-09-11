import{j as e}from"./createTheme-CiZYJ6wm.js";import{R as o,a,E as t,u as x,B as m,r as h,_ as A,b as D,c as H,e as M,d as I,f as v,g as O,D as G,h as z}from"./chunk-MZXVCX43-WJ4Jfv3P.js";import{f as J}from"./date-fns-BATeuRnp.js";import{w as K}from"./date-pickers-BA73cj8R.js";import{S as s}from"./Stack-CQq6LxoU.js";import"./index-BP8_t0zE.js";import"./emotion-use-insertion-effect-with-fallbacks.browser.esm-UWD3gXM2.js";import"./assertThisInitialized-Cd8zZZH1.js";import"./index-BxmsGmlx.js";import"./v4-CQkTLCs1.js";import"./index-CXPIPAcP.js";const re={title:"FormContainer",component:o};function P(){const[n,l]=z({name:["name","email"]});return e.jsx(m,{type:"submit",color:"primary",disabled:!(n&&l),children:"Submit"})}const i={render:()=>e.jsx(o,{defaultValues:{name:""},onSuccess:a("submit"),children:e.jsxs(s,{spacing:2,children:[e.jsx(t,{name:"name",label:"Name",required:!0}),e.jsx(t,{name:"email",label:"Email",required:!0,type:"email"})," ",e.jsx(t,{name:"interest",label:"Interest"}),e.jsx(P,{})]})})},c={render:()=>e.jsx(o,{defaultValues:{name:""},onSuccess:a("submit"),onError:a("error"),children:e.jsxs(s,{spacing:2,children:[e.jsx(t,{name:"name",label:"Name",required:!0}),e.jsx(t,{name:"email",label:"Email",required:!0,type:"email"})," ",e.jsx(t,{name:"interest",label:"Interest"}),e.jsx(P,{})]})})},u={render:()=>{const n=x({defaultValues:{name:""}});return e.jsx(o,{formContext:n,onSuccess:a("submit"),children:e.jsxs(s,{spacing:2,children:[e.jsx(t,{name:"name",label:"Name"}),e.jsx(m,{type:"submit",color:"primary",children:"Submit"})]})})}},d={render:()=>{const n=x({defaultValues:{name:"Hans"}}),{handleSubmit:l}=n;return e.jsx(o,{formContext:n,handleSubmit:l(a("submit")),children:e.jsxs(s,{spacing:2,children:[e.jsx(t,{name:"name",label:"Name"}),e.jsx(m,{type:"submit",color:"primary",children:"Submit"})]})})}},p={render:()=>e.jsx(o,{onSuccess:a("submit"),children:e.jsxs(s,{spacing:2,children:[e.jsx(t,{name:"name",label:"Name"}),e.jsx(m,{type:"submit",color:"primary",children:"Submit"})]})})},b={render:()=>{const{control:n,handleSubmit:l}=x({defaultValues:{name:""}}),r=[{id:"one",label:"One"},{id:"two",label:"Two"},{id:"three",label:"Three"}];return e.jsx(J,{children:e.jsx("form",{onSubmit:l(()=>a("submit")),noValidate:!0,children:e.jsxs(s,{spacing:2,children:[e.jsx(t,{name:"name",label:"Name",control:n,required:!0,fullWidth:!0}),e.jsx(h,{name:"auto",label:"Autocomplete",control:n,options:r}),e.jsx(h,{name:"auto_multi",label:"Autocomplete Multiple",multiple:!0,control:n,options:r}),e.jsx(A,{name:"select",label:"Select",control:n,options:r,fullWidth:!0}),e.jsx(D,{showCheckbox:!0,name:"multi_select",label:"Multi Select",control:n,options:r,fullWidth:!0}),e.jsx(K,{name:"date",control:n})," ",e.jsx("br",{}),e.jsx(H,{name:"radio",label:"Radio",control:n,options:r}),e.jsx(M,{name:"checkbox",label:"Radio",control:n,options:r}),e.jsx(I,{name:"password",label:"Password",control:n}),e.jsx(v,{name:"password_repeat",label:"Password Repeat",passwordFieldName:"password",control:n}),e.jsx(O,{name:"switch",label:"Switch",control:n}),e.jsx(G,{name:"check",label:"Check",control:n}),e.jsx(m,{type:"submit",color:"primary",children:"Submit"})]})})})}};var S,j,f;i.parameters={...i.parameters,docs:{...(S=i.parameters)==null?void 0:S.docs,source:{originalSource:`{
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
}`,...(f=(j=i.parameters)==null?void 0:j.docs)==null?void 0:f.source}}};var g,C,F;c.parameters={...c.parameters,docs:{...(g=c.parameters)==null?void 0:g.docs,source:{originalSource:`{
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
}`,...(F=(C=c.parameters)==null?void 0:C.docs)==null?void 0:F.source}}};var E,w,k;u.parameters={...u.parameters,docs:{...(E=u.parameters)==null?void 0:E.docs,source:{originalSource:`{
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
}`,...(k=(w=u.parameters)==null?void 0:w.docs)==null?void 0:k.source}}};var y,N,T;d.parameters={...d.parameters,docs:{...(y=d.parameters)==null?void 0:y.docs,source:{originalSource:`{
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
}`,...(T=(N=d.parameters)==null?void 0:N.docs)==null?void 0:T.source}}};var B,V,W;p.parameters={...p.parameters,docs:{...(B=p.parameters)==null?void 0:B.docs,source:{originalSource:`{
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
}`,...(W=(V=p.parameters)==null?void 0:V.docs)==null?void 0:W.source}}};var _,R,q;b.parameters={...b.parameters,docs:{...(_=b.parameters)==null?void 0:_.docs,source:{originalSource:`{
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
}`,...(q=(R=b.parameters)==null?void 0:R.docs)==null?void 0:q.source}}};const oe=["Basic","WithErrorHandler","WithContext","WithHandleSubmit","NoDefaultValues","StrictTypingForm"];export{i as Basic,p as NoDefaultValues,b as StrictTypingForm,u as WithContext,c as WithErrorHandler,d as WithHandleSubmit,oe as __namedExportsOrder,re as default};
