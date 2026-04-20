import{n as e}from"./chunk-DnJy8xQt.js";import{l as t,o as n}from"./esm-D4A6xbwj.js";import{r,t as i}from"./FormDecorator-BLEMgLWd.js";var a,o,s,c,l,u,d,f,p,m,h,g,_,v,y,b,x,S;e((()=>{t(),r(),a={title:`Select/MultiSelectElement`,component:n,decorators:[i]},o=[`Oliver Hansen`,`Van Henry`,`April Tucker`,`Ralph Hubbard`,`Omar Alexander`,`Carlos Abbott`,`Miriam Wagner`,`Bradley Wilkerson`,`Virginia Andrews`,`Kelly Snyder`],s=[`January`,`February`,`March`,`April`,`May`,`June`,`July`,`August`,`September`,`October`,`November`,`December`],c={args:{name:`basic`,options:o}},l={args:{name:`filled`,options:o,variant:`filled`}},u={args:{name:`basic`,label:`Select Field`,options:o}},d={args:{name:`basic_small`,size:`small`,label:`Select Field`,options:o}},f={args:{name:`required`,label:`Required Field`,options:o,required:!0}},p={args:{name:`chips`,label:`Required Field`,options:o,showChips:!0}},m={args:{name:`chips`,label:`Required Field`,options:o,showChips:!0,preserveOrder:!0}},h={args:{name:`checkbox`,label:`Checkbox Field`,options:o,showCheckbox:!0}},g=[{id:0,name:`Alpha`},{id:1,name:`Beta`},{id:2,name:`Celsius`},{id:3,name:`Delta`}],_={args:{name:`object`,label:`Object Field`,options:g,itemKey:`id`,itemLabel:`name`}},v={args:{name:`object`,label:`Object Field`,options:g,itemKey:`id`,itemLabel:`name`,showChips:!0}},y={args:{name:`object`,label:`Object Field`,options:g,itemKey:`id`,itemLabel:`name`,renderValue:e=>`You selected: ${(e||[])?.length}`}},b={args:{name:`month`,options:s,label:`Months`,MenuProps:{slotProps:{paper:{sx:{"& .MuiList-root":{display:`grid`,gridTemplateColumns:`repeat(3, 1fr)`,gap:`4px`}}}}}}},x={args:{name:`months_small`,options:s,label:`Months`,size:`small`,MenuProps:{slotProps:{paper:{sx:{"& .MuiList-root":{display:`grid`,gridTemplateColumns:`repeat(3, 1fr)`,gap:`4px`}}}}}}},c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`{
  args: {
    name: 'basic',
    options: names
  }
}`,...c.parameters?.docs?.source}}},l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
  args: {
    name: 'filled',
    options: names,
    variant: 'filled'
  }
}`,...l.parameters?.docs?.source}}},u.parameters={...u.parameters,docs:{...u.parameters?.docs,source:{originalSource:`{
  args: {
    name: 'basic',
    label: 'Select Field',
    options: names
  }
}`,...u.parameters?.docs?.source}}},d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
  args: {
    name: 'basic_small',
    size: 'small',
    label: 'Select Field',
    options: names
  }
}`,...d.parameters?.docs?.source}}},f.parameters={...f.parameters,docs:{...f.parameters?.docs,source:{originalSource:`{
  args: {
    name: 'required',
    label: 'Required Field',
    options: names,
    required: true
  }
}`,...f.parameters?.docs?.source}}},p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
  args: {
    name: 'chips',
    label: 'Required Field',
    options: names,
    showChips: true
  }
}`,...p.parameters?.docs?.source}}},m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
  args: {
    name: 'chips',
    label: 'Required Field',
    options: names,
    showChips: true,
    preserveOrder: true
  }
}`,...m.parameters?.docs?.source}}},h.parameters={...h.parameters,docs:{...h.parameters?.docs,source:{originalSource:`{
  args: {
    name: 'checkbox',
    label: 'Checkbox Field',
    options: names,
    showCheckbox: true
  }
}`,...h.parameters?.docs?.source}}},_.parameters={..._.parameters,docs:{..._.parameters?.docs,source:{originalSource:`{
  args: {
    name: 'object',
    label: 'Object Field',
    options: objectVals,
    itemKey: 'id',
    itemLabel: 'name'
  }
}`,..._.parameters?.docs?.source}}},v.parameters={...v.parameters,docs:{...v.parameters?.docs,source:{originalSource:`{
  args: {
    name: 'object',
    label: 'Object Field',
    options: objectVals,
    itemKey: 'id',
    itemLabel: 'name',
    showChips: true
  }
}`,...v.parameters?.docs?.source}}},y.parameters={...y.parameters,docs:{...y.parameters?.docs,source:{originalSource:`{
  args: {
    name: 'object',
    label: 'Object Field',
    options: objectVals,
    itemKey: 'id',
    itemLabel: 'name',
    renderValue: (selected: any) => \`You selected: \${(selected || [])?.length}\`
  }
}`,...y.parameters?.docs?.source}}},b.parameters={...b.parameters,docs:{...b.parameters?.docs,source:{originalSource:`{
  args: {
    name: 'month',
    options: months,
    label: 'Months',
    MenuProps: {
      slotProps: {
        paper: {
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
  }
}`,...b.parameters?.docs?.source}}},x.parameters={...x.parameters,docs:{...x.parameters?.docs,source:{originalSource:`{
  args: {
    name: 'months_small',
    options: months,
    label: 'Months',
    size: 'small',
    MenuProps: {
      slotProps: {
        paper: {
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
  }
}`,...x.parameters?.docs?.source}}},S=[`Basic`,`Filled`,`WithLabel`,`WithLabelSmall`,`Required`,`WithChips`,`WithChipsPreserveOrder`,`WithCheckbox`,`WithObjectArray`,`WithObjectArrayChips`,`OverwriteRenderValue`,`MonthPicker`,`MonthPickerSmall`]}))();export{c as Basic,l as Filled,b as MonthPicker,x as MonthPickerSmall,y as OverwriteRenderValue,f as Required,h as WithCheckbox,p as WithChips,m as WithChipsPreserveOrder,u as WithLabel,d as WithLabelSmall,_ as WithObjectArray,v as WithObjectArrayChips,S as __namedExportsOrder,a as default};