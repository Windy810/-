(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["common/main"],{1494:function(t,e,o){"use strict";o.r(e);var n=o("f3da");for(var r in n)"default"!==r&&function(t){o.d(e,t,(function(){return n[t]}))}(r);o("5fb7");var c,l,a,u,i=o("f0c5"),f=Object(i["a"])(n["default"],c,l,!1,null,null,null,!1,a,u);e["default"]=f.exports},5921:function(t,e,o){"use strict";(function(t){Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var n=r(o("66fd"));function r(t){return t&&t.__esModule?t:{default:t}}var c={onLaunch:function(){console.log("App Launch"),t.getSystemInfo({success:function(t){n.default.prototype.StatusBar=t.statusBarHeight;var e=wx.getMenuButtonBoundingClientRect();n.default.prototype.Custom=e,n.default.prototype.CustomBar=e.bottom+e.top-t.statusBarHeight,console.log(StatusBar)}}),n.default.prototype.ColorList=[{title:"嫣红",name:"red",color:"#e54d42"},{title:"桔橙",name:"orange",color:"#f37b1d"},{title:"明黄",name:"yellow",color:"#fbbd08"},{title:"橄榄",name:"olive",color:"#8dc63f"},{title:"森绿",name:"green",color:"#39b54a"},{title:"天青",name:"cyan",color:"#1cbbb4"},{title:"海蓝",name:"blue",color:"#0081ff"},{title:"深蓝",name:"darkblue",color:"#005c84"},{title:"姹紫",name:"purple",color:"#6739b6"},{title:"木槿",name:"mauve",color:"#9c26b0"},{title:"桃粉",name:"pink",color:"#e03997"},{title:"棕褐",name:"brown",color:"#a5673f"},{title:"玄灰",name:"grey",color:"#8799a3"},{title:"草灰",name:"gray",color:"#aaaaaa"},{title:"墨黑",name:"black",color:"#333333"},{title:"雅白",name:"white",color:"#ffffff"}]},onShow:function(){console.log("App Show")},onHide:function(){console.log("App Hide")}};e.default=c}).call(this,o("543d")["default"])},"5fb7":function(t,e,o){"use strict";var n=o("d68c"),r=o.n(n);r.a},9106:function(t,e,o){"use strict";(function(t){o("41f7"),o("921b");var e=r(o("66fd")),n=r(o("1494"));function r(t){return t&&t.__esModule?t:{default:t}}function c(t,e){var o=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),o.push.apply(o,n)}return o}function l(t){for(var e=1;e<arguments.length;e++){var o=null!=arguments[e]?arguments[e]:{};e%2?c(Object(o),!0).forEach((function(e){a(t,e,o[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(o)):c(Object(o)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(o,e))}))}return t}function a(t,e,o){return e in t?Object.defineProperty(t,e,{value:o,enumerable:!0,configurable:!0,writable:!0}):t[e]=o,t}var u=function(){o.e("colorui/components/cu-custom").then(function(){return resolve(o("0279"))}.bind(null,o)).catch(o.oe)};e.default.component("cu-custom",u),e.default.config.productionTip=!1,n.default.mpType="app";var i=new e.default(l({},n.default));t(i).$mount()}).call(this,o("543d")["createApp"])},d68c:function(t,e,o){},f3da:function(t,e,o){"use strict";o.r(e);var n=o("5921"),r=o.n(n);for(var c in n)"default"!==c&&function(t){o.d(e,t,(function(){return n[t]}))}(c);e["default"]=r.a}},[["9106","common/runtime","common/vendor"]]]);