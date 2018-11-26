(function(e){function t(t){for(var s,o,i=t[0],c=t[1],l=t[2],p=0,d=[];p<i.length;p++)o=i[p],a[o]&&d.push(a[o][0]),a[o]=0;for(s in c)Object.prototype.hasOwnProperty.call(c,s)&&(e[s]=c[s]);u&&u(t);while(d.length)d.shift()();return r.push.apply(r,l||[]),n()}function n(){for(var e,t=0;t<r.length;t++){for(var n=r[t],s=!0,i=1;i<n.length;i++){var c=n[i];0!==a[c]&&(s=!1)}s&&(r.splice(t--,1),e=o(o.s=n[0]))}return e}var s={},a={app:0},r=[];function o(t){if(s[t])return s[t].exports;var n=s[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,o),n.l=!0,n.exports}o.m=e,o.c=s,o.d=function(e,t,n){o.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},o.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},o.t=function(e,t){if(1&t&&(e=o(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(o.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var s in e)o.d(n,s,function(t){return e[t]}.bind(null,s));return n},o.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return o.d(t,"a",t),t},o.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},o.p="/vue-autoscroll/";var i=window["webpackJsonp"]=window["webpackJsonp"]||[],c=i.push.bind(i);i.push=t,i=i.slice();for(var l=0;l<i.length;l++)t(i[l]);var u=c;r.push([0,"chunk-vendors"]),n()})({0:function(e,t,n){e.exports=n("56d7")},"56d7":function(e,t,n){"use strict";n.r(t);n("cadf"),n("551c"),n("097d");var s=n("2b0e"),a=n("bc3a"),r=n.n(a),o=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{attrs:{id:"app"}},[e._m(0),n("div",{staticClass:"container"},[n("div",{staticClass:"chat-container"},[n("nav",{staticClass:"level chat-settings"},[n("div",{staticClass:"level-left"},[n("div",{staticClass:"level-item"},[n("label",{staticClass:"checkbox"},[n("input",{directives:[{name:"model",rawName:"v-model",value:e.options.smooth,expression:"options.smooth"}],attrs:{type:"checkbox"},domProps:{checked:Array.isArray(e.options.smooth)?e._i(e.options.smooth,null)>-1:e.options.smooth},on:{change:function(t){var n=e.options.smooth,s=t.target,a=!!s.checked;if(Array.isArray(n)){var r=null,o=e._i(n,r);s.checked?o<0&&e.$set(e.options,"smooth",n.concat([r])):o>-1&&e.$set(e.options,"smooth",n.slice(0,o).concat(n.slice(o+1)))}else e.$set(e.options,"smooth",a)}}}),e._v("\n              Smooth scroll\n            ")])]),n("div",{staticClass:"level-item"},[n("label",{staticClass:"checkbox"},[n("input",{directives:[{name:"model",rawName:"v-model",value:e.options.always,expression:"options.always"}],attrs:{type:"checkbox"},domProps:{checked:Array.isArray(e.options.always)?e._i(e.options.always,null)>-1:e.options.always},on:{change:function(t){var n=e.options.always,s=t.target,a=!!s.checked;if(Array.isArray(n)){var r=null,o=e._i(n,r);s.checked?o<0&&e.$set(e.options,"always",n.concat([r])):o>-1&&e.$set(e.options,"always",n.slice(0,o).concat(n.slice(o+1)))}else e.$set(e.options,"always",a)}}}),e._v("\n              Always Scroll\n            ")])])]),n("div",{staticClass:"level-right"},[n("div",{staticClass:"level-item"},[n("a",{staticClass:"button is-small",class:{"is-primary":!e.isStreaming,"is-warning":e.isStreaming}},[n("span",{directives:[{name:"show",rawName:"v-show",value:!e.isStreaming,expression:"!isStreaming"}],on:{click:e.startStream}},[e._v("Start Stream")]),n("span",{directives:[{name:"show",rawName:"v-show",value:e.isStreaming,expression:"isStreaming"}],on:{click:e.stopStream}},[e._v("Stop Stream")])])])])]),n("ul",{directives:[{name:"autoscroll",rawName:"v-autoscroll",value:e.options,expression:"options"}],staticClass:"messages-container box"},e._l(e.senteces,function(t,s){return n("li",{key:s,staticClass:"message"},[n("div",{staticClass:"message-body",domProps:{textContent:e._s(t)}})])})),n("div",{staticClass:"messages-input"},[n("input",{directives:[{name:"model",rawName:"v-model",value:e.newSentence,expression:"newSentence"}],staticClass:"input is-medium",attrs:{placeholder:"Enter your message"},domProps:{value:e.newSentence},on:{keyup:[function(t){return"button"in t||!e._k(t.keyCode,"enter",13,t.key,"Enter")?e.add(t):null},function(t){return"button"in t||!e._k(t.keyCode,"esc",27,t.key,"Escape")?e.clear(t):null}],input:function(t){t.target.composing||(e.newSentence=t.target.value)}}})])])]),e._m(1)])},i=[function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("header",{staticClass:"header"},[s("div",{staticClass:"navbar-brand"},[s("img",{attrs:{alt:"Vue logo",src:n("cf05")}})]),s("div",{staticClass:"navbar-brand-name"},[s("h1",{staticClass:"title"},[e._v("Vue Autoscroll")]),s("h2",{staticClass:"subtitle"},[e._v("\n        scrolls to bottom when "),s("strong",[e._v("new content")]),e._v(" is added\n      ")])])])},function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("footer",{staticClass:"footer"},[n("div",{staticClass:"content has-text-centered"},[n("p",[e._v("\n        The source code is licensed "),n("a",{attrs:{href:"https://github.com/codekraft-studio/vue-autoscroll/blob/master/LICENSE"}},[e._v("MIT")]),e._v(".\n        Made with ♥ by "),n("a",{attrs:{href:"https://github.com/codekraft-studio"}},[e._v("Codekraft Studio")]),e._v(".\n      ")])])])}],c=(n("96cf"),n("1da1"));function l(e){return new Promise(function(t){return setTimeout(t,e)})}var u={name:"app",data:function(){return{isStreaming:!1,newSentence:"",senteces:[],options:{always:!0,smooth:!0}}},methods:{clear:function(){this.newSentence=""},add:function(){this.newSentence&&""!==this.newSentence&&(this.stopStream(),this.senteces.push(this.newSentence),this.clear())},startStream:function(){var e=Object(c["a"])(regeneratorRuntime.mark(function e(){var t;return regeneratorRuntime.wrap(function(e){while(1)switch(e.prev=e.next){case 0:this.isStreaming=!0;case 1:if(this.isStreaming){e.next=3;break}return e.abrupt("break",9);case 3:return t=this._sentences[Math.floor(Math.random()*this._sentences.length)],this.senteces.push(t),e.next=7,l(2e3);case 7:e.next=1;break;case 9:case"end":return e.stop()}},e,this)}));return function(){return e.apply(this,arguments)}}(),stopStream:function(){this.isStreaming=!1}},created:function(){var e=Object(c["a"])(regeneratorRuntime.mark(function e(){var t;return regeneratorRuntime.wrap(function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,this.$http.get("https://baconipsum.com/api/?type=meat-and-filler&paras=40");case 2:if(t=e.sent,t.data&&0!==t.data.length){e.next=6;break}return console.error("The API failed and the demo page is not working"),e.abrupt("return");case 6:return e.next=8,l(1500);case 8:this._sentences=t.data,this.startStream();case 10:case"end":return e.stop()}},e,this)}));return function(){return e.apply(this,arguments)}}()},p=u,d=(n("5c0b"),n("2877")),h=Object(d["a"])(p,o,i,!1,null,null,null);h.options.__file="App.vue";var m=h.exports,v=function(e,t){e.scroll({top:e.scrollHeight,behavior:t?"smooth":"instant"})},f={bind:function(e,t){var n=!1;e.addEventListener("scroll",function(){n=e.scrollTop+e.clientHeight+1<e.scrollHeight}),new MutationObserver(function(s){var a=t.value||{smooth:!0},r=!1===a.always&&n;r||1!=s[s.length-1].addedNodes.length||v(e,a.smooth)}).observe(e,{childList:!0})},inserted:v},g=f;function b(e){e.directive("autoscroll",g)}s["a"].config.productionTip=!1,s["a"].prototype.$http=r.a,s["a"].use(b),new s["a"]({render:function(e){return e(m)}}).$mount("#app")},"5c0b":function(e,t,n){"use strict";var s=n("5e27"),a=n.n(s);a.a},"5e27":function(e,t,n){},cf05:function(e,t,n){e.exports=n.p+"img/logo.82b9c7a5.png"}});
//# sourceMappingURL=app.a2f07d5f.js.map