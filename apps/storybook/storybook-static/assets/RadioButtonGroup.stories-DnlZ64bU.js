import{a as e,n as t}from"./chunk-DnJy8xQt.js";import{t as n}from"./react-4pnG_sQH.js";import{a as r,l as i}from"./esm-D4A6xbwj.js";import{Pt as a,c as o,r as s,t as c}from"./iframe-BBlJSKdw.js";import{r as l,t as u}from"./FormDecorator-BLEMgLWd.js";var d,f,p,m,h,g,_,v,y,b,x,S,C;t((()=>{i(),l(),d=e(n()),c(),f=a(),p={title:`Radio & Sliders & Switches/RadioButtonGroup`,component:r,decorators:[u]},m=[{id:`1`,label:`Label 1`},{id:`2`,label:`label 2`}],h=[...m,{id:`3`,label:`label 3`,disabled:!0}],g={args:{label:`Basic`,name:`basic`,options:m}},_={args:{label:`Inline`,name:`inline`,row:!0,options:m}},v={args:{label:`Required`,name:`inline`,required:!0,options:m}},y={args:{label:`Required`,name:`number_value`,required:!0,type:`number`,options:m.map(e=>({id:Number(e.id),label:e.label}))}},b={args:{label:`Disabled`,name:`disabled`,options:m,disabled:!0}},x={args:{label:`Individually Disabled Options`,name:`individuallydisabled`,options:h}},S={args:{label:`Set focus`,name:`focus`,options:m},render:e=>{let t=(0,d.useRef)(null),n=()=>{t.current?.focus()};return(0,f.jsxs)(s,{children:[(0,f.jsx)(r,{...e,ref:t}),(0,f.jsx)(o,{onClick:()=>n(),children:`Set Focus`})]})}},g.parameters={...g.parameters,docs:{...g.parameters?.docs,source:{originalSource:`{
  args: {
    label: 'Basic',
    name: 'basic',
    options
  }
}`,...g.parameters?.docs?.source}}},_.parameters={..._.parameters,docs:{..._.parameters?.docs,source:{originalSource:`{
  args: {
    label: 'Inline',
    name: 'inline',
    row: true,
    options
  }
}`,..._.parameters?.docs?.source}}},v.parameters={...v.parameters,docs:{...v.parameters?.docs,source:{originalSource:`{
  args: {
    label: 'Required',
    name: 'inline',
    required: true,
    options
  }
}`,...v.parameters?.docs?.source}}},y.parameters={...y.parameters,docs:{...y.parameters?.docs,source:{originalSource:`{
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
}`,...y.parameters?.docs?.source}}},b.parameters={...b.parameters,docs:{...b.parameters?.docs,source:{originalSource:`{
  args: {
    label: 'Disabled',
    name: 'disabled',
    options,
    disabled: true
  }
}`,...b.parameters?.docs?.source}}},x.parameters={...x.parameters,docs:{...x.parameters?.docs,source:{originalSource:`{
  args: {
    label: 'Individually Disabled Options',
    name: 'individuallydisabled',
    options: withDisabledOptions
  }
}`,...x.parameters?.docs?.source}}},S.parameters={...S.parameters,docs:{...S.parameters?.docs,source:{originalSource:`{
  args: {
    label: 'Set focus',
    name: 'focus',
    options
  },
  render: args => {
    const ref = useRef<HTMLInputElement>(null);
    const focus = () => {
      ref.current?.focus();
    };
    return <Stack>
        <RadioButtonGroup {...args} ref={ref} />
        <Button onClick={() => focus()}>Set Focus</Button>
      </Stack>;
  }
}`,...S.parameters?.docs?.source}}},C=[`Basic`,`Inline`,`Required`,`ValueAsNumber`,`Disabled`,`IndividuallyDisabled`,`SetFocus`]}))();export{g as Basic,b as Disabled,x as IndividuallyDisabled,_ as Inline,v as Required,S as SetFocus,y as ValueAsNumber,C as __namedExportsOrder,p as default};