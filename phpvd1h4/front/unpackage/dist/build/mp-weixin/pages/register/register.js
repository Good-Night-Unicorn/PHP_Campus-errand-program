(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/register/register"],{"0bd5":function(e,t,n){},4461:function(e,t,n){"use strict";(function(e){n("780c");a(n("66fd"));var t=a(n("c7b0"));function a(e){return e&&e.__esModule?e:{default:e}}e(t.default)}).call(this,n("543d")["createPage"])},"85e7":function(e,t,n){"use strict";var a=n("0bd5"),u=n.n(a);u.a},c7b0:function(e,t,n){"use strict";n.r(t);var a=n("d40b"),u=n("cd25");for(var i in u)"default"!==i&&function(e){n.d(t,e,(function(){return u[e]}))}(i);n("85e7");var r,o=n("f0c5"),s=Object(o["a"])(u["default"],a["b"],a["c"],!1,null,"dd43d46a",null,!1,a["a"],r);t["default"]=s.exports},cd25:function(e,t,n){"use strict";n.r(t);var a=n("e569"),u=n.n(a);for(var i in a)"default"!==i&&function(e){n.d(t,e,(function(){return a[e]}))}(i);t["default"]=u.a},d40b:function(e,t,n){"use strict";var a;n.d(t,"b",(function(){return u})),n.d(t,"c",(function(){return i})),n.d(t,"a",(function(){return a}));var u=function(){var e=this,t=e.$createElement;e._self._c},i=[]},e569:function(e,t,n){"use strict";(function(e){Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var a=u(n("a34a"));function u(e){return e&&e.__esModule?e:{default:e}}function i(e,t,n,a,u,i,r){try{var o=e[i](r),s=o.value}catch(l){return void n(l)}o.done?t(s):Promise.resolve(s).then(a,u)}function r(e){return function(){var t=this,n=arguments;return new Promise((function(a,u){var r=e.apply(t,n);function o(e){i(r,a,u,o,s,"next",e)}function s(e){i(r,a,u,o,s,"throw",e)}o(void 0)}))}}var o={data:function(){return{yonghuxingbieOptions:[],yonghuxingbieIndex:0,paotuiyuanxingbieOptions:[],paotuiyuanxingbieIndex:0,ruleForm:{},emailcode:"",tableName:""}},onLoad:function(){var t=this;return r(a.default.mark((function n(){var u;return a.default.wrap((function(n){while(1)switch(n.prev=n.next){case 0:[],u=e.getStorageSync("loginTable"),t.tableName=u,"yonghu"==t.tableName&&(t.yonghuxingbieOptions="男,女".split(","),t.ruleForm.xingbie=t.yonghuxingbieOptions[0]),"paotuiyuan"==t.tableName&&(t.paotuiyuanxingbieOptions="男,女".split(","),t.ruleForm.xingbie=t.paotuiyuanxingbieOptions[0]),t.styleChange();case 6:case"end":return n.stop()}}),n)})))()},methods:{yonghuxingbieChange:function(e){this.yonghuxingbieIndex=e.target.value,this.ruleForm.xingbie=this.yonghuxingbieOptions[this.yonghuxingbieIndex]},paotuiyuanxingbieChange:function(e){this.paotuiyuanxingbieIndex=e.target.value,this.ruleForm.xingbie=this.paotuiyuanxingbieOptions[this.paotuiyuanxingbieIndex]},styleChange:function(){this.$nextTick((function(){}))},getUUID:function(){return(new Date).getTime()},register:function(){var e=this;return r(a.default.mark((function t(){return a.default.wrap((function(t){while(1)switch(t.prev=t.next){case 0:if(e.ruleForm.gerenzhanghao||"yonghu"!=e.tableName){t.next=3;break}return e.$utils.msg("个人账号不能为空"),t.abrupt("return");case 3:if(e.ruleForm.mima||"yonghu"!=e.tableName){t.next=6;break}return e.$utils.msg("密码不能为空"),t.abrupt("return");case 6:if(e.ruleForm.xingming||"yonghu"!=e.tableName){t.next=9;break}return e.$utils.msg("姓名不能为空"),t.abrupt("return");case 9:if("yonghu"!=e.tableName||!e.ruleForm.youxiang||e.$validate.isEmail(e.ruleForm.youxiang)){t.next=12;break}return e.$utils.msg("邮箱应输入邮件格式"),t.abrupt("return");case 12:if("yonghu"!=e.tableName||!e.ruleForm.shoujihaoma||e.$validate.isMobile(e.ruleForm.shoujihaoma)){t.next=15;break}return e.$utils.msg("手机号码应输入手机格式"),t.abrupt("return");case 15:if(e.ruleForm.paotuizhanghao||"paotuiyuan"!=e.tableName){t.next=18;break}return e.$utils.msg("跑腿账号不能为空"),t.abrupt("return");case 18:if(e.ruleForm.mima||"paotuiyuan"!=e.tableName){t.next=21;break}return e.$utils.msg("密码不能为空"),t.abrupt("return");case 21:if(e.ruleForm.paotuixingming||"paotuiyuan"!=e.tableName){t.next=24;break}return e.$utils.msg("跑腿姓名不能为空"),t.abrupt("return");case 24:if("paotuiyuan"!=e.tableName||!e.ruleForm.youxiang||e.$validate.isEmail(e.ruleForm.youxiang)){t.next=27;break}return e.$utils.msg("邮箱应输入邮件格式"),t.abrupt("return");case 27:if("paotuiyuan"!=e.tableName||!e.ruleForm.lianxishouji||e.$validate.isMobile(e.ruleForm.lianxishouji)){t.next=30;break}return e.$utils.msg("联系手机应输入手机格式"),t.abrupt("return");case 30:return t.next=32,e.$api.register("".concat(e.tableName),e.ruleForm,e.emailcode);case 32:e.$utils.msgBack("注册成功");case 34:case"end":return t.stop()}}),t)})))()}}};t.default=o}).call(this,n("543d")["default"])}},[["4461","common/runtime","common/vendor"]]]);