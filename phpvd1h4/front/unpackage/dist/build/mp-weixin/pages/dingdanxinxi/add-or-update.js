(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/dingdanxinxi/add-or-update"],{"295f":function(n,e,a){"use strict";a.r(e);var i=a("c7e5"),t=a("eab9");for(var r in t)"default"!==r&&function(n){a.d(e,n,(function(){return t[n]}))}(r);a("cb0e");var u,o=a("f0c5"),c=Object(o["a"])(t["default"],i["b"],i["c"],!1,null,"a0efe9c6",null,!1,i["a"],u);e["default"]=c.exports},"78a4":function(n,e,a){"use strict";(function(n){Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var i=t(a("a34a"));function t(n){return n&&n.__esModule?n:{default:n}}function r(n,e,a,i,t,r,u){try{var o=n[r](u),c=o.value}catch(s){return void a(s)}o.done?e(c):Promise.resolve(c).then(i,t)}function u(n){return function(){var e=this,a=arguments;return new Promise((function(i,t){var u=n.apply(e,a);function o(n){r(u,i,t,o,c,"next",n)}function c(n){r(u,i,t,o,c,"throw",n)}o(void 0)}))}}var o=function(){Promise.all([a.e("common/vendor"),a.e("components/w-picker/w-picker")]).then(function(){return resolve(a("6e4b"))}.bind(null,a)).catch(a.oe)},c={data:function(){return{cross:"",ruleForm:{dingdanbianhao:"",dingdanmingcheng:"",didianleixing:"",chufadi:"",mudedi:"",xiangguantupian:"",gerenzhanghao:"",xingming:"",shoujihaoma:"",dingdanzhuangtai:"未送达",beizhu:"",paotuizhanghao:"",paotuixingming:"",lianxishouji:"",caozuoshijian:"",sfsh:"",shhf:"",ispay:"",userid:""},dingdanzhuangtaiOptions:[],dingdanzhuangtaiIndex:0,user:{},ro:{dingdanbianhao:!1,dingdanmingcheng:!1,didianleixing:!1,chufadi:!1,mudedi:!1,xiangguantupian:!1,gerenzhanghao:!1,xingming:!1,shoujihaoma:!1,dingdanzhuangtai:!1,beizhu:!1,paotuizhanghao:!1,paotuixingming:!1,lianxishouji:!1,caozuoshijian:!1,sfsh:!1,shhf:!1,ispay:!1,userid:!1}}},components:{wPicker:o},computed:{baseUrl:function(){return this.$base.url}},onLoad:function(e){var a=this;return u(i.default.mark((function t(){var r,u,o,c;return i.default.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return a.ruleForm.caozuoshijian=a.$utils.getCurDate(),r=n.getStorageSync("nowTable"),t.next=4,a.$api.session(r);case 4:if(u=t.sent,a.user=u.data,a.ruleForm.paotuizhanghao=a.user.paotuizhanghao,a.ro.paotuizhanghao=!0,a.ruleForm.paotuixingming=a.user.paotuixingming,a.ro.paotuixingming=!0,a.ruleForm.lianxishouji=a.user.lianxishouji,a.ro.lianxishouji=!0,a.dingdanzhuangtaiOptions="未送达,运输中,已送达".split(","),a.ruleForm.userid=n.getStorageSync("userid"),e.refid&&(a.ruleForm.refid=e.refid,a.ruleForm.nickname=n.getStorageSync("nickname")),!e.id){t.next=21;break}return a.ruleForm.id=e.id,t.next=19,a.$api.info("dingdanxinxi",a.ruleForm.id);case 19:u=t.sent,a.ruleForm=u.data;case 21:if(a.cross=e.cross,!e.cross){t.next=93;break}o=n.getStorageSync("crossObj"),t.t0=i.default.keys(o);case 25:if((t.t1=t.t0()).done){t.next=93;break}if(c=t.t1.value,"dingdanbianhao"!=c){t.next=31;break}return a.ruleForm.dingdanbianhao=o[c],a.ro.dingdanbianhao=!0,t.abrupt("continue",25);case 31:if("dingdanmingcheng"!=c){t.next=35;break}return a.ruleForm.dingdanmingcheng=o[c],a.ro.dingdanmingcheng=!0,t.abrupt("continue",25);case 35:if("didianleixing"!=c){t.next=39;break}return a.ruleForm.didianleixing=o[c],a.ro.didianleixing=!0,t.abrupt("continue",25);case 39:if("chufadi"!=c){t.next=43;break}return a.ruleForm.chufadi=o[c],a.ro.chufadi=!0,t.abrupt("continue",25);case 43:if("mudedi"!=c){t.next=47;break}return a.ruleForm.mudedi=o[c],a.ro.mudedi=!0,t.abrupt("continue",25);case 47:if("xiangguantupian"!=c){t.next=51;break}return a.ruleForm.xiangguantupian=o[c],a.ro.xiangguantupian=!0,t.abrupt("continue",25);case 51:if("gerenzhanghao"!=c){t.next=55;break}return a.ruleForm.gerenzhanghao=o[c],a.ro.gerenzhanghao=!0,t.abrupt("continue",25);case 55:if("xingming"!=c){t.next=59;break}return a.ruleForm.xingming=o[c],a.ro.xingming=!0,t.abrupt("continue",25);case 59:if("shoujihaoma"!=c){t.next=63;break}return a.ruleForm.shoujihaoma=o[c],a.ro.shoujihaoma=!0,t.abrupt("continue",25);case 63:if("dingdanzhuangtai"!=c){t.next=67;break}return a.ruleForm.dingdanzhuangtai=o[c],a.ro.dingdanzhuangtai=!0,t.abrupt("continue",25);case 67:if("beizhu"!=c){t.next=71;break}return a.ruleForm.beizhu=o[c],a.ro.beizhu=!0,t.abrupt("continue",25);case 71:if("paotuizhanghao"!=c){t.next=75;break}return a.ruleForm.paotuizhanghao=o[c],a.ro.paotuizhanghao=!0,t.abrupt("continue",25);case 75:if("paotuixingming"!=c){t.next=79;break}return a.ruleForm.paotuixingming=o[c],a.ro.paotuixingming=!0,t.abrupt("continue",25);case 79:if("lianxishouji"!=c){t.next=83;break}return a.ruleForm.lianxishouji=o[c],a.ro.lianxishouji=!0,t.abrupt("continue",25);case 83:if("caozuoshijian"!=c){t.next=87;break}return a.ruleForm.caozuoshijian=o[c],a.ro.caozuoshijian=!0,t.abrupt("continue",25);case 87:if("userid"!=c){t.next=91;break}return a.ruleForm.userid=o[c],a.ro.userid=!0,t.abrupt("continue",25);case 91:t.next=25;break;case 93:a.styleChange();case 94:case"end":return t.stop()}}),t)})))()},methods:{styleChange:function(){this.$nextTick((function(){}))},caozuoshijianChange:function(n){this.ruleForm.caozuoshijian=n.target.value,this.$forceUpdate()},dingdanzhuangtaiChange:function(n){this.dingdanzhuangtaiIndex=n.target.value,this.ruleForm.dingdanzhuangtai=this.dingdanzhuangtaiOptions[this.dingdanzhuangtaiIndex]},xiangguantupianTap:function(){var n=this;this.$api.upload((function(e){n.ruleForm.xiangguantupian="upload/"+e.file,n.$forceUpdate(),n.$nextTick((function(){n.styleChange()}))}))},getUUID:function(){return(new Date).getTime()},onSubmitTap:function(){var e=this;return u(i.default.mark((function a(){var t,r,u,o,c,s,d,g,h,l;return i.default.wrap((function(a){while(1)switch(a.prev=a.next){case 0:if(!e.cross){a.next=16;break}if(o=n.getStorageSync("statusColumnName"),c=n.getStorageSync("statusColumnValue"),""==o){a.next=16;break}if(s=n.getStorageSync("crossObj"),o.startsWith("[")){a.next=12;break}for(d in s)d==o&&(s[d]=c);return g=n.getStorageSync("crossTable"),a.next=10,e.$api.update("".concat(g),s);case 10:a.next=16;break;case 12:t=Number(n.getStorageSync("userid")),r=s["id"],u=n.getStorageSync("statusColumnName"),u=u.replace(/\[/,"").replace(/\]/,"");case 16:if(!r||!t){a.next=38;break}return e.ruleForm.crossuserid=t,e.ruleForm.crossrefid=r,h={page:1,limit:10,crossuserid:t,crossrefid:r},a.next=22,e.$api.list("dingdanxinxi",h);case 22:if(l=a.sent,!(l.data.total>=u)){a.next=28;break}return e.$utils.msg(n.getStorageSync("tips")),a.abrupt("return",!1);case 28:if(!e.ruleForm.id){a.next=33;break}return a.next=31,e.$api.update("dingdanxinxi",e.ruleForm);case 31:a.next=35;break;case 33:return a.next=35,e.$api.add("dingdanxinxi",e.ruleForm);case 35:e.$utils.msgBack("提交成功");case 36:a.next=46;break;case 38:if(!e.ruleForm.id){a.next=43;break}return a.next=41,e.$api.update("dingdanxinxi",e.ruleForm);case 41:a.next=45;break;case 43:return a.next=45,e.$api.add("dingdanxinxi",e.ruleForm);case 45:e.$utils.msgBack("提交成功");case 46:case"end":return a.stop()}}),a)})))()},optionsChange:function(n){this.index=n.target.value},bindDateChange:function(n){this.date=n.target.value},getDate:function(n){var e=new Date,a=e.getFullYear(),i=e.getMonth()+1,t=e.getDate();return"start"===n?a-=60:"end"===n&&(a+=2),i=i>9?i:"0"+i,t=t>9?t:"0"+t,"".concat(a,"-").concat(i,"-").concat(t)},toggleTab:function(n){this.$refs[n].show()}}};e.default=c}).call(this,a("543d")["default"])},"82a2":function(n,e,a){},9188:function(n,e,a){"use strict";(function(n){a("780c");i(a("66fd"));var e=i(a("295f"));function i(n){return n&&n.__esModule?n:{default:n}}n(e.default)}).call(this,a("543d")["createPage"])},c7e5:function(n,e,a){"use strict";var i;a.d(e,"b",(function(){return t})),a.d(e,"c",(function(){return r})),a.d(e,"a",(function(){return i}));var t=function(){var n=this,e=n.$createElement;n._self._c},r=[]},cb0e:function(n,e,a){"use strict";var i=a("82a2"),t=a.n(i);t.a},eab9:function(n,e,a){"use strict";a.r(e);var i=a("78a4"),t=a.n(i);for(var r in i)"default"!==r&&function(n){a.d(e,n,(function(){return i[n]}))}(r);e["default"]=t.a}},[["9188","common/runtime","common/vendor"]]]);