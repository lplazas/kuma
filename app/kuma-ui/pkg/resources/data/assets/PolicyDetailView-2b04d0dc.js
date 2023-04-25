import{_ as P}from"./PolicyConnections.vue_vue_type_script_setup_true_lang-a8cc1871.js";import{_ as B}from"./EmptyBlock.vue_vue_type_script_setup_true_lang-a940747e.js";import{E}from"./ErrorBlock-88e8a32d.js";import{_ as N}from"./LabelList.vue_vue_type_style_index_0_lang-11916613.js";import{_ as V}from"./LoadingBlock.vue_vue_type_script_setup_true_lang-e1caaf97.js";import{T as $}from"./TabsWidget-452618aa.js";import{_ as x}from"./YamlView.vue_vue_type_script_setup_true_lang-bcce2ef9.js";import{u as D}from"./index-c89ad052.js";import{d as T,r as u,j as s,e as r,f as m,h as p,w as i,o as t,i as l,t as d,g as f,F as h,q as A,b as C,G as F}from"./index-5b34b65e.js";import"./kongponents.es-9f2d376a.js";import"./_plugin-vue_export-helper-c27b6911.js";import"./datadogLogEvents-302eea7b.js";import"./QueryParameter-70743f73.js";import"./CodeBlock.vue_vue_type_style_index_0_lang-72cdad70.js";import"./store-76151f83.js";import"./toYaml-4e00099e.js";const L={class:"policy-details kcard-border"},S={class:"entity-heading","data-testid":"policy-single-entity"},j={"data-testid":"policy-overview-tab"},q={key:0},te=T({__name:"PolicyDetailView",props:{mesh:null,policyPath:null,policyName:null},setup(k){const _=k,g=D(),b=[{hash:"#overview",title:"Overview"},{hash:"#affected-dpps",title:"Affected DPPs"}],e=u(null),n=u(!0),o=u(null);async function w({mesh:y,policyPath:v,policyName:c}){n.value=!0,o.value=null,e.value=null;try{e.value=await g.getSinglePolicyEntity({mesh:y,path:v,name:c})}catch(a){a instanceof Error?o.value=a:console.error(a)}finally{n.value=!1}}return w(_),(y,v)=>(t(),s("div",L,[n.value?(t(),r(V,{key:0})):o.value!==null?(t(),r(E,{key:1,error:o.value},null,8,["error"])):e.value===null?(t(),r(B,{key:2})):m("",!0),p(),e.value!==null?(t(),r($,{key:3,tabs:b},{tabHeader:i(()=>[l("h1",S,d(e.value.name),1)]),overview:i(()=>[f(N,null,{default:i(()=>[l("div",j,[l("ul",null,[(t(!0),s(h,null,A(e.value,(c,a)=>(t(),s(h,{key:a},[["type","mesh","name"].includes(a)?(t(),s("li",q,[l("h4",null,d(a),1),p(),l("p",null,d(c),1)])):m("",!0)],64))),128))])])]),_:1}),p(),f(x,{id:"code-block-policy",class:"mt-4",content:C(F)(e.value),"is-searchable":""},null,8,["content"])]),"affected-dpps":i(()=>[f(P,{mesh:e.value.mesh,"policy-name":e.value.name,"policy-type":_.policyPath},null,8,["mesh","policy-name","policy-type"])]),_:1})):m("",!0)]))}});export{te as default};