(this["webpackJsonpsport-2"]=this["webpackJsonpsport-2"]||[]).push([[0],{19:function(e,t,a){e.exports=a(51)},24:function(e,t,a){},48:function(e,t,a){},51:function(e,t,a){"use strict";a.r(t);var n=a(0),c=a.n(n),l=a(17),r=a.n(l),o=(a(24),a(1)),s=(a(6),a(2)),i=a.n(s),m=a(4),u=function(e){var t=Object(n.useState)(""),a=Object(o.a)(t,2),l=a[0],r=a[1],s=Object(n.useState)(""),u=Object(o.a)(s,2),d=u[0],f=u[1],b=Object(n.useState)({}),E=Object(o.a)(b,2),g=(E[0],E[1]);return c.a.createElement("div",{className:"container-fluid"},c.a.createElement("div",{className:"row justify-content-center"},c.a.createElement("div",{className:"col-4"},c.a.createElement("div",{className:"card bg-light mb-3"},c.a.createElement("div",{className:"card-header"},"Register"),c.a.createElement("div",{class:"card-body"},c.a.createElement("form",{onSubmit:function(e){e.preventDefault();var t={firstname:l,lastname:d};console.log(1,t),r(""),f(""),i.a.post("http://localhost:8000/api/createuser",t).then((function(e){console.log(5,e),e.data.errors?g(e.data.errors):Object(m.c)("/allusers")})).catch((function(e){return console.log(e)}))}},c.a.createElement("div",{className:"form-group"},c.a.createElement("label",{for:"firstname"},"First name"),c.a.createElement("input",{type:"text",className:"form-control",id:"firstname","aria-describedby":"firstname",onChange:function(e){return r(e.target.value)}}),c.a.createElement("small",{id:"firstname",className:"form-text text-muted"})),c.a.createElement("div",{className:"form-group"},c.a.createElement("label",{for:"lastname"},"Last name"),c.a.createElement("input",{type:"lastname",className:"form-control",id:"lastname","aria-describedby":"lastname",onChange:function(e){return f(e.target.value)}}),c.a.createElement("small",{id:"lastname",className:"form-text text-muted"})),c.a.createElement("button",{type:"submit",className:"btn btn-primary",onClick:""},"Submit")))))))},d=function(e){var t=Object(n.useState)([]),a=Object(o.a)(t,2),l=a[0],r=a[1],s=function(){i.a.get("http://localhost:8000/api/allusers").then((function(e){console.log(e),r(e.data.user)})).catch((function(e){return console.log(e)}))};Object(n.useEffect)((function(){s()}),[]);return c.a.createElement("div",{className:"conatiner-fluid"},l.map((function(e,t){return c.a.createElement("div",{className:"card my-3",key:e._id},c.a.createElement("div",{className:"card-body"},c.a.createElement("p",null,"first name: ",e.firstname),c.a.createElement("p",null,"last name: ",e.lastname),c.a.createElement(m.a,{className:"btn btn-outline-warning",to:"/edit/".concat(e._id)},"Edit"),c.a.createElement("button",{className:"btn btn-outline-danger float-right",onClick:function(t){return a=e._id,console.log(a),void i.a.delete("http://localhost:8000/api/allusers/delete/".concat(a)).then((function(e){console.log(e),s()})).catch((function(e){return console.log(e)}));var a}},"Remove")))})))},f=(a(48),function(e){var t=Object(n.useState)({}),a=Object(o.a)(t,2),l=a[0],r=a[1];Object(n.useEffect)((function(){console.log("waazzaaaa"),console.log(e._id),i.a.get("http://localhost:8000/api/singleuser/"+e._id).then((function(e){console.log(e),r(e.data)})).catch((function(e){return console.log(e)}))}),[]);return c.a.createElement("div",{className:"container-fluid"},c.a.createElement("div",{className:"card"},c.a.createElement("div",{className:"card-header"},l.firstname),c.a.createElement("div",{className:"card-body"},c.a.createElement("p",null,"first name: ",l.firstname," "),c.a.createElement("p",null,"last name: ",l.lastname),c.a.createElement(m.a,{className:"btn btn-outline-warning",to:"/edit/".concat(l._d)},"Edit"),c.a.createElement("button",{className:"btn btn-outline-danger float-right",onClick:function(t){return a=l._id,console.log(a),void i.a.delete("http://localhost:/8000/api/singleuser/".concat(e._id)).then((function(e){console.log(e)})).catch((function(e){return console.log(e)}));var a}},"Remove"))))}),b=(a(49),function(e){var t=Object(n.useState)(""),a=Object(o.a)(t,2),l=a[0],r=a[1],s=Object(n.useState)(""),u=Object(o.a)(s,2),d=u[0],f=u[1],b=Object(n.useState)({}),E=Object(o.a)(b,2),g=E[0],h=E[1];Object(n.useEffect)((function(){i.a.get("http://localhost:8000/api/allusers/".concat(e._id)).then((function(e){console.log(e),r(e.data.firstname),f(e.data.lastname)})).catch((function(e){return console.log(e.message)}))}),[e._id]);return c.a.createElement("div",{className:"row"},c.a.createElement("div",{className:"col"},c.a.createElement("form",{onSubmit:function(t){t.preventDefault();var a={firstname:l,lastname:d};i.a.put("http://localhost:8000/api/allusers/update/".concat(e._id),a).then((function(e){console.log(e),e.data.errors?h(e.data.errors):Object(m.c)("/allusers")})).catch((function(e){return console.log(g.message)}))}},c.a.createElement("div",{className:"form-group"},c.a.createElement("label",{for:"firstname"},"First name"),c.a.createElement("input",{type:"text",className:"form-control",id:"firstname","aria-describedby":"firstname",onChange:function(e){return r(e.target.value)},value:l}),c.a.createElement("small",{id:"firstname",className:"form-text text-muted"})),c.a.createElement("div",{className:"form-group"},c.a.createElement("label",{for:"lastname"},"Last name"),c.a.createElement("input",{type:"lastname",className:"form-control",id:"lastname","aria-describedby":"lastname",onChange:function(e){return f(e.target.value)},value:d}),c.a.createElement("small",{id:"lastname",className:"form-text text-muted"})),c.a.createElement("button",{type:"submit",className:"btn btn-primary"},"Submit")),c.a.createElement("div",{className:"col-sm-8 offset-sm-2 mt-5"},c.a.createElement("button",{className:"btn btn-danger btn-block",onClick:function(){i.a.delete("http://localhost:8000/api/allusers/delete/".concat(e._id)).then((function(e){console.log(e),Object(m.c)("/allusers")})).catch((function(e){return console.log(e)}))}},"Remove"))))});var E=function(){return c.a.createElement("div",{className:"container-fluid"},c.a.createElement(m.b,null,c.a.createElement(u,{path:"/"}),c.a.createElement(d,{path:"/allusers"}),c.a.createElement(f,{path:"/singleuser/:_id"}),c.a.createElement(b,{path:"/edit/:_id"})))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));r.a.render(c.a.createElement(c.a.StrictMode,null,c.a.createElement(E,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[19,1,2]]]);
//# sourceMappingURL=main.cb7be4e5.chunk.js.map