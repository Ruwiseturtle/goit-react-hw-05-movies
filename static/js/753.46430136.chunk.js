/*! For license information please see 753.46430136.chunk.js.LICENSE.txt */
"use strict";(self.webpackChunkgoit_react_hw_05_movies=self.webpackChunkgoit_react_hw_05_movies||[]).push([[753],{417:function(t,e,r){r.d(e,{Df:function(){return u},Ku:function(){return f},YJ:function(){return l},fI:function(){return d},zi:function(){return y}});var n=r(861),o=r(243);function i(){i=function(){return e};var t,e={},r=Object.prototype,n=r.hasOwnProperty,o=Object.defineProperty||function(t,e,r){t[e]=r.value},a="function"==typeof Symbol?Symbol:{},c=a.iterator||"@@iterator",u=a.asyncIterator||"@@asyncIterator",s=a.toStringTag||"@@toStringTag";function l(t,e,r){return Object.defineProperty(t,e,{value:r,enumerable:!0,configurable:!0,writable:!0}),t[e]}try{l({},"")}catch(t){l=function(t,e,r){return t[e]=r}}function h(t,e,r,n){var i=e&&e.prototype instanceof g?e:g,a=Object.create(i.prototype),c=new S(n||[]);return o(a,"_invoke",{value:Z(t,r,c)}),a}function f(t,e,r){try{return{type:"normal",arg:t.call(e,r)}}catch(t){return{type:"throw",arg:t}}}e.wrap=h;var p="suspendedStart",d="executing",v="completed",y={};function g(){}function m(){}function x(){}var w={};l(w,c,(function(){return this}));var b=Object.getPrototypeOf,j=b&&b(b(G([])));j&&j!==r&&n.call(j,c)&&(w=j);var _=x.prototype=g.prototype=Object.create(w);function k(t){["next","throw","return"].forEach((function(e){l(t,e,(function(t){return this._invoke(e,t)}))}))}function L(t,e){function r(o,i,a,c){var u=f(t[o],t,i);if("throw"!==u.type){var s=u.arg,l=s.value;return l&&"object"==typeof l&&n.call(l,"__await")?e.resolve(l.__await).then((function(t){r("next",t,a,c)}),(function(t){r("throw",t,a,c)})):e.resolve(l).then((function(t){s.value=t,a(s)}),(function(t){return r("throw",t,a,c)}))}c(u.arg)}var i;o(this,"_invoke",{value:function(t,n){function o(){return new e((function(e,o){r(t,n,e,o)}))}return i=i?i.then(o,o):o()}})}function Z(e,r,n){var o=p;return function(i,a){if(o===d)throw new Error("Generator is already running");if(o===v){if("throw"===i)throw a;return{value:t,done:!0}}for(n.method=i,n.arg=a;;){var c=n.delegate;if(c){var u=E(c,n);if(u){if(u===y)continue;return u}}if("next"===n.method)n.sent=n._sent=n.arg;else if("throw"===n.method){if(o===p)throw o=v,n.arg;n.dispatchException(n.arg)}else"return"===n.method&&n.abrupt("return",n.arg);o=d;var s=f(e,r,n);if("normal"===s.type){if(o=n.done?v:"suspendedYield",s.arg===y)continue;return{value:s.arg,done:n.done}}"throw"===s.type&&(o=v,n.method="throw",n.arg=s.arg)}}}function E(e,r){var n=r.method,o=e.iterator[n];if(o===t)return r.delegate=null,"throw"===n&&e.iterator.return&&(r.method="return",r.arg=t,E(e,r),"throw"===r.method)||"return"!==n&&(r.method="throw",r.arg=new TypeError("The iterator does not provide a '"+n+"' method")),y;var i=f(o,e.iterator,r.arg);if("throw"===i.type)return r.method="throw",r.arg=i.arg,r.delegate=null,y;var a=i.arg;return a?a.done?(r[e.resultName]=a.value,r.next=e.nextLoc,"return"!==r.method&&(r.method="next",r.arg=t),r.delegate=null,y):a:(r.method="throw",r.arg=new TypeError("iterator result is not an object"),r.delegate=null,y)}function O(t){var e={tryLoc:t[0]};1 in t&&(e.catchLoc=t[1]),2 in t&&(e.finallyLoc=t[2],e.afterLoc=t[3]),this.tryEntries.push(e)}function P(t){var e=t.completion||{};e.type="normal",delete e.arg,t.completion=e}function S(t){this.tryEntries=[{tryLoc:"root"}],t.forEach(O,this),this.reset(!0)}function G(e){if(e||""===e){var r=e[c];if(r)return r.call(e);if("function"==typeof e.next)return e;if(!isNaN(e.length)){var o=-1,i=function r(){for(;++o<e.length;)if(n.call(e,o))return r.value=e[o],r.done=!1,r;return r.value=t,r.done=!0,r};return i.next=i}}throw new TypeError(typeof e+" is not iterable")}return m.prototype=x,o(_,"constructor",{value:x,configurable:!0}),o(x,"constructor",{value:m,configurable:!0}),m.displayName=l(x,s,"GeneratorFunction"),e.isGeneratorFunction=function(t){var e="function"==typeof t&&t.constructor;return!!e&&(e===m||"GeneratorFunction"===(e.displayName||e.name))},e.mark=function(t){return Object.setPrototypeOf?Object.setPrototypeOf(t,x):(t.__proto__=x,l(t,s,"GeneratorFunction")),t.prototype=Object.create(_),t},e.awrap=function(t){return{__await:t}},k(L.prototype),l(L.prototype,u,(function(){return this})),e.AsyncIterator=L,e.async=function(t,r,n,o,i){void 0===i&&(i=Promise);var a=new L(h(t,r,n,o),i);return e.isGeneratorFunction(r)?a:a.next().then((function(t){return t.done?t.value:a.next()}))},k(_),l(_,s,"Generator"),l(_,c,(function(){return this})),l(_,"toString",(function(){return"[object Generator]"})),e.keys=function(t){var e=Object(t),r=[];for(var n in e)r.push(n);return r.reverse(),function t(){for(;r.length;){var n=r.pop();if(n in e)return t.value=n,t.done=!1,t}return t.done=!0,t}},e.values=G,S.prototype={constructor:S,reset:function(e){if(this.prev=0,this.next=0,this.sent=this._sent=t,this.done=!1,this.delegate=null,this.method="next",this.arg=t,this.tryEntries.forEach(P),!e)for(var r in this)"t"===r.charAt(0)&&n.call(this,r)&&!isNaN(+r.slice(1))&&(this[r]=t)},stop:function(){this.done=!0;var t=this.tryEntries[0].completion;if("throw"===t.type)throw t.arg;return this.rval},dispatchException:function(e){if(this.done)throw e;var r=this;function o(n,o){return c.type="throw",c.arg=e,r.next=n,o&&(r.method="next",r.arg=t),!!o}for(var i=this.tryEntries.length-1;i>=0;--i){var a=this.tryEntries[i],c=a.completion;if("root"===a.tryLoc)return o("end");if(a.tryLoc<=this.prev){var u=n.call(a,"catchLoc"),s=n.call(a,"finallyLoc");if(u&&s){if(this.prev<a.catchLoc)return o(a.catchLoc,!0);if(this.prev<a.finallyLoc)return o(a.finallyLoc)}else if(u){if(this.prev<a.catchLoc)return o(a.catchLoc,!0)}else{if(!s)throw new Error("try statement without catch or finally");if(this.prev<a.finallyLoc)return o(a.finallyLoc)}}}},abrupt:function(t,e){for(var r=this.tryEntries.length-1;r>=0;--r){var o=this.tryEntries[r];if(o.tryLoc<=this.prev&&n.call(o,"finallyLoc")&&this.prev<o.finallyLoc){var i=o;break}}i&&("break"===t||"continue"===t)&&i.tryLoc<=e&&e<=i.finallyLoc&&(i=null);var a=i?i.completion:{};return a.type=t,a.arg=e,i?(this.method="next",this.next=i.finallyLoc,y):this.complete(a)},complete:function(t,e){if("throw"===t.type)throw t.arg;return"break"===t.type||"continue"===t.type?this.next=t.arg:"return"===t.type?(this.rval=this.arg=t.arg,this.method="return",this.next="end"):"normal"===t.type&&e&&(this.next=e),y},finish:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var r=this.tryEntries[e];if(r.finallyLoc===t)return this.complete(r.completion,r.afterLoc),P(r),y}},catch:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var r=this.tryEntries[e];if(r.tryLoc===t){var n=r.completion;if("throw"===n.type){var o=n.arg;P(r)}return o}}throw new Error("illegal catch attempt")},delegateYield:function(e,r,n){return this.delegate={iterator:G(e),resultName:r,nextLoc:n},"next"===this.method&&(this.arg=t),y}},e}var a="https://api.themoviedb.org/3/",c="3af5d52e1c45bc82f847627d42b14ae7";function u(){return s.apply(this,arguments)}function s(){return(s=(0,n.Z)(i().mark((function t(){var e;return i().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return a+"trending/movie/day?api_key="+c,t.next=3,o.Z.get("https://api.themoviedb.org/3/trending/movie/day?api_key=3af5d52e1c45bc82f847627d42b14ae7");case 3:return e=t.sent,t.abrupt("return",e);case 5:case"end":return t.stop()}}),t)})))).apply(this,arguments)}function l(t){return h.apply(this,arguments)}function h(){return(h=(0,n.Z)(i().mark((function t(e){var r,n;return i().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return r=a+"movie/"+e+"?api_key="+c,t.next=3,o.Z.get(r);case 3:return n=t.sent,t.abrupt("return",n);case 5:case"end":return t.stop()}}),t)})))).apply(this,arguments)}function f(t){return p.apply(this,arguments)}function p(){return(p=(0,n.Z)(i().mark((function t(e){var r,n;return i().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return r=a+"movie/"+e+"/credits?api_key="+c,t.next=3,o.Z.get(r);case 3:return n=t.sent,t.abrupt("return",n);case 5:case"end":return t.stop()}}),t)})))).apply(this,arguments)}function d(t){return v.apply(this,arguments)}function v(){return(v=(0,n.Z)(i().mark((function t(e){var r,n;return i().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return r=a+"movie/"+e+"/reviews?api_key="+c,t.next=3,o.Z.get(r);case 3:return n=t.sent,t.abrupt("return",n);case 5:case"end":return t.stop()}}),t)})))).apply(this,arguments)}function y(t){return g.apply(this,arguments)}function g(){return(g=(0,n.Z)(i().mark((function t(e){var r,n;return i().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return r=a+"search/movie?api_key="+c+"&query="+e+"&include_adult=false",t.next=3,o.Z.get(r);case 3:return n=t.sent,t.abrupt("return",n);case 5:case"end":return t.stop()}}),t)})))).apply(this,arguments)}},753:function(t,e,r){r.r(e),r.d(e,{default:function(){return _}});var n,o,i,a,c,u,s=r(439),l=r(689),h=r(87),f=r(791),p=r(168),d=r(867),v=r(184),y=(0,d.ZP)(h.rU)(n||(n=(0,p.Z)(["\n  display: inline-flex;\n  align-items: center;\n  gap: 4px;\n  padding: 8px 0;\n  color: black;\n  text-decoration: none;\n  font-weight: 500;\n  text-transform: uppercase;\n\n  :hover {\n    color: orangered;\n  }\n"]))),g=function(t){var e=t.to,r=t.children;return(0,v.jsx)(y,{to:e,children:r})},m=r(417),x=d.ZP.div(o||(o=(0,p.Z)(["\n    display: flex;\n  border-bottom: 1px solid black;\n"]))),w=d.ZP.img(i||(i=(0,p.Z)(["\n    width: 200px;\n"]))),b=d.ZP.div(a||(a=(0,p.Z)(["\n padding-left: 10px;\n"]))),j=(d.ZP.div(c||(c=(0,p.Z)(["\n  display: block;\n"]))),d.ZP.div(u||(u=(0,p.Z)(["\n  border-bottom: 1px solid black;\n"])))),_=function(){var t,e=(0,l.UO)().movieId,r=(0,f.useState)(null),n=(0,s.Z)(r,2),o=n[0],i=n[1],a=(0,l.TH)(),c=(0,f.useState)(""),u=(0,s.Z)(c,2),p=u[0],d=u[1],y=(0,f.useState)(null),_=(0,s.Z)(y,2),k=_[0],L=_[1];return(0,f.useEffect)((function(){if(!k)try{(0,m.YJ)(e).then((function(t){return t})).then((function(t){L(null),i(t.data),d(t.data.release_date.split("-",1))})).catch((function(t){L(t)}))}catch(k){}}),[e,k]),k?(0,v.jsx)("div",{children:"Something went wrong. Check your network connection..."}):(0,v.jsxs)("main",{children:[(0,v.jsx)(f.Suspense,{fallback:(0,v.jsx)("div",{children:"Loading page..."}),children:(0,v.jsxs)("div",{children:[(0,v.jsx)(g,{to:a.state,children:"<- Go Back"}),o&&(0,v.jsxs)(x,{children:[(0,v.jsxs)("div",{children:[o.poster_path&&(0,v.jsx)(w,{src:"https://image.tmdb.org/t/p/original/".concat(o.poster_path),alt:o.title}),(0,v.jsx)("div",{})]}),(0,v.jsxs)(b,{children:[(0,v.jsx)("h2",{children:o.title+" ("+p[0]+")"}),(0,v.jsxs)("p",{children:["User score: ",Math.ceil(10*o.vote_average)," % "]}),(0,v.jsx)("h3",{children:"Overview"}),(0,v.jsx)("p",{children:o.overview}),(0,v.jsx)("h3",{children:"Genres"}),(0,v.jsx)("p",{children:null===(t=o.genres)||void 0===t?void 0:t.map((function(t){return t.name+" "}))})]})]})]})}),o&&(0,v.jsxs)(j,{children:[(0,v.jsx)("p",{children:"Additional information"}),(0,v.jsxs)("ul",{children:[(0,v.jsx)("li",{children:(0,v.jsx)(h.rU,{to:"cast",state:a.state,children:"Cast"})}),(0,v.jsx)("li",{children:(0,v.jsx)(h.rU,{to:"reviews",state:a.state,children:"reviews"})})]})]}),(0,v.jsx)(f.Suspense,{fallback:(0,v.jsx)("div",{children:"Loading..."}),children:(0,v.jsx)(l.j3,{})})]})}}}]);
//# sourceMappingURL=753.46430136.chunk.js.map