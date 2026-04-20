import{n as e}from"./chunk-DnJy8xQt.js";import{a as t,b as n,c as r,g as i,h as a,i as o,l as s,m as c,n as l,o as u,p as d,r as f,s as p,t as m,v as h}from"./esm-D4A6xbwj.js";import{Pt as g,c as _,r as v,t as y}from"./iframe-BBlJSKdw.js";import{n as b,t as x}from"./date-fns-ojAvi97E.js";import{a as S,i as C}from"./date-pickers-D1ndZnbU.js";function w(){let[e,t]=n({name:[`name`,`email`]});return(0,T.jsx)(_,{type:`submit`,color:`primary`,disabled:!(e&&t),children:`Submit`})}var T,E,D,O,k,A,j,M,N,P;e((()=>{s(),i(),y(),x(),C(),T=g(),{action:E}=__STORYBOOK_MODULE_ACTIONS__,D={title:`FormContainer`,component:l},O={render:()=>(0,T.jsx)(l,{defaultValues:{name:``},onSuccess:E(`submit`),children:(0,T.jsxs)(v,{spacing:2,children:[(0,T.jsx)(m,{name:`name`,label:`Name`,required:!0}),(0,T.jsx)(m,{name:`email`,label:`Email`,required:!0,type:`email`}),` `,(0,T.jsx)(m,{name:`interest`,label:`Interest`}),(0,T.jsx)(w,{})]})})},k={render:()=>(0,T.jsx)(l,{defaultValues:{name:``},onSuccess:E(`submit`),onError:E(`error`),children:(0,T.jsxs)(v,{spacing:2,children:[(0,T.jsx)(m,{name:`name`,label:`Name`,required:!0}),(0,T.jsx)(m,{name:`email`,label:`Email`,required:!0,type:`email`}),` `,(0,T.jsx)(m,{name:`interest`,label:`Interest`}),(0,T.jsx)(w,{})]})})},A={render:()=>(0,T.jsx)(l,{formContext:h({defaultValues:{name:``}}),onSuccess:E(`submit`),children:(0,T.jsxs)(v,{spacing:2,children:[(0,T.jsx)(m,{name:`name`,label:`Name`}),(0,T.jsx)(_,{type:`submit`,color:`primary`,children:`Submit`})]})})},j={render:()=>{let e=h({defaultValues:{name:`Hans`}}),{handleSubmit:t}=e;return(0,T.jsx)(l,{formContext:e,handleSubmit:t(E(`submit`)),children:(0,T.jsxs)(v,{spacing:2,children:[(0,T.jsx)(m,{name:`name`,label:`Name`}),(0,T.jsx)(_,{type:`submit`,color:`primary`,children:`Submit`})]})})}},M={render:()=>(0,T.jsx)(l,{onSuccess:E(`submit`),children:(0,T.jsxs)(v,{spacing:2,children:[(0,T.jsx)(m,{name:`name`,label:`Name`}),(0,T.jsx)(_,{type:`submit`,color:`primary`,children:`Submit`})]})})},N={render:()=>{let{control:e,handleSubmit:n}=h({defaultValues:{name:``}}),i=[{id:`one`,label:`One`},{id:`two`,label:`Two`},{id:`three`,label:`Three`}];return(0,T.jsx)(b,{children:(0,T.jsx)(`form`,{onSubmit:n(()=>E(`submit`)),noValidate:!0,children:(0,T.jsxs)(v,{spacing:2,children:[(0,T.jsx)(m,{name:`name`,label:`Name`,control:e,required:!0,fullWidth:!0}),(0,T.jsx)(c,{name:`auto`,label:`Autocomplete`,control:e,options:i}),(0,T.jsx)(c,{name:`auto_multi`,label:`Autocomplete Multiple`,multiple:!0,control:e,options:i}),(0,T.jsx)(o,{name:`select`,label:`Select`,control:e,options:i,fullWidth:!0}),(0,T.jsx)(u,{showCheckbox:!0,name:`multi_select`,label:`Multi Select`,control:e,options:i,fullWidth:!0}),(0,T.jsx)(S,{name:`date`,control:e}),` `,(0,T.jsx)(`br`,{}),(0,T.jsx)(t,{name:`radio`,label:`Radio`,control:e,options:i}),(0,T.jsx)(r,{name:`checkbox`,label:`Radio`,control:e,options:i}),(0,T.jsx)(p,{name:`password`,label:`Password`,control:e}),(0,T.jsx)(a,{name:`password_repeat`,label:`Password Repeat`,passwordFieldName:`password`,control:e}),(0,T.jsx)(d,{name:`switch`,label:`Switch`,control:e}),(0,T.jsx)(f,{name:`check`,label:`Check`,control:e}),(0,T.jsx)(_,{type:`submit`,color:`primary`,children:`Submit`})]})})})}},O.parameters={...O.parameters,docs:{...O.parameters?.docs,source:{originalSource:`{
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
}`,...O.parameters?.docs?.source}}},k.parameters={...k.parameters,docs:{...k.parameters?.docs,source:{originalSource:`{
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
}`,...k.parameters?.docs?.source}}},A.parameters={...A.parameters,docs:{...A.parameters?.docs,source:{originalSource:`{
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
}`,...A.parameters?.docs?.source}}},j.parameters={...j.parameters,docs:{...j.parameters?.docs,source:{originalSource:`{
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
}`,...j.parameters?.docs?.source}}},M.parameters={...M.parameters,docs:{...M.parameters?.docs,source:{originalSource:`{
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
}`,...M.parameters?.docs?.source}}},N.parameters={...N.parameters,docs:{...N.parameters?.docs,source:{originalSource:`{
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
}`,...N.parameters?.docs?.source}}},P=[`Basic`,`WithErrorHandler`,`WithContext`,`WithHandleSubmit`,`NoDefaultValues`,`StrictTypingForm`]}))();export{O as Basic,M as NoDefaultValues,N as StrictTypingForm,A as WithContext,k as WithErrorHandler,j as WithHandleSubmit,P as __namedExportsOrder,D as default};