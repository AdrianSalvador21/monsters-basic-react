(this.webpackJsonpmonsters=this.webpackJsonpmonsters||[]).push([[0],[,,,,function(e,t,n){e.exports=n(14)},,,,,function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){"use strict";n.r(t);var a=n(0),o=n.n(a),r=n(3),c=n.n(r),s=(n(9),n(1)),l=(n(10),n(11),n(12),function(e){return o.a.createElement("div",{className:"card-container"},o.a.createElement("img",{alt:"monster",src:"https://robohash.org/".concat(e.user.id,"?set=set2&size=180x180")}),o.a.createElement("h2",{key:e.user.id},e.user.name),o.a.createElement("p",null,e.user.email))}),i=function(e){return console.log(e),o.a.createElement("div",{className:"card-list"},e.users.map((function(e){return o.a.createElement(l,{user:e,key:e.id})})))},u=(n(13),function(e){var t=e.setSeatchField,n=e.filterDataEvent;return o.a.createElement("div",null,o.a.createElement("input",{className:"search",type:"text",placeholder:"Search monsters",onChange:function(e){t(e.target.value),n(e)}}))});var m=function(){var e=Object(a.useState)([]),t=Object(s.a)(e,2),n=t[0],r=t[1],c=Object(a.useState)(""),l=Object(s.a)(c,2),m=l[0],f=l[1],h=Object(a.useState)([]),d=Object(s.a)(h,2),v=d[0],E=d[1];Object(a.useEffect)((function(){g()}),[]);var g=function(){fetch("https://jsonplaceholder.typicode.com/users").then((function(e){return e.json()})).then((function(e){console.log(e),r(e),E(e)}))};return o.a.createElement("div",{className:"App"},o.a.createElement("h1",null,"Monsters Info"),o.a.createElement(u,{setSeatchField:f,filterDataEvent:function(e){if(console.log(e.target.value),console.log(m),""===e.target.value)return console.log("VACIO"),void E(n);var t=n.filter((function(t){return t.name.toLowerCase().includes(e.target.value.toLowerCase())}));E(t)}}),o.a.createElement(i,{users:v}))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));c.a.render(o.a.createElement(o.a.StrictMode,null,o.a.createElement(m,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}],[[4,1,2]]]);
//# sourceMappingURL=main.161b3e0d.chunk.js.map