import{K as _}from"./index-fce48c05.js";import{d as k,a as c,o as n,c as x,e as i,w as l,b as t,O as C,l as p,a1 as B,f as E}from"./index-36b38e0c.js";import{C as h}from"./CodeBlock-97be1393.js";import{E as M}from"./ErrorBlock-54d14d19.js";import{_ as q}from"./LoadingBlock.vue_vue_type_script_setup_true_lang-7feb67f4.js";const F=k({__name:"EnvoyData",props:{resource:{},src:{},query:{default:""},isFilterMode:{type:Boolean,default:!1},isRegExpMode:{type:Boolean,default:!1}},emits:["query-change","filter-mode-change","reg-exp-mode-change"],setup(u,{emit:f}){const s=u,a=f;return(v,e)=>{const d=c("KButton"),g=c("DataSource");return n(),x("div",null,[i(g,{src:s.src},{default:l(({data:o,error:m,refresh:y})=>[m?(n(),t(M,{key:0,error:m},null,8,["error"])):o===void 0?(n(),t(q,{key:1})):o===""?(n(),t(C,{key:2})):(n(),t(h,{key:3,language:"json",code:typeof o=="string"?o:JSON.stringify(o,null,2),"is-searchable":"",query:s.query,"is-filter-mode":s.isFilterMode,"is-reg-exp-mode":s.isRegExpMode,onQueryChange:e[0]||(e[0]=r=>a("query-change",r)),onFilterModeChange:e[1]||(e[1]=r=>a("filter-mode-change",r)),onRegExpModeChange:e[2]||(e[2]=r=>a("reg-exp-mode-change",r))},{"primary-actions":l(()=>[i(d,{appearance:"primary",onClick:y},{default:l(()=>[i(p(B),{size:p(_)},null,8,["size"]),E(`
            Refresh
          `)]),_:2},1032,["onClick"])]),_:2},1032,["code","query","is-filter-mode","is-reg-exp-mode"]))]),_:1},8,["src"])])}}});export{F as _};
