(window.webpackJsonp=window.webpackJsonp||[]).push([[62],{167:function(r,i,t){"use strict";t.d(i,"a",function(){return e}),t.d(i,"b",function(){return o});var e=function(){var r=this,i=r.$createElement,t=r._self._c||i;return t("div",{staticClass:"work_m"},[t("div",{staticClass:"work_l"},r._l(r.list_l,function(i){return t("div",{key:i.id,staticClass:"img_max",on:{click:function(t){r.on_img(i)}}},[i.check?t("em"):t("span"),t("img",{attrs:{src:i.url}})])})),r._v(" "),t("div",{staticClass:"work_r"},r._l(r.list_r,function(i){return t("div",{key:i.id,staticClass:"work_r_img",on:{click:function(t){r.on_img(i)}}},[i.check?t("em"):t("span"),t("img",{attrs:{src:i.url}})])})),r._v(" "),t("div",{staticClass:"but",on:{click:r.import_img}},[t("span",[r._v("导入图片")])])])},o=[]},204:function(r,i,t){r.exports=t.p+"images/selected-yq.png"},355:function(r,i,t){var e=t(4);(r.exports=t(2)(!1)).push([r.i,".work_m{padding:.333333rem .766667rem .733333rem;display:flex;justify-content:space-between}.work_m .work_l{width:11.366667rem;height:auto;position:relative}.work_m .work_l .img_max{height:13.913333rem}.work_m .work_l .img_max,.work_m .work_l .img_min{width:11.366667rem;margin-bottom:.686667rem;-webkit-clip-path:polygon(13px 0,calc(100% - 13px) 0,100% 13px,100% calc(100% - 13px),calc(100% - 13px) 100%,13px 100%,0 calc(100% - 13px),0 13px)}.work_m .work_l .img_min{height:7.38rem}.work_m .work_l img{width:100%;height:100%}.work_m .work_l em,.work_m .work_l span{display:inline-block;position:absolute;width:.8rem;height:.8rem;border:.066667rem solid #fff;border-radius:50%;z-index:111;margin-left:10rem;margin-top:.4rem}.work_m .work_l em{background:url("+e(t(204))+") no-repeat;background-size:100%}.work_m .work_l .lib-selected{background:#282828 url("+e(t(35))+") no-repeat;background-size:1rem;background-position:5%}.work_m .work_l .lib-unselected{background:#282828 url("+e(t(34))+") no-repeat;background-size:1rem;background-position:5%}.work_m .work_r{width:11.366667rem;height:auto}.work_m .work_r .work_r_img{width:100%;height:auto}.work_m .work_r .work_r_img img{width:11.366667rem;height:16.333333rem;margin-bottom:.933333rem;-webkit-clip-path:polygon(13px 0,calc(100% - 13px) 0,100% 13px,100% calc(100% - 13px),calc(100% - 13px) 100%,13px 100%,0 calc(100% - 13px),0 13px)}.work_m .work_r .work_r_img span{border:1px solid #fff;border-radius:50%}.work_m .work_r .work_r_img em,.work_m .work_r .work_r_img span{display:inline-block;position:absolute;width:.8rem;height:.8rem;z-index:111;margin-left:10rem;margin-top:.4rem}.work_m .work_r .work_r_img em{border:.066667rem solid #fff;border-radius:50%;background:url("+e(t(204))+") no-repeat;background-size:100%}.work_m .but{width:20.133333rem;height:2.533333rem;background:#d1324e;box-shadow:0 2px 10px 0 rgba(0,0,0,.5);border-radius:5.8rem;font-size:1.333333rem;color:#fff;letter-spacing:-1.56px;text-align:center;line-height:2.533333rem;position:fixed;bottom:.733333rem;margin-left:2.133333rem}",""])},356:function(r,i,t){var e=t(355);"string"==typeof e&&(e=[[r.i,e,""]]),e.locals&&(r.exports=e.locals);(0,t(1).default)("6c1d837e",e,!0,{})},434:function(r,i,t){"use strict";t.r(i);var e=t(89),o=t.n(e);for(var n in e)"default"!==n&&function(r){t.d(i,r,function(){return e[r]})}(n);var a=t(167),s=t(0);var m=function(r){t(356)},l=Object(s.a)(o.a,a.a,a.b,!1,m,null,null);i.default=l.exports},89:function(r,i,t){"use strict";Object.defineProperty(i,"__esModule",{value:!0});var e,o=t(5),n=(e=o)&&e.__esModule?e:{default:e};i.default={data:function(){return{id:"",list_l:[],list_r:[],img:[]}},created:function(){this.id=this.$route.query.id,this.initData()},mounted:function(){},methods:{initData:function(){var r=this;n.default.ajax.post("/mall/auth_production/getProductImg.do",{productionId:this.id}).then(function(i){for(var t in r.list=i.data.list,i.data.list)t%2==0?r.list_l.push({url:i.data.list[t],check:!1}):r.list_r.push({url:i.data.list[t],check:!1})}).catch()},on_img:function(r){r.check=!r.check;var i=this.img.indexOf(r.url);i<0?this.img.push(r.url):this.img.splice(i,1)},import_img:function(){if(0==this.img.length)return this.Toast("请选择导入图片"),!1;var r=this,i=this.img,t=function(t){var e=new Image;e.src=i[t],e.onload=function(){var o=Number(e.width)>Number(2*e.height);r.$parent.items.length<6&&r.$parent.items.push({url:i[t],iswht:o})}};for(var e in i)t(e);this.$parent.imgUrl=this.$parent.imgUrl.concat(this.img).slice(0,5),history.go(-2)}}}}}]);