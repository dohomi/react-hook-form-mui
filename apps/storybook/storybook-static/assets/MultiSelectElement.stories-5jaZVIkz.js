import{b as se}from"./chunk-D5ZWXAHU-dJp8butX.js";import{F as ne}from"./FormDecorator-Dz5VsQgr.js";import"./index-Ca8FO3x4.js";import"./jsx-runtime-BjG_zV1W.js";import"./createTheme-BZiKxHa3.js";import"./index-P1EKaRb4.js";import"./v4-CQkTLCs1.js";import"./Shared-rzVjZ017.js";import"./Stack-DTJq516_.js";import"./date-fns-CzombV6d.js";const he={title:"Select/MultiSelectElement",component:se,decorators:[ne]},e=["Oliver Hansen","Van Henry","April Tucker","Ralph Hubbard","Omar Alexander","Carlos Abbott","Miriam Wagner","Bradley Wilkerson","Virginia Andrews","Kelly Snyder"],re=["January","February","March","April","May","June","July","August","September","October","November","December"],r={args:{name:"basic",options:e}},a={args:{name:"filled",options:e,variant:"filled"}},s={args:{name:"basic",label:"Select Field",options:e}},n={args:{name:"basic_small",size:"small",label:"Select Field",options:e}},o={args:{name:"required",label:"Required Field",options:e,required:!0}},t={args:{name:"chips",label:"Required Field",options:e,showChips:!0}},i={args:{name:"chips",label:"Required Field",options:e,showChips:!0,preserveOrder:!0}},l={args:{name:"checkbox",label:"Checkbox Field",options:e,showCheckbox:!0}},b=[{id:0,name:"Alpha"},{id:1,name:"Beta"},{id:2,name:"Celsius"},{id:3,name:"Delta"}],c={args:{name:"object",label:"Object Field",options:b,itemKey:"id",itemLabel:"name"}},m={args:{name:"object",label:"Object Field",options:b,itemKey:"id",itemLabel:"name",showChips:!0}},p={args:{name:"object",label:"Object Field",options:b,itemKey:"id",itemLabel:"name",renderValue:ae=>{var h;return`You selected: ${(h=ae||[])==null?void 0:h.length}`}}},d={args:{name:"month",options:re,label:"Months",MenuProps:{PaperProps:{sx:{"& .MuiList-root":{display:"grid",gridTemplateColumns:"repeat(3, 1fr)",gap:"4px"}}}}}},u={args:{name:"months_small",options:re,label:"Months",size:"small",MenuProps:{PaperProps:{sx:{"& .MuiList-root":{display:"grid",gridTemplateColumns:"repeat(3, 1fr)",gap:"4px"}}}}}};var g,C,S;r.parameters={...r.parameters,docs:{...(g=r.parameters)==null?void 0:g.docs,source:{originalSource:`{
  args: {
    name: 'basic',
    options: names
  }
}`,...(S=(C=r.parameters)==null?void 0:C.docs)==null?void 0:S.source}}};var y,F,j;a.parameters={...a.parameters,docs:{...(y=a.parameters)==null?void 0:y.docs,source:{originalSource:`{
  args: {
    name: 'filled',
    options: names,
    variant: 'filled'
  }
}`,...(j=(F=a.parameters)==null?void 0:F.docs)==null?void 0:j.source}}};var M,O,x;s.parameters={...s.parameters,docs:{...(M=s.parameters)==null?void 0:M.docs,source:{originalSource:`{
  args: {
    name: 'basic',
    label: 'Select Field',
    options: names
  }
}`,...(x=(O=s.parameters)==null?void 0:O.docs)==null?void 0:x.source}}};var P,W,k;n.parameters={...n.parameters,docs:{...(P=n.parameters)==null?void 0:P.docs,source:{originalSource:`{
  args: {
    name: 'basic_small',
    size: 'small',
    label: 'Select Field',
    options: names
  }
}`,...(k=(W=n.parameters)==null?void 0:W.docs)==null?void 0:k.source}}};var L,q,R;o.parameters={...o.parameters,docs:{...(L=o.parameters)==null?void 0:L.docs,source:{originalSource:`{
  args: {
    name: 'required',
    label: 'Required Field',
    options: names,
    required: true
  }
}`,...(R=(q=o.parameters)==null?void 0:q.docs)==null?void 0:R.source}}};var f,w,A;t.parameters={...t.parameters,docs:{...(f=t.parameters)==null?void 0:f.docs,source:{originalSource:`{
  args: {
    name: 'chips',
    label: 'Required Field',
    options: names,
    showChips: true
  }
}`,...(A=(w=t.parameters)==null?void 0:w.docs)==null?void 0:A.source}}};var v,V,K;i.parameters={...i.parameters,docs:{...(v=i.parameters)==null?void 0:v.docs,source:{originalSource:`{
  args: {
    name: 'chips',
    label: 'Required Field',
    options: names,
    showChips: true,
    preserveOrder: true
  }
}`,...(K=(V=i.parameters)==null?void 0:V.docs)==null?void 0:K.source}}};var _,T,z;l.parameters={...l.parameters,docs:{...(_=l.parameters)==null?void 0:_.docs,source:{originalSource:`{
  args: {
    name: 'checkbox',
    label: 'Checkbox Field',
    options: names,
    showCheckbox: true
  }
}`,...(z=(T=l.parameters)==null?void 0:T.docs)==null?void 0:z.source}}};var B,D,H;c.parameters={...c.parameters,docs:{...(B=c.parameters)==null?void 0:B.docs,source:{originalSource:`{
  args: {
    name: 'object',
    label: 'Object Field',
    options: objectVals,
    itemKey: 'id',
    itemLabel: 'name'
  }
}`,...(H=(D=c.parameters)==null?void 0:D.docs)==null?void 0:H.source}}};var J,E,Y;m.parameters={...m.parameters,docs:{...(J=m.parameters)==null?void 0:J.docs,source:{originalSource:`{
  args: {
    name: 'object',
    label: 'Object Field',
    options: objectVals,
    itemKey: 'id',
    itemLabel: 'name',
    showChips: true
  }
}`,...(Y=(E=m.parameters)==null?void 0:E.docs)==null?void 0:Y.source}}};var $,N,G;p.parameters={...p.parameters,docs:{...($=p.parameters)==null?void 0:$.docs,source:{originalSource:`{
  args: {
    name: 'object',
    label: 'Object Field',
    options: objectVals,
    itemKey: 'id',
    itemLabel: 'name',
    renderValue: (selected: any) => \`You selected: \${(selected || [])?.length}\`
  }
}`,...(G=(N=p.parameters)==null?void 0:N.docs)==null?void 0:G.source}}};var I,Q,U;d.parameters={...d.parameters,docs:{...(I=d.parameters)==null?void 0:I.docs,source:{originalSource:`{
  args: {
    name: 'month',
    options: months,
    label: 'Months',
    MenuProps: {
      PaperProps: {
        sx: {
          '& .MuiList-root': {
            display: 'grid',
            gridTemplateColumns: 'repeat(3, 1fr)',
            gap: '4px'
          }
        }
      }
    }
  }
}`,...(U=(Q=d.parameters)==null?void 0:Q.docs)==null?void 0:U.source}}};var X,Z,ee;u.parameters={...u.parameters,docs:{...(X=u.parameters)==null?void 0:X.docs,source:{originalSource:`{
  args: {
    name: 'months_small',
    options: months,
    label: 'Months',
    size: 'small',
    MenuProps: {
      PaperProps: {
        sx: {
          '& .MuiList-root': {
            display: 'grid',
            gridTemplateColumns: 'repeat(3, 1fr)',
            gap: '4px'
          }
        }
      }
    }
  }
}`,...(ee=(Z=u.parameters)==null?void 0:Z.docs)==null?void 0:ee.source}}};const ge=["Basic","Filled","WithLabel","WithLabelSmall","Required","WithChips","WithChipsPreserveOrder","WithCheckbox","WithObjectArray","WithObjectArrayChips","OverwriteRenderValue","MonthPicker","MonthPickerSmall"];export{r as Basic,a as Filled,d as MonthPicker,u as MonthPickerSmall,p as OverwriteRenderValue,o as Required,l as WithCheckbox,t as WithChips,i as WithChipsPreserveOrder,s as WithLabel,n as WithLabelSmall,c as WithObjectArray,m as WithObjectArrayChips,ge as __namedExportsOrder,he as default};
