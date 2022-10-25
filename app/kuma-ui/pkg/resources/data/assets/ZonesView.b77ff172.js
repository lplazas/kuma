import{C as N,cl as x,cm as F,P as H,cn as R,co as K,i as u,cp as k,s as M,cq as P,cr as q,o as l,k as g,c as h,w as o,a as p,b as C,y as _,l as d,t as E,F as L,n as S,j as a}from"./index.ea0d4a24.js";import{S as G,a as U}from"./SubscriptionHeader.f45b5cb6.js";import{M as J}from"./MultizoneInfo.aeae88e5.js";import{_ as j}from"./CodeBlock.vue_vue_type_style_index_0_lang.f474aa6d.js";import{g as Y}from"./tableDataUtils.e6215cf2.js";import{F as Q}from"./FrameSkeleton.201d5ad4.js";import{D as X}from"./DataOverview.aa5c525a.js";import{T as $}from"./TabsWidget.2b9f88d3.js";import{_ as ee}from"./EntityURLControl.vue_vue_type_script_setup_true_lang.3f293302.js";import{_ as te}from"./LabelList.vue_vue_type_style_index_0_lang.cd975a49.js";import{W as se}from"./WarningsWidget.5aa49a70.js";import"./_commonjsHelpers.f037b798.js";import"./EmptyBlock.vue_vue_type_script_setup_true_lang.b7d1d2f8.js";import"./ErrorBlock.6da0472d.js";import"./LoadingBlock.vue_vue_type_script_setup_true_lang.c9f72cfb.js";import"./TagList.c44546f8.js";const ne={name:"ZonesView",components:{AccordionList:x,AccordionItem:F,FrameSkeleton:Q,DataOverview:X,TabsWidget:$,LabelList:te,WarningsWidget:se,CodeBlock:j,SubscriptionDetails:G,SubscriptionHeader:U,MultizoneInfo:J,EntityURLControl:ee},data(){return{isLoading:!0,isEmpty:!1,error:null,entityIsLoading:!0,entityIsEmpty:!1,entityHasError:!1,tableDataIsEmpty:!1,empty_state:{title:"No Data",message:"There are no Zones present."},tableData:{headers:[{key:"actions",hideLabel:!0},{label:"Status",key:"status"},{label:"Name",key:"name"},{label:"Zone CP Version",key:"zoneCpVersion"},{label:"Storage type",key:"storeType"},{label:"Ingress",key:"hasIngress"},{label:"Egress",key:"hasEgress"},{key:"warnings",hideLabel:!0}],data:[]},tabs:[{hash:"#overview",title:"Overview"},{hash:"#insights",title:"Zone Insights"},{hash:"#config",title:"Config"},{hash:"#warnings",title:"Warnings"}],entity:{},pageSize:H,next:null,warnings:[],subscriptionsReversed:[],codeOutput:null,zonesWithIngress:new Set}},computed:{...R({multicluster:"config/getMulticlusterStatus",globalCpVersion:"config/getVersion"})},watch:{$route(){this.isLoading=!0,this.isEmpty=!1,this.error=null,this.entityIsLoading=!0,this.entityIsEmpty=!1,this.entityHasError=!1,this.tableDataIsEmpty=!1,this.init()}},beforeMount(){this.init()},methods:{init(){this.multicluster&&this.loadData()},filterTabs(){return this.warnings.length?this.tabs:this.tabs.filter(s=>s.hash!=="#warnings")},tableAction(s){const t=s;this.getEntity(t)},parseData(s){const{zoneInsight:t={},name:n}=s;let m="-",e="",r=!0;return t.subscriptions&&t.subscriptions.length&&t.subscriptions.forEach(i=>{if(i.version&&i.version.kumaCp){m=i.version.kumaCp.version;const{kumaCpGlobalCompatible:y=!0}=i.version.kumaCp;r=y,i.config&&(e=JSON.parse(i.config).store.type)}}),{...s,status:K(t).status,zoneCpVersion:m,storeType:e,hasIngress:this.zonesWithIngress.has(n)?"Yes":"No",hasEgress:this.zonesWithEgress.has(n)?"Yes":"No",withWarnings:!r}},calculateZonesWithIngress(s){const t=new Set;s.forEach(({zoneIngress:{zone:n}})=>{t.add(n)}),this.zonesWithIngress=t},calculateZonesWithEgress(s){const t=new Set;s.forEach(({zoneEgress:{zone:n}})=>{t.add(n)}),this.zonesWithEgress=t},async loadData(s="0"){this.isLoading=!0,this.isEmpty=!1;const t=this.$route.query.ns||null;try{const[{data:n,next:m},{items:e},{items:r}]=await Promise.all([Y({getSingleEntity:u.getZoneOverview.bind(u),getAllEntities:u.getAllZoneOverviews.bind(u),size:this.pageSize,offset:s,query:t}),k({callEndpoint:u.getAllZoneIngressOverviews.bind(u)}),k({callEndpoint:u.getAllZoneEgressOverviews.bind(u)})]);this.next=m,n.length?(this.calculateZonesWithIngress(e),this.calculateZonesWithEgress(r),this.tableData.data=n.map(this.parseData),this.tableDataIsEmpty=!1,this.isEmpty=!1,this.getEntity({name:n[0].name})):(this.tableData.data=[],this.tableDataIsEmpty=!0,this.isEmpty=!0,this.entityIsEmpty=!0)}catch(n){n instanceof Error?error.value=n:console.error(n),this.isEmpty=!0}finally{this.isLoading=!1}},async getEntity(s){var m,e;this.entityIsLoading=!0,this.entityIsEmpty=!0;const t=["type","name"],n=setTimeout(()=>{this.entityIsEmpty=!0,this.entityIsLoading=!1},"500");if(s){this.entityIsEmpty=!1,this.warnings=[];try{const r=await u.getZoneOverview({name:s.name}),i=(e=(m=r.zoneInsight)==null?void 0:m.subscriptions)!=null?e:[];if(this.entity={...M(r,t),"Authentication Type":P(r)},this.subscriptionsReversed=Array.from(i).reverse(),i.length){const{version:y={}}=i[i.length-1],{kumaCp:b={}}=y,I=b.version||"-",{kumaCpGlobalCompatible:v=!0}=b;v||this.warnings.push({kind:q,payload:{zoneCpVersion:I,globalCpVersion:this.globalCpVersion}}),i[i.length-1].config&&(this.codeOutput=JSON.stringify(JSON.parse(i[i.length-1].config),null,2))}}catch(r){console.error(r),this.entity={},this.entityHasError=!0,this.entityIsEmpty=!0}finally{clearTimeout(n)}}this.entityIsLoading=!1}}},ie={class:"zones"},oe=d("span",{class:"custom-control-icon"}," \u2190 ",-1),ae={key:0},re={key:1},le={key:2};function ce(s,t,n,m,e,r){const i=a("MultizoneInfo"),y=a("KButton"),b=a("DataOverview"),I=a("EntityURLControl"),v=a("KBadge"),z=a("LabelList"),D=a("SubscriptionHeader"),A=a("SubscriptionDetails"),W=a("AccordionItem"),O=a("AccordionList"),w=a("KCard"),T=a("CodeBlock"),Z=a("WarningsWidget"),V=a("TabsWidget"),B=a("FrameSkeleton");return l(),g("div",ie,[s.multicluster===!1?(l(),h(i,{key:0})):(l(),h(B,{key:1},{default:o(()=>[p(b,{"page-size":e.pageSize,"is-loading":e.isLoading,error:e.error,"empty-state":e.empty_state,"table-data":e.tableData,"table-data-is-empty":e.tableDataIsEmpty,"show-warnings":e.tableData.data.some(c=>c.withWarnings),next:e.next,onTableAction:r.tableAction,onLoadData:t[0]||(t[0]=c=>r.loadData(c))},{additionalControls:o(()=>[s.$route.query.ns?(l(),h(y,{key:0,class:"back-button",appearance:"primary",to:{name:"zones"}},{default:o(()=>[oe,C(" View All ")]),_:1})):_("",!0)]),_:1},8,["page-size","is-loading","error","empty-state","table-data","table-data-is-empty","show-warnings","next","onTableAction"]),e.isEmpty===!1?(l(),h(V,{key:0,"has-error":e.error,"is-loading":e.isLoading,tabs:r.filterTabs(),"initial-tab-override":"overview"},{tabHeader:o(()=>[d("div",null,[d("h3",null," Zone: "+E(e.entity.name),1)]),d("div",null,[p(I,{name:e.entity.name},null,8,["name"])])]),overview:o(()=>[p(z,{"has-error":e.entityHasError,"is-loading":e.entityIsLoading,"is-empty":e.entityIsEmpty},{default:o(()=>[d("div",null,[d("ul",null,[(l(!0),g(L,null,S(e.entity,(c,f)=>(l(),g("li",{key:f},[c?(l(),g("h4",ae,E(f),1)):_("",!0),f==="status"?(l(),g("p",re,[p(v,{appearance:c==="Offline"?"danger":"success"},{default:o(()=>[C(E(c),1)]),_:2},1032,["appearance"])])):(l(),g("p",le,E(c),1))]))),128))])])]),_:1},8,["has-error","is-loading","is-empty"])]),insights:o(()=>[p(w,{"border-variant":"noBorder"},{body:o(()=>[p(O,{"initially-open":0},{default:o(()=>[(l(!0),g(L,null,S(e.subscriptionsReversed,(c,f)=>(l(),h(W,{key:f},{"accordion-header":o(()=>[p(D,{details:c},null,8,["details"])]),"accordion-content":o(()=>[p(A,{details:c},null,8,["details"])]),_:2},1024))),128))]),_:1})]),_:1})]),config:o(()=>[e.codeOutput?(l(),h(w,{key:0,"border-variant":"noBorder"},{body:o(()=>[p(T,{id:"code-block-zone-config",language:"json",code:e.codeOutput,"is-searchable":"","query-key":"zone-config"},null,8,["code"])]),_:1})):_("",!0)]),warnings:o(()=>[p(Z,{warnings:e.warnings},null,8,["warnings"])]),_:1},8,["has-error","is-loading","tabs"])):_("",!0)]),_:1}))])}const Le=N(ne,[["render",ce]]);export{Le as default};