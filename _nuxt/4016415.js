(window.webpackJsonp=window.webpackJsonp||[]).push([[6],{249:function(e,t,n){var content=n(269);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[e.i,content,""]]),content.locals&&(e.exports=content.locals);(0,n(65).default)("2d02a816",content,!0,{sourceMap:!1})},268:function(e,t,n){"use strict";n(249)},269:function(e,t,n){var o=n(64)(!1);o.push([e.i,".lang-switch[data-v-63940d8f]{position:fixed;top:auto;bottom:14px;right:0;width:380px;max-width:100%;background:#fff;border:1px solid #eee;border-radius:18px 0 0 18px;box-shadow:0 .5rem 1rem rgba(0,0,0,.15);padding:18px;margin:0;display:flex;align-items:center;z-index:1000}.lang-switch .about[data-v-63940d8f]{font-size:18px;font-weight:700;margin:0}.lang-switch select[data-v-63940d8f]{background:#333;color:#fff;border:1px solid #ccc;width:100%;padding:10px 14px;margin:0;outline:none;transition:.2s}.lang-switch select[data-v-63940d8f]:not(.dont):hover{opacity:.8}",""]),e.exports=o},280:function(e,t,n){"use strict";n.r(t);n(36),n(58);var o={data:function(){return{selectedLanguage:""}},created:function(){this.selectedLanguage=this.$i18n.locale},methods:{onChange:function(e){this.$router.replace(this.switchLocalePath(e))}}},c=(n(268),n(31)),component=Object(c.a)(o,(function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"lang-switch row"},[n("div",[n("p",{staticClass:"about"},[n("i",{staticClass:"fas fa-fw fa-globe"}),e._v(" "+e._s(e.$t("switch")))])]),e._v(" "),n("div",[n("select",{directives:[{name:"model",rawName:"v-model",value:e.selectedLanguage,expression:"selectedLanguage"}],on:{change:[function(t){var n=Array.prototype.filter.call(t.target.options,(function(e){return e.selected})).map((function(e){return"_value"in e?e._value:e.value}));e.selectedLanguage=t.target.multiple?n:n[0]},function(t){return e.onChange(e.selectedLanguage)}]}},e._l(e.$i18n.locales,(function(t,o){return n("option",{key:o,domProps:{value:t.code,selected:t.code===t}},[e._v(e._s(t.name))])})),0)])])}),[],!1,null,"63940d8f",null);t.default=component.exports}}]);