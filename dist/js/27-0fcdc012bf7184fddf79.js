(window.webpackJsonp=window.webpackJsonp||[]).push([[27],{123:function(t,e,n){"use strict";n.d(e,"a",function(){return a}),n.d(e,"b",function(){return i});var a=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"zheng_detail"},[n("div",{staticClass:"top"},[n("img",{attrs:{src:t.url1,alt:""}}),t._v(" "),n("img",{attrs:{src:t.url2,alt:""}})]),t._v(" "),n("div",{staticClass:"content"}),t._v(" "),n("div",{staticClass:"content"},[n("span",{staticClass:"content_tishi"},[t._v("注：点击二维码可查看更多证书详情")]),t._v(" "),n("p",{staticClass:"content_title"},[t._v("版权登记")]),t._v(" "),n("p",{staticClass:"line_2"}),t._v(" "),n("p",{staticClass:"content_word"},[t._v("版权登记证书已申请")]),t._v(" "),n("img",{staticClass:"content_zheng",attrs:{src:t.b_url,alt:""}}),t._v(" "),n("p",{staticClass:"content_title"},[t._v("版权记录")]),t._v(" "),n("p",{staticClass:"line_2"}),t._v(" "),n("p",{staticClass:"content_word"},[t._v("当前著作人  "+t._s(t.it.new_realname))]),t._v(" "),t._l(t.changeDetail,function(e,a){return n("div",{key:a,staticClass:"change_content"},[n("p",{staticClass:"change_desc"},[t._v(t._s(e.createTime)+"   "+t._s(e.new_realname)+"转让给"+t._s(e.old_realname))])])})],2)])},i=[]},246:function(t,e,n){(t.exports=n(2)(!1)).push([t.i,".zheng_detail{color:#e5e5e5;font-size:.8rem}.zheng_detail .top>img{width:100%}.zheng_detail .top .bj_write{background:#f0f0f0}.zheng_detail .content{padding:0 1.2rem;box-sizing:border-box;text-align:justify;margin-top:1rem}.zheng_detail .content p{line-height:1.066667rem}.zheng_detail .content .content_title{margin-bottom:1rem}.zheng_detail .content .change_content{height:1.25rem;line-height:1.25rem}.zheng_detail .content .change_content .change_desc{font-family:PingFangSC-Regular;font-size:.875rem;color:#fff}.zheng_detail .content .line_2{width:100%;height:.066667rem;background:hsla(0,0%,85%,.19);transform:scaleY(.5)}.zheng_detail .content .content_zheng{width:100%;margin-top:.4375rem}.zheng_detail .content .content_tishi{font-family:PingFangSC-Regular;font-size:.75rem;color:#9b9b9b;letter-spacing:-.033125rem;text-align:center;margin-left:4.6875rem}.zheng_detail .content .content_title{font-family:PingFangSC-Semibold;font-size:1.125rem;color:#fff;letter-spacing:-.033125rem;margin-top:1.25rem}.zheng_detail .content .content_word{font-family:PingFangSC-Light;font-size:.625rem;color:#9b9b9b;letter-spacing:-.033125rem;margin-top:.28125rem}",""])},247:function(t,e,n){var a=n(246);"string"==typeof a&&(a=[[t.i,a,""]]),a.locals&&(t.exports=a.locals);(0,n(1).default)("7e6dd708",a,!0,{})},393:function(t,e,n){"use strict";n.r(e);var a=n(47),i=n.n(a);for(var r in a)"default"!==r&&function(t){n.d(e,t,function(){return a[t]})}(r);var l=n(123),o=n(0);var c=function(t){n(247)},s=Object(o.a)(i.a,l.a,l.b,!1,c,null,null);e.default=s.exports},47:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var a,i=n(5);(a=i)&&a.__esModule;e.default={data:function(){return{number:null,block_cert_numbere:null,url1:null,url2:null,b_url:null,changeDetail:[]}},created:function(){var t=this,e=this.$route.query.number,n=this.$route.query.block_cert_numbere;this.block_cert_numbere=e;var a={block_cert_numbere:n};this.util.ajax.post("/admin/authCopyright/getCopyrightDataDetails.do",a).then(function(e){200==e.code&&(t.url1=e.data.c_url1,t.url2=e.data.c_url2,t.b_url=e.data.b_url)}),this.number=e,this.util.ajax.get("/admin/authCopyright/bq_change.do?number="+this.number).then(function(e){200==e.code&&(t.changeDetail=e.data||{})})}}}}]);