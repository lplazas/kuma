import{K as R}from"./index-52545d1d.js";import{d as Y,u as ee,m as I,a as _,o as t,b as y,w as e,e as a,a0 as W,p as K,f as o,t as m,c as z,F as w,B as T,s as x,q as S,W as ne,aB as te,I as oe,E as se,C as ae,_ as ie}from"./index-6d2dc803.js";import{A as le}from"./AppCollection-490228bd.js";import{_ as ce}from"./DeleteResourceModal.vue_vue_type_script_setup_true_lang-63af8dd2.js";import{E as re}from"./ErrorBlock-fb329d86.js";import{S as me}from"./StatusBadge-da631374.js";import{S as pe}from"./SummaryView-7b8af78b.js";import{_ as ue}from"./WarningIcon.vue_vue_type_script_setup_true_lang-f556fed5.js";import"./EmptyBlock.vue_vue_type_script_setup_true_lang-bb804fa6.js";import"./TextWithCopyButton-75a4d2e9.js";import"./CopyButton-ac094203.js";const de=["data-testid"],fe=Y({__name:"ZoneListView",setup(_e){const j=ee(),B=I(!1),A=I(!1),D=I(""),q=I({}),F=I({}),M=i=>{let p="offline";return i.length>0&&(p="online",typeof i[i.length-1].disconnectTime<"u"&&(p="offline")),p},G=i=>{const p="zoneIngress";q.value=i.items.reduce((c,d)=>{var f,g;const s=(f=d[p])==null?void 0:f.zone;if(typeof s<"u"){typeof c[s]>"u"&&(c[s]={online:[],offline:[]});const v=((g=d[`${p}Insight`])==null?void 0:g.subscriptions)||[],C=M(v);c[s][C].push(d)}return c},{})},J=i=>{const p="zoneEgress";F.value=i.items.reduce((c,d)=>{var f,g;const s=(f=d[p])==null?void 0:f.zone;if(typeof s<"u"){typeof c[s]>"u"&&(c[s]={online:[],offline:[]});const v=((g=d[`${p}Insight`])==null?void 0:g.subscriptions)||[],C=M(v);c[s][C].push(d)}return c},{})};function O(i){return i.map(p=>{var Z;const{name:c}=p,d={name:"zone-cp-detail-view",params:{zone:c}};let s="",f="kubernetes",g=!1,v=!0;(((Z=p.zoneInsight)==null?void 0:Z.subscriptions)??[]).forEach(k=>{if(k.version&&k.version.kumaCp){s=k.version.kumaCp.version;const{kumaCpGlobalCompatible:h=!0}=k.version.kumaCp;v=h}if(k.config){const h=JSON.parse(k.config);f=h.environment,g=h.store.type==="memory"}});const $=ae(p);return{detailViewRoute:d,name:c,status:$,zoneCpVersion:s,type:f,warnings:{version_mismatch:!v,store_memory:g}}})}async function U(){await j.deleteZone({name:D.value})}function E(){B.value=!B.value}function H(i){E(),D.value=i}function Q(i){A.value=(i==null?void 0:i.items.length)>0}return(i,p)=>{const c=_("RouteTitle"),d=_("KButton"),s=_("DataSource"),f=_("RouterLink"),g=_("KTooltip"),v=_("KDropdownItem"),C=_("KDropdown"),$=_("KCard"),Z=_("RouterView"),k=_("AppView"),h=_("RouteView");return t(),y(s,{src:"/me"},{default:e(({data:P})=>[P?(t(),y(h,{key:0,name:"zone-cp-list-view",params:{page:1,size:P.pageSize,zone:""}},{default:e(({route:u,t:l,can:V})=>[a(k,null,W({title:e(()=>[K("h1",null,[a(c,{title:l("zone-cps.routes.items.title")},null,8,["title"])])]),default:e(()=>[o(),o(),a(s,{src:`/zone-cps?page=${u.params.page}&size=${u.params.size}`,onChange:Q},{default:e(({data:b,error:L,refresh:X})=>[a(s,{src:"/zone-ingress-overviews?page=1&size=100",onChange:G}),o(),a(s,{src:"/zone-egress-overviews?page=1&size=100",onChange:J}),o(),a($,null,{body:e(()=>[L!==void 0?(t(),y(re,{key:0,error:L},null,8,["error"])):(t(),y(le,{key:1,class:"zone-cp-collection","data-testid":"zone-cp-collection",headers:[{label:"Name",key:"name"},{label:"Zone CP Version",key:"zoneCpVersion"},{label:"Type",key:"type"},{label:"Ingresses (online / total)",key:"ingress"},{label:"Egresses (online / total)",key:"egress"},{label:"Status",key:"status"},{label:"Warnings",key:"warnings",hideLabel:!0},{label:"Details",key:"details",hideLabel:!0},{label:"Actions",key:"actions",hideLabel:!0}],"page-number":parseInt(u.params.page),"page-size":parseInt(u.params.size),total:b==null?void 0:b.total,items:b?O(b.items):void 0,error:L,"empty-state-title":V("create zones")?l("zone-cps.empty_state.title"):void 0,"empty-state-message":V("create zones")?l("zone-cps.empty_state.message"):void 0,"empty-state-cta-to":V("create zones")?{name:"zone-create-view"}:void 0,"empty-state-cta-text":V("create zones")?l("zones.index.create"):void 0,"is-selected-row":n=>n.name===u.params.zone,onChange:u.update},W({name:e(({row:n})=>[a(f,{to:{name:"zone-cp-detail-view",params:{zone:n.name},query:{page:u.params.page,size:u.params.size}}},{default:e(()=>[o(m(n.name),1)]),_:2},1032,["to"])]),zoneCpVersion:e(({rowValue:n})=>[o(m(n||l("common.collection.none")),1)]),type:e(({rowValue:n})=>[o(m(n||l("common.collection.none")),1)]),ingress:e(({row:n})=>[(t(!0),z(w,null,T([q.value[n.name]||{online:[],offline:[]}],r=>(t(),z(w,null,[o(m(r.online.length)+" / "+m(r.online.length+r.offline.length),1)],64))),256))]),egress:e(({row:n})=>[(t(!0),z(w,null,T([F.value[n.name]||{online:[],offline:[]}],r=>(t(),z(w,null,[o(m(r.online.length)+" / "+m(r.online.length+r.offline.length),1)],64))),256))]),status:e(({rowValue:n})=>[n?(t(),y(me,{key:0,status:n},null,8,["status"])):(t(),z(w,{key:1},[o(m(l("common.collection.none")),1)],64))]),warnings:e(({row:n})=>[Object.values(n.warnings).some(r=>r)?(t(),y(g,{key:0},{content:e(()=>[K("ul",null,[(t(!0),z(w,null,T(n.warnings,(r,N)=>(t(),z(w,{key:N},[r?(t(),z("li",{key:0,"data-testid":`warning-${N}`},m(l(`zone-cps.list.${N}`)),9,de)):x("",!0)],64))),128))])]),default:e(()=>[o(),a(ue,{"data-testid":"warning",class:"mr-1",size:S(R),"hide-title":""},null,8,["size"])]),_:2},1024)):(t(),z(w,{key:1},[o(m(l("common.collection.none")),1)],64))]),details:e(({row:n})=>[a(f,{class:"details-link","data-testid":"details-link",to:{name:"zone-cp-detail-view",params:{zone:n.name}}},{default:e(()=>[o(m(l("common.collection.details_link"))+" ",1),a(S(ne),{display:"inline-block",decorative:"",size:S(R)},null,8,["size"])]),_:2},1032,["to"])]),_:2},[V("create zones")?{name:"actions",fn:e(({row:n})=>[a(C,{class:"actions-dropdown","kpop-attributes":{placement:"bottomEnd",popoverClasses:"mt-5 more-actions-popover"},width:"150"},{default:e(()=>[a(d,{class:"non-visual-button",appearance:"secondary","icon-only":""},{default:e(()=>[a(S(te))]),_:1})]),items:e(()=>[a(v,{"has-divider":"",danger:"","data-testid":"dropdown-delete-item",onClick:r=>H(n.name)},{default:e(()=>[o(m(l("common.collection.actions.delete")),1)]),_:2},1032,["onClick"])]),_:2},1024)]),key:"0"}:void 0]),1032,["headers","page-number","page-size","total","items","error","empty-state-title","empty-state-message","empty-state-cta-to","empty-state-cta-text","is-selected-row","onChange"]))]),_:2},1024),o(),u.params.zone?(t(),y(Z,{key:0},{default:e(n=>[a(pe,{onClose:r=>u.replace({name:"zone-cp-list-view",query:{page:u.params.page,size:u.params.size}})},{default:e(()=>[(t(),y(oe(n.Component),{name:u.params.zone,"zone-overview":b==null?void 0:b.items.find(r=>r.name===u.params.zone)},null,8,["name","zone-overview"]))]),_:2},1032,["onClose"])]),_:2},1024)):x("",!0),o(),B.value?(t(),y(ce,{key:1,"confirmation-text":D.value,"delete-function":U,"is-visible":"","action-button-text":l("common.delete_modal.proceed_button"),title:l("common.delete_modal.title",{type:"Zone"}),"data-testid":"delete-zone-modal",onCancel:E,onDelete:()=>{E(),X()}},{"body-content":e(()=>[K("p",null,m(l("common.delete_modal.text1",{type:"Zone",name:D.value})),1),o(),K("p",null,m(l("common.delete_modal.text2")),1)]),_:2},1032,["confirmation-text","action-button-text","title","onDelete"])):x("",!0)]),_:2},1032,["src"])]),_:2},[V("create zones")&&A.value?{name:"actions",fn:e(()=>[a(d,{appearance:"primary",to:{name:"zone-create-view"},"data-testid":"create-zone-link"},{default:e(()=>[a(S(se),{size:S(R)},null,8,["size"]),o(" "+m(l("zones.index.create")),1)]),_:2},1024)]),key:"0"}:void 0]),1024)]),_:2},1032,["params"])):x("",!0)]),_:1})}}});const Ie=ie(fe,[["__scopeId","data-v-9c0cf858"]]);export{Ie as default};