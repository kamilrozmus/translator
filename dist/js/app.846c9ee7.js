(function(t){function e(e){for(var n,o,u=e[0],s=e[1],i=e[2],p=0,d=[];p<u.length;p++)o=u[p],Object.prototype.hasOwnProperty.call(r,o)&&r[o]&&d.push(r[o][0]),r[o]=0;for(n in s)Object.prototype.hasOwnProperty.call(s,n)&&(t[n]=s[n]);c&&c(e);while(d.length)d.shift()();return l.push.apply(l,i||[]),a()}function a(){for(var t,e=0;e<l.length;e++){for(var a=l[e],n=!0,u=1;u<a.length;u++){var s=a[u];0!==r[s]&&(n=!1)}n&&(l.splice(e--,1),t=o(o.s=a[0]))}return t}var n={},r={app:0},l=[];function o(e){if(n[e])return n[e].exports;var a=n[e]={i:e,l:!1,exports:{}};return t[e].call(a.exports,a,a.exports,o),a.l=!0,a.exports}o.m=t,o.c=n,o.d=function(t,e,a){o.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:a})},o.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},o.t=function(t,e){if(1&e&&(t=o(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var a=Object.create(null);if(o.r(a),Object.defineProperty(a,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var n in t)o.d(a,n,function(e){return t[e]}.bind(null,n));return a},o.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return o.d(e,"a",e),e},o.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},o.p="/";var u=window["webpackJsonp"]=window["webpackJsonp"]||[],s=u.push.bind(u);u.push=e,u=u.slice();for(var i=0;i<u.length;i++)e(u[i]);var c=s;l.push([0,"chunk-vendors"]),a()})({0:function(t,e,a){t.exports=a("56d7")},1:function(t,e){},"51ea":function(t,e,a){"use strict";var n=a("699d"),r=a.n(n);r.a},"56d7":function(t,e,a){"use strict";a.r(e);a("e260"),a("e6cf"),a("cca6"),a("a79d");var n=a("2b0e"),r=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("v-app",[a("v-app-bar",{attrs:{app:"",color:"primary",dark:""}},[a("div",{staticClass:"d-flex"},[a("h2",{attrs:{id:"title"}},[t._v("Translator")])])]),a("v-content",[a("v-row",{staticClass:"ml-4 mt-2"},[a("v-btn-toggle",{attrs:{tile:"",color:"deep-purple accent-3",group:""},model:{value:t.language,callback:function(e){t.language=e},expression:"language"}},[a("v-btn",{attrs:{value:"pl"}},[t._v("Polish")]),a("v-btn",{attrs:{value:"en"}},[t._v("English")]),a("v-btn",{attrs:{value:"de"}},[t._v("German")]),a("v-btn",{attrs:{value:"ru"}},[t._v("Russian")])],1)],1),a("div",{staticClass:"d-flex mx-6"},[a("input-field",{on:{emitTextToTranslate:t.textToTranslate}}),a("output-field",{attrs:{translatedText:t.translatedText}})],1)],1)],1)},l=[],o=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("v-container",[a("v-row",{staticClass:"text-center"},[a("v-textarea",{attrs:{type:"text",outlined:"",rules:t.rules,counter:"100"},on:{keyup:function(e){return e.ctrlKey||e.shiftKey||e.altKey||e.metaKey?null:t.submitText(e)}},model:{value:t.textToTranslate,callback:function(e){t.textToTranslate=e},expression:"textToTranslate"}})],1),a("virtual-keyboard",{attrs:{textToTranslate:t.textToTranslate}})],1)},u=[],s=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("keyboard",{staticClass:"ui-keyboard-case",attrs:{options:t.keyboardOption},model:{value:t.textToTranslate,callback:function(e){t.textToTranslate=e},expression:"textToTranslate"}})},i=[],c={name:"VirtualKeyboard",data:function(){return{message:"Hello Vue-virtual-keyboard!",props:["textToTranslate"],keyboardOption:{usePreview:!1,stickyShift:!1,autoAccept:!0,language:"zh",display:{accept:"submit",bksp:"delete"}}}}},p=c,d=(a("51ea"),a("2877")),f=Object(d["a"])(p,s,i,!1,null,"97634b36",null),v=f.exports,b=a("f7fe"),x=a.n(b),T={name:"InputField",components:{VirtualKeyboard:v},data:function(){return{rules:[function(t){return t.length<=100||"Max 100 characters"}],textToTranslate:"",language:"en"}},created:function(){this.submitText()},methods:{submitText:x()((function(){this.$emit("emitTextToTranslate",this.textToTranslate)}),500)}},h=T,y=a("6544"),m=a.n(y),g=a("a523"),O=a("0fd9"),_=a("a844"),k=Object(d["a"])(h,o,u,!1,null,null,null),w=k.exports;m()(k,{VContainer:g["a"],VRow:O["a"],VTextarea:_["a"]});var j=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("v-container",[a("v-textarea",{attrs:{outlined:""},model:{value:t.translatedText,callback:function(e){t.translatedText=e},expression:"translatedText"}})],1)},V=[],P={name:"OutputField",props:["translatedText"],data:function(){return{}}},C=P,$=Object(d["a"])(C,j,V,!1,null,null,null),A=$.exports;m()($,{VContainer:g["a"],VTextarea:_["a"]});var K={name:"App",components:{InputField:w,OutputField:A},data:function(){return{translatedText:"",language:"en",API:"https://translate.yandex.net/api/v1.5/tr.json/translate?key="}},methods:{textToTranslate:function(t){var e=this;this.$http.get(this.API+"trnsl.1.1.20200315T110837Z.602d8c8310f62b68.29ca80e2ab938f171ce05cae11db76691b4c57a4&lang="+this.language+"&text="+t).then((function(t){e.translatedText=t.body["text"][0]}))}}},S=K,E=a("7496"),M=a("40dc"),F=a("8336"),I=a("a609"),B=a("a75b"),R=Object(d["a"])(S,r,l,!1,null,null,null),J=R.exports;m()(R,{VApp:E["a"],VAppBar:M["a"],VBtn:F["a"],VBtnToggle:I["a"],VContent:B["a"],VRow:O["a"]});var z=a("28dd"),G=a("f309");n["a"].use(G["a"]);var H=new G["a"]({}),Z=a("754d");n["a"].config.productionTip=!1,n["a"].use(z["a"]),n["a"].use(Z["a"]),new n["a"]({vuetify:H,render:function(t){return t(J)}}).$mount("#app")},"699d":function(t,e,a){}});
//# sourceMappingURL=app.846c9ee7.js.map