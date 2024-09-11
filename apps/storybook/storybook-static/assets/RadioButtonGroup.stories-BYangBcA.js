import{j as c}from"./createTheme-CiZYJ6wm.js";import{c as E,B as _}from"./chunk-MZXVCX43-WJ4Jfv3P.js";import{F as C}from"./FormDecorator-DEvsgOWm.js";import{r as A}from"./index-BP8_t0zE.js";import{S as G}from"./Stack-CQq6LxoU.js";import"./emotion-use-insertion-effect-with-fallbacks.browser.esm-UWD3gXM2.js";import"./assertThisInitialized-Cd8zZZH1.js";import"./index-BxmsGmlx.js";import"./v4-CQkTLCs1.js";import"./Shared-jroQd0NV.js";import"./date-fns-BATeuRnp.js";const X={title:"Radio & Sliders & Switches/RadioButtonGroup",component:E,decorators:[C]},e=[{id:"1",label:"Label 1"},{id:"2",label:"label 2"}],L=[...e,{id:"3",label:"label 3",disabled:!0}],a={args:{label:"Basic",name:"basic",options:e}},s={args:{label:"Inline",name:"inline",row:!0,options:e}},n={args:{label:"Required",name:"inline",required:!0,options:e}},o={args:{label:"Required",name:"number_value",required:!0,type:"number",options:e.map(r=>({id:Number(r.id),label:r.label}))}},i={args:{label:"Disabled",name:"disabled",options:e,disabled:!0}},t={args:{label:"Individually Disabled Options",name:"individuallydisabled",options:L}},l={render:()=>{const r=A.useRef(null),N=()=>{var u;(u=r.current)==null||u.focus()};return c.jsxs(G,{children:[c.jsx(E,{options:e,name:"focus",ref:r}),c.jsx(_,{onClick:()=>N(),children:"Set Focus"})]})}};var d,m,p;a.parameters={...a.parameters,docs:{...(d=a.parameters)==null?void 0:d.docs,source:{originalSource:`{
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
}`,...(g=(f=s.parameters)==null?void 0:f.docs)==null?void 0:g.source}}};var S,R,D;n.parameters={...n.parameters,docs:{...(S=n.parameters)==null?void 0:S.docs,source:{originalSource:`{
  args: {
    label: 'Required',
    name: 'inline',
    required: true,
    options
  }
}`,...(D=(R=n.parameters)==null?void 0:R.docs)==null?void 0:D.source}}};var q,B,I;o.parameters={...o.parameters,docs:{...(q=o.parameters)==null?void 0:q.docs,source:{originalSource:`{
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
}`,...(y=(x=i.parameters)==null?void 0:x.docs)==null?void 0:y.source}}};var F,h,j;t.parameters={...t.parameters,docs:{...(F=t.parameters)==null?void 0:F.docs,source:{originalSource:`{
  args: {
    label: 'Individually Disabled Options',
    name: 'individuallydisabled',
    options: withDisabledOptions
  }
}`,...(j=(h=t.parameters)==null?void 0:h.docs)==null?void 0:j.source}}};var k,w,O;l.parameters={...l.parameters,docs:{...(k=l.parameters)==null?void 0:k.docs,source:{originalSource:`{
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
}`,...(O=(w=l.parameters)==null?void 0:w.docs)==null?void 0:O.source}}};const Y=["Basic","Inline","Required","ValueAsNumber","Disabled","IndividuallyDisabled","SetFocus"];export{a as Basic,i as Disabled,t as IndividuallyDisabled,s as Inline,n as Required,l as SetFocus,o as ValueAsNumber,Y as __namedExportsOrder,X as default};
