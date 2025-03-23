import{C as y,r as c,j as m}from"./index-auPOeGcf.js";var b={exports:{}};/*!
	Copyright (c) 2018 Jed Watson.
	Licensed under the MIT License (MIT), see
	http://jedwatson.github.io/classnames
*/(function(t){(function(){var e={}.hasOwnProperty;function o(){for(var n="",s=0;s<arguments.length;s++){var i=arguments[s];i&&(n=u(n,r(i)))}return n}function r(n){if(typeof n=="string"||typeof n=="number")return n;if(typeof n!="object")return"";if(Array.isArray(n))return o.apply(null,n);if(n.toString!==Object.prototype.toString&&!n.toString.toString().includes("[native code]"))return n.toString();var s="";for(var i in n)e.call(n,i)&&n[i]&&(s=u(s,i));return s}function u(n,s){return s?n?n+" "+s:n+s:n}t.exports?(o.default=o,t.exports=o):window.classNames=o})()})(b);var P=b.exports;const j=y(P),C=["xxl","xl","lg","md","sm","xs"],v="xs",l=c.createContext({prefixes:{},breakpoints:C,minBreakpoint:v}),{Consumer:T,Provider:N}=l;function O(t,e){const{prefixes:o}=c.useContext(l);return t||o[e]||e}function R(){const{breakpoints:t}=c.useContext(l);return t}function $(){const{minBreakpoint:t}=c.useContext(l);return t}const E=["as","disabled"];function w(t,e){if(t==null)return{};var o={};for(var r in t)if({}.hasOwnProperty.call(t,r)){if(e.indexOf(r)>=0)continue;o[r]=t[r]}return o}function D(t){return!t||t.trim()==="#"}function B({tagName:t,disabled:e,href:o,target:r,rel:u,role:n,onClick:s,tabIndex:i=0,type:x}){t||(o!=null||r!=null||u!=null?t="a":t="button");const f={tagName:t};if(t==="button")return[{type:x||"button",disabled:e},f];const p=a=>{if((e||t==="a"&&D(o))&&a.preventDefault(),e){a.stopPropagation();return}s==null||s(a)},d=a=>{a.key===" "&&(a.preventDefault(),p(a))};return t==="a"&&(o||(o="#"),e&&(o=void 0)),[{role:n??"button",disabled:void 0,tabIndex:e?void 0:i,href:o,target:t==="a"?r:void 0,"aria-disabled":e||void 0,rel:t==="a"?u:void 0,onClick:p,onKeyDown:d},f]}const k=c.forwardRef((t,e)=>{let{as:o,disabled:r}=t,u=w(t,E);const[n,{tagName:s}]=B(Object.assign({tagName:o,disabled:r},u));return m.jsx(s,Object.assign({},u,n,{ref:e}))});k.displayName="Button";const A=c.forwardRef(({as:t,bsPrefix:e,variant:o="primary",size:r,active:u=!1,disabled:n=!1,className:s,...i},x)=>{const f=O(e,"btn"),[p,{tagName:d}]=B({tagName:t,disabled:n,...i}),a=d;return m.jsx(a,{...p,...i,ref:x,disabled:n,className:j(s,f,u&&"active",o&&`${f}-${o}`,r&&`${f}-${r}`,i.href&&n&&"disabled")})});A.displayName="Button";export{A as B,R as a,$ as b,j as c,O as u};
