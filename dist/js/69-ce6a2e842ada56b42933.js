(window.webpackJsonp=window.webpackJsonp||[]).push([[69],{169:function(t,e,i){"use strict";i.d(e,"a",function(){return s}),i.d(e,"b",function(){return o});var s=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"entry_b"},[s("p",{staticClass:"entry_ts"},[t._v("最多上传5张")]),t._v(" "),s("div",{staticClass:"up"},[s("mt-swipe",{staticClass:"up_sw",attrs:{auto:3e3}},[0==t.items.length?s("img",{staticClass:"sw_img",staticStyle:{width:"100%",height:"112%","margin-top":"-.6rem"},attrs:{src:i(361)}}):t._l(t.items,function(e,i){return s("mt-swipe-item",{key:i},[e.iswht?s("img",{staticClass:"sw_img",staticStyle:{width:"100%",margin:"8% auto",display:"block"},attrs:{src:e.url},on:{click:function(i){t.opimg(e.url)}}}):s("img",{staticClass:"sw_img",staticStyle:{height:"100%",margin:"0 auto",display:"block"},attrs:{src:e.url},on:{click:function(i){t.opimg(e.url)}}}),t._v(" "),s("span",{staticClass:"desc"})])})],2),t._v(" "),s("div",{staticClass:"up_r"},[s("div",{staticClass:"up_img"},[s("input",{attrs:{type:"file",value:"",id:"file",accept:"image/*"},on:{change:t.onUpload}}),t._v(" "),s("img",{attrs:{src:i(360)}}),t._v(" "),s("span",[t._v("上传图片")])])])],1),t._v(" "),s("div",{directives:[{name:"show",rawName:"v-show",value:t.isthickness,expression:"isthickness"}],staticClass:"thickness"},[s("p",{staticClass:"thickness_name"},[t._v("商品分类"),s("img",{attrs:{src:i(359)},on:{click:t.cl_img}})]),t._v(" "),s("p",{staticClass:"thickness_fl"},[s("span",{class:t.choose_co?"th_xz":""},[t._v(t._s(t.flname))]),t._v(" "),s("span",{class:t.choose_co?"":"th_xz"},[t._v("二级分类")])]),t._v(" "),s("div",{staticClass:"thickness_m"},t._l(t.listType,function(e,i){return s("p",{key:i,on:{click:function(e){t.click_in(i)}}},[t._v(t._s(e.name))])}))]),t._v(" "),s("div",{staticClass:"entry_m"},[s("div",{staticClass:"goods_i"},[s("div",[s("span",[t._v("商品名称")]),s("input",{directives:[{name:"model",rawName:"v-model",value:t.goodsName,expression:"goodsName"}],staticClass:"input",attrs:{placeholder:"输入商品名称"},domProps:{value:t.goodsName},on:{input:function(e){e.target.composing||(t.goodsName=e.target.value)}}})]),t._v(" "),s("div",[s("span",[t._v("商品编号")]),s("input",{directives:[{name:"model",rawName:"v-model",value:t.goodsNum,expression:"goodsNum"}],staticClass:"input",staticStyle:{width:"12.3125rem"},attrs:{readonly:"readonly",placeholder:"点击右侧按钮生成编号"},domProps:{value:t.goodsNum},on:{input:function(e){e.target.composing||(t.goodsNum=e.target.value)}}}),s("p",{staticClass:"butn",class:t.isbjg?"background1":"background2",on:{click:t.generate}},[t._v("生成编号")])]),t._v(" "),s("div",[s("span",[t._v("商品分类")]),s("a",{staticClass:"choose",on:{click:t.goodsfl}},[t._v(t._s(t.goodt_n))])]),t._v(" "),s("div",[s("span",[t._v("商品价格")]),s("input",{directives:[{name:"model",rawName:"v-model",value:t.price,expression:"price"}],staticClass:"input",attrs:{placeholder:"输入商品价格"},domProps:{value:t.price},on:{input:function(e){e.target.composing||(t.price=e.target.value)}}})]),t._v(" "),s("div",[s("span",[t._v("版权编号")]),s("input",{directives:[{name:"model",rawName:"v-model",value:t.copyright_num,expression:"copyright_num"}],staticClass:"input",attrs:{placeholder:"输入版权编号"},domProps:{value:t.copyright_num},on:{input:function(e){e.target.composing||(t.copyright_num=e.target.value)}}}),s("p",{staticClass:"butn background1",on:{click:t.validation}},[t._v("验证")])]),t._v(" "),s("p",{staticStyle:{width:"85%",height:"1.2rem","text-align":"right","font-size":".8rem",color:"#888888",position:"absolute","margin-top":".166667rem"}},[t._v("用于验证是否申请版权存证证书")]),t._v(" "),s("div",{staticStyle:{height:"3.9rem","padding-top":".533333rem"}},[s("span",[t._v("版权价格")]),s("input",{directives:[{name:"model",rawName:"v-model",value:t.copyright_price,expression:"copyright_price"}],staticClass:"input",attrs:{placeholder:"输入版权价格"},domProps:{value:t.copyright_price},on:{input:function(e){e.target.composing||(t.copyright_price=e.target.value)}}})]),t._v(" "),s("div",{staticStyle:{"min-height":"3.9875rem",display:"block"}},[s("p",[t._v("商品标签")]),t._v(" "),t._l(t.tagList,function(e,i){return s("label",{key:i,staticClass:"label",on:{click:function(i){t.cl_tag(i,e.id)}}},[t._v(t._s(e.value))])})],2),t._v(" "),s("div",{staticStyle:{border:"none"}},[s("span",[t._v("商品状态")]),t._v(" "),s("a",[t._v(" 立即上架")]),t._v(" "),s("input",{staticClass:"switch switch-anim",attrs:{type:"checkbox"},on:{click:t.check}}),t._v(" "),s("a",[t._v("待售")])])]),t._v(" "),t._m(0),t._v(" "),s("div",{staticClass:"goods_c"},[s("p",[t._v("商品参数")]),t._v(" "),s("div",{staticClass:"div_m"},[s("span",[t._v("创作时间")]),s("a",{staticClass:"time",class:"选择创作时间"!=t.make_time?"cent":"",on:{click:t.cl_time}},[t._v(t._s(t.make_time))]),t._v(" "),s("div",{directives:[{name:"show",rawName:"v-show",value:t.isTime,expression:"isTime"}],staticClass:"xztime"},t._l(t.ttList,function(e){return s("label",{key:e.id,on:{click:function(i){t.year(e)}}},[t._v(t._s(e))])}))]),t._v(" "),s("div",{staticClass:"div_m"},[s("span",[t._v("商品材质")]),s("input",{directives:[{name:"model",rawName:"v-model",value:t.datum,expression:"datum"}],attrs:{placeholder:"输入商品材质"},domProps:{value:t.datum},on:{input:function(e){e.target.composing||(t.datum=e.target.value)}}})]),t._v(" "),s("div",{staticClass:"div_m"},[s("span",[t._v("商品规格")]),s("input",{directives:[{name:"model",rawName:"v-model",value:t.format,expression:"format"}],attrs:{placeholder:"例：12*20*90 cm，或28g"},domProps:{value:t.format},on:{input:function(e){e.target.composing||(t.format=e.target.value)}}})]),t._v(" "),s("div",{staticClass:"div_m",staticStyle:{border:"none"}},[s("span",[t._v("商品数量")]),s("input",{directives:[{name:"model",rawName:"v-model",value:t.count,expression:"count"}],attrs:{placeholder:"输入商品数量"},domProps:{value:t.count},on:{input:function(e){e.target.composing||(t.count=e.target.value)}}})])]),t._v(" "),t._m(1),t._v(" "),t._m(2)]),t._v(" "),s("div",{staticClass:"tt_ss"},[s("textarea",{directives:[{name:"model",rawName:"v-model",value:t.goodsDescribe,expression:"goodsDescribe"}],domProps:{value:t.goodsDescribe},on:{input:function(e){e.target.composing||(t.goodsDescribe=e.target.value)}}}),t._v(" "),s("span",{staticClass:"tex_span"},[t._v(t._s(t.are)+"/400")])]),t._v(" "),s("div",{staticClass:"but",on:{click:t.goodsSave}},[s("span",[t._v("确  定")])]),t._v(" "),s("router-view",{staticClass:"child_view",staticStyle:{"z-index":"999"}})],1)},o=[function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"yk_bjt"},[e("label",{staticClass:"triangle-right"}),e("img",{attrs:{src:i(16)}}),e("label",{staticClass:"triangle-left"})])},function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"yk_bjt"},[e("label",{staticClass:"triangle-right"}),e("img",{attrs:{src:i(16)}}),e("label",{staticClass:"triangle-left"})])},function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"goods_m"},[e("p",[this._v("商品描述")])])}]},359:function(t,e,i){t.exports=i.p+"images/guanbi.png"},360:function(t,e,i){t.exports=i.p+"images/bcicon@3x.png"},361:function(t,e,i){t.exports=i.p+"images/lbbj@3x.png"},362:function(t,e,i){t.exports=i.p+"images/selxiala@3x.png"},363:function(t,e,i){t.exports=i.p+"images/right-1.svg"},364:function(t,e,i){t.exports=i.p+"images/yqbj.jpg"},365:function(t,e,i){var s=i(4);(t.exports=i(2)(!1)).push([t.i,".mint-swipe{height:176px}.mt-swipe-item{width:100%;height:176px;-webkit-clip-path:polygon(13px 0,calc(100% - 13px) 0,100% 13px,100% calc(100% - 13px),calc(100% - 13px) 100%,13px 100%,0 calc(100% - 13px),0 13px)}.entry_b{width:100%;overflow:hidden}.entry_b .entry_ts{font-size:.75rem;color:#838383;letter-spacing:-.94px;display:flex;padding:.325rem 0;justify-content:flex-end;margin-right:.625rem}.entry_b .up{width:100%;height:11.733333rem;position:relative;background:#232323;box-shadow:0 1px 1px 0 rgba(0,0,0,.5);-webkit-clip-path:polygon(13px 0,calc(100% - 13px) 0,100% 13px,100% calc(100% - 13px),calc(100% - 13px) 100%,13px 100%,0 calc(100% - 13px),0 13px)}.entry_b .up .up_r{position:absolute;z-index:99;top:0;right:0;width:5.533333rem;height:100%;background:rgba(74,138,218,.5)}.entry_b .up .up_img{display:flex;flex-direction:column;justify-content:center;align-items:center;padding-top:1.6rem;font-family:PingFangSC-Regular;font-size:.933333rem;color:#fff}.entry_b .up .up_img img{width:2rem;height:2rem;margin-right:1.75rem;margin:0 auto}.entry_b .up .up_img span{margin-top:.466667rem}.entry_b .up .up_img input{position:absolute;width:7.1875rem;height:2.1875rem;margin-right:1.85rem;opacity:0}.entry_b .thickness{position:fixed;bottom:0;z-index:99999999;width:100%;height:22.733333rem;background:#282828;-webkit-clip-path:polygon(13px 0,calc(100% - 13px) 0,100% 13px,100% 100%,calc(100% - 13px) 100%,0 100%,0 calc(100% - 13px),0 13px)}.entry_b .thickness .thickness_name{font-size:.933333rem;color:#e7e7e7;width:100%;height:2.533333rem;line-height:2.533333rem;text-align:center;align-items:center;justify-content:center;display:flex;padding-left:8.5rem}.entry_b .thickness .thickness_name img{margin-left:8.5rem;width:1rem;height:1rem}.entry_b .thickness .thickness_fl{width:23.333333rem;height:2.1rem;margin-left:.833333rem;font-size:.933333rem;color:#e7e7e7;border-bottom:1px solid hsla(0,0%,85%,.19);border-top:1px solid hsla(0,0%,85%,.19)}.entry_b .thickness .thickness_fl span{display:inline-block;width:5rem;margin-left:.4rem;height:2.1rem;line-height:2.1rem;text-align:center}.entry_b .thickness .thickness_fl .th_xz{border-bottom:.133333rem solid #4a8ada;color:#4a90e2}.entry_b .thickness .thickness_m{width:100%;height:100%;overflow:auto;padding-top:.266667rem;padding-left:1.2rem;max-height:16.9375rem}.entry_b .thickness .thickness_m p{height:1.133333rem;margin-top:.866667rem;font-size:.8rem;color:#9e9e9e}.entry_b .entry_m{height:auto;margin:0 .8125rem 0 .75rem;background:#232323;padding:0 1rem 0 .8125rem;-webkit-clip-path:polygon(0 0,calc(100% - 13px) 0,100% 0,100% calc(100% - 13px),calc(100% - 13px) 100%,13px 100%,0 calc(100% - 13px),0 13px)}.entry_b .entry_m .yk_bjt{display:flex;justify-content:space-between;align-items:center;width:110%;margin-left:-.875rem}.entry_b .entry_m .yk_bjt img{width:88%;height:9px}.entry_b .entry_m .yk_bjt label{z-index:1;display:inline-block}.entry_b .entry_m .yk_bjt .triangle-right{border-left:18px solid #1a1a1a}.entry_b .entry_m .yk_bjt .triangle-left,.entry_b .entry_m .yk_bjt .triangle-right{width:0;height:0;border-top:14px solid transparent;border-bottom:14px solid transparent}.entry_b .entry_m .yk_bjt .triangle-left{border-right:18px solid #1a1a1a}.entry_b .entry_m .divider{height:1.5rem;width:120%;background:url("+s(i(364))+") no-repeat}.entry_b .entry_m .goods_i{padding-top:1.25rem}.entry_b .entry_m .goods_i div{display:flex;align-items:center;min-height:3.21875rem;width:100%;border-bottom:.0625rem solid hsla(0,0%,85%,.19)}.entry_b .entry_m .goods_i div span{display:inline-block;line-height:3.21875rem}.entry_b .entry_m .goods_i div span:first-child{font-size:.875rem;color:#fff;letter-spacing:.14px}.entry_b .entry_m .goods_i div p{margin-top:.84375rem;font-size:.875rem;color:#fff}.entry_b .entry_m .goods_i div .input,.entry_b .entry_m .goods_i div span:nth-child(2){font-size:.75rem;color:#9e9e9e;letter-spacing:.12px}.entry_b .entry_m .goods_i div .input{width:12.3125rem;background-color:#232323;margin-left:1.25rem}.entry_b .entry_m .goods_i div input::-webkit-input-placeholder{color:#9e9e9e;font-size:.75rem}.entry_b .entry_m .goods_i div .label{margin-top:.4375rem;display:inline-block;min-width:3.1875rem;height:1.3625rem;line-height:1.3625rem;font-size:.75rem;color:#9b9b9b;border:1px solid #9e9e9e;border-radius:.875rem;text-align:center;padding:0 .625rem;margin-right:.75rem;margin-bottom:.666667rem}.entry_b .entry_m .goods_i div .labelbj{color:#4a8ada;border:1px solid #4a8ada}.entry_b .entry_m .goods_i div .butn{display:inline-block;width:4.466667rem;height:1.8rem;border-radius:.4rem;font-size:.75rem;color:#fff;text-align:center;line-height:1.8rem;margin-top:0}.entry_b .entry_m .goods_i div .background1{background:#4a8ada}.entry_b .entry_m .goods_i div .background2{background:#232323;border:1px solid #5b5b5b;border-radius:.4rem}.entry_b .entry_m .goods_i div .select{display:inline-block;width:5.9375rem;height:1.75rem;border:.0625rem solid #979797;border-radius:.0625rem;background:#232323;margin-left:1.4375rem}.entry_b .entry_m .goods_i div a{margin:.75rem;color:#fff;font-size:.875rem}.entry_b .entry_m .goods_i div a.choose{display:inline-block;width:16.6rem;height:1.666667rem;line-height:1.666667rem;font-size:.8rem;color:#4a8ada;margin-left:1.2rem;margin-right:0;background:url("+s(i(363))+") no-repeat;background-size:1rem;background-position:100%}.entry_b .entry_m .goods_c p{margin:.4rem 0 0;font-size:1rem;color:#fff;letter-spacing:.16px}.entry_b .entry_m .goods_c .div_m{height:3.21875rem;width:100%;border-bottom:.0625rem solid hsla(0,0%,85%,.19)}.entry_b .entry_m .goods_c .div_m span{display:inline-block;line-height:3.21875rem}.entry_b .entry_m .goods_c .div_m span:first-child{font-size:.875rem;color:#fff;letter-spacing:.14px}.entry_b .entry_m .goods_c .div_m input,.entry_b .entry_m .goods_c .div_m span:nth-child(2){font-size:.75rem;color:#9e9e9e;letter-spacing:.12px}.entry_b .entry_m .goods_c .div_m input{width:12.3125rem;background-color:#232323;margin-left:1.25rem}.entry_b .entry_m .goods_c .div_m input::-webkit-input-placeholder{color:#9e9e9e;font-size:.75rem}.entry_b .entry_m .goods_c .div_m .cent{text-align:center}.entry_b .entry_m .goods_c .div_m .time{display:inline-block;width:6.333333rem;height:1.6rem;line-height:1.6rem;border:.066667rem solid #979797;border-radius:1px;font-size:.8rem;color:#9e9e9e;margin-left:1rem;background:url("+s(i(362))+') no-repeat;background-size:.8rem;background-position:95%;padding-left:.2rem}.entry_b .entry_m .goods_c .div_m .xztime{position:absolute;z-index:99999;width:6.333333rem;background:#464646;margin-top:-.8rem;margin-left:4.533333rem;overflow-y:scroll;height:10rem}.entry_b .entry_m .goods_c .div_m .xztime label{display:inline-block;width:4.533333rem;height:2.2rem;line-height:2.2rem;font-size:.8rem;text-align:center;margin-left:.9rem;color:#e1e1e1;border-bottom:1px solid #5f5f5f}.entry_b .entry_m .goods_m p{margin:.6rem;font-size:1rem;color:#fff;letter-spacing:.16px;padding-bottom:5.066667rem}.entry_b .tt_ss{position:relative}.entry_b .tt_ss textarea{position:absolute;width:22.23333rem;height:8.466667rem;background:#282828;border:1px solid hsla(0,0%,59%,.21);margin-bottom:1.25rem;z-index:9999;margin-top:-5.066667rem;margin-left:1.3533rem}.entry_b .tt_ss .tex_span{position:absolute;font-family:PingFangSC-Regular;font-size:.866667rem;color:#5f5f5f;z-index:99999;right:2rem;margin-top:2rem}.entry_b .but{width:15.625rem;height:2.375rem;background:#d1324e;box-shadow:0 2px 10px 0 rgba(0,0,0,.5);border-radius:87px;margin-left:4.75rem;text-align:center;font-size:1.25rem;color:#fff;letter-spacing:-1.56px;line-height:2.375rem;margin-bottom:1.25rem;margin-top:6.4375rem}.switch{width:57px;height:4px;position:relative;border:1px solid #9b9b9b;background-color:#9b9b9b;box-shadow:inset 0 0 0 0 #9b9b9b;border-radius:20px;background-clip:content-box;display:inline-block;-webkit-appearance:none;user-select:none;outline:none}.switch:before{content:"";width:22px;height:22px;position:absolute;top:-10px;left:-2px;border-radius:20px;background-color:#4a8ada;box-shadow:0 1px 3px rgba(0,0,0,.4)}.switch:checked{border-color:#9b9b9b;box-shadow:inset 0 0 0 16px #9b9b9b;background-color:#9b9b9b}.switch:checked:before{left:34px}.switch.switch-anim{transition:border .4s cubic-bezier(0,0,0,1),box-shadow .4s cubic-bezier(0,0,0,1)}.switch.switch-anim:before{transition:left .3s}.switch.switch-anim:checked{box-shadow:inset 0 0 0 16px #9b9b9b;background-color:#9b9b9b;transition:border .4s ease,box-shadow .4s ease,background-color 1.2s ease}.switch.switch-anim:checked:before{transition:left .3s}',""])},366:function(t,e,i){var s=i(365);"string"==typeof s&&(s=[[t.i,s,""]]),s.locals&&(t.exports=s.locals);(0,i(1).default)("262f8696",s,!0,{})},436:function(t,e,i){"use strict";i.r(e);var s=i(91),o=i.n(s);for(var r in s)"default"!==r&&function(t){i.d(e,t,function(){return s[t]})}(r);var n=i(169),a=i(0);var c=function(t){i(366)},l=Object(a.a)(o.a,n.a,n.b,!1,c,null,null);e.default=l.exports},91:function(t,e,i){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var s=a(i(121)),o=a(i(120));i(119),i(118),i(104);var r=a(i(5)),n=i(18);function a(t){return t&&t.__esModule?t:{default:t}}e.default={data:function(){return{items:[],goodsNum:"",isbjg:!0,isTime:!1,isthickness:!1,choose_co:!0,goodsType:[],listType:[],goodt_n:"选择商品分类",flname:"一级分类",tagList:[],lab0:!1,lab1:!1,lab2:!1,lab3:!1,goodsName:"",price:"",copyright_num:"",copyright_price:"",tag:[],isUp:!0,make_time:"选择创作时间",datum:"",format:"",goodsDescribe:"",count:"",categories:"",smallclass:"",are:0,ttList:[],imgUrl:[],i:0}},components:{"mt-swipe":o.default,"mt-swipe-item":s.default},watch:{goodsDescribe:function(t){t.length<400&&(this.goodsDescribe=this.goodsDescribe.slice(0,400),this.are=400),this.are=t.length}},created:function(){this.initData()},methods:{initData:function(){var t=this;r.default.ajax.post("/mall/datas/getDatas.do",{code:"goodstag"}).then(function(e){t.tagList=e.data||[]}).catch(),r.default.ajax.post("/mall/goods/getYears.do").then(function(e){t.ttList=e.data.list||[]}).catch()},generate:function(){var t=this;this.isbjg=!1,r.default.ajax.post("/mall/goods/goodsNum.do").then(function(e){t.goodsNum=e.data.goodsNum||""}).catch()},opimg:function(t){(0,n._openimg)(t)},goodsfl:function(){var t=this;this.isthickness=!0,this.flname="一级分类",this.choose_co=!0,r.default.ajax.post("/mall/goodstype/goodsType.do").then(function(e){t.goodsType=e.data||[],t.listType=t.goodsType||[]})},click_in:function(t){this.choose_co?(this.listType=this.goodsType[t].list,this.flname=this.goodsType[t].name,this.categories=this.goodsType[t].id,this.choose_co=!1):(this.smallclass=this.listType[t].id,this.goodt_n=this.flname+"--"+this.listType[t].name,this.isthickness=!1)},cl_img:function(){this.isthickness=!1},cl_time:function(){this.isTime=!this.isTime},year:function(t){this.make_time=t,this.isTime=!1},check:function(t){this.isUp=!this.isUp},cl_tag:function(t,e){if(-1==t.target.className.indexOf("labelbj"))t.target.className="label labelbj",this.tag.push(e);else{t.target.className="label";var i=this.tag.indexOf(e);this.tag.splice(i,1)}},validation:function(){var t=this;""!=this.copyright_num?r.default.ajax.post("/mall/auth_copyright/validate.do",{number:this.copyright_num}).then(function(e){200==e.code&&(t.Toast("验证通过"),t.i++)}).catch():this.Toast("输入版权编号")},onUpload:function(t){var e=this;if(this.items.length>4)return this.Toast("最多上传5张"),!1;(new FileReader).readAsDataURL(t.target.files[0]);var i=new FormData;i.append("file",t.target.files[0]),r.default.ajax.post("/mall/shop/upload.do",i).then(function(t){var i=new Image;i.src=t.data.urlShow,i.onload=function(){var s=Number(i.width)>Number(2*i.height);e.items.push({url:t.data.urlShow,iswht:s}),e.imgUrl.push(t.data.url)}}).catch()},compress:function(t){var e=new Image;e.onload=function(){var t=document.createElement("canvas"),i=t.getContext("2d");e.height>300&&(e.width*=300/e.height,e.height=300),t.width=e.width,t.height=e.height,i.clearRect(0,0,t.width,t.height),i.drawImage(e,0,0,e.width,e.height);t.toDataURL("image/jpeg",1)},e.src=t},goodsSave:function(){var t=this;if(""==this.goodsName)return this.Toast("请填写商品名称"),!1;if(""==this.goods_num)return this.Toast("请填写商品编号"),!1;if(""==this.goodsTypeId)return this.Toast("请选择商品分类"),!1;if(0==this.imgUrl.length)return this.Toast("请上传商品图片"),!1;if(""==this.smallclass)return this.Toast("请选择商品分类"),!1;if(""==this.count)return this.Toast("请输入数量"),!1;if(this.price.length>8)return this.Toast("商品价格超过8位数"),!1;if(this.copyright_price.length>8)return this.Toast("版权价格超过8位数"),!1;if(""==this.price&&""==this.copyright_price)return this.Toast("请填写商品价格或版权价格"),!1;if(""==this.price&&""!=this.copyright_price){if(""==this.copyright_num)return this.Toast("请输入版权编号并进行验证"),!1;if(!(this.i>0))return this.Toast("请进行版权编号验证"),!1}else if(""!=this.price&&""==this.copyright_price);else if(""!=this.price&&""!=this.copyright_price){if(""==this.copyright_num)return this.Toast("请输入版权编号并进行验证"),!1;if(!(this.i>0))return this.Toast("请进行版权编号验证"),!1}if(""!=this.price||""!=this.copyright_price){var e={goodsName:this.goodsName,goods_num:this.goodsNum,price:this.price,goodsTypeId:this.smallclass+"",copyright_num:this.copyright_num,copyright_price:this.copyright_price,tag:this.tag.join(","),isUp:this.isUp?"1":"0",make_time:"选择创作时间"==this.make_time?"":this.make_time,datum:this.datum,format:this.format,goodsDescribe:this.goodsDescribe,count:this.count,imgUrl:this.imgUrl.join(",")};r.default.ajax.post("/mall/goods/goodsSave.do",e).then(function(e){200==e.code&&(t.Toast("商品添加成功"),setTimeout(function(){history.back()},2e3)),window.localStorage.clear()}).catch()}},library:function(){if(this.items.length>4)return this.Toast("最多上传5张"),!1;this.$router.push({path:"/library-into"})}}}}}]);