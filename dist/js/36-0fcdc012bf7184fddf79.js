(window.webpackJsonp=window.webpackJsonp||[]).push([[36],{137:function(t,e,a){"use strict";a.d(e,"a",function(){return s}),a.d(e,"b",function(){return o});var s=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",[a("div",{style:t.showCover?"display:none":"display:block",attrs:{id:"black_cover"}},[a("div",{staticClass:"info_wrap"},[a("p",{staticClass:"c1 font-0 p-l-r p-t ",staticStyle:{color:"#BABABA","box-sizing":"border-box"}},[t._v("以下信息均为必填项。")]),t._v(" "),a("p",{staticClass:"c1 font-0 p-l-r p-b",staticStyle:{color:"#BABABA","box-sizing":"border-box"}},[t._v("除了网店名称外，其他信息我们将为您隐藏。")]),t._v(" "),a("div",{staticClass:"input_b",staticStyle:{color:"#BEBEBE"}},[a("div",{staticClass:"w h3 line-h-3 flex-h b-b  m-t"},[a("div",{staticClass:"flex-1  font-1 p-l"},[t._v("网店名称")]),t._v(" "),a("div",{staticClass:"flex-3"},[a("input",{directives:[{name:"model",rawName:"v-model",value:t.name_nike,expression:"name_nike"}],attrs:{type:"text",placeholder:"输入网店昵称"},domProps:{value:t.name_nike},on:{input:function(e){e.target.composing||(t.name_nike=e.target.value)}}})])]),t._v(" "),a("div",{staticClass:"w h3 line-h-3 flex-h b-b"},[a("div",{staticClass:"flex-1  font-1 p-l"},[t._v("真实姓名")]),t._v(" "),a("div",{staticClass:"flex-3"},[a("input",{directives:[{name:"model",rawName:"v-model",value:t.real_name,expression:"real_name"}],attrs:{type:"text",placeholder:"输入真实姓名"},domProps:{value:t.real_name},on:{input:function(e){e.target.composing||(t.real_name=e.target.value)}}})])]),t._v(" "),a("div",{staticClass:"w h3 line-h-3 flex-h b-b"},[a("div",{staticClass:"flex-1  font-1 p-l"},[t._v("证件号码")]),t._v(" "),a("div",{staticClass:"flex-3"},[a("input",{directives:[{name:"model",rawName:"v-model",value:t.num,expression:"num"}],attrs:{type:"text",placeholder:"输入身份证号"},domProps:{value:t.num},on:{input:function(e){e.target.composing||(t.num=e.target.value)}}})])]),t._v(" "),a("div",{staticClass:"w h3 line-h-3 flex-h b-b",on:{click:t.open_address}},[a("div",{staticClass:"flex-1 font-1 p-l"},[t._v("收货地址")]),t._v(" "),a("div",{staticClass:"flex-3"},[t.area_address?a("p",{staticClass:"font-0 c2 right-2"},[t._v(t._s(t.area_address))]):a("p",{staticClass:"font-0 c2 right-2"},[t._v("选择城市")])])]),t._v(" "),t._m(0),t._v(" "),a("div",{staticClass:"text-area"},[a("textarea",{directives:[{name:"model",rawName:"v-model",value:t.text_detail,expression:"text_detail"}],staticClass:"h6",attrs:{name:"",id:"",cols:"30",rows:"10",placeholder:"输入详细地址，如道路、门牌、小区等"},domProps:{value:t.text_detail},on:{input:function(e){e.target.composing||(t.text_detail=e.target.value)}}})]),t._v(" "),a("div",{staticClass:"submit-btn-1",staticStyle:{margin:"0.933333rem auto"},on:{click:t.btn_sure}},[t._v("\r\n                确 定\r\n            ")])])]),t._v(" "),a("div",{class:"A"==t.model||"B"==t.model||"C"==t.model?"footer_three_m":"footer_three"},[t._m(1)]),t._v(" "),a("transition",{attrs:{name:"move"}},[t.show_select_address?a("myAddress",{staticClass:"my_address",on:{listen_to_child_event:t.get_colose}}):t._e()],1)],1)])},o=[function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"w h3 line-h-3"},[e("div",{staticClass:"flex-1  font-1 p-l"},[this._v("详细地址")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"footer_content"},[e("span",{staticClass:"active "},[this._v("选择类型")]),this._v(" "),e("span",{staticClass:"active"},[this._v("缴保证金")]),this._v(" "),e("span",{staticClass:"active font-3",staticStyle:{left:"5%",top:"-.333333rem"}},[this._v("填写信息")]),this._v(" "),e("span",{staticStyle:{left:"6%"}},[this._v("身份认证")])])}]},285:function(t,e,a){var s=a(4);(t.exports=a(2)(!1)).push([t.i,".info_wrap{height:auto;padding:0 .4rem}.info_wrap,.info_wrap input{background:#1a1a1a;width:100%}.info_wrap input{outline:none;list-style:none;height:1.666667rem;line-height:1.666667rem;color:#9e9e9e}.info_wrap .input_b{padding:0 .4rem}.footer_three{width:100%;position:fixed;bottom:.733333rem;height:1.2rem;background:url("+s(a(198))+") no-repeat;background-size:100%}.footer_three .footer_content{display:flex;justify-content:space-around;align-items:center;font-size:14px;color:silver;letter-spacing:.14px;text-align:justify;position:relative;top:-1.9rem}.footer_three .footer_content>span{flex:1;position:relative;left:7%}.footer_three .footer_content .active{color:#4a8ada}.footer_three_m{width:100%;position:fixed;bottom:.733333rem;height:1.2rem;background:url("+s(a(197))+") no-repeat;background-size:100%}.footer_three_m .footer_content{display:flex;justify-content:space-around;align-items:center;font-size:14px;color:silver;letter-spacing:.14px;text-align:justify;position:relative;top:-1.9rem}.footer_three_m .footer_content>span{flex:1;position:relative;left:7%}.footer_three_m .footer_content .active{color:#4a8ada}#black_cover{position:fixed;top:4.266rem;height:100%;width:100%;background-color:rgba(0,0,0,.3);display:none;z-index:1000}",""])},286:function(t,e,a){var s=a(285);"string"==typeof s&&(s=[[t.i,s,""]]),s.locals&&(t.exports=s.locals);(0,a(1).default)("13a0ddf9",s,!0,{})},407:function(t,e,a){"use strict";a.r(e);var s=a(61),o=a.n(s);for(var i in s)"default"!==i&&function(t){a.d(e,t,function(){return s[t]})}(i);var n=a(137),l=a(0);var r=function(t){a(286)},d=Object(l.a)(o.a,n.a,n.b,!1,r,null,null);e.default=d.exports},61:function(t,e,a){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var s=o(a(36));o(a(5));function o(t){return t&&t.__esModule?t:{default:t}}e.default={data:function(){return{name_nike:null,real_name:null,num:null,text_detail:null,area_address:null,show_select_address:!1,model:null,shoptype:null,shop_type_id:null,showCover:!0}},created:function(){var t=this;this.util.ajax.post("/mall/shopauthentication/getShopType.do").then(function(e){200==e.code&&(t.model=e.data.model,t.shoptype=e.data.shoptype,"D"==t.model||"E"==t.model?setTimeout(function(){t.util.ajax.post("/mall/shopauthentication/getPayStatus.do").then(function(e){2!=e.data.isPay?(t.Toast("支付未完成"),t.$router.push({path:"/register1?shoptype=1"})):t.showCover=!1})},400):t.showCover=!1)})},mounted:function(){var t=this,e=this.$route.query.model,a=this.$route.query.shoptype;this.model=e,this.shoptype=a,setTimeout(function(){t.util.ajax.post("/mall/shop/getShopDetail.do").then(function(e){200==e.code&&(t.name_nike=e.data.name,t.real_name=e.data.realName,t.num=e.data.idCard,t.text_detail=e.data.address_detail,t.area_address=e.data.address,t.shop_type_id=e.data.shop_type_id)})},1e3),setTimeout(function(){t.util.ajax.post("/mall/shopauthentication/getShopType.do").then(function(e){200==e.code&&(t.model=e.data.model,t.shoptype=e.data.shoptype)})},1e3)},methods:{open_address:function(){this.show_select_address=!0},cancel_address:function(){this.show_select_address=!1},return_address:function(t){this.area_address=t,this.cancel_address()},get_colose:function(t){this.show_select_address=!1},btn_sure:function(){var t=this,e=this.name_nike,a=this.real_name,s=this.num,o=this.text_detail,i=this.area_address,n=this.model,l=this.shoptype,r=this.shop_type_id,d=/(^\d{15}$)|(^\d{18}$)|(^\d{17}(\d|X|x)$)/,c={name:e,realName:a,idCard:s,address_detail:o,address:i,shoptype:l,model:n,shop_type_id:r};if(null==e||""==e)return this.Toast("请输入昵称"),!1;this.util.ajax.post("/mall/shop/isHave.do",{name:e}).then(function(e){return e.data?null==a||""==a?(t.Toast("请输入真实姓名"),!1):d.test(s)?null==i||""==i?(t.Toast("请输入所在地址"),!1):null==o||""==o?(t.Toast("请输入详细地址"),!1):void t.util.ajax.post("/mall/shop/editShop.do",c).then(function(e){t.$router.push("/shenfen?shoptype="+l+"&model="+n)}).catch():(t.Toast("请输入正确的证件号码"),!1):(t.Toast("用户名已存在"),!1)}).catch()}},components:{myAddress:s.default}}}}]);