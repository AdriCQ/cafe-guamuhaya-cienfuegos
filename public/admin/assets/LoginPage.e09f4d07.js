import{c as E,r as y,ah as R,ai as O,H as j,h as L,d as N,g as z,s as Q,I as M,aj as T,a8 as U,ak as D,_ as H,N as K,O as Y,Q as G,R as l,S as r,al as q,am as J,an as k,T as w,Y as b,a5 as B,ao as W,ap as X,aq as Z,ar as $}from"./index.c6ca59a6.js";import{Q as ee}from"./QPage.48da01b6.js";var te=E({name:"QForm",props:{autofocus:Boolean,noErrorFocus:Boolean,noResetFocus:Boolean,greedy:Boolean,onSubmit:Function},emits:["reset","validation-success","validation-error"],setup(t,{slots:m,emit:c}){const x=z(),d=y(null);let a=0;const s=[];function g(e){const n=[],v=typeof e=="boolean"?e:t.noErrorFocus!==!0,I=++a,_=(i,o)=>{c("validation-"+(i===!0?"success":"error"),o)};for(let i=0;i<s.length;i++){const o=s[i],f=o.validate();if(typeof f.then=="function")n.push(f.then(u=>({valid:u,comp:o}),u=>({valid:!1,comp:o,err:u})));else if(f!==!0){if(t.greedy===!1)return _(!1,o),v===!0&&typeof o.focus=="function"&&o.focus(),Promise.resolve(!1);n.push({valid:!1,comp:o})}}return n.length===0?(_(!0),Promise.resolve(!0)):Promise.all(n).then(i=>{const o=i.filter(A=>A.valid!==!0);if(o.length===0)return I===a&&_(!0),!0;const{valid:f,comp:u,err:V}=o[0];return I===a&&(V!==void 0&&console.error(V),_(!1,u),v===!0&&f!==!0&&typeof u.focus=="function"&&u.focus()),!1})}function h(){a++,s.forEach(e=>{typeof e.resetValidation=="function"&&e.resetValidation()})}function S(e){e!==void 0&&Q(e);const n=a+1;g().then(v=>{n===a&&v===!0&&(t.onSubmit!==void 0?c("submit",e):e!==void 0&&e.target!==void 0&&typeof e.target.submit=="function"&&e.target.submit())})}function C(e){e!==void 0&&Q(e),c("reset"),M(()=>{h(),t.autofocus===!0&&t.noResetFocus!==!0&&p()})}function p(){T(()=>{if(d.value===null)return;const e=d.value.querySelector("[autofocus], [data-autofocus]")||Array.prototype.find.call(d.value.querySelectorAll("[tabindex]"),n=>n.tabIndex>-1);e!=null&&e.focus({preventScroll:!0})})}U(D,{bindComponent(e){s.push(e)},unbindComponent(e){const n=s.indexOf(e);n>-1&&s.splice(n,1)}});let F=!1;return R(()=>{F=!0}),O(()=>{F===!0&&t.autofocus===!0&&p()}),j(()=>{t.autofocus===!0&&p()}),Object.assign(x.proxy,{validate:g,resetValidation:h,submit:S,reset:C,focus:p,getValidationComponents:()=>s}),()=>L("form",{class:"q-form",ref:d,onSubmit:S,onReset:C},N(m.default))}});const P=t=>(Z("data-v-50970b98"),t=t(),$(),t),oe=P(()=>b("div",{class:"text-h6"},"Inicia sesi\xF3n",-1)),ae=P(()=>b("div",{class:"text-body2 text-grey-9"}," Inserta tus datos para continuar ",-1)),se={class:"row justify-center"},ne=K({__name:"LoginPage",setup(t){const m=y(null),c=y(null),x=()=>{console.log("Submit form")};return(d,a)=>(Y(),G(ee,{padding:""},{default:l(()=>[r(X,{square:"",class:"q-py-md q-mx-auto",style:{"max-width":"380px"}},{default:l(()=>[r(q,{class:"text-center"},{default:l(()=>[oe,ae]),_:1}),r(te,{onSubmit:J(x,["prevent"])},{default:l(()=>[r(q,{class:"q-py-sm q-gutter-y-md"},{default:l(()=>[r(k,{modelValue:m.value,"onUpdate:modelValue":a[0]||(a[0]=s=>m.value=s),type:"email",label:"Correo electr\xF3nico *",color:"dark",outlined:"",class:"q-mb-xs"},{prepend:l(()=>[r(w,{name:"mdi-account",color:"dark",size:"20px"})]),_:1},8,["modelValue"]),r(k,{modelValue:c.value,"onUpdate:modelValue":a[1]||(a[1]=s=>c.value=s),type:"password",label:"Contrase\xF1a *",color:"dark",outlined:""},{prepend:l(()=>[r(w,{name:"mdi-key",color:"dark",size:"20px"})]),_:1},8,["modelValue"]),b("div",se,[r(B,{label:"Olvidaste tu contrase\xF1a?",color:"primary",ripple:!1,flat:"","no-caps":"",class:"text-subtitle2"})])]),_:1}),r(W,{align:"center"},{default:l(()=>[r(B,{label:"Entrar",type:"submit",color:"primary",unelevated:"",class:"full-width text-bold"})]),_:1})]),_:1},8,["onSubmit"])]),_:1})]),_:1}))}});var ie=H(ne,[["__scopeId","data-v-50970b98"]]);export{ie as default};
