import{j as e}from"./createTheme-DOKhV1OO.js";import{k as o,a,S as s,O as t,u as x,B as m,r as h,Q as A,b as H,c as D,e as M,d as I,f as O,g as v,G,h as Q}from"./chunk-MZXVCX43-CTZOhaN-.js";import{f as z}from"./date-fns-Ce-mtssS.js";import{w as J}from"./date-pickers-vlTSDO01.js";import"./index-CTjT7uj6.js";import"./extends-CCbyfPlC.js";import"./assertThisInitialized-Du85iT5g.js";import"./index-9r8iugjR.js";import"./v4-CQkTLCs1.js";import"./index-BzjuzjN8.js";const ae={title:"FormContainer",component:o};function R(){const[n,l]=Q({name:["name","email"]});return e.jsx(m,{type:"submit",color:"primary",disabled:!(n&&l),children:"Submit"})}const i={render:()=>e.jsx(o,{defaultValues:{name:""},onSuccess:a("submit"),children:e.jsxs(s,{spacing:2,children:[e.jsx(t,{name:"name",label:"Name",required:!0}),e.jsx(t,{name:"email",label:"Email",required:!0,type:"email"})," ",e.jsx(t,{name:"interest",label:"Interest"}),e.jsx(R,{})]})})},c={render:()=>e.jsx(o,{defaultValues:{name:""},onSuccess:a("submit"),onError:a("error"),children:e.jsxs(s,{spacing:2,children:[e.jsx(t,{name:"name",label:"Name",required:!0}),e.jsx(t,{name:"email",label:"Email",required:!0,type:"email"})," ",e.jsx(t,{name:"interest",label:"Interest"}),e.jsx(R,{})]})})},u={render:()=>{const n=x({defaultValues:{name:""}});return e.jsx(o,{formContext:n,onSuccess:a("submit"),children:e.jsxs(s,{spacing:2,children:[e.jsx(t,{name:"name",label:"Name"}),e.jsx(m,{type:"submit",color:"primary",children:"Submit"})]})})}},d={render:()=>{const n=x({defaultValues:{name:"Hans"}}),{handleSubmit:l}=n;return e.jsx(o,{formContext:n,handleSubmit:l(a("submit")),children:e.jsxs(s,{spacing:2,children:[e.jsx(t,{name:"name",label:"Name"}),e.jsx(m,{type:"submit",color:"primary",children:"Submit"})]})})}},p={render:()=>e.jsx(o,{onSuccess:a("submit"),children:e.jsxs(s,{spacing:2,children:[e.jsx(t,{name:"name",label:"Name"}),e.jsx(m,{type:"submit",color:"primary",children:"Submit"})]})})},b={render:()=>{const{control:n,handleSubmit:l}=x({defaultValues:{name:""}}),r=[{id:"one",label:"One"},{id:"two",label:"Two"},{id:"three",label:"Three"}];return e.jsx(z,{children:e.jsx("form",{onSubmit:l(()=>a("submit")),noValidate:!0,children:e.jsxs(s,{spacing:2,children:[e.jsx(t,{name:"name",label:"Name",control:n,required:!0,fullWidth:!0}),e.jsx(h,{name:"auto",label:"Autocomplete",control:n,options:r}),e.jsx(h,{name:"auto_multi",label:"Autocomplete Multiple",multiple:!0,control:n,options:r}),e.jsx(A,{name:"select",label:"Select",control:n,options:r,fullWidth:!0}),e.jsx(H,{showCheckbox:!0,name:"multi_select",label:"Multi Select",control:n,options:r,fullWidth:!0}),e.jsx(J,{name:"date",control:n})," ",e.jsx("br",{}),e.jsx(D,{name:"radio",label:"Radio",control:n,options:r}),e.jsx(M,{name:"checkbox",label:"Radio",control:n,options:r}),e.jsx(I,{name:"password",label:"Password",control:n}),e.jsx(O,{name:"password_repeat",label:"Password Repeat",passwordFieldName:"password",control:n}),e.jsx(v,{name:"switch",label:"Switch",control:n}),e.jsx(G,{name:"check",label:"Check",control:n}),e.jsx(m,{type:"submit",color:"primary",children:"Submit"})]})})})}};var S,j,f;i.parameters={...i.parameters,docs:{...(S=i.parameters)==null?void 0:S.docs,source:{originalSource:`{
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
}`,...(F=(C=c.parameters)==null?void 0:C.docs)==null?void 0:F.source}}};var w,E,k;u.parameters={...u.parameters,docs:{...(w=u.parameters)==null?void 0:w.docs,source:{originalSource:`{
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
}`,...(k=(E=u.parameters)==null?void 0:E.docs)==null?void 0:k.source}}};var y,N,T;d.parameters={...d.parameters,docs:{...(y=d.parameters)==null?void 0:y.docs,source:{originalSource:`{
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
}`,...(W=(V=p.parameters)==null?void 0:V.docs)==null?void 0:W.source}}};var _,q,P;b.parameters={...b.parameters,docs:{...(_=b.parameters)==null?void 0:_.docs,source:{originalSource:`{
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
}`,...(P=(q=b.parameters)==null?void 0:q.docs)==null?void 0:P.source}}};const re=["Basic","WithErrorHandler","WithContext","WithHandleSubmit","NoDefaultValues","StrictTypingForm"];export{i as Basic,p as NoDefaultValues,b as StrictTypingForm,u as WithContext,c as WithErrorHandler,d as WithHandleSubmit,re as __namedExportsOrder,ae as default};
