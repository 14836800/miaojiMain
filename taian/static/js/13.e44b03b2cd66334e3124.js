webpackJsonp([13],{466:function(e,t,o){o(657);var n=o(0)(o(618),o(698),null,null);n.options.__file="E:\\MJWechatApp\\code\\src\\views\\Test.vue",n.esModule&&Object.keys(n.esModule).some(function(e){return"default"!==e&&"__esModule"!==e})&&console.error("named exports are not supported in *.vue files."),n.options.functional&&console.error("[vue-loader] Test.vue: functional components are not supported with templates, they should use render functions."),e.exports=n.exports},618:function(e,t,o){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n=o(6),r=o.n(n),s=o(5),a=o.n(s),i=o(10),c=o.n(i),u=o(9);t.default={created:function(){},data:function(){return{url:"11",res:"",code:""}},methods:{getopenid:function(){var e=this;return a()(r.a.mark(function t(){var o,n,s,a;return r.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return o="wx543968867249e28d",n="efc582e21d07549a8bade66ceefdc312",s="https://api.weixin.qq.com/sns/oauth2/access_token?appid="+o+"&secret="+n+"&code="+e.code+"&grant_type=authorization_code",e.url=s,alert(s),alert(u.f.getwebopenid),t.next=8,c()({method:"post",url:u.f.getwebopenid,params:{url:s}});case 8:a=t.sent,console.log("res",a);case 10:case"end":return t.stop()}},t,e)}))()}}}},636:function(e,t,o){t=e.exports=o(171)(),t.push([e.i,"html{-ms-text-size-adjust:100%;-webkit-text-size-adjust:100%}body{line-height:1.6;font-family:-apple-system-font,Helvetica Neue,sans-serif}*{margin:0;padding:0}a img{border:0}a{text-decoration:none;-webkit-tap-highlight-color:rgba(0,0,0,0)}::-webkit-input-placeholder{font-family:-apple-system-font,Helvetica Neue,sans-serif}a{-webkit-touch-callout:none}",""])},657:function(e,t,o){var n=o(636);"string"==typeof n&&(n=[[e.i,n,""]]),n.locals&&(e.exports=n.locals);o(447)("dac82b2c",n,!1)},698:function(e,t,o){e.exports={render:function(){var e=this,t=e.$createElement,o=e._self._c||t;return o("div",{staticClass:"test"},[o("h1",[e._v(e._s(e.url))]),e._v(" "),o("h1",[e._v(e._s(e.res))]),e._v(" "),o("input",{directives:[{name:"model",rawName:"v-model",value:e.code,expression:"code"}],attrs:{type:"text",name:"",placeholder:"code input"},domProps:{value:e.code},on:{input:function(t){t.target.composing||(e.code=t.target.value)}}}),e._v(" "),o("button",{attrs:{type:""},on:{click:e.getopenid}},[e._v("获取openid")])])},staticRenderFns:[]},e.exports.render._withStripped=!0}});