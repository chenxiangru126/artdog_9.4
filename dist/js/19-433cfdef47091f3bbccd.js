(window.webpackJsonp=window.webpackJsonp||[]).push([[19],{173:function(t,a,e){"use strict";e.d(a,"a",function(){return i}),e.d(a,"b",function(){return o});var i=function(){var t=this,a=t.$createElement,i=t._self._c||a;return i("div",[t.isShare?i("div",{staticClass:"ser_img"},[i("img",{staticStyle:{"margin-right":"1rem"},attrs:{src:e(42)},on:{click:t.to_gwc}}),t._v(" "),i("img",{attrs:{src:e(374)},on:{click:t.ser_on}})]):t._e(),t._v(" "),i("mt-swipe",{attrs:{auto:3e3}},t._l(t.items,function(a,e){return i("mt-swipe-item",{key:e},[a.iswht?i("img",{staticClass:"sw_img",staticStyle:{width:"100%",margin:"8% auto",display:"block"},attrs:{src:a.url},on:{click:function(e){t.opimg(a.url)}}}):i("img",{staticClass:"sw_img",staticStyle:{height:"100%",margin:"0 auto",display:"block"},attrs:{src:a.url},on:{click:function(e){t.opimg(a.url)}}}),t._v(" "),i("span",{staticClass:"desc"})])})),t._v(" "),i("div",{staticClass:"main"},[i("div",{staticClass:"main_goods"},[i("div",{staticClass:"goods_info"},[i("p",{staticClass:"goods_info_name"},[t._v(t._s(t.goodsInfo.goodsName))]),t._v(" "),t.goodsInfo.price?i("p",{staticClass:"goods_info_price1"},[i("span",[t._v("商品价：")]),i("span",[t._v(" ¥"+t._s(t.goodsInfo.price))])]):t._e(),t._v(" "),t.goodsInfo.copyright_price?i("p",{staticClass:"goods_info_price2"},[i("span",[t._v("版权价：")]),i("span",[t._v(" ¥"+t._s(t.goodsInfo.copyright_price))])]):t._e(),t._v(" "),i("p",{staticClass:"goods_info_spe"},[i("span",[t._v("商品标签")]),i("span",[t._v(t._s(t.tags))])]),t._v(" "),i("p",{staticClass:"goods_info_spe"},[i("span",[t._v("创作时间")]),i("span",[t._v(t._s(t.goodsInfo.creatTime))])]),t._v(" "),i("p",{staticClass:"goods_info_spe"},[i("span",[t._v("商品材质")]),i("span",[t._v(t._s(t.goodsInfo.datum))])]),t._v(" "),i("p",{staticClass:"goods_info_spe",staticStyle:{"margin-bottom":".133333rem"}},[i("span",[t._v("商品规格")]),i("span",[t._v(t._s(t.goodsInfo.format)+" ")])])]),t._v(" "),t._m(0),t._v(" "),i("div",{staticClass:"goods_manager"},[i("div",{staticClass:"man_img"},[i("img",{attrs:{src:t.goodsInfo.photo}})]),t._v(" "),i("span",{staticClass:"name"},[t._v(t._s(t.goodsInfo.shop_name))]),t._v(" "),t.isShare?i("span",{staticClass:"but",on:{click:function(a){t.gostore(t.goodsInfo.friendsId)}}},[t._v("进店逛逛")]):t._e()]),t._v(" "),t._m(1),t._v(" "),i("div",{staticClass:"goods_describe"},[i("p",{staticClass:"name"},[t._v("商品描述")]),t._v(" "),i("p",{staticClass:"info"},[t._v(t._s(t.goodsInfo.goodsDescribe))])]),t._v(" "),t._m(2),t._v(" "),i("div",{staticClass:"goods_evaluation"},[i("p",{staticClass:"title"},[t._v("商品评价 "),i("span",[t._v(t._s(t.evaluationNum))])]),t._v(" "),i("p",{staticClass:"line"}),t._v(" "),t._l(t.evaluation,function(a,e){return i("div",{key:e,staticClass:"evaluation"},[i("div",{staticClass:"usr_info"},[i("div",{staticClass:"usr_img"},[i("img",{attrs:{src:a.photo}})]),t._v(" "),i("div",{staticClass:"info_r"},[i("p",{staticClass:"info_p"},[i("span",[t._v(t._s(a.realName))]),i("span",{staticClass:"time"},[t._v(t._s(a.createTime))])]),t._v(" "),i("p",{staticClass:"stars_p"},t._l(5,function(t){return i("em",{key:t,class:t<a.numzs?"stars_img":t==a.numzs&&0!=a.numxs?"stars_img2":"stars_img1"})}))])]),t._v(" "),i("div",{staticClass:"content"},[i("p",[t._v(t._s(a.content))]),t._v(" "),i("p",{staticClass:"con_img"},t._l(a.urls,function(a,e){return i("img",{key:e,attrs:{src:a},on:{click:function(e){t.opimg(a)}}})})),t._v(" "),i("p",{staticClass:"operation"},[i("span",{class:1==a.myDianzhan?"give_like1":"give_like",on:{click:function(e){t.like(a)}}},[t._v(t._s(a.dianzanCount))]),i("span",{staticClass:"message"},[t._v(t._s(a.pinglunCount))])])])])})],2),t._v(" "),t.isShare?i("div",{staticClass:"goods_but"},[i("span",{staticClass:"contact",on:{click:t.contact}},[t._v("联系卖家")]),t._v(" "),i("span",{staticClass:"add",on:{click:function(a){t.user_action(1)}}},[t._v("加入购物车")]),t._v(" "),i("span",{staticClass:"immediately",on:{click:function(a){t.user_action(2)}}},[t._v("立即购买")])]):t._e()]),t._v(" "),i("div",{directives:[{name:"show",rawName:"v-show",value:t.share,expression:"share"}],staticClass:"dialog_layer",on:{click:t.dia_la}})]),t._v(" "),t.dialog?i("thickness",{attrs:{num:t.number,copyPrice:t.copyPrice,id:t.id,isShare:t.isShare}}):t._e()],1)},o=[function(){var t=this.$createElement,a=this._self._c||t;return a("div",{staticClass:"yk_bjt"},[a("label",{staticClass:"triangle-right"}),a("img",{attrs:{src:e(16)}}),a("label",{staticClass:"triangle-left"})])},function(){var t=this.$createElement,a=this._self._c||t;return a("div",{staticClass:"yk_bjt"},[a("label",{staticClass:"triangle-right"}),a("img",{attrs:{src:e(16)}}),a("label",{staticClass:"triangle-left"})])},function(){var t=this.$createElement,a=this._self._c||t;return a("div",{staticClass:"yk_bjt"},[a("label",{staticClass:"triangle-right"}),a("img",{attrs:{src:e(16)}}),a("label",{staticClass:"triangle-left"})])}]},174:function(t,a,e){"use strict";e.d(a,"a",function(){return i}),e.d(a,"b",function(){return o});var i=function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",{staticClass:"dialog_layer"},[e("div",{staticClass:"layer_cont_1 cont_1_alert"},[e("div",{staticClass:"p-b p-t-2"},[e("div",{staticClass:"c6 font-3 w t-c over-h p-l p-r"},[t.copyPriceShow&&t.goodsShow?e("div",{staticStyle:{display:"flex","margin-bottom":"1.5rem","margin-top":".5rem","justify-content":"center","align-items":"center"}},[e("span",{style:t.typeN?"color: #9E9E9E;":""},[t._v("购买商品")]),t._v(" "),e("input",{staticClass:"switch switch-anim",staticStyle:{height:"0.1rem","line-height":"0.1rem","margin-right":".8rem"},attrs:{type:"checkbox"},on:{click:t.check}}),t._v(" "),e("span",{style:t.typeN?"":"color: #9E9E9E;"},[t._v(" 购买版权")])]):t.copyPriceShow?t.goodsShow?t._e():e("div",{staticStyle:{display:"flex","margin-bottom":"1.5rem","margin-top":".5rem","justify-content":"center","align-items":"center"}},[e("span",{staticStyle:{display:"none"},style:t.typeN?"color: #9E9E9E;":""},[t._v("购买商品")]),t._v(" "),e("input",{staticClass:"switch switch-anim",staticStyle:{height:"0.1rem","line-height":"0.1rem","margin-right":".8rem"},attrs:{type:"hidden"},on:{click:t.check}}),t._v(" "),e("span",{style:t.typeN?"":"color: #9E9E9E;"},[t._v(" 购买版权")])]):e("div",{staticStyle:{display:"flex","margin-bottom":"1.5rem","margin-top":".5rem","justify-content":"center","align-items":"center"}},[e("span",{style:t.typeN?"color: #9E9E9E;":""},[t._v("购买商品")]),t._v(" "),e("input",{staticClass:"switch switch-anim",staticStyle:{height:"0.1rem","line-height":"0.1rem","margin-right":".8rem"},attrs:{type:"hidden"},on:{click:t.check}}),t._v(" "),e("span",{staticStyle:{display:"none"},style:t.typeN?"":"color: #9E9E9E;"},[t._v(" 购买版权")])]),t._v(" "),t.typeN?t._e():e("div",{staticStyle:{display:"flex","justify-content":"center","align-items":"center"}},[e("span",{staticStyle:{color:"#548FD7"},on:{click:t.reduction}},[t._v(" - ")]),t._v(" "),e("span",{staticStyle:{display:"inline-block","font-size":"1.2rem",color:"#FFFFFF",width:"4.333333rem",height:"1.733333rem","text-align":"center",background:"#424242","border-radius":".733333rem",margin:"0 1.4rem"}},[t._v(t._s(t.num))]),t._v(" "),e("span",{staticStyle:{color:"#548FD7"},on:{click:t.addnum}},[t._v("+")])])])]),t._v(" "),e("div",{staticClass:"layer_cont_btn"},[e("div",{staticClass:"layer_cont_confirm flex-h flex-j-c"},[e("p",{staticClass:"ui_cancel",on:{click:t.cancel}},[t._v("取  消")]),t._v(" "),e("p",{staticClass:"ui_yes",on:{click:t.determine}},[t._v("确  认")])])])])])},o=[]},212:function(t,a,e){"use strict";e.r(a);var i=e(96),o=e.n(i);for(var n in i)"default"!==n&&function(t){e.d(a,t,function(){return i[t]})}(n);var s=e(173),r=e(0);var d=function(t){e(380)},c=Object(r.a)(o.a,s.a,s.b,!1,d,"data-v-07dd0940",null);a.default=c.exports},374:function(t,a,e){t.exports=e.p+"images/ssss-ios.png"},375:function(t,a,e){(t.exports=e(2)(!1)).push([t.i,'.switch{width:57px;height:4px;position:relative;border:1px solid #9b9b9b;background-color:#9b9b9b;box-shadow:inset 0 0 0 0 #9b9b9b;border-radius:20px;background-clip:content-box;display:inline-block;-webkit-appearance:none;user-select:none;outline:none}.switch:before{content:"";width:22px;height:22px;position:absolute;top:-10px;left:-2px;border-radius:20px;background-color:#4a8ada;box-shadow:0 1px 3px rgba(0,0,0,.4)}.switch:checked{border-color:#9b9b9b;box-shadow:inset 0 0 0 16px #9b9b9b;background-color:#9b9b9b}.switch:checked:before{left:34px}.switch.switch-anim{transition:border .4s cubic-bezier(0,0,0,1),box-shadow .4s cubic-bezier(0,0,0,1)}.switch.switch-anim:before{transition:left .3s}.switch.switch-anim:checked{box-shadow:inset 0 0 0 16px #9b9b9b;background-color:#9b9b9b;transition:border .4s ease,box-shadow .4s ease,background-color 1.2s ease}.switch.switch-anim:checked:before{transition:left .3s}',""])},376:function(t,a,e){var i=e(375);"string"==typeof i&&(i=[[t.i,i,""]]),i.locals&&(t.exports=i.locals);(0,e(1).default)("4669f270",i,!0,{})},377:function(t,a,e){"use strict";e.r(a);var i=e(95),o=e.n(i);for(var n in i)"default"!==n&&function(t){e.d(a,t,function(){return i[t]})}(n);var s=e(174),r=e(0);var d=function(t){e(376)},c=Object(r.a)(o.a,s.a,s.b,!1,d,null,null);a.default=c.exports},378:function(t,a,e){"use strict";Object.defineProperty(a,"__esModule",{value:!0});var i,o=e(46),n=(i=o)&&i.__esModule?i:{default:i};var s="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/",r=new Array(-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,62,-1,-1,-1,63,52,53,54,55,56,57,58,59,60,61,-1,-1,-1,-1,-1,-1,-1,0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,-1,-1,-1,-1,-1,-1,26,27,28,29,30,31,32,33,34,35,36,37,38,39,40,41,42,43,44,45,46,47,48,49,50,51,-1,-1,-1,-1,-1);function d(t){var a,e,i,o,n,r;for(i=t.length,e=0,a="";e<i;){if(o=255&t.charCodeAt(e++),e==i){a+=s.charAt(o>>2),a+=s.charAt((3&o)<<4),a+="==";break}if(n=t.charCodeAt(e++),e==i){a+=s.charAt(o>>2),a+=s.charAt((3&o)<<4|(240&n)>>4),a+=s.charAt((15&n)<<2),a+="=";break}r=t.charCodeAt(e++),a+=s.charAt(o>>2),a+=s.charAt((3&o)<<4|(240&n)>>4),a+=s.charAt((15&n)<<2|(192&r)>>6),a+=s.charAt(63&r)}return a}var c=(0,n.default)({base64encode:d,CharToHex:function(t){var a,e,i,o;for(a="",i=t.length,e=0;e<i;)(o=t.charCodeAt(e++).toString(16)).length<2&&(o="0"+o),a+="\\x"+o+" ",e>0&&e%8==0&&(a+="\r\n");return a},utf16to8:function(t){var a,e,i,o;for(a="",i=t.length,e=0;e<i;e++)(o=t.charCodeAt(e))>=1&&o<=127?a+=t.charAt(e):o>2047?(a+=String.fromCharCode(224|o>>12&15),a+=String.fromCharCode(128|o>>6&63),a+=String.fromCharCode(128|o>>0&63)):(a+=String.fromCharCode(192|o>>6&31),a+=String.fromCharCode(128|o>>0&63));return a},utf8to16:function(t){var a,e,i,o,n,s;for(a="",i=t.length,e=0;e<i;)switch((o=t.charCodeAt(e++))>>4){case 0:case 1:case 2:case 3:case 4:case 5:case 6:case 7:a+=t.charAt(e-1);break;case 12:case 13:n=t.charCodeAt(e++),a+=String.fromCharCode((31&o)<<6|63&n);break;case 14:n=t.charCodeAt(e++),s=t.charCodeAt(e++),a+=String.fromCharCode((15&o)<<12|(63&n)<<6|(63&s)<<0)}return a},base64decode:function(t){var a,e,i,o,n,s,d;for(s=t.length,n=0,d="";n<s;){do{a=r[255&t.charCodeAt(n++)]}while(n<s&&-1==a);if(-1==a)break;do{e=r[255&t.charCodeAt(n++)]}while(n<s&&-1==e);if(-1==e)break;d+=String.fromCharCode(a<<2|(48&e)>>4);do{if(61==(i=255&t.charCodeAt(n++)))return d;i=r[i]}while(n<s&&-1==i);if(-1==i)break;d+=String.fromCharCode((15&e)<<4|(60&i)>>2);do{if(61==(o=255&t.charCodeAt(n++)))return d;o=r[o]}while(n<s&&-1==o);if(-1==o)break;d+=String.fromCharCode((3&i)<<6|o)}return d}},"base64encode",d);a.default=c},379:function(t,a,e){var i=e(4);(t.exports=e(2)(!1)).push([t.i,".mint-swipe[data-v-07dd0940]{height:176px}.desc[data-v-07dd0940]{font-weight:600;opacity:.9;padding:5px;height:20px;line-height:20px;width:100%;color:#fff;position:absolute;bottom:0}.main .main_goods[data-v-07dd0940]{background-color:#232323;margin:0 .8rem;height:100%}.main .main_goods .yk_bjt[data-v-07dd0940]{display:flex;justify-content:space-between;align-items:center}.main .main_goods .yk_bjt img[data-v-07dd0940]{width:88%;height:9px}.main .main_goods .yk_bjt label[data-v-07dd0940]{z-index:1;display:inline-block}.main .main_goods .yk_bjt .triangle-right[data-v-07dd0940]{width:0;height:0;border-top:14px solid transparent;border-left:18px solid #1a1a1a;border-bottom:14px solid transparent}.main .main_goods .yk_bjt .triangle-left[data-v-07dd0940]{width:0;height:0;border-top:14px solid transparent;border-right:18px solid #1a1a1a;border-bottom:14px solid transparent}.main .main_goods .goods_info[data-v-07dd0940]{margin:0 0 0 1.25rem}.main .main_goods .goods_info .goods_info_name[data-v-07dd0940]{padding-top:1.066667rem;margin-bottom:1.066667rem;height:2.7375rem;font-size:1.25rem;color:#fff;overflow:hidden;text-overflow:ellipsis;white-space:nowrap;width:94%}.main .main_goods .goods_info .goods_info_price1[data-v-07dd0940]{margin-bottom:8px;font-size:.875rem;color:#fff;letter-spacing:.013125rem;text-align:justify}.main .main_goods .goods_info .goods_info_price1 span[data-v-07dd0940]{margin-right:.98rem}.main .main_goods .goods_info .goods_info_price2[data-v-07dd0940]{margin-bottom:.8rem;font-size:.875rem;color:#f5a623;letter-spacing:.013125rem;text-align:justify;line-height:1.25rem}.main .main_goods .goods_info .goods_info_price2 span[data-v-07dd0940]{margin-right:.98rem}.main .main_goods .goods_info .goods_info_spe[data-v-07dd0940]{margin-bottom:.933333rem;font-size:.875rem;color:#fff;letter-spacing:.00875rem;text-align:justify}.main .main_goods .goods_info .goods_info_spe span[data-v-07dd0940]{font-size:.75rem;color:#9e9e9e;margin-right:1.375rem}.main .main_goods .goods_manager[data-v-07dd0940]{display:flex;align-items:center;margin:1.266667rem 0 1.066667rem}.main .main_goods .goods_manager .man_img[data-v-07dd0940]{margin:0 .875rem 0 1.4375rem;text-overflow:ellipsis;white-space:nowrap}.main .main_goods .goods_manager .man_img[data-v-07dd0940],.main .main_goods .goods_manager .man_img img[data-v-07dd0940]{width:2.9375rem;height:2.9375rem;border-radius:.75rem;overflow:hidden}.main .main_goods .goods_manager .name[data-v-07dd0940]{font-size:1.333333rem;color:#fff;width:9.5625rem;margin-right:1rem;overflow:hidden;text-overflow:ellipsis;white-space:nowrap}.main .main_goods .goods_manager .but[data-v-07dd0940]{display:inline-block;width:5.6rem;height:1.666667rem;background:#4a8ada;border-radius:.5rem;font-size:.933333rem;color:#e7e7e7;letter-spacing:.009375rem;text-align:justify;margin:0 1.125rem 0 .875rem;text-align:center;line-height:1.666667rem}.main .main_goods .goods_describe[data-v-07dd0940]{margin:0 .875rem}.main .main_goods .goods_describe .name[data-v-07dd0940]{font-size:1rem;color:#fff;letter-spacing:.16px;text-align:justify;margin-left:.5rem;margin-bottom:.4rem}.main .main_goods .goods_describe .info[data-v-07dd0940]{font-size:.8125rem;color:#9e9e9e;word-wrap:break-word;word-break:break-all;overflow:hidden}.main .main_goods .goods_evaluation[data-v-07dd0940]{padding-bottom:3.975rem}.main .main_goods .goods_evaluation .title[data-v-07dd0940]{font-size:1rem;color:#fff;letter-spacing:.01rem;text-align:justify;margin-left:1.375rem}.main .main_goods .goods_evaluation .title span[data-v-07dd0940]{margin-left:.3125rem;font-size:.8125rem;color:#9e9e9e;letter-spacing:.01rem}.main .main_goods .goods_evaluation .line[data-v-07dd0940]{width:5.25rem;height:.25rem;background-color:#fff;margin-left:1.375rem}.main .main_goods .goods_evaluation .evaluation[data-v-07dd0940]{border-bottom:1px solid #818181;padding-bottom:.75rem}.main .main_goods .goods_evaluation .evaluation .usr_info[data-v-07dd0940]{display:flex;margin-left:.5rem;margin-top:1.533333rem}.main .main_goods .goods_evaluation .evaluation .usr_info .usr_img[data-v-07dd0940]{width:1.75rem;height:1.6875rem;border-radius:50%;margin-right:.75rem;overflow:hidden;text-overflow:ellipsis;white-space:nowrap}.main .main_goods .goods_evaluation .evaluation .usr_info .usr_img img[data-v-07dd0940]{width:100%;border-radius:50%;margin-top:-20%}.main .main_goods .goods_evaluation .evaluation .usr_info .info_r[data-v-07dd0940]{flex:1}.main .main_goods .goods_evaluation .evaluation .usr_info .info_r .info_p[data-v-07dd0940]{display:flex;justify-content:space-between;font-size:.8125rem;color:#9e9e9e;letter-spacing:-.44px}.main .main_goods .goods_evaluation .evaluation .usr_info .info_r .info_p .time[data-v-07dd0940]{margin-right:.75rem}.main .main_goods .goods_evaluation .evaluation .usr_info .info_r .stars_p[data-v-07dd0940]{display:flex}.main .main_goods .goods_evaluation .evaluation .usr_info .info_r .stars_p em[data-v-07dd0940]{width:.625rem;height:.625rem;margin-right:.3125rem}.main .main_goods .goods_evaluation .evaluation .usr_info .info_r .stars_p em.stars_img[data-v-07dd0940]{background:url("+i(e(14))+") no-repeat;background-size:100% 100%;z-index:2}.main .main_goods .goods_evaluation .evaluation .usr_info .info_r .stars_p em.stars_img1[data-v-07dd0940]{background:url("+i(e(13))+") no-repeat;background-size:100% 100%;z-index:1}.main .main_goods .goods_evaluation .evaluation .usr_info .info_r .stars_p em.stars_img2[data-v-07dd0940]{background:url("+i(e(12))+") no-repeat;background-size:100% 100%;z-index:1}.main .main_goods .goods_evaluation .evaluation .content[data-v-07dd0940]{font-size:.8125rem;color:#e7e7e7;letter-spacing:.01rem;text-align:justify;line-height:1.4375rem;margin:1rem .875rem 0 2.25rem}.main .main_goods .goods_evaluation .evaluation .content .operation[data-v-07dd0940]{display:flex;justify-content:flex-end;margin-top:.666667rem}.main .main_goods .goods_evaluation .evaluation .content .operation span[data-v-07dd0940]{display:inline-block;width:2.866667rem;margin-right:.96875rem;text-align:right}.main .main_goods .goods_evaluation .evaluation .content .operation .give_like[data-v-07dd0940]{background:url("+i(e(115))+") no-repeat;background-size:1rem;background-position:5%}.main .main_goods .goods_evaluation .evaluation .content .operation .give_like1[data-v-07dd0940]{background:url("+i(e(114))+") no-repeat;background-size:1rem;background-position:5%}.main .main_goods .goods_evaluation .evaluation .content .operation .message[data-v-07dd0940]{background:url("+i(e(113))+") no-repeat;background-size:1rem;background-position:5%}.main .main_goods .goods_evaluation .evaluation .content .con_img[data-v-07dd0940]{display:flex;overflow-x:scroll}.main .main_goods .goods_evaluation .evaluation .content .con_img img[data-v-07dd0940]{height:6.34rem;margin-right:.466667rem}.main .main_goods .goods_but[data-v-07dd0940]{position:fixed;z-index:1;bottom:0;left:0;width:100%;padding:.9375rem;display:flex;background-color:#232323}.main .main_goods .goods_but span[data-v-07dd0940]{display:inline-block;width:33.3%;text-align:center;height:2.3125rem;line-height:2.3125rem;color:#fff;font-size:1rem}.main .main_goods .goods_but .contact[data-v-07dd0940]{background-color:#fc0;border-radius:2.3125rem 0 0 2.3125rem}.main .main_goods .goods_but .add[data-v-07dd0940]{background-color:#f90}.main .main_goods .goods_but .immediately[data-v-07dd0940]{background-color:#d1324e;border-radius:0 2.3125rem 2.3125rem 0}.main .share .share_m[data-v-07dd0940]{width:100%;height:5.375rem;position:fixed;bottom:0;z-index:989999999;background:#282828;-webkit-clip-path:polygon(13px 0,calc(100% - 13px) 0,100% 13px,100% 100%,calc(100% - 13px) 100%,0 100%,0 calc(100% - 13px),0 13px)}.main .share .share_m p[data-v-07dd0940]{margin:.625rem 3rem 0 3.6rem;display:flex;align-items:center;justify-content:space-between}.main .share .share_m p span[data-v-07dd0940]{display:inline-block;width:6.875rem;height:.0625rem;background:#4e4e4e}.main .share .share_m p label[data-v-07dd0940]{display:inline-block;font-size:.875rem;color:#d8d8d8}.main .share .share_m .share_i[data-v-07dd0940]{display:flex;margin:.625rem 4.125rem 0 3.0625rem}.main .share .share_m .share_i img[data-v-07dd0940]{height:2.125rem;margin:0 1.3125rem}.dialog_layer[data-v-07dd0940]{z-index:5!important}.ser_img[data-v-07dd0940]{position:fixed;display:flex;z-index:9999999;top:1.6rem;right:.866667rem}.ser_img img[data-v-07dd0940]{width:1.666667rem;height:1.666667rem}",""])},380:function(t,a,e){var i=e(379);"string"==typeof i&&(i=[[t.i,i,""]]),i.locals&&(t.exports=i.locals);(0,e(1).default)("07ee586f",i,!0,{})},95:function(t,a,e){"use strict";Object.defineProperty(a,"__esModule",{value:!0}),a.default={data:function(){return{typeN:!1,copyPriceShow:!1,goodsShow:!1}},props:["num","id","isShare","copyPrice","price"],created:function(){""==this.$parent.copyPrice?this.copyPriceShow=!1:(this.copyPriceShow=!0,this.typeN=!0),""!=this.$parent.price&&this.$parent.price?(this.goodsShow=!0,this.typeN=!1):this.goodsShow=!1},methods:{reduction:function(){this.$parent.number>1&&this.$parent.number--},addnum:function(){this.$parent.number<this.$parent.goodsInfo.count?this.$parent.number++:this.Toast("已达到库存数量上限")},cancel:function(){this.$parent.dialog=!1},determine:function(){var t=this.typeN;t?t&&(this.$parent.Place_order(this.typeN),this.$router.push("/order_create?id="+id+"&type=1&count=1")):this.$parent.Place_order(this.typeN)},check:function(){this.typeN=!this.typeN}}}},96:function(module,exports,__webpack_require__){"use strict";Object.defineProperty(exports,"__esModule",{value:!0});var _defineProperty2=__webpack_require__(46),_defineProperty3=_interopRequireDefault(_defineProperty2),_swipeItem=__webpack_require__(121),_swipeItem2=_interopRequireDefault(_swipeItem),_swipe=__webpack_require__(120),_swipe2=_interopRequireDefault(_swipe),_components$data$comp;__webpack_require__(119),__webpack_require__(118),__webpack_require__(104);var _util=__webpack_require__(5),_util2=_interopRequireDefault(_util),_base=__webpack_require__(378),_base2=_interopRequireDefault(_base),_ui=__webpack_require__(18),_thickness=__webpack_require__(377),_thickness2=_interopRequireDefault(_thickness),_axios=__webpack_require__(103),_axios2=_interopRequireDefault(_axios);function _interopRequireDefault(t){return t&&t.__esModule?t:{default:t}}exports.default=(_components$data$comp={components:{"mt-swipe":_swipe2.default,"mt-swipe-item":_swipeItem2.default},data:function(){return{items:[],goodsInfo:"",tags:"",share:!1,number:1,dialog:!1,usr_t:0,id:"",list:[],evaluation:[],evaluationNum:"",isShare:!0,copyPrice:null,price:null}}},(0,_defineProperty3.default)(_components$data$comp,"components",{thickness:_thickness2.default}),(0,_defineProperty3.default)(_components$data$comp,"created",function(){this.id=this.$route.query.id,this.isShare=1!=this.$route.query.isShare,this.initData()}),(0,_defineProperty3.default)(_components$data$comp,"methods",{initData:function(){var t=this,a=this,e={id:this.id,token:"",userId:"",mobile:""};_axios2.default.post("/mall/goods/getById.do",e).then(function(e){var i=e.data;if(200==i.code){for(var o in t.goodsInfo=i.data.goods,t.copyPrice=i.data.goods.copyright_price,t.price=i.data.goods.price,i.data.goods.tags)t.tags+=i.data.goods.tags[o]+"; ";var n=function(t){var e=new Image;e.src=i.data.goods.urlShow[t],e.onload=function(){var o=Number(e.width)>Number(2*e.height);a.items.push({url:i.data.goods.urlShow[t],iswht:o})}};for(var s in i.data.goods.urlShow)n(s)}}).catch(),this.initList()},initList:function(){var t=this,a={goodsId:this.id,token:"",userId:"",mobile:""};_axios2.default.post("/mall/comments/getComments.do",a).then(function(a){var e=a.data;if(200==e.code){for(var i in e.data.list){var o=e.data.list[i].score.split(".");e.data.list[i].numzs=Number(o[0])+1,e.data.list[i].numxs=Number(o[1])||0}t.evaluationNum=e.data.list.length,t.evaluation=e.data.list}}).catch()},user_action:function(t){var a=this;this.userGetinfo(function(){a.usr_t=t,a.dialog=!0})},userGetinfo:function userGetinfo(fun){if(location.href.indexOf("localhost")>-1)return!0;var _this=this,objdata=iosObject.getUserInfo(),jsondata=eval("("+objdata+")");window.jsondata=jsondata,_axios2.default.post("/mall/address/isHaveToken.do",{token:window.jsondata.token}).then(function(t){return 200!=t.data.code?(iosObject.goLogin(),!1):(fun(),!0)}).catch()},Place_order:function(t){var a=this;this.dialog=!1;var e="";1==this.usr_t?e="/mall/cart/addCart.do":2==this.usr_t&&(e="/mall/goods/viewOrder.do");var i={goodsId:this.goodsInfo.id,count:t?"1":this.number,type:t?"1":"0"};_util2.default.ajax.post(e,i).then(function(e){200==e.code&&(2==a.usr_t?a.$router.push({path:"/order_create",query:{id:a.goodsInfo.id,type:t?"1":"0",count:t?"1":a.number}}):a.Toast("加入成功！"))}).catch()},to_gwc:function(){var t=this;this.userGetinfo(function(){t.$router.push({path:"/shopping-list"})})},ser_on:function(){var t="/index.html#/goods-details-gwc?id="+this.goodsInfo.id+"&isShare=1",a=_base2.default.base64encode(t),e=window.location.host+"/mall/toGoodsShareUrl/usl/"+a;iosObject.shareContentTitlePicUrl(this.goodsInfo.goodsDescribe,this.goodsInfo.goodsName,this.goodsInfo.sharePhoto,e)},dia_la:function(){this.share=!1},opimg:function(t){(0,_ui._openimg)(t)},gostore:function(t){this.userGetinfo(function(){iosObject.toFriendMainPage(t)})},like:function(t){var a=this;_util2.default.ajax.post("/mall/goodscomment_dianzan/dianzan.do",{goodscommentId:t.id}).then(function(e){200==e.code&&(0==t.myDianzhan?(t.dianzanCount++,t.myDianzhan=1,a.Toast("点赞成功！")):(t.dianzanCount--,t.myDianzhan=0,a.Toast("取消点赞！")))}).catch()},contact:function(){var t=this;this.userGetinfo(function(){iosObject.toChatVC(t.goodsInfo.userId)})}}),_components$data$comp)}}]);