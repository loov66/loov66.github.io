(function(t){function e(e){for(var a,s,i=e[0],l=e[1],c=e[2],d=0,p=[];d<i.length;d++)s=i[d],o[s]&&p.push(o[s][0]),o[s]=0;for(a in l)Object.prototype.hasOwnProperty.call(l,a)&&(t[a]=l[a]);u&&u(e);while(p.length)p.shift()();return r.push.apply(r,c||[]),n()}function n(){for(var t,e=0;e<r.length;e++){for(var n=r[e],a=!0,i=1;i<n.length;i++){var l=n[i];0!==o[l]&&(a=!1)}a&&(r.splice(e--,1),t=s(s.s=n[0]))}return t}var a={},o={app:0},r=[];function s(e){if(a[e])return a[e].exports;var n=a[e]={i:e,l:!1,exports:{}};return t[e].call(n.exports,n,n.exports,s),n.l=!0,n.exports}s.m=t,s.c=a,s.d=function(t,e,n){s.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:n})},s.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},s.t=function(t,e){if(1&e&&(t=s(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var n=Object.create(null);if(s.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var a in t)s.d(n,a,function(e){return t[e]}.bind(null,a));return n},s.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return s.d(e,"a",e),e},s.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},s.p="/dist/";var i=window["webpackJsonp"]=window["webpackJsonp"]||[],l=i.push.bind(i);i.push=e,i=i.slice();for(var c=0;c<i.length;c++)e(i[c]);var u=l;r.push([0,"chunk-vendors"]),n()})({0:function(t,e,n){t.exports=n("56d7")},"56d7":function(t,e,n){"use strict";n.r(e);n("cadf"),n("551c"),n("097d");var a=n("2b0e"),o=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{attrs:{id:"app"}},[n("Navbar"),n("router-view")],1)},r=[],s=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("nav",{staticClass:"navbar navbar-expand-lg navbar-light bg-light sticky-top"},[n("router-link",{staticClass:"navbar-brand",attrs:{to:"/"}},[n("img",{staticClass:"d-inline-block align-top",attrs:{src:"img/icons/logo.png",alt:"logo",width:"27",height:"27"}}),t._v("\n    智家\n  ")]),t._m(0),n("div",{staticClass:"collapse navbar-collapse",attrs:{id:"navbarSupportedContent"}},[n("router-link",{staticClass:"navbar-brand",attrs:{to:"/about"}},[t._v("关于")])],1)],1)},i=[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("button",{staticClass:"navbar-toggler",attrs:{type:"button","data-toggle":"collapse","data-target":"#navbarSupportedContent","aria-controls":"navbarSupportedContent","aria-expanded":"false","aria-label":"Toggle navigation"}},[n("span",{staticClass:"navbar-toggler-icon"})])}],l=n("2877"),c={},u=Object(l["a"])(c,s,i,!1,null,null,null),d=u.exports,p={name:"app",components:{Navbar:d},created:function(){console.log(Object({NODE_ENV:"production",BASE_URL:"/dist/"}))}},f=p,v=Object(l["a"])(f,o,r,!1,null,null,null),b=v.exports,g=n("8c4f"),h=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"home"},[n("Movies",{attrs:{data:t.data}})],1)},m=[],_=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"movies"},[n("h5",[t._v(t._s(t.data.title))]),t._l(t.data.subjects,function(e){return n("div",{key:e.id},[n("div",{staticClass:"card",staticStyle:{width:"18rem"}},[n("img",{staticClass:"card-img-top",attrs:{src:e.images.large,alt:""}}),n("div",{staticClass:"card-body"},[n("h5",{staticClass:"card-title"},[t._v("影名："+t._s(e.title))]),n("p",{staticClass:"card-text"},[t._v("\n          豆瓣评分："+t._s(e.rating.average)+" "),n("br"),t._v("\n          上映日期："+t._s(e.mainland_pubdate)+"\n        ")]),n("a",{staticClass:"btn btn-primary",attrs:{href:"#"}},[t._v("Go somewhere")])])])])})],2)},y=[],w={name:"movies",props:["data"],components:{},data:function(){return{}}},C=w,j=Object(l["a"])(C,_,y,!1,null,null,null),O=j.exports,x={name:"home",components:{Movies:O},data:function(){return{data:[]}},created:function(){var t=this;this.$axios.get("".concat(this.$douban.hot)).then(function(e){console.log(e.data),t.data=e.data})}},k=x,S=Object(l["a"])(k,h,m,!1,null,null,null),$=S.exports,E=function(){var t=this,e=t.$createElement;t._self._c;return t._m(0)},N=[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"about"},[n("h1",[t._v("About")]),n("img",{attrs:{src:"img/icons/logo.png",alt:"logo"}}),t._v("logo1\n")])}],M={name:"about",components:{}},P=M,A=Object(l["a"])(P,E,N,!1,null,null,null),T=A.exports;a["a"].use(g["a"]);var B=new g["a"]({mode:"history",base:"/dist/",routes:[{path:"/",name:"home",component:$},{path:"/about",name:"about",component:T}]}),F=n("2f62");a["a"].use(F["a"]);var J=new F["a"].Store({state:{},mutations:{},actions:{}}),q=n("9483");Object(q["a"])("".concat("/dist/","service-worker.js"),{ready:function(){console.log("App is being served from cache by a service worker.\nFor more details, visit https://goo.gl/AFskqB")},registered:function(){console.log("Service worker has been registered.")},cached:function(){console.log("Content has been cached for offline use.")},updatefound:function(){console.log("New content is downloading.")},updated:function(){console.log("New content is available; please refresh.")},offline:function(){console.log("No internet connection found. App is running in offline mode.")},error:function(t){console.error("Error during service worker registration:",t)}});var D=n("bc3a"),G=n.n(D),L={root:"https://douban.uieee.com/",hot:"v2/movie/in_theaters"};a["a"].config.productionTip=!1,a["a"].prototype.$axios=G.a,a["a"].prototype.$douban=L,new a["a"]({router:B,store:J,render:function(t){return t(b)}}).$mount("#app")}});
//# sourceMappingURL=app.c03bbdc0.js.map