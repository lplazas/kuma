import{d as w,q as z,r as l,s as f,o as s,c as o,w as p,a as m,u as _,b as k,e as b,f as h}from"./index-2aa994fe.js";import{_ as y}from"./ZoneIngressDetails.vue_vue_type_script_setup_true_lang-c901fc0a.js";import{u as I,b as $,g as x,f as B,e as E}from"./RouteView.vue_vue_type_script_setup_true_lang-49cffe7a.js";import{_ as V}from"./RouteTitle.vue_vue_type_script_setup_true_lang-994a27b4.js";import{_ as N}from"./EmptyBlock.vue_vue_type_script_setup_true_lang-d8e16f78.js";import{E as A}from"./ErrorBlock-9a3c452b.js";import{_ as C}from"./LoadingBlock.vue_vue_type_script_setup_true_lang-c25833c3.js";import"./AccordionList-15ede8df.js";import"./DefinitionListItem-7bd1502c.js";import"./EnvoyData-bc1a7350.js";import"./kongponents.es-7e228e6a.js";import"./CodeBlock.vue_vue_type_style_index_0_lang-55ca759f.js";import"./StatusInfo.vue_vue_type_script_setup_true_lang-596f3434.js";import"./SubscriptionHeader.vue_vue_type_script_setup_true_lang-7484b3ae.js";import"./TabsWidget-d48e3234.js";import"./QueryParameter-70743f73.js";import"./TextWithCopyButton-71e1d5a6.js";const D={class:"zone-details"},O={key:3,class:"kcard-border"},Y=w({__name:"ZoneIngressDetailView",setup(T){const d=I(),e=z(),v=$(),{t:u}=x(),r=l(null),n=l(!0),a=l(null);f(()=>e.params.mesh,function(){e.name==="zone-ingress-detail-view"&&i()}),f(()=>e.params.name,function(){e.name==="zone-ingress-detail-view"&&i()}),g();function g(){v.dispatch("updatePageTitle",e.params.zoneIngress),i()}async function i(){n.value=!0,a.value=null;const c=e.params.zoneIngress;try{r.value=await d.getZoneIngressOverview({name:c})}catch(t){r.value=null,t instanceof Error?a.value=t:console.error(t)}finally{n.value=!1}}return(c,t)=>(s(),o(E,null,{default:p(()=>[m(V,{title:_(u)("zone-ingresses.routes.item.title")},null,8,["title"]),k(),m(B,{breadcrumbs:[{to:{name:"zone-ingress-list-view"},text:_(u)("zone-ingresses.routes.item.breadcrumbs")}]},{default:p(()=>[b("div",D,[n.value?(s(),o(C,{key:0})):a.value!==null?(s(),o(A,{key:1,error:a.value},null,8,["error"])):r.value===null?(s(),o(N,{key:2})):(s(),h("div",O,[m(y,{"zone-ingress-overview":r.value},null,8,["zone-ingress-overview"])]))])]),_:1},8,["breadcrumbs"])]),_:1}))}});export{Y as default};