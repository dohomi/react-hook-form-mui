import{n as e}from"./chunk-DnJy8xQt.js";import{It as t,h as n,l as r,n as i,r as a,s as o,t as s}from"./esm-D4A6xbwj.js";import{Pt as c,a as l,r as u,t as d,tt as f}from"./iframe-BBlJSKdw.js";import{t as p}from"./createSvgIcon-Cdo51-TY.js";import{n as m,t as h}from"./Shared-CC_VpT7q.js";var g,_,v=e((()=>{p(),g=c(),_=f((0,g.jsx)(`path`,{d:`M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2m0 4c1.93 0 3.5 1.57 3.5 3.5S13.93 13 12 13s-3.5-1.57-3.5-3.5S10.07 6 12 6m0 14c-2.03 0-4.43-.82-6.14-2.88C7.55 15.8 9.68 15 12 15s4.45.8 6.14 2.12C16.43 19.18 14.03 20 12 20`}),`AccountCircle`)})),y=e((()=>{v()}));function b(e){return(0,x.jsxs)(i,{defaultValues:{"default-text-field":`Test Data`,"default-email-field":`info@nextjs.com`,"number-text-field":6,a:{"default-text-field":`Test Data`},b:{"default-email-field":`info@nextjs.com`,"number-text-field":6}},onSuccess:S(`submit`),FormProps:{"aria-autocomplete":`none`,autoComplete:`new-password`},children:[(0,x.jsx)(e,{}),(0,x.jsx)(`br`,{}),(0,x.jsx)(h,{})]})}var x,S,C,w,T,E,D,O,k,A;e((()=>{d(),r(),m(),y(),x=c(),{action:S}=__STORYBOOK_MODULE_ACTIONS__,C={title:`Text Input/TextFieldElement`,component:s,decorators:[b]},w={args:{name:`core`,label:`Label`}},T=e=>e.type===`pattern`?`Enter an email`:`This field is required`,E=()=>(0,x.jsxs)(`div`,{children:[(0,x.jsx)(s,{required:!0,autoComplete:`new-password`,margin:`dense`,label:`Name`,name:`default-text`}),(0,x.jsx)(`br`,{}),(0,x.jsx)(s,{required:!0,type:`email`,margin:`dense`,label:`Email`,slotProps:{input:{startAdornment:(0,x.jsx)(l,{position:`start`,children:(0,x.jsx)(_,{})})}},name:`default-email`}),(0,x.jsx)(`br`,{}),(0,x.jsx)(s,{required:!0,parseError:T,type:`email`,margin:`dense`,label:`Email with ParseError`,name:`default-email-field-with-parsed`}),(0,x.jsx)(`br`,{}),(0,x.jsx)(s,{margin:`dense`,label:`Number`,name:`number-text`,required:!0,type:`number`}),(0,x.jsx)(`br`,{}),(0,x.jsx)(o,{margin:`dense`,label:`Password`,required:!0,name:`password`}),(0,x.jsx)(`br`,{}),(0,x.jsx)(n,{passwordFieldName:`password`,name:`password-repeat`,margin:`dense`,label:`Repeat Password`,required:!0}),(0,x.jsx)(`br`,{}),(0,x.jsx)(s,{name:`textarea`,multiline:!0}),(0,x.jsx)(`br`,{}),(0,x.jsx)(a,{name:`agree`,label:`Agree`,required:!0,onChange:(e,t)=>console.log(e,t)})]}),D=()=>(0,x.jsxs)(`div`,{children:[(0,x.jsx)(s,{required:!0,margin:`dense`,label:`Name`,name:`default-text-field`}),(0,x.jsx)(`br`,{}),(0,x.jsx)(s,{required:!0,parseError:T,type:`email`,margin:`dense`,label:`Email`,name:`default-email-field`}),(0,x.jsx)(`br`,{}),(0,x.jsx)(s,{margin:`dense`,label:`Number`,name:`number-text-field`,required:!0,type:`number`})]}),O=()=>(0,x.jsxs)(`div`,{children:[(0,x.jsx)(s,{required:!0,margin:`dense`,label:`Name`,name:`a.default-text-field`}),(0,x.jsx)(`br`,{}),(0,x.jsx)(s,{required:!0,parseError:T,type:`email`,margin:`dense`,label:`Email`,name:`b.default-email-field`}),(0,x.jsx)(`br`,{}),(0,x.jsx)(s,{margin:`dense`,label:`Number`,name:`b.number-text-field`,required:!0,type:`number`})]}),k=()=>(0,x.jsx)(t,{onError:e=>(console.log(`you can hook your own error message`,e),e.type===`required`?`Overwritten Error Message`:e?.message),children:(0,x.jsxs)(u,{spacing:3,children:[(0,x.jsx)(s,{name:`name`,label:`Name`,required:!0,variant:`outlined`,margin:`dense`}),(0,x.jsx)(s,{name:`email`,type:`email`,label:`Email`,required:!0,variant:`outlined`,margin:`dense`})]})}),E.__docgenInfo={description:``,methods:[],displayName:`Basic`},D.__docgenInfo={description:``,methods:[],displayName:`PreDefined`},O.__docgenInfo={description:``,methods:[],displayName:`PreDefinedNested`},k.__docgenInfo={description:``,methods:[],displayName:`WithFormErrorProvider`},w.parameters={...w.parameters,docs:{...w.parameters?.docs,source:{originalSource:`{
  args: {
    name: 'core',
    label: 'Label'
  }
}`,...w.parameters?.docs?.source}}},E.parameters={...E.parameters,docs:{...E.parameters?.docs,source:{originalSource:`() => {
  return <div>
      <TextFieldElement required autoComplete={'new-password'} margin={'dense'} label={'Name'} name={'default-text'} />
      <br />
      <TextFieldElement required type={'email'} margin={'dense'} label={'Email'} slotProps={{
      input: {
        startAdornment: <InputAdornment position="start">
                <AccountCircle />
              </InputAdornment>
      }
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
}`,...E.parameters?.docs?.source}}},D.parameters={...D.parameters,docs:{...D.parameters?.docs,source:{originalSource:`() => <div>
    <TextFieldElement required margin={'dense'} label={'Name'} name={'default-text-field'} />
    <br />
    <TextFieldElement required parseError={parseError} type={'email'} margin={'dense'} label={'Email'} name={'default-email-field'} />
    <br />
    <TextFieldElement margin={'dense'} label={'Number'} name={'number-text-field'} required type={'number'} />
  </div>`,...D.parameters?.docs?.source}}},O.parameters={...O.parameters,docs:{...O.parameters?.docs,source:{originalSource:`() => <div>
    <TextFieldElement required margin={'dense'} label={'Name'} name={'a.default-text-field'} />
    <br />
    <TextFieldElement required parseError={parseError} type={'email'} margin={'dense'} label={'Email'} name={'b.default-email-field'} />
    <br />
    <TextFieldElement margin={'dense'} label={'Number'} name={'b.number-text-field'} required type={'number'} />
  </div>`,...O.parameters?.docs?.source}}},k.parameters={...k.parameters,docs:{...k.parameters?.docs,source:{originalSource:`() => <FormErrorProvider onError={error => {
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
  </FormErrorProvider>`,...k.parameters?.docs?.source}}},A=[`Core`,`Basic`,`PreDefined`,`PreDefinedNested`,`WithFormErrorProvider`]}))();export{E as Basic,w as Core,D as PreDefined,O as PreDefinedNested,k as WithFormErrorProvider,A as __namedExportsOrder,C as default};