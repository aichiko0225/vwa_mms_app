(self["webpackChunkhello_uniapp"] = self["webpackChunkhello_uniapp"] || []).push([[791],{

/***/ 44302:
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(92114);
if(content.__esModule) content = content.default;
if(typeof content === 'string') content = [[module.id, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var add = (__webpack_require__(69333)/* ["default"] */ .A)
var update = add("aac78518", content, true, {"sourceMap":false,"shadowMode":false});

/***/ }),

/***/ 49108:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  A: function() { return /* binding */ u_status_bar; }
});

;// ./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader/index.js??clonedRuleSet-42[0].rules[0].use[0]!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-uni-app-loader/filter-modules-template.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-uni-app-loader/page-meta.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/index.js??vue-loader-options!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-scoped-loader/index.js!./node_modules/uview-ui/components/u-status-bar/u-status-bar.vue?vue&type=template&id=38b9df1a&scoped=true&
var components;
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('v-uni-view',{staticClass:"u-status-bar",style:([_vm.style])},[_vm._t("default")],2)}
var recyclableRender = false
var staticRenderFns = []


;// ./node_modules/uview-ui/components/u-status-bar/props.js
/* harmony default export */ var props = ({
    props: {
        bgColor: {
            type: String,
            default: uni.$u.props.statusBar.bgColor
        }
    }
});

;// ./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader/index.js??clonedRuleSet-43[0].rules[0].use[0]!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-uni-app-loader/using-components.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/index.js??vue-loader-options!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-scoped-loader/index.js!./node_modules/uview-ui/components/u-status-bar/u-status-bar.vue?vue&type=script&lang=js&
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
 * StatbusBar 状态栏占位
 * @description 本组件主要用于状态填充，比如在自定导航栏的时候，它会自动适配一个恰当的状态栏高度。
 * @tutorial https://uviewui.com/components/statusBar.html
 * @property {String}			bgColor			背景色 (默认 'transparent' )
 * @property {String | Object}	customStyle		自定义样式 
 * @example <u-status-bar></u-status-bar>
 */
/* harmony default export */ var u_status_barvue_type_script_lang_js_ = ({
	name: 'u-status-bar',
	mixins: [uni.$u.mpMixin, uni.$u.mixin, props],
	data() {
		return {
		}
	},
	computed: {
		style() {
			const style = {}
			// 状态栏高度，由于某些安卓和微信开发工具无法识别css的顶部状态栏变量，所以使用js获取的方式
			style.height = uni.$u.addUnit(uni.$u.sys().statusBarHeight, 'px')
			style.backgroundColor = this.bgColor
			return uni.$u.deepMerge(style, uni.$u.addStyle(this.customStyle))
		}
	},
});

;// ./node_modules/uview-ui/components/u-status-bar/u-status-bar.vue?vue&type=script&lang=js&
 /* harmony default export */ var u_status_bar_u_status_barvue_type_script_lang_js_ = (u_status_barvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/@dcloudio/vue-cli-plugin-uni/packages/h5-vue-style-loader/index.js??clonedRuleSet-22[0].rules[0].use[0]!./node_modules/css-loader/dist/cjs.js??clonedRuleSet-22[0].rules[0].use[1]!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader/index.js??clonedRuleSet-22[0].rules[0].use[2]!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-22[0].rules[0].use[3]!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-22[0].rules[0].use[4]!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/sass-loader/dist/cjs.js??clonedRuleSet-22[0].rules[0].use[5]!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader/index.js??clonedRuleSet-22[0].rules[0].use[6]!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/index.js??vue-loader-options!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-scoped-loader/index.js!./node_modules/uview-ui/components/u-status-bar/u-status-bar.vue?vue&type=style&index=0&id=38b9df1a&lang=scss&scoped=true&
var u_status_barvue_type_style_index_0_id_38b9df1a_lang_scss_scoped_true_ = __webpack_require__(83204);
;// ./node_modules/uview-ui/components/u-status-bar/u-status-bar.vue?vue&type=style&index=0&id=38b9df1a&lang=scss&scoped=true&
 /* harmony default export */ var u_status_bar_u_status_barvue_type_style_index_0_id_38b9df1a_lang_scss_scoped_true_ = ((/* unused pure expression or super */ null && (mod))); 
// EXTERNAL MODULE: ./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(18535);
;// ./node_modules/uview-ui/components/u-status-bar/u-status-bar.vue

var renderjs
;

;


/* normalize component */

var component = (0,componentNormalizer/* default */.A)(
  u_status_bar_u_status_barvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  null,
  "38b9df1a",
  null,
  false,
  components,
  renderjs
)

/* harmony default export */ var u_status_bar = (component.exports);

/***/ }),

/***/ 60520:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(31601);
/* harmony import */ var _css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(76314);
/* harmony import */ var _css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, "@charset \"UTF-8\";\n/**\n * 这里是uni-app内置的常用样式变量\n *\n * uni-app 官方扩展插件及插件市场（https://ext.dcloud.net.cn）上很多三方插件均使用了这些样式变量\n * 如果你是插件开发者，建议你使用scss预处理，并在插件代码中直接使用这些变量（无需 import 这个文件），方便用户通过搭积木的方式开发整体风格一致的App\n *\n */\n/**\n * 如果你是App开发者（插件使用者），你可以通过修改这些变量来定制自己的插件主题，实现自定义主题功能\n *\n * 如果你的项目同样使用了scss预处理，你也可以直接在你的 scss 代码中使用如下变量，同时无需 import 这个文件\n */\n/* 颜色变量 */\n/* 行为相关颜色 */\n/* 文字基本颜色 */\n/* 背景颜色 */\n/* 边框颜色 */\n/* 尺寸变量 */\n/* 文字尺寸 */\n/* 图片尺寸 */\n/* Border Radius */\n/* 水平间距 */\n/* 垂直间距 */\n/* 透明度 */\n/* 文章场景相关 */.u-status-bar[data-v-38b9df1a]{width:100%}", ""]);
// Exports
/* harmony default export */ __webpack_exports__["default"] = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ 61098:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(31601);
/* harmony import */ var _css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(76314);
/* harmony import */ var _css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, "@charset \"UTF-8\";\n/**\n * 这里是uni-app内置的常用样式变量\n *\n * uni-app 官方扩展插件及插件市场（https://ext.dcloud.net.cn）上很多三方插件均使用了这些样式变量\n * 如果你是插件开发者，建议你使用scss预处理，并在插件代码中直接使用这些变量（无需 import 这个文件），方便用户通过搭积木的方式开发整体风格一致的App\n *\n */\n/**\n * 如果你是App开发者（插件使用者），你可以通过修改这些变量来定制自己的插件主题，实现自定义主题功能\n *\n * 如果你的项目同样使用了scss预处理，你也可以直接在你的 scss 代码中使用如下变量，同时无需 import 这个文件\n */\n/* 颜色变量 */\n/* 行为相关颜色 */\n/* 文字基本颜色 */\n/* 背景颜色 */\n/* 边框颜色 */\n/* 尺寸变量 */\n/* 文字尺寸 */\n/* 图片尺寸 */\n/* Border Radius */\n/* 水平间距 */\n/* 垂直间距 */\n/* 透明度 */\n/* 文章场景相关 */uni-view[data-v-681bf487], uni-scroll-view[data-v-681bf487], uni-swiper-item[data-v-681bf487]{display:flex;flex-direction:column;flex-shrink:0;flex-grow:0;flex-basis:auto;align-items:stretch;align-content:flex-start}.u-popup[data-v-681bf487]{flex:1}.u-popup__content[data-v-681bf487]{background-color:#fff;position:relative}.u-popup__content--round-top[data-v-681bf487]{border-top-left-radius:0;border-top-right-radius:0;border-bottom-left-radius:10px;border-bottom-right-radius:10px}.u-popup__content--round-left[data-v-681bf487]{border-top-left-radius:0;border-top-right-radius:10px;border-bottom-left-radius:0;border-bottom-right-radius:10px}.u-popup__content--round-right[data-v-681bf487]{border-top-left-radius:10px;border-top-right-radius:0;border-bottom-left-radius:10px;border-bottom-right-radius:0}.u-popup__content--round-bottom[data-v-681bf487]{border-top-left-radius:10px;border-top-right-radius:10px;border-bottom-left-radius:0;border-bottom-right-radius:0}.u-popup__content--round-center[data-v-681bf487]{border-top-left-radius:10px;border-top-right-radius:10px;border-bottom-left-radius:10px;border-bottom-right-radius:10px}.u-popup__content__close[data-v-681bf487]{position:absolute}.u-popup__content__close--hover[data-v-681bf487]{opacity:.4}.u-popup__content__close--top-left[data-v-681bf487]{top:15px;left:15px}.u-popup__content__close--top-right[data-v-681bf487]{top:15px;right:15px}.u-popup__content__close--bottom-left[data-v-681bf487]{bottom:15px;left:15px}.u-popup__content__close--bottom-right[data-v-681bf487]{right:15px;bottom:15px}", ""]);
// Exports
/* harmony default export */ __webpack_exports__["default"] = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ 71791:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  A: function() { return /* binding */ u_popup; }
});

;// ./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader/index.js??clonedRuleSet-42[0].rules[0].use[0]!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-uni-app-loader/filter-modules-template.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-uni-app-loader/page-meta.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/index.js??vue-loader-options!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-scoped-loader/index.js!./node_modules/uview-ui/components/u-popup/u-popup.vue?vue&type=template&id=681bf487&scoped=true&
var components = {'uOverlay': (__webpack_require__(57468)/* ["default"] */ .A),'uTransition': (__webpack_require__(9692)/* ["default"] */ .A),'uStatusBar': (__webpack_require__(49108)/* ["default"] */ .A),'uIcon': (__webpack_require__(70495)/* ["default"] */ .A),'uSafeBottom': (__webpack_require__(84128)/* ["default"] */ .A)}
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('v-uni-view',{staticClass:"u-popup"},[(_vm.overlay)?_c('u-overlay',{attrs:{"show":_vm.show,"duration":_vm.overlayDuration,"customStyle":_vm.overlayStyle,"opacity":_vm.overlayOpacity},on:{"click":function($event){
arguments[0] = $event = _vm.$handleEvent($event);
(_vm.overlayClick).apply(void 0, arguments)
}}}):_vm._e(),_c('u-transition',{attrs:{"show":_vm.show,"customStyle":_vm.transitionStyle,"mode":_vm.position,"duration":_vm.duration},on:{"afterEnter":function($event){
arguments[0] = $event = _vm.$handleEvent($event);
(_vm.afterEnter).apply(void 0, arguments)
},"click":function($event){
arguments[0] = $event = _vm.$handleEvent($event);
(_vm.clickHandler).apply(void 0, arguments)
}}},[_c('v-uni-view',{staticClass:"u-popup__content",style:([_vm.contentStyle]),on:{"click":function($event){$event.stopPropagation();
arguments[0] = $event = _vm.$handleEvent($event);
(_vm.noop).apply(void 0, arguments)
}}},[(_vm.safeAreaInsetTop)?_c('u-status-bar'):_vm._e(),_vm._t("default"),(_vm.closeable)?_c('v-uni-view',{staticClass:"u-popup__content__close",class:['u-popup__content__close--' + _vm.closeIconPos],attrs:{"hover-class":"u-popup__content__close--hover","hover-stay-time":"150"},on:{"click":function($event){$event.stopPropagation();
arguments[0] = $event = _vm.$handleEvent($event);
(_vm.close).apply(void 0, arguments)
}}},[_c('u-icon',{attrs:{"name":"close","color":"#909399","size":"18","bold":true}})],1):_vm._e(),(_vm.safeAreaInsetBottom)?_c('u-safe-bottom'):_vm._e()],2)],1)],1)}
var recyclableRender = false
var staticRenderFns = []


;// ./node_modules/uview-ui/components/u-popup/u-popup.vue?vue&type=template&id=681bf487&scoped=true&

;// ./node_modules/uview-ui/components/u-popup/props.js
/* harmony default export */ var props = ({
    props: {
        // 是否展示弹窗
        show: {
            type: Boolean,
            default: uni.$u.props.popup.show
        },
        // 是否显示遮罩
        overlay: {
            type: Boolean,
            default: uni.$u.props.popup.overlay
        },
        // 弹出的方向，可选值为 top bottom right left center
        mode: {
            type: String,
            default: uni.$u.props.popup.mode
        },
        // 动画时长，单位ms
        duration: {
            type: [String, Number],
            default: uni.$u.props.popup.duration
        },
        // 是否显示关闭图标
        closeable: {
            type: Boolean,
            default: uni.$u.props.popup.closeable
        },
        // 自定义遮罩的样式
        overlayStyle: {
            type: [Object, String],
            default: uni.$u.props.popup.overlayStyle
        },
        // 点击遮罩是否关闭弹窗
        closeOnClickOverlay: {
            type: Boolean,
            default: uni.$u.props.popup.closeOnClickOverlay
        },
        // 层级
        zIndex: {
            type: [String, Number],
            default: uni.$u.props.popup.zIndex
        },
        // 是否为iPhoneX留出底部安全距离
        safeAreaInsetBottom: {
            type: Boolean,
            default: uni.$u.props.popup.safeAreaInsetBottom
        },
        // 是否留出顶部安全距离（状态栏高度）
        safeAreaInsetTop: {
            type: Boolean,
            default: uni.$u.props.popup.safeAreaInsetTop
        },
        // 自定义关闭图标位置，top-left为左上角，top-right为右上角，bottom-left为左下角，bottom-right为右下角
        closeIconPos: {
            type: String,
            default: uni.$u.props.popup.closeIconPos
        },
        // 是否显示圆角
        round: {
            type: [Boolean, String, Number],
            default: uni.$u.props.popup.round
        },
        // mode=center，也即中部弹出时，是否使用缩放模式
        zoom: {
            type: Boolean,
            default: uni.$u.props.popup.zoom
        },
        // 弹窗背景色，设置为transparent可去除白色背景
        bgColor: {
            type: String,
            default: uni.$u.props.popup.bgColor
        },
        // 遮罩的透明度，0-1之间
        overlayOpacity: {
            type: [Number, String],
            default: uni.$u.props.popup.overlayOpacity
        }
    }
});

;// ./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader/index.js??clonedRuleSet-43[0].rules[0].use[0]!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-uni-app-loader/using-components.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/index.js??vue-loader-options!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-scoped-loader/index.js!./node_modules/uview-ui/components/u-popup/u-popup.vue?vue&type=script&lang=js&
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
 * popup 弹窗
 * @description 弹出层容器，用于展示弹窗、信息提示等内容，支持上、下、左、右和中部弹出。组件只提供容器，内部内容由用户自定义
 * @tutorial https://www.uviewui.com/components/popup.html
 * @property {Boolean}			show				是否展示弹窗 (默认 false )
 * @property {Boolean}			overlay				是否显示遮罩 （默认 true ）
 * @property {String}			mode				弹出方向（默认 'bottom' ）
 * @property {String | Number}	duration			动画时长，单位ms （默认 300 ）
 * @property {String | Number}	overlayDuration			遮罩层动画时长，单位ms （默认 350 ）
 * @property {Boolean}			closeable			是否显示关闭图标（默认 false ）
 * @property {Object | String}	overlayStyle		自定义遮罩的样式
 * @property {String | Number}	overlayOpacity		遮罩透明度，0-1之间（默认 0.5）
 * @property {Boolean}			closeOnClickOverlay	点击遮罩是否关闭弹窗 （默认  true ）
 * @property {String | Number}	zIndex				层级 （默认 10075 ）
 * @property {Boolean}			safeAreaInsetBottom	是否为iPhoneX留出底部安全距离 （默认 true ）
 * @property {Boolean}			safeAreaInsetTop	是否留出顶部安全距离（状态栏高度） （默认 false ）
 * @property {String}			closeIconPos		自定义关闭图标位置（默认 'top-right' ）
 * @property {String | Number}	round				圆角值（默认 0）
 * @property {Boolean}			zoom				当mode=center时 是否开启缩放（默认 true ）
 * @property {Object}			customStyle			组件的样式，对象形式
 * @event {Function} open 弹出层打开
 * @event {Function} close 弹出层收起
 * @example <u-popup v-model="show"><text>出淤泥而不染，濯清涟而不妖</text></u-popup>
 */
/* harmony default export */ var u_popupvue_type_script_lang_js_ = ({
	name: 'u-popup',
	mixins: [uni.$u.mpMixin, uni.$u.mixin, props],
	data() {
		return {
			overlayDuration: Number(this.duration) + 50
		}
	},
	watch: {
		show(newValue, oldValue) {
			if (newValue === true) {




			}
		}
	},
	computed: {
		transitionStyle() {
			const style = {
				zIndex: this.zIndex,
				position: 'fixed',
				display: 'flex',
			}
			style[this.mode] = 0
			if (this.mode === 'left') {
				return uni.$u.deepMerge(style, {
					bottom: 0,
					top: 0,
				})
			} else if (this.mode === 'right') {
				return uni.$u.deepMerge(style, {
					bottom: 0,
					top: 0,
				})
			} else if (this.mode === 'top') {
				return uni.$u.deepMerge(style, {
					left: 0,
					right: 0
				})
			} else if (this.mode === 'bottom') {
				return uni.$u.deepMerge(style, {
					left: 0,
					right: 0,
				})
			} else if (this.mode === 'center') {
				return uni.$u.deepMerge(style, {
					alignItems: 'center',
					'justify-content': 'center',
					top: 0,
					left: 0,
					right: 0,
					bottom: 0
				})
			}
		},
		contentStyle() {
			const style = {}
			// 通过设备信息的safeAreaInsets值来判断是否需要预留顶部状态栏和底部安全局的位置
			// 不使用css方案，是因为nvue不支持css的iPhoneX安全区查询属性
			const {
				safeAreaInsets
			} = uni.$u.sys()
			if (this.mode !== 'center') {
				style.flex = 1
			}
			// 背景色，一般用于设置为transparent，去除默认的白色背景
			if (this.bgColor) {
				style.backgroundColor = this.bgColor
			}
			if(this.round) {
				const value = uni.$u.addUnit(this.round)
				if(this.mode === 'top') {
					style.borderBottomLeftRadius = value
					style.borderBottomRightRadius = value
				} else if(this.mode === 'bottom') {
					style.borderTopLeftRadius = value
					style.borderTopRightRadius = value
				} else if(this.mode === 'center') {
					style.borderRadius = value
				} 
			}
			return uni.$u.deepMerge(style, uni.$u.addStyle(this.customStyle))
		},
		position() {
			if (this.mode === 'center') {
				return this.zoom ? 'fade-zoom' : 'fade'
			}
			if (this.mode === 'left') {
				return 'slide-left'
			}
			if (this.mode === 'right') {
				return 'slide-right'
			}
			if (this.mode === 'bottom') {
				return 'slide-up'
			}
			if (this.mode === 'top') {
				return 'slide-down'
			}
		},
	},
	methods: {
		// 点击遮罩
		overlayClick() {
			if (this.closeOnClickOverlay) {
				this.$emit('close')
			}
		},
		close(e) {
			this.$emit('close')
		},
		afterEnter() {
			this.$emit('open')
		},
		clickHandler() {
			// 由于中部弹出时，其u-transition占据了整个页面相当于遮罩，此时需要发出遮罩点击事件，是否无法通过点击遮罩关闭弹窗
			if(this.mode === 'center') {
				this.overlayClick()
			}
			this.$emit('click')
		},



























	}
});

;// ./node_modules/uview-ui/components/u-popup/u-popup.vue?vue&type=script&lang=js&
 /* harmony default export */ var u_popup_u_popupvue_type_script_lang_js_ = (u_popupvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/@dcloudio/vue-cli-plugin-uni/packages/h5-vue-style-loader/index.js??clonedRuleSet-22[0].rules[0].use[0]!./node_modules/css-loader/dist/cjs.js??clonedRuleSet-22[0].rules[0].use[1]!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader/index.js??clonedRuleSet-22[0].rules[0].use[2]!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-22[0].rules[0].use[3]!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-22[0].rules[0].use[4]!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/sass-loader/dist/cjs.js??clonedRuleSet-22[0].rules[0].use[5]!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader/index.js??clonedRuleSet-22[0].rules[0].use[6]!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/index.js??vue-loader-options!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-scoped-loader/index.js!./node_modules/uview-ui/components/u-popup/u-popup.vue?vue&type=style&index=0&id=681bf487&lang=scss&scoped=true&
var u_popupvue_type_style_index_0_id_681bf487_lang_scss_scoped_true_ = __webpack_require__(75446);
;// ./node_modules/uview-ui/components/u-popup/u-popup.vue?vue&type=style&index=0&id=681bf487&lang=scss&scoped=true&
 /* harmony default export */ var u_popup_u_popupvue_type_style_index_0_id_681bf487_lang_scss_scoped_true_ = ((/* unused pure expression or super */ null && (mod))); 
// EXTERNAL MODULE: ./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(18535);
;// ./node_modules/uview-ui/components/u-popup/u-popup.vue

var renderjs
;

;


/* normalize component */

var component = (0,componentNormalizer/* default */.A)(
  u_popup_u_popupvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  null,
  "681bf487",
  null,
  false,
  components,
  renderjs
)

/* harmony default export */ var u_popup = (component.exports);

/***/ }),

/***/ 75446:
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(61098);
if(content.__esModule) content = content.default;
if(typeof content === 'string') content = [[module.id, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var add = (__webpack_require__(69333)/* ["default"] */ .A)
var update = add("1eade365", content, true, {"sourceMap":false,"shadowMode":false});

/***/ }),

/***/ 83204:
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(60520);
if(content.__esModule) content = content.default;
if(typeof content === 'string') content = [[module.id, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var add = (__webpack_require__(69333)/* ["default"] */ .A)
var update = add("438e4093", content, true, {"sourceMap":false,"shadowMode":false});

/***/ }),

/***/ 84128:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  A: function() { return /* binding */ u_safe_bottom; }
});

;// ./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader/index.js??clonedRuleSet-42[0].rules[0].use[0]!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-uni-app-loader/filter-modules-template.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-uni-app-loader/page-meta.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/index.js??vue-loader-options!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-scoped-loader/index.js!./node_modules/uview-ui/components/u-safe-bottom/u-safe-bottom.vue?vue&type=template&id=b1c30928&scoped=true&
var components;
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('v-uni-view',{staticClass:"u-safe-bottom",class:[!_vm.isNvue && 'u-safe-area-inset-bottom'],style:([_vm.style])})}
var recyclableRender = false
var staticRenderFns = []


;// ./node_modules/uview-ui/components/u-safe-bottom/props.js
/* harmony default export */ var props = ({
    props: {

    }
});

;// ./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader/index.js??clonedRuleSet-43[0].rules[0].use[0]!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-uni-app-loader/using-components.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/index.js??vue-loader-options!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-scoped-loader/index.js!./node_modules/uview-ui/components/u-safe-bottom/u-safe-bottom.vue?vue&type=script&lang=js&
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
 * SafeBottom 底部安全区
 * @description 这个适配，主要是针对IPhone X等一些底部带指示条的机型，指示条的操作区域与页面底部存在重合，容易导致用户误操作，因此我们需要针对这些机型进行底部安全区适配。
 * @tutorial https://www.uviewui.com/components/safeAreaInset.html
 * @property {type}		prop_name
 * @property {Object}	customStyle	定义需要用到的外部样式
 *
 * @event {Function()}
 * @example <u-status-bar></u-status-bar>
 */
/* harmony default export */ var u_safe_bottomvue_type_script_lang_js_ = ({
	name: "u-safe-bottom",
	mixins: [uni.$u.mpMixin, uni.$u.mixin, props],
	data() {
		return {
			safeAreaBottomHeight: 0,
			isNvue: false,
		};
	},
	computed: {
		style() {
			const style = {};




			return uni.$u.deepMerge(style, uni.$u.addStyle(this.customStyle));
		},
	},
	mounted() {




	},
});

;// ./node_modules/uview-ui/components/u-safe-bottom/u-safe-bottom.vue?vue&type=script&lang=js&
 /* harmony default export */ var u_safe_bottom_u_safe_bottomvue_type_script_lang_js_ = (u_safe_bottomvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/@dcloudio/vue-cli-plugin-uni/packages/h5-vue-style-loader/index.js??clonedRuleSet-22[0].rules[0].use[0]!./node_modules/css-loader/dist/cjs.js??clonedRuleSet-22[0].rules[0].use[1]!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader/index.js??clonedRuleSet-22[0].rules[0].use[2]!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-22[0].rules[0].use[3]!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-22[0].rules[0].use[4]!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/sass-loader/dist/cjs.js??clonedRuleSet-22[0].rules[0].use[5]!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader/index.js??clonedRuleSet-22[0].rules[0].use[6]!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/index.js??vue-loader-options!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-scoped-loader/index.js!./node_modules/uview-ui/components/u-safe-bottom/u-safe-bottom.vue?vue&type=style&index=0&id=b1c30928&lang=scss&scoped=true&
var u_safe_bottomvue_type_style_index_0_id_b1c30928_lang_scss_scoped_true_ = __webpack_require__(44302);
;// ./node_modules/uview-ui/components/u-safe-bottom/u-safe-bottom.vue?vue&type=style&index=0&id=b1c30928&lang=scss&scoped=true&
 /* harmony default export */ var u_safe_bottom_u_safe_bottomvue_type_style_index_0_id_b1c30928_lang_scss_scoped_true_ = ((/* unused pure expression or super */ null && (mod))); 
// EXTERNAL MODULE: ./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(18535);
;// ./node_modules/uview-ui/components/u-safe-bottom/u-safe-bottom.vue

var renderjs
;

;


/* normalize component */

var component = (0,componentNormalizer/* default */.A)(
  u_safe_bottom_u_safe_bottomvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  null,
  "b1c30928",
  null,
  false,
  components,
  renderjs
)

/* harmony default export */ var u_safe_bottom = (component.exports);

/***/ }),

/***/ 92114:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(31601);
/* harmony import */ var _css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(76314);
/* harmony import */ var _css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, "@charset \"UTF-8\";\n/**\n * 这里是uni-app内置的常用样式变量\n *\n * uni-app 官方扩展插件及插件市场（https://ext.dcloud.net.cn）上很多三方插件均使用了这些样式变量\n * 如果你是插件开发者，建议你使用scss预处理，并在插件代码中直接使用这些变量（无需 import 这个文件），方便用户通过搭积木的方式开发整体风格一致的App\n *\n */\n/**\n * 如果你是App开发者（插件使用者），你可以通过修改这些变量来定制自己的插件主题，实现自定义主题功能\n *\n * 如果你的项目同样使用了scss预处理，你也可以直接在你的 scss 代码中使用如下变量，同时无需 import 这个文件\n */\n/* 颜色变量 */\n/* 行为相关颜色 */\n/* 文字基本颜色 */\n/* 背景颜色 */\n/* 边框颜色 */\n/* 尺寸变量 */\n/* 文字尺寸 */\n/* 图片尺寸 */\n/* Border Radius */\n/* 水平间距 */\n/* 垂直间距 */\n/* 透明度 */\n/* 文章场景相关 */.u-safe-bottom[data-v-b1c30928]{width:100%}", ""]);
// Exports
/* harmony default export */ __webpack_exports__["default"] = (___CSS_LOADER_EXPORT___);


/***/ })

}]);
//# sourceMappingURL=791.e7543d9e.js.map