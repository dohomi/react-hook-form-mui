import{a as Ho,b as Ko,_ as St,j as s,i as Go}from"./createTheme-CR3oTDRN.js";import{t as yt,v as Rt,w as ue,P as Jo,x as _t,y as It,z as Lt,A,D as Ot,E as $t,F as Ze,H as jt,J as kt,q as E,K as eo,L as D,M as At,N as Et,R as Xo,r as Yo,k as Dt,a as qt,B as Ft}from"./chunk-MZXVCX43-BodnD1WV.js";import{B as Bt}from"./Box-CGA881pk.js";import{_ as r}from"./extends-CCbyfPlC.js";import{r as i}from"./index-CTjT7uj6.js";import"./assertThisInitialized-Du85iT5g.js";import"./index-9r8iugjR.js";import"./v4-CQkTLCs1.js";function Wt(o){return Rt("MuiTooltip",o)}const m=yt("MuiTooltip",["popper","popperInteractive","popperArrow","popperClose","tooltip","tooltipArrow","touch","tooltipPlacementLeft","tooltipPlacementRight","tooltipPlacementTop","tooltipPlacementBottom","arrow"]),Nt=["arrow","children","classes","components","componentsProps","describeChild","disableFocusListener","disableHoverListener","disableInteractive","disableTouchListener","enterDelay","enterNextDelay","enterTouchDelay","followCursor","id","leaveDelay","leaveTouchDelay","onClose","onOpen","open","placement","PopperComponent","PopperProps","slotProps","slots","title","TransitionComponent","TransitionProps"];function zt(o){return Math.round(o*1e5)/1e5}const Ut=o=>{const{classes:t,disableInteractive:n,arrow:u,touch:S,placement:y}=o,R={popper:["popper",!n&&"popperInteractive",u&&"popperArrow"],tooltip:["tooltip",u&&"tooltipArrow",S&&"touch",`tooltipPlacement${Ho(y.split("-")[0])}`],arrow:["arrow"]};return At(R,Wt,t)},Vt=ue(Jo,{name:"MuiTooltip",slot:"Popper",overridesResolver:(o,t)=>{const{ownerState:n}=o;return[t.popper,!n.disableInteractive&&t.popperInteractive,n.arrow&&t.popperArrow,!n.open&&t.popperClose]}})(({theme:o,ownerState:t,open:n})=>r({zIndex:(o.vars||o).zIndex.tooltip,pointerEvents:"none"},!t.disableInteractive&&{pointerEvents:"auto"},!n&&{pointerEvents:"none"},t.arrow&&{[`&[data-popper-placement*="bottom"] .${m.arrow}`]:{top:0,marginTop:"-0.71em","&::before":{transformOrigin:"0 100%"}},[`&[data-popper-placement*="top"] .${m.arrow}`]:{bottom:0,marginBottom:"-0.71em","&::before":{transformOrigin:"100% 0"}},[`&[data-popper-placement*="right"] .${m.arrow}`]:r({},t.isRtl?{right:0,marginRight:"-0.71em"}:{left:0,marginLeft:"-0.71em"},{height:"1em",width:"0.71em","&::before":{transformOrigin:"100% 100%"}}),[`&[data-popper-placement*="left"] .${m.arrow}`]:r({},t.isRtl?{left:0,marginLeft:"-0.71em"}:{right:0,marginRight:"-0.71em"},{height:"1em",width:"0.71em","&::before":{transformOrigin:"0 0"}})})),Ht=ue("div",{name:"MuiTooltip",slot:"Tooltip",overridesResolver:(o,t)=>{const{ownerState:n}=o;return[t.tooltip,n.touch&&t.touch,n.arrow&&t.tooltipArrow,t[`tooltipPlacement${Ho(n.placement.split("-")[0])}`]]}})(({theme:o,ownerState:t})=>r({backgroundColor:o.vars?o.vars.palette.Tooltip.bg:Ko(o.palette.grey[700],.92),borderRadius:(o.vars||o).shape.borderRadius,color:(o.vars||o).palette.common.white,fontFamily:o.typography.fontFamily,padding:"4px 8px",fontSize:o.typography.pxToRem(11),maxWidth:300,margin:2,wordWrap:"break-word",fontWeight:o.typography.fontWeightMedium},t.arrow&&{position:"relative",margin:0},t.touch&&{padding:"8px 16px",fontSize:o.typography.pxToRem(14),lineHeight:`${zt(16/14)}em`,fontWeight:o.typography.fontWeightRegular},{[`.${m.popper}[data-popper-placement*="left"] &`]:r({transformOrigin:"right center"},t.isRtl?r({marginLeft:"14px"},t.touch&&{marginLeft:"24px"}):r({marginRight:"14px"},t.touch&&{marginRight:"24px"})),[`.${m.popper}[data-popper-placement*="right"] &`]:r({transformOrigin:"left center"},t.isRtl?r({marginRight:"14px"},t.touch&&{marginRight:"24px"}):r({marginLeft:"14px"},t.touch&&{marginLeft:"24px"})),[`.${m.popper}[data-popper-placement*="top"] &`]:r({transformOrigin:"center bottom",marginBottom:"14px"},t.touch&&{marginBottom:"24px"}),[`.${m.popper}[data-popper-placement*="bottom"] &`]:r({transformOrigin:"center top",marginTop:"14px"},t.touch&&{marginTop:"24px"})})),Kt=ue("span",{name:"MuiTooltip",slot:"Arrow",overridesResolver:(o,t)=>t.arrow})(({theme:o})=>({overflow:"hidden",position:"absolute",width:"1em",height:"0.71em",boxSizing:"border-box",color:o.vars?o.vars.palette.Tooltip.bg:Ko(o.palette.grey[700],.9),"&::before":{content:'""',margin:"auto",display:"block",width:"100%",height:"100%",backgroundColor:"currentColor",transform:"rotate(45deg)"}}));let q=!1;const oo=new Et;let w={x:0,y:0};function F(o,t){return(n,...u)=>{t&&t(n,...u),o(n,...u)}}const Gt=i.forwardRef(function(t,n){var u,S,y,R,he,fe,ge,be,ve,Te,xe,Pe,Me,we,Ce,Se,ye,Re,_e;const Z=_t({props:t,name:"MuiTooltip"}),{arrow:Ie=!1,children:ee,components:_={},componentsProps:h={},describeChild:et=!1,disableFocusListener:ot=!1,disableHoverListener:Le=!1,disableInteractive:tt=!1,disableTouchListener:rt=!1,enterDelay:Oe=100,enterNextDelay:$e=0,enterTouchDelay:st=700,followCursor:oe=!1,id:nt,leaveDelay:je=0,leaveTouchDelay:at=1500,onClose:ke,onOpen:Ae,open:it,placement:Ee="bottom",PopperComponent:te,PopperProps:f={},slotProps:g={},slots:I={},title:b,TransitionComponent:lt=eo,TransitionProps:pt}=Z,De=St(Z,Nt),d=i.isValidElement(ee)?ee:s.jsx("span",{children:ee}),qe=It(),ct=Lt(),[v,Fe]=i.useState(),[re,ut]=i.useState(null),L=i.useRef(!1),se=tt||oe,Be=A(),ne=A(),O=A(),We=A(),[dt,Ne]=Ot({controlled:it,default:!1,name:"Tooltip",state:"open"});let c=dt;const ae=$t(nt),T=i.useRef(),$=Ze(()=>{T.current!==void 0&&(document.body.style.WebkitUserSelect=T.current,T.current=void 0),We.clear()});i.useEffect(()=>$,[$]);const ze=e=>{oo.clear(),q=!0,Ne(!0),Ae&&!c&&Ae(e)},j=Ze(e=>{oo.start(800+je,()=>{q=!1}),Ne(!1),ke&&c&&ke(e),Be.start(qe.transitions.duration.shortest,()=>{L.current=!1})}),k=e=>{L.current&&e.type!=="touchstart"||(v&&v.removeAttribute("title"),ne.clear(),O.clear(),Oe||q&&$e?ne.start(q?$e:Oe,()=>{ze(e)}):ze(e))},ie=e=>{ne.clear(),O.start(je,()=>{j(e)})},{isFocusVisibleRef:Ue,onBlur:mt,onFocus:ht,ref:ft}=jt(),[,Ve]=i.useState(!1),He=e=>{mt(e),Ue.current===!1&&(Ve(!1),ie(e))},Ke=e=>{v||Fe(e.currentTarget),ht(e),Ue.current===!0&&(Ve(!0),k(e))},Ge=e=>{L.current=!0;const a=d.props;a.onTouchStart&&a.onTouchStart(e)},gt=e=>{Ge(e),O.clear(),Be.clear(),$(),T.current=document.body.style.WebkitUserSelect,document.body.style.WebkitUserSelect="none",We.start(st,()=>{document.body.style.WebkitUserSelect=T.current,k(e)})},bt=e=>{d.props.onTouchEnd&&d.props.onTouchEnd(e),$(),O.start(at,()=>{j(e)})};i.useEffect(()=>{if(!c)return;function e(a){(a.key==="Escape"||a.key==="Esc")&&j(a)}return document.addEventListener("keydown",e),()=>{document.removeEventListener("keydown",e)}},[j,c]);const vt=kt(d.ref,ft,Fe,n);!b&&b!==0&&(c=!1);const le=i.useRef(),Tt=e=>{const a=d.props;a.onMouseMove&&a.onMouseMove(e),w={x:e.clientX,y:e.clientY},le.current&&le.current.update()},x={},pe=typeof b=="string";et?(x.title=!c&&pe&&!Le?b:null,x["aria-describedby"]=c?ae:null):(x["aria-label"]=pe?b:null,x["aria-labelledby"]=c&&!pe?ae:null);const p=r({},x,De,d.props,{className:E(De.className,d.props.className),onTouchStart:Ge,ref:vt},oe?{onMouseMove:Tt}:{}),P={};rt||(p.onTouchStart=gt,p.onTouchEnd=bt),Le||(p.onMouseOver=F(k,p.onMouseOver),p.onMouseLeave=F(ie,p.onMouseLeave),se||(P.onMouseOver=k,P.onMouseLeave=ie)),ot||(p.onFocus=F(Ke,p.onFocus),p.onBlur=F(He,p.onBlur),se||(P.onFocus=Ke,P.onBlur=He));const xt=i.useMemo(()=>{var e;let a=[{name:"arrow",enabled:!!re,options:{element:re,padding:4}}];return(e=f.popperOptions)!=null&&e.modifiers&&(a=a.concat(f.popperOptions.modifiers)),r({},f.popperOptions,{modifiers:a})},[re,f]),M=r({},Z,{isRtl:ct,arrow:Ie,disableInteractive:se,placement:Ee,PopperComponentProp:te,touch:L.current}),ce=Ut(M),Je=(u=(S=I.popper)!=null?S:_.Popper)!=null?u:Vt,Xe=(y=(R=(he=I.transition)!=null?he:_.Transition)!=null?R:lt)!=null?y:eo,Ye=(fe=(ge=I.tooltip)!=null?ge:_.Tooltip)!=null?fe:Ht,Qe=(be=(ve=I.arrow)!=null?ve:_.Arrow)!=null?be:Kt,Pt=D(Je,r({},f,(Te=g.popper)!=null?Te:h.popper,{className:E(ce.popper,f==null?void 0:f.className,(xe=(Pe=g.popper)!=null?Pe:h.popper)==null?void 0:xe.className)}),M),Mt=D(Xe,r({},pt,(Me=g.transition)!=null?Me:h.transition),M),wt=D(Ye,r({},(we=g.tooltip)!=null?we:h.tooltip,{className:E(ce.tooltip,(Ce=(Se=g.tooltip)!=null?Se:h.tooltip)==null?void 0:Ce.className)}),M),Ct=D(Qe,r({},(ye=g.arrow)!=null?ye:h.arrow,{className:E(ce.arrow,(Re=(_e=g.arrow)!=null?_e:h.arrow)==null?void 0:Re.className)}),M);return s.jsxs(i.Fragment,{children:[i.cloneElement(d,p),s.jsx(Je,r({as:te??Jo,placement:Ee,anchorEl:oe?{getBoundingClientRect:()=>({top:w.y,left:w.x,right:w.x,bottom:w.y,width:0,height:0})}:v,popperRef:le,open:v?c:!1,id:ae,transition:!0},P,Pt,{popperOptions:xt,children:({TransitionProps:e})=>s.jsx(Xe,r({timeout:qe.transitions.duration.shorter},e,Mt,{children:s.jsxs(Ye,r({},wt,{children:[b,Ie?s.jsx(Qe,r({},Ct,{ref:ut})):null]}))}))}))]})});var de={},Jt=Go;Object.defineProperty(de,"__esModule",{value:!0});var Qo=de.default=void 0,Xt=Jt(Xo()),Yt=s;Qo=de.default=(0,Xt.default)((0,Yt.jsx)("path",{d:"M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7m0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5"}),"LocationOn");var me={},Qt=Go;Object.defineProperty(me,"__esModule",{value:!0});var Zo=me.default=void 0,Zt=Qt(Xo()),to=s;Zo=me.default=(0,Zt.default)([(0,to.jsx)("path",{d:"M19.03 3.56c-1.67-1.39-3.74-2.3-6.03-2.51v2.01c1.73.19 3.31.88 4.61 1.92zM11 3.06V1.05c-2.29.2-4.36 1.12-6.03 2.51l1.42 1.42C7.69 3.94 9.27 3.25 11 3.06M4.98 6.39 3.56 4.97C2.17 6.64 1.26 8.71 1.05 11h2.01c.19-1.73.88-3.31 1.92-4.61M20.94 11h2.01c-.21-2.29-1.12-4.36-2.51-6.03l-1.42 1.42c1.04 1.3 1.73 2.88 1.92 4.61M7 12l3.44 1.56L12 17l1.56-3.44L17 12l-3.44-1.56L12 7l-1.56 3.44z"},"0"),(0,to.jsx)("path",{d:"M12 21c-3.11 0-5.85-1.59-7.46-4H7v-2H1v6h2v-2.7c1.99 2.84 5.27 4.7 9 4.7 4.87 0 9-3.17 10.44-7.56l-1.96-.45C19.25 18.48 15.92 21 12 21"},"1")],"AutoMode");const pr={title:"Autocomplete",component:Yo,decorators:[er]};function er(o){return s.jsxs(Dt,{onSuccess:qt("form-submit"),defaultValues:{preselect:{id:2,label:"Second"},"multi-preselect":[{id:2,label:"Second"}],"match-id":2,"match-id-multi":[2,3]},children:[s.jsx(o,{}),s.jsx(Bt,{marginTop:2,children:s.jsx(Ft,{type:"submit",children:"Submit"})})]})}const l=[{label:"First",id:1},{label:"Second",id:2},{label:"Third",id:3},{label:"Four",id:4}],B={args:{name:"basic",options:l}},W={args:{name:"basic",options:l,autocompleteProps:{disabled:!0}}},N={args:{name:"preselect",options:l}},z={args:{name:"multi",options:l,multiple:!0}},U={args:{label:"Multiple Required",name:"multi-required",options:l,multiple:!0,required:!0}},V={args:{label:"Multiple Required Custom",name:"multi-required-custom",options:l,multiple:!0,rules:{required:"Please fill out."}}},H={args:{name:"multi-preselect",options:l,multiple:!0}},K={args:{name:"multicheck",options:l,multiple:!0,showCheckbox:!0}},G={args:{label:"Loading State",name:"loading",options:[],multiple:!0,showCheckbox:!0,loading:!0}},J={args:{label:"Loading State",name:"loading",options:[],multiple:!0,showCheckbox:!0,loading:!0,loadingIndicator:s.jsx(Zo,{})}},X={args:{label:"Match ID",name:"match-id",options:l,matchId:!0}},Y={args:{label:"Match ID",name:"match-id-multi",options:l,multiple:!0,matchId:!0}},Q={args:{name:"custom-input",options:l,textFieldProps:{placeholder:"Some placeholder",InputProps:{startAdornment:s.jsx(Qo,{}),endAdornment:null}}}},C=()=>s.jsx(Gt,{title:"Some Tooltip",children:s.jsx("div",{children:s.jsx(Yo,{options:l,name:"tooltip",label:"With Tooltip"})})});C.__docgenInfo={description:"",methods:[],displayName:"WithTooltip"};var ro,so,no;B.parameters={...B.parameters,docs:{...(ro=B.parameters)==null?void 0:ro.docs,source:{originalSource:`{
  args: {
    name: 'basic',
    options
  }
}`,...(no=(so=B.parameters)==null?void 0:so.docs)==null?void 0:no.source}}};var ao,io,lo;W.parameters={...W.parameters,docs:{...(ao=W.parameters)==null?void 0:ao.docs,source:{originalSource:`{
  args: {
    name: 'basic',
    options,
    autocompleteProps: {
      disabled: true
    }
  }
}`,...(lo=(io=W.parameters)==null?void 0:io.docs)==null?void 0:lo.source}}};var po,co,uo;N.parameters={...N.parameters,docs:{...(po=N.parameters)==null?void 0:po.docs,source:{originalSource:`{
  args: {
    name: 'preselect',
    options
  }
}`,...(uo=(co=N.parameters)==null?void 0:co.docs)==null?void 0:uo.source}}};var mo,ho,fo;z.parameters={...z.parameters,docs:{...(mo=z.parameters)==null?void 0:mo.docs,source:{originalSource:`{
  args: {
    name: 'multi',
    options,
    multiple: true
  }
}`,...(fo=(ho=z.parameters)==null?void 0:ho.docs)==null?void 0:fo.source}}};var go,bo,vo;U.parameters={...U.parameters,docs:{...(go=U.parameters)==null?void 0:go.docs,source:{originalSource:`{
  args: {
    label: 'Multiple Required',
    name: 'multi-required',
    options,
    multiple: true,
    required: true
  }
}`,...(vo=(bo=U.parameters)==null?void 0:bo.docs)==null?void 0:vo.source}}};var To,xo,Po;V.parameters={...V.parameters,docs:{...(To=V.parameters)==null?void 0:To.docs,source:{originalSource:`{
  args: {
    label: 'Multiple Required Custom',
    name: 'multi-required-custom',
    options,
    multiple: true,
    rules: {
      required: 'Please fill out.'
    }
  }
}`,...(Po=(xo=V.parameters)==null?void 0:xo.docs)==null?void 0:Po.source}}};var Mo,wo,Co;H.parameters={...H.parameters,docs:{...(Mo=H.parameters)==null?void 0:Mo.docs,source:{originalSource:`{
  args: {
    name: 'multi-preselect',
    options,
    multiple: true
  }
}`,...(Co=(wo=H.parameters)==null?void 0:wo.docs)==null?void 0:Co.source}}};var So,yo,Ro;K.parameters={...K.parameters,docs:{...(So=K.parameters)==null?void 0:So.docs,source:{originalSource:`{
  args: {
    name: 'multicheck',
    options,
    multiple: true,
    showCheckbox: true
  }
}`,...(Ro=(yo=K.parameters)==null?void 0:yo.docs)==null?void 0:Ro.source}}};var _o,Io,Lo;G.parameters={...G.parameters,docs:{...(_o=G.parameters)==null?void 0:_o.docs,source:{originalSource:`{
  args: {
    label: 'Loading State',
    name: 'loading',
    options: [],
    multiple: true,
    showCheckbox: true,
    loading: true
  }
}`,...(Lo=(Io=G.parameters)==null?void 0:Io.docs)==null?void 0:Lo.source}}};var Oo,$o,jo;J.parameters={...J.parameters,docs:{...(Oo=J.parameters)==null?void 0:Oo.docs,source:{originalSource:`{
  args: {
    label: 'Loading State',
    name: 'loading',
    options: [],
    multiple: true,
    showCheckbox: true,
    loading: true,
    loadingIndicator: <AutoModeIcon />
  }
}`,...(jo=($o=J.parameters)==null?void 0:$o.docs)==null?void 0:jo.source}}};var ko,Ao,Eo;X.parameters={...X.parameters,docs:{...(ko=X.parameters)==null?void 0:ko.docs,source:{originalSource:`{
  args: {
    label: 'Match ID',
    name: 'match-id',
    options,
    matchId: true
  }
}`,...(Eo=(Ao=X.parameters)==null?void 0:Ao.docs)==null?void 0:Eo.source}}};var Do,qo,Fo;Y.parameters={...Y.parameters,docs:{...(Do=Y.parameters)==null?void 0:Do.docs,source:{originalSource:`{
  args: {
    label: 'Match ID',
    name: 'match-id-multi',
    options,
    multiple: true,
    matchId: true
  }
}`,...(Fo=(qo=Y.parameters)==null?void 0:qo.docs)==null?void 0:Fo.source}}};var Bo,Wo,No;Q.parameters={...Q.parameters,docs:{...(Bo=Q.parameters)==null?void 0:Bo.docs,source:{originalSource:`{
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
}`,...(No=(Wo=Q.parameters)==null?void 0:Wo.docs)==null?void 0:No.source}}};var zo,Uo,Vo;C.parameters={...C.parameters,docs:{...(zo=C.parameters)==null?void 0:zo.docs,source:{originalSource:`() => <Tooltip title={'Some Tooltip'}>
    <div>
      <AutocompleteElement options={options} name={'tooltip'} label={'With Tooltip'} />
    </div>
  </Tooltip>`,...(Vo=(Uo=C.parameters)==null?void 0:Uo.docs)==null?void 0:Vo.source}}};const cr=["Basic","Disabled","BasicPreSelect","MultiSelect","MultiSelectRequired","MultiSelectRequiredCustom","MultiSelectPredefined","MultiSelectCheckbox","Loading","WithCustomLoading","MatchId","MatchIdMulti","CustomInput","WithTooltip"];export{B as Basic,N as BasicPreSelect,Q as CustomInput,W as Disabled,G as Loading,X as MatchId,Y as MatchIdMulti,z as MultiSelect,K as MultiSelectCheckbox,H as MultiSelectPredefined,U as MultiSelectRequired,V as MultiSelectRequiredCustom,J as WithCustomLoading,C as WithTooltip,cr as __namedExportsOrder,pr as default};
