(window.webpackJsonp=window.webpackJsonp||[]).push([[16,3],{280:function(e,t,d){var content=d(283);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[e.i,content,""]]),content.locals&&(e.exports=content.locals);(0,d(62).default)("157bb6b6",content,!0,{sourceMap:!1})},281:function(e){e.exports=JSON.parse('[{"date":"2020-04-30","title":"1番目","category":"release","img":"/img/news/default.jpg","file":"sample"},{"date":"2021-06-26","title":"2番目","category":"info","img":"/img/news/default.jpg","file":""},{"date":"","title":"3番目","category":"media","img":"","file":""},{"date":"","title":"4番目","category":"","img":"","file":""}]')},282:function(e,t,d){"use strict";d(280)},283:function(e,t,d){var n=d(61)(!1);n.push([e.i,"dl dd[data-v-09418bdd]{box-shadow:0 .125rem .25rem rgba(0,0,0,.075);border:1px solid #efefef;border-radius:8px}dl dd[data-v-09418bdd]:not(:last-child){margin:0 0 16px}dl dd a[data-v-09418bdd]{color:inherit;display:flex;padding:24px;text-decoration:none;transition:.1s linear}dl dd a .date[data-v-09418bdd]{color:#777;display:block;font-size:.85rem}dl dd a p[data-v-09418bdd]{font-weight:700;margin:0 0 8px;line-height:1.5}dl dd a .eyecatch[data-v-09418bdd]{margin:0 0 0 auto}dl dd a .eyecatch img[data-v-09418bdd]{border:1px solid #eee;border-radius:10px;display:block;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;pointer-events:none}dl dd a .category[data-v-09418bdd]{padding:.2rem .5rem;border-radius:18px;display:inline-block;font-size:.75rem;font-weight:700;background:#eee;color:#333}dl dd a .category.release[data-v-09418bdd]{background:#da0f47;color:#fff}dl dd a .category.info[data-v-09418bdd]{background:#4158dd;color:#fff}dl dd a .category.media[data-v-09418bdd]{background:#f87f4f;color:#fff}dl dd a[data-v-09418bdd]:hover{color:inherit;opacity:.75}@media screen and (max-width:768px){dl dd a[data-v-09418bdd]{flex-direction:column-reverse}dl dd a .eyecatch[data-v-09418bdd]{margin:0 auto 18px;width:100%}dl dd a .eyecatch img[data-v-09418bdd]{margin:0 auto;width:100%}}",""]),e.exports=n},284:function(e,t,d){"use strict";d.r(t);d(191),d(12),d(68);var n=d(281),o={props:{limit:{type:Number,default:100}},data:function(){return{newsList:n}},methods:{getEnglishDate:function(e){var t=new Date(e);if("Invalid Date"!==t.toString()){return["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"][t.getMonth()]+" "+t.getDate()+", "+t.getFullYear()}return""}},mounted:function(){}},r=(d(282),d(19)),component=Object(r.a)(o,(function(){var e=this,t=e.$createElement,d=e._self._c||t;return d("dl",e._l(this.newsList.slice(0,this.limit),(function(t){return d("dd",{key:t.id},[d("nuxt-link",{staticClass:"logo",attrs:{to:e.localePath("/news/"+t.file)}},[d("div",[d("span",{staticClass:"date"},[e._v(e._s(e.getEnglishDate(t.date)))]),e._v(" "),d("p",{staticClass:"news-title"},[e._v(e._s(t.title))]),e._v(" "),d("span",{staticClass:"category",class:t.category},["release"===t.category?d("div",[e._v("ニュースリリース")]):"info"===t.category?d("div",[e._v("お知らせ")]):"media"===t.category?d("div",[e._v("メディア")]):d("div",[e._v("その他")])])]),e._v(" "),""!==t.img?d("div",{staticClass:"eyecatch"},[d("nuxt-img",{attrs:{src:t.img,format:"webp",quality:"100",sizes:"sm:100vw md:200px lg:214px"}})],1):e._e()])],1)})),0)}),[],!1,null,"09418bdd",null);t.default=component.exports},328:function(e,t,d){"use strict";d.r(t);var n={head:function(){return{title:"ニュースルーム",meta:[{hid:"robots",name:"robots",content:"noindex,nofollow"}]}},mounted:function(){location.href="/"}},o=d(19),component=Object(o.a)(n,(function(){var e=this.$createElement,t=this._self._c||e;return t("div",{staticClass:"container my-3"},[t("div",{staticClass:"row"},[t("div",{staticClass:"col-12"},[t("news-card",{attrs:{limit:5}})],1)])])}),[],!1,null,"7f3a2f72",null);t.default=component.exports;installComponents(component,{NewsCard:d(284).default})}}]);