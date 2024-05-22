"use strict";(self["webpackChunkjojo_web"]=self["webpackChunkjojo_web"]||[]).push([[532],{9532:function(e,t,a){a.r(t),a.d(t,{default:function(){return _}});var l=a(4108),i=a(9096);const s={key:0,class:""},o={key:1,class:"content"},n={class:"h-36 movie-type-list grid grid-cols-3 md:grid-cols-6 gap-3"},d=["onClick"],c={class:"tv-content-list"},r={class:"content-video-title flex items-center justify-between py-6"},u=(0,l.IL)('<div class="content-video-title-lift flex items-center justify-between"><div class="title-icon"><svg class="w-6 h-6 text-gray-800 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 24 24"><path fill-rule="evenodd" d="M5 10.2c.6 0 1 .4 1 1v.2l6 3.5 6-3.5v-.2a1 1 0 1 1 2 0v.8c0 .4-.2.7-.5.9l-7 4a1 1 0 0 1-1 0l-7-4A1 1 0 0 1 4 12v-.8c0-.6.5-1 1-1Zm0 5c.6 0 1 .4 1 1v.2l6 3.4 6-3.4V16a1 1 0 1 1 2 0v.9c0 .3-.2.6-.5.8l-7 4a1 1 0 0 1-1 0l-7-4A1 1 0 0 1 4 17v-1c0-.5.4-1 1-1Z" clip-rule="evenodd"></path><path d="M12.5 2.1a1 1 0 0 0-1 0l-7 4a1 1 0 0 0 0 1.8l7 4c.3.2.7.2 1 0l7-4a1 1 0 0 0 0-1.7l-7-4Z"></path></svg></div><div class="title-text font-bold text-gray-800 dark:text-white"> 资源 </div></div>',1),v={class:"content-video-list grid grid-cols-3 md:grid-cols-8 gap-3"},g=["src"],m={class:"video-item-card-title mt-2 text-sm font-bold text-gray-800 dark:text-white"},p={class:"video-item-card-heard px-1 py-1 w-full absolute top-0 left-0"},h={class:"item-card-heard-content flex items-center justify-between"},y={class:"item-card-heard-speed text-sm text-gray-200"},x={class:"item-card-heard-score text-sm text-yellow-300"};function f(e,t,a,f,w,b){const k=(0,l.E1)("LoadSkeletonType"),j=(0,l.E1)("router-link");return f.loading?((0,l.Wz)(),(0,l.An)("div",s,[(0,l.K2)(k)])):((0,l.Wz)(),(0,l.An)("div",o,[(0,l.QD)("div",n,[((0,l.Wz)(!0),(0,l.An)(l.ae,null,(0,l.mi)(f.movie_tags,((e,t)=>((0,l.Wz)(),(0,l.An)("div",{key:t,style:(0,i.MN)({backgroundImage:"url("+e.back_image+")"}),onClick:t=>f.typeRef(e.title),class:"h-full flex items-center justify-center w-full rounded-lg py-4 px-4 mx-auto text-center bg-cover bg-center bg-no-repeat dark:bg-gray-700 bg-gray-700 bg-blend-multiply"},[(0,l.QD)("h1",{class:(0,i.WN)([[e.title===f.movie_type?"active":""],"text-xl relative font-extrabold tracking-tight leading-none md:text-4xl lg:text-5xl dark:text-white text-white"])},(0,i.WA)(e.title),3)],12,d)))),128))]),(0,l.QD)("div",c,[(0,l.QD)("div",r,[u,(0,l.K2)(j,{to:{path:"/list/电影",query:{video_tag:f.movie_type}},class:"content-video-title-rigth font-bold text-gray-800 dark:text-white"},{default:(0,l.Ql)((()=>[(0,l.mY)(" 更多 ")])),_:1},8,["to"])]),(0,l.QD)("div",v,[((0,l.Wz)(!0),(0,l.An)(l.ae,null,(0,l.mi)(f.data,((t,a)=>((0,l.Wz)(),(0,l.Az)(j,{to:"/watch/"+t.ID,key:a,class:"video-item-card h-60 brightness-50 w-full rounded-sm object-cover object-center"},{default:(0,l.Ql)((()=>[(0,l.QD)("img",{loading:"lazy",class:"video-item-card-image rounded-sm brightness-50",src:t.image,alt:""},null,8,g),(0,l.QD)("div",m,(0,i.WA)(t.title),1),(0,l.QD)("div",p,[(0,l.QD)("div",h,[(0,l.QD)("div",y,(0,i.WA)(e.COMMON.getSpeed(t)),1),(0,l.QD)("div",x,(0,i.WA)(t.score+"分"),1)])])])),_:2},1032,["to"])))),128))])])]))}var w=a(9736),b=a(2500),k=a(984),j={components:{LoadSkeletonType:k.c},setup(){const e=(0,b.IL)(!0),t=(0,w.Wo)(),a=(0,b.IL)(null),i=(0,b.IL)(null),s=(0,b.IL)(null),o=(0,b.IL)(null),{proxy:n}=(0,l._S)();function d(){a.value="最新"===a.value?"剧情":a.value;let l=`${n.COMMON.apiUrl}/v1/api/video/jojo/type/tag?type=电影&tag=${a.value}&page=1&size=24`;fetch(l,{method:"post",headers:{"content-type":"application/json",Authorization:localStorage.getItem("Authorization")}}).then((e=>{if(!e.ok){const t=new Error(e.statusText);throw t.json=e.json(),t}return e.json()})).then((e=>{200==e.code?s.value=e.data:402==e.code?(t.add({type:"success",time:3e3,text:"刷新token成功!"}),localStorage.setItem("Authorization",e.data)):403==e.code?(t.add({type:"warning",time:3e3,text:"登录失效,请重新登录!"}),n.COMMON.loginOut()):t.add({type:"success",time:3e3,text:e.msg})})).catch((e=>{if(o.value=e,e.json)return e.json.then((e=>{o.value.message=e.message,t.add({type:"success",time:3e3,text:o.value.message})}))})).then((()=>{e.value=!1}))}i.value=n.COMMON.movie_tags,a.value=i.value[0].title,(0,l.u2)((()=>{document.title="电影",d()}));const c=async e=>{a.value=e,t.add({type:"success",time:3e3,text:"获取资源中!"}),d()};return{loading:e,toast:t,movie_type:a,movie_tags:i,data:s,typeRef:c}},methods:{}},A=a(4100);const Q=(0,A.c)(j,[["render",f]]);var _=Q}}]);
//# sourceMappingURL=532.b4532c72.js.map