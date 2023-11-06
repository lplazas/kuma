import{d as D,g as I,Q as A,r as v,o as t,i as l,w as e,j as r,p as m,n as s,k as a,H as i,l as p,E as x,x as S,a7 as y,a4 as V,m as C,F as N,a1 as P,D as E,G as L,a9 as Q,t as q}from"./index-a6f5023f.js";import{_ as k}from"./EmptyBlock.vue_vue_type_script_setup_true_lang-1974ccfb.js";import{_ as F}from"./ResourceCodeBlock.vue_vue_type_style_index_0_lang-3ee102e1.js";import{S as j}from"./StatusBadge-6aece7ac.js";import{T as G}from"./TagList-ce42e98f.js";import"./CodeBlock.vue_vue_type_style_index_0_lang-ad731d3d.js";import"./toYaml-4e00099e.js";const H=_=>(E("data-v-c02ac605"),_=_(),L(),_),K={class:"summary-title-wrapper"},W=H(()=>m("img",{"aria-hidden":"true",src:Q},null,-1)),z={class:"summary-title"},J={key:1,class:"stack"},M={class:"mt-4"},O={key:0},U={key:3,class:"stack"},X={key:1,class:"stack"},Y={key:0},Z={class:"mt-4"},ee=D({__name:"ServiceSummaryView",props:{service:{default:void 0}},setup(_){const{t:o}=I(),T=A(),c=_;return(te,se)=>{const b=v("RouteTitle"),B=v("RouterLink"),f=v("DataSource"),R=v("AppView"),$=v("RouteView");return t(),l($,{name:"service-summary-view",params:{mesh:"",service:"",codeSearch:""}},{default:e(({route:d})=>[r(R,null,{title:e(()=>[m("div",K,[W,s(),m("h2",z,[r(B,{to:{name:"service-detail-view",params:{service:d.params.service}}},{default:e(()=>[r(b,{title:a(o)("services.routes.item.title",{name:d.params.service}),render:!0},null,8,["title"])]),_:2},1032,["to"])])])]),default:e(()=>{var g,w;return[s(),c.service===void 0?(t(),l(k,{key:0},{message:e(()=>[m("p",null,i(a(o)("common.collection.summary.empty_message",{type:"Service"})),1)]),default:e(()=>[s(i(a(o)("common.collection.summary.empty_title",{type:"Service"}))+" ",1)]),_:1})):(t(),p("div",J,[m("div",null,[m("h3",null,i(a(o)("services.routes.item.overview")),1),s(),m("div",M,[c.service.serviceType==="external"?(t(),p("div",O,[r(f,{src:`/meshes/${c.service.mesh}/external-services/for/${c.service.name}`},{default:e(({data:n,error:u})=>[u?(t(),l(x,{key:0,error:u},null,8,["error"])):n===void 0?(t(),l(S,{key:1})):n===null?(t(),l(k,{key:2,"data-testid":"no-matching-external-service"},{title:e(()=>[m("p",null,i(a(o)("services.detail.no_matching_external_service",{name:c.service.name})),1)]),_:1})):(t(),p("div",U,[r(y,null,{title:e(()=>[s(i(a(o)("http.api.property.address")),1)]),body:e(()=>[r(V,{text:n.networking.address},null,8,["text"])]),_:2},1024),s(),n.tags!==null?(t(),l(y,{key:0},{title:e(()=>[s(i(a(o)("http.api.property.tags")),1)]),body:e(()=>[r(G,{tags:n.tags},null,8,["tags"])]),_:2},1024)):C("",!0)]))]),_:1},8,["src"])])):(t(),p("div",X,[r(y,null,{title:e(()=>[s(i(a(o)("http.api.property.status")),1)]),body:e(()=>[r(j,{status:c.service.status??"not_available"},null,8,["status"])]),_:1}),s(),r(y,null,{title:e(()=>[s(i(a(o)("http.api.property.address")),1)]),body:e(()=>[c.service.addressPort?(t(),l(V,{key:0,text:c.service.addressPort},null,8,["text"])):(t(),p(N,{key:1},[s(i(a(o)("common.detail.none")),1)],64))]),_:1}),s(),r(P,{online:((g=c.service.dataplanes)==null?void 0:g.online)??0,total:((w=c.service.dataplanes)==null?void 0:w.total)??0},{title:e(()=>[s(i(a(o)("http.api.property.dataPlaneProxies")),1)]),_:1},8,["online","total"])]))])]),s(),c.service.serviceType==="external"?(t(),p("div",Y,[m("h3",null,i(a(o)("services.routes.item.config")),1),s(),m("div",Z,[r(f,{src:`/meshes/${d.params.mesh}/external-services/for/${d.params.service}`},{default:e(({data:n,error:u})=>[u?(t(),l(x,{key:0,error:u},null,8,["error"])):n===void 0?(t(),l(S,{key:1})):n===null?(t(),l(k,{key:2,"data-testid":"no-matching-external-service"},{title:e(()=>[m("p",null,i(a(o)("services.detail.no_matching_external_service",{name:d.params.service})),1)]),_:2},1024)):(t(),l(F,{key:3,id:"code-block-service",resource:n,"resource-fetcher":h=>a(T).getExternalService({mesh:n.mesh,name:n.name},h),"is-searchable":"",query:d.params.codeSearch,onQueryChange:h=>d.update({codeSearch:h})},null,8,["resource","resource-fetcher","query","onQueryChange"]))]),_:2},1032,["src"])])])):C("",!0)]))]}),_:2},1024)]),_:1})}}});const me=q(ee,[["__scopeId","data-v-c02ac605"]]);export{me as default};