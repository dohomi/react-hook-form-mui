import{t as T,o as V,p as b,v as B,w as D,x as F,y as M,z as E}from"./chunk-MZXVCX43-WJ4Jfv3P.js";import{r as p}from"./index-BP8_t0zE.js";import{a as $,h as v,r as u,b as G,d as N,m as O,j as U,g as h}from"./createTheme-CiZYJ6wm.js";const A=T(),z=$(),I=A("div",{name:"MuiStack",slot:"Root",overridesResolver:(e,s)=>s.root});function L(e){return B({props:e,name:"MuiStack",defaultTheme:z})}function q(e,s){const n=p.Children.toArray(e).filter(Boolean);return n.reduce((a,c,t)=>(a.push(c),t<n.length-1&&a.push(p.cloneElement(s,{key:`separator-${t}`})),a),[])}const H=e=>({row:"Left","row-reverse":"Right",column:"Top","column-reverse":"Bottom"})[e],J=({ownerState:e,theme:s})=>{let n={display:"flex",flexDirection:"column",...v({theme:s},u({values:e.direction,breakpoints:s.breakpoints.values}),a=>({flexDirection:a}))};if(e.spacing){const a=G(s),c=Object.keys(s.breakpoints.values).reduce((o,r)=>((typeof e.spacing=="object"&&e.spacing[r]!=null||typeof e.direction=="object"&&e.direction[r]!=null)&&(o[r]=!0),o),{}),t=u({values:e.direction,base:c}),m=u({values:e.spacing,base:c});typeof t=="object"&&Object.keys(t).forEach((o,r,i)=>{if(!t[o]){const l=r>0?t[i[r-1]]:"column";t[o]=l}}),n=N(n,v({theme:s},m,(o,r)=>e.useFlexGap?{gap:h(a,o)}:{"& > :not(style):not(style)":{margin:0},"& > :not(style) ~ :not(style)":{[`margin${H(r?t[r]:e.direction)}`]:h(a,o)}}))}return n=O(s.breakpoints,n),n};function K(e={}){const{createStyledComponent:s=I,useThemeProps:n=L,componentName:a="MuiStack"}=e,c=()=>D({root:["root"]},o=>F(a,o),{}),t=s(J);return p.forwardRef(function(o,r){const i=n(o),f=V(i),{component:l="div",direction:k="column",spacing:x=0,divider:y,children:g,className:S,useFlexGap:j=!1,...C}=f,P={direction:k,spacing:x,useFlexGap:j},R=c();return U.jsx(t,{as:l,ownerState:P,ref:r,className:b(R.root,S),...C,children:y?q(g,y):g})})}const Y=K({createStyledComponent:M("div",{name:"MuiStack",slot:"Root",overridesResolver:(e,s)=>s.root}),useThemeProps:e=>E({props:e,name:"MuiStack"})});export{Y as S};