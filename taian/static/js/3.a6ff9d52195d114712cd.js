webpackJsonp([3],{468:function(e,t,i){i(652);var n=i(0)(i(620),i(693),"data-v-6874ef3b",null);n.options.__file="E:\\MJWechatApp\\code\\src\\views\\UserPackage.vue",n.esModule&&Object.keys(n.esModule).some(function(e){return"default"!==e&&"__esModule"!==e})&&console.error("named exports are not supported in *.vue files."),n.options.functional&&console.error("[vue-loader] UserPackage.vue: functional components are not supported with templates, they should use render functions."),e.exports=n.exports},491:function(e,t,i){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n=i(172),r=i.n(n),a=i(92),o=i.n(a);t.default={name:"x-switch",components:{InlineDesc:r.a},computed:{labelStyle:function(){var e=/<\/?[^>]*>/.test(this.title),t=Math.min(e?5:this.title.length+1,14)+"em";return o()({display:"block",width:this.$parent.labelWidth||t,textAlign:this.$parent.labelAlign})},labelClass:function(){return{"vux-cell-justify":this.$parent&&"justify"===this.$parent.labelAlign}}},methods:{onClick:function(){this.$emit("on-click",!this.currentValue,this.currentValue)},toBoolean:function(e){if(this.valueMap){return 1===this.valueMap.indexOf(e)}return e},toRaw:function(e){return this.valueMap?this.valueMap[e?1:0]:e}},props:{title:{type:String,required:!0},disabled:Boolean,value:{type:[Boolean,String,Number],default:!1},inlineDesc:[String,Boolean,Number],preventDefault:Boolean,valueMap:{type:Array,default:function(){return[!1,!0]}}},data:function(){return{currentValue:this.toBoolean(this.value)}},watch:{currentValue:function(e){var t=this.toRaw(e);this.$emit("input",t),this.$emit("on-change",t)},value:function(e){this.currentValue=this.toBoolean(e)}}}},493:function(e,t,i){t=e.exports=i(171)(),t.push([e.i,'.weui-label{display:block;width:105px;word-wrap:break-word;word-break:break-all}.weui-input{width:100%;border:0;outline:0;-webkit-appearance:none;background-color:transparent;font-size:inherit;color:inherit;height:1.41176471em;line-height:1.41176471}.weui-input::-webkit-inner-spin-button,.weui-input::-webkit-outer-spin-button{-webkit-appearance:none;margin:0}.weui-textarea{display:block;border:0;resize:none;width:100%;color:inherit;font-size:1em;line-height:inherit;outline:0}.weui-textarea-counter{color:#b2b2b2;text-align:right}.weui-cell_warn .weui-textarea-counter{color:#e64340}.weui-toptips{display:none;position:fixed;-webkit-transform:translateZ(0);transform:translateZ(0);top:0;left:0;right:0;padding:5px;font-size:14px;text-align:center;color:#fff;z-index:5000;word-wrap:break-word;word-break:break-all}.weui-toptips_warn{background-color:#e64340}.weui-cells_form .weui-cell__ft{font-size:0}.weui-cells_form .weui-icon-warn{display:none}.weui-cells_form input,.weui-cells_form label[for],.weui-cells_form textarea{-webkit-tap-highlight-color:rgba(0,0,0,0)}.weui-cell_warn{color:#e64340}.weui-cell_warn .weui-icon-warn{display:inline-block}.weui-cell_switch{padding-top:6px;padding-bottom:6px}.weui-switch{-webkit-appearance:none;-moz-appearance:none;appearance:none}.weui-switch,.weui-switch-cp__box{position:relative;width:52px;height:32px;border:1px solid #dfdfdf;outline:0;border-radius:16px;box-sizing:border-box;background-color:#dfdfdf;-webkit-transition:background-color .1s,border .1s;transition:background-color .1s,border .1s}.weui-switch-cp__box:before,.weui-switch:before{content:" ";position:absolute;top:0;left:0;width:50px;height:30px;border-radius:15px;background-color:#fdfdfd;-webkit-transition:-webkit-transform .35s cubic-bezier(.45,1,.4,1);transition:-webkit-transform .35s cubic-bezier(.45,1,.4,1);transition:transform .35s cubic-bezier(.45,1,.4,1);transition:transform .35s cubic-bezier(.45,1,.4,1),-webkit-transform .35s cubic-bezier(.45,1,.4,1)}.weui-switch-cp__box:after,.weui-switch:after{content:" ";position:absolute;top:0;left:0;width:30px;height:30px;border-radius:15px;background-color:#fff;box-shadow:0 1px 3px rgba(0,0,0,.4);-webkit-transition:-webkit-transform .35s cubic-bezier(.4,.4,.25,1.35);transition:-webkit-transform .35s cubic-bezier(.4,.4,.25,1.35);transition:transform .35s cubic-bezier(.4,.4,.25,1.35);transition:transform .35s cubic-bezier(.4,.4,.25,1.35),-webkit-transform .35s cubic-bezier(.4,.4,.25,1.35)}.weui-switch-cp__input:checked~.weui-switch-cp__box,.weui-switch:checked{border-color:#04be02;background-color:#04be02}.weui-switch-cp__input:checked~.weui-switch-cp__box:before,.weui-switch:checked:before{-webkit-transform:scale(0);transform:scale(0)}.weui-switch-cp__input:checked~.weui-switch-cp__box:after,.weui-switch:checked:after{-webkit-transform:translateX(20px);transform:translateX(20px)}.weui-switch-cp__input{position:absolute;left:-9999px}.weui-switch-cp__box{display:block}.weui-cell_switch .weui-cell__ft{font-size:0;position:relative}input.weui-switch[disabled]{opacity:.6}.vux-x-switch.weui-cell_switch{padding-top:6px;padding-bottom:6px}.vux-x-switch-overlay{width:60px;height:50px;position:absolute;right:0;top:0;opacity:0}',""])},494:function(e,t,i){var n=i(493);"string"==typeof n&&(n=[[e.i,n,""]]),n.locals&&(e.exports=n.locals);i(447)("de49a74c",n,!1)},495:function(e,t,i){e.exports={render:function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("div",{staticClass:"vux-x-switch weui-cell weui-cell_switch"},[i("div",{staticClass:"weui-cell__bd"},[i("label",{staticClass:"weui-label",class:e.labelClass,style:e.labelStyle,domProps:{innerHTML:e._s(e.title)}}),e._v(" "),e.inlineDesc?i("inline-desc",[e._v(e._s(e.inlineDesc))]):e._e()],1),e._v(" "),i("div",{staticClass:"weui-cell__ft"},[i("input",{directives:[{name:"model",rawName:"v-model",value:e.currentValue,expression:"currentValue"}],staticClass:"weui-switch",attrs:{type:"checkbox",disabled:e.disabled},domProps:{checked:Array.isArray(e.currentValue)?e._i(e.currentValue,null)>-1:e.currentValue},on:{change:function(t){var i=e.currentValue,n=t.target,r=!!n.checked;if(Array.isArray(i)){var a=e._i(i,null);n.checked?a<0&&(e.currentValue=i.concat([null])):a>-1&&(e.currentValue=i.slice(0,a).concat(i.slice(a+1)))}else e.currentValue=r}}}),e._v(" "),e.preventDefault?i("div",{staticClass:"vux-x-switch-overlay",on:{click:e.onClick}}):e._e()])])},staticRenderFns:[]},e.exports.render._withStripped=!0},496:function(e,t,i){i(494);var n=i(0)(i(491),i(495),null,null);n.options.__file="E:\\MJWechatApp\\code\\node_modules\\vux\\src\\components\\x-switch\\index.vue",n.esModule&&Object.keys(n.esModule).some(function(e){return"default"!==e&&"__esModule"!==e})&&console.error("named exports are not supported in *.vue files."),n.options.functional&&console.error("[vue-loader] index.vue: functional components are not supported with templates, they should use render functions."),e.exports=n.exports},501:function(e,t,i){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n=i(506),r=["android","ios","ios-small","bubbles","circles","crescent","dots","lines","ripple","spiral"];t.default={name:"spinner",mounted:function(){var e=this;this.$nextTick(function(){i.i(n.a)(e.$el,e.type,e.size)})},props:{type:{type:String,default:"ios"},size:String},computed:{styles:function(){if(void 0!==this.size&&"28px"!==this.size)return{width:this.size,height:this.size}},className:function(){for(var e={},t=0;t<r.length;t++)e["vux-spinner-"+r[t]]=this.type===r[t];return e}}}},505:function(e,t){for(var i=0,n=["webkit","moz"],r=0;r<n.length&&!window.requestAnimationFrame;++r)window.requestAnimationFrame=window[n[r]+"RequestAnimationFrame"],window.cancelAnimationFrame=window[n[r]+"CancelAnimationFrame"]||window[n[r]+"CancelRequestAnimationFrame"];window.requestAnimationFrame||(window.requestAnimationFrame=function(e,t){var n=(new Date).getTime(),r=Math.max(0,16-(n-i)),a=window.setTimeout(function(){e(n+r)},r);return i=n+r,a}),window.cancelAnimationFrame||(window.cancelAnimationFrame=function(e){clearTimeout(e)})},506:function(e,t,i){"use strict";function n(e,t,i,a,o){var s,d,l,u=document.createElement(c[e]||e);for(s in t)if("[object Array]"===Object.prototype.toString.call(t[s]))for(d=0;d<t[s].length;d++)if(t[s][d].fn)for(l=0;l<t[s][d].t;l++)n(s,t[s][d].fn(l,a),u,a);else n(s,t[s][d],u,a);else r(u,s,t[s]);o&&"28px"!==o&&r(u,"style","width: "+o+"; height: "+o),i.appendChild(u)}function r(e,t,i){e.setAttribute(c[t]||t,i)}function a(e,t){var i=e.split(";"),n=i.slice(t),r=i.slice(0,i.length-n.length);return i=n.concat(r).reverse(),i.join(";")+";"+i[0]}function o(e,t){return(e/=t/2)<1?.5*e*e*e:.5*((e-=2)*e*e+2)}var s=i(505),c=(i.n(s),{a:"animate",an:"attributeName",at:"animateTransform",c:"circle",da:"stroke-dasharray",os:"stroke-dashoffset",f:"fill",lc:"stroke-linecap",rc:"repeatCount",sw:"stroke-width",t:"transform",v:"values"}),d={v:"0,32,32;360,32,32",an:"transform",type:"rotate",rc:"indefinite",dur:"750ms"},l={sw:4,lc:"round",line:[{fn:function(e,t){return{y1:"ios"===t?17:12,y2:"ios"===t?29:20,t:"translate(32,32) rotate("+(30*e+(e<6?180:-180))+")",a:[{fn:function(){return{an:"stroke-opacity",dur:"750ms",v:a("0;.1;.15;.25;.35;.45;.55;.65;.7;.85;1",e),rc:"indefinite"}},t:1}]}},t:12}]},u={android:{c:[{sw:6,da:128,os:82,r:26,cx:32,cy:32,f:"none"}]},ios:l,"ios-small":l,bubbles:{sw:0,c:[{fn:function(e){return{cx:24*Math.cos(2*Math.PI*e/8),cy:24*Math.sin(2*Math.PI*e/8),t:"translate(32,32)",a:[{fn:function(){return{an:"r",dur:"750ms",v:a("1;2;3;4;5;6;7;8",e),rc:"indefinite"}},t:1}]}},t:8}]},circles:{c:[{fn:function(e){return{r:5,cx:24*Math.cos(2*Math.PI*e/8),cy:24*Math.sin(2*Math.PI*e/8),t:"translate(32,32)",sw:0,a:[{fn:function(){return{an:"fill-opacity",dur:"750ms",v:a(".3;.3;.3;.4;.7;.85;.9;1",e),rc:"indefinite"}},t:1}]}},t:8}]},crescent:{c:[{sw:4,da:128,os:82,r:26,cx:32,cy:32,f:"none",at:[d]}]},dots:{c:[{fn:function(e){return{cx:16+16*e,cy:32,sw:0,a:[{fn:function(){return{an:"fill-opacity",dur:"750ms",v:a(".5;.6;.8;1;.8;.6;.5",e),rc:"indefinite"}},t:1},{fn:function(){return{an:"r",dur:"750ms",v:a("4;5;6;5;4;3;3",e),rc:"indefinite"}},t:1}]}},t:3}]},lines:{sw:7,lc:"round",line:[{fn:function(e){return{x1:10+14*e,x2:10+14*e,a:[{fn:function(){return{an:"y1",dur:"750ms",v:a("16;18;28;18;16",e),rc:"indefinite"}},t:1},{fn:function(){return{an:"y2",dur:"750ms",v:a("48;44;36;46;48",e),rc:"indefinite"}},t:1},{fn:function(){return{an:"stroke-opacity",dur:"750ms",v:a("1;.8;.5;.4;1",e),rc:"indefinite"}},t:1}]}},t:4}]},ripple:{f:"none","fill-rule":"evenodd",sw:3,circle:[{fn:function(e){return{cx:32,cy:32,a:[{fn:function(){return{an:"r",begin:-1*e+"s",dur:"2s",v:"0;24",keyTimes:"0;1",keySplines:"0.1,0.2,0.3,1",calcMode:"spline",rc:"indefinite"}},t:1},{fn:function(){return{an:"stroke-opacity",begin:-1*e+"s",dur:"2s",v:".2;1;.2;0",rc:"indefinite"}},t:1}]}},t:2}]},spiral:{defs:[{linearGradient:[{id:"sGD",gradientUnits:"userSpaceOnUse",x1:55,y1:46,x2:2,y2:46,stop:[{offset:.1,class:"stop1"},{offset:1,class:"stop2"}]}]}],g:[{sw:4,lc:"round",f:"none",path:[{stroke:"url(#sGD)",d:"M4,32 c0,15,12,28,28,28c8,0,16-4,21-9"},{d:"M60,32 C60,16,47.464,4,32,4S4,16,4,32"}],at:[d]}]}},p={android:function(e){function t(){if(!i.stop){var e=o(Date.now()-n,650),l=1,u=0,p=188-58*e,f=182-182*e;a%2&&(l=-1,u=-64,p=128- -58*e,f=182*e);var b=[0,-101,-90,-11,-180,79,-270,-191][a];r(d,"da",Math.max(Math.min(p,188),128)),r(d,"os",Math.max(Math.min(f,182),0)),r(d,"t","scale("+l+",1) translate("+u+",0) rotate("+b+",32,32)"),s+=4.1,s>359&&(s=0),r(c,"t","rotate("+s+",32,32)"),e>=1&&(a++,a>7&&(a=0),n=Date.now()),window.requestAnimationFrame(t)}}var i=this;this.stop=!1;var n,a=0,s=0,c=e.querySelector("g"),d=e.querySelector("circle");return function(){return n=Date.now(),t(),i}}};t.a=function(e,t,i){var r,a;r=t;var o=document.createElement("div");return n("svg",{viewBox:"0 0 64 64",g:[u[r]]},o,r,i),e.innerHTML=o.innerHTML,function(){p[r]&&(a=p[r](e)())}(),e}},510:function(e,t,i){t=e.exports=i(171)(),t.push([e.i,".vux-spinner{stroke:#444;fill:#444;vertical-align:middle;display:inline-block}.vux-spinner,.vux-spinner svg{width:28px;height:28px}.vux-spinner.vux-spinner-inverse{stroke:#fff;fill:#fff}.vux-spinner-android{stroke:#4b8bf4}.vux-spinner-ios,.vux-spinner-ios-small{stroke:#69717d}.vux-spinner-spiral .stop1{stop-color:#fff;stop-opacity:0}.vux-spinner-spiral.vux-spinner-inverse .stop1{stop-color:#000}.vux-spinner-spiral.vux-spinner-inverse .stop2{stop-color:#fff}",""])},514:function(e,t,i){var n=i(510);"string"==typeof n&&(n=[[e.i,n,""]]),n.locals&&(e.exports=n.locals);i(447)("9f4c2b92",n,!1)},524:function(e,t,i){e.exports={render:function(){var e=this,t=e.$createElement;return(e._self._c||t)("span",{staticClass:"vux-spinner",class:e.className,style:e.styles})},staticRenderFns:[]},e.exports.render._withStripped=!0},528:function(e,t,i){i(514);var n=i(0)(i(501),i(524),null,null);n.options.__file="E:\\MJWechatApp\\code\\node_modules\\vux\\src\\components\\spinner\\index.vue",n.esModule&&Object.keys(n.esModule).some(function(e){return"default"!==e&&"__esModule"!==e})&&console.error("named exports are not supported in *.vue files."),n.options.functional&&console.error("[vue-loader] index.vue: functional components are not supported with templates, they should use render functions."),e.exports=n.exports},534:function(e,t,i){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default={name:"divider"}},560:function(e,t,i){t=e.exports=i(171)(),t.push([e.i,'.vux-divider{display:table;white-space:nowrap;height:auto;overflow:hidden;line-height:1;text-align:center;padding:10px 0;color:#666}.vux-divider:after,.vux-divider:before{content:"";display:table-cell;position:relative;top:50%;width:50%;background-repeat:no-repeat;background-image:url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAABaAAAAACCAYAAACuTHuKAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAyFpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuNS1jMDE0IDc5LjE1MTQ4MSwgMjAxMy8wMy8xMy0xMjowOToxNSAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RSZWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZVJlZiMiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENDIChXaW5kb3dzKSIgeG1wTU06SW5zdGFuY2VJRD0ieG1wLmlpZDo1OThBRDY4OUNDMTYxMUU0OUE3NUVGOEJDMzMzMjE2NyIgeG1wTU06RG9jdW1lbnRJRD0ieG1wLmRpZDo1OThBRDY4QUNDMTYxMUU0OUE3NUVGOEJDMzMzMjE2NyI+IDx4bXBNTTpEZXJpdmVkRnJvbSBzdFJlZjppbnN0YW5jZUlEPSJ4bXAuaWlkOjU5OEFENjg3Q0MxNjExRTQ5QTc1RUY4QkMzMzMyMTY3IiBzdFJlZjpkb2N1bWVudElEPSJ4bXAuZGlkOjU5OEFENjg4Q0MxNjExRTQ5QTc1RUY4QkMzMzMyMTY3Ii8+IDwvcmRmOkRlc2NyaXB0aW9uPiA8L3JkZjpSREY+IDwveDp4bXBtZXRhPiA8P3hwYWNrZXQgZW5kPSJyIj8+VU513gAAADVJREFUeNrs0DENACAQBDBIWLGBJQby/mUcJn5sJXQmOQMAAAAAAJqt+2prAAAAAACg2xdgANk6BEVuJgyMAAAAAElFTkSuQmCC)}.vux-divider:before{background-position:right 1em top 50%}.vux-divider:after{background-position:left 1em top 50%}',""])},568:function(e,t,i){var n=i(560);"string"==typeof n&&(n=[[e.i,n,""]]),n.locals&&(e.exports=n.locals);i(447)("065e5e9c",n,!1)},583:function(e,t,i){e.exports={render:function(){var e=this,t=e.$createElement;return(e._self._c||t)("p",{staticClass:"vux-divider"},[e._t("default")],2)},staticRenderFns:[]},e.exports.render._withStripped=!0},587:function(e,t,i){i(568);var n=i(0)(i(534),i(583),null,null);n.options.__file="E:\\MJWechatApp\\code\\node_modules\\vux\\src\\components\\divider\\index.vue",n.esModule&&Object.keys(n.esModule).some(function(e){return"default"!==e&&"__esModule"!==e})&&console.error("named exports are not supported in *.vue files."),n.options.functional&&console.error("[vue-loader] index.vue: functional components are not supported with templates, they should use render functions."),e.exports=n.exports},620:function(e,t,i){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n=i(19),r=i.n(n),a=i(6),o=i.n(a),s=i(5),c=i.n(s),d=i(20),l=i(587),u=i.n(l),p=i(496),f=i.n(p),b=i(528),m=i.n(b),h=i(8);t.default={name:"userpackage",components:{Divider:u.a,XSwitch:f.a,Spinner:m.a},created:function(){var e=this;return c()(o.a.mark(function t(){var i;return o.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:if(e.openid&&""!==e.userid&&e.userid){t.next=2;break}return t.abrupt("return",e.$router.push({path:"/init",query:{page:1}}));case 2:if(e.user.mobile){t.next=13;break}return t.next=5,e.setUserInfo({openid:e.openid});case 5:if(i=t.sent,e.$vux.toast.show(i),"text"!==i.type){t.next=11;break}return t.abrupt("return",e.$router.push({path:"/bindphone",query:{page:1}}));case 11:if("warn"!==i.type){t.next=13;break}return t.abrupt("return",e.$router.push({path:"/nouser"}));case 13:case"end":return t.stop()}},t,e)}))()},computed:r()({},i.i(d.b)({pickup:"getPackagePickUp",pickupquery:"getPackagePickUpQuery",send:"getPackageSend",sendquery:"getPackageSendQuery",show:"getPackageType",user:"getUserInfo",userid:"getUserId",openid:"getOpenId"})),mounted:function(){window.document.title="我的包裹"},data:function(){return{}},updated:function(){},methods:r()({},i.i(d.c)(["initPackagePickUp","addPackagePickUp","initPackageSend","addPackageSend","setUserInfo"]),{changeShow:function(e){this.$store.commit("SET_PACKAGE_TYPE",{type:e})},refreshPickup:function(e){var t=this;return c()(o.a.mark(function i(){var n,r,a;return o.a.wrap(function(i){for(;;)switch(i.prev=i.next){case 0:n=t.user.mobile,r=t,a={mobile:n,page:1,rows:5},setTimeout(c()(o.a.mark(function t(){var i;return o.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,r.initPackagePickUp({query:a});case 2:i=t.sent,"success"!==i.type&&r.showToast(i),e(!0);case 5:case"end":return t.stop()}},t,this)})),1200);case 4:case"end":return i.stop()}},i,t)}))()},infinitePickup:function(e){var t=this;return c()(o.a.mark(function i(){var n,r;return o.a.wrap(function(i){for(;;)switch(i.prev=i.next){case 0:n=t.user.mobile,r=t,setTimeout(c()(o.a.mark(function t(){var i;return o.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return r.pickupquery.mobile=n,t.next=3,r.addPackagePickUp({query:r.pickupquery});case 3:if(i=t.sent,"success"!==i.type&&r.showToast(i),!i.stop){t.next=8;break}return e(!0),t.abrupt("return");case 8:e(!0);case 9:case"end":return t.stop()}},t,this)})),1200);case 3:case"end":return i.stop()}},i,t)}))()},refreshSend:function(e){var t=this;return c()(o.a.mark(function i(){var n,r,a;return o.a.wrap(function(i){for(;;)switch(i.prev=i.next){case 0:n=t.user.mobile,r=t,a={mobile:n,page:1,rows:5},setTimeout(c()(o.a.mark(function t(){var i;return o.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,r.initPackageSend({query:a});case 2:i=t.sent,"success"!==i.type&&r.showToast(i),e(!0);case 5:case"end":return t.stop()}},t,this)})),1200);case 4:case"end":return i.stop()}},i,t)}))()},infiniteSend:function(e){var t=this;return c()(o.a.mark(function i(){var n;return o.a.wrap(function(i){for(;;)switch(i.prev=i.next){case 0:n=t,setTimeout(c()(o.a.mark(function t(){var i;return o.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,n.addPackageSend({query:{}});case 2:i=t.sent,"success"!==i.type&&n.showToast(i),e(!0);case 5:case"end":return t.stop()}},t,this)})),1200);case 2:case"end":return i.stop()}},i,t)}))()},showToast:function(e){this.$vux.toast.show({text:e.text||"出错啦",type:e.type||"warn",width:"18rem"})},goPath:function(e){this.$router.push({path:"/pickup/detail",query:e})},watchOffice:function(e){this.$router.push({path:"/office/location",query:{userId:e}})},saveScrollTop:function(){i.i(h.a)({type:"set",key:"package_pickup_scroll_top",val:this.$refs.my_scroller_pickup.getPosition().top}),i.i(h.a)({type:"set",key:"package_send_scroll_top",val:this.$refs.my_scroller_send.getPosition().top})},scrollBy:function(){var e=this,t=i.i(h.a)({key:"package_pickup_scroll_top"}),n=i.i(h.a)({key:"package_send_scroll_top"});setTimeout(function(){e.$refs.my_scroller_pickup.scrollBy(0,t,!0),e.$refs.my_scroller_send.scrollBy(0,n,!0)},100)}}),beforeDestroy:function(){this.saveScrollTop(),this.$vux.toast.hide()}}},631:function(e,t,i){t=e.exports=i(171)(),t.push([e.i,'.article[data-v-6874ef3b]{background-color:#fff;padding:2rem}.article-title[data-v-6874ef3b]{text-align:center;padding:1rem;font-size:2.1rem}.article-content[data-v-6874ef3b]{padding-bottom:1rem;text-align:justify;font-size:1.6rem}.article-content[data-v-6874ef3b]:last-child{padding-bottom:0}.article-content a[data-v-6874ef3b]{color:#2c3e50}.hide[data-v-6874ef3b]{display:none}.show[data-v-6874ef3b]{display:block}.show-important[data-v-6874ef3b]{display:block!important}.clearfixed[data-v-6874ef3b]:after{content:"";display:block;clear:both}.flex[data-v-6874ef3b]{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-box-align:center;-ms-flex-align:center;align-items:center}.btg[data-v-6874ef3b]{border-bottom:1px solid #dedede}.btopg[data-v-6874ef3b]{border-top:1px solid #dedede}.officeimg[data-v-6874ef3b]{text-align:center;font-size:0;padding:.4rem .6rem}.officeimg img[data-v-6874ef3b]{width:100%;max-width:305px;height:auto;border:1px solid #dedede;box-sizing:border-box;border-radius:2px}.office-detail[data-v-6874ef3b]{padding:0 .6rem}.office-detail p[data-v-6874ef3b],.vux-tab .vux-tab-item[data-v-6874ef3b]{font-size:1.4rem}.fixed-fill[data-v-6874ef3b]{position:fixed;bottom:0;width:94%}.mj-switch[data-v-6874ef3b]{padding:10px 15px!important}.mj-switch .weui-cell__ft .weui-switch[data-v-6874ef3b]{width:40px!important;height:20px!important}.mj-switch .weui-cell__ft .weui-switch[data-v-6874ef3b]:checked{border-color:#ff6d40;background-color:#ff6d40}.mj-switch .weui-cell__ft .weui-switch[data-v-6874ef3b]:before{width:40px;height:20px}.mj-switch .weui-cell__ft .weui-switch[data-v-6874ef3b]:after{width:20px;height:18px}.express-router__link[data-v-6874ef3b]{position:absolute;top:1.8rem;right:1.8rem;text-align:center;border:1px solid #ff6d40;color:#ff6d40;background:#fff;padding:.2rem .8rem;font-size:1.3rem;border-radius:5px}.addaddress-container .weui-cell[data-v-6874ef3b]{font-size:1.5rem}.addaddress-container .weui-cell__bd.weui-cell__primary input[data-v-6874ef3b],.addaddress-container .weui-cell__bd textarea[data-v-6874ef3b]{text-align:right}.addaddress .quyu[data-v-6874ef3b]{font-size:1.5rem}.addaddress .quyu .vux-cell-box[data-v-6874ef3b]:before{content:" ";position:absolute;left:0;top:0;right:0;height:1px;border-top:1px solid #d9d9d9;color:#d9d9d9;-webkit-transform-origin:0 0;transform-origin:0 0;-webkit-transform:scaleY(.5);transform:scaleY(.5);left:15px}.addaddress .quyu .weui-label[data-v-6874ef3b]{text-align:left;padding-left:.6rem}.addaddress .quyu .vux-popup-picker-select[data-v-6874ef3b]{color:#666}.addaddress .quyu .vux-popup-picker-select span[data-v-6874ef3b]{font-size:1.5rem}.contenthide[data-v-6874ef3b]{-webkit-transform:scale(0);transform:scale(0);height:0}.navigation-btn[data-v-6874ef3b]{width:4.6rem;font-size:1.4rem;text-align:center;padding:.2rem .4rem;border-radius:5px;box-sizing:border-box;white-space:nowrap;color:#fff;border:none;background:#ff6d40}.map #panel[data-v-6874ef3b]{top:15px;z-index:999;position:absolute;background-color:#fff;max-height:100%;overflow-y:auto;right:14px;width:282px}.map .amap-marker img[data-v-6874ef3b]{max-width:19px;max-height:33px}.map .amap-ui-smp-ifwn-container[data-v-6874ef3b]{font-size:1.4rem}.map .amap-ui-smp-ifwn-def-tr-close[data-v-6874ef3b]{font-size:2.2rem}.map .h2rem[data-v-6874ef3b]{height:2rem;overflow:hidden}.map .hauto[data-v-6874ef3b]{height:auto}.office-detail[data-v-6874ef3b]{padding-top:.2rem}.office-detail__more[data-v-6874ef3b]{float:right}.office-detail__content[data-v-6874ef3b]{-webkit-transition:all .2s ease;transition:all .2s ease;padding-top:1rem}.office-detail .upside[data-v-6874ef3b]{-webkit-transform:rotate(180deg);transform:rotate(180deg)}.office-detail .first-line span.more[data-v-6874ef3b]{float:right;width:0;height:0;border-width:1.7rem .8rem 0;border-style:solid;border-color:#ff6d40 transparent transparent;margin:.2rem .1rem;position:relative;-webkit-transition:-webkit-transform .6s;transition:-webkit-transform .6s;transition:transform .6s;transition:transform .6s,-webkit-transform .6s}.normal-btn[data-v-6874ef3b]{width:5.6rem;padding:.2rem}div.confirm-btn-cont[data-v-6874ef3b]{text-align:right;padding-top:10px}.confirm-btn[data-v-6874ef3b],div.confirm-btn-cont button[data-v-6874ef3b]{width:5.6rem;padding:.2rem;width:6rem;font-size:1.4rem;text-align:center;padding:.2rem .5rem;border-radius:5px;box-sizing:border-box;white-space:nowrap;color:#fff;border:none;background:#ff6d40}.confirm-btn[data-v-6874ef3b]{float:right}.pull-brand span.more[data-v-6874ef3b]{float:right;width:0;height:0;border-width:1.3rem .6rem 0;border-style:solid;border-color:#ff6d40 transparent transparent;margin:.2rem .1rem;position:relative;-webkit-transition:-webkit-transform .6s;transition:-webkit-transform .6s;transition:transform .6s;transition:transform .6s,-webkit-transform .6s}.scroll-container[data-v-6874ef3b]{padding:0 1rem}.box2-wrap[data-v-6874ef3b]{height:300px;overflow:hidden}.rotate[data-v-6874ef3b]{display:inline-block;-webkit-transform:rotate(-180deg);transform:rotate(-180deg)}.pullup-arrow[data-v-6874ef3b]{-webkit-transition:all .2s linear;transition:all .2s linear;color:#666;font-size:25px}.border-bottom-grey[data-v-6874ef3b]{border-bottom:1px solid #ececec}.send-icon[data-v-6874ef3b]{border-radius:50%;background:#beb9b9;color:#fff;margin-right:1rem;width:3rem;height:3rem;font-size:1.3rem;line-height:3rem;text-align:center}.sum-money[data-v-6874ef3b]{font-size:1.4rem;color:#ff6d40}.normal-btn[data-v-6874ef3b]{width:6rem;padding:.2rem .5rem;border-radius:5px}.cancle-btn[data-v-6874ef3b],.normal-btn[data-v-6874ef3b]{font-size:1.4rem;text-align:center;box-sizing:border-box;white-space:nowrap}.cancle-btn[data-v-6874ef3b]{height:2.5rem;border:1px solid #999;padding:.3rem;border-radius:5px;background:transparent;color:#999}.gosend-btn[data-v-6874ef3b]{width:5.6rem;padding:.2rem;width:6rem;font-size:1.4rem;text-align:center;padding:.2rem .5rem;border-radius:5px;box-sizing:border-box;white-space:nowrap;border:none;background:#ff6d40;color:#fff}.office-info[data-v-6874ef3b]{-webkit-box-flex:6;-ms-flex:6;flex:6;color:#999}.address-icon[data-v-6874ef3b]{-webkit-box-flex:1;-ms-flex:1;flex:1;text-align:center;border-left:1px solid #dedede;padding:1.3rem;padding-left:2rem;margin-left:2rem}.address-icon img[data-v-6874ef3b]{width:1.8rem}.senddetail-container-tab[data-v-6874ef3b]{position:fixed;width:100%;z-index:1000}.senddetail-scroller[data-v-6874ef3b]{padding-top:42px}.senddetail-cell[data-v-6874ef3b]{padding-bottom:8rem}.senddetail-cell-status[data-v-6874ef3b]{font-size:1.6rem;text-align:left;padding:1rem;padding-bottom:0}.senddetail-cell-detail[data-v-6874ef3b]{background:#fff;text-align:justify;padding:0 1rem;margin:1rem 0}.senddetail-cell-detail--box[data-v-6874ef3b]{padding:.4rem 0}.senddetail-cell-detail__title[data-v-6874ef3b]{font-size:1.5rem}.senddetail-cell-detail__title img[data-v-6874ef3b]{width:auto;height:2rem;vertical-align:top}.senddetail-cell-detail p[data-v-6874ef3b]{font-size:1.4rem;padding:.2rem}.senddetail-cell-detail .wait-senddetail[data-v-6874ef3b]{float:right;color:#ff6d40;padding-top:.3rem}.senddetail-cell-detail .already-senddetail[data-v-6874ef3b]{float:right;color:#999;padding-top:.3rem}.senddetail-cell-detail .time[data-v-6874ef3b]{font-size:1.2rem;color:#333}',""])},652:function(e,t,i){var n=i(631);"string"==typeof n&&(n=[[e.i,n,""]]),n.locals&&(e.exports=n.locals);i(447)("0890ab8f",n,!1)},693:function(e,t,i){e.exports={render:function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("div",{staticClass:"senddetail"},[i("div",{staticClass:"senddetail-container"},[i("div",{staticClass:"senddetail-container-tab"},[i("tab",{attrs:{"active-color":"#ff750f"}},[i("tab-item",{attrs:{selected:"pickup"===e.show},on:{"on-item-click":function(t){e.changeShow("pickup")}}},[e._v("取件")]),e._v(" "),i("tab-item",{attrs:{selected:"send"===e.show},on:{"on-item-click":function(t){e.changeShow("send")}}},[e._v("寄件")])],1)],1),e._v(" "),i("div",{directives:[{name:"show",rawName:"v-show",value:"pickup"===e.show,expression:"show === 'pickup'"}],staticClass:"senddetail-cell"},[i("scroller",{ref:"my_scroller_pickup",staticClass:"senddetail-scroller",attrs:{"on-refresh":e.refreshPickup,"on-infinite":e.infinitePickup}},[i("mj-spinner",{attrs:{slot:"refresh-spinner",type:"line"},slot:"refresh-spinner"}),e._v(" "),e._l(e.pickup,function(e){return i("div",{key:e.createTime,staticClass:"senddetail-cell-detail"},[i("mj-pickupitem",{attrs:{item:e}})],1)}),e._v(" "),i("mj-spinner",{attrs:{slot:"infinite-spinner",type:"circle"},slot:"infinite-spinner"}),e._v(" "),i("div",{staticStyle:{height:"50px"}})],2)],1),e._v(" "),i("div",{directives:[{name:"show",rawName:"v-show",value:"send"===e.show,expression:"show === 'send'"}],staticClass:"senddetail-cell"},[i("scroller",{ref:"my_scroller_send",staticClass:"senddetail-scroller",attrs:{"on-refresh":e.refreshSend,"on-infinite":e.infiniteSend}},[i("mj-spinner",{attrs:{slot:"refresh-spinner",type:"line"},slot:"refresh-spinner"}),e._v(" "),e._l(e.send,function(e){return i("div",{directives:[{name:"show",rawName:"v-show",value:5!==e.type,expression:"item.type !== 5"}],key:e.id,staticClass:"senddetail-cell-detail"},[i("mj-senditem",{attrs:{item:e,readonly:""}})],1)}),e._v(" "),i("mj-spinner",{attrs:{slot:"infinite-spinner",type:"circle"},slot:"infinite-spinner"}),e._v(" "),i("div",{staticStyle:{height:"50px"}})],2)],1)])])},staticRenderFns:[]},e.exports.render._withStripped=!0}});