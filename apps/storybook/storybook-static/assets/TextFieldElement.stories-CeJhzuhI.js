import{j as e}from"./createTheme-CQDJ6CU9.js";import{l as F,O as r,k as N,a as P,I as T,d as S,f as C,G as I,m as A,S as _}from"./chunk-MZXVCX43-dn4LgV3K.js";import{S as k}from"./Shared-Vs_xpIW5.js";import"./index-CTjT7uj6.js";import"./extends-CCbyfPlC.js";import"./assertThisInitialized-Du85iT5g.js";import"./index-9r8iugjR.js";import"./v4-CQkTLCs1.js";const D=F(e.jsx("path",{d:"M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2m0 4c1.93 0 3.5 1.57 3.5 3.5S13.93 13 12 13s-3.5-1.57-3.5-3.5S10.07 6 12 6m0 14c-2.03 0-4.43-.82-6.14-2.88C7.55 15.8 9.68 15 12 15s4.45.8 6.14 2.12C16.43 19.18 14.03 20 12 20"}),"AccountCircle"),H={title:"Text Input/TextFieldElement",component:r,decorators:[W]};function W(a){return e.jsxs(N,{defaultValues:{"default-text-field":"Test Data","default-email-field":"info@nextjs.com","number-text-field":6,a:{"default-text-field":"Test Data"},b:{"default-email-field":"info@nextjs.com","number-text-field":6}},onSuccess:P("submit"),FormProps:{"aria-autocomplete":"none",autoComplete:"new-password"},children:[e.jsx(a,{}),e.jsx("br",{}),e.jsx(k,{})]})}const m={args:{name:"core",label:"Label"}},l=a=>a.type==="pattern"?"Enter an email":"This field is required",n=()=>e.jsxs("div",{children:[e.jsx(r,{required:!0,autoComplete:"new-password",margin:"dense",label:"Name",name:"default-text"}),e.jsx("br",{}),e.jsx(r,{required:!0,type:"email",margin:"dense",label:"Email",InputProps:{startAdornment:e.jsx(T,{position:"start",children:e.jsx(D,{})})},name:"default-email"}),e.jsx("br",{}),e.jsx(r,{required:!0,parseError:l,type:"email",margin:"dense",label:"Email with ParseError",name:"default-email-field-with-parsed"}),e.jsx("br",{}),e.jsx(r,{margin:"dense",label:"Number",name:"number-text",required:!0,type:"number"}),e.jsx("br",{}),e.jsx(S,{margin:"dense",label:"Password",required:!0,name:"password"}),e.jsx("br",{}),e.jsx(C,{passwordFieldName:"password",name:"password-repeat",margin:"dense",label:"Repeat Password",required:!0}),e.jsx("br",{}),e.jsx(r,{name:"textarea",multiline:!0}),e.jsx("br",{}),e.jsx(I,{name:"agree",label:"Agree",required:!0,onChange:(a,v)=>console.log(a,v)})]}),t=()=>e.jsxs("div",{children:[e.jsx(r,{required:!0,margin:"dense",label:"Name",name:"default-text-field"}),e.jsx("br",{}),e.jsx(r,{required:!0,parseError:l,type:"email",margin:"dense",label:"Email",name:"default-email-field"}),e.jsx("br",{}),e.jsx(r,{margin:"dense",label:"Number",name:"number-text-field",required:!0,type:"number"})]}),s=()=>e.jsxs("div",{children:[e.jsx(r,{required:!0,margin:"dense",label:"Name",name:"a.default-text-field"}),e.jsx("br",{}),e.jsx(r,{required:!0,parseError:l,type:"email",margin:"dense",label:"Email",name:"b.default-email-field"}),e.jsx("br",{}),e.jsx(r,{margin:"dense",label:"Number",name:"b.number-text-field",required:!0,type:"number"})]}),i=()=>e.jsx(A,{onError:a=>(console.log("you can hook your own error message",a),a.type==="required"?"Overwritten Error Message":a==null?void 0:a.message),children:e.jsxs(_,{spacing:3,children:[e.jsx(r,{name:"name",label:"Name",required:!0,variant:"outlined",margin:"dense"}),e.jsx(r,{name:"email",type:"email",label:"Email",required:!0,variant:"outlined",margin:"dense"})]})});n.__docgenInfo={description:"",methods:[],displayName:"Basic"};t.__docgenInfo={description:"",methods:[],displayName:"PreDefined"};s.__docgenInfo={description:"",methods:[],displayName:"PreDefinedNested"};i.__docgenInfo={description:"",methods:[],displayName:"WithFormErrorProvider"};var d,o,u;m.parameters={...m.parameters,docs:{...(d=m.parameters)==null?void 0:d.docs,source:{originalSource:`{
  args: {
    name: 'core',
    label: 'Label'
  }
}`,...(u=(o=m.parameters)==null?void 0:o.docs)==null?void 0:u.source}}};var p,c,b;n.parameters={...n.parameters,docs:{...(p=n.parameters)==null?void 0:p.docs,source:{originalSource:`() => {
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
}`,...(b=(c=n.parameters)==null?void 0:c.docs)==null?void 0:b.source}}};var x,f,g;t.parameters={...t.parameters,docs:{...(x=t.parameters)==null?void 0:x.docs,source:{originalSource:`() => <div>
    <TextFieldElement required margin={'dense'} label={'Name'} name={'default-text-field'} />
    <br />
    <TextFieldElement required parseError={parseError} type={'email'} margin={'dense'} label={'Email'} name={'default-email-field'} />
    <br />
    <TextFieldElement margin={'dense'} label={'Number'} name={'number-text-field'} required type={'number'} />
  </div>`,...(g=(f=t.parameters)==null?void 0:f.docs)==null?void 0:g.source}}};var E,j,q;s.parameters={...s.parameters,docs:{...(E=s.parameters)==null?void 0:E.docs,source:{originalSource:`() => <div>
    <TextFieldElement required margin={'dense'} label={'Name'} name={'a.default-text-field'} />
    <br />
    <TextFieldElement required parseError={parseError} type={'email'} margin={'dense'} label={'Email'} name={'b.default-email-field'} />
    <br />
    <TextFieldElement margin={'dense'} label={'Number'} name={'b.number-text-field'} required type={'number'} />
  </div>`,...(q=(j=s.parameters)==null?void 0:j.docs)==null?void 0:q.source}}};var w,h,y;i.parameters={...i.parameters,docs:{...(w=i.parameters)==null?void 0:w.docs,source:{originalSource:`() => <FormErrorProvider onError={error => {
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
  </FormErrorProvider>`,...(y=(h=i.parameters)==null?void 0:h.docs)==null?void 0:y.source}}};const J=["Core","Basic","PreDefined","PreDefinedNested","WithFormErrorProvider"];export{n as Basic,m as Core,t as PreDefined,s as PreDefinedNested,i as WithFormErrorProvider,J as __namedExportsOrder,H as default};
