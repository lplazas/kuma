import{d as f,k as y,a as _,o as t,c as u,e as n,w as e,b as i,S as w,m as k,t as c,l,Y as h,f as r,p as V,F as C,T as I}from"./index-4198b723.js";import{E as $}from"./ErrorBlock-3f95d913.js";import{_ as B}from"./LoadingBlock.vue_vue_type_script_setup_true_lang-86ef811e.js";import{T as D}from"./TagList-eaff6ee8.js";import{T as x}from"./TextWithCopyButton-a2a0b3a9.js";import{S as T}from"./StatusBadge-0690352e.js";import"./index-fce48c05.js";import"./WarningIcon.vue_vue_type_script_setup_true_lang-3cef1bb1.js";import"./CopyButton-62945dfc.js";const S={key:3,class:"columns"},b=f({__name:"ExternalServiceDetails",props:{mesh:{},service:{}},setup(m){const{t:a}=y(),s=m;return(g,v)=>{const p=_("DataSource");return t(),u("div",null,[n(p,{src:`/meshes/${s.mesh}/external-services/for/${s.service}`},{default:e(({data:o,error:d})=>[d?(t(),i($,{key:0,error:d},null,8,["error"])):o===void 0?(t(),i(B,{key:1})):o===null?(t(),i(w,{key:2,"data-testid":"no-matching-external-service"},{title:e(()=>[k("p",null,c(l(a)("services.detail.no_matching_external_service",{name:s.service})),1)]),_:1})):(t(),u("div",S,[n(h,null,{title:e(()=>[r(c(l(a)("http.api.property.address")),1)]),body:e(()=>[n(x,{text:o.networking.address},null,8,["text"])]),_:2},1024),r(),o.tags!==null?(t(),i(h,{key:0},{title:e(()=>[r(c(l(a)("http.api.property.tags")),1)]),body:e(()=>[n(D,{tags:o.tags},null,8,["tags"])]),_:2},1024)):V("",!0)]))]),_:1},8,["src"])])}}}),E={class:"columns"},N=f({__name:"ServiceInsightDetails",props:{serviceInsight:{}},setup(m){const{t:a}=y(),s=m;return(g,v)=>{var p,o;return t(),u("div",E,[n(h,null,{title:e(()=>[r(c(l(a)("http.api.property.status")),1)]),body:e(()=>[n(T,{status:s.serviceInsight.status},null,8,["status"])]),_:1}),r(),n(h,null,{title:e(()=>[r(c(l(a)("http.api.property.address")),1)]),body:e(()=>[s.serviceInsight.addressPort?(t(),i(x,{key:0,text:s.serviceInsight.addressPort},null,8,["text"])):(t(),u(C,{key:1},[r(c(l(a)("common.detail.none")),1)],64))]),_:1}),r(),n(I,{online:((p=s.serviceInsight.dataplanes)==null?void 0:p.online)??0,total:((o=s.serviceInsight.dataplanes)==null?void 0:o.total)??0},{title:e(()=>[r(c(l(a)("http.api.property.dataPlaneProxies")),1)]),_:1},8,["online","total"])])}}}),P={class:"stack"},z=f({__name:"ServiceDetailView",props:{data:{}},setup(m){const a=m;return(s,g)=>{const v=_("KCard"),p=_("AppView"),o=_("RouteView");return t(),i(o,{name:"service-detail-view",params:{mesh:"",service:""}},{default:e(({route:d})=>[n(p,null,{default:e(()=>[k("div",P,[n(v,null,{default:e(()=>[a.data.serviceType==="external"?(t(),i(b,{key:0,mesh:d.params.mesh,service:d.params.service},null,8,["mesh","service"])):(t(),i(N,{key:1,"service-insight":s.data},null,8,["service-insight"]))]),_:2},1024)])]),_:2},1024)]),_:1})}}});export{z as default};
