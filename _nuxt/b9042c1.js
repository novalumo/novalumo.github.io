(window.webpackJsonp=window.webpackJsonp||[]).push([[9],{236:function(t,e,o){var content=o(250);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,o(63).default)("5134fda9",content,!0,{sourceMap:!1})},249:function(t,e,o){"use strict";o(236)},250:function(t,e,o){var n=o(62)(!1);n.push([t.i,".btn[data-v-31fe2665]{background:#333;color:#fff}.btn[data-v-31fe2665]:hover{opacity:.75}.info[data-v-31fe2665]{padding:1px 14px;background:#dc3545;color:#fff;font-weight:700;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;cursor:default}form[data-v-31fe2665]{display:flex;flex-flow:row wrap;align-items:center}form button[data-v-31fe2665]{outline:none}label[data-v-31fe2665]{display:inline-block;margin-bottom:.5rem}label span[data-v-31fe2665]{color:#a00;font-size:1.2em}input[data-v-31fe2665],textarea[data-v-31fe2665]{display:block;width:100%;padding:.375rem .75rem;margin-bottom:.7rem;font-size:1.3rem;line-height:1.5;color:#495057;background-color:#fff;background-clip:padding-box;border:none;border-bottom:1px solid #ced4da;border-radius:.1rem;transition:border-color .15s ease-in-out,box-shadow .15s ease-in-out}input[data-v-31fe2665]:-moz-read-only,textarea[data-v-31fe2665]:-moz-read-only{background:hsla(0,0%,39.2%,.15)}input[data-v-31fe2665]:read-only,textarea[data-v-31fe2665]:read-only{background:hsla(0,0%,39.2%,.15)}input[data-v-31fe2665]:focus,textarea[data-v-31fe2665]:focus{color:#495057;background-color:#fff;border-bottom:1px solid #272727;outline:0}input[readonly][data-v-31fe2665],textarea[readonly][data-v-31fe2665]{background-color:#e9ecef;opacity:1}#submitButton i[data-v-31fe2665]{transition:.3s}#submitButton:hover i[data-v-31fe2665]{transform:translateX(3px)}.sending[data-v-31fe2665]{text-align:center}.sending #message[data-v-31fe2665]{background:#cfe2ff;color:#084298;display:inline-block;margin:8px 0;padding:10px 20px;cursor:default;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;opacity:0;transition:.2s}.contact[data-v-31fe2665]{max-width:740px;margin:0 auto}",""]),t.exports=n},269:function(t,e,o){"use strict";o.r(e);var n={head:function(){return{title:"お問い合わせ"}},data:function(){return{stop:!1}},methods:{postInquiry:function(){var t=$('input[name="name"]').val(),e=$('input[name="company"]').val(),address=$('input[name="address"]').val(),o=$('input[name="email"]').val(),n=$('input[name="phone"]').val(),title=$('input[name="title"]').val(),body=$('textarea[name="body"]').val();if(""==t||""==o||""==title||""==body)t=!0,o=!0,title=!0,body=!0;else{submitButton.style.display="none",message.style.opacity="1";for(var input=document.getElementsByClassName("formInput"),i=0;i<input.length;i++)input[i].disabled=!0;var data={name:t,company:e,address:address,email:o,phone:n,title:title,body:body};$.ajax({url:"https://script.google.com/macros/s/AKfycbxcrVjKUQ5HJ1Fxpje4QI3sYGC4l6RkKnICH_YALhPETXU4WDWAucwC8q3t6vKTKudrfg/exec",type:"POST",data:data}).done((function(t){if("success"!=t.response)return console.log(JSON.stringify(t.error)),void alert("送信に失敗しました");location.href="./contact/result"})).fail((function(){alert("送信に失敗しました")})).always((function(){console.log("送信処理終了")}))}}}},r=(o(249),o(30)),component=Object(r.a)(n,(function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",[t._m(0),t._v(" "),t.stop?o("div",{staticClass:"info"},[t._m(1)]):t._e(),t._v(" "),o("div",{staticClass:"container my-5"},[o("div",{staticClass:"row mx-2"},[o("div",{staticClass:"col contact"},[o("p",{staticStyle:{"font-weight":"bold"}},[o("span",{staticStyle:{color:"#a00","font-size":"1.2em"}},[t._v("*")]),t._v(t._s(t.$t("contact.required")))]),t._v(" "),o("form",{attrs:{onsubmit:"return false"}},[o("label",{attrs:{for:"formNameData"}},[t._v(t._s(t.$t("contact.name"))),o("span",[t._v("*")])]),t._v(" "),o("input",{staticClass:"formInput",attrs:{type:"text",name:"name",id:"formNameData",autocomplete:"name",required:""}}),t._v(" "),o("label",{attrs:{for:"formCompanyData"}},[t._v(t._s(t.$t("contact.company_position")))]),t._v(" "),o("input",{staticClass:"formInput",attrs:{type:"text",name:"company",id:"formCompanyData",autocomplete:"organization"}}),t._v(" "),o("label",{attrs:{for:"formAddressData"}},[t._v(t._s(t.$t("contact.address")))]),t._v(" "),o("input",{staticClass:"formInput",attrs:{type:"text",name:"address",id:"formAddressData"}}),t._v(" "),o("label",{attrs:{for:"formEmailData"}},[t._v(t._s(t.$t("contact.email"))),o("span",[t._v("*")])]),t._v(" "),o("input",{staticClass:"formInput",attrs:{type:"email",name:"email",id:"formEmailData",autocomplete:"email",required:""}}),t._v(" "),o("label",{attrs:{for:"formPhoneNumberData"}},[t._v(t._s(t.$t("contact.phone")))]),t._v(" "),o("input",{staticClass:"formInput",attrs:{type:"tel",name:"phone",id:"formPhoneNumberData",autocomplete:"off"}}),t._v(" "),o("label",{attrs:{for:"formTitleData"}},[t._v(t._s(t.$t("contact.inquiry_title"))),o("span",[t._v("*")])]),t._v(" "),o("input",{staticClass:"formInput",attrs:{type:"text",name:"title",id:"formTitleData",autocomplete:"off",required:""}}),t._v(" "),o("label",{attrs:{for:"formBodyData"}},[t._v(t._s(t.$t("contact.body"))),o("span",[t._v("*")])]),t._v(" "),o("textarea",{staticClass:"formInput",attrs:{name:"body",id:"formBodyData",rows:"4",required:""}}),t._v(" "),o("div",{staticClass:"mx-auto"},[o("button",{staticClass:"btn",attrs:{id:"submitButton"},on:{click:function(e){return t.postInquiry()}}},[t._v(t._s(t.$t("contact.send_button"))+" "),o("i",{staticClass:"fas fa-fw fa-angle-right"})])])]),t._v(" "),o("div",{staticClass:"sending"},[o("p",{attrs:{id:"message"}},[t._v(t._s(t.$t("contact.sending_message")))])])])])])])}),[function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",{staticClass:"title"},[o("div",{staticClass:"title-body"},[o("h1",[t._v("Contact")]),t._v(" "),o("p",[t._v("お問い合わせ")])])])},function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("p",[o("i",{staticClass:"fas fa-fw fa-exclamation-circle"}),t._v(" 新規制作依頼の受付を一時停止しております。お問い合わせ頂いたものに関しては確認次第ご連絡させていただきます。")])}],!1,null,"31fe2665",null);e.default=component.exports}}]);