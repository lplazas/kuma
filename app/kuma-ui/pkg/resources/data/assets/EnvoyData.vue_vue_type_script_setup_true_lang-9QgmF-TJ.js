import{d as _,a as p,o as n,c as k,e as i,w as l,E as x,b as a,A as C,a2 as B,a4 as E,q as m,K as h,f as q}from"./index-gl7uW3FE.js";import{C as M}from"./CodeBlock-Fsrd2vx1.js";const R=_({__name:"EnvoyData",props:{resource:{},src:{},query:{default:""},isFilterMode:{type:Boolean,default:!1},isRegExpMode:{type:Boolean,default:!1}},emits:["query-change","filter-mode-change","reg-exp-mode-change"],setup(u,{emit:d}){const s=u,t=d;return(v,e)=>{const f=p("KButton"),g=p("DataSource");return n(),k("div",null,[i(g,{src:s.src},{default:l(({data:o,error:c,refresh:y})=>[c?(n(),a(x,{key:0,error:c},null,8,["error"])):o===void 0?(n(),a(C,{key:1})):o===""?(n(),a(B,{key:2})):(n(),a(M,{key:3,language:"json",code:typeof o=="string"?o:JSON.stringify(o,null,2),"is-searchable":"",query:s.query,"is-filter-mode":s.isFilterMode,"is-reg-exp-mode":s.isRegExpMode,onQueryChange:e[0]||(e[0]=r=>t("query-change",r)),onFilterModeChange:e[1]||(e[1]=r=>t("filter-mode-change",r)),onRegExpModeChange:e[2]||(e[2]=r=>t("reg-exp-mode-change",r))},{"primary-actions":l(()=>[i(f,{appearance:"primary",onClick:y},{default:l(()=>[i(m(E),{size:m(h)},null,8,["size"]),q(`
            Refresh
          `)]),_:2},1032,["onClick"])]),_:2},1032,["code","query","is-filter-mode","is-reg-exp-mode"]))]),_:1},8,["src"])])}}});export{R as _};