import{f as d}from"./kongponents.es-b2b550a8.js";import{d as _,u as p,c as n,r as i,o as f,a as N,l as v,j as b,w as u,h,g as x,t as k,b as y}from"./index-bec4d193.js";import{g as T}from"./RouteView.vue_vue_type_script_setup_true_lang-19528cd9.js";const g=_({__name:"NavTabs",props:{tabs:{type:Array,required:!0}},setup(c){const a=c,r=p(),m=n(()=>a.tabs.map(t=>({title:t.title,hash:"#"+t.routeName}))),l=n(()=>{const t=r.matched.map(e=>e.meta.module??"").filter(e=>e!=="");t.reverse();const s=a.tabs.find(e=>!!(e.routeName===r.name||t.includes(e.module)));return"#"+((s==null?void 0:s.routeName)??a.tabs[0].routeName)});return(t,s)=>{const o=i("router-link");return f(),N(y(d),{tabs:m.value,"model-value":l.value,"has-panels":!1,class:"nav-tabs","data-testid":"nav-tabs"},v({_:2},[b(a.tabs,e=>({name:`${e.routeName}-anchor`,fn:u(()=>[h(o,{to:{name:e.routeName}},{default:u(()=>[x(k(e.title),1)]),_:2},1032,["to"])])}))]),1032,["tabs","model-value"])}}});const S=T(g,[["__scopeId","data-v-1c3c46ad"]]);export{S as N};
