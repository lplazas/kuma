import{E as l}from"./EnvoyData-68a62f59.js";import{d as m,a as t,o as d,b as u,w as n,e as s,m as g,f as _}from"./index-c243018b.js";import"./index-fce48c05.js";import"./CodeBlock.vue_vue_type_style_index_0_lang-12497a76.js";import"./uniqueId-90cc9b93.js";import"./EmptyBlock.vue_vue_type_script_setup_true_lang-d7c2c560.js";import"./ErrorBlock-ce62f109.js";import"./TextWithCopyButton-9ae8ee26.js";import"./CopyButton-caadcc49.js";import"./WarningIcon.vue_vue_type_script_setup_true_lang-8d44fcf1.js";import"./LoadingBlock.vue_vue_type_script_setup_true_lang-1a9c87be.js";const I=m({__name:"ZoneIngressClustersView",setup(f){return(h,C)=>{const a=t("RouteTitle"),r=t("KCard"),i=t("AppView"),p=t("RouteView");return d(),u(p,{name:"zone-ingress-clusters-view",params:{zoneIngress:"",codeSearch:"",codeFilter:!1,codeRegExp:!1}},{default:n(({route:e,t:c})=>[s(i,null,{title:n(()=>[g("h2",null,[s(a,{title:c("zone-ingresses.routes.item.navigation.zone-ingress-clusters-view")},null,8,["title"])])]),default:n(()=>[_(),s(r,null,{default:n(()=>[s(l,{resource:"Zone",src:`/zone-ingresses/${e.params.zoneIngress}/data-path/clusters`,query:e.params.codeSearch,"is-filter-mode":e.params.codeFilter,"is-reg-exp-mode":e.params.codeRegExp,onQueryChange:o=>e.update({codeSearch:o}),onFilterModeChange:o=>e.update({codeFilter:o}),onRegExpModeChange:o=>e.update({codeRegExp:o})},null,8,["src","query","is-filter-mode","is-reg-exp-mode","onQueryChange","onFilterModeChange","onRegExpModeChange"])]),_:2},1024)]),_:2},1024)]),_:1})}}});export{I as default};