(function(e){function t(t){for(var o,i,l=t[0],s=t[1],c=t[2],p=0,f=[];p<l.length;p++)i=l[p],r[i]&&f.push(r[i][0]),r[i]=0;for(o in s)Object.prototype.hasOwnProperty.call(s,o)&&(e[o]=s[o]);u&&u(t);while(f.length)f.shift()();return a.push.apply(a,c||[]),n()}function n(){for(var e,t=0;t<a.length;t++){for(var n=a[t],o=!0,l=1;l<n.length;l++){var s=n[l];0!==r[s]&&(o=!1)}o&&(a.splice(t--,1),e=i(i.s=n[0]))}return e}var o={},r={app:0},a=[];function i(t){if(o[t])return o[t].exports;var n=o[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,i),n.l=!0,n.exports}i.m=e,i.c=o,i.d=function(e,t,n){i.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},i.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},i.t=function(e,t){if(1&t&&(e=i(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(i.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var o in e)i.d(n,o,function(t){return e[t]}.bind(null,o));return n},i.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return i.d(t,"a",t),t},i.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},i.p="/dist/";var l=window["webpackJsonp"]=window["webpackJsonp"]||[],s=l.push.bind(l);l.push=t,l=l.slice();for(var c=0;c<l.length;c++)t(l[c]);var u=s;a.push([0,"chunk-vendors"]),n()})({0:function(e,t,n){e.exports=n("56d7")},"56d7":function(e,t,n){"use strict";n.r(t);n("cadf"),n("551c"),n("097d");var o=n("2b0e"),r=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{attrs:{id:"app"}},[n("Navbar"),n("img",{attrs:{src:"/dist/img/icons/logo.png",alt:"logo"}}),e._v("logo1\n  "),n("img",{attrs:{src:"/img/icons/logo.png",alt:"logo"}}),e._v("logo2\n  "),n("router-view")],1)},a=[],i=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("nav",{staticClass:"navbar navbar-expand-lg navbar-light bg-light sticky-top"},[n("router-link",{staticClass:"navbar-brand",attrs:{to:"/"}},[n("img",{staticClass:"d-inline-block align-top",attrs:{src:"/img/icons/logo.png",alt:"logo",width:"27",height:"27"}}),e._v("\n        智家\n    ")]),e._m(0)],1)},l=[function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("button",{staticClass:"navbar-toggler",attrs:{type:"button","data-toggle":"collapse","data-target":"#navbarSupportedContent","aria-controls":"navbarSupportedContent","aria-expanded":"false","aria-label":"Toggle navigation"}},[n("span",{staticClass:"navbar-toggler-icon"})])}],s=n("2877"),c={},u=Object(s["a"])(c,i,l,!1,null,null,null),p=u.exports,f={name:"app",components:{Navbar:p},created:function(){console.log(Object({NODE_ENV:"production",BASE_URL:"/dist/"}))}},d=f,g=Object(s["a"])(d,r,a,!1,null,null,null),v=g.exports,b=n("8c4f"),h=function(){var e=this,t=e.$createElement;e._self._c;return e._m(0)},m=[function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"home"},[n("h1",[e._v("Home")])])}],_={name:"home",components:{}},w=_,y=Object(s["a"])(w,h,m,!1,null,null,null),O=y.exports;o["a"].use(b["a"]);var j=new b["a"]({mode:"history",base:"/dist/",routes:[{path:"/",name:"home",component:O}]}),k=n("2f62");o["a"].use(k["a"]);var x=new k["a"].Store({state:{},mutations:{},actions:{}}),S=n("9483");Object(S["a"])("".concat("/dist/","service-worker.js"),{ready:function(){console.log("App is being served from cache by a service worker.\nFor more details, visit https://goo.gl/AFskqB")},registered:function(){console.log("Service worker has been registered.")},cached:function(){console.log("Content has been cached for offline use.")},updatefound:function(){console.log("New content is downloading.")},updated:function(){console.log("New content is available; please refresh.")},offline:function(){console.log("No internet connection found. App is running in offline mode.")},error:function(e){console.error("Error during service worker registration:",e)}}),o["a"].config.productionTip=!1,new o["a"]({router:j,store:x,render:function(e){return e(v)}}).$mount("#app")}});
//# sourceMappingURL=app.c84530b8.js.map