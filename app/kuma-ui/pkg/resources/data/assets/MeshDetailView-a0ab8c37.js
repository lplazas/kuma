import{d as R,u as q,j as _,c as h,o as u,e as g,h as s,g as c,r as H,a as y,w as i,b as f,q as T,t as S,F as C,v as N,R as K,s as D,f as J}from"./index-67d086f6.js";import{g as F,n as W,s as O,q as Q,D as V,f as z,e as U,A as X,_ as Y}from"./RouteView.vue_vue_type_script_setup_true_lang-79b8501d.js";import{_ as Z}from"./RouteTitle.vue_vue_type_script_setup_true_lang-3c572c51.js";import{D as j,a as A}from"./DefinitionListItem-f7c5c281.js";import{_ as ee}from"./ResourceCodeBlock.vue_vue_type_script_setup_true_lang-1bbad4e2.js";import{_ as te}from"./StatusInfo.vue_vue_type_script_setup_true_lang-1df2af4f.js";import{T as ae}from"./TextWithCopyButton-9d05c132.js";import{n as ne}from"./notEmpty-7f452b20.js";import"./CodeBlock.vue_vue_type_style_index_0_lang-b38a433c.js";import"./EmptyBlock.vue_vue_type_script_setup_true_lang-1c88e13f.js";import"./ErrorBlock-306e0caf.js";const le={class:"chart-box-list"},se=R({__name:"MeshCharts",setup(G){const o=F(),M=W(),b=q(),w=_(!1),x=_({total:0,online:0,partiallyDegraded:0,offline:0}),v=_({total:0,internal:0,external:0}),p=_({kumaDp:{},envoy:{}}),r=h(()=>{const n=[],{internal:t,external:e}=v.value;return t&&n.push({title:o.t("common.charts.services.internalLabel"),data:t}),e&&n.push({title:o.t("common.charts.services.externalLabel"),data:e}),{title:o.t("common.charts.services.title"),showTotal:!0,dataPoints:n}}),m=h(()=>{const n=[],{total:t,online:e,partiallyDegraded:l}=x.value;if(t>0){n.push({title:o.t("http.api.value.online"),statusKeyword:"online",data:e}),l>0&&n.push({title:o.t("http.api.value.partially_degraded"),statusKeyword:"partially_degraded",data:l});const a=t-l-e;a>0&&n.push({title:o.t("http.api.value.offline"),statusKeyword:"offline",data:a})}return{title:o.t("common.charts.dataPlaneProxies.title"),showTotal:!0,dataPoints:n}}),B=h(()=>{const n=Object.entries(p.value.kumaDp).map(([t,e])=>({title:t,data:e.total??0}));return n.sort((t,e)=>t.title==="unknown"?1:e.title==="unknown"?-1:O(t.title,e.title)),{title:o.t("common.charts.kumaDp.title"),subtitle:o.t("common.charts.kumaDp.subtitle"),dataPoints:n}}),P=h(()=>{const n=Object.entries(p.value.envoy).map(([t,e])=>({title:t,data:e.total??0}));return n.sort((t,e)=>t.title==="unknown"?1:e.title==="unknown"?-1:O(t.title,e.title)),{title:o.t("common.charts.envoy.title"),subtitle:o.t("common.charts.envoy.subtitle"),dataPoints:n}});I();async function I(){w.value=!0;const n=b.params.mesh;try{const t=await M.getMeshInsights({name:n}),e=Q([t]);$(e),L(e),k(e)}catch{x.value={total:0,online:0,partiallyDegraded:0,offline:0},v.value={total:0,internal:0,external:0},p.value={kumaDp:{},envoy:{}}}finally{w.value=!1}}function $(n){const{total:t,online:e,partiallyDegraded:l}=n.dataplanes;x.value={total:t,online:e,partiallyDegraded:l,offline:t-e-l}}function L(n){const{total:t,internal:e,external:l}=n.services;v.value={total:t,internal:e,external:l}}function k(n){p.value=n.dpVersions}return(n,t)=>(u(),g("div",le,[s(V,{data:r.value},null,8,["data"]),c(),s(V,{data:m.value},null,8,["data"]),c(),s(V,{data:B.value},null,8,["data"]),c(),s(V,{data:P.value},null,8,["data"])]))}});const oe=z(se,[["__scopeId","data-v-375c50a1"]]),re={class:"stack"},ie={class:"columns"},ue=R({__name:"MeshDetailView",setup(G){const{t:o,formatIsoDate:M}=F(),b=W(),w=q(),x=U(),v=_(!0),p=_(null),r=_(null),m=_(null),B=h(()=>{if(r.value===null||m.value===null)return null;const{name:t,creationTime:e,modificationTime:l}=r.value;return{name:t,created:M(e),modified:M(l),"Data Plane Proxies":m.value.dataplanes.total}}),P=h(()=>{var E;if(r.value===null)return null;const t=k(r.value,"mtls"),e=k(r.value,"logging"),l=k(r.value,"metrics"),a=k(r.value,"tracing"),d=!!((E=r.value.routing)!=null&&E.localityAwareLoadBalancing);return{mtls:t,logging:e,metrics:l,tracing:a,localityAwareLoadBalancing:d}}),I=h(()=>m.value===null?0:Object.values(m.value.policies??{}).reduce((t,e)=>t+e.total,0)),$=h(()=>m.value===null?[]:Object.entries(m.value.policies??{}).map(([t,e])=>{const l=x.state.policyTypesByName[t];return l&&e.total!==0?{name:l.name,path:l.path,total:e.total}:null}).filter(ne));L();async function L(){v.value=!0,p.value=null;const t=w.params.mesh;try{r.value=await b.getMesh({name:t}),m.value=await b.getMeshInsights({name:t})}catch(e){e instanceof Error?p.value=e:console.error(p),r.value=null,m.value=null}finally{v.value=!1}}function k(t,e){if(t===null||t[e]===void 0)return!1;const l=t[e].enabledBackend??t[e].defaultBackend??t[e].backends[0].name,a=t[e].backends.find(d=>d.name===l);return`${a.type} / ${a.name}`}async function n(t){const e=w.params.mesh;return await b.getMesh({name:e},t)}return(t,e)=>{const l=H("router-link");return u(),y(Y,null,{default:i(()=>[s(Z,{title:f(o)("meshes.routes.overview.title")},null,8,["title"]),c(),s(X,null,{default:i(()=>[T("div",re,[s(f(S),null,{body:i(()=>[s(oe)]),_:1}),c(),r.value!==null?(u(),y(f(S),{key:0},{body:i(()=>[T("div",ie,[s(te,{"is-loading":v.value,error:p.value,"is-empty":r.value===null||m.value===null},{default:i(()=>[s(j,null,{default:i(()=>[(u(!0),g(C,null,N(B.value,(a,d)=>(u(),y(A,{key:d,term:f(o)(`http.api.property.${d}`)},{default:i(()=>[typeof a=="boolean"?(u(),y(f(K),{key:0,appearance:a?"success":"danger"},{default:i(()=>[c(D(a?"Enabled":"Disabled"),1)]),_:2},1032,["appearance"])):d==="name"&&typeof a=="string"?(u(),y(ae,{key:1,text:a},null,8,["text"])):(u(),g(C,{key:2},[c(D(a),1)],64))]),_:2},1032,["term"]))),128))]),_:1})]),_:1},8,["is-loading","error","is-empty"]),c(),s(j,null,{default:i(()=>[(u(!0),g(C,null,N(P.value,(a,d)=>(u(),y(A,{key:d,term:f(o)(`http.api.property.${d}`)},{default:i(()=>[typeof a=="boolean"?(u(),y(f(K),{key:0,appearance:a?"success":"danger"},{default:i(()=>[c(D(a?"Enabled":"Disabled"),1)]),_:2},1032,["appearance"])):(u(),g(C,{key:1},[c(D(a),1)],64))]),_:2},1032,["term"]))),128))]),_:1}),c(),s(j,null,{default:i(()=>[s(A,{term:`Policies (${I.value})`},{default:i(()=>[T("ul",null,[(u(!0),g(C,null,N($.value,(a,d)=>(u(),g("li",{key:d},[s(l,{to:{name:"policies-list-view",params:{policyPath:a.path}}},{default:i(()=>[c(D(a.name)+": "+D(a.total),1)]),_:2},1032,["to"])]))),128))])]),_:1},8,["term"])]),_:1})])]),_:1})):J("",!0),c(),s(f(S),null,{body:i(()=>{var a;return[s(ee,{id:"code-block-mesh","resource-fetcher":n,"resource-fetcher-watch-key":((a=r.value)==null?void 0:a.name)||null},null,8,["resource-fetcher-watch-key"])]}),_:1})])]),_:1})]),_:1})}}});const De=z(ue,[["__scopeId","data-v-9883e8a2"]]);export{De as default};