import{_ as x}from"./ResourceCodeBlock.vue_vue_type_style_index_0_lang-dc0e8c4c.js";import{d as k,a as n,o as r,b as s,w as a,e as i,m,f as w,O as y,t as R,p as V}from"./index-36b38e0c.js";import{E}from"./ErrorBlock-54d14d19.js";import{_ as $}from"./LoadingBlock.vue_vue_type_script_setup_true_lang-7feb67f4.js";import"./CodeBlock-97be1393.js";import"./uniqueId-90cc9b93.js";import"./CopyButton-dbd4bffe.js";import"./index-fce48c05.js";import"./toYaml-4e00099e.js";import"./TextWithCopyButton-69a2e47a.js";import"./WarningIcon.vue_vue_type_script_setup_true_lang-7d939fae.js";const z=k({__name:"ServiceConfigView",setup(F){return(B,M)=>{const u=n("RouteTitle"),l=n("DataSource"),f=n("KCard"),g=n("AppView"),h=n("RouteView");return r(),s(h,{name:"service-config-view",params:{mesh:"",service:"",codeSearch:"",codeFilter:!1,codeRegExp:!1}},{default:a(({route:e,t:p})=>[i(g,null,{title:a(()=>[m("h2",null,[i(u,{title:p("services.routes.item.navigation.service-config-view")},null,8,["title"])])]),default:a(()=>[w(),i(f,null,{default:a(()=>[m("div",null,[i(l,{src:`/meshes/${e.params.mesh}/external-services/for/${e.params.service}`},{default:a(({data:t,error:d})=>[d?(r(),s(E,{key:0,error:d},null,8,["error"])):t===void 0?(r(),s($,{key:1})):t===null?(r(),s(y,{key:2,"data-testid":"no-matching-external-service"},{title:a(()=>[m("p",null,R(p("services.detail.no_matching_external_service",{name:e.params.service})),1)]),_:2},1024)):(r(),s(x,{key:3,resource:t.config,"is-searchable":"",query:e.params.codeSearch,"is-filter-mode":e.params.codeFilter,"is-reg-exp-mode":e.params.codeRegExp,onQueryChange:o=>e.update({codeSearch:o}),onFilterModeChange:o=>e.update({codeFilter:o}),onRegExpModeChange:o=>e.update({codeRegExp:o})},{default:a(({copy:o,copying:C})=>[C?(r(),s(l,{key:0,src:`/meshes/${t.mesh}/external-service/${t.name}/as/kubernetes?no-store`,onChange:c=>{o(_=>_(c))},onError:c=>{o((_,v)=>v(c))}},null,8,["src","onChange","onError"])):V("",!0)]),_:2},1032,["resource","query","is-filter-mode","is-reg-exp-mode","onQueryChange","onFilterModeChange","onRegExpModeChange"]))]),_:2},1032,["src"])])]),_:2},1024)]),_:2},1024)]),_:1})}}});export{z as default};
