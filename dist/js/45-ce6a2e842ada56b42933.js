(window.webpackJsonp=window.webpackJsonp||[]).push([[45],{153:function(e,t,s){"use strict";s.d(t,"a",function(){return a}),s.d(t,"b",function(){return i});var a=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",[a("div",{staticClass:"content_back"},[a("div",{staticClass:"iponeXh"}),e._v(" "),a("div",{staticClass:"header_if"},[a("div",{staticClass:"_back back_yes",on:{click:e.back_center}}),e._v(" "),a("div",{staticClass:"_title"},[e._v("订单详情")])])]),e._v(" "),a("div",{staticClass:"order_details_b"},[a("div",{staticClass:"order_details-nav"},[e.state?a("div",{staticClass:"list-order-details-lib"},[5==e.state?a("div",{staticClass:"flex-h flex-j-c"},[a("img",{staticClass:"order-dog",attrs:{src:s(202),alt:""}})]):e._e(),e._v(" "),8==e.state?a("div",{staticClass:"flex-h flex-j-c"},[a("img",{staticClass:"order-dog",attrs:{src:s(201),alt:""}})]):e._e(),e._v(" "),10==e.state||11==e.state?a("div",{staticClass:"flex-h flex-j-c"},[a("img",{staticClass:"order-dog",attrs:{src:s(200),alt:""}})]):e._e(),e._v(" "),2!=e.state&&8!=e.state&&5!=e.state&&7!=e.state&&10!=e.state&&11!=e.state?a("div",[a("div",{directives:[{name:"show",rawName:"v-show",value:0==e.orderDetail.orderType,expression:"orderDetail.orderType==0 ? true:false"}]},[a("div",{staticClass:"title-l"},[e._v("收货信息")]),e._v(" "),a("div",{staticClass:"order-details-lib_b order-p-t-2 copy_event"},[a("div",{staticClass:"flex-1 flex-h"},[a("p",{staticClass:"flex-1"},[e._v("收货地址：")]),e._v(" "),a("p",{staticClass:"c4 flex-3"},[e._v(e._s(e.buyer.address))])]),e._v(" "),a("div",{staticClass:"flex-1 flex-h"},[a("p",{staticClass:"flex-1"},[e._v("详细地址：")]),e._v(" "),a("p",{staticClass:"c4 flex-3"},[e._v(e._s(e.buyer.address_detail))])]),e._v(" "),a("div",{staticClass:"flex-1 flex-h"},[a("p",{staticClass:"flex-1"},[e._v("收货人：")]),e._v(" "),a("p",{staticClass:"c4 flex-3"},[e._v(e._s(e.buyer.name))])]),e._v(" "),a("div",{staticClass:"flex-1 flex-h"},[a("p",{staticClass:"flex-1"},[e._v("联系方式：")]),e._v(" "),a("p",{staticClass:"c4 flex-3"},[e._v(e._s(e.buyer.phone))])]),e._v(" "),e.state>2?a("div",[a("div",{staticClass:"flex-1 flex-h"},[a("p",{staticClass:"flex-1"},[e._v("快递公司：")]),e._v(" "),a("p",{staticClass:"c4 flex-3"},[e._v(e._s(e.seller.express_name))])]),e._v(" "),a("div",{staticClass:"flex-1 flex-h"},[a("p",{staticClass:"flex-1"},[e._v("物流单号：")]),e._v(" "),a("p",{staticClass:"c4 flex-3"},[e._v(e._s(e.seller.express_num))])]),e._v(" "),a("div",{staticClass:"copy-icon"},[e._v("复制单号")])]):e._e()])])]):e._e(),e._v(" "),a("div",{staticClass:"order-details-lib_b",staticStyle:{"margin-top":"0.8rem"},on:{click:e.go_goods_details}},[a("div",{staticClass:"order-details-lib_b_1 flex-h"},[a("div",[a("img",{attrs:{src:e.goodsDetail.showUrl,alt:""}})]),e._v(" "),a("div",{staticClass:"c3 flex-v flex-j-c flex-1"},[a("p",{staticClass:"font-3 ellipsis"},[e._v(e._s(e.goodsDetail.goodsName))]),e._v(" "),a("p",{directives:[{name:"show",rawName:"v-show",value:1==e.orderDetail.orderType,expression:"orderDetail.orderType==1 ? true:false"}]},[e._v(e._s(e.goodsDetail.shop_name))])]),e._v(" "),2==e.state&&0==e.orderDetail.orderType?a("div",{staticClass:"flex-1 flex-v flex-j-c flex-a-e",on:{click:e.send_goods_event}},[a("div",{staticClass:"lib-btn-2"},[e._v("一键发货")])]):e._e(),e._v(" "),2==e.state&&1==e.orderDetail.orderType?a("div",{staticClass:"flex-1 flex-v flex-j-c flex-a-e"},[a("div",[a("div",{staticClass:" lib-btn-2",on:{click:e.yes_sell}},[e._v("确认出售")]),e._v(" "),a("div",{staticClass:"lib-btn-botton",on:{click:e.no_sell}},[e._v("暂不出售")])])]):e._e(),e._v(" "),0==e.state?a("div",{staticClass:"flex-1 flex-v flex-j-c flex-a-e",on:{click:e.sure_get_goods}},[a("div",{staticClass:"lib-btn-2"},[e._v("确认收货")])]):e._e(),e._v(" "),7==e.state?a("div",{staticClass:"flex-1 flex-v flex-j-c flex-a-e",on:{click:e.go_audit}},[a("div",{staticClass:"lib-btn-2"},[e._v("去审核")])]):e._e()]),e._v(" "),a("p",{staticClass:"line_1"}),e._v(" "),0==e.orderDetail.orderType?a("div",[a("div",{staticClass:"words-1 flex-h c5"},[a("p",{staticClass:"flex-1 flex-h"},[e._v(" 商品规格 "),a("span",{staticClass:"c4 p-l"},[e._v(e._s(e.goodsDetail.format))])]),e._v(" "),a("p",{staticClass:"flex-1 flex-h"},[e._v(" 商品数量 "),a("span",{staticClass:"c4 p-l"},[e._v(e._s(e.goodsDetail.count)+"个")])])]),e._v(" "),a("div",{staticClass:"words-2 flex-h c5"},[a("p",{staticClass:"flex-1 flex-h"},[e._v(" 商品单价 "),a("span",{staticClass:"c4 p-l"},[e._v("¥"+e._s(e.goodsDetail.price))])]),e._v(" "),a("p",{staticClass:"flex-1 flex-h"},[e._v(" 商品总价 "),a("span",{staticClass:"c4 p-l"},[e._v("¥"+e._s(e.goodsDetail.money))])])])]):a("div",[a("div",{staticClass:"words-2 flex-h"},[a("p",{staticClass:"flex-1 flex-h c12"},[e._v(" 版权价格 "),a("span",{staticClass:" p-l"},[e._v("¥"+e._s(e.goodsDetail.copyright_price))])])])])]),e._v(" "),8==e.state||7==e.state||10==e.state||11==e.state?a("div",[a("div",{staticClass:"title-l"},[e._v("退单信息")]),e._v(" "),a("div",{staticClass:"order-details-lib_b order-p-t-2"},[a("p",{staticClass:"flex-1 flex-h"},[e._v(" 退单单号： "),a("span",{staticClass:"c4 "},[e._v(e._s(e.returnInfo.order_num))])]),e._v(" "),a("p",{staticClass:"flex-1 flex-h"},[e._v(" 退单状态：\r\n                            "),1==e.state?a("span",{staticClass:"c4 "},[e._v("待付款")]):2==e.state&&0==e.orderDetail.orderType?a("span",{staticClass:"c4 "},[e._v("待发货")]):2==e.state&&1==e.orderDetail.orderType?a("span",{staticClass:"c4 "},[e._v("待确认")]):3==e.state&&0==e.orderDetail.orderType?a("span",{staticClass:"c4 "},[e._v("已发货")]):3==e.state&&1==e.orderDetail.orderType?a("span",{staticClass:"c4 "},[e._v("变更中")]):4==e.state?a("span",{staticClass:"c4 "},[e._v("待评价")]):5==e.state&&0==e.orderDetail.orderType?a("span",{staticClass:"c4 "},[e._v("已完成")]):5==e.state&&1==e.orderDetail.orderType?a("span",{staticClass:"c4 "},[e._v("版权信息变更成功")]):6==e.state?a("span",{staticClass:"c4 "},[e._v("已取消")]):7==e.state?a("span",{staticClass:"c4 "},[e._v("待处理")]):8==e.state?a("span",{staticClass:"c4 "},[e._v("待退货")]):9==e.state||13==e.state?a("span",{staticClass:"c4 "},[e._v("已拒绝")]):10==e.state?a("span",{staticClass:"c4 "},[e._v("待收货")]):11==e.state?a("span",{staticClass:"c4 "},[e._v("退款成功")]):12==e.state?a("span",{staticClass:"c4 "},[e._v("重新申请")]):e._e()]),e._v(" "),a("p",{staticClass:"flex-1 flex-h"},[e._v(" 退单时间： "),a("span",{staticClass:"c4 "},[e._v(e._s(e.returnInfo.create_time))])]),e._v(" "),a("p",{staticClass:"flex-1 flex-h"},[e._v(" 退单原因： "),a("span",{staticClass:"c4 "},[e._v(e._s(e.returnInfo.return_reason))])]),e._v(" "),a("div",{staticClass:"flex-1 flex-h show-imgs"},[a("p",{staticClass:"w4"}),e._v(" "),e._l(e.returnInfo.urls,function(t){return a("img",{key:t,staticStyle:{"object-fit":"cover"},attrs:{src:t,alt:""},on:{click:function(s){e.open_img(t)}}})})],2)])]):e._e(),e._v(" "),2==e.state||5==e.state||10==e.state||11==e.state?a("div",[a("div",{directives:[{name:"show",rawName:"v-show",value:0==e.orderDetail.orderType,expression:" orderDetail.orderType == 0 ? true:false"}]},[a("div",{staticClass:"title-l"},[e._v("买家信息")]),e._v(" "),a("div",{staticClass:"order-details-lib_b order-p-t-2 copy_event"},[a("div",{staticClass:"flex-1 flex-h"},[a("p",{staticClass:"flex-1"},[e._v("收货地址：")]),e._v(" "),a("p",{staticClass:"c4 flex-3"},[e._v(e._s(e.buyer.address+" "+e.buyer.address_detail))])]),e._v(" "),a("div",{staticClass:"flex-1 flex-h"},[a("p",{staticClass:"flex-1"},[e._v("收件人：")]),e._v(" "),a("p",{staticClass:"c4 flex-3"},[e._v(e._s(e.buyer.name))])]),e._v(" "),a("div",{staticClass:"flex-1 flex-h"},[a("p",{staticClass:"flex-1"},[e._v("联系方式：")]),e._v(" "),a("p",{staticClass:"c4 flex-3"},[e._v(e._s(e.buyer.phone))])]),e._v(" "),a("div",{staticClass:"flex-1 flex-h"},[a("p",{staticClass:"flex-1"},[e._v("快递公司：")]),e._v(" "),a("p",{staticClass:"c4 flex-3"},[e._v(e._s(e.seller.express_name))])]),e._v(" "),a("div",{staticClass:"flex-1 flex-h"},[a("p",{staticClass:"flex-1"},[e._v("物流单号：")]),e._v(" "),a("p",{staticClass:"c4 flex-3"},[e._v(e._s(e.seller.express_num))])]),e._v(" "),a("div",{staticClass:"copy-icon"},[e._v("复制单号")])])])]):e._e(),e._v(" "),8==e.state?a("div",[a("div",{staticClass:"title-l"},[e._v("卖家信息")]),e._v(" "),a("div",{staticClass:"order-details-lib_b order-p-t-2"},[a("div",{staticClass:"flex-1 flex-h"},[a("p",{staticClass:"flex-1"},[e._v("收货地址：")]),e._v(" "),a("p",{staticClass:"c4 flex-3"},[e._v(e._s(e.seller.address))])]),e._v(" "),a("div",{staticClass:"flex-1 flex-h"},[a("p",{staticClass:"flex-1"},[e._v("详细地址：")]),e._v(" "),a("p",{staticClass:"c4 flex-3"},[e._v(e._s(e.seller.address_detail))])]),e._v(" "),a("div",{staticClass:"flex-1 flex-h"},[a("p",{staticClass:"flex-1"},[e._v("收货人：")]),e._v(" "),a("p",{staticClass:"c4 flex-3"},[e._v(e._s(e.seller.name))])]),e._v(" "),a("div",{staticClass:"flex-1 flex-h"},[a("p",{staticClass:"flex-1"},[e._v("联系方式：")]),e._v(" "),a("p",{staticClass:"c4 flex-3"},[e._v(e._s(e.seller.phone))])])])]):e._e(),e._v(" "),3==e.state?a("div",{staticClass:"p font-0"},[e._v("\r\n                    【如果买家逾期不确认收货或评价，您可以提供买家已收货证明发送至平台邮箱：ags@auuidc.com，平台审核通过后，该笔订单会默认已完成。】\r\n                ")]):e._e(),e._v(" "),7!=e.state?a("div",[a("div",{staticClass:"title-l"},[e._v("订单信息")]),e._v(" "),a("div",{staticClass:"order-details-lib_b order-p-t-2 font-1"},[a("p",{staticClass:"flex-1 flex-h"},[e._v(" 订 单 号： "),a("span",{staticClass:"c4 "},[e._v(e._s(e.orderDetail.order_num))])]),e._v(" "),a("p",{staticClass:"flex-1 flex-h"},[e._v(" 订单状态：\r\n                            "),1==e.state?a("span",{staticClass:"c4 "},[e._v("待付款")]):2==e.state&&0==e.orderDetail.orderType?a("span",{staticClass:"c4 "},[e._v("待发货")]):2==e.state&&1==e.orderDetail.orderType?a("span",{staticClass:"c4 "},[e._v("待确认")]):3==e.state&&1==e.orderDetail.orderType?a("span",{staticClass:"c4 "},[e._v("变更中")]):3==e.state&&0==e.orderDetail.orderType?a("span",{staticClass:"c4 "},[e._v("已发货")]):4==e.state&&0==e.orderDetail.orderType?a("span",{staticClass:"c4 "},[e._v("待评价")]):4==e.state&&1==e.orderDetail.orderType?a("span",{staticClass:"c4 "},[e._v("取消出售")]):5==e.state&&0==e.orderDetail.orderType?a("span",{staticClass:"c4 "},[e._v("已完成")]):5==e.state&&1==e.orderDetail.orderType?a("span",{staticClass:"c4 "},[e._v("已转让")]):6==e.state?a("span",{staticClass:"c4 "},[e._v("已取消")]):7==e.state?a("span",{staticClass:"c4 "},[e._v("待处理")]):8==e.state?a("span",{staticClass:"c4 "},[e._v("待退货")]):9==e.state||13==e.state?a("span",{staticClass:"c4 "},[e._v("已拒绝")]):10==e.state?a("span",{staticClass:"c4 "},[e._v("待收货")]):11==e.state?a("span",{staticClass:"c4 "},[e._v("退款成功")]):12==e.state?a("span",{staticClass:"c4 "},[e._v("重新申请")]):e._e()]),e._v(" "),a("p",{staticClass:"flex-1 flex-h"},[e._v(" 下单时间 ："),a("span",{staticClass:"c4 "},[e._v(e._s(e.orderDetail.createTime))])]),e._v(" "),e.state&&5==e.state||1==e.orderDetail.orderType?a("div",[a("p",{staticClass:"line_2"}),e._v(" "),a("p",{staticClass:"flex-1 flex-h"},[e._v(" 支付方式： "),a("span",{staticClass:"c4 "},[e._v(e._s(e.orderDetail.payWay))])]),e._v(" "),a("p",{staticClass:"flex-1 flex-h"},[e._v(" 支付时间： "),a("span",{staticClass:"c4 "},[e._v(e._s(e.orderDetail.payTime))])]),e._v(" "),a("p",{staticClass:"flex-1 flex-h"},[e._v(" 订单金额： "),a("span",{staticClass:"c4 "},[e._v("¥"+e._s(e.orderDetail.money))])]),e._v(" "),a("p",{directives:[{name:"show",rawName:"v-show",value:0==e.orderDetail.orderType,expression:" orderDetail.orderType == 0 ? true:false"}],staticClass:"flex-1 flex-h"},[e._v(" 平台费用： "),a("span",{staticClass:"c4 "},[e._v(e._s(e.orderDetail.flatMoney)+"（已计于订单金额中）")])]),e._v(" "),a("div",{directives:[{name:"show",rawName:"v-show",value:0==e.orderDetail.orderType,expression:" orderDetail.orderType == 0 ? true:false"}],staticClass:"flex-1 flex-v c13",staticStyle:{"padding-left":"4.5rem"}},[a("p",[e._v("收费规则：")]),e._v(" "),a("p",[e._v("好评5星，收取0% 好评4星，收取1%")]),e._v(" "),a("p",[e._v("好评3星，收取2% 好评2星，收取3%")]),e._v(" "),a("p",[e._v("好评1星，收取4% 好评0星，收取5%")])])]):e._e(),e._v(" "),1==e.state?a("div",{directives:[{name:"show",rawName:"v-show",value:0==e.orderDetail.orderType,expression:" orderDetail.orderType == 0 ? true:false"}]},[a("p",{staticClass:"flex-1 flex-h"},[e._v(" 订单金额： "),a("span",{staticClass:"c4 "},[e._v("¥"+e._s(e.orderDetail.money))])])]):e._e()])]):e._e(),e._v(" "),e.state>4?a("div",{directives:[{name:"show",rawName:"v-show",value:0==e.orderDetail.orderType,expression:" orderDetail.orderType == 0 ? true:false"}]},[a("div",{staticClass:"w h3 line-h-3 flex-h star-manage flex-a-c"},[a("p",{staticClass:"font-1 c1 flex-1"},[e._v("商品评价")]),e._v(" "),a("p",{staticClass:"star-lib",class:e.handle_star_click_num(1)}),e._v(" "),a("p",{staticClass:"star-lib",class:e.handle_star_click_num(2)}),e._v(" "),a("p",{staticClass:"star-lib",class:e.handle_star_click_num(3)}),e._v(" "),a("p",{staticClass:"star-lib",class:e.handle_star_click_num(4)}),e._v(" "),a("p",{staticClass:"star-lib",class:e.handle_star_click_num(5)})]),e._v(" "),a("div",{staticClass:"order-details-lib_b order-p-t-1",staticStyle:{"min-height":"9rem"}},[a("p",{staticClass:"flex-1 flex-h"},[e._v(" "+e._s(e.discussDetail.content))]),e._v(" "),e._l(e.discussDetail.flist,function(e,t){return a("div",{key:t,staticStyle:{float:"left",margin:"20px 10px 10px 0"}},[a("img",{staticStyle:{height:"50px","object-fit":"cover"},attrs:{src:e,alt:""}})])})],2)]):e._e(),e._v(" "),a("div",{staticClass:"title-l"},[e._v("备注")]),e._v(" "),a("div",{staticClass:"order-details-lib_b order-p-t-1"},[a("p",{staticClass:"flex-1 flex-h"},[e._v(" "+e._s(e.details.remark))])]),e._v(" "),a("div",{staticClass:"h5"})]):e._e()]),e._v(" "),e.send_goods_show?a("div",{staticClass:"dialog_layer"},[a("div",{staticClass:"layer_cont_1"},[a("div",{staticClass:"flex-v flex-j-c",staticStyle:{padding:"2rem 0 4rem 0"}},[a("div",{staticClass:"layer_title"},[e._v("· 发货信息 ·")]),e._v(" "),a("div",{staticClass:"c3 flex-h flex-j-c"},[a("p",{staticClass:"line-h-2"},[e._v("物流单号:")]),e._v(" "),a("input",{directives:[{name:"model",rawName:"v-model.trim",value:e.express_num,expression:"express_num",modifiers:{trim:!0}}],attrs:{"orderDetail.orderType":"text",placeholder:"输入物流单号"},domProps:{value:e.express_num},on:{input:function(t){t.target.composing||(e.express_num=t.target.value.trim())},blur:function(t){e.$forceUpdate()}}})]),e._v(" "),a("div",{staticClass:"c3 flex-h flex-j-c m-t-2"},[a("p",{staticClass:"line-h-2"},[e._v("物流公司:")]),e._v(" "),a("input",{directives:[{name:"model",rawName:"v-model.trim",value:e.express_name,expression:"express_name",modifiers:{trim:!0}}],attrs:{"typorderDetail.orderTypee":"text",placeholder:"输入物流公司名称"},domProps:{value:e.express_name},on:{input:function(t){t.target.composing||(e.express_name=t.target.value.trim())},blur:function(t){e.$forceUpdate()}}})])]),e._v(" "),a("div",{staticClass:"layer_cont_btn"},[a("div",{staticClass:"layer_cont_confirm flex-h flex-j-c"},[a("p",{on:{click:e.send_goods_cancel}},[e._v("取消")]),e._v(" "),a("p",{on:{click:e.send_goods_sure}},[e._v("确定")])])])])]):e._e()])])},i=[]},327:function(e,t,s){var a=s(4);(e.exports=s(2)(!1)).push([e.i,".order_details_b{width:100%;height:auto;padding:.733333rem .866667rem}.order_details_b .order_details-nav{color:#d8d8d8;font-size:.933333rem}.order_details_b .order_details-nav .list-order-details-lib .order-p-t-1{padding:1.466667rem .8rem!important}.order_details_b .order_details-nav .list-order-details-lib .order-p-t-2{padding:.933333rem .8rem!important}.order_details_b .order_details-nav .list-order-details-lib .order-details-lib_b{position:relative;background:#282828;width:100%;height:auto;padding:1.466667rem .8rem .866667rem .866667rem;-webkit-clip-path:polygon(.666667rem 0,calc(100% - .666667rem) 0,100% .666667rem,100% calc(100% - .666667rem),calc(100% - .666667rem) 100%,.666667rem 100%,0 calc(100% - .666667rem),0 .666667rem)}.order_details_b .order_details-nav .list-order-details-lib .order-details-lib_b .show-imgs{margin-top:.4rem;padding-left:.7rem}.order_details_b .order_details-nav .list-order-details-lib .order-details-lib_b .show-imgs img{width:4.733333rem;height:4.733333rem;display:block}.order_details_b .order_details-nav .list-order-details-lib .order-details-lib_b .copy-icon{width:3.933333rem;height:1.466667rem;line-height:1.333333rem;border:.066667rem solid #979797;border-radius:.2rem;color:#e7e7e7;font-size:.8rem;text-align:center;position:absolute;right:.933333rem;bottom:.8rem}.order_details_b .order_details-nav .list-order-details-lib .order-details-lib_b .order-details-lib_b_1>div:first-child{width:3.066667rem;height:3.066667rem}.order_details_b .order_details-nav .list-order-details-lib .order-details-lib_b .order-details-lib_b_1>div:first-child img{width:100%;height:100%;display:block;object-fit:cover}.order_details_b .order_details-nav .list-order-details-lib .order-details-lib_b .order-details-lib_b_1>div:nth-child(2){padding:0 .866667rem;max-width:12rem}.order_details_b .order_details-nav .list-order-details-lib .order-details-lib_b .order-details-lib_b_1>div:nth-child(2)>p:first-child{height:1.533333rem;font-family:PingFangSC-Regular;font-size:18px;color:#e7e7e7;letter-spacing:.17px;text-align:justify}.order_details_b .order_details-nav .list-order-details-lib .order-details-lib_b .order-details-lib_b_1>div:nth-child(2)>p:nth-child(2){height:1.333333rem;font-family:PingFangSC-Regular;font-size:14px;color:#9e9e9e;letter-spacing:.15px;text-align:justify}.order_details_b .order_details-nav .list-order-details-lib .order-details-lib_b .order-details-lib_b_1>div:nth-child(3){text-align:right;color:#fff}.order_details_b .order_details-nav .list-order-details-lib .order-details-lib_b .order-details-lib_b_1 .lib-btn-2,.order_details_b .order_details-nav .list-order-details-lib .order-details-lib_b .order-details-lib_b_1 .lib-btn-botton{width:6.666667rem;height:1.666667rem;background:#4a8ada;color:#fff;border-radius:.533333rem;line-height:1.666667rem;text-align:center;font-size:.933333rem}.order_details_b .order_details-nav .list-order-details-lib .order-details-lib_b .order-details-lib_b_1 .lib-btn-botton{margin-top:1rem}.order_details_b .order_details-nav .list-order-details-lib .order-details-lib_b .order-details-lib_b_1 .lib-btn-3{font-family:PingFangSC-Regular;width:6.666667rem;height:1.666667rem;border:.066667rem solid #4a90e2;color:#e7e7e7;border-radius:.533333rem;line-height:1.666667rem;text-align:center;font-size:.933333rem;background:#4a90e2}.order_details_b .order_details-nav .list-order-details-lib .order-details-lib_b .line_1{width:100%;height:.066667rem;background:hsla(0,0%,85%,.19);transform:scaleY(.5);margin-top:1.466667rem}.order_details_b .order_details-nav .list-order-details-lib .order-details-lib_b .line_2{width:100%;height:.066667rem;background:hsla(0,0%,85%,.19);transform:scaleY(.5);margin:.8rem auto}.order_details_b .order_details-nav .list-order-details-lib .order-details-lib_b .words-1{margin-top:1.233333rem;padding-left:.533333rem;font-size:.933333rem}.order_details_b .order_details-nav .list-order-details-lib .order-details-lib_b .words-2{margin-top:.866667rem;font-size:.933333rem}.order_details_b .order_details-nav .list-order-details-lib .title-l{padding-left:.666667rem;height:1.666667rem;font-size:1.066667rem;margin-top:1rem}.order_details_b .order_details-nav .list-order-details-lib .apply_btn{width:90%;height:2.533333rem;background:#464646;border-radius:2rem;margin-top:1.066667rem;position:fixed;bottom:1rem;left:5%}.order_details_b .order_details-nav .list-order-details-lib .apply_btn>div:first-child{line-height:2.533333rem;font-family:PingFangSC-Light;letter-spacing:.014rem;text-align:center}.order_details_b .order_details-nav .list-order-details-lib .apply_btn>div:nth-child(2){width:6.533333rem;height:2.533333rem;line-height:2.533333rem;background:#d1324e;border-radius:2rem;text-align:center;font-size:.933333rem}.order_details_b .order-dog{width:3.133333rem;height:4.666667rem;display:block}.star-manage{padding-left:1rem}.star-manage .star-lib{display:block;width:1.333333rem;height:1.266667rem;margin-left:.6rem}.star-manage .star-lib:first-child{margin-left:0}.star-manage .empty-stars{background:url("+a(s(13))+") no-repeat;background-size:100%}.star-manage .real-stars{background:url("+a(s(14))+") no-repeat;background-size:100%}.star-manage .half-stars{background:url("+a(s(12))+") no-repeat;background-size:100%}.bg-style-b{background:#282828 url("+a(s(22))+") no-repeat!important;background-size:85%!important;background-position:center 101%!important}.bg-style-t{background:#282828 url("+a(s(22))+") no-repeat!important;background-size:85%!important;background-position:center -.3rem!important}.order_remark{height:7rem!important;-webkit-clip-path:polygon(.666667rem 0,calc(100% - .666667rem) 0,100% .666667rem,100% calc(100% - .666667rem),calc(100% - .666667rem) 100%,.666667rem 100%,0 calc(100% - .666667rem),0 .666667rem)}.copy_event{cursor:pointer}.tt{width:11.866667rem;opacity:.7;background:#4b4b4b;box-shadow:0 .133333rem .266667rem 0 rgba(0,0,0,.5);border-radius:6.666667rem;font-family:PingFangSC-Regular;font-size:1.066667rem;color:#fff;letter-spacing:-1.25px}.content_back{width:100%;height:4.266rem;background:#232323;position:relative;border-bottom:#232323;position:fixed;top:0;left:0;right:0;z-index:100}.content_back .iponeXh{height:1.333333rem}.content_back .header_if{background:#232323;width:100%;position:absolute;z-index:100;text-align:center;top:1.25rem}.content_back .header_if ._back{width:4rem;height:2.933333rem;background:url("+a(s(19))+") no-repeat;background-size:1.466667rem;background-position:1.333333rem;position:absolute;left:0;top:0}.content_back .header_if ._title{height:2.933333rem;line-height:2.933333rem;font-size:1.2rem;color:#fff}",""])},328:function(e,t,s){var a=s(327);"string"==typeof a&&(a=[[e.i,a,""]]),a.locals&&(e.exports=a.locals);(0,s(1).default)("02172990",a,!0,{})},421:function(e,t,s){"use strict";s.r(t);var a=s(77),i=s.n(a);for(var r in a)"default"!==r&&function(e){s.d(t,e,function(){return a[e]})}(r);var l=s(153),d=s(0);var o=function(e){s(328)},n=Object(d.a)(i.a,l.a,l.b,!1,o,null,null);t.default=n.exports},77:function(e,t,s){"use strict";Object.defineProperty(t,"__esModule",{value:!0});a(s(18)),a(s(5));function a(e){return e&&e.__esModule?e:{default:e}}t.default={data:function(){return{share_log:!1,nav_show:!1,send_goods_show:!1,buyer:{},goodsDetail:{},orderDetail:{},returnInfo:{},seller:{},discussDetail:{},state:null,details:{},express_id:null,express_num:null,express_name:null,no_sell_show:!1,seller_banquan_show:!1,current_star_status:null}},created:function(){this.$route.query.show_send_goods&&(this.send_goods_show=!0),this.initData()},mounted:function(){},methods:{initData:function(e){var t=this,s={id:t.$route.query.id};console.log("接口上传的参数"+s),this.util.ajax.post("/mall/orders/getOrderDetail.do",s).then(function(e){t.details=e.data||{},t.buyer=e.data.buyer||{},t.goodsDetail=e.data.goodsDetail||{},t.orderDetail=e.data.orderDetail||{},t.returnInfo=e.data.returnInfo||{},t.seller=e.data.seller||{},t.discussDetail=e.data.discussDetail||{},t.state=e.data.orderDetail.state,t.express_id=e.data.orderId,t.current_star_status=e.data.discussDetail.current_star_status}).catch()},go_goods_details:function(){5!==this.state?this.$router.push({path:"goods-details-gwc",query:{id:this.goodsDetail.id}}):5==this.state&&1==this.orderDetail.orderType&&this.Toast({message:"该版权已转让",position:"bottom",className:"tt",duration:"3000"})},go_audit:function(){this.$router.push({name:"order_return_goods_audit",query:{id:this.details.orderId}}),event.stopPropagation()},send_goods_event:function(e){this.send_goods_show=!0,event.stopPropagation()},no_sell:function(e){var t=this;_confrim({content:"确定暂时不出售该版权么？",sureTxt:"确定",yes:function(){t.util.ajax.get("/mall/orders/confirmReceipt.do",{params:{id:t.details.orderId}}).then(function(e){200==e.code?t.initData("update"):t._alert({content:e.message})}).catch()},no:function(){}}),event.stopPropagation()},yes_sell:function(){var e=this,t=this;t.userId=t.details.buyer.buyerId,this.id=t.details.orderId,event.stopPropagation(),this.util.ajax.get("/admin/users/zyzhuce.do?userId="+t.userId).then(function(s){1==s.data.status?e.util.ajax.get("/mall/orders/getOrderDetail.do?id="+e.id).then(function(t){if(event.stopPropagation(),200==t.code){var s={old_user_id:t.data.seller.sellerId,new_user_id:t.data.buyer.buyerId,block_cert_numbere:t.data.goodsDetail.copyright_num};e.util.ajax.post("/admin/copyrightChange/save.do",s).then(function(t){if(200==t.code){var s={id:e.id,express_name:""};e.util.ajax.post("/mall/orders/editOrder.do",s).then(function(t){200==t.code&&(e.Toast("您已确认该版权售出"),e.initData())})}})}}):0==s.data.status&&t.Toast({message:"您还未申请版权登记，请去申请版权登记证书"})})},back_center:function(){this.$router.push("/order_list_seller")},send_goods_cancel:function(){this.send_goods_show=!1},send_goods_sure:function(){var e=this;return e.express_name?e.express_num?void this.util.ajax.get("/mall/orders/editOrder.do",{params:{id:e.express_id,express_name:e.express_name,express_num:e.express_num}}).then(function(t){200==t.code?(e.send_goods_cancel(),e.initData("update")):501==t.code?e._alert({content:t.message,yes:function(){e.$router.push({path:"onceZhi",query:{state:1}})}}):e._alert({content:t.message})}).catch():(e._alert({content:"请输入物流单号"}),!1):(e._alert({content:"请输入物流公司"}),!1)},sure_get_goods:function(){var e=this,t={id:e.$route.query.id};e._confrim({content:"请确定收到货后，确认收货。",yes:function(){e.util.ajax.post("/mall/orders/selleeConfirmReceipt.do",t).then(function(t){200==t.code?e.initData():e._alert({content:t.message})}).catch()},no:function(){}}),event.stopPropagation()},handle_star_click_num:function(e){return this.discussDetail.score>=e?"real-stars":Number(this.discussDetail.score)+1>e?"half-stars":"empty-stars"}}}}}]);