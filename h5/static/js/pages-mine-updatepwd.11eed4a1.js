(self["webpackChunkhello_uniapp"] = self["webpackChunkhello_uniapp"] || []).push([[656],{

/***/ 34687:
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(64131);
if(content.__esModule) content = content.default;
if(typeof content === 'string') content = [[module.id, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var add = (__webpack_require__(69333)/* ["default"] */ .A)
var update = add("5745667b", content, true, {"sourceMap":false,"shadowMode":false});

/***/ }),

/***/ 54285:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": function() { return /* binding */ updatepwd; }
});

;// ./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader/index.js??clonedRuleSet-42[0].rules[0].use[0]!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-uni-app-loader/filter-modules-template.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-uni-app-loader/page-meta.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/index.js??vue-loader-options!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-scoped-loader/index.js!./src/pages/mine/updatepwd.vue?vue&type=template&id=10091fcd&scoped=true&
var components = {'uniForms': (__webpack_require__(14874)/* ["default"] */ .A),'uniFormsItem': (__webpack_require__(9844)/* ["default"] */ .A)}
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('v-uni-view',{staticClass:"personal",style:({height:_vm.containerHeight})},[_c('v-uni-view',{staticClass:"infor-list"},[_c('uni-forms',{ref:"valiForm",attrs:{"rules":_vm.rules,"modelValue":_vm.valiFormData,"validate-trigger":"bind"}},[_c('uni-forms-item',{staticClass:"list",attrs:{"label":"Original Password","required":true,"name":"password","label-width":"40%"}},[_c('v-uni-input',{attrs:{"placeholder":"Please Enter","password":_vm.password},model:{value:(_vm.valiFormData.password),callback:function ($$v) {_vm.$set(_vm.valiFormData, "password", $$v)},expression:"valiFormData.password"}}),_c('v-uni-view',{class:[!_vm.password ? 'eyeBtn' : 'eyeClass'],on:{"click":function($event){
arguments[0] = $event = _vm.$handleEvent($event);
(_vm.getpassword).apply(void 0, arguments)
}}})],1),_c('uni-forms-item',{staticClass:"list",attrs:{"label":"New Password","required":true,"name":"newPassword","label-width":"40%"}},[_c('v-uni-input',{attrs:{"placeholder":"Please Enter","password":_vm.newPassword},model:{value:(_vm.valiFormData.newPassword),callback:function ($$v) {_vm.$set(_vm.valiFormData, "newPassword", $$v)},expression:"valiFormData.newPassword"}}),_c('v-uni-view',{class:[!_vm.newPassword ? 'eyeBtn' : 'eyeClass'],on:{"click":function($event){
arguments[0] = $event = _vm.$handleEvent($event);
(_vm.getnewPassword).apply(void 0, arguments)
}}})],1),_c('uni-forms-item',{staticClass:"list",attrs:{"label":"Comfirm Password","required":true,"name":"comfirmPassword","label-width":"40%"}},[_c('v-uni-input',{attrs:{"placeholder":"Please Enter","password":_vm.comfirmPassword},model:{value:(_vm.valiFormData.comfirmPassword),callback:function ($$v) {_vm.$set(_vm.valiFormData, "comfirmPassword", $$v)},expression:"valiFormData.comfirmPassword"}}),_c('v-uni-view',{class:[!_vm.comfirmPassword ? 'eyeBtn' : 'eyeClass'],on:{"click":function($event){
arguments[0] = $event = _vm.$handleEvent($event);
(_vm.getcomfirmPassword).apply(void 0, arguments)
}}})],1)],1)],1),_c('v-uni-view',{staticClass:"bottom-btn"},[_c('v-uni-button',{staticClass:"submit",staticStyle:{"background-color":"#193c47","color":"#FFFFFF"},attrs:{"type":"default"},on:{"click":function($event){
arguments[0] = $event = _vm.$handleEvent($event);
_vm.submit()
}}},[_vm._v("Save")])],1)],1)}
var recyclableRender = false
var staticRenderFns = []


;// ./src/pages/mine/updatepwd.vue?vue&type=template&id=10091fcd&scoped=true&

// EXTERNAL MODULE: ./node_modules/core-js/modules/es.array.includes.js
var es_array_includes = __webpack_require__(74423);
// EXTERNAL MODULE: ./node_modules/core-js/modules/es.string.includes.js
var es_string_includes = __webpack_require__(21699);
// EXTERNAL MODULE: ./src/api/api.js
var api = __webpack_require__(21629);
// EXTERNAL MODULE: ./src/common/util/constants.js
var constants = __webpack_require__(36710);
;// ./node_modules/babel-loader/lib/index.js??clonedRuleSet-40[0].rules[0].use[0]!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader/index.js??clonedRuleSet-40[0].rules[0].use[1]!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader/index.js??clonedRuleSet-43[0].rules[0].use[0]!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-uni-app-loader/using-components.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/index.js??vue-loader-options!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-scoped-loader/index.js!./src/pages/mine/updatepwd.vue?vue&type=script&lang=js&


//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//



/* harmony default export */ var updatepwdvue_type_script_lang_js_ = ({
  data: function data() {
    return {
      firstLogin: "1",
      containerHeight: '800px',
      patternRules: "",
      password: true,
      newPassword: true,
      comfirmPassword: true,
      errorMessage: '',
      valiFormData: {
        password: '',
        newPassword: '',
        comfirmPassword: ''
      },
      required: {
        password: true,
        newPassword: true,
        comfirmPassword: false
      },
      // 校验规则
      requiredArr: ['password', 'newPassword', 'comfirmPassword'],
      rules: {
        password: {
          rules: [{
            required: true,
            errorMessage: 'The User Cannot Be Empty.'
          }]
        },
        newPassword: {
          rules: [{
            required: true,
            errorMessage: 'The New Password Cannot Be Empty.'
          }]
        },
        comfirmPassword: {
          rules: [{
            required: true,
            errorMessage: 'The ComfirmPassword Cannot Be Empty.'
          }, {
            validateFunction: function validateFunction(rule, value, data, callback) {
              if (value && value !== data.newPassword) {
                callback('The Two Password Entries Are Different!');
              } else {
                callback();
              }
              return true;
            }
          }]
        }
      }
    };
  },
  created: function created() {
    var info = uni.getSystemInfoSync();
    if (info.uniPlatform.toLowerCase() === 'app') {
      plus.navigator.setStatusBarStyle("dark");
    }
    this.getPatternRules();
    // this.$store.dispatch('fetchUserRole',this.$store.getters.userid);
  },
  onLoad: function onLoad(e) {
    this.getScreenHeight();
    var info = uni.getSystemInfoSync();
    if (e && e.firstLogin) {
      this.firstLogin = e.firstLogin;
    }
    if (info.uniPlatform.toLowerCase() === 'app') {
      plus.navigator.setStatusBarStyle("dark");
    }
  },
  onShow: function onShow() {
    var info = uni.getSystemInfoSync();
    if (info.uniPlatform.toLowerCase() === 'app') {
      plus.navigator.setStatusBarStyle("dark");
    }
  },
  methods: {
    getPatternRules: function getPatternRules() {
      var userRole = this.$store.state.userRole;
      if (userRole.includes("admin") || userRole.includes("test_sys_admin")) {
        this.patternRules = /^(?=.*[A-Z]|.*[\W_])(?=.*[A-Z]|.*[a-z])(?=.*[A-Z]|.*\d)(?=.*[a-z]|.*[\W_])(?=.*[a-z]|.*\d)(?=.*\d|.*[\W_]).{15,}$/;
        this.errorMessage = 'A 15-Bit Combination (Uppercase Letters, Lowercase Letters, Numbers And Special Characters) Containing At Least Three Of the Following Four Conditions.';
      } else {
        this.patternRules = /^(?=.*[A-Z]|.*[\W_])(?=.*[A-Z]|.*[a-z])(?=.*[A-Z]|.*\d)(?=.*[a-z]|.*[\W_])(?=.*[a-z]|.*\d)(?=.*\d|.*[\W_]).{12,}$/;
        this.errorMessage = 'A 12-Bit Combination (Uppercase Letters, Lowercase Letters, Numbers And Special Characters) Containing At Least Three Of The Following four Conditions.';
      }
      this.$set(this.rules, 'newPassword', {
        rules: [{
          required: true,
          errorMessage: 'The NewPassword Cannot Be Empty.'
        }, {
          pattern: this.patternRules,
          errorMessage: this.errorMessage
        }, {
          validateFunction: function validateFunction(rule, value, data, callback) {
            if (value && value == data.password) {
              callback('The New Password Cannot Be The Same As The Old Password!');
            } else {
              callback();
            }
            return true;
          }
        }],
        label: 'newPassword',
        validateTrigger: 'submit'
      });
    },
    getScreenHeight: function getScreenHeight() {
      var _this = this;
      uni.getSystemInfo({
        success: function success(res) {
          _this.containerHeight = res.windowHeight + 'px';
        }
      });
    },
    getpassword: function getpassword() {
      this.password = !this.password;
    },
    getnewPassword: function getnewPassword() {
      this.newPassword = !this.newPassword;
    },
    getcomfirmPassword: function getcomfirmPassword() {
      this.comfirmPassword = !this.comfirmPassword;
    },
    submit: function submit() {
      var _this2 = this;
      var that = this;
      this.$refs.valiForm.validateField(this.requiredArr).then(function (res) {
        if (that.valiFormData != null) {
          var sm2 = (__webpack_require__(37208).sm2);
          var publicKey = '0494006b520344b99a1fcdf1b498281fa37abb391c925cdc30a59be27507add5b74ae062d8329e0147c272d5eabcb503a5ffa3ac8c0dcbd60b5e6464d9a088411b';
          var params = {
            // confirmpassword: sm2.doEncrypt(this.valiFormData.comfirmPassword, publicKey),
            password: sm2.doEncrypt(_this2.valiFormData.newPassword, publicKey),
            username: _this2.$store.state.user.username
          };
          _this2.$http.put(_this2.$apiUrl + '/sys/user/changeMyPassword', params).then(function (res) {
            if (res.data.success) {
              uni.showToast({
                icon: 'none',
                title: 'The Password Is Changed Successfully. Please Log In Again'
              });
              setTimeout(function () {
                api/* default */.A.logout().then(function (res) {
                  uni.clearStorageSync();
                  uni.navigateTo({
                    url: '/pages/login/login'
                  });
                });
              }, 1500);
            } else {
              uni.showToast({
                icon: 'error',
                title: 'Modification Failure'
              });
            }
          });
        }
      }).catch(function (err) {
        console.log('err', err);
      });
    }
  }
});
;// ./src/pages/mine/updatepwd.vue?vue&type=script&lang=js&
 /* harmony default export */ var mine_updatepwdvue_type_script_lang_js_ = (updatepwdvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/@dcloudio/vue-cli-plugin-uni/packages/h5-vue-style-loader/index.js??clonedRuleSet-22[0].rules[0].use[0]!./node_modules/css-loader/dist/cjs.js??clonedRuleSet-22[0].rules[0].use[1]!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader/index.js??clonedRuleSet-22[0].rules[0].use[2]!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-22[0].rules[0].use[3]!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-22[0].rules[0].use[4]!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/sass-loader/dist/cjs.js??clonedRuleSet-22[0].rules[0].use[5]!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader/index.js??clonedRuleSet-22[0].rules[0].use[6]!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/index.js??vue-loader-options!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-scoped-loader/index.js!./src/pages/mine/updatepwd.vue?vue&type=style&index=0&id=10091fcd&lang=scss&scoped=true&
var updatepwdvue_type_style_index_0_id_10091fcd_lang_scss_scoped_true_ = __webpack_require__(34687);
;// ./src/pages/mine/updatepwd.vue?vue&type=style&index=0&id=10091fcd&lang=scss&scoped=true&
 /* harmony default export */ var mine_updatepwdvue_type_style_index_0_id_10091fcd_lang_scss_scoped_true_ = ((/* unused pure expression or super */ null && (mod))); 
// EXTERNAL MODULE: ./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(18535);
;// ./src/pages/mine/updatepwd.vue

var renderjs
;

;


/* normalize component */

var component = (0,componentNormalizer/* default */.A)(
  mine_updatepwdvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  null,
  "10091fcd",
  null,
  false,
  components,
  renderjs
)

/* harmony default export */ var updatepwd = (component.exports);

/***/ }),

/***/ 64131:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(31601);
/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(76314);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(4417);
/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__);
// Imports



var ___CSS_LOADER_URL_IMPORT_0___ = new URL(/* asset import */ __webpack_require__(12910), __webpack_require__.b);
var ___CSS_LOADER_URL_IMPORT_1___ = new URL(/* asset import */ __webpack_require__(89607), __webpack_require__.b);
var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
var ___CSS_LOADER_URL_REPLACEMENT_0___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_0___);
var ___CSS_LOADER_URL_REPLACEMENT_1___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_1___);
// Module
___CSS_LOADER_EXPORT___.push([module.id, "@charset \"UTF-8\";\n/**\n * 这里是uni-app内置的常用样式变量\n *\n * uni-app 官方扩展插件及插件市场（https://ext.dcloud.net.cn）上很多三方插件均使用了这些样式变量\n * 如果你是插件开发者，建议你使用scss预处理，并在插件代码中直接使用这些变量（无需 import 这个文件），方便用户通过搭积木的方式开发整体风格一致的App\n *\n */\n/**\n * 如果你是App开发者（插件使用者），你可以通过修改这些变量来定制自己的插件主题，实现自定义主题功能\n *\n * 如果你的项目同样使用了scss预处理，你也可以直接在你的 scss 代码中使用如下变量，同时无需 import 这个文件\n */\n/* 颜色变量 */\n/* 行为相关颜色 */\n/* 文字基本颜色 */\n/* 背景颜色 */\n/* 边框颜色 */\n/* 尺寸变量 */\n/* 文字尺寸 */\n/* 图片尺寸 */\n/* Border Radius */\n/* 水平间距 */\n/* 垂直间距 */\n/* 透明度 */\n/* 文章场景相关 */.eyeBtn[data-v-10091fcd]{width:22px;height:22px;top:15px;right:10px;z-index:9;background:url(" + ___CSS_LOADER_URL_REPLACEMENT_0___ + ") no-repeat 50%;background-size:20px}.eyeClass[data-v-10091fcd]{width:22px;height:22px;top:15px;right:10px;z-index:9;background:url(" + ___CSS_LOADER_URL_REPLACEMENT_1___ + ") no-repeat 50%;background-size:20px}[data-v-10091fcd] .uni-forms-item__content{display:flex;justify-content:space-between}.personal[data-v-10091fcd]{width:100%;background-color:#f2f2f2;margin-bottom:%?152?%;padding-top:env(safe-area-inset-top); /* 兼容 iOS 11.0-11.4 */padding-top:constant(safe-area-inset-top) /* 兼容 iOS 12.0-12.1 */}.bottom-btn[data-v-10091fcd]{position:fixed;left:0;right:0;bottom:0;box-sizing:border-box;padding:%?20?% %?32?%;background-color:#fff}.bottom-btn .submit[data-v-10091fcd]{border-radius:%?10?%}.infor-list[data-v-10091fcd]{display:block;width:100%;color:#000!important;box-sizing:border-box}.infor-list .lis-title[data-v-10091fcd]{padding:0 %?32?%;line-height:%?72?%;color:#777;position:relative}.infor-list .lis-title[data-v-10091fcd]::before{content:\"\";position:absolute;left:%?16?%;height:36%;width:%?6?%;background-color:#0289fe;top:%?24?%;border-radius:%?8?%}.infor-list .list[data-v-10091fcd]{margin-bottom:%?16?%;padding:0 %?32?%;background-color:#fff;box-sizing:border-box;width:100%;height:%?240?%;overflow:auto;display:flex;align-items:center;border-bottom:%?1?% solid #ececec}.infor-list .list .list-part[data-v-10091fcd]{flex:1}.infor-list .list .list-part .title-time[data-v-10091fcd]{display:flex;justify-content:space-between;align-items:center}.infor-list .list .list-part .title-time uni-text[data-v-10091fcd]:first-of-type{padding-right:%?20?%;color:#262626;font-size:%?30?%}.infor-list .list .list-part .title-time uni-input[data-v-10091fcd]{font-size:%?30?%;color:#9e9e9e;line-height:%?56?%;flex:1;text-align:right}.infor-list .list .list-part .title-time .uni-input-placeholder[data-v-10091fcd]{color:#ccc}[data-v-10091fcd] .uni-data-checklist .checklist-group .checklist-box{margin-right:0}[data-v-10091fcd] .uni-data-checklist .checklist-group{justify-content:flex-end}", ""]);
// Exports
/* harmony default export */ __webpack_exports__["default"] = (___CSS_LOADER_EXPORT___);


/***/ })

}]);
//# sourceMappingURL=pages-mine-updatepwd.11eed4a1.js.map