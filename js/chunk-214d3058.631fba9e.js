(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-214d3058"],{2986:function(t,e,r){"use strict";r.r(e);var n=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",[r("v-app-bar",{attrs:{app:"","elevate-on-scroll":""}},[r("v-toolbar",{staticClass:"transparent",attrs:{flat:""}},[r("v-toolbar-title",[t._v(" RSP ")]),r("v-spacer"),r("Menu",{attrs:{options:t.menuOptions,goto:t.goto},on:{"update:goto":function(e){t.goto=e}}})],1)],1),r("v-container",[r("Resellers",{attrs:{params:t.params}}),"reseller"===t.goto?r("Reseller",{attrs:{params:t.params}}):t._e(),"customers"===t.goto?r("EndCustomers",{attrs:{params:t.params}}):t._e(),"traffic"===t.goto?r("Traffic",{attrs:{params:t.params}}):t._e(),"payments"===t.goto?r("Payments",{attrs:{params:t.params}}):t._e(),"debts"===t.goto?r("Receivables",{attrs:{params:t.params}}):t._e(),"bills"===t.goto?r("Bills",{attrs:{params:t.params}}):t._e()],1)],1)},i=[],o=(r("d3b7"),r("5530")),s=r("2f62"),a={name:"RSPLayout",props:[],components:{Menu:function(){return Promise.all([r.e("chunk-c701815e"),r.e("chunk-ae161484")]).then(r.bind(null,"fb62"))},Resellers:function(){return r.e("chunk-b9f473c8").then(r.bind(null,"ac51"))},Reseller:function(){return r.e("chunk-d549ea28").then(r.bind(null,"11ae"))},Traffic:function(){return r.e("chunk-782d957c").then(r.bind(null,"d163"))},Payments:function(){return r.e("chunk-78599730").then(r.bind(null,"2abc"))},Receivables:function(){return r.e("chunk-785a19f8").then(r.bind(null,"326c"))},Bills:function(){return r.e("chunk-2d210f83").then(r.bind(null,"b9c9"))},EndCustomers:function(){return r.e("chunk-785cd46c").then(r.bind(null,"025e"))}},data:function(){return{menuOptions:[{text:"Traffic",value:"traffic"},{text:"Payments",value:"payments"},{text:"Accounts receivable",value:"debts"},{text:"Bills",value:"bills"},{text:"List of RSP",value:"resellers"},{text:"List of End Customers",value:"customers"}],goto:"resellers",name:"",params:{},resellerId:null,acceptBtn:!1,rejectBtn:!1,sendBtn:!1,clientsOfResellerBtn:!1}},computed:Object(o["a"])({},Object(s["d"])(["rsp"])),methods:{testRSP:function(){}},mounted:function(){this.testRSP()}},l=a,c=r("2877"),u=r("6544"),d=r.n(u),h=r("40dc"),p=r("a523"),f=r("2fa4"),m=r("71d9"),v=r("2a7f"),S=Object(c["a"])(l,n,i,!1,null,null,null);e["default"]=S.exports;d()(S,{VAppBar:h["a"],VContainer:p["a"],VSpacer:f["a"],VToolbar:m["a"],VToolbarTitle:v["a"]})},"40dc":function(t,e,r){"use strict";r("a9e3"),r("b680"),r("c7cd");var n=r("5530"),i=(r("8b0d"),r("71d9")),o=r("f977"),s=r("3a66"),a=r("277e"),l=r("d10f"),c=r("f2e7"),u=r("80d2"),d=r("58df"),h=Object(d["a"])(i["a"],a["a"],l["a"],c["a"],Object(s["a"])("top",["clippedLeft","clippedRight","computedHeight","invertedScroll","isExtended","isProminent","value"]));e["a"]=h.extend({name:"v-app-bar",directives:{Scroll:o["b"]},props:{clippedLeft:Boolean,clippedRight:Boolean,collapseOnScroll:Boolean,elevateOnScroll:Boolean,fadeImgOnScroll:Boolean,hideOnScroll:Boolean,invertedScroll:Boolean,scrollOffScreen:Boolean,shrinkOnScroll:Boolean,value:{type:Boolean,default:!0}},data:function(){return{isActive:this.value}},computed:{applicationProperty:function(){return this.bottom?"bottom":"top"},canScroll:function(){return a["a"].options.computed.canScroll.call(this)&&(this.invertedScroll||this.elevateOnScroll||this.hideOnScroll||this.collapseOnScroll||this.isBooted||!this.value)},classes:function(){return Object(n["a"])(Object(n["a"])({},i["a"].options.computed.classes.call(this)),{},{"v-toolbar--collapse":this.collapse||this.collapseOnScroll,"v-app-bar":!0,"v-app-bar--clipped":this.clippedLeft||this.clippedRight,"v-app-bar--fade-img-on-scroll":this.fadeImgOnScroll,"v-app-bar--elevate-on-scroll":this.elevateOnScroll,"v-app-bar--fixed":!this.absolute&&(this.app||this.fixed),"v-app-bar--hide-shadow":this.hideShadow,"v-app-bar--is-scrolled":this.currentScroll>0,"v-app-bar--shrink-on-scroll":this.shrinkOnScroll})},computedContentHeight:function(){if(!this.shrinkOnScroll)return i["a"].options.computed.computedContentHeight.call(this);var t=this.computedOriginalHeight,e=this.dense?48:56,r=t,n=r-e,o=n/this.computedScrollThreshold,s=this.currentScroll*o;return Math.max(e,r-s)},computedFontSize:function(){if(this.isProminent){var t=this.dense?96:128,e=t-this.computedContentHeight,r=.00347;return Number((1.5-e*r).toFixed(2))}},computedLeft:function(){return!this.app||this.clippedLeft?0:this.$vuetify.application.left},computedMarginTop:function(){return this.app?this.$vuetify.application.bar:0},computedOpacity:function(){if(this.fadeImgOnScroll){var t=Math.max((this.computedScrollThreshold-this.currentScroll)/this.computedScrollThreshold,0);return Number(parseFloat(t).toFixed(2))}},computedOriginalHeight:function(){var t=i["a"].options.computed.computedContentHeight.call(this);return this.isExtended&&(t+=parseInt(this.extensionHeight)),t},computedRight:function(){return!this.app||this.clippedRight?0:this.$vuetify.application.right},computedScrollThreshold:function(){return this.scrollThreshold?Number(this.scrollThreshold):this.computedOriginalHeight-(this.dense?48:56)},computedTransform:function(){if(!this.canScroll||this.elevateOnScroll&&0===this.currentScroll&&this.isActive)return 0;if(this.isActive)return 0;var t=this.scrollOffScreen?this.computedHeight:this.computedContentHeight;return this.bottom?t:-t},hideShadow:function(){return this.elevateOnScroll&&this.isExtended?this.currentScroll<this.computedScrollThreshold:this.elevateOnScroll?0===this.currentScroll||this.computedTransform<0:(!this.isExtended||this.scrollOffScreen)&&0!==this.computedTransform},isCollapsed:function(){return this.collapseOnScroll?this.currentScroll>0:i["a"].options.computed.isCollapsed.call(this)},isProminent:function(){return i["a"].options.computed.isProminent.call(this)||this.shrinkOnScroll},styles:function(){return Object(n["a"])(Object(n["a"])({},i["a"].options.computed.styles.call(this)),{},{fontSize:Object(u["f"])(this.computedFontSize,"rem"),marginTop:Object(u["f"])(this.computedMarginTop),transform:"translateY(".concat(Object(u["f"])(this.computedTransform),")"),left:Object(u["f"])(this.computedLeft),right:Object(u["f"])(this.computedRight)})}},watch:{canScroll:"onScroll",computedTransform:function(){this.canScroll&&(this.clippedLeft||this.clippedRight)&&this.callUpdate()},invertedScroll:function(t){this.isActive=!t||0!==this.currentScroll}},created:function(){this.invertedScroll&&(this.isActive=!1)},methods:{genBackground:function(){var t=i["a"].options.methods.genBackground.call(this);return t.data=this._b(t.data||{},t.tag,{style:{opacity:this.computedOpacity}}),t},updateApplication:function(){return this.invertedScroll?0:this.computedHeight+this.computedTransform},thresholdMet:function(){this.invertedScroll?this.isActive=this.currentScroll>this.computedScrollThreshold:(this.hideOnScroll&&(this.isActive=this.isScrollingUp||this.currentScroll<this.computedScrollThreshold),this.currentThreshold<this.computedScrollThreshold||(this.savedScroll=this.currentScroll))}},render:function(t){var e=i["a"].options.render.call(this,t);return e.data=e.data||{},this.canScroll&&(e.data.directives=e.data.directives||[],e.data.directives.push({arg:this.scrollTarget,name:"scroll",value:this.onScroll})),e}})},"4b85":function(t,e,r){},"8b0d":function(t,e,r){},a523:function(t,e,r){"use strict";r("99af"),r("4de4"),r("b64b"),r("2ca0"),r("20f6"),r("4b85"),r("a15b"),r("498a");var n=r("2b0e");function i(t){return n["a"].extend({name:"v-".concat(t),functional:!0,props:{id:String,tag:{type:String,default:"div"}},render:function(e,r){var n=r.props,i=r.data,o=r.children;i.staticClass="".concat(t," ").concat(i.staticClass||"").trim();var s=i.attrs;if(s){i.attrs={};var a=Object.keys(s).filter((function(t){if("slot"===t)return!1;var e=s[t];return t.startsWith("data-")?(i.attrs[t]=e,!1):e||"string"===typeof e}));a.length&&(i.staticClass+=" ".concat(a.join(" ")))}return n.id&&(i.domProps=i.domProps||{},i.domProps.id=n.id),e(n.tag,i,o)}})}var o=r("d9f7");e["a"]=i("container").extend({name:"v-container",functional:!0,props:{id:String,tag:{type:String,default:"div"},fluid:{type:Boolean,default:!1}},render:function(t,e){var r,n=e.props,i=e.data,s=e.children,a=i.attrs;return a&&(i.attrs={},r=Object.keys(a).filter((function(t){if("slot"===t)return!1;var e=a[t];return t.startsWith("data-")?(i.attrs[t]=e,!1):e||"string"===typeof e}))),n.id&&(i.domProps=i.domProps||{},i.domProps.id=n.id),t(n.tag,Object(o["a"])(i,{staticClass:"container",class:Array({"container--fluid":n.fluid}).concat(r||[])}),s)}})}}]);
//# sourceMappingURL=chunk-214d3058.631fba9e.js.map