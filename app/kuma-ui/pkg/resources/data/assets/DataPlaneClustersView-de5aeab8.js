import{_ as c}from"./EnvoyData.vue_vue_type_script_setup_true_lang-8df92edb.js";import{d,a as t,o as m,b as u,w as o,e as n,m as _,f as h}from"./index-4198b723.js";import"./index-fce48c05.js";import"./CodeBlock-e20cd205.js";import"./uniqueId-90cc9b93.js";import"./ErrorBlock-3f95d913.js";import"./TextWithCopyButton-a2a0b3a9.js";import"./CopyButton-62945dfc.js";import"./WarningIcon.vue_vue_type_script_setup_true_lang-3cef1bb1.js";import"./LoadingBlock.vue_vue_type_script_setup_true_lang-86ef811e.js";const B=d({__name:"DataPlaneClustersView",setup(f){return(g,x)=>{const s=t("RouteTitle"),r=t("KCard"),p=t("AppView"),l=t("RouteView");return m(),u(l,{name:"data-plane-clusters-view",params:{mesh:"",dataPlane:"",codeSearch:"",codeFilter:!1,codeRegExp:!1}},{default:o(({route:e,t:i})=>[n(p,null,{title:o(()=>[_("h2",null,[n(s,{title:i("data-planes.routes.item.navigation.data-plane-clusters-view")},null,8,["title"])])]),default:o(()=>[h(),n(r,null,{default:o(()=>[n(c,{resource:"Data Plane Proxy",src:`/meshes/${e.params.mesh}/dataplanes/${e.params.dataPlane}/data-path/clusters`,query:e.params.codeSearch,"is-filter-mode":e.params.codeFilter,"is-reg-exp-mode":e.params.codeRegExp,onQueryChange:a=>e.update({codeSearch:a}),onFilterModeChange:a=>e.update({codeFilter:a}),onRegExpModeChange:a=>e.update({codeRegExp:a})},null,8,["src","query","is-filter-mode","is-reg-exp-mode","onQueryChange","onFilterModeChange","onRegExpModeChange"])]),_:2},1024)]),_:2},1024)]),_:1})}}});export{B as default};
