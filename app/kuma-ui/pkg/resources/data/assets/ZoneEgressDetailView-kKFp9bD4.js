import{d as f,a as r,o as n,b as c,w as e,Y as p,t as i,f as s,e as t,V as h,F as V,c as u,m as d,p as b}from"./index-gl7uW3FE.js";import{S as k}from"./StatusBadge-Qfv0_VVR.js";import{_ as w}from"./SubscriptionList.vue_vue_type_script_setup_true_lang-0tSkno0r.js";import"./AccordionList-GlRpzXrS.js";const y={class:"stack","data-testid":"detail-view-details"},C={class:"columns"},x={key:0,"data-testid":"zone-egress-subscriptions"},D=f({__name:"ZoneEgressDetailView",props:{data:{}},setup(_){const a=_;return(z,v)=>{const l=r("KCard"),m=r("AppView"),g=r("RouteView");return n(),c(g,{name:"zone-egress-detail-view"},{default:e(({t:o})=>[t(m,null,{default:e(()=>[d("div",y,[t(l,null,{default:e(()=>[d("div",C,[t(p,null,{title:e(()=>[s(i(o("http.api.property.status")),1)]),body:e(()=>[t(k,{status:a.data.state},null,8,["status"])]),_:2},1024),s(),t(p,null,{title:e(()=>[s(i(o("http.api.property.address")),1)]),body:e(()=>[a.data.zoneEgress.socketAddress.length>0?(n(),c(h,{key:0,text:a.data.zoneEgress.socketAddress},null,8,["text"])):(n(),u(V,{key:1},[s(i(o("common.detail.none")),1)],64))]),_:2},1024)])]),_:2},1024),s(),a.data.zoneEgressInsight.subscriptions.length>0?(n(),u("div",x,[d("h2",null,i(o("zone-egresses.routes.item.subscriptions.title")),1),s(),t(l,{class:"mt-4"},{default:e(()=>[t(w,{subscriptions:a.data.zoneEgressInsight.subscriptions},null,8,["subscriptions"])]),_:1})])):b("",!0)])]),_:2},1024)]),_:1})}}});export{D as default};