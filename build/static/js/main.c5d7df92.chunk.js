(this.webpackJsonpnotes=this.webpackJsonpnotes||[]).push([[0],{15:function(t,e,n){t.exports=n(38)},37:function(t,e,n){},38:function(t,e,n){"use strict";n.r(e);var a=n(0),o=n.n(a),r=n(13),c=n.n(r),u=n(14),l=n(2),i=function(t){var e=t.note,n=t.toggleImportance,a=e.important?"make not important":"make important";return o.a.createElement("li",{className:"note"},e.content,o.a.createElement("button",{onClick:n},a))},m=function(t){var e=t.message;return null===e?null:o.a.createElement("div",{className:"error"},e)},f=n(3),s=n.n(f),p="http://obscure-coast-13626.herokuapp.com/api/notes",d=function(){return s.a.get(p).then((function(t){return t.data}))},b=function(t){return s.a.post(p,t).then((function(t){return t.data}))},E=function(t,e){return s.a.put("".concat(p,"/").concat(t),e).then((function(t){return t.data}))},g=function(){return o.a.createElement("div",{style:{color:"green",fontStyle:"italic",fontSize:16}},o.a.createElement("br",null),o.a.createElement("em",null,"Note app, Department of Computer Science, University of Helsinki 2020"))},v=function(){var t=Object(a.useState)([]),e=Object(l.a)(t,2),n=e[0],r=e[1],c=Object(a.useState)(""),f=Object(l.a)(c,2),s=f[0],p=f[1],v=Object(a.useState)(!0),h=Object(l.a)(v,2),O=h[0],j=h[1],S=Object(a.useState)(null),k=Object(l.a)(S,2),y=k[0],w=k[1];Object(a.useEffect)((function(){console.log("effect"),d().then((function(t){r(t)}))}),[]),console.log("render",n.length,"notes");var N=O?n:n.filter((function(t){return t.important}));return o.a.createElement("div",null,o.a.createElement("h1",null,"Notes"),o.a.createElement(m,{message:y}),o.a.createElement("div",null,o.a.createElement("button",{onClick:function(){return j(!O)}},"show ",O?"important":"all")),o.a.createElement("ul",null,N.map((function(t,e){return o.a.createElement(i,{key:e,note:t,toggleImportance:function(){return function(t){console.log("importance of '".concat(t,"' needs to be toggled"));var e=n.find((function(e){return e.id===t})),a=Object(u.a)({},e,{important:!e.important});E(t,a).then((function(e){r(n.map((function(n){return n.id!==t?n:e})))})).catch((function(){w("Note '".concat(e.content,"' was already removed from server")),setTimeout((function(){w(null)}),5e3),r(n.filter((function(e){return e.id!==t})))}))}(t.id)}})}))),o.a.createElement("form",{onSubmit:function(t){t.preventDefault();var e={content:s,date:(new Date).toISOString(),important:Math.random()<.5};b(e).then((function(t){r(n.concat(t)),p("")}))}},o.a.createElement("input",{value:s,onChange:function(t){p(t.target.value)}}),o.a.createElement("button",{type:"submit"},"save")),o.a.createElement(g,null))};n(37);c.a.render(o.a.createElement(v,null),document.getElementById("root"))}},[[15,1,2]]]);
//# sourceMappingURL=main.c5d7df92.chunk.js.map