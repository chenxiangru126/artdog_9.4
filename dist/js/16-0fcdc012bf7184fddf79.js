(window.webpackJsonp=window.webpackJsonp||[]).push([[16],{160:function(e,s,t){"use strict";t.d(s,"a",function(){return a}),t.d(s,"b",function(){return d});var a=function(){var e=this,s=e.$createElement,t=e._self._c||s;return t("div",{staticClass:"add_address_b"},[t("div",{staticClass:"input_b"},[t("div",{staticClass:"w h3 line-h-3 flex-h b-b m-t"},[t("div",{staticClass:"flex-1 c1 font-1 p-l"},[e._v("收件人")]),e._v(" "),t("div",{staticClass:"flex-3"},[t("input",{directives:[{name:"model",rawName:"v-model",value:e.name,expression:"name"}],attrs:{type:"text",placeholder:"输入收件人姓名",id:"id_name"},domProps:{value:e.name},on:{input:function(s){s.target.composing||(e.name=s.target.value)}}})])]),e._v(" "),t("div",{staticClass:"w h3 line-h-3 flex-h b-b"},[t("div",{staticClass:"flex-1 c1 font-1 p-l"},[e._v("手机号")]),e._v(" "),t("div",{staticClass:"flex-3"},[t("input",{directives:[{name:"model",rawName:"v-model",value:e.phone,expression:"phone"}],attrs:{type:"text",placeholder:"输入收件人手机号",id:"id_phone"},domProps:{value:e.phone},on:{input:function(s){s.target.composing||(e.phone=s.target.value)}}}),e._v(">\n            ")])]),e._v(" "),t("div",{staticClass:"w h3 line-h-3 flex-h b-b",on:{click:e.open_address}},[t("div",{staticClass:"flex-1 c1 font-1 p-l"},[e._v("收货地址")]),e._v(" "),t("div",{staticClass:"flex-3"},[e.area_address?t("p",{staticClass:"font-0 c2 right-2"},[e._v(e._s(e.area_address))]):t("p",{staticClass:"font-0 c2 right-2"},[e._v("选择城市")])])]),e._v(" "),e._m(0),e._v(" "),t("div",{staticClass:"text-area"},[t("textarea",{directives:[{name:"model",rawName:"v-model",value:e.address_detail,expression:"address_detail"}],staticClass:"h6",attrs:{id:"id_address",name:"",cols:"30",rows:"10",placeholder:"输入详细地址，如道路、门牌、小区等"},domProps:{value:e.address_detail},on:{input:function(s){s.target.composing||(e.address_detail=s.target.value)}}})]),e._v(" "),t("div",{staticClass:"submit-btn-1",on:{click:e.saveAddress}},[e._v("\n            保存\n        ")])]),e._v(" "),e.show_select_address?t("myAddress"):e._e()],1)},d=[function(){var e=this.$createElement,s=this._self._c||e;return s("div",{staticClass:"w h3 line-h-3"},[s("div",{staticClass:"flex-1 c1 font-1 p-l"},[this._v("详细地址")])])}]},210:function(e,s,t){"use strict";t.r(s);var a=t(83),d=t.n(a);for(var n in a)"default"!==n&&function(e){t.d(s,e,function(){return a[e]})}(n);var i=t(160),r=t(0);var l=function(e){t(342)},o=Object(r.a)(d.a,i.a,i.b,!1,l,null,null);s.default=o.exports},341:function(e,s,t){(e.exports=t(2)(!1)).push([e.i,".add_address_b{background:#1a1a1a;width:100%;height:100%;padding:0 .4rem;z-index:144}.add_address_b input{outline:none;list-style:none;width:100%;height:3rem;line-height:3rem;background:#1a1a1a;color:#9e9e9e}.add_address_b .input_b{padding:0 .4rem}",""])},342:function(e,s,t){var a=t(341);"string"==typeof a&&(a=[[e.i,a,""]]),a.locals&&(e.exports=a.locals);(0,t(1).default)("20892276",a,!0,{})},83:function(e,s,t){"use strict";Object.defineProperty(s,"__esModule",{value:!0});var a,d=t(36),n=(a=d)&&a.__esModule?a:{default:a};s.default={data:function(){return{name:null,phone:null,address_detail:null,area_address:null,show_select_address:!1,address_setTime:null}},components:{myAddress:n.default},mounted:function(){},methods:{open_address:function(){var e=this,s=document.getElementById("id_name"),t=document.getElementById("id_phone"),a=document.getElementById("id_address");s.blur(),t.blur(),a.blur(),clearTimeout(e.address_setTime),e.address_setTime=setTimeout(function(){e.show_select_address=!0},1e3)},cancel_address:function(){this.show_select_address=!1},return_address:function(e){this.area_address=e,this.cancel_address()},check_input:function(){return this.name?this.phone?this.phone&&!/^1\d{10}$/i.test(this.phone)?(this.Toast("输入正确的手机号"),!1):this.area_address?!!this.address_detail||(this.Toast("输入详细地址"),!1):(this.Toast("选择收货地址"),!1):(this.Toast("输入收件人手机号"),!1):(this.Toast("输入收件人姓名"),!1)},saveAddress:function(){var e=this,s=this,t={params:{name:s.name,phone:s.phone,address:s.area_address,address_detail:s.address_detail}};if(!s.check_input())return!1;this.util.ajax.get("/mall/address/saveAddress.do",t).then(function(t){e._alert({content:"保存成功",yes:function(){s.$parent.add_address_listen?(s.$parent.add_address_listen(),history.back()):history.back()}})}).catch()}}}}}]);