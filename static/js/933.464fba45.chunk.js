"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[933],{933:function(n,e,r){r.r(e),r.d(e,{default:function(){return z}});var t,a,o,i=r(5861),p=r(9439),s=r(7757),c=r.n(s),u=r(2791),l=r(1087),x=r(7689),d=r(168),f=r(6444),h=f.ZP.form(t||(t=(0,d.Z)(["\n  display: flex;\n  align-items: center;\n  width: 100%;\n  height: 50px;\n  margin-top: 30px;\n  overflow: hidden;\n"]))),b=f.ZP.button(a||(a=(0,d.Z)(["\n  display: inline-block;\n  padding: 9px 16px;\n  font-size: 16px;\n  font-weight: 600;\n  border-radius: 2px;\n  border: none;\n  margin-left: 10px;\n  background-color: rgba(4, 55, 184, 1);\n  box-shadow: 0px 2px 4px -1px rgba(0, 0, 0, 0.2),\n    0px 4px 5px 0px rgba(0, 0, 0, 0.14), 0px 1px 10px 0px rgba(0, 0, 0, 0.12);\n  color: #fff;\n  transition: background 250ms ease-in-out, color 250ms ease-in-out;\n  &:hover,\n  &:focus {\n    background-color: rgba(240, 240, 240, 1);\n    color: rgba(4, 55, 184, 1);\n  }\n"]))),g=f.ZP.input(o||(o=(0,d.Z)(["\n  display: inline-block;\n  width: 300px;\n  font: inherit;\n  font-size: 16px;\n  padding: 8px 12px;\n  border: none;\n  border-radius: 2px;\n  box-shadow: 0px 2px 4px -1px rgba(0, 0, 0, 0.2),\n    0px 4px 5px 0px rgba(0, 0, 0, 0.14), 0px 1px 10px 0px rgba(0, 0, 0, 0.12);\n  &::placeholder {\n    font: inherit;\n    font-size: 16px;\n  }\n"]))),m=r(184),v=function(n){var e=n.onSubmit,r=(0,u.useState)(""),t=(0,p.Z)(r,2),a=t[0],o=t[1];return(0,m.jsxs)(h,{onSubmit:function(n){n.preventDefault(),a.trim()?e(a):alert("Enter the word to search for"),o("")},children:[(0,m.jsx)("label",{htmlFor:"searchField"}),(0,m.jsx)(g,{type:"text",autoComplete:"off",autoFocus:!0,placeholder:"Search movie...",name:"searchField",value:a,onChange:function(n){return o(n.target.value.toLowerCase())}}),(0,m.jsx)(b,{type:"submit",children:"Search"})]})},k=r(1243),w=r(945);function Z(){return(Z=(0,i.Z)(c().mark((function n(e){var r;return c().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.prev=0,n.next=3,k.Z.get("".concat(w._,"/3/search/movie?api_key=").concat(w.$,"&query=").concat(e));case 3:return r=n.sent,n.abrupt("return",r.data);case 7:n.prev=7,n.t0=n.catch(0),console.error(n.t0);case 10:case"end":return n.stop()}}),n,null,[[0,7]])})))).apply(this,arguments)}var j,y,S=function(n){return Z.apply(this,arguments)},_=r(4699),C=f.ZP.ul(j||(j=(0,d.Z)(["\n  list-style: none;\n  padding: 0;\n  margin-top: 20px;\n"]))),F=(0,f.ZP)(l.OL)(y||(y=(0,d.Z)(["\ndisplay: block;\n  padding: 6px 12px;\n  border-radius: 2px;\n  text-decoration: none;\n  color: #000;\n  font-weight: 600;\n  font-size: 16px;\n  transition: all 250ms ease;\n  &:hover,\n  &:focus {\n    background-color: rgba(4, 55, 184, 1);\n    box-shadow: 0px 2px 4px -1px rgba(0, 0, 0, 0.2),\n      0px 4px 5px 0px rgba(0, 0, 0, 0.14), 0px 1px 10px 0px rgba(0, 0, 0, 0.12);\n    color: #fff;\n  }\n"]))),P=function(n){var e=n.movies,r=(0,x.TH)();return(0,m.jsx)(C,{children:e.map((function(n){return(0,m.jsx)("li",{children:(0,m.jsx)(F,{to:"".concat(n.id),state:{from:r},children:n.title})},n.id)}))})},z=function(){var n,e=(0,u.useState)(null),r=(0,p.Z)(e,2),t=r[0],a=r[1],o=(0,u.useState)(null),s=(0,p.Z)(o,2),d=s[0],f=s[1],h=(0,l.lr)(),b=(0,p.Z)(h,2),g=b[0],k=b[1],w=(0,x.TH)(),Z=null!==(n=g.get("query"))&&void 0!==n?n:"";(0,u.useEffect)((function(){var n=function(){var n=(0,i.Z)(c().mark((function n(){var e;return c().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.prev=0,f(null),n.next=4,S(Z);case 4:0===(e=n.sent).results.length?(alert("nothing found, try again"),k("")):a(e.results),n.next=11;break;case 8:n.prev=8,n.t0=n.catch(0),f(n.t0.message);case 11:case"end":return n.stop()}}),n,null,[[0,8]])})));return function(){return n.apply(this,arguments)}}();Z?n():a([])}),[Z,k]);var j=null!==w.state;return(0,m.jsxs)("main",{children:[!j&&(0,m.jsxs)(m.Fragment,{children:[(0,m.jsx)(v,{onSubmit:function(n){var e;k(""!==(e=n)?{query:e}:{})}}),d&&(0,m.jsxs)("p",{children:["Error: ",d.message]}),null!==t&&(0,m.jsx)(P,{movies:t})]}),(0,m.jsx)(u.Suspense,{fallback:(0,m.jsx)(_.Z,{}),children:(0,m.jsx)(x.j3,{})})]})}},945:function(n,e,r){r.d(e,{$:function(){return a},_:function(){return t}});var t="https://api.themoviedb.org/",a="8a9eba837e68269aae614f789a756a23"}}]);
//# sourceMappingURL=933.464fba45.chunk.js.map