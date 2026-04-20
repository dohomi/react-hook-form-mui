import{n as e}from"./chunk-DnJy8xQt.js";import{t}from"./react-4pnG_sQH.js";import{l as n,m as r,n as i}from"./esm-D4A6xbwj.js";import{Pt as a,c as o,i as s,l as c,t as l}from"./iframe-BBlJSKdw.js";import{i as u,n as d,r as f,t as p}from"./AutoMode-C1bQIONO.js";function m(e){return(0,h.jsxs)(i,{onSuccess:g(`form-submit`),defaultValues:{preselect:{id:2,label:`Second`},"multi-preselect":[{id:2,label:`Second`}],"match-id":2,"match-id-multi":[2,3]},children:[(0,h.jsx)(e,{}),(0,h.jsx)(c,{sx:{mt:2},children:(0,h.jsx)(o,{type:`submit`,children:`Submit`})})]})}var h,g,_,v,y,b,x,S,C,w,T,E,D,O,k,A,j,M,N;e((()=>{n(),t(),l(),u(),d(),h=a(),{action:g}=__STORYBOOK_MODULE_ACTIONS__,_={title:`Select/Autocomplete`,component:r,decorators:[m]},v=[{label:`First`,id:1},{label:`Second`,id:2},{label:`Third`,id:3},{label:`Four`,id:4}],y={args:{name:`basic`,options:v}},b={args:{name:`basic`,options:v,autocompleteProps:{disabled:!0}}},x={args:{name:`preselect`,options:v}},S={args:{name:`multi`,options:v,multiple:!0}},C={args:{label:`Multiple Required`,name:`multi-required`,options:v,multiple:!0,required:!0}},w={args:{label:`Multiple Required Custom`,name:`multi-required-custom`,options:v,multiple:!0,rules:{required:`Please fill out.`}}},T={args:{name:`multi-preselect`,options:v,multiple:!0}},E={args:{name:`multicheck`,options:v,multiple:!0,showCheckbox:!0}},D={args:{label:`Loading State`,name:`loading`,options:[],multiple:!0,showCheckbox:!0,loading:!0}},O={args:{label:`Loading State`,name:`loading`,options:[],multiple:!0,showCheckbox:!0,loading:!0,loadingIndicator:(0,h.jsx)(p,{})}},k={args:{label:`Match ID`,name:`match-id`,options:v,matchId:!0}},A={args:{label:`Match ID`,name:`match-id-multi`,options:v,multiple:!0,matchId:!0}},j={args:{name:`custom-input`,options:v,textFieldProps:{placeholder:`Some placeholder`,slotProps:{input:{startAdornment:(0,h.jsx)(f,{}),endAdornment:null}}}}},M=()=>(0,h.jsx)(s,{title:`Some Tooltip`,children:(0,h.jsx)(`div`,{children:(0,h.jsx)(r,{options:v,name:`tooltip`,label:`With Tooltip`})})}),M.__docgenInfo={description:``,methods:[],displayName:`WithTooltip`},y.parameters={...y.parameters,docs:{...y.parameters?.docs,source:{originalSource:`{
  args: {
    name: 'basic',
    options
  }
}`,...y.parameters?.docs?.source}}},b.parameters={...b.parameters,docs:{...b.parameters?.docs,source:{originalSource:`{
  args: {
    name: 'basic',
    options,
    autocompleteProps: {
      disabled: true
    }
  }
}`,...b.parameters?.docs?.source}}},x.parameters={...x.parameters,docs:{...x.parameters?.docs,source:{originalSource:`{
  args: {
    name: 'preselect',
    options
  }
}`,...x.parameters?.docs?.source}}},S.parameters={...S.parameters,docs:{...S.parameters?.docs,source:{originalSource:`{
  args: {
    name: 'multi',
    options,
    multiple: true
  }
}`,...S.parameters?.docs?.source}}},C.parameters={...C.parameters,docs:{...C.parameters?.docs,source:{originalSource:`{
  args: {
    label: 'Multiple Required',
    name: 'multi-required',
    options,
    multiple: true,
    required: true
  }
}`,...C.parameters?.docs?.source}}},w.parameters={...w.parameters,docs:{...w.parameters?.docs,source:{originalSource:`{
  args: {
    label: 'Multiple Required Custom',
    name: 'multi-required-custom',
    options,
    multiple: true,
    rules: {
      required: 'Please fill out.'
    }
  }
}`,...w.parameters?.docs?.source}}},T.parameters={...T.parameters,docs:{...T.parameters?.docs,source:{originalSource:`{
  args: {
    name: 'multi-preselect',
    options,
    multiple: true
  }
}`,...T.parameters?.docs?.source}}},E.parameters={...E.parameters,docs:{...E.parameters?.docs,source:{originalSource:`{
  args: {
    name: 'multicheck',
    options,
    multiple: true,
    showCheckbox: true
  }
}`,...E.parameters?.docs?.source}}},D.parameters={...D.parameters,docs:{...D.parameters?.docs,source:{originalSource:`{
  args: {
    label: 'Loading State',
    name: 'loading',
    options: [],
    multiple: true,
    showCheckbox: true,
    loading: true
  }
}`,...D.parameters?.docs?.source}}},O.parameters={...O.parameters,docs:{...O.parameters?.docs,source:{originalSource:`{
  args: {
    label: 'Loading State',
    name: 'loading',
    options: [],
    multiple: true,
    showCheckbox: true,
    loading: true,
    loadingIndicator: <AutoModeIcon />
  }
}`,...O.parameters?.docs?.source}}},k.parameters={...k.parameters,docs:{...k.parameters?.docs,source:{originalSource:`{
  args: {
    label: 'Match ID',
    name: 'match-id',
    options,
    matchId: true
  }
}`,...k.parameters?.docs?.source}}},A.parameters={...A.parameters,docs:{...A.parameters?.docs,source:{originalSource:`{
  args: {
    label: 'Match ID',
    name: 'match-id-multi',
    options,
    multiple: true,
    matchId: true
  }
}`,...A.parameters?.docs?.source}}},j.parameters={...j.parameters,docs:{...j.parameters?.docs,source:{originalSource:`{
  args: {
    name: 'custom-input',
    options,
    textFieldProps: {
      placeholder: 'Some placeholder',
      slotProps: {
        input: {
          startAdornment: <LocationIcon />,
          endAdornment: null
        }
      }
    }
  }
}`,...j.parameters?.docs?.source}}},M.parameters={...M.parameters,docs:{...M.parameters?.docs,source:{originalSource:`() => <Tooltip title={'Some Tooltip'}>
    <div>
      <AutocompleteElement options={options} name={'tooltip'} label={'With Tooltip'} />
    </div>
  </Tooltip>`,...M.parameters?.docs?.source}}},N=[`Basic`,`Disabled`,`BasicPreSelect`,`MultiSelect`,`MultiSelectRequired`,`MultiSelectRequiredCustom`,`MultiSelectPredefined`,`MultiSelectCheckbox`,`Loading`,`WithCustomLoading`,`MatchId`,`MatchIdMulti`,`CustomInput`,`WithTooltip`]}))();export{y as Basic,x as BasicPreSelect,j as CustomInput,b as Disabled,D as Loading,k as MatchId,A as MatchIdMulti,S as MultiSelect,E as MultiSelectCheckbox,T as MultiSelectPredefined,C as MultiSelectRequired,w as MultiSelectRequiredCustom,O as WithCustomLoading,M as WithTooltip,N as __namedExportsOrder,_ as default};