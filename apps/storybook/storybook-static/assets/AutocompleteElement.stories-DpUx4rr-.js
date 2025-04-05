import{j as a}from"./jsx-runtime-BjG_zV1W.js";import{t as eo,q as to,v as ne,P as yt,w as pe,x as oo,y as ro,z as E,A as ao,D as so,H as Le,J as no,K as po,p as Oe,L as j,M as io,N as lo,T as co,O as $e,k as wt,r as Mt,F as uo,a as mo,B as ho}from"./chunk-D5ZWXAHU-k2Hc9ByJ.js";import{B as go}from"./Box-BZFhrfO4.js";import{r as n}from"./index-Ca8FO3x4.js";import{a as vt,u as fo,b as Rt}from"./createTheme-pWRLLLPK.js";import"./index-P1EKaRb4.js";import"./v4-CQkTLCs1.js";function bo(o){return eo("MuiTooltip",o)}const To=to("MuiTooltip",["popper","popperInteractive","popperArrow","popperClose","tooltip","tooltipArrow","touch","tooltipPlacementLeft","tooltipPlacementRight","tooltipPlacementTop","tooltipPlacementBottom","arrow"]),r=To;function So(o){return Math.round(o*1e5)/1e5}const xo=o=>{const{classes:e,disableInteractive:s,arrow:m,touch:R,placement:T}=o,ie={popper:["popper",!s&&"popperInteractive",m&&"popperArrow"],tooltip:["tooltip",m&&"tooltipArrow",R&&"touch",`tooltipPlacement${vt(T.split("-")[0])}`],arrow:["arrow"]};return lo(ie,bo,e)},yo=ne(yt,{name:"MuiTooltip",slot:"Popper",overridesResolver:(o,e)=>{const{ownerState:s}=o;return[e.popper,!s.disableInteractive&&e.popperInteractive,s.arrow&&e.popperArrow,!s.open&&e.popperClose]}})(pe(({theme:o})=>({zIndex:(o.vars||o).zIndex.tooltip,pointerEvents:"none",variants:[{props:({ownerState:e})=>!e.disableInteractive,style:{pointerEvents:"auto"}},{props:({open:e})=>!e,style:{pointerEvents:"none"}},{props:({ownerState:e})=>e.arrow,style:{[`&[data-popper-placement*="bottom"] .${r.arrow}`]:{top:0,marginTop:"-0.71em","&::before":{transformOrigin:"0 100%"}},[`&[data-popper-placement*="top"] .${r.arrow}`]:{bottom:0,marginBottom:"-0.71em","&::before":{transformOrigin:"100% 0"}},[`&[data-popper-placement*="right"] .${r.arrow}`]:{height:"1em",width:"0.71em","&::before":{transformOrigin:"100% 100%"}},[`&[data-popper-placement*="left"] .${r.arrow}`]:{height:"1em",width:"0.71em","&::before":{transformOrigin:"0 0"}}}},{props:({ownerState:e})=>e.arrow&&!e.isRtl,style:{[`&[data-popper-placement*="right"] .${r.arrow}`]:{left:0,marginLeft:"-0.71em"}}},{props:({ownerState:e})=>e.arrow&&!!e.isRtl,style:{[`&[data-popper-placement*="right"] .${r.arrow}`]:{right:0,marginRight:"-0.71em"}}},{props:({ownerState:e})=>e.arrow&&!e.isRtl,style:{[`&[data-popper-placement*="left"] .${r.arrow}`]:{right:0,marginRight:"-0.71em"}}},{props:({ownerState:e})=>e.arrow&&!!e.isRtl,style:{[`&[data-popper-placement*="left"] .${r.arrow}`]:{left:0,marginLeft:"-0.71em"}}}]}))),wo=ne("div",{name:"MuiTooltip",slot:"Tooltip",overridesResolver:(o,e)=>{const{ownerState:s}=o;return[e.tooltip,s.touch&&e.touch,s.arrow&&e.tooltipArrow,e[`tooltipPlacement${vt(s.placement.split("-")[0])}`]]}})(pe(({theme:o})=>({backgroundColor:o.vars?o.vars.palette.Tooltip.bg:Rt(o.palette.grey[700],.92),borderRadius:(o.vars||o).shape.borderRadius,color:(o.vars||o).palette.common.white,fontFamily:o.typography.fontFamily,padding:"4px 8px",fontSize:o.typography.pxToRem(11),maxWidth:300,margin:2,wordWrap:"break-word",fontWeight:o.typography.fontWeightMedium,[`.${r.popper}[data-popper-placement*="left"] &`]:{transformOrigin:"right center"},[`.${r.popper}[data-popper-placement*="right"] &`]:{transformOrigin:"left center"},[`.${r.popper}[data-popper-placement*="top"] &`]:{transformOrigin:"center bottom",marginBottom:"14px"},[`.${r.popper}[data-popper-placement*="bottom"] &`]:{transformOrigin:"center top",marginTop:"14px"},variants:[{props:({ownerState:e})=>e.arrow,style:{position:"relative",margin:0}},{props:({ownerState:e})=>e.touch,style:{padding:"8px 16px",fontSize:o.typography.pxToRem(14),lineHeight:`${So(16/14)}em`,fontWeight:o.typography.fontWeightRegular}},{props:({ownerState:e})=>!e.isRtl,style:{[`.${r.popper}[data-popper-placement*="left"] &`]:{marginRight:"14px"},[`.${r.popper}[data-popper-placement*="right"] &`]:{marginLeft:"14px"}}},{props:({ownerState:e})=>!e.isRtl&&e.touch,style:{[`.${r.popper}[data-popper-placement*="left"] &`]:{marginRight:"24px"},[`.${r.popper}[data-popper-placement*="right"] &`]:{marginLeft:"24px"}}},{props:({ownerState:e})=>!!e.isRtl,style:{[`.${r.popper}[data-popper-placement*="left"] &`]:{marginLeft:"14px"},[`.${r.popper}[data-popper-placement*="right"] &`]:{marginRight:"14px"}}},{props:({ownerState:e})=>!!e.isRtl&&e.touch,style:{[`.${r.popper}[data-popper-placement*="left"] &`]:{marginLeft:"24px"},[`.${r.popper}[data-popper-placement*="right"] &`]:{marginRight:"24px"}}},{props:({ownerState:e})=>e.touch,style:{[`.${r.popper}[data-popper-placement*="top"] &`]:{marginBottom:"24px"}}},{props:({ownerState:e})=>e.touch,style:{[`.${r.popper}[data-popper-placement*="bottom"] &`]:{marginTop:"24px"}}}]}))),Mo=ne("span",{name:"MuiTooltip",slot:"Arrow",overridesResolver:(o,e)=>e.arrow})(pe(({theme:o})=>({overflow:"hidden",position:"absolute",width:"1em",height:"0.71em",boxSizing:"border-box",color:o.vars?o.vars.palette.Tooltip.bg:Rt(o.palette.grey[700],.9),"&::before":{content:'""',margin:"auto",display:"block",width:"100%",height:"100%",backgroundColor:"currentColor",transform:"rotate(45deg)"}})));let W=!1;const ke=new co;let M={x:0,y:0};function B(o,e){return(s,...m)=>{e&&e(s,...m),o(s,...m)}}const vo=n.forwardRef(function(e,s){const m=oo({props:e,name:"MuiTooltip"}),{arrow:R=!1,children:T,classes:ie,components:C={},componentsProps:I={},describeChild:Ct=!1,disableFocusListener:It=!1,disableHoverListener:le=!1,disableInteractive:Pt=!1,disableTouchListener:Lt=!1,enterDelay:ce=100,enterNextDelay:ue=0,enterTouchDelay:Ot=700,followCursor:Y=!1,id:$t,leaveDelay:me=0,leaveTouchDelay:kt=1500,onClose:de,onOpen:he,open:At,placement:ge="bottom",PopperComponent:fe,PopperProps:d={},slotProps:h={},slots:Et={},title:b,TransitionComponent:jt,TransitionProps:Wt,...be}=m,g=n.isValidElement(T)?T:a.jsx("span",{children:T}),Te=ro(),Bt=fo(),[S,Se]=n.useState(),[Q,Ft]=n.useState(null),P=n.useRef(!1),Z=Pt||Y,xe=E(),ee=E(),L=E(),ye=E(),[qt,we]=ao({controlled:At,default:!1,name:"Tooltip",state:"open"});let u=qt;const te=so($t),x=n.useRef(),O=Le(()=>{x.current!==void 0&&(document.body.style.WebkitUserSelect=x.current,x.current=void 0),ye.clear()});n.useEffect(()=>O,[O]);const Me=t=>{ke.clear(),W=!0,we(!0),he&&!u&&he(t)},$=Le(t=>{ke.start(800+me,()=>{W=!1}),we(!1),de&&u&&de(t),xe.start(Te.transitions.duration.shortest,()=>{P.current=!1})}),k=t=>{P.current&&t.type!=="touchstart"||(S&&S.removeAttribute("title"),ee.clear(),L.clear(),ce||W&&ue?ee.start(W?ue:ce,()=>{Me(t)}):Me(t))},oe=t=>{ee.clear(),L.start(me,()=>{$(t)})},[,ve]=n.useState(!1),Re=t=>{$e(t.target)||(ve(!1),oe(t))},Ce=t=>{S||Se(t.currentTarget),$e(t.target)&&(ve(!0),k(t))},Ie=t=>{P.current=!0;const c=g.props;c.onTouchStart&&c.onTouchStart(t)},Dt=t=>{Ie(t),L.clear(),xe.clear(),O(),x.current=document.body.style.WebkitUserSelect,document.body.style.WebkitUserSelect="none",ye.start(Ot,()=>{document.body.style.WebkitUserSelect=x.current,k(t)})},Nt=t=>{g.props.onTouchEnd&&g.props.onTouchEnd(t),O(),L.start(kt,()=>{$(t)})};n.useEffect(()=>{if(!u)return;function t(c){c.key==="Escape"&&$(c)}return document.addEventListener("keydown",t),()=>{document.removeEventListener("keydown",t)}},[$,u]);const zt=no(po(g),Se,s);!b&&b!==0&&(u=!1);const re=n.useRef(),Ut=t=>{const c=g.props;c.onMouseMove&&c.onMouseMove(t),M={x:t.clientX,y:t.clientY},re.current&&re.current.update()},y={},ae=typeof b=="string";Ct?(y.title=!u&&ae&&!le?b:null,y["aria-describedby"]=u?te:null):(y["aria-label"]=ae?b:null,y["aria-labelledby"]=u&&!ae?te:null);const i={...y,...be,...g.props,className:Oe(be.className,g.props.className),onTouchStart:Ie,ref:zt,...Y?{onMouseMove:Ut}:{}},w={};Lt||(i.onTouchStart=Dt,i.onTouchEnd=Nt),le||(i.onMouseOver=B(k,i.onMouseOver),i.onMouseLeave=B(oe,i.onMouseLeave),Z||(w.onMouseOver=k,w.onMouseLeave=oe)),It||(i.onFocus=B(Ce,i.onFocus),i.onBlur=B(Re,i.onBlur),Z||(w.onFocus=Ce,w.onBlur=Re));const f={...m,isRtl:Bt,arrow:R,disableInteractive:Z,placement:ge,PopperComponentProp:fe,touch:P.current},l=typeof h.popper=="function"?h.popper(f):h.popper,Ht=n.useMemo(()=>{var c,Pe;let t=[{name:"arrow",enabled:!!Q,options:{element:Q,padding:4}}];return(c=d.popperOptions)!=null&&c.modifiers&&(t=t.concat(d.popperOptions.modifiers)),(Pe=l==null?void 0:l.popperOptions)!=null&&Pe.modifiers&&(t=t.concat(l.popperOptions.modifiers)),{...d.popperOptions,...l==null?void 0:l.popperOptions,modifiers:t}},[Q,d.popperOptions,l==null?void 0:l.popperOptions]),se=xo(f),Vt=typeof h.transition=="function"?h.transition(f):h.transition,A={slots:{popper:C.Popper,transition:C.Transition??jt,tooltip:C.Tooltip,arrow:C.Arrow,...Et},slotProps:{arrow:h.arrow??I.arrow,popper:{...d,...l??I.popper},tooltip:h.tooltip??I.tooltip,transition:{...Wt,...Vt??I.transition}}},[_t,Kt]=j("popper",{elementType:yo,externalForwardedProps:A,ownerState:f,className:Oe(se.popper,d==null?void 0:d.className)}),[Gt,Jt]=j("transition",{elementType:io,externalForwardedProps:A,ownerState:f}),[Xt,Yt]=j("tooltip",{elementType:wo,className:se.tooltip,externalForwardedProps:A,ownerState:f}),[Qt,Zt]=j("arrow",{elementType:Mo,className:se.arrow,externalForwardedProps:A,ownerState:f,ref:Ft});return a.jsxs(n.Fragment,{children:[n.cloneElement(g,i),a.jsx(_t,{as:fe??yt,placement:ge,anchorEl:Y?{getBoundingClientRect:()=>({top:M.y,left:M.x,right:M.x,bottom:M.y,width:0,height:0})}:S,popperRef:re,open:S?u:!1,id:te,transition:!0,...w,...Kt,popperOptions:Ht,children:({TransitionProps:t})=>a.jsx(Gt,{timeout:Te.transitions.duration.shorter,...t,...Jt,children:a.jsxs(Xt,{...Yt,children:[b,R?a.jsx(Qt,{...Zt}):null]})})})]})}),Ro=wt(a.jsx("path",{d:"M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7m0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5"}),"LocationOn"),Co=wt([a.jsx("path",{d:"M19.03 3.56c-1.67-1.39-3.74-2.3-6.03-2.51v2.01c1.73.19 3.31.88 4.61 1.92zM11 3.06V1.05c-2.29.2-4.36 1.12-6.03 2.51l1.42 1.42C7.69 3.94 9.27 3.25 11 3.06M4.98 6.39 3.56 4.97C2.17 6.64 1.26 8.71 1.05 11h2.01c.19-1.73.88-3.31 1.92-4.61M20.94 11h2.01c-.21-2.29-1.12-4.36-2.51-6.03l-1.42 1.42c1.04 1.3 1.73 2.88 1.92 4.61M7 12l3.44 1.56L12 17l1.56-3.44L17 12l-3.44-1.56L12 7l-1.56 3.44z"},"0"),a.jsx("path",{d:"M12 21c-3.11 0-5.85-1.59-7.46-4H7v-2H1v6h2v-2.7c1.99 2.84 5.27 4.7 9 4.7 4.87 0 9-3.17 10.44-7.56l-1.96-.45C19.25 18.48 15.92 21 12 21"},"1")],"AutoMode"),jo={title:"Select/Autocomplete",component:Mt,decorators:[Io]};function Io(o){return a.jsxs(uo,{onSuccess:mo("form-submit"),defaultValues:{preselect:{id:2,label:"Second"},"multi-preselect":[{id:2,label:"Second"}],"match-id":2,"match-id-multi":[2,3]},children:[a.jsx(o,{}),a.jsx(go,{marginTop:2,children:a.jsx(ho,{type:"submit",children:"Submit"})})]})}const p=[{label:"First",id:1},{label:"Second",id:2},{label:"Third",id:3},{label:"Four",id:4}],F={args:{name:"basic",options:p}},q={args:{name:"basic",options:p,autocompleteProps:{disabled:!0}}},D={args:{name:"preselect",options:p}},N={args:{name:"multi",options:p,multiple:!0}},z={args:{label:"Multiple Required",name:"multi-required",options:p,multiple:!0,required:!0}},U={args:{label:"Multiple Required Custom",name:"multi-required-custom",options:p,multiple:!0,rules:{required:"Please fill out."}}},H={args:{name:"multi-preselect",options:p,multiple:!0}},V={args:{name:"multicheck",options:p,multiple:!0,showCheckbox:!0}},_={args:{label:"Loading State",name:"loading",options:[],multiple:!0,showCheckbox:!0,loading:!0}},K={args:{label:"Loading State",name:"loading",options:[],multiple:!0,showCheckbox:!0,loading:!0,loadingIndicator:a.jsx(Co,{})}},G={args:{label:"Match ID",name:"match-id",options:p,matchId:!0}},J={args:{label:"Match ID",name:"match-id-multi",options:p,multiple:!0,matchId:!0}},X={args:{name:"custom-input",options:p,textFieldProps:{placeholder:"Some placeholder",InputProps:{startAdornment:a.jsx(Ro,{}),endAdornment:null}}}},v=()=>a.jsx(vo,{title:"Some Tooltip",children:a.jsx("div",{children:a.jsx(Mt,{options:p,name:"tooltip",label:"With Tooltip"})})});v.__docgenInfo={description:"",methods:[],displayName:"WithTooltip"};var Ae,Ee,je;F.parameters={...F.parameters,docs:{...(Ae=F.parameters)==null?void 0:Ae.docs,source:{originalSource:`{
  args: {
    name: 'basic',
    options
  }
}`,...(je=(Ee=F.parameters)==null?void 0:Ee.docs)==null?void 0:je.source}}};var We,Be,Fe;q.parameters={...q.parameters,docs:{...(We=q.parameters)==null?void 0:We.docs,source:{originalSource:`{
  args: {
    name: 'basic',
    options,
    autocompleteProps: {
      disabled: true
    }
  }
}`,...(Fe=(Be=q.parameters)==null?void 0:Be.docs)==null?void 0:Fe.source}}};var qe,De,Ne;D.parameters={...D.parameters,docs:{...(qe=D.parameters)==null?void 0:qe.docs,source:{originalSource:`{
  args: {
    name: 'preselect',
    options
  }
}`,...(Ne=(De=D.parameters)==null?void 0:De.docs)==null?void 0:Ne.source}}};var ze,Ue,He;N.parameters={...N.parameters,docs:{...(ze=N.parameters)==null?void 0:ze.docs,source:{originalSource:`{
  args: {
    name: 'multi',
    options,
    multiple: true
  }
}`,...(He=(Ue=N.parameters)==null?void 0:Ue.docs)==null?void 0:He.source}}};var Ve,_e,Ke;z.parameters={...z.parameters,docs:{...(Ve=z.parameters)==null?void 0:Ve.docs,source:{originalSource:`{
  args: {
    label: 'Multiple Required',
    name: 'multi-required',
    options,
    multiple: true,
    required: true
  }
}`,...(Ke=(_e=z.parameters)==null?void 0:_e.docs)==null?void 0:Ke.source}}};var Ge,Je,Xe;U.parameters={...U.parameters,docs:{...(Ge=U.parameters)==null?void 0:Ge.docs,source:{originalSource:`{
  args: {
    label: 'Multiple Required Custom',
    name: 'multi-required-custom',
    options,
    multiple: true,
    rules: {
      required: 'Please fill out.'
    }
  }
}`,...(Xe=(Je=U.parameters)==null?void 0:Je.docs)==null?void 0:Xe.source}}};var Ye,Qe,Ze;H.parameters={...H.parameters,docs:{...(Ye=H.parameters)==null?void 0:Ye.docs,source:{originalSource:`{
  args: {
    name: 'multi-preselect',
    options,
    multiple: true
  }
}`,...(Ze=(Qe=H.parameters)==null?void 0:Qe.docs)==null?void 0:Ze.source}}};var et,tt,ot;V.parameters={...V.parameters,docs:{...(et=V.parameters)==null?void 0:et.docs,source:{originalSource:`{
  args: {
    name: 'multicheck',
    options,
    multiple: true,
    showCheckbox: true
  }
}`,...(ot=(tt=V.parameters)==null?void 0:tt.docs)==null?void 0:ot.source}}};var rt,at,st;_.parameters={..._.parameters,docs:{...(rt=_.parameters)==null?void 0:rt.docs,source:{originalSource:`{
  args: {
    label: 'Loading State',
    name: 'loading',
    options: [],
    multiple: true,
    showCheckbox: true,
    loading: true
  }
}`,...(st=(at=_.parameters)==null?void 0:at.docs)==null?void 0:st.source}}};var nt,pt,it;K.parameters={...K.parameters,docs:{...(nt=K.parameters)==null?void 0:nt.docs,source:{originalSource:`{
  args: {
    label: 'Loading State',
    name: 'loading',
    options: [],
    multiple: true,
    showCheckbox: true,
    loading: true,
    loadingIndicator: <AutoModeIcon />
  }
}`,...(it=(pt=K.parameters)==null?void 0:pt.docs)==null?void 0:it.source}}};var lt,ct,ut;G.parameters={...G.parameters,docs:{...(lt=G.parameters)==null?void 0:lt.docs,source:{originalSource:`{
  args: {
    label: 'Match ID',
    name: 'match-id',
    options,
    matchId: true
  }
}`,...(ut=(ct=G.parameters)==null?void 0:ct.docs)==null?void 0:ut.source}}};var mt,dt,ht;J.parameters={...J.parameters,docs:{...(mt=J.parameters)==null?void 0:mt.docs,source:{originalSource:`{
  args: {
    label: 'Match ID',
    name: 'match-id-multi',
    options,
    multiple: true,
    matchId: true
  }
}`,...(ht=(dt=J.parameters)==null?void 0:dt.docs)==null?void 0:ht.source}}};var gt,ft,bt;X.parameters={...X.parameters,docs:{...(gt=X.parameters)==null?void 0:gt.docs,source:{originalSource:`{
  args: {
    name: 'custom-input',
    options,
    textFieldProps: {
      placeholder: 'Some placeholder',
      InputProps: {
        startAdornment: <LocationIcon />,
        endAdornment: null
      }
    }
  }
}`,...(bt=(ft=X.parameters)==null?void 0:ft.docs)==null?void 0:bt.source}}};var Tt,St,xt;v.parameters={...v.parameters,docs:{...(Tt=v.parameters)==null?void 0:Tt.docs,source:{originalSource:`() => <Tooltip title={'Some Tooltip'}>
    <div>
      <AutocompleteElement options={options} name={'tooltip'} label={'With Tooltip'} />
    </div>
  </Tooltip>`,...(xt=(St=v.parameters)==null?void 0:St.docs)==null?void 0:xt.source}}};const Wo=["Basic","Disabled","BasicPreSelect","MultiSelect","MultiSelectRequired","MultiSelectRequiredCustom","MultiSelectPredefined","MultiSelectCheckbox","Loading","WithCustomLoading","MatchId","MatchIdMulti","CustomInput","WithTooltip"];export{F as Basic,D as BasicPreSelect,X as CustomInput,q as Disabled,_ as Loading,G as MatchId,J as MatchIdMulti,N as MultiSelect,V as MultiSelectCheckbox,H as MultiSelectPredefined,z as MultiSelectRequired,U as MultiSelectRequiredCustom,K as WithCustomLoading,v as WithTooltip,Wo as __namedExportsOrder,jo as default};
