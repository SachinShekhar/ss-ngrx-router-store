(window.webpackJsonp=window.webpackJsonp||[]).push([[1],{0:function(t,e,r){t.exports=r("zUnb")},zUnb:function(t,e,r){"use strict";r.r(e);var n=r("EM62"),a=r("e4iD"),s=r("sEIs"),o=r("sN6X"),i=r("9cQL"),c=r("2kYt"),b=r("9eRz");let l=(()=>{let t=class{serialize(t){return{url:t.url,params:u(t.root,t=>t.params),queryParams:t.root.queryParams,fragment:t.root.fragment,data:u(t.root,t=>t.data)}}};return t.\u0275fac=function(e){return new(e||t)},t.\u0275prov=n.Bb({token:t,factory:t.\u0275fac}),t})();function u(t,e){return 0===t.children.length?e(t):t.children.reduce((r,n)=>Object.assign(Object.assign(Object.assign({},r),e(t)),u(n,e)),{})}const p=Object(o.m)("router");let m=(()=>{let t=class{constructor(t){this.store=t}ngOnInit(){this.routerState$=this.store.select(p)}};return t.\u0275fac=function(e){return new(e||t)(n.Fb(o.h))},t.\u0275cmp=n.zb({type:t,selectors:[["ss-ngrx-router-store-state"]],decls:4,vars:5,consts:[[1,"container"]],template:function(t,e){1&t&&(n.Ib(0,"pre",0),n.Wb(1),n.Rb(2,"json"),n.Rb(3,"async"),n.Hb()),2&t&&(n.wb(1),n.Xb("      ",n.Sb(2,1,n.Sb(3,3,e.routerState$)),"\n    "))},pipes:[c.f,c.b],styles:[".container[_ngcontent-%COMP%] {\n        font-size: large;\n      }"]}),t})();const g={stateKey:"router",serializer:l};let d=(()=>{let t=class{};return t.\u0275mod=n.Db({type:t}),t.\u0275inj=n.Cb({factory:function(e){return new(e||t)},imports:[[c.c,o.j.forFeature("router",b.b),b.a.forRoot(g)]]}),t})(),h=(()=>{class t{}return t.\u0275fac=function(e){return new(e||t)},t.\u0275cmp=n.zb({type:t,selectors:[["app-root"]],decls:14,vars:0,consts:[[1,"shields"],["href","https://github.com/SachinShekhar/ss-ngrx-router-store/actions?query=workflow%3ABuild"],["src","https://github.com/SachinShekhar/ss-ngrx-router-store/workflows/Build/badge.svg","alt","Build"],["href","https://github.com/SachinShekhar/ss-ngrx-router-store"],["alt","GitHub last commit","src","https://img.shields.io/github/last-commit/SachinShekhar/ss-ngrx-router-store?logo=github"],["href","https://www.npmjs.com/package/ss-ngrx-router-store"],["alt","npm (tag)","src","https://img.shields.io/npm/v/ss-ngrx-router-store/latest?logo=npm"],["alt","npm bundle size","src","https://img.shields.io/bundlephobia/minzip/ss-ngrx-router-store?label=npm%20-%20minzipped&logo=npm"],["href","https://github.com/SachinShekhar/ss-ngrx-router-store/blob/master/LICENSE"],["alt","NPM License","src","https://img.shields.io/npm/l/ss-ngrx-router-store"]],template:function(t,e){1&t&&(n.Ib(0,"h1"),n.Wb(1," Simple Serialized NgRx Router Store\n"),n.Hb(),n.Ib(2,"div",0),n.Ib(3,"a",1),n.Gb(4,"img",2),n.Hb(),n.Ib(5,"a",3),n.Gb(6,"img",4),n.Hb(),n.Ib(7,"a",5),n.Gb(8,"img",6),n.Hb(),n.Ib(9,"a",5),n.Gb(10,"img",7),n.Hb(),n.Ib(11,"a",8),n.Gb(12,"img",9),n.Hb(),n.Hb(),n.Gb(13,"router-outlet"))},directives:[s.g],styles:["h1[_ngcontent-%COMP%]{margin-bottom:5px;margin-top:5px}.shields[_ngcontent-%COMP%]{margin-bottom:20px}.shields[_ngcontent-%COMP%] > a[_ngcontent-%COMP%]{margin-right:5px}"]}),t})();const f={},v=[function(t){return(e,r)=>(console.log("state",e),console.log("action",r),t(e,r))}];let I=(()=>{class t{constructor(t){this.router=t}ngOnInit(){}navigate(t){switch(t){case"params":this.router.navigate(["folders","inbox","mails","524613875"],{preserveFragment:!0,queryParamsHandling:"preserve"});break;case"matrixParams":this.router.navigate(["folders","inbox","mails","524613875",{fullView:!0}],{preserveFragment:!0,queryParamsHandling:"preserve"});break;case"queryParams":this.router.navigate([],{queryParams:{search:"ss-ngrx-store-router",type:"angular-library"},preserveFragment:!0});break;case"fragment":this.router.navigate([],{fragment:"popup",queryParamsHandling:"preserve"});break;case"data":this.router.navigate(["route-with-static-data"],{preserveFragment:!0,queryParamsHandling:"preserve"})}}}return t.\u0275fac=function(e){return new(e||t)(n.Fb(s.e))},t.\u0275cmp=n.zb({type:t,selectors:[["ng-component"]],decls:38,vars:0,consts:[[1,"container"],[1,"navigation"],[3,"click"],["href","https://stackblitz.com/edit/ss-ngrx-router-store?file=src/app/routing.module.ts","target","_blank","rel","noopener"],[1,"state"]],template:function(t,e){1&t&&(n.Ib(0,"div",0),n.Ib(1,"div",1),n.Ib(2,"b"),n.Wb(3,"Params: "),n.Hb(),n.Ib(4,"a",2),n.Pb("click",(function(t){return e.navigate("params")})),n.Wb(5,"folders/:folderId/mails/:mailId"),n.Hb(),n.Gb(6,"br"),n.Ib(7,"b"),n.Wb(8,"Matrix Params: "),n.Hb(),n.Ib(9,"a",2),n.Pb("click",(function(t){return e.navigate("matrixParams")})),n.Wb(10,"folders/:folderId/mails/:mailId;fullView=true"),n.Hb(),n.Gb(11,"br"),n.Ib(12,"b"),n.Wb(13,"Query Params: "),n.Hb(),n.Ib(14,"a",2),n.Pb("click",(function(t){return e.navigate("queryParams")})),n.Wb(15,"?search=ss-ngrx-store-router?type=angular-library"),n.Hb(),n.Gb(16,"br"),n.Ib(17,"b"),n.Wb(18,"Fragment: "),n.Hb(),n.Ib(19,"a",2),n.Pb("click",(function(t){return e.navigate("fragment")})),n.Wb(20,"#popup"),n.Hb(),n.Gb(21,"br"),n.Ib(22,"b"),n.Wb(23,"Data: "),n.Hb(),n.Ib(24,"a",2),n.Pb("click",(function(t){return e.navigate("data")})),n.Wb(25,"route-with-static-data"),n.Hb(),n.Hb(),n.Ib(26,"p"),n.Wb(27," Feel free to experiment in the address bar.. Or, "),n.Ib(28,"a",3),n.Wb(29,"edit routes on Stackblitz"),n.Hb(),n.Wb(30,".. "),n.Hb(),n.Ib(31,"div",4),n.Ib(32,"h3"),n.Wb(33,"SS Router State:"),n.Hb(),n.Gb(34,"ss-ngrx-router-store-state"),n.Ib(35,"p"),n.Wb(36," This demo is running in dev environment. You can inspect Actions and State in the browser console as well as Redux DevTools. "),n.Hb(),n.Hb(),n.Hb(),n.Gb(37,"router-outlet"))},directives:[m,s.g],styles:[".container[_ngcontent-%COMP%]{font-size:large}.navigation[_ngcontent-%COMP%] > a[_ngcontent-%COMP%]{cursor:pointer;text-decoration:underline;font-family:Courier New,Courier,monospace}"]}),t})();const w=[{path:"",component:I},{path:"folders/:folderId",component:I,children:[{path:"mails/:mailId",component:(()=>{class t{constructor(){}ngOnInit(){}}return t.\u0275fac=function(e){return new(e||t)},t.\u0275cmp=n.zb({type:t,selectors:[["app-child"]],decls:0,vars:0,template:function(t,e){},styles:[""]}),t})()}]},{path:"route-with-static-data",component:I,data:{lib:"ss-ngrx-router-store"}},{path:"**",component:I}];let y=(()=>{class t{}return t.\u0275mod=n.Db({type:t,bootstrap:[h]}),t.\u0275inj=n.Cb({factory:function(e){return new(e||t)},providers:[],imports:[[a.a.withServerTransition({appId:"serverApp"}),s.f.forRoot(w,{initialNavigation:"enabled"}),o.j.forRoot(f,{metaReducers:v}),i.a.instrument({maxAge:25,logOnly:!1}),d]]}),t})();document.addEventListener("DOMContentLoaded",()=>{a.b().bootstrapModule(y).catch(t=>console.error(t))})},zn8P:function(t,e){function r(t){return Promise.resolve().then((function(){var e=new Error("Cannot find module '"+t+"'");throw e.code="MODULE_NOT_FOUND",e}))}r.keys=function(){return[]},r.resolve=r,t.exports=r,r.id="zn8P"}},[[0,0,5]]]);
//# sourceMappingURL=main-es2015.b7cbd897d55cb6a35f3f.js.map