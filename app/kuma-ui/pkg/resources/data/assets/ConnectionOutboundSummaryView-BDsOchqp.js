import{d as C,r as n,o as l,m as p,w as e,b as o,k as h,t as m,e as s,R as y,s as O,E as R}from"./index-DOjcqG3h.js";const k=C({__name:"ConnectionOutboundSummaryView",props:{data:{},dataplaneOverview:{}},setup(d){const i=d;return(x,A)=>{const u=n("XAction"),_=n("XTabs"),v=n("DataCollection"),w=n("RouterView"),f=n("AppView"),V=n("RouteView");return l(),p(V,{name:"connection-outbound-summary-view",params:{connection:"",inactive:!1}},{default:e(({route:t,t:b})=>[o(f,null,{title:e(()=>[h("h2",null,`
          Outbound `+m(t.params.connection),1)]),default:e(()=>{var r;return[s(),o(_,{selected:(r=t.child())==null?void 0:r.name},y({_:2},[O(t.children,a=>({name:`${a.name}-tab`,fn:e(()=>[o(u,{to:{name:a.name,query:{inactive:t.params.inactive}}},{default:e(()=>[s(m(b(`connections.routes.item.navigation.${a.name.split("-")[3]}`)),1)]),_:2},1032,["to"])])}))]),1032,["selected"]),s(),o(w,null,{default:e(({Component:a})=>[o(v,{items:Object.entries(i.data),predicate:([c,D])=>c===t.params.connection,find:!0},{default:e(({items:c})=>[(l(),p(R(a),{data:c[0][1],"dataplane-overview":i.dataplaneOverview},null,8,["data","dataplane-overview"]))]),_:2},1032,["items","predicate"])]),_:2},1024)]}),_:2},1024)]),_:1})}}});export{k as default};