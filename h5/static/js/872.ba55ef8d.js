(self["webpackChunkhello_uniapp"] = self["webpackChunkhello_uniapp"] || []).push([[872],{

/***/ 18866:
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

"use strict";

var $trimEnd = (__webpack_require__(43802).end);
var forcedStringTrimMethod = __webpack_require__(60706);

// `String.prototype.{ trimEnd, trimRight }` method
// https://tc39.es/ecma262/#sec-string.prototype.trimend
// https://tc39.es/ecma262/#String.prototype.trimright
module.exports = forcedStringTrimMethod('trimEnd') ? function trimEnd() {
  return $trimEnd(this);
// eslint-disable-next-line es/no-string-prototype-trimstart-trimend -- safe
} : ''.trimEnd;


/***/ }),

/***/ 33313:
/***/ (function(__unused_webpack_module, __unused_webpack_exports, __webpack_require__) {

"use strict";

var $ = __webpack_require__(46518);
var trimEnd = __webpack_require__(18866);

// `String.prototype.trimRight` method
// https://tc39.es/ecma262/#sec-string.prototype.trimend
// eslint-disable-next-line es/no-string-prototype-trimleft-trimright -- safe
$({ target: 'String', proto: true, name: 'trimEnd', forced: ''.trimRight !== trimEnd }, {
  trimRight: trimEnd
});


/***/ }),

/***/ 39202:
/***/ (function(__unused_webpack_module, __unused_webpack_exports, __webpack_require__) {

"use strict";

// TODO: Remove this line from `core-js@4`
__webpack_require__(33313);
var $ = __webpack_require__(46518);
var trimEnd = __webpack_require__(18866);

// `String.prototype.trimEnd` method
// https://tc39.es/ecma262/#sec-string.prototype.trimend
// eslint-disable-next-line es/no-string-prototype-trimstart-trimend -- safe
$({ target: 'String', proto: true, name: 'trimEnd', forced: ''.trimEnd !== trimEnd }, {
  trimEnd: trimEnd
});


/***/ }),

/***/ 43359:
/***/ (function(__unused_webpack_module, __unused_webpack_exports, __webpack_require__) {

"use strict";

// TODO: Remove this line from `core-js@4`
__webpack_require__(58934);
var $ = __webpack_require__(46518);
var trimStart = __webpack_require__(53487);

// `String.prototype.trimStart` method
// https://tc39.es/ecma262/#sec-string.prototype.trimstart
// eslint-disable-next-line es/no-string-prototype-trimstart-trimend -- safe
$({ target: 'String', proto: true, name: 'trimStart', forced: ''.trimStart !== trimStart }, {
  trimStart: trimStart
});


/***/ }),

/***/ 50207:
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(63739);
if(content.__esModule) content = content.default;
if(typeof content === 'string') content = [[module.id, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var add = (__webpack_require__(69333)/* ["default"] */ .A)
var update = add("34ea26a0", content, true, {"sourceMap":false,"shadowMode":false});

/***/ }),

/***/ 53487:
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

"use strict";

var $trimStart = (__webpack_require__(43802).start);
var forcedStringTrimMethod = __webpack_require__(60706);

// `String.prototype.{ trimStart, trimLeft }` method
// https://tc39.es/ecma262/#sec-string.prototype.trimstart
// https://tc39.es/ecma262/#String.prototype.trimleft
module.exports = forcedStringTrimMethod('trimStart') ? function trimStart() {
  return $trimStart(this);
// eslint-disable-next-line es/no-string-prototype-trimstart-trimend -- safe
} : ''.trimStart;


/***/ }),

/***/ 58934:
/***/ (function(__unused_webpack_module, __unused_webpack_exports, __webpack_require__) {

"use strict";

var $ = __webpack_require__(46518);
var trimStart = __webpack_require__(53487);

// `String.prototype.trimLeft` method
// https://tc39.es/ecma262/#sec-string.prototype.trimleft
// eslint-disable-next-line es/no-string-prototype-trimleft-trimright -- safe
$({ target: 'String', proto: true, name: 'trimStart', forced: ''.trimLeft !== trimStart }, {
  trimLeft: trimStart
});


/***/ }),

/***/ 63739:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(31601);
/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(76314);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, "@charset \"UTF-8\";\n/**\n * 这里是uni-app内置的常用样式变量\n *\n * uni-app 官方扩展插件及插件市场（https://ext.dcloud.net.cn）上很多三方插件均使用了这些样式变量\n * 如果你是插件开发者，建议你使用scss预处理，并在插件代码中直接使用这些变量（无需 import 这个文件），方便用户通过搭积木的方式开发整体风格一致的App\n *\n */\n/**\n * 如果你是App开发者（插件使用者），你可以通过修改这些变量来定制自己的插件主题，实现自定义主题功能\n *\n * 如果你的项目同样使用了scss预处理，你也可以直接在你的 scss 代码中使用如下变量，同时无需 import 这个文件\n */\n/* 颜色变量 */\n/* 行为相关颜色 */\n/* 文字基本颜色 */\n/* 背景颜色 */\n/* 边框颜色 */\n/* 尺寸变量 */\n/* 文字尺寸 */\n/* 图片尺寸 */\n/* Border Radius */\n/* 水平间距 */\n/* 垂直间距 */\n/* 透明度 */\n/* 文章场景相关 */.uni-easyinput[data-v-1cdeb3c5]{width:100%;flex:1;position:relative;text-align:left;color:#333;font-size:14px}.uni-easyinput__content[data-v-1cdeb3c5]{flex:1;width:100%;display:flex;box-sizing:border-box;flex-direction:row;align-items:center;border-color:#fff;transition-property:border-color;transition-duration:.3s}.uni-easyinput__content-input[data-v-1cdeb3c5]{width:auto;position:relative;overflow:hidden;flex:1;line-height:1;font-size:14px;height:35px}.uni-easyinput__placeholder-class[data-v-1cdeb3c5]{color:#999;font-size:12px}.is-textarea[data-v-1cdeb3c5]{align-items:flex-start}.is-textarea-icon[data-v-1cdeb3c5]{margin-top:5px}.uni-easyinput__content-textarea[data-v-1cdeb3c5]{position:relative;overflow:hidden;flex:1;line-height:1.5;font-size:14px;margin:6px;margin-left:0;height:80px;min-height:80px;min-height:80px;width:auto}.input-padding[data-v-1cdeb3c5]{padding-left:10px}.content-clear-icon[data-v-1cdeb3c5]{padding:0 5px}.label-icon[data-v-1cdeb3c5]{margin-right:5px;margin-top:-1px}.is-input-border[data-v-1cdeb3c5]{display:flex;box-sizing:border-box;flex-direction:row;align-items:center}.uni-error-message[data-v-1cdeb3c5]{position:absolute;bottom:-17px;left:0;line-height:12px;color:#e43d33;font-size:12px;text-align:left}.uni-error-msg--boeder[data-v-1cdeb3c5]{position:relative;bottom:0;line-height:22px}.is-input-error-border[data-v-1cdeb3c5]{border-color:#e43d33}.is-input-error-border .uni-easyinput__placeholder-class[data-v-1cdeb3c5]{color:#f29e99}.uni-easyinput--border[data-v-1cdeb3c5]{margin-bottom:0;padding:10px 15px;border-top:1px #eee solid}.uni-easyinput-error[data-v-1cdeb3c5]{padding-bottom:0}.is-first-border[data-v-1cdeb3c5]{border:none}.is-disabled[data-v-1cdeb3c5]{background-color:#f7f6f6;color:#d5d5d5}.is-disabled .uni-easyinput__placeholder-class[data-v-1cdeb3c5]{color:#d5d5d5;font-size:12px}", ""]);
// Exports
/* harmony default export */ __webpack_exports__["default"] = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ 68872:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  A: function() { return /* binding */ uni_easyinput; }
});

;// ./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader/index.js??clonedRuleSet-42[0].rules[0].use[0]!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-uni-app-loader/filter-modules-template.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-uni-app-loader/page-meta.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/index.js??vue-loader-options!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-scoped-loader/index.js!./src/uni_modules/uni-easyinput/components/uni-easyinput/uni-easyinput.vue?vue&type=template&id=1cdeb3c5&scoped=true&
var components = {'uniIcons': (__webpack_require__(97972)/* ["default"] */ .A)}
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('v-uni-view',{staticClass:"uni-easyinput",class:{ 'uni-easyinput-error': _vm.msg },style:(_vm.boxStyle)},[_c('v-uni-view',{staticClass:"uni-easyinput__content",class:_vm.inputContentClass,style:(_vm.inputContentStyle)},[(_vm.prefixIcon)?_c('uni-icons',{staticClass:"content-clear-icon",attrs:{"type":_vm.prefixIcon,"color":"#c0c4cc","size":"22"},on:{"click":function($event){
arguments[0] = $event = _vm.$handleEvent($event);
_vm.onClickIcon('prefix')
}}}):_vm._e(),(_vm.type === 'textarea')?_c('v-uni-textarea',{staticClass:"uni-easyinput__content-textarea",class:{ 'input-padding': _vm.inputBorder },attrs:{"name":_vm.name,"value":_vm.val,"placeholder":_vm.placeholder,"placeholderStyle":_vm.placeholderStyle,"disabled":_vm.disabled,"placeholder-class":"uni-easyinput__placeholder-class","maxlength":_vm.inputMaxlength,"focus":_vm.focused,"autoHeight":_vm.autoHeight},on:{"input":function($event){
arguments[0] = $event = _vm.$handleEvent($event);
(_vm.onInput).apply(void 0, arguments)
},"blur":function($event){
arguments[0] = $event = _vm.$handleEvent($event);
(_vm._Blur).apply(void 0, arguments)
},"focus":function($event){
arguments[0] = $event = _vm.$handleEvent($event);
(_vm._Focus).apply(void 0, arguments)
},"confirm":function($event){
arguments[0] = $event = _vm.$handleEvent($event);
(_vm.onConfirm).apply(void 0, arguments)
}}}):_c('v-uni-input',{staticClass:"uni-easyinput__content-input",style:(_vm.inputStyle),attrs:{"type":_vm.type === 'password' ? 'text' : _vm.type,"name":_vm.name,"value":_vm.val,"password":!_vm.showPassword && _vm.type === 'password',"placeholder":_vm.placeholder,"placeholderStyle":_vm.placeholderStyle,"placeholder-class":"uni-easyinput__placeholder-class","disabled":_vm.disabled,"maxlength":_vm.inputMaxlength,"focus":_vm.focused,"confirmType":_vm.confirmType},on:{"focus":function($event){
arguments[0] = $event = _vm.$handleEvent($event);
(_vm._Focus).apply(void 0, arguments)
},"blur":function($event){
arguments[0] = $event = _vm.$handleEvent($event);
(_vm._Blur).apply(void 0, arguments)
},"input":function($event){
arguments[0] = $event = _vm.$handleEvent($event);
(_vm.onInput).apply(void 0, arguments)
},"confirm":function($event){
arguments[0] = $event = _vm.$handleEvent($event);
(_vm.onConfirm).apply(void 0, arguments)
}}}),(_vm.type === 'password' && _vm.passwordIcon)?[(_vm.isVal)?_c('uni-icons',{staticClass:"content-clear-icon",class:{ 'is-textarea-icon': _vm.type === 'textarea' },attrs:{"type":_vm.showPassword ? 'eye-slash-filled' : 'eye-filled',"size":22,"color":_vm.focusShow ? _vm.primaryColor : '#c0c4cc'},on:{"click":function($event){
arguments[0] = $event = _vm.$handleEvent($event);
(_vm.onEyes).apply(void 0, arguments)
}}}):_vm._e()]:(_vm.suffixIcon)?[(_vm.suffixIcon)?_c('uni-icons',{staticClass:"content-clear-icon",attrs:{"type":_vm.suffixIcon,"color":"#c0c4cc","size":"22"},on:{"click":function($event){
arguments[0] = $event = _vm.$handleEvent($event);
_vm.onClickIcon('suffix')
}}}):_vm._e()]:[(_vm.clearable && _vm.isVal && !_vm.disabled && _vm.type !== 'textarea')?_c('uni-icons',{staticClass:"content-clear-icon",class:{ 'is-textarea-icon': _vm.type === 'textarea' },attrs:{"type":"clear","size":_vm.clearSize,"color":_vm.msg ? '#dd524d' : _vm.focusShow ? _vm.primaryColor : '#c0c4cc'},on:{"click":function($event){
arguments[0] = $event = _vm.$handleEvent($event);
(_vm.onClear).apply(void 0, arguments)
}}}):_vm._e()],_vm._t("right")],2)],1)}
var recyclableRender = false
var staticRenderFns = []


;// ./src/uni_modules/uni-easyinput/components/uni-easyinput/uni-easyinput.vue?vue&type=template&id=1cdeb3c5&scoped=true&

// EXTERNAL MODULE: ./node_modules/core-js/modules/es.array.concat.js
var es_array_concat = __webpack_require__(28706);
// EXTERNAL MODULE: ./node_modules/core-js/modules/es.number.constructor.js
var es_number_constructor = __webpack_require__(2892);
// EXTERNAL MODULE: ./node_modules/core-js/modules/es.regexp.exec.js
var es_regexp_exec = __webpack_require__(27495);
// EXTERNAL MODULE: ./node_modules/core-js/modules/es.string.replace.js
var es_string_replace = __webpack_require__(25440);
// EXTERNAL MODULE: ./node_modules/core-js/modules/es.string.trim.js
var es_string_trim = __webpack_require__(42762);
// EXTERNAL MODULE: ./node_modules/core-js/modules/es.string.trim-end.js
var es_string_trim_end = __webpack_require__(39202);
// EXTERNAL MODULE: ./node_modules/core-js/modules/es.string.trim-start.js
var es_string_trim_start = __webpack_require__(43359);
;// ./node_modules/babel-loader/lib/index.js??clonedRuleSet-40[0].rules[0].use[0]!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader/index.js??clonedRuleSet-40[0].rules[0].use[1]!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader/index.js??clonedRuleSet-43[0].rules[0].use[0]!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-uni-app-loader/using-components.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/index.js??vue-loader-options!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-scoped-loader/index.js!./src/uni_modules/uni-easyinput/components/uni-easyinput/uni-easyinput.vue?vue&type=script&lang=js&







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

/**
 * Easyinput 输入框
 * @description 此组件可以实现表单的输入与校验，包括 "text" 和 "textarea" 类型。
 * @tutorial https://ext.dcloud.net.cn/plugin?id=3455
 * @property {String}	value	输入内容
 * @property {String }	type	输入框的类型（默认text） password/text/textarea/..
 * 	@value text			文本输入键盘
 * 	@value textarea	多行文本输入键盘
 * 	@value password	密码输入键盘
 * 	@value number		数字输入键盘，注意iOS上app-vue弹出的数字键盘并非9宫格方式
 * 	@value idcard		身份证输入键盘，信、支付宝、百度、QQ小程序
 * 	@value digit		带小数点的数字键盘	，App的nvue页面、微信、支付宝、百度、头条、QQ小程序支持
 * @property {Boolean}	clearable	是否显示右侧清空内容的图标控件，点击可清空输入框内容（默认true）
 * @property {Boolean}	autoHeight	是否自动增高输入区域，type为textarea时有效（默认true）
 * @property {String }	placeholder	输入框的提示文字
 * @property {String }	placeholderStyle	placeholder的样式(内联样式，字符串)，如"color: #ddd"
 * @property {Boolean}	focus	是否自动获得焦点（默认false）
 * @property {Boolean}	disabled	是否禁用（默认false）
 * @property {Number }	maxlength	最大输入长度，设置为 -1 的时候不限制最大长度（默认140）
 * @property {String }	confirmType	设置键盘右下角按钮的文字，仅在type="text"时生效（默认done）
 * @property {Number }	clearSize	清除图标的大小，单位px（默认15）
 * @property {String}	prefixIcon	输入框头部图标
 * @property {String}	suffixIcon	输入框尾部图标
 * @property {String}	primaryColor	设置主题色（默认#2979ff）
 * @property {Boolean}	trim	是否自动去除两端的空格
 * @value both	去除两端空格
 * @value left	去除左侧空格
 * @value right	去除右侧空格
 * @value start	去除左侧空格
 * @value end		去除右侧空格
 * @value all		去除全部空格
 * @value none	不去除空格
 * @property {Boolean}	inputBorder	是否显示input输入框的边框（默认true）
 * @property {Boolean}	passwordIcon	type=password时是否显示小眼睛图标
 * @property {Object}	styles	自定义颜色
 * @event {Function}	input	输入框内容发生变化时触发
 * @event {Function}	focus	输入框获得焦点时触发
 * @event {Function}	blur	输入框失去焦点时触发
 * @event {Function}	confirm	点击完成按钮时触发
 * @event {Function}	iconClick	点击图标时触发
 * @example <uni-easyinput v-model="mobile"></uni-easyinput>
 */
function obj2strClass(obj) {
  var classess = '';
  for (var key in obj) {
    var val = obj[key];
    if (val) {
      classess += "".concat(key, " ");
    }
  }
  return classess;
}
function obj2strStyle(obj) {
  var style = '';
  for (var key in obj) {
    var val = obj[key];
    style += "".concat(key, ":").concat(val, ";");
  }
  return style;
}
/* harmony default export */ var uni_easyinputvue_type_script_lang_js_ = ({
  name: 'uni-easyinput',
  emits: ['click', 'iconClick', 'update:modelValue', 'input', 'focus', 'blur', 'confirm', 'clear', 'eyes', 'change'],
  model: {
    prop: 'modelValue',
    event: 'update:modelValue'
  },
  options: {
    virtualHost: true
  },
  inject: {
    form: {
      from: 'uniForm',
      default: null
    },
    formItem: {
      from: 'uniFormItem',
      default: null
    }
  },
  props: {
    name: String,
    value: [Number, String],
    modelValue: [Number, String],
    type: {
      type: String,
      default: 'text'
    },
    clearable: {
      type: Boolean,
      default: true
    },
    autoHeight: {
      type: Boolean,
      default: false
    },
    placeholder: {
      type: String,
      default: ' '
    },
    placeholderStyle: String,
    focus: {
      type: Boolean,
      default: false
    },
    disabled: {
      type: Boolean,
      default: false
    },
    maxlength: {
      type: [Number, String],
      default: 140
    },
    confirmType: {
      type: String,
      default: 'done'
    },
    clearSize: {
      type: [Number, String],
      default: 24
    },
    inputBorder: {
      type: Boolean,
      default: true
    },
    prefixIcon: {
      type: String,
      default: ''
    },
    suffixIcon: {
      type: String,
      default: ''
    },
    trim: {
      type: [Boolean, String],
      default: true
    },
    passwordIcon: {
      type: Boolean,
      default: true
    },
    primaryColor: {
      type: String,
      default: '#2979ff'
    },
    styles: {
      type: Object,
      default: function _default() {
        return {
          color: '#333',
          backgroundColor: '#fff',
          disableColor: '#F7F6F6',
          borderColor: '#e5e5e5'
        };
      }
    },
    errorMessage: {
      type: [String, Boolean],
      default: ''
    }
  },
  data: function data() {
    return {
      focused: false,
      val: '',
      showMsg: '',
      border: false,
      isFirstBorder: false,
      showClearIcon: false,
      showPassword: false,
      focusShow: false,
      localMsg: '',
      isEnter: false // 用于判断当前是否是使用回车操作
    };
  },
  computed: {
    // 输入框内是否有值
    isVal: function isVal() {
      var val = this.val;
      // fixed by mehaotian 处理值为0的情况，字符串0不在处理范围
      if (val || val === 0) {
        return true;
      }
      return false;
    },
    msg: function msg() {
      // console.log('computed', this.form, this.formItem);
      // if (this.form) {
      // 	return this.errorMessage || this.formItem.errMsg;
      // }
      // TODO 处理头条 formItem 中 errMsg 不更新的问题
      return this.localMsg || this.errorMessage;
    },
    // 因为uniapp的input组件的maxlength组件必须要数值，这里转为数值，用户可以传入字符串数值
    inputMaxlength: function inputMaxlength() {
      return Number(this.maxlength);
    },
    // 处理外层样式的style
    boxStyle: function boxStyle() {
      return "color:".concat(this.inputBorder && this.msg ? '#e43d33' : this.styles.color, ";");
    },
    // input 内容的类和样式处理
    inputContentClass: function inputContentClass() {
      return obj2strClass({
        'is-input-border': this.inputBorder,
        'is-input-error-border': this.inputBorder && this.msg,
        'is-textarea': this.type === 'textarea',
        'is-disabled': this.disabled
      });
    },
    inputContentStyle: function inputContentStyle() {
      var focusColor = this.focusShow ? this.primaryColor : this.styles.borderColor;
      var borderColor = this.inputBorder && this.msg ? '#dd524d' : focusColor;
      return obj2strStyle({
        'border-color': borderColor || '#e5e5e5',
        'background-color': this.disabled ? this.styles.disableColor : this.styles.backgroundColor
      });
    },
    // input右侧样式
    inputStyle: function inputStyle() {
      var paddingRight = this.type === 'password' || this.clearable || this.prefixIcon ? '' : '10px';
      return obj2strStyle({
        'padding-right': paddingRight,
        'padding-left': this.prefixIcon ? '' : '10px'
      });
    }
  },
  watch: {
    value: function value(newVal) {
      this.val = newVal;
    },
    modelValue: function modelValue(newVal) {
      this.val = newVal;
    },
    focus: function focus(newVal) {
      var _this = this;
      this.$nextTick(function () {
        _this.focused = _this.focus;
        _this.focusShow = _this.focus;
      });
    }
  },
  created: function created() {
    var _this2 = this;
    this.init();
    // TODO 处理头条vue3 computed 不监听 inject 更改的问题（formItem.errMsg）
    if (this.form && this.formItem) {
      this.$watch('formItem.errMsg', function (newVal) {
        _this2.localMsg = newVal;
      });
    }
  },
  mounted: function mounted() {
    var _this3 = this;
    this.$nextTick(function () {
      _this3.focused = _this3.focus;
      _this3.focusShow = _this3.focus;
    });
  },
  methods: {
    /**
     * 初始化变量值
     */
    init: function init() {
      if (this.value || this.value === 0) {
        this.val = this.value;
      } else if (this.modelValue || this.modelValue === 0) {
        this.val = this.modelValue;
      } else {
        this.val = null;
      }
    },
    /**
     * 点击图标时触发
     * @param {Object} type
     */
    onClickIcon: function onClickIcon(type) {
      this.$emit('iconClick', type);
    },
    /**
     * 显示隐藏内容，密码框时生效
     */
    onEyes: function onEyes() {
      this.showPassword = !this.showPassword;
      this.$emit('eyes', this.showPassword);
    },
    /**
     * 输入时触发
     * @param {Object} event
     */
    onInput: function onInput(event) {
      var value = event.detail.value;
      // 判断是否去除空格
      if (this.trim) {
        if (typeof this.trim === 'boolean' && this.trim) {
          value = this.trimStr(value);
        }
        if (typeof this.trim === 'string') {
          value = this.trimStr(value, this.trim);
        }
      }
      if (this.errMsg) this.errMsg = '';
      this.val = value;
      // TODO 兼容 vue2
      this.$emit('input', value);
      // TODO　兼容　vue3
      this.$emit('update:modelValue', value);
    },
    /**
     * 外部调用方法
     * 获取焦点时触发
     * @param {Object} event
     */
    onFocus: function onFocus() {
      var _this4 = this;
      this.$nextTick(function () {
        _this4.focused = true;
      });
      this.$emit('focus', null);
    },
    _Focus: function _Focus(event) {
      this.focusShow = true;
      this.$emit('focus', event);
    },
    /**
     * 外部调用方法
     * 失去焦点时触发
     * @param {Object} event
     */
    onBlur: function onBlur() {
      this.focused = false;
      this.$emit('focus', null);
    },
    _Blur: function _Blur(event) {
      var value = event.detail.value;
      this.focusShow = false;
      this.$emit('blur', event);
      // 根据类型返回值，在event中获取的值理论上讲都是string
      if (this.isEnter === false) {
        this.$emit('change', this.val);
      }
      // 失去焦点时参与表单校验
      if (this.form && this.formItem) {
        var validateTrigger = this.form.validateTrigger;
        if (validateTrigger === 'blur') {
          this.formItem.onFieldChange();
        }
      }
    },
    /**
     * 按下键盘的发送键
     * @param {Object} e
     */
    onConfirm: function onConfirm(e) {
      var _this5 = this;
      this.$emit('confirm', this.val);
      this.isEnter = true;
      this.$emit('change', this.val);
      this.$nextTick(function () {
        _this5.isEnter = false;
      });
    },
    /**
     * 清理内容
     * @param {Object} event
     */
    onClear: function onClear(event) {
      this.val = '';
      // TODO 兼容 vue2
      this.$emit('input', '');
      // TODO 兼容 vue2
      // TODO　兼容　vue3
      this.$emit('update:modelValue', '');
      // 点击叉号触发
      this.$emit('clear');
    },
    /**
     * 去除空格
     */
    trimStr: function trimStr(str) {
      var pos = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 'both';
      if (pos === 'both') {
        return str.trim();
      } else if (pos === 'left') {
        return str.trimLeft();
      } else if (pos === 'right') {
        return str.trimRight();
      } else if (pos === 'start') {
        return str.trimStart();
      } else if (pos === 'end') {
        return str.trimEnd();
      } else if (pos === 'all') {
        return str.replace(/\s+/g, '');
      } else if (pos === 'none') {
        return str;
      }
      return str;
    }
  }
});
;// ./src/uni_modules/uni-easyinput/components/uni-easyinput/uni-easyinput.vue?vue&type=script&lang=js&
 /* harmony default export */ var uni_easyinput_uni_easyinputvue_type_script_lang_js_ = (uni_easyinputvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/@dcloudio/vue-cli-plugin-uni/packages/h5-vue-style-loader/index.js??clonedRuleSet-22[0].rules[0].use[0]!./node_modules/css-loader/dist/cjs.js??clonedRuleSet-22[0].rules[0].use[1]!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader/index.js??clonedRuleSet-22[0].rules[0].use[2]!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-22[0].rules[0].use[3]!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-22[0].rules[0].use[4]!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/sass-loader/dist/cjs.js??clonedRuleSet-22[0].rules[0].use[5]!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader/index.js??clonedRuleSet-22[0].rules[0].use[6]!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/index.js??vue-loader-options!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-scoped-loader/index.js!./src/uni_modules/uni-easyinput/components/uni-easyinput/uni-easyinput.vue?vue&type=style&index=0&id=1cdeb3c5&lang=scss&scoped=true&
var uni_easyinputvue_type_style_index_0_id_1cdeb3c5_lang_scss_scoped_true_ = __webpack_require__(50207);
;// ./src/uni_modules/uni-easyinput/components/uni-easyinput/uni-easyinput.vue?vue&type=style&index=0&id=1cdeb3c5&lang=scss&scoped=true&
 /* harmony default export */ var uni_easyinput_uni_easyinputvue_type_style_index_0_id_1cdeb3c5_lang_scss_scoped_true_ = ((/* unused pure expression or super */ null && (mod))); 
// EXTERNAL MODULE: ./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(18535);
;// ./src/uni_modules/uni-easyinput/components/uni-easyinput/uni-easyinput.vue

var renderjs
;

;


/* normalize component */

var component = (0,componentNormalizer/* default */.A)(
  uni_easyinput_uni_easyinputvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  null,
  "1cdeb3c5",
  null,
  false,
  components,
  renderjs
)

/* harmony default export */ var uni_easyinput = (component.exports);

/***/ })

}]);
//# sourceMappingURL=872.ba55ef8d.js.map