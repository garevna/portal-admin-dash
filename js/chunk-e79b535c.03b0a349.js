(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-e79b535c"],{"0d8d":function(t,e,i){t.exports=i.p+"media/map-uploads.43fc299a.mp4"},"1ecc":function(t,e,i){"use strict";i.r(e);var n=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("v-card",{staticClass:"text-center",attrs:{flat:"",dark:"",with:t.playerWidth,height:t.playerHeight+120}},[i("v-toolbar",{attrs:{dark:""}},[i("v-toolbar-title",[i("h6",[t._v(t._s(t.currentVideo.title))])]),i("v-spacer"),i("v-menu",{attrs:{"offset-y":""},scopedSlots:t._u([{key:"activator",fn:function(e){var n=e.on;return[i("v-btn",t._g({attrs:{icon:""}},n),[i("v-icon",[t._v("mdi-dots-vertical")])],1)]}}])},[i("v-list",t._l(t.videoList,(function(e,n){return i("v-list-item",{key:n,on:{click:function(e){t.currentVideoIndex=n}}},[i("v-list-item-title",[t._v(t._s(e.title))])],1)})),1)],1)],1),i("video",{ref:"video",attrs:{width:t.playerWidth,height:t.playerHeight,controls:""}},[i("source",{attrs:{src:t.currentVideo.ref,type:"video/mp4"}}),t._v(" Your browser does not support the video tag. ")]),i("v-card-text",[t._v(" "+t._s(t.currentVideo.description)+" ")])],1)},s=[],o={name:"VideoTutorials",data:function(){return{playerWidth:360,playerHeight:360,currentVideoIndex:0,videoList:[{title:"General info about building",description:"How to edit general info about building from the list of buildings",ref:i("f241")},{title:"Create new building",description:"How to create new building from the list of buildings",ref:i("ee09")},{title:"Remove building from the list",description:"How to remove building from the list of buildings",ref:i("8785")},{title:"Create building on the map",description:"How to create new building on the map",ref:i("a388")},{title:"Building Infrastructure and levels",description:"How to edit info about building' infrastructure and levels from the map",ref:i("299a")},{title:"Uploads",description:"How to upload building' pdf files and images from the map",ref:i("0d8d")}]}},computed:{currentVideo:function(){return"number"!==typeof this.currentVideoIndex?this.videoList[0]:this.videoList[this.currentVideoIndex]}},watch:{currentVideo:function(t){this.$refs.video.load()}},methods:{resize:function(){this.playerWidth=.8*window.innerWidth,this.playerHeight=.7*window.innerHeight}},mounted:function(){this.resize(),window.addEventListener("resize",this.resize.bind(this))}},a=o,r=i("2877"),c=i("6544"),l=i.n(c),d=i("8336"),u=i("b0af"),h=i("99d9"),f=i("132d"),v=i("8860"),p=i("da13"),m=i("5d23"),g=i("e449"),b=i("2fa4"),x=i("71d9"),T=i("2a7f"),w=Object(r["a"])(a,n,s,!1,null,null,null);e["default"]=w.exports;l()(w,{VBtn:d["a"],VCard:u["a"],VCardText:h["b"],VIcon:f["a"],VList:v["a"],VListItem:p["a"],VListItemTitle:m["b"],VMenu:g["a"],VSpacer:b["a"],VToolbar:x["a"],VToolbarTitle:T["a"]})},"299a":function(t,e,i){t.exports=i.p+"media/map-infrastructure-and-levels.2d6a818e.mp4"},8785:function(t,e,i){t.exports=i.p+"media/list-remove-building.c24df3ae.mp4"},a388:function(t,e,i){t.exports=i.p+"media/map-new-marker.621d7790.mp4"},e449:function(t,e,i){"use strict";i("99af"),i("7db0"),i("a630"),i("caad"),i("c975"),i("a9e3"),i("2532"),i("3ca3"),i("498a");var n=i("ade3"),s=i("2909"),o=i("5530"),a=(i("ee6f"),i("480e")),r=i("4ad4"),c=i("16b7"),l=i("b848"),d=i("75eb"),u=i("f573"),h=i("e4d3"),f=i("a236"),v=i("f2e7"),p=i("7560"),m=i("a293"),g=i("dc22"),b=i("58df"),x=i("d9bd"),T=i("80d2"),w=Object(b["a"])(l["a"],c["a"],d["a"],u["a"],h["a"],f["a"],v["a"],p["a"]);e["a"]=w.extend({name:"v-menu",directives:{ClickOutside:m["a"],Resize:g["a"]},provide:function(){return{isInMenu:!0,theme:this.theme}},props:{auto:Boolean,closeOnClick:{type:Boolean,default:!0},closeOnContentClick:{type:Boolean,default:!0},disabled:Boolean,disableKeys:Boolean,maxHeight:{type:[Number,String],default:"auto"},offsetX:Boolean,offsetY:Boolean,openOnClick:{type:Boolean,default:!0},openOnHover:Boolean,origin:{type:String,default:"top left"},transition:{type:[Boolean,String],default:"v-menu-transition"}},data:function(){return{calculatedTopAuto:0,defaultOffset:8,hasJustFocused:!1,listIndex:-1,resizeTimeout:0,selectedIndex:null,tiles:[]}},computed:{activeTile:function(){return this.tiles[this.listIndex]},calculatedLeft:function(){var t=Math.max(this.dimensions.content.width,parseFloat(this.calculatedMinWidth));return this.auto?Object(T["g"])(this.calcXOverflow(this.calcLeftAuto(),t))||"0":this.calcLeft(t)||"0"},calculatedMaxHeight:function(){var t=this.auto?"200px":Object(T["g"])(this.maxHeight);return t||"0"},calculatedMaxWidth:function(){return Object(T["g"])(this.maxWidth)||"0"},calculatedMinWidth:function(){if(this.minWidth)return Object(T["g"])(this.minWidth)||"0";var t=Math.min(this.dimensions.activator.width+Number(this.nudgeWidth)+(this.auto?16:0),Math.max(this.pageWidth-24,0)),e=isNaN(parseInt(this.calculatedMaxWidth))?t:parseInt(this.calculatedMaxWidth);return Object(T["g"])(Math.min(e,t))||"0"},calculatedTop:function(){var t=this.auto?Object(T["g"])(this.calcYOverflow(this.calculatedTopAuto)):this.calcTop();return t||"0"},hasClickableTiles:function(){return Boolean(this.tiles.find((function(t){return t.tabIndex>-1})))},styles:function(){return{maxHeight:this.calculatedMaxHeight,minWidth:this.calculatedMinWidth,maxWidth:this.calculatedMaxWidth,top:this.calculatedTop,left:this.calculatedLeft,transformOrigin:this.origin,zIndex:this.zIndex||this.activeZIndex}}},watch:{isActive:function(t){t||(this.listIndex=-1)},isContentActive:function(t){this.hasJustFocused=t},listIndex:function(t,e){if(t in this.tiles){var i=this.tiles[t];i.classList.add("v-list-item--highlighted"),this.$refs.content.scrollTop=i.offsetTop-i.clientHeight}e in this.tiles&&this.tiles[e].classList.remove("v-list-item--highlighted")}},created:function(){this.$attrs.hasOwnProperty("full-width")&&Object(x["e"])("full-width",this)},mounted:function(){this.isActive&&this.callActivate()},methods:{activate:function(){var t=this;this.updateDimensions(),requestAnimationFrame((function(){t.startTransition().then((function(){t.$refs.content&&(t.calculatedTopAuto=t.calcTopAuto(),t.auto&&(t.$refs.content.scrollTop=t.calcScrollPosition()))}))}))},calcScrollPosition:function(){var t=this.$refs.content,e=t.querySelector(".v-list-item--active"),i=t.scrollHeight-t.offsetHeight;return e?Math.min(i,Math.max(0,e.offsetTop-t.offsetHeight/2+e.offsetHeight/2)):t.scrollTop},calcLeftAuto:function(){return parseInt(this.dimensions.activator.left-2*this.defaultOffset)},calcTopAuto:function(){var t=this.$refs.content,e=t.querySelector(".v-list-item--active");if(e||(this.selectedIndex=null),this.offsetY||!e)return this.computedTop;this.selectedIndex=Array.from(this.tiles).indexOf(e);var i=e.offsetTop-this.calcScrollPosition(),n=t.querySelector(".v-list-item").offsetTop;return this.computedTop-i-n-1},changeListIndex:function(t){if(this.getTiles(),this.isActive&&this.hasClickableTiles)if(t.keyCode!==T["x"].tab){if(t.keyCode===T["x"].down)this.nextTile();else if(t.keyCode===T["x"].up)this.prevTile();else{if(t.keyCode!==T["x"].enter||-1===this.listIndex)return;this.tiles[this.listIndex].click()}t.preventDefault()}else this.isActive=!1},closeConditional:function(t){var e=t.target;return this.isActive&&!this._isDestroyed&&this.closeOnClick&&!this.$refs.content.contains(e)},genActivatorAttributes:function(){var t=r["a"].options.methods.genActivatorAttributes.call(this);return this.activeTile&&this.activeTile.id?Object(o["a"])(Object(o["a"])({},t),{},{"aria-activedescendant":this.activeTile.id}):t},genActivatorListeners:function(){var t=u["a"].options.methods.genActivatorListeners.call(this);return this.disableKeys||(t.keydown=this.onKeyDown),t},genTransition:function(){var t=this.genContent();return this.transition?this.$createElement("transition",{props:{name:this.transition}},[t]):t},genDirectives:function(){var t=this,e=[{name:"show",value:this.isContentActive}];return!this.openOnHover&&this.closeOnClick&&e.push({name:"click-outside",value:{handler:function(){t.isActive=!1},closeConditional:this.closeConditional,include:function(){return[t.$el].concat(Object(s["a"])(t.getOpenDependentElements()))}}}),e},genContent:function(){var t=this,e={attrs:Object(o["a"])(Object(o["a"])({},this.getScopeIdAttrs()),{},{role:"role"in this.$attrs?this.$attrs.role:"menu"}),staticClass:"v-menu__content",class:Object(o["a"])(Object(o["a"])(Object(o["a"])({},this.rootThemeClasses),this.roundedClasses),{},Object(n["a"])({"v-menu__content--auto":this.auto,"v-menu__content--fixed":this.activatorFixed,menuable__content__active:this.isActive},this.contentClass.trim(),!0)),style:this.styles,directives:this.genDirectives(),ref:"content",on:{click:function(e){var i=e.target;i.getAttribute("disabled")||t.closeOnContentClick&&(t.isActive=!1)},keydown:this.onKeyDown}};return this.$listeners.scroll&&(e.on=e.on||{},e.on.scroll=this.$listeners.scroll),!this.disabled&&this.openOnHover&&(e.on=e.on||{},e.on.mouseenter=this.mouseEnterHandler),this.openOnHover&&(e.on=e.on||{},e.on.mouseleave=this.mouseLeaveHandler),this.$createElement("div",e,this.getContentSlot())},getTiles:function(){this.$refs.content&&(this.tiles=Array.from(this.$refs.content.querySelectorAll(".v-list-item")))},mouseEnterHandler:function(){var t=this;this.runDelay("open",(function(){t.hasJustFocused||(t.hasJustFocused=!0)}))},mouseLeaveHandler:function(t){var e=this;this.runDelay("close",(function(){e.$refs.content.contains(t.relatedTarget)||requestAnimationFrame((function(){e.isActive=!1,e.callDeactivate()}))}))},nextTile:function(){var t=this.tiles[this.listIndex+1];if(!t){if(!this.tiles.length)return;return this.listIndex=-1,void this.nextTile()}this.listIndex++,-1===t.tabIndex&&this.nextTile()},prevTile:function(){var t=this.tiles[this.listIndex-1];if(!t){if(!this.tiles.length)return;return this.listIndex=this.tiles.length,void this.prevTile()}this.listIndex--,-1===t.tabIndex&&this.prevTile()},onKeyDown:function(t){var e=this;if(t.keyCode===T["x"].esc){setTimeout((function(){e.isActive=!1}));var i=this.getActivator();this.$nextTick((function(){return i&&i.focus()}))}else!this.isActive&&[T["x"].up,T["x"].down].includes(t.keyCode)&&(this.isActive=!0);this.$nextTick((function(){return e.changeListIndex(t)}))},onResize:function(){this.isActive&&(this.$refs.content.offsetWidth,this.updateDimensions(),clearTimeout(this.resizeTimeout),this.resizeTimeout=window.setTimeout(this.updateDimensions,100))}},render:function(t){var e=this,i={staticClass:"v-menu",class:{"v-menu--attached":""===this.attach||!0===this.attach||"attach"===this.attach},directives:[{arg:"500",name:"resize",value:this.onResize}]};return t("div",i,[!this.activator&&this.genActivator(),this.showLazyContent((function(){return[e.$createElement(a["a"],{props:{root:!0,light:e.light,dark:e.dark}},[e.genTransition()])]}))])}})},ee09:function(t,e,i){t.exports=i.p+"media/list-new-building.63f17b39.mp4"},ee6f:function(t,e,i){},f241:function(t,e,i){t.exports=i.p+"media/list-common-info.c448d7ca.mp4"}}]);
//# sourceMappingURL=chunk-e79b535c.03b0a349.js.map