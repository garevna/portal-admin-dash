(function(e){function t(t){for(var n,a,o=t[0],i=t[1],u=t[2],d=0,l=[];d<o.length;d++)a=o[d],Object.prototype.hasOwnProperty.call(c,a)&&c[a]&&l.push(c[a][0]),c[a]=0;for(n in i)Object.prototype.hasOwnProperty.call(i,n)&&(e[n]=i[n]);f&&f(t);while(l.length)l.shift()();return s.push.apply(s,u||[]),r()}function r(){for(var e,t=0;t<s.length;t++){for(var r=s[t],n=!0,a=1;a<r.length;a++){var o=r[a];0!==c[o]&&(n=!1)}n&&(s.splice(t--,1),e=i(i.s=r[0]))}return e}var n={},a={app:0},c={app:0},s=[];function o(e){return i.p+"js/"+({}[e]||e)+"."+{"chunk-09f8f568":"5dae69ab","chunk-1a6f5d14":"88978f19","chunk-214d3058":"6ccaf7ed","chunk-637a29e2":"7fc66965","chunk-07d86b82":"3a5e6f16","chunk-b691f0be":"1936f0b7","chunk-37a19e83":"10bb3afc","chunk-b9e83010":"30b3ae34","chunk-c701815e":"1ab4f958","chunk-ae161484":"aa880276","chunk-be5a17ea":"8598b9e7","chunk-ebc42d70":"740e0c5b","chunk-b98c4d9a":"84893db8","chunk-2d210f83":"1ebad86e","chunk-782d957c":"d07a7b15","chunk-785897ae":"60f4e9bd","chunk-78599730":"1c4a6689","chunk-785a19f8":"28daf656","chunk-b9f473c8":"98c0576d","chunk-d549ea28":"a61db83c","chunk-7c373311":"ea1f50ef","chunk-0eb234fa":"0d0c797f","chunk-418ea084":"e4adddf9","chunk-2d0aab3a":"72bb9d65","chunk-cfa9f9ee":"1a5a082f"}[e]+".js"}function i(t){if(n[t])return n[t].exports;var r=n[t]={i:t,l:!1,exports:{}};return e[t].call(r.exports,r,r.exports,i),r.l=!0,r.exports}i.e=function(e){var t=[],r={"chunk-09f8f568":1,"chunk-1a6f5d14":1,"chunk-214d3058":1,"chunk-637a29e2":1,"chunk-07d86b82":1,"chunk-b691f0be":1,"chunk-37a19e83":1,"chunk-b9e83010":1,"chunk-c701815e":1,"chunk-be5a17ea":1,"chunk-ebc42d70":1,"chunk-b98c4d9a":1,"chunk-b9f473c8":1,"chunk-d549ea28":1,"chunk-7c373311":1,"chunk-0eb234fa":1,"chunk-418ea084":1};a[e]?t.push(a[e]):0!==a[e]&&r[e]&&t.push(a[e]=new Promise((function(t,r){for(var n="css/"+({}[e]||e)+"."+{"chunk-09f8f568":"7a716866","chunk-1a6f5d14":"7a716866","chunk-214d3058":"7a716866","chunk-637a29e2":"44a08be4","chunk-07d86b82":"e8624e3e","chunk-b691f0be":"f08a73dc","chunk-37a19e83":"03e774a1","chunk-b9e83010":"d246bc9c","chunk-c701815e":"2e45ce06","chunk-ae161484":"31d6cfe0","chunk-be5a17ea":"d246bc9c","chunk-ebc42d70":"288ede66","chunk-b98c4d9a":"d246bc9c","chunk-2d210f83":"31d6cfe0","chunk-782d957c":"31d6cfe0","chunk-785897ae":"31d6cfe0","chunk-78599730":"31d6cfe0","chunk-785a19f8":"31d6cfe0","chunk-b9f473c8":"d246bc9c","chunk-d549ea28":"d246bc9c","chunk-7c373311":"02396624","chunk-0eb234fa":"9d21c0d7","chunk-418ea084":"1526af76","chunk-2d0aab3a":"31d6cfe0","chunk-cfa9f9ee":"31d6cfe0"}[e]+".css",c=i.p+n,s=document.getElementsByTagName("link"),o=0;o<s.length;o++){var u=s[o],d=u.getAttribute("data-href")||u.getAttribute("href");if("stylesheet"===u.rel&&(d===n||d===c))return t()}var l=document.getElementsByTagName("style");for(o=0;o<l.length;o++){u=l[o],d=u.getAttribute("data-href");if(d===n||d===c)return t()}var f=document.createElement("link");f.rel="stylesheet",f.type="text/css",f.onload=t,f.onerror=function(t){var n=t&&t.target&&t.target.src||c,s=new Error("Loading CSS chunk "+e+" failed.\n("+n+")");s.code="CSS_CHUNK_LOAD_FAILED",s.request=n,delete a[e],f.parentNode.removeChild(f),r(s)},f.href=c;var p=document.getElementsByTagName("head")[0];p.appendChild(f)})).then((function(){a[e]=0})));var n=c[e];if(0!==n)if(n)t.push(n[2]);else{var s=new Promise((function(t,r){n=c[e]=[t,r]}));t.push(n[2]=s);var u,d=document.createElement("script");d.charset="utf-8",d.timeout=120,i.nc&&d.setAttribute("nonce",i.nc),d.src=o(e);var l=new Error;u=function(t){d.onerror=d.onload=null,clearTimeout(f);var r=c[e];if(0!==r){if(r){var n=t&&("load"===t.type?"missing":t.type),a=t&&t.target&&t.target.src;l.message="Loading chunk "+e+" failed.\n("+n+": "+a+")",l.name="ChunkLoadError",l.type=n,l.request=a,r[1](l)}c[e]=void 0}};var f=setTimeout((function(){u({type:"timeout",target:d})}),12e4);d.onerror=d.onload=u,document.head.appendChild(d)}return Promise.all(t)},i.m=e,i.c=n,i.d=function(e,t,r){i.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:r})},i.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},i.t=function(e,t){if(1&t&&(e=i(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var r=Object.create(null);if(i.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var n in e)i.d(r,n,function(t){return e[t]}.bind(null,n));return r},i.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return i.d(t,"a",t),t},i.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},i.p="/portal-admin-dash/",i.oe=function(e){throw console.error(e),e};var u=window["webpackJsonp"]=window["webpackJsonp"]||[],d=u.push.bind(u);u.push=t,u=u.slice();for(var l=0;l<u.length;l++)t(u[l]);var f=d;s.push([0,"chunk-vendors"]),r()})({0:function(e,t,r){e.exports=r("56d7")},1456:function(e,t,r){"use strict";r.r(t);r("99af"),r("d3b7"),r("96cf");var n=r("1da1");t["default"]=function(){var e=Object(n["a"])(regeneratorRuntime.mark((function e(t){var r;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,fetch("".concat("https://dgtek-staging.herokuapp.com","/").concat(t),{method:"GET",headers:{"Content-Type":"application/json;charset=utf-8",Authorization:"rAxKIAyY9j3Aq0OZ4TnGHCibU9G6oZZP8NaMOlKeJV9U2qjOKu0xOOQwjw3JzKaewN4DmzQ97aEsUh1XyAsQboJqQpbFpgK0JQkt"}});case 2:return e.next=4,e.sent.json();case 4:return r=e.sent,e.abrupt("return",r);case 6:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()},"1f99":function(e,t,r){"use strict";r.r(t),t["default"]={serviceName:{label:"Service Name",type:"string",value:""},serviceType:{label:"Service Type",type:"string",value:""},serviceDescription:{label:"Service Description",type:"string",value:""},downstreamSpeed:{label:"Downstream Speed",type:"number",value:0},upstreamSpeed:{label:"Upstream Speed",type:"number",value:0},dataLimit:{label:"Data Limit",type:"string",value:""},NRC:{label:"NRC",type:"number",value:0},MRC:{label:"MRC",type:"number",value:0},equipmentCost:{label:"Equipment Costs",type:"number",value:0},equipmentRequired:{label:"Equipment required",type:"boolean",value:!1},equipmentType:{label:"Equipment type",type:"string",value:""},contractTerm:{label:"Contract term",type:"string",value:""},freeTrial:{label:"Free trial",type:"number",value:0},discountOnNRC:{label:"Discount on NRC",type:"number",value:0},discountOnMRC:{label:"Discount on MRC",type:"number",value:0},numberOfUsersPerPartner:{label:"Number of Users per Partner",type:"number",value:0},gstIncEx:{label:"GST inc/ex",type:"string",value:""},serviceSLA:{label:"Service SLA",type:"file",value:null}}},"4f46":function(e,t,r){"use strict";r.r(t);r("96cf");var n=r("1da1"),a=r("ce96").default.getData,c={user:null},s={USER:function(e,t){e.user=t}},o={GET_USER:function(e,t){return Object(n["a"])(regeneratorRuntime.mark((function r(){var n,c;return regeneratorRuntime.wrap((function(r){while(1)switch(r.prev=r.next){case 0:if(n=e.commit,e.dispatch,t){r.next=4;break}return n("ERROR",{error:!0,errorType:"Auth",errorMessage:"You have no access"},{root:!0}),r.abrupt("return");case 4:return r.next=6,a("user/find_by_hash/".concat(t));case 6:c=r.sent,c.error?n("ERROR",{error:!0,errorType:"Authorization",errorMessage:"Auth failed"},{root:!0}):n("MESSAGE",{message:!0,messageType:"Authorization",messageText:"Access granted"},{root:!0});case 8:case"end":return r.stop()}}),r)})))()}};t["default"]={namespaced:!0,state:c,actions:o,mutations:s}},"50f8":function(e,t,r){"use strict";r.r(t);r("99af"),r("c740"),r("c975"),r("d81d"),r("fb6a"),r("a434"),r("96cf");var n=r("1da1"),a=r("ce96").default,c=a.getData,s=(a.postData,a.putData,a.deleteData),o=a.patchData,i={types:["connection-request","connectivity-research"],names:["ticketsCommon","connectivityResearchTickets"],type:"connection-request",dataName:"ticketsCommon",tickets:[]},u={UPDATE_TICKET_TYPE:function(e,t){var r=e.types.indexOf(t);e.type=-1!==r?t:e.types[0],e.dataName=-1!==r?e.names[r]:e.names[0]},TICKETS:function(e,t){e.tickets=t},REMOVE:function(e,t){var r=e.tickets.findIndex((function(e){return e._id===t}));-1!==r&&(e.tickets.splice(r,1),console.log(e.tickets))}},d={GET_TICKETS:function(e){return Object(n["a"])(regeneratorRuntime.mark((function t(){var r,n,a,s;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return r=e.state,n=e.commit,t.next=3,c("ticket/".concat(r.type));case 3:a=t.sent,console.log("address requests:\n",a),a.error?n("ERROR",{error:!0,errorType:"Reading tikets",errorMessage:"Process failed..."},{root:!0}):(s=a.data.map((function(e){return Object.assign({},e,{createdAt:e.createdAt?new Date(e.createdAt-0).toISOString().slice(0,10):"",footprint:e.locatedInPolygon,distanceFromFootprint:e.distanceToWell})})),n("TICKETS",s));case 6:case"end":return t.stop()}}),t)})))()},DELETE_TICKET:function(e,t){return Object(n["a"])(regeneratorRuntime.mark((function r(){var n,a;return regeneratorRuntime.wrap((function(r){while(1)switch(r.prev=r.next){case 0:return n=e.commit,r.next=3,s("ticket/".concat(i.type,"/").concat(t));case 3:return a=r.sent,a.error?n("ERROR",{error:!0,errorType:"Delete ticket",errorMessage:"Operation failed"},{root:!0}):(n("MESSAGE",{message:!0,messageType:"Delete ticket",messageText:"Ticket was removed forever"},{root:!0}),n("REMOVE",t)),r.abrupt("return",a);case 6:case"end":return r.stop()}}),r)})))()},SEND_MESSAGE_WITH_CURRENT_TICKET:function(e,t){return Object(n["a"])(regeneratorRuntime.mark((function r(){var n;return regeneratorRuntime.wrap((function(r){while(1)switch(r.prev=r.next){case 0:return r.next=2,o("ticket/".concat(i.type,"/").concat(t.id),t.historyElement);case 2:return n=r.sent,n.error?e.commit("ERROR",{error:!0,errorType:"Sending message error",errorMessage:"Message has not been delivered..."},{root:!0}):e.commit("MESSAGE",{message:!0,messageType:"Sending message",messageText:"Message has been delivered"},{root:!0}),r.abrupt("return",n);case 5:case"end":return r.stop()}}),r)})))()}};t["default"]={namespaced:!0,state:i,actions:d,mutations:u}},"56d6":function(e,t,r){"use strict";r.r(t);r("99af"),r("d3b7"),r("96cf");var n=r("1da1");t["default"]=function(){var e=Object(n["a"])(regeneratorRuntime.mark((function e(t,r){var n;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,fetch("".concat("https://dgtek-staging.herokuapp.com","/").concat(t),{method:"PATCH",headers:{"Content-Type":"application/json;charset=utf-8",Authorization:"rAxKIAyY9j3Aq0OZ4TnGHCibU9G6oZZP8NaMOlKeJV9U2qjOKu0xOOQwjw3JzKaewN4DmzQ97aEsUh1XyAsQboJqQpbFpgK0JQkt"},body:JSON.stringify(r)});case 2:return e.next=4,e.sent.json();case 4:return n=e.sent,e.abrupt("return",n);case 6:case"end":return e.stop()}}),e)})));return function(t,r){return e.apply(this,arguments)}}()},"56d7":function(e,t,r){"use strict";r.r(t);r("e260"),r("e6cf"),r("cca6"),r("a79d");var n=r("2b0e"),a=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("v-app",[e.ready?r("v-main",[e.navigate&&"tickets"!==e.navigate?e._e():r("Tickets"),"resellers"===e.navigate?r("RSP"):e._e(),"other"===e.navigate?r("Other"):e._e()],1):e._e(),r("v-bottom-navigation",{staticClass:"py-1",attrs:{fixed:"",color:"#079"},model:{value:e.navigate,callback:function(t){e.navigate=t},expression:"navigate"}},[r("v-btn",{attrs:{value:"tickets"}},[r("span",[e._v("Tickets")]),r("v-icon",[e._v("$tickets")])],1),r("v-btn",{attrs:{value:"resellers"}},[r("span",[e._v("RSP")]),r("v-icon",[e._v("$accounts")])],1),r("v-btn",{attrs:{value:"customers"}},[r("span",[e._v("End Customers")]),r("v-icon",[e._v("$customers")])],1),r("v-btn",{attrs:{value:"buildings"},on:{click:e.redirectToBuildingsAPI}},[r("span",[e._v("Buildings API")]),r("v-icon",[e._v("$buildings")])],1),r("v-btn",{attrs:{value:"other"}},[r("span",[e._v("Other")]),r("v-icon",[e._v("$other")])],1)],1),r("error-message"),r("simple-message")],1)},c=[],s=(r("d3b7"),r("5530")),o=(r("69d7"),r("2f62")),i={name:"App",components:{Tickets:function(){return r.e("chunk-1a6f5d14").then(r.bind(null,"48ad"))},RSP:function(){return r.e("chunk-214d3058").then(r.bind(null,"2986"))},Other:function(){return r.e("chunk-09f8f568").then(r.bind(null,"9457"))}},data:function(){return{navigate:null,buildings:!1,name:"Tickets",ready:!1}},methods:Object(s["a"])(Object(s["a"])({},Object(o["b"])({getRSP:"GET_RSP"})),{},{redirectToBuildingsAPI:function(){window.open("https://garevna.github.io/dgtek-buildings-api/")}}),created:function(){var e=this;this.getRSP().then((function(){e.ready=!0}))},mounted:function(){this.navigate="tickets"}},u=i,d=(r("5c0b"),r("2877")),l=r("6544"),f=r.n(l),p=r("7496"),m=r("b81c"),g=r("8336"),b=r("132d"),h=r("f6c4"),v=Object(d["a"])(u,a,c,!1,null,null,null),k=v.exports;f()(v,{VApp:p["a"],VBottomNavigation:m["a"],VBtn:g["a"],VIcon:b["a"],VMain:h["a"]});r("96cf");var E=r("1da1"),y=(r("4160"),r("ac1f"),r("5319"),r("159b"),r("ddb0"),{}),T=r("7067");T.keys().forEach((function(e){var t=e.replace(/(\.\/|\.store\.js)/g,"");y[t]=T(e).default||T(e)}));var R=y,O=r("ce96").default,w=O.getData,S=O.postData;n["a"].use(o["a"]);var x=new o["a"].Store({state:{rsp:null,resellers:null,error:null,errorMessage:"",errorType:"",message:null,messageType:"",messageText:"",loading:null},modules:R,mutations:{UPDATE_RSP:function(e,t){e.rsp=t},ERROR:function(e,t){t?(e.error=t.error,e.errorType=t.errorType,e.errorMessage=t.errorMessage):(e.error=!1,e.errorType="",e.errorMessage="")},MESSAGE:function(e,t){t?(e.message=t.message,e.messageType=t.messageType,e.messageText=t.messageText):(e.message=!1,e.messageType="",e.messageText="")}},actions:{GET_RSP:function(e){return Object(E["a"])(regeneratorRuntime.mark((function t(){var r,n;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return e.state,r=e.commit,t.next=3,w("reseller");case 3:n=t.sent,n.error?r("ERROR",{error:!0,errorType:"GET RSP",errorMessage:n.error}):r("UPDATE_RSP",n.data);case 5:case"end":return t.stop()}}),t)})))()},POST_RSP:function(e,t){return Object(E["a"])(regeneratorRuntime.mark((function r(){var n;return regeneratorRuntime.wrap((function(r){while(1)switch(r.prev=r.next){case 0:return r.next=2,S("reseller",t);case 2:n=r.sent,n.error?e.commit("ERROR",{error:!0,errorType:"RSP preservation error",errorMessage:n.error}):e.commit("MESSAGE",{message:!0,messageType:"RSP preservation",messageText:"All RSP saved"});case 4:case"end":return r.stop()}}),r)})))()}}}),j=r("f309");n["a"].use(j["a"]);var A=new j["a"]({icons:{iconfont:"mdi",values:{accounts:"mdi-account-box-multiple",add:"mdi-note-plus",block:"mdi-checkbox-blank",buildings:"mdi-home-city-outline",case:"mdi-briefcase-variant",customers:"mdi-text-account",diagnostics:"mdi-marker-check",edit:"mdi-pencil",empty:"mdi-checkbox-blank-outline",error:"mdi-alert",delete:"mdi-trash-can",dropdown:"mdi-menu-down",face:"mdi-account-circle",generalDescription:"mdi-file-table",infrastructure:"mdi-pencil-ruler",instruments:"mdi-hammer-screwdriver",list:"mdi-view-list",map:"mdi-map",marker:"mdi-map-marker",menu:"mdi-dots-vertical",message:"mdi-message-reply-text",other:"mdi-folder-table",pdf:"mdi-file-pdf",rightArrow:"mdi-arrow-right-bold",save:"mdi-content-save",send:"mdi-send",tickets:"mdi-card-text",upload:"mdi-file-upload"}},theme:{themes:{light:{primary:"#881F1A",secondary:"#E15240",buttons:"#881F1A",buttonActive:"#882F1A",homefone:"#FBFBFB",accent:"#f3f3f3",inputs:"#EFEFEF",activefield:"#D9D9D9",warning:"#FAFF00",info:"#fbfbfb"},dark:{primary:"#FF0E00",secondary:"#E82F37",buttons:"#F54436",homefone:"#FEFEFE",fields:"#EFEFEF",activefield:"#D9D9D9",warning:"#FAFF00"}}}}),_=r("f6dd"),C=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("v-dialog",{staticClass:"pa-4",attrs:{"max-width":"480px"},model:{value:e.dialog,callback:function(t){e.dialog=t},expression:"dialog"}},[r("v-card",{attrs:{flat:""}},[r("v-toolbar",{attrs:{dark:"",dense:"",color:"#900"}},[r("v-icon",{staticClass:"mr-4"},[e._v(" $error ")]),r("v-toolbar-title",[e._v(" Error ")]),r("v-spacer"),r("v-btn",{attrs:{icon:""},on:{click:function(t){e.dialog=!1}}},[r("v-icon",{attrs:{large:""}},[e._v(" $close ")])],1)],1),r("v-card-text",{staticClass:"text-center mt-10"},[r("h4",[e._v(e._s(e.errorType||"Unknown error type"))])]),r("v-card-text",{staticClass:"text-center"},[r("p",[e._v(e._s(e.errorMessage||"Unknown Error"))])])],1)],1)},D=[],M={name:"ErrorMessage",computed:Object(s["a"])(Object(s["a"])({},Object(o["d"])(["error","errorMessage","errorType"])),{},{dialog:{get:function(){return this.error},set:function(e){!e&&this.resetError()}}}),methods:Object(s["a"])(Object(s["a"])({},Object(o["c"])({setError:"ERROR"})),{},{resetError:function(){this.setError(null)}})},P=M,I=r("b0af"),K=r("99d9"),V=r("169a"),F=r("2fa4"),U=r("71d9"),q=r("2a7f"),N=Object(d["a"])(P,C,D,!1,null,null,null),G=N.exports;f()(N,{VBtn:g["a"],VCard:I["a"],VCardText:K["b"],VDialog:V["a"],VIcon:b["a"],VSpacer:F["a"],VToolbar:U["a"],VToolbarTitle:q["a"]});var J=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("v-dialog",{staticClass:"pa-4",attrs:{"max-width":"480px"},model:{value:e.dialog,callback:function(t){e.dialog=t},expression:"dialog"}},[r("v-card",{attrs:{flat:""}},[r("v-toolbar",{attrs:{dark:"",dense:"",color:"#09b"}},[r("v-icon",{staticClass:"mr-4"},[e._v(" $message ")]),r("v-toolbar-title",[e._v(" Message ")]),r("v-spacer"),r("v-btn",{attrs:{icon:""},on:{click:function(t){e.dialog=!1}}},[r("v-icon",{attrs:{large:""}},[e._v(" $close ")])],1)],1),r("v-card-text",{staticClass:"text-center mt-10"},[r("h4",[e._v(e._s(e.messageType||""))])]),r("v-card-text",{staticClass:"text-center"},[r("p",[e._v(e._s(e.messageText))])])],1)],1)},Q=[],L={name:"MessagePopup",computed:Object(s["a"])(Object(s["a"])({},Object(o["d"])(["message","messageText","messageType"])),{},{dialog:{get:function(){return this.message},set:function(e){!e&&this.resetMessage()}}}),methods:Object(s["a"])(Object(s["a"])({},Object(o["c"])({setMessage:"MESSAGE"})),{},{resetMessage:function(){this.setMessage(null)}})},z=L,B=Object(d["a"])(z,J,Q,!1,null,null,null),Z=B.exports;f()(B,{VBtn:g["a"],VCard:I["a"],VCardText:K["b"],VDialog:V["a"],VIcon:b["a"],VSpacer:F["a"],VToolbar:U["a"],VToolbarTitle:q["a"]});r("4d86"),r("cb36");n["a"].use(_["a"]),n["a"].config.productionTip=!1,n["a"].prototype._readFile=r("b33b").default,n["a"].component("error-message",G),n["a"].component("simple-message",Z),new n["a"]({store:x,vuetify:A,render:function(e){return e(k)}}).$mount("#app")},"5ba7":function(e,t,r){"use strict";r.r(t);r("99af"),r("d81d"),r("b64b");var n=r("ade3"),a=r("2909"),c=r("b85c"),s=(r("96cf"),r("1da1")),o=r("ce96").default,i=o.getData,u=o.postData,d=o.putData,l={services:{},serviceSchema:r("1f99").default},f={UPDATE_SERVICES:function(e,t){e.services=t},ADD_SERVICE:function(e,t,r){e.services[t]=r}},p={GET_SERVICES:function(e){return Object(s["a"])(regeneratorRuntime.mark((function t(){var r,n,a,s,o,u,d,l,f,p;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return r=e.state,n=e.commit,t.next=3,i("service");case 3:if(a=t.sent,console.log("SERVICES:\n",a),a.error)n("ERROR",{error:!0,errorType:"Reading services",errorMessage:"Process failed..."},{root:!0});else{s={},o=Object(c["a"])(a.services);try{for(o.s();!(u=o.n()).done;){for(p in d=u.value,l=d._id,f={},r.serviceSchema)f[p]=Object.assign({},r.serviceSchema[p],{value:d[p]});s[l]=f}}catch(m){o.e(m)}finally{o.f()}console.log(s),n("UPDATE_SERVICES",s)}return t.abrupt("return",a);case 7:case"end":return t.stop()}}),t)})))()},UPDATE_SERVICE:function(e,t,r){return Object(s["a"])(regeneratorRuntime.mark((function c(){var s,o,i;return regeneratorRuntime.wrap((function(c){while(1)switch(c.prev=c.next){case 0:return s=e.commit,o=Object.assign.apply(Object,[{}].concat(Object(a["a"])(Object.keys(r).map((function(e){return Object(n["a"])({},e,r[e].value)}))))),console.log(o),c.next=5,d("service/".concat(t),o);case 5:return i=c.sent,console.log("SERVICE updated:\n",i),i.error?s("ERROR",{error:!0,errorType:"Update service",errorMessage:"Process failed..."},{root:!0}):s("MESSAGE",{message:!0,messageType:"Update service",messageText:"Success"},{root:!0}),c.abrupt("return",i);case 9:case"end":return c.stop()}}),c)})))()},ADD_NEW_SERVICE:function(e){return Object(s["a"])(regeneratorRuntime.mark((function t(){var r,c,s,o;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return r=e.state,c=e.commit,s=Object.assign.apply(Object,[{}].concat(Object(a["a"])(Object.keys(r.serviceSchema).map((function(e){return Object(n["a"])({},e,r.serviceSchema[e].value)}))))),console.log(s),t.next=5,u("service",s);case 5:return o=t.sent,console.log(o),o.error?c("ERROR",{error:!0,errorType:"Saving service",errorMessage:"Operation failed..."},{root:!0}):(c("SERVICES",o.data),c("MESSAGE",{message:!0,messageType:"Add new service",messageText:"Success"},{root:!0})),t.abrupt("return",o);case 9:case"end":return t.stop()}}),t)})))()}};t["default"]={namespaced:!0,state:l,actions:p,mutations:f}},"5c0b":function(e,t,r){"use strict";r("9c0c")},"69ea":function(e,t,r){"use strict";r.r(t);r("99af"),r("d3b7"),r("96cf");var n=r("1da1");t["default"]=function(){var e=Object(n["a"])(regeneratorRuntime.mark((function e(t,r){var n;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,fetch("".concat("https://dgtek-staging.herokuapp.com","/").concat(t),{method:"PUT",headers:{"Content-Type":"application/json;charset=utf-8",Authorization:"rAxKIAyY9j3Aq0OZ4TnGHCibU9G6oZZP8NaMOlKeJV9U2qjOKu0xOOQwjw3JzKaewN4DmzQ97aEsUh1XyAsQboJqQpbFpgK0JQkt"},body:JSON.stringify(r)});case 2:return e.next=4,e.sent.json();case 4:return n=e.sent,e.abrupt("return",n);case 6:case"end":return e.stop()}}),e)})));return function(t,r){return e.apply(this,arguments)}}()},7067:function(e,t,r){var n={"./address-requests.store.js":"50f8","./auth.store.js":"4f46","./common.store.js":"ecef","./registration.store.js":"d1c7","./services.store.js":"5ba7"};function a(e){var t=c(e);return r(t)}function c(e){if(!r.o(n,e)){var t=new Error("Cannot find module '"+e+"'");throw t.code="MODULE_NOT_FOUND",t}return n[e]}a.keys=function(){return Object.keys(n)},a.resolve=c,e.exports=a,a.id="7067"},"9c0c":function(e,t,r){},a180:function(e,t,r){"use strict";r.r(t);r("99af"),r("d3b7"),r("96cf");var n=r("1da1");t["default"]=function(){var e=Object(n["a"])(regeneratorRuntime.mark((function e(t){var r;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,fetch("".concat("https://dgtek-staging.herokuapp.com","/").concat(t),{method:"DELETE",headers:{"Content-Type":"application/json;charset=utf-8",Authorization:"rAxKIAyY9j3Aq0OZ4TnGHCibU9G6oZZP8NaMOlKeJV9U2qjOKu0xOOQwjw3JzKaewN4DmzQ97aEsUh1XyAsQboJqQpbFpgK0JQkt"}});case 2:return e.next=4,e.sent.json();case 4:return r=e.sent,e.abrupt("return",r);case 6:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()},b33b:function(e,t,r){"use strict";r.r(t);r("b0c0"),r("d3b7"),r("96cf");var n=r("1da1"),a=function(e){return new Promise((function(t){var r=Object.assign(new FileReader,{onload:function(e){return t({body:e.target.result,error:null})},onerror:function(){return t({body:null,error:"Error reading the file ".concat(e.name)})}});r.readAsDataURL(e)}))};t["default"]=function(){var e=Object(n["a"])(regeneratorRuntime.mark((function e(t,r){var n;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:if("application/pdf"===t.type){e.next=2;break}return e.abrupt("return",{error:"Invalid file type"});case 2:return e.next=4,a(t);case 4:return n=e.sent,e.abrupt("return",n);case 6:case"end":return e.stop()}}),e)})));return function(t,r){return e.apply(this,arguments)}}()},c855:function(e,t,r){"use strict";r.r(t);r("99af"),r("d3b7"),r("96cf");var n=r("1da1");t["default"]=function(){var e=Object(n["a"])(regeneratorRuntime.mark((function e(t,r){var n;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,fetch("".concat("https://dgtek-staging.herokuapp.com","/").concat(t),{method:"POST",headers:{"Content-Type":"application/json;charset=utf-8",Authorization:"rAxKIAyY9j3Aq0OZ4TnGHCibU9G6oZZP8NaMOlKeJV9U2qjOKu0xOOQwjw3JzKaewN4DmzQ97aEsUh1XyAsQboJqQpbFpgK0JQkt"},body:JSON.stringify(r)});case 2:return e.next=4,e.sent.json();case 4:return n=e.sent,e.abrupt("return",n);case 6:case"end":return e.stop()}}),e)})));return function(t,r){return e.apply(this,arguments)}}()},ce96:function(e,t,r){"use strict";r.r(t);var n=r("1456").default,a=r("c855").default,c=r("69ea").default,s=r("56d6").default,o=r("a180").default;t["default"]={getData:n,postData:a,putData:c,patchData:s,deleteData:o}},d1c7:function(e,t,r){"use strict";r.r(t);r("c740"),r("d81d"),r("fb6a"),r("a434"),r("96cf");var n=r("1da1"),a=r("ce96").default,c=a.getData,s=a.postData,o=(a.putData,{tickets:[]}),i={TICKETS:function(e,t){e.tickets=t},REMOVE_TICKET_BY_ID:function(e,t){var r=e.tickets.findIndex((function(e){return e._id===t}));return-1!==r&&(e.tickets=e.tickets.splice(r,1)),-1!==r}},u={GET_TICKETS:function(e){return Object(n["a"])(regeneratorRuntime.mark((function t(){var r,n,a;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return r=e.commit,t.next=3,c("ticket/registration");case 3:n=t.sent,console.log(n),n.error?r("ERROR",{error:!0,errorType:"Reading Lead Requests",errorMessage:"Process failed..."},{root:!0}):(a=n.data.map((function(e){return Object.assign({},e,{createdAt:e.createdAt?new Date(e.createdAt-0).toISOString().slice(0,10):""})})),r("TICKETS",a));case 6:case"end":return t.stop()}}),t)})))()},ACCEPT_TICKET:function(e,t){return Object(n["a"])(regeneratorRuntime.mark((function r(){var n,a,c,o;return regeneratorRuntime.wrap((function(r){while(1)switch(r.prev=r.next){case 0:return n=e.commit,a=t.id,c=t.payload,r.next=4,s("ticket/accept/".concat(a),c);case 4:o=r.sent,console.log(o),o.error?n("ERROR",{error:!0,errorType:"Accept Lead request",errorMessage:"Process failed"},{root:!0}):(n("MESSAGE",{message:!0,messageType:"Accept Lead request",messageText:"Success"},{root:!0}),n("REMOVE_TICKET_BY_ID",a));case 7:case"end":return r.stop()}}),r)})))()},REJECT_TICKET:function(e,t){return Object(n["a"])(regeneratorRuntime.mark((function r(){var n,a,c,o;return regeneratorRuntime.wrap((function(r){while(1)switch(r.prev=r.next){case 0:return e.getters,n=e.commit,e.dispatch,a=t.id,c=t.payload,r.next=4,s("ticket/reject/".concat(a),c);case 4:o=r.sent,console.log(o),o.error?n("ERROR",{error:!0,errorType:"Reject Lead request",errorMessage:"Process failed"},{root:!0}):(n("MESSAGE",{message:!0,messageType:"Reject Lead request",messageText:"Success"},{root:!0}),n("REMOVE_TICKET_ID",a));case 7:case"end":return r.stop()}}),r)})))()}};t["default"]={namespaced:!0,state:o,actions:u,mutations:i}},ecef:function(e,t,r){"use strict";r.r(t);r("d81d"),r("fb6a"),r("96cf");var n=r("1da1"),a=r("ce96").default,c=a.getData,s=a.patchData,o={tickets:[],ticketsError:null,ticketsLoading:!1},i={TICKETS:function(e,t){e.tickets=t}},u={GET_TICKETS:function(e){return Object(n["a"])(regeneratorRuntime.mark((function t(){var r,n,a;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return e.getters,r=e.commit,e.dispatch,t.next=3,c("ticket/common");case 3:n=t.sent,console.log("common:\n",n),n.error?r("ERROR",{error:!0,errorType:"Reading common tikets",errorMessage:"Process failed..."},{root:!0}):(a=n.data.map((function(e){return Object.assign({},e,{createdAt:e.createdAt?new Date(e.createdAt-0).toISOString().slice(1,10):""})})),r("TICKETS",a));case 6:case"end":return t.stop()}}),t)})))()},SEND_MESSAGE:function(e,t){return Object(n["a"])(regeneratorRuntime.mark((function r(){var n;return regeneratorRuntime.wrap((function(r){while(1)switch(r.prev=r.next){case 0:return r.next=2,s("ticket/common/".concat(t.id),t.historyElement);case 2:return n=r.sent,n.error?e.commit("ERROR",{error:!0,errorType:"Sending message error",errorMessage:"Message has not been delivered..."},{root:!0}):e.commit("MESSAGE",{message:!0,messageType:"Sending message",messageText:"Message has been delivered"},{root:!0}),r.abrupt("return",n);case 5:case"end":return r.stop()}}),r)})))()}};t["default"]={namespaced:!0,state:o,actions:u,mutations:i}}});
//# sourceMappingURL=app.63707345.js.map