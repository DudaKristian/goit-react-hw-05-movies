"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[871],{669:function(n,t,e){e.r(t);var r=e(885),c=e(791),a=e(871),u=e(386),o=e(184);t.default=function(){var n=(0,a.bx)(),t=(0,c.useState)([]),e=(0,r.Z)(t,2),i=e[0],s=e[1];if((0,c.useEffect)((function(){(0,u.Ce)(n,s)}),[n]),i){if(!1===i.success)return(0,o.jsx)(a.Fg,{to:"*",replace:!0});var p={listStyle:"none"};return(0,o.jsx)("div",{children:0!==i.length?(0,o.jsx)("ul",{children:i.map((function(n){var t=n.id,e=n.content;return(0,o.jsx)("li",{style:p,children:(0,o.jsx)("p",{children:e})},t)}))}):(0,o.jsx)("p",{children:"We don't have any reviews for this movie"})})}}},386:function(n,t,e){e.d(t,{pq:function(){return v},$4:function(){return h},Ce:function(){return k},aK:function(){return i},Lo:function(){return p}});var r=e(861),c=e(757),a=e.n(c),u="7b66a9815954757a118f4f7577a8110b",o="https://api.themoviedb.org/3/";function i(n,t){return s.apply(this,arguments)}function s(){return(s=(0,r.Z)(a().mark((function n(t,e){return a().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.prev=0,n.next=3,fetch("".concat(o,"search/movie?api_key=").concat(u,"&query=").concat(t,"&language=en-US&page=1")).then((function(n){return n.json()})).then((function(n){return e(n.results)}));case 3:n.next=8;break;case 5:n.prev=5,n.t0=n.catch(0),alert("".concat(n.t0));case 8:case"end":return n.stop()}}),n,null,[[0,5]])})))).apply(this,arguments)}function p(n){return f.apply(this,arguments)}function f(){return(f=(0,r.Z)(a().mark((function n(t){return a().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.prev=0,n.next=3,fetch("".concat(o,"trending/all/day?api_key=").concat(u)).then((function(n){return n.json()})).then((function(n){return t(n.results)}));case 3:n.next=8;break;case 5:n.prev=5,n.t0=n.catch(0),alert("".concat(n.t0));case 8:case"end":return n.stop()}}),n,null,[[0,5]])})))).apply(this,arguments)}function h(n,t){return l.apply(this,arguments)}function l(){return(l=(0,r.Z)(a().mark((function n(t,e){return a().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:if(t){n.next=2;break}return n.abrupt("return");case 2:return n.prev=2,n.next=5,fetch("".concat(o,"movie/").concat(t,"?api_key=").concat(u,"&language=en-US")).then((function(n){return n.json()})).then((function(n){return e(n)}));case 5:n.next=10;break;case 7:n.prev=7,n.t0=n.catch(2),alert("".concat(n.t0));case 10:case"end":return n.stop()}}),n,null,[[2,7]])})))).apply(this,arguments)}function v(n,t){return x.apply(this,arguments)}function x(){return(x=(0,r.Z)(a().mark((function n(t,e){return a().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.prev=0,n.next=3,fetch("".concat(o,"movie/").concat(t,"/credits?api_key=").concat(u,"&language=en-US")).then((function(n){return n.json()})).then((function(n){return e(n.cast)}));case 3:n.next=8;break;case 5:n.prev=5,n.t0=n.catch(0),alert("".concat(n.t0));case 8:case"end":return n.stop()}}),n,null,[[0,5]])})))).apply(this,arguments)}function k(n,t){return y.apply(this,arguments)}function y(){return(y=(0,r.Z)(a().mark((function n(t,e){return a().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.prev=0,n.next=3,fetch("".concat(o,"movie/").concat(t,"/reviews?api_key=").concat(u,"&language=en-US&page=1")).then((function(n){return n.json()})).then((function(n){return e(n.results)}));case 3:n.next=8;break;case 5:n.prev=5,n.t0=n.catch(0),alert("".concat(n.t0));case 8:case"end":return n.stop()}}),n,null,[[0,5]])})))).apply(this,arguments)}}}]);
//# sourceMappingURL=871.630a0841.chunk.js.map