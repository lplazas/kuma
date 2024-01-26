import{D as C,F as V}from"./FilterBar-95a88cae.js";import{E as k}from"./ErrorBlock-54d14d19.js";import{S as z}from"./SummaryView-f4c41312.js";import{d as S,a as l,o,b as i,w as t,e as n,m as D,f as p,t as P,B as q,p as u,_ as T}from"./index-36b38e0c.js";import"./index-fce48c05.js";import"./AppCollection-bc90608e.js";import"./StatusBadge-111d6c49.js";import"./TextWithCopyButton-69a2e47a.js";import"./CopyButton-dbd4bffe.js";import"./WarningIcon.vue_vue_type_script_setup_true_lang-7d939fae.js";import"./uniqueId-90cc9b93.js";const x=S({__name:"DataPlaneListView",setup(B){return(R,N)=>{const y=l("RouteTitle"),f=l("KSelect"),g=l("KCard"),w=l("RouterView"),v=l("AppView"),m=l("DataSource"),b=l("RouteView");return o(),i(m,{src:"/me"},{default:t(({data:c})=>[c?(o(),i(b,{key:0,name:"data-plane-list-view",params:{page:1,size:c.pageSize,query:"",dataplaneType:"all",s:"",mesh:"",dataPlane:""}},{default:t(({can:h,route:e,t:d})=>[n(m,{src:`/meshes/${e.params.mesh}/dataplanes/of/${e.params.dataplaneType}?page=${e.params.page}&size=${e.params.size}&search=${e.params.s}`},{default:t(({data:s,error:r})=>[n(v,null,{title:t(()=>[D("h2",null,[n(y,{title:d("data-planes.routes.items.title")},null,8,["title"])])]),default:t(()=>[p(),n(g,null,{default:t(()=>[r!==void 0?(o(),i(k,{key:0,error:r},null,8,["error"])):(o(),i(C,{key:1,"data-testid":"data-plane-collection","page-number":e.params.page,"page-size":e.params.size,total:s==null?void 0:s.total,items:s==null?void 0:s.items,error:r,"is-selected-row":a=>a.name===e.params.dataPlane,"summary-route-name":"data-plane-summary-view","is-global-mode":h("use zones"),onChange:e.update},{toolbar:t(()=>[n(V,{class:"data-plane-proxy-filter",placeholder:"tag: 'kuma.io/service: backend'",query:e.params.query,fields:{name:{description:"filter by name or parts of a name"},protocol:{description:"filter by “kuma.io/protocol” value"},service:{description:"filter by “kuma.io/service” value"},tag:{description:"filter by tags (e.g. “tag: version:2”)"},zone:{description:"filter by “kuma.io/zone” value"}},onFieldsChange:a=>e.update({query:a.query,s:a.query.length>0?JSON.stringify(a.fields):""})},null,8,["placeholder","query","fields","onFieldsChange"]),p(),n(f,{class:"filter-select",label:"Type",items:["all","standard","builtin","delegated"].map(a=>({value:a,label:d(`data-planes.type.${a}`),selected:a===e.params.dataplaneType})),onSelected:a=>e.update({dataplaneType:String(a.value)})},{"item-template":t(({item:a})=>[p(P(a.label),1)]),_:2},1032,["items","onSelected"])]),_:2},1032,["page-number","page-size","total","items","error","is-selected-row","is-global-mode","onChange"]))]),_:2},1024),p(),e.params.dataPlane?(o(),i(w,{key:0},{default:t(a=>[n(z,{onClose:_=>e.replace({name:"data-plane-list-view",params:{mesh:e.params.mesh},query:{page:e.params.page,size:e.params.size}})},{default:t(()=>[(o(),i(q(a.Component),{name:e.params.dataPlane,"dataplane-overview":s==null?void 0:s.items.find(_=>_.name===e.params.dataPlane)},null,8,["name","dataplane-overview"]))]),_:2},1032,["onClose"])]),_:2},1024)):u("",!0)]),_:2},1024)]),_:2},1032,["src"])]),_:2},1032,["params"])):u("",!0)]),_:1})}}});const H=T(x,[["__scopeId","data-v-2aeea609"]]);export{H as default};
