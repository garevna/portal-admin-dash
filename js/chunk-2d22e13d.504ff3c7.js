(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-2d22e13d"],{f9e9:function(e,t,a){"use strict";a.r(t);var n=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("v-container",{staticClass:"homefone"},[a("v-row",{attrs:{justify:"center"}},[a("v-col",{attrs:{cols:"12",lg:"10",xl:"8"}},[a("v-card",{staticClass:"transparent pa-4 mt-4 mb-12",attrs:{flat:""}},[a("v-card-actions",[a("v-spacer"),a("v-btn",{attrs:{icon:""},on:{click:e.getAllLeadRequests}},[a("v-icon",{attrs:{color:"#444"}},[e._v(" mdi-reload ")])],1)],1),a("v-data-table",{staticClass:"transparent elevation-0",attrs:{"fixed-header":"",headers:e.headers,items:e.tickets,"item-key":"_id","sort-by":["createdAt","company"],"sort-desc":[!1,!0],"multi-sort":"",expanded:e.expanded,"single-expand":"","show-expand":"",height:"70vh"},on:{"update:expanded":function(t){e.expanded=t}},scopedSlots:e._u([{key:"expanded-item",fn:function(t){var n=t.headers,o=t.item;return[a("td",{attrs:{colspan:n.length}},[a("UserDetails",{attrs:{opened:"expanded[0] && expanded[0]._id === item._id",user:o,message:e.message,role:e.role},on:{"update:user":function(e){o=e},"update:message":function(t){e.message=t},"update:role":function(t){e.role=t}}})],1)]}},{key:"item.footprint",fn:function(t){var n=t.item;return[a("v-simple-checkbox",{attrs:{disabled:""},model:{value:n.footprint,callback:function(t){e.$set(n,"footprint",t)},expression:"item.footprint"}})]}},{key:"item.actions",fn:function(t){var n=t.item;return[a("v-tooltip",{attrs:{bottom:"",color:"info"},scopedSlots:e._u([{key:"activator",fn:function(t){var o=t.on;return[a("v-btn",e._g({attrs:{icon:""}},o),[a("v-icon",{staticClass:"mr-2",attrs:{color:"#777"},on:{click:function(t){return e.accept(n)}}},[e._v(" mdi-account-plus ")])],1)]}}],null,!0)},[a("span",[e._v("Accept")])]),a("v-tooltip",{attrs:{bottom:"",color:"primary"},scopedSlots:e._u([{key:"activator",fn:function(t){var o=t.on;return[a("v-btn",e._g({attrs:{icon:""}},o),[a("v-icon",{attrs:{color:"#777"},on:{click:function(t){return e.reject(n)}}},[e._v(" mdi-account-off ")])],1)]}}],null,!0)},[a("span",[e._v("Reject")])])]}}])})],1)],1)],1)],1)},o=[],s=(a("d3b7"),a("5530")),r=a("2f62"),c={name:"LeadRequests",components:{UserDetails:function(){return a.e("chunk-02212d16").then(a.bind(null,"7346"))}},data:function(){return{user:null,role:"",message:"",action:null,expanded:[]}},computed:Object(s["a"])(Object(s["a"])({},Object(r["d"])("registration",["tickets"])),{},{headers:function(){return[{text:"Data",value:"createdAt"},{text:"Company",value:"company"},{text:"Actions",value:"actions",sortable:!1},{text:"",value:"data-table-expand"}]}}),methods:Object(s["a"])(Object(s["a"])(Object(s["a"])({},Object(r["b"])("registration",{getAllLeadRequests:"GET_TICKETS",acceptRequest:"ACCEPT_TICKET",rejectRequest:"REJECT_TICKET"})),Object(r["c"])({showMessage:"MESSAGE",showError:"ERROR"})),{},{accept:function(e){this.role?(this.acceptRequest({id:e._id,payload:{accepted:!0,role:this.role,message:this.message}}),this.$emit("update:user",null)):this.showError({error:!0,errorType:"Role required",errorMessage:"To accept request you should select a role"})},reject:function(e){this.rejectRequest({id:e._id,payload:{message:this.message}}),this.$emit("update:user",null)}}),created:function(){this.getAllLeadRequests()}},i=c,l=a("2877"),d=a("6544"),u=a.n(d),p=a("8336"),f=a("b0af"),m=a("99d9"),v=a("62ad"),h=a("a523"),b=a("8fea"),g=a("132d"),x=a("0fd9"),_=a("9e88"),k=a("2fa4"),y=a("3a2f"),C=Object(l["a"])(i,n,o,!1,null,null,null);t["default"]=C.exports;u()(C,{VBtn:p["a"],VCard:f["a"],VCardActions:m["a"],VCol:v["a"],VContainer:h["a"],VDataTable:b["a"],VIcon:g["a"],VRow:x["a"],VSimpleCheckbox:_["a"],VSpacer:k["a"],VTooltip:y["a"]})}}]);
//# sourceMappingURL=chunk-2d22e13d.504ff3c7.js.map