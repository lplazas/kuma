import{u}from"./kongponents.es-b2b550a8.js";import{O as b,a as V,b as h}from"./OnboardingPage-467db8b7.js";import{w as x,x as C,y as G,e as k,i as M,f as P,_ as T,g as w}from"./RouteView.vue_vue_type_script_setup_true_lang-19528cd9.js";import{_ as N}from"./RouteTitle.vue_vue_type_script_setup_true_lang-2f1aad7c.js";import{d as O,q as B,x as K,c as i,o as d,a as p,w as e,h as o,b as r,g as a,k as m,i as S}from"./index-bec4d193.js";const U={class:"graph-list mb-6"},$={class:"radio-button-group"},I=O({__name:"ConfigurationTypes",setup(q){const c=x(),g=C(),_={postgres:G(),memory:g,kubernetes:c},l=k(),{t:f}=M(),t=B("kubernetes");K(function(){t.value=l.getters["config/getConfigurationType"]});const v=i(()=>l.getters["config/getMulticlusterStatus"]?"onboarding-multi-zone":"onboarding-create-mesh"),y=i(()=>_[t.value]);return(D,n)=>(d(),p(T,null,{default:e(()=>[o(N,{title:r(f)("onboarding.routes.configuration-types.title")},null,8,["title"]),a(),o(P,null,{default:e(()=>[o(b,{"with-image":""},{header:e(()=>[o(V,null,{title:e(()=>[a(`
              Learn about configuration storage
            `)]),_:1})]),content:e(()=>[m("div",U,[(d(),p(S(y.value)))]),a(),m("div",$,[o(r(u),{modelValue:t.value,"onUpdate:modelValue":n[0]||(n[0]=s=>t.value=s),name:"deployment","selected-value":"kubernetes"},{default:e(()=>[a(`
              Kubernetes
            `)]),_:1},8,["modelValue"]),a(),o(r(u),{modelValue:t.value,"onUpdate:modelValue":n[1]||(n[1]=s=>t.value=s),name:"deployment","selected-value":"postgres"},{default:e(()=>[a(`
              Postgres
            `)]),_:1},8,["modelValue"]),a(),o(r(u),{modelValue:t.value,"onUpdate:modelValue":n[2]||(n[2]=s=>t.value=s),name:"deployment","selected-value":"memory"},{default:e(()=>[a(`
              Memory
            `)]),_:1},8,["modelValue"])])]),navigation:e(()=>[o(h,{"next-step":v.value,"previous-step":"onboarding-deployment-types"},null,8,["next-step"])]),_:1})]),_:1})]),_:1}))}});const F=w(I,[["__scopeId","data-v-ec87faf1"]]);export{F as default};
