(this["webpackJsonpreact-tictactoe"]=this["webpackJsonpreact-tictactoe"]||[]).push([[0],{14:function(t,e,c){},15:function(t,e,c){"use strict";c.r(e);var n=c(0),r=c(1),a=c(7),i=c.n(a),s=(c(14),c(6)),o=c(4),u=c(8);var j=function(t){var e=t.value,c=t.onClick;return Object(n.jsx)("button",{className:e?"squares ".concat(e):"squares",onClick:c,children:e})},l=function(t){var e=t.squares,c=t.onClick;return Object(n.jsx)("div",{className:"board",children:e.map((function(t,e){return Object(n.jsx)(j,{value:t,onClick:function(){return c(e)}},e)}))})},b=function(){var t=Object(r.useState)([Array(9).fill(null)]),e=Object(o.a)(t,2),c=e[0],a=e[1],i=Object(r.useState)(0),j=Object(o.a)(i,2),b=j[0],O=j[1],h=Object(r.useState)(!0),d=Object(o.a)(h,2),f=d[0],v=d[1],x=function(t){for(var e=[[0,1,2],[3,4,5],[6,7,8],[0,3,6],[1,4,7],[2,5,8],[0,4,8],[2,4,6]],c=0;c<e.length;c++){var n=Object(u.a)(e[c],3),r=n[0],a=n[1],i=n[2];if(t[r]&&t[r]===t[a]&&t[r]===t[i])return t[r]}return null}(c[b]),k=f?"X":"O";Object(r.useEffect)((function(){x&&alert("The winner is: ".concat(x,"!"))}),[x]);return Object(n.jsxs)(n.Fragment,{children:[Object(n.jsx)("h1",{children:"Tic Tac Toe with React Hooks"}),Object(n.jsx)(l,{squares:c[b],onClick:function(t){var e=c.slice(0,b+1),n=e[b],r=Object(s.a)(n);x||r[t]||(r[t]=k,a([].concat(Object(s.a)(e),[r])),O(e.length),v(!f))}}),Object(n.jsxs)("div",{className:"info-wrapper",children:[Object(n.jsxs)("div",{children:[Object(n.jsx)("h3",{children:"History"}),c.map((function(t,e){var c=e?"Go to move #".concat(e):"Go to Start";return Object(n.jsx)("li",{children:Object(n.jsx)("button",{onClick:function(){return O(t=e),void v(t%2===0);var t},children:c})},e)}))]}),Object(n.jsx)("h3",{children:x?"Winner: "+x:"Next Player: "+k})]})]})};i.a.render(Object(n.jsx)(b,{}),document.getElementById("root"))}},[[15,1,2]]]);
//# sourceMappingURL=main.616ce241.chunk.js.map