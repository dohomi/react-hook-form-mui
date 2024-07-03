import{j as c}from"./createTheme-CR3oTDRN.js";import{c as E,S as _,B as C}from"./chunk-MZXVCX43-DW7Qba_3.js";import{F as A}from"./FormDecorator-BcCyJTgh.js";import{r as G}from"./index-CTjT7uj6.js";import"./extends-CCbyfPlC.js";import"./assertThisInitialized-Du85iT5g.js";import"./index-9r8iugjR.js";import"./v4-CQkTLCs1.js";import"./Shared-CVQ8v2kW.js";import"./date-fns-CKiHPn0h.js";const W={title:"RadioButtonGroup",component:E,decorators:[A]},e=[{id:"1",label:"Label 1"},{id:"2",label:"label 2"}],L=[...e,{id:"3",label:"label 3",disabled:!0}],a={args:{label:"Basic",name:"basic",options:e}},s={args:{label:"Inline",name:"inline",row:!0,options:e}},n={args:{label:"Required",name:"inline",required:!0,options:e}},o={args:{label:"Required",name:"number_value",required:!0,type:"number",options:e.map(r=>({id:Number(r.id),label:r.label}))}},i={args:{label:"Disabled",name:"disabled",options:e,disabled:!0}},t={args:{label:"Individually Disabled Options",name:"individuallydisabled",options:L}},l={render:()=>{const r=G.useRef(null),N=()=>{var u;(u=r.current)==null||u.focus()};return c.jsxs(_,{children:[c.jsx(E,{options:e,name:"focus",ref:r}),c.jsx(C,{onClick:()=>N(),children:"Set Focus"})]})}};var d,m,p;a.parameters={...a.parameters,docs:{...(d=a.parameters)==null?void 0:d.docs,source:{originalSource:`{
  args: {
    label: 'Basic',
    name: 'basic',
    options
  }
}`,...(p=(m=a.parameters)==null?void 0:m.docs)==null?void 0:p.source}}};var b,f,g;s.parameters={...s.parameters,docs:{...(b=s.parameters)==null?void 0:b.docs,source:{originalSource:`{
  args: {
    label: 'Inline',
    name: 'inline',
    row: true,
    options
  }
}`,...(g=(f=s.parameters)==null?void 0:f.docs)==null?void 0:g.source}}};var S,D,R;n.parameters={...n.parameters,docs:{...(S=n.parameters)==null?void 0:S.docs,source:{originalSource:`{
  args: {
    label: 'Required',
    name: 'inline',
    required: true,
    options
  }
}`,...(R=(D=n.parameters)==null?void 0:D.docs)==null?void 0:R.source}}};var q,B,I;o.parameters={...o.parameters,docs:{...(q=o.parameters)==null?void 0:q.docs,source:{originalSource:`{
  args: {
    label: 'Required',
    name: 'number_value',
    required: true,
    type: 'number',
    options: options.map(i => ({
      id: Number(i.id),
      label: i.label
    }))
  }
}`,...(I=(B=o.parameters)==null?void 0:B.docs)==null?void 0:I.source}}};var v,x,y;i.parameters={...i.parameters,docs:{...(v=i.parameters)==null?void 0:v.docs,source:{originalSource:`{
  args: {
    label: 'Disabled',
    name: 'disabled',
    options,
    disabled: true
  }
}`,...(y=(x=i.parameters)==null?void 0:x.docs)==null?void 0:y.source}}};var F,j,k;t.parameters={...t.parameters,docs:{...(F=t.parameters)==null?void 0:F.docs,source:{originalSource:`{
  args: {
    label: 'Individually Disabled Options',
    name: 'individuallydisabled',
    options: withDisabledOptions
  }
}`,...(k=(j=t.parameters)==null?void 0:j.docs)==null?void 0:k.source}}};var O,h,w;l.parameters={...l.parameters,docs:{...(O=l.parameters)==null?void 0:O.docs,source:{originalSource:`{
  render: () => {
    const ref = useRef<HTMLInputElement>(null);
    const focus = () => {
      ref.current?.focus();
    };
    return <Stack>
        <RadioButtonGroup options={options} name={'focus'} ref={ref} />
        <Button onClick={() => focus()}>Set Focus</Button>
      </Stack>;
  }
}`,...(w=(h=l.parameters)==null?void 0:h.docs)==null?void 0:w.source}}};const X=["Basic","Inline","Required","ValueAsNumber","Disabled","IndividuallyDisabled","SetFocus"];export{a as Basic,i as Disabled,t as IndividuallyDisabled,s as Inline,n as Required,l as SetFocus,o as ValueAsNumber,X as __namedExportsOrder,W as default};
