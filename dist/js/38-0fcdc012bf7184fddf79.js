(window.webpackJsonp=window.webpackJsonp||[]).push([[38],{157:function(t,e,r){"use strict";r.d(e,"a",function(){return i}),r.d(e,"b",function(){return s});var i=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"order-search"},[r("div",{staticClass:"header_b"},[r("div",{staticClass:"search-top"}),t._v(" "),r("div",{staticClass:"search_box flex-v flex-j-c"},[r("div",{staticClass:"font-1 search_box_1 flex-h"},[r("form",{attrs:{action:""}},[r("input",{directives:[{name:"model",rawName:"v-model.trim",value:t.order_num,expression:"order_num",modifiers:{trim:!0}}],staticClass:"search_el c2",attrs:{type:"text",placeholder:"输入订单号"},domProps:{value:t.order_num},on:{focus:t.on_focus,input:[function(e){e.target.composing||(t.order_num=e.target.value.trim())},t.searching_get],blur:function(e){t.$forceUpdate()}}})]),t._v(" "),r("p",{staticClass:"font-2 flex-1 t-c c3",on:{click:t.cancel_event}},[t._v("取消")])])])]),t._v(" "),r("div",{staticClass:"order_list_b"},[r("div",{staticClass:"order_list-nav"},[1==t.status?r("div",{staticClass:"list-order-lib list-order-lib-search",style:1==t.status?"top:5rem!important":"top:5.5rem!important"},[1==t.status?r("div",{staticClass:"font-1"},t._l(t.search_word_items,function(e){return r("p",{key:e.order_num,staticClass:"h2 line-h-2 p-l-3 c1 ellipsis",on:{click:function(r){t.click_search(e.order_num)}}},[t._v("\n                        "+t._s(e.order_num))])})):t._e()]):t._e(),t._v(" "),2==t.status?r("div",{staticClass:"list-order-lib list-order-lib-search",style:1==t.status?"top:5rem!important":"top:5.5rem!important"},[t.return_items.length>0?r("div",{ref:"wrapper",staticClass:"page-infinite-wrapper",style:{height:t.wrapperHeight+"px"}},[r("ul",{directives:[{name:"infinite-scroll",rawName:"v-infinite-scroll",value:t.loadMore,expression:"loadMore"}],staticClass:"page-infinite-list",attrs:{"infinite-scroll-disabled":"loading","infinite-scroll-distance":"50"}},[r("div",{staticClass:"over-h"},t._l(t.return_items,function(e){return r("div",{key:e.id,staticClass:"order-lib_b",class:7==e.state||8==e.state||9==e.state?"tuihuo-icon":""},[r("div",{staticClass:"flex-h"},[r("div",{staticClass:"c2 font-1 flex-1 ellipsis"},[t._v("订单号 "+t._s(e.order_num))]),t._v(" "),r("div",{staticClass:"c2 font-1 flex-1 ellipsis t-r p-l"},[t._v(t._s(e.createTime))])]),t._v(" "),r("div",{staticClass:"order-lib_b_1 flex-h",on:{click:function(r){t.go_details(e)}}},[r("div",[r("img",{attrs:{src:e.imgUrl,alt:""}})]),t._v(" "),r("div",{staticClass:"c3 flex-v flex-j-c flex-1"},[r("p",{staticClass:"font-2 ellipsis"},[t._v(t._s(e.goodsName))]),t._v(" "),1==e.type?r("p",{staticClass:"font-1 c12"},[t._v("版权价格 ¥"+t._s(e.money))]):r("p",{staticClass:"font-1"},[t._v("¥"+t._s(e.money))])]),t._v(" "),1==e.state?r("div",{staticClass:"flex-1"},[t._v("待付款")]):2==e.state?r("div",{staticClass:"flex-1"},[t._v("待发货")]):3==e.state?r("div",{staticClass:"flex-1"},[t._v("已发货")]):4==e.state?r("div",{staticClass:"flex-1"},[t._v("待评价 ")]):5==e.state?r("div",{staticClass:"flex-1"},[t._v("已完成")]):6==e.state?r("div",{staticClass:"flex-1"},[t._v("已取消")]):7==e.state?r("div",{staticClass:"flex-1"},[t._v("待审核")]):8==e.state?r("div",{staticClass:"flex-1"},[t._v("待退货 ")]):9==e.state||13==e.state?r("div",{staticClass:"flex-1"},[t._v("已拒绝")]):10==e.state?r("div",{staticClass:"flex-1"},[t._v("待收货")]):11==e.state?r("div",{staticClass:"flex-1"},[t._v("退款成功")]):12==e.state?r("div",{staticClass:"flex-1"},[t._v("重新申请")]):t._e()]),t._v(" "),2==e.state?r("div",{staticClass:"lib-btn-1",on:{click:function(r){t.send_goods_event(e)}}},[t._v("一键发货")]):7==e.state?r("div",{staticClass:"lib-btn-1",on:{click:function(r){t.go_details(e)}}},[t._v("去审核")]):8==e.state?r("div",{staticClass:"lib-btn-1",on:{click:function(r){t.send_goods(e)}}},[t._v("填写物流单号")]):9==e.state?r("div",{staticClass:"lib-btn-1",on:{click:function(r){t.go_audit(e)}}},[t._v("重新申请")]):t._e()])}))]),t._v(" "),r("p",{directives:[{name:"show",rawName:"v-show",value:t.loading&&!t.null_data,expression:"loading&&!null_data"}],staticClass:"page-infinite-loading font-1 c1"},[r("mt-spinner",{attrs:{type:"fading-circle"}}),t._v("\n                        加载中...\n                    ")],1),t._v(" "),t.null_data&&t.page>1?r("p",{staticClass:"page-infinite-loading font-1 c1"},[t._v("\n                        兄弟，真的没有了...\n                    ")]):t._e()]):r("noData")],1):t._e()])])])},s=[]},332:function(t,e,r){var i=r(4);(t.exports=r(2)(!1)).push([t.i,".order_list_b{width:100%;height:auto;margin-top:.533333rem}.order_list_b .order_list-nav{color:#4a8ada;font-size:.933333rem}.order_list_b .order_list-nav .list-nav-b{position:relative}.order_list_b .order_list-nav .list-nav-b .l_t{margin-left:.866667rem}.order_list_b .order_list-nav .list-nav-b .span_down{border-top:.31875rem solid #4a8ada}.order_list_b .order_list-nav .list-nav-b .span_down,.order_list_b .order_list-nav .list-nav-b .span_up{width:0;height:0;border-left:.31875rem solid transparent;border-right:.31875rem solid transparent;margin-left:.1rem}.order_list_b .order_list-nav .list-nav-b .span_up{border-bottom:.31875rem solid #4a8ada}.order_list_b .order_list-nav .list-nav-b .nav_list_c{background:url("+i(r(45))+") no-repeat;background-size:100% 100%;background-position:50%;height:15.066667rem}.order_list_b .order_list-nav .list-nav-b .nav_list_c,.order_list_b .order_list-nav .list-nav-b .nav_list_c2{position:absolute;top:1.733333rem;left:13rem;width:6.466667rem;text-align:center;line-height:2.3rem;padding:.7rem 0;font-size:.933333rem;color:#fff;z-index:100}.order_list_b .order_list-nav .list-nav-b .nav_list_c2{background:url("+i(r(44))+") no-repeat;background-size:100% 100%;background-position:50%;height:13.5rem}.order_list_b .order_list-nav .tuihuo-icon{background:#282828 url("+i(r(43))+") no-repeat!important;background-size:4.466667rem!important;background-position:-1% 9.266667rem!important}.order_list_b .order_list-nav .list-order-lib-search{top:5.5rem}.order_list_b .order_list-nav .list-order-lib{padding:0 .866667rem;overflow:auto;width:100%;position:fixed;top:7rem;bottom:0;right:0}.order_list_b .order_list-nav .list-order-lib .order-lib_b{position:relative;background:#282828;width:100%;height:11.625rem;padding:.733333rem .8rem .933333rem .6rem;-webkit-clip-path:polygon(.666667rem 0,calc(100% - .666667rem) 0,100% .666667rem,100% calc(100% - .666667rem),calc(100% - .666667rem) 100%,.666667rem 100%,0 calc(100% - .666667rem),0 .666667rem)}.order_list_b .order_list-nav .list-order-lib .order-lib_b:nth-child(n+2){margin-top:1.066667rem}.order_list_b .order_list-nav .list-order-lib .order-lib_b .order-lib_b_1{padding:.6rem 0}.order_list_b .order_list-nav .list-order-lib .order-lib_b .order-lib_b_1>div:first-child{width:4.533333rem;height:4.533333rem}.order_list_b .order_list-nav .list-order-lib .order-lib_b .order-lib_b_1>div:first-child img{width:100%;height:100%;display:block}.order_list_b .order_list-nav .list-order-lib .order-lib_b .order-lib_b_1>div:nth-child(2){padding:0 1.133333rem;max-width:12rem}.order_list_b .order_list-nav .list-order-lib .order-lib_b .order-lib_b_1>div:nth-child(2)>p:first-child{height:2.066667rem}.order_list_b .order_list-nav .list-order-lib .order-lib_b .order-lib_b_1>div:nth-child(3){padding-top:1.066667rem;text-align:right;color:#fff}.order_list_b .order_list-nav .list-order-lib .order-lib_b .top_1{margin-top:-.375rem}.order_list_b .order_list-nav .list-order-lib .order-lib_b .lib-btn-no{right:7.066667rem}.order_list_b .order_list-nav .list-order-lib .order-lib_b .lib-btn-1,.order_list_b .order_list-nav .list-order-lib .order-lib_b .lib-btn-no{position:absolute;bottom:.5625rem;min-width:5.6rem;height:1.666667rem;background:#4a8ada;color:#fff;padding:0 .666667rem;border-radius:.533333rem;line-height:1.666667rem;text-align:center;font-size:.933333rem}.order_list_b .order_list-nav .list-order-lib .order-lib_b .lib-btn-1{right:.8rem}.order-search{background:rgba(0,0,0,.9);width:100%;position:fixed;left:0;bottom:0;top:0;right:0;overflow:auto;z-index:101;padding-top:4.266rem}.order-search .search-top{height:1.333333rem;background:#1a1a1a}.order-search .search_box{width:100%;height:2.933333rem;background:#1a1a1a}.order-search .search_box .search_box_1{width:100%;height:1.8rem;padding-left:1.066667rem}.order-search .search_box .search_box_1 input{width:18.866667rem;background:#282828 url("+i(r(17))+") no-repeat;background-size:1.4rem;background-position:.266667rem;display:block;height:1.8rem;line-height:1.8rem;padding-left:3rem;border-radius:1.4rem}.order-search .search_box .search_box_1 p{line-height:1.8rem}.content_back{width:100%;height:4.266rem;background:#232323;position:relative;border-bottom:#232323;position:fixed;top:0;left:0;right:0;z-index:100}.content_back .iponeXh{height:1.333333rem}.content_back .header_if{background:#232323;width:100%;position:absolute;z-index:100;text-align:center;top:1.25rem}.content_back .header_if ._back{width:4rem;height:2.933333rem;background:url("+i(r(19))+") no-repeat;background-size:1.466667rem;background-position:1.333333rem;position:absolute;left:0;top:0}.content_back .header_if ._title{height:2.933333rem;line-height:2.933333rem;font-size:1.2rem;color:#fff}",""])},333:function(t,e,r){var i=r(332);"string"==typeof i&&(i=[[t.i,i,""]]),i.locals&&(t.exports=i.locals);(0,r(1).default)("cb3d2a4c",i,!0,{})},428:function(t,e,r){"use strict";r.r(e);var i=r(79),s=r.n(i);for(var a in i)"default"!==a&&function(t){r.d(e,t,function(){return i[t]})}(a);var o=r(157),n=r(0);var l=function(t){r(333)},d=Object(n.a)(s.a,o.a,o.b,!1,l,null,null);e.default=d.exports},79:function(t,e,r){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var i=o(r(24));r(23);var s=o(r(6)),a=o(r(15));function o(t){return t&&t.__esModule?t:{default:t}}s.default.use(i.default),e.default={data:function(){return{share_log:!1,nav_show:!1,time_el:null,search_word_items:[],return_items:[],status:1,order_num:null,loading:!1,wrapperHeight:0,null_data:!1,page:1,pageSize:10}},mounted:function(){var t=this;document.onkeydown=function(e){if(13==(document.all?window.event:e).keyCode)return document.querySelector(".search_el").blur(),t.page=1,t.null_data=!1,t.returnData(),!1}},components:{noData:a.default},methods:{returnData:function(){var t=this,e={showCount:t.pageSize,currentPage:t.page,userType:2,order_num:t.order_num};return t.status=2,!!t.order_num&&(!t.null_data&&void this.util.ajax.post("/mall/orders/getOrderData.do",e).then(function(e){if(1==t.page?(t.return_items=[],t.return_items=e.data.list):t.return_items=t.return_items.concat(e.data.list),setTimeout(function(){t.loading=!1},200),e.data.list.length<10)return t.null_data=!0,!1}).catch())},loadMore:function(){this.loading=!0,this.page++,this.returnData()},click_search:function(t){this.order_num=t,this.returnData()},nav_open:function(){this.nav_show=!this.nav_show},cancel_event:function(){history.back()},on_focus:function(){this.status=1},searching_get:function(){var t=this,e={order_num:t.order_num};if(t.search_word_items=[],!t.order_num)return!1;clearTimeout(t.time_el),t.time_el=setTimeout(function(){t.util.ajax.post("/mall/orders/buyOrderNumList.do",e).then(function(e){200==e.code&&(t.search_word_items=e.data)}).catch()},500)},go_details:function(t){this.$router.replace({name:"order_details_seller",query:{id:t.id,goodsId:t.goodsId}})},go_audit:function(){},send_goods_event:function(t){this.express_id=t.id,this.send_goods_show=!0},send_goods_cancel:function(){this.send_goods_show=!1},send_goods_sure:function(){var t=this;return t.express_name?t.express_num?void this.util.ajax.get("/mall/orders/editOrder.do",{params:{id:t.express_id,express_name:t.express_name,express_num:t.express_num}}).then(function(e){200==e.code?(t.send_goods_cancel(),t.initData("update")):501==e.code?t._alert({content:e.message,yes:function(){t.$router.push({path:"onceZhi",query:{state:1}})}}):t._alert({content:e.message})}).catch():(t._alert({content:"请输入物流公司"}),!1):(t._alert({content:"请输入物流单号"}),!1)}}}}}]);