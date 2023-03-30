"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[512],{512:function(n,e,r){r.r(e),r.d(e,{default:function(){return E}});var t,o,a,i=r(861),s=r(439),p=r(757),c=r.n(p),u=r(791),l=r(87),x=r(689),d=r(168),f=r(444),h=f.ZP.form(t||(t=(0,d.Z)(["\n  display: flex;\n  align-items: center;\n  width: 100%;\n  margin-top: 30px;\n  overflow: hidden;\n"]))),g=f.ZP.button(o||(o=(0,d.Z)(["\n  display: inline-block;\n  padding: 8px 16px;\n  font-size: 16px;\n  font-weight: 600;\n  border-radius: 2px;\n  border: none;\n  margin-left: 10px;\n  background-color: rgba(4, 55, 184, 1);\n  box-shadow: 0px 2px 4px -1px rgba(0, 0, 0, 0.2),\n    0px 4px 5px 0px rgba(0, 0, 0, 0.14), 0px 1px 10px 0px rgba(0, 0, 0, 0.12);\n  cursor: pointer;\n  color: #fff;\n  transition: background-color 250ms ease-in-out, color 250ms ease-in-out;\n  &:hover,\n  &:focus {\n    background-color: rgba(240, 240, 240, 1);\n    color: #000;\n  }\n"]))),b=f.ZP.input(a||(a=(0,d.Z)(["\n  display: inline-block;\n  width: 300px;\n  font: inherit;\n  font-size: 16px;\n  padding: 8px 12px;\n  border: none;\n  border-radius: 2px;\n  padding-left: 4px;\n  padding-right: 4px;\n  &::placeholder {\n    padding: 0 12px;\n    font: inherit;\n    font-size: 16px;\n  }\n"]))),m=r(184),v=function(n){var e=n.onSubmit,r=(0,u.useState)(""),t=(0,s.Z)(r,2),o=t[0],a=t[1];return(0,m.jsxs)(h,{onSubmit:function(n){n.preventDefault(),o.trim()?e(o):alert("Enter the word to search for"),a("")},children:[(0,m.jsx)("label",{htmlFor:"searchField"}),(0,m.jsx)(b,{type:"text",autoComplete:"off",autoFocus:!0,placeholder:"Search movie...",name:"searchField",value:o,onChange:function(n){return a(n.target.value.toLowerCase())}}),(0,m.jsx)(g,{type:"submit",children:"Search"})]})},Z=r(243),k=r(945);function w(){return(w=(0,i.Z)(c().mark((function n(e){var r;return c().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.prev=0,n.next=3,Z.Z.get("".concat(k._,"/3/search/movie?api_key=").concat(k.$,"&query=").concat(e));case 3:return r=n.sent,n.abrupt("return",r.data);case 7:n.prev=7,n.t0=n.catch(0),console.error(n.t0);case 10:case"end":return n.stop()}}),n,null,[[0,7]])})))).apply(this,arguments)}var j,y,S,_=function(n){return w.apply(this,arguments)},P=r(761),C=f.ZP.ul(j||(j=(0,d.Z)(["\n  list-style: none;\n  padding: 0;\n  margin-top: 20px;\n"]))),F=f.ZP.li(y||(y=(0,d.Z)(["\n  margin-bottom: 10px;\n"]))),z=(0,f.ZP)(l.OL)(S||(S=(0,d.Z)(["\n  padding: 6px 12px;\n  border-radius: 2px;\n  text-decoration: none;\n  color: #000;\n  font-weight: 600;\n  font-size: 16px;\n  transition: all 250ms ease;\n  &:hover,\n  &:focus {\n    background-color: rgba(4, 55, 184, 1);\n    box-shadow: 0px 2px 4px -1px rgba(0, 0, 0, 0.2),\n      0px 4px 5px 0px rgba(0, 0, 0, 0.14), 0px 1px 10px 0px rgba(0, 0, 0, 0.12);\n    color: #fff;\n  }\n"]))),q=function(n){var e=n.movies,r=(0,x.TH)();return(0,m.jsx)(C,{children:e.map((function(n){return(0,m.jsx)(F,{children:(0,m.jsx)(z,{to:"".concat(n.id),state:{from:r},children:n.title})},n.id)}))})},E=function(){var n,e=(0,u.useState)(null),r=(0,s.Z)(e,2),t=r[0],o=r[1],a=(0,u.useState)(null),p=(0,s.Z)(a,2),d=p[0],f=p[1],h=(0,l.lr)(),g=(0,s.Z)(h,2),b=g[0],Z=g[1],k=(0,x.TH)(),w=null!==(n=b.get("query"))&&void 0!==n?n:"";(0,u.useEffect)((function(){var n=function(){var n=(0,i.Z)(c().mark((function n(){var e;return c().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.prev=0,f(null),n.next=4,_(w);case 4:0===(e=n.sent).results.length?(alert("nothing found, try again"),Z("")):o(e.results),n.next=11;break;case 8:n.prev=8,n.t0=n.catch(0),f(n.t0.message);case 11:case"end":return n.stop()}}),n,null,[[0,8]])})));return function(){return n.apply(this,arguments)}}();w?n():o([])}),[w,Z]);var j=null!==k.state;return(0,m.jsxs)("main",{children:[!j&&(0,m.jsxs)(m.Fragment,{children:[(0,m.jsx)(v,{onSubmit:function(n){var e;Z(""!==(e=n)?{query:e}:{})}}),d&&(0,m.jsxs)("p",{children:["Error: ",d.message]}),null!==t&&(0,m.jsx)(q,{movies:t})]}),(0,m.jsx)(u.Suspense,{fallback:(0,m.jsx)(P.Z,{}),children:(0,m.jsx)(x.j3,{})})]})}},945:function(n,e,r){r.d(e,{$:function(){return o},_:function(){return t}});var t="https://api.themoviedb.org/",o="8a9eba837e68269aae614f789a756a23"}}]);
//# sourceMappingURL=512.25ef3c14.chunk.js.map