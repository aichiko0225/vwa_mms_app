(self["webpackChunkhello_uniapp"] = self["webpackChunkhello_uniapp"] || []).push([[949],{

/***/ 702:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  A: function() { return /* binding */ u_button; }
});

;// ./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader/index.js??clonedRuleSet-42[0].rules[0].use[0]!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-uni-app-loader/filter-modules-template.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-uni-app-loader/page-meta.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/index.js??vue-loader-options!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-scoped-loader/index.js!./node_modules/uview-ui/components/u-button/u-button.vue?vue&type=template&id=1bcd3b93&scoped=true&
var components = {'uLoadingIcon': (__webpack_require__(39320)/* ["default"] */ .A),'uIcon': (__webpack_require__(70495)/* ["default"] */ .A)}
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('v-uni-button',{staticClass:"u-button u-reset-button",class:_vm.bemClass,style:([_vm.baseColor, _vm.$u.addStyle(_vm.customStyle)]),attrs:{"hover-start-time":Number(_vm.hoverStartTime),"hover-stay-time":Number(_vm.hoverStayTime),"form-type":_vm.formType,"open-type":_vm.openType,"app-parameter":_vm.appParameter,"hover-stop-propagation":_vm.hoverStopPropagation,"send-message-title":_vm.sendMessageTitle,"send-message-path":_vm.sendMessagePath,"lang":_vm.lang,"data-name":_vm.dataName,"session-from":_vm.sessionFrom,"send-message-img":_vm.sendMessageImg,"show-message-card":_vm.showMessageCard,"hover-class":!_vm.disabled && !_vm.loading ? 'u-button--active' : ''},on:{"getphonenumber":function($event){
arguments[0] = $event = _vm.$handleEvent($event);
(_vm.getphonenumber).apply(void 0, arguments)
},"getuserinfo":function($event){
arguments[0] = $event = _vm.$handleEvent($event);
(_vm.getuserinfo).apply(void 0, arguments)
},"error":function($event){
arguments[0] = $event = _vm.$handleEvent($event);
(_vm.error).apply(void 0, arguments)
},"opensetting":function($event){
arguments[0] = $event = _vm.$handleEvent($event);
(_vm.opensetting).apply(void 0, arguments)
},"launchapp":function($event){
arguments[0] = $event = _vm.$handleEvent($event);
(_vm.launchapp).apply(void 0, arguments)
},"agreeprivacyauthorization":function($event){
arguments[0] = $event = _vm.$handleEvent($event);
(_vm.agreeprivacyauthorization).apply(void 0, arguments)
},"click":function($event){
arguments[0] = $event = _vm.$handleEvent($event);
(_vm.clickHandler).apply(void 0, arguments)
}}},[(_vm.loading)?[_c('u-loading-icon',{attrs:{"mode":_vm.loadingMode,"size":_vm.loadingSize * 1.15,"color":_vm.loadingColor}}),_c('v-uni-text',{staticClass:"u-button__loading-text",style:([{ fontSize: _vm.textSize + 'px' }])},[_vm._v(_vm._s(_vm.loadingText || _vm.text))])]:[(_vm.icon)?_c('u-icon',{attrs:{"name":_vm.icon,"color":_vm.iconColorCom,"size":_vm.textSize * 1.35,"customStyle":{ marginRight: '2px' }}}):_vm._e(),_vm._t("default",[_c('v-uni-text',{staticClass:"u-button__text",style:([{ fontSize: _vm.textSize + 'px' }])},[_vm._v(_vm._s(_vm.text))])])]],2)}
var recyclableRender = false
var staticRenderFns = []


;// ./node_modules/uview-ui/components/u-button/u-button.vue?vue&type=template&id=1bcd3b93&scoped=true&

;// ./node_modules/uview-ui/libs/mixin/button.js
/* harmony default export */ var mixin_button = ({
    props: {
        lang: String,
        sessionFrom: String,
        sendMessageTitle: String,
        sendMessagePath: String,
        sendMessageImg: String,
        showMessageCard: Boolean,
        appParameter: String,
        formType: String,
        openType: String
    }
});

;// ./node_modules/uview-ui/libs/mixin/openType.js
/* harmony default export */ var openType = ({
    props: {
        openType: String
    },
    methods: {
        onGetUserInfo(event) {
            this.$emit('getuserinfo', event.detail)
        },
        onContact(event) {
            this.$emit('contact', event.detail)
        },
        onGetPhoneNumber(event) {
            this.$emit('getphonenumber', event.detail)
        },
        onError(event) {
            this.$emit('error', event.detail)
        },
        onLaunchApp(event) {
            this.$emit('launchapp', event.detail)
        },
        onOpenSetting(event) {
            this.$emit('opensetting', event.detail)
        }
    }
});

;// ./node_modules/uview-ui/components/u-button/props.js
/*
 * @Author       : LQ
 * @Description  :
 * @version      : 1.0
 * @Date         : 2021-08-16 10:04:04
 * @LastAuthor   : LQ
 * @lastTime     : 2021-08-16 10:04:24
 * @FilePath     : /u-view2.0/uview-ui/components/u-button/props.js
 */
/* harmony default export */ var props = ({
    props: {
        // 是否细边框
        hairline: {
            type: Boolean,
            default: uni.$u.props.button.hairline
        },
        // 按钮的预置样式，info，primary，error，warning，success
        type: {
            type: String,
            default: uni.$u.props.button.type
        },
        // 按钮尺寸，large，normal，small，mini
        size: {
            type: String,
            default: uni.$u.props.button.size
        },
        // 按钮形状，circle（两边为半圆），square（带圆角）
        shape: {
            type: String,
            default: uni.$u.props.button.shape
        },
        // 按钮是否镂空
        plain: {
            type: Boolean,
            default: uni.$u.props.button.plain
        },
        // 是否禁止状态
        disabled: {
            type: Boolean,
            default: uni.$u.props.button.disabled
        },
        // 是否加载中
        loading: {
            type: Boolean,
            default: uni.$u.props.button.loading
        },
        // 加载中提示文字
        loadingText: {
            type: [String, Number],
            default: uni.$u.props.button.loadingText
        },
        // 加载状态图标类型
        loadingMode: {
            type: String,
            default: uni.$u.props.button.loadingMode
        },
        // 加载图标大小
        loadingSize: {
            type: [String, Number],
            default: uni.$u.props.button.loadingSize
        },
        // 开放能力，具体请看uniapp稳定关于button组件部分说明
        // https://uniapp.dcloud.io/component/button
        openType: {
            type: String,
            default: uni.$u.props.button.openType
        },
        // 用于 <form> 组件，点击分别会触发 <form> 组件的 submit/reset 事件
        // 取值为submit（提交表单），reset（重置表单）
        formType: {
            type: String,
            default: uni.$u.props.button.formType
        },
        // 打开 APP 时，向 APP 传递的参数，open-type=launchApp时有效
        // 只微信小程序、QQ小程序有效
        appParameter: {
            type: String,
            default: uni.$u.props.button.appParameter
        },
        // 指定是否阻止本节点的祖先节点出现点击态，微信小程序有效
        hoverStopPropagation: {
            type: Boolean,
            default: uni.$u.props.button.hoverStopPropagation
        },
        // 指定返回用户信息的语言，zh_CN 简体中文，zh_TW 繁体中文，en 英文。只微信小程序有效
        lang: {
            type: String,
            default: uni.$u.props.button.lang
        },
        // 会话来源，open-type="contact"时有效。只微信小程序有效
        sessionFrom: {
            type: String,
            default: uni.$u.props.button.sessionFrom
        },
        // 会话内消息卡片标题，open-type="contact"时有效
        // 默认当前标题，只微信小程序有效
        sendMessageTitle: {
            type: String,
            default: uni.$u.props.button.sendMessageTitle
        },
        // 会话内消息卡片点击跳转小程序路径，open-type="contact"时有效
        // 默认当前分享路径，只微信小程序有效
        sendMessagePath: {
            type: String,
            default: uni.$u.props.button.sendMessagePath
        },
        // 会话内消息卡片图片，open-type="contact"时有效
        // 默认当前页面截图，只微信小程序有效
        sendMessageImg: {
            type: String,
            default: uni.$u.props.button.sendMessageImg
        },
        // 是否显示会话内消息卡片，设置此参数为 true，用户进入客服会话会在右下角显示"可能要发送的小程序"提示，
        // 用户点击后可以快速发送小程序消息，open-type="contact"时有效
        showMessageCard: {
            type: Boolean,
            default: uni.$u.props.button.showMessageCard
        },
        // 额外传参参数，用于小程序的data-xxx属性，通过target.dataset.name获取
        dataName: {
            type: String,
            default: uni.$u.props.button.dataName
        },
        // 节流，一定时间内只能触发一次
        throttleTime: {
            type: [String, Number],
            default: uni.$u.props.button.throttleTime
        },
        // 按住后多久出现点击态，单位毫秒
        hoverStartTime: {
            type: [String, Number],
            default: uni.$u.props.button.hoverStartTime
        },
        // 手指松开后点击态保留时间，单位毫秒
        hoverStayTime: {
            type: [String, Number],
            default: uni.$u.props.button.hoverStayTime
        },
        // 按钮文字，之所以通过props传入，是因为slot传入的话
        // nvue中无法控制文字的样式
        text: {
            type: [String, Number],
            default: uni.$u.props.button.text
        },
        // 按钮图标
        icon: {
            type: String,
            default: uni.$u.props.button.icon
        },
        // 按钮图标
        iconColor: {
            type: String,
            default: uni.$u.props.button.icon
        },
        // 按钮颜色，支持传入linear-gradient渐变色
        color: {
            type: String,
            default: uni.$u.props.button.color
        }
    }
});

;// ./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader/index.js??clonedRuleSet-43[0].rules[0].use[0]!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-uni-app-loader/using-components.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/index.js??vue-loader-options!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-scoped-loader/index.js!./node_modules/uview-ui/components/u-button/u-button.vue?vue&type=script&lang=js&
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
 * button 按钮
 * @description Button 按钮
 * @tutorial https://www.uviewui.com/components/button.html
 *
 * @property {Boolean}			hairline				是否显示按钮的细边框 (默认 true )
 * @property {String}			type					按钮的预置样式，info，primary，error，warning，success (默认 'info' )
 * @property {String}			size					按钮尺寸，large，normal，mini （默认 normal）
 * @property {String}			shape					按钮形状，circle（两边为半圆），square（带圆角） （默认 'square' ）
 * @property {Boolean}			plain					按钮是否镂空，背景色透明 （默认 false）
 * @property {Boolean}			disabled				是否禁用 （默认 false）
 * @property {Boolean}			loading					按钮名称前是否带 loading 图标(App-nvue 平台，在 ios 上为雪花，Android上为圆圈) （默认 false）
 * @property {String | Number}	loadingText				加载中提示文字
 * @property {String}			loadingMode				加载状态图标类型 （默认 'spinner' ）
 * @property {String | Number}	loadingSize				加载图标大小 （默认 15 ）
 * @property {String}			openType				开放能力，具体请看uniapp稳定关于button组件部分说明
 * @property {String}			formType				用于 <form> 组件，点击分别会触发 <form> 组件的 submit/reset 事件
 * @property {String}			appParameter			打开 APP 时，向 APP 传递的参数，open-type=launchApp时有效 （注：只微信小程序、QQ小程序有效）
 * @property {Boolean}			hoverStopPropagation	指定是否阻止本节点的祖先节点出现点击态，微信小程序有效（默认 true ）
 * @property {String}			lang					指定返回用户信息的语言，zh_CN 简体中文，zh_TW 繁体中文，en 英文（默认 en ）
 * @property {String}			sessionFrom				会话来源，openType="contact"时有效
 * @property {String}			sendMessageTitle		会话内消息卡片标题，openType="contact"时有效
 * @property {String}			sendMessagePath			会话内消息卡片点击跳转小程序路径，openType="contact"时有效
 * @property {String}			sendMessageImg			会话内消息卡片图片，openType="contact"时有效
 * @property {Boolean}			showMessageCard			是否显示会话内消息卡片，设置此参数为 true，用户进入客服会话会在右下角显示"可能要发送的小程序"提示，用户点击后可以快速发送小程序消息，openType="contact"时有效（默认false）
 * @property {String}			dataName				额外传参参数，用于小程序的data-xxx属性，通过target.dataset.name获取
 * @property {String | Number}	throttleTime			节流，一定时间内只能触发一次 （默认 0 )
 * @property {String | Number}	hoverStartTime			按住后多久出现点击态，单位毫秒 （默认 0 )
 * @property {String | Number}	hoverStayTime			手指松开后点击态保留时间，单位毫秒 （默认 200 )
 * @property {String | Number}	text					按钮文字，之所以通过props传入，是因为slot传入的话（注：nvue中无法控制文字的样式）
 * @property {String}			icon					按钮图标
 * @property {String}			iconColor				按钮图标颜色
 * @property {String}			color					按钮颜色，支持传入linear-gradient渐变色
 * @property {Object}			customStyle				定义需要用到的外部样式
 *
 * @event {Function}	click			非禁止并且非加载中，才能点击
 * @event {Function}	getphonenumber	open-type="getPhoneNumber"时有效
 * @event {Function}	getuserinfo		用户点击该按钮时，会返回获取到的用户信息，从返回参数的detail中获取到的值同uni.getUserInfo
 * @event {Function}	error			当使用开放能力时，发生错误的回调
 * @event {Function}	opensetting		在打开授权设置页并关闭后回调
 * @event {Function}	launchapp		打开 APP 成功的回调
 * @event {Function}	agreeprivacyauthorization	用户同意隐私协议事件回调
 * @example <u-button>月落</u-button>
 */
/* harmony default export */ var u_buttonvue_type_script_lang_js_ = ({
    name: "u-button",




    mixins: [uni.$u.mpMixin, uni.$u.mixin, props],

    data() {
        return {};
    },
    computed: {
        // 生成bem风格的类名
        bemClass() {
            // this.bem为一个computed变量，在mixin中
            if (!this.color) {
                return this.bem(
                    "button",
                    ["type", "shape", "size"],
                    ["disabled", "plain", "hairline"]
                );
            } else {
                // 由于nvue的原因，在有color参数时，不需要传入type，否则会生成type相关的类型，影响最终的样式
                return this.bem(
                    "button",
                    ["shape", "size"],
                    ["disabled", "plain", "hairline"]
                );
            }
        },
        loadingColor() {
            if (this.plain) {
                // 如果有设置color值，则用color值，否则使用type主题颜色
                return this.color
                    ? this.color
                    : uni.$u.config.color[`u-${this.type}`];
            }
            if (this.type === "info") {
                return "#c9c9c9";
            }
            return "rgb(200, 200, 200)";
        },
        iconColorCom() {
            // 如果是镂空状态，设置了color就用color值，否则使用主题颜色，
            // u-icon的color能接受一个主题颜色的值
			if (this.iconColor) return this.iconColor;
			if (this.plain) {
                return this.color ? this.color : this.type;
            } else {
                return this.type === "info" ? "#000000" : "#ffffff";
            }
        },
        baseColor() {
            let style = {};
            if (this.color) {
                // 针对自定义了color颜色的情况，镂空状态下，就是用自定义的颜色
                style.color = this.plain ? this.color : "white";
                if (!this.plain) {
                    // 非镂空，背景色使用自定义的颜色
                    style["background-color"] = this.color;
                }
                if (this.color.indexOf("gradient") !== -1) {
                    // 如果自定义的颜色为渐变色，不显示边框，以及通过backgroundImage设置渐变色
                    // weex文档说明可以写borderWidth的形式，为什么这里需要分开写？
                    // 因为weex是阿里巴巴为了部门业绩考核而做的你懂的东西，所以需要这么写才有效
                    style.borderTopWidth = 0;
                    style.borderRightWidth = 0;
                    style.borderBottomWidth = 0;
                    style.borderLeftWidth = 0;
                    if (!this.plain) {
                        style.backgroundImage = this.color;
                    }
                } else {
                    // 非渐变色，则设置边框相关的属性
                    style.borderColor = this.color;
                    style.borderWidth = "1px";
                    style.borderStyle = "solid";
                }
            }
            return style;
        },
        // nvue版本按钮的字体不会继承父组件的颜色，需要对每一个text组件进行单独的设置
        nvueTextStyle() {
            let style = {};
            // 针对自定义了color颜色的情况，镂空状态下，就是用自定义的颜色
            if (this.type === "info") {
                style.color = "#323233";
            }
            if (this.color) {
                style.color = this.plain ? this.color : "white";
            }
            style.fontSize = this.textSize + "px";
            return style;
        },
        // 字体大小
        textSize() {
            let fontSize = 14,
                { size } = this;
            if (size === "large") fontSize = 16;
            if (size === "normal") fontSize = 14;
            if (size === "small") fontSize = 12;
            if (size === "mini") fontSize = 10;
            return fontSize;
        },
    },
    methods: {
        clickHandler() {
            // 非禁止并且非加载中，才能点击
            if (!this.disabled && !this.loading) {
				// 进行节流控制，每this.throttle毫秒内，只在开始处执行
				uni.$u.throttle(() => {
					this.$emit("click");
				}, this.throttleTime);
            }
        },
        // 下面为对接uniapp官方按钮开放能力事件回调的对接
        getphonenumber(res) {
            this.$emit("getphonenumber", res);
        },
        getuserinfo(res) {
            this.$emit("getuserinfo", res);
        },
        error(res) {
            this.$emit("error", res);
        },
        opensetting(res) {
            this.$emit("opensetting", res);
        },
        launchapp(res) {
            this.$emit("launchapp", res);
        },
        agreeprivacyauthorization(res) {
            this.$emit("agreeprivacyauthorization", res);
        },
    },
});

;// ./node_modules/uview-ui/components/u-button/u-button.vue?vue&type=script&lang=js&
 /* harmony default export */ var u_button_u_buttonvue_type_script_lang_js_ = (u_buttonvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/@dcloudio/vue-cli-plugin-uni/packages/h5-vue-style-loader/index.js??clonedRuleSet-22[0].rules[0].use[0]!./node_modules/css-loader/dist/cjs.js??clonedRuleSet-22[0].rules[0].use[1]!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader/index.js??clonedRuleSet-22[0].rules[0].use[2]!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-22[0].rules[0].use[3]!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-22[0].rules[0].use[4]!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/sass-loader/dist/cjs.js??clonedRuleSet-22[0].rules[0].use[5]!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader/index.js??clonedRuleSet-22[0].rules[0].use[6]!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/index.js??vue-loader-options!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-scoped-loader/index.js!./node_modules/uview-ui/components/u-button/u-button.vue?vue&type=style&index=0&id=1bcd3b93&lang=scss&scoped=true&
var u_buttonvue_type_style_index_0_id_1bcd3b93_lang_scss_scoped_true_ = __webpack_require__(60579);
;// ./node_modules/uview-ui/components/u-button/u-button.vue?vue&type=style&index=0&id=1bcd3b93&lang=scss&scoped=true&
 /* harmony default export */ var u_button_u_buttonvue_type_style_index_0_id_1bcd3b93_lang_scss_scoped_true_ = ((/* unused pure expression or super */ null && (mod))); 
// EXTERNAL MODULE: ./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(18535);
;// ./node_modules/uview-ui/components/u-button/u-button.vue

var renderjs
;

;


/* normalize component */

var component = (0,componentNormalizer/* default */.A)(
  u_button_u_buttonvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  null,
  "1bcd3b93",
  null,
  false,
  components,
  renderjs
)

/* harmony default export */ var u_button = (component.exports);

/***/ }),

/***/ 839:
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

"use strict";
module.exports = __webpack_require__.p + "static/qa/LOGO.png";

/***/ }),

/***/ 2685:
/***/ (function(module) {

"use strict";
module.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADYAAAA8CAYAAAAt3km7AAAAAXNSR0IArs4c6QAAAERlWElmTU0AKgAAAAgAAYdpAAQAAAABAAAAGgAAAAAAA6ABAAMAAAABAAEAAKACAAQAAAABAAAANqADAAQAAAABAAAAPAAAAAC58zYFAAADNklEQVRoBe2au4sUQRDGz7fn6+4UQUF0BR9opKJipPgfCOZGZkYmggiKgYlgpGJiZCZ4f4KBHoIoPhIVRFBRQUW9U8H36/etu0vTVzvb07MHPUcXfDvb1dVV9XX1NNM7OzCQpV4zMGOK0x3E/1owAoZbsSa4joOn4GtL1/fLVBCbQ5Z7wE6wCcwClvxG+QjcAtfAT9A36SexmWS1G+wHy0pm+B77UXAd/Ck51jTvF7EFeD8EtppRwpX3MD0PvoQPsS27LRPb2tYuR30crLe7S2lXYr0DiGAlclUrps3hJFgFLHmM8jZ4ArRpSLSJrAMisAFY8hLlCRC9uVQldoTgW4zMnqO7BLQ5FIk2lwNgjWF0H91pQx+kqrIUtevtM6LcQHcGvDH6fNU7FGNAy3m117mC9gvwytMHNWOJzcb7YbDIi3KX9lnwy9MXNbXt3wENoHvMlQaNq6D0TqktOka0+2lGXZmgcQ6UTqI1RmPlwxXFiNppY4npxvflCopvvrJEW2Plw5ftviKkHUvMn0U9Nejeqiry4T+BbItxGkNsCYEWesEe0v7u6WKa8iFfriiWYpaSGGLDRoSQHdAYZqosX1ZMc3BbGUNsqD3YuX5yvlf9avmyYhbGiSFmjflbGKVcp+XLilnotfSAQm8JdWZiCRUjKJVpWzE98/kyF0UDLPU7Wm3/YVVqHVt2tfqrXqwj0EacDnZx/AH9M/DD7fePLXpUOggWu0Y1+P6ZHC8Cnf2a4j7d60x0FMz/31Wrz3lkq2OUThcflbl7j+2l7RJVf51EuYtDU1xi1tpu29Xl2uHgbh7+/SYyp4D1JJACUeV7zEukw8El5tk0m/rNIubgaPnqt85dbZN8F3ZOsq6RIhOrUbGaqeaK5YolMgN5KSZSiOA0csWCpyoRw1yxRAoRnEauWPBUJWKYK5ZIIYLTyBULnqpEDHPFEilEcBq5YsFTlYjhtK1Yr98V9XIi5R9Mu66PXsQudB2ZeIe7FF8nnmtIeh0OLrGbISMTt+lwcF8bvSVpvRXcDFzCiXNppqd/0F0GY+1kO28n2gqu+seZyI0Aqx91MqKNbRw8ANY/epJJNCfSawb+AY7qXuI1dJ9VAAAAAElFTkSuQmCC";

/***/ }),

/***/ 11429:
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
___CSS_LOADER_EXPORT___.push([module.id, "@charset \"UTF-8\";\n/**\n * 这里是uni-app内置的常用样式变量\n *\n * uni-app 官方扩展插件及插件市场（https://ext.dcloud.net.cn）上很多三方插件均使用了这些样式变量\n * 如果你是插件开发者，建议你使用scss预处理，并在插件代码中直接使用这些变量（无需 import 这个文件），方便用户通过搭积木的方式开发整体风格一致的App\n *\n */\n/**\n * 如果你是App开发者（插件使用者），你可以通过修改这些变量来定制自己的插件主题，实现自定义主题功能\n *\n * 如果你的项目同样使用了scss预处理，你也可以直接在你的 scss 代码中使用如下变量，同时无需 import 这个文件\n */\n/* 颜色变量 */\n/* 行为相关颜色 */\n/* 文字基本颜色 */\n/* 背景颜色 */\n/* 边框颜色 */\n/* 尺寸变量 */\n/* 文字尺寸 */\n/* 图片尺寸 */\n/* Border Radius */\n/* 水平间距 */\n/* 垂直间距 */\n/* 透明度 */\n/* 文章场景相关 */uni-view[data-v-3e7c5a43], uni-scroll-view[data-v-3e7c5a43], uni-swiper-item[data-v-3e7c5a43]{display:flex;flex-direction:column;flex-shrink:0;flex-grow:0;flex-basis:auto;align-items:stretch;align-content:flex-start}.u-input[data-v-3e7c5a43]{\ndisplay:flex;\nflex-direction:row;align-items:center;justify-content:space-between;flex:1}.u-input[data-v-3e7c5a43]  .uni-input-input:disabled{pointer-events:none}.u-input--radius[data-v-3e7c5a43], .u-input--square[data-v-3e7c5a43]{border-radius:4px}.u-input--no-radius[data-v-3e7c5a43]{border-radius:0}.u-input--circle[data-v-3e7c5a43]{border-radius:100px}.u-input__content[data-v-3e7c5a43]{flex:1;\ndisplay:flex;\nflex-direction:row;align-items:center;justify-content:space-between}.u-input__content__field-wrapper[data-v-3e7c5a43]{position:relative;\ndisplay:flex;\nflex-direction:row;margin:0;flex:1}.u-input__content__field-wrapper__field[data-v-3e7c5a43]{line-height:26px;text-align:left;color:#303133;height:24px;font-size:15px;flex:1}.u-input__content__clear[data-v-3e7c5a43]{width:20px;height:20px;border-radius:100px;background-color:#c6c7cb;\ndisplay:flex;\nflex-direction:row;align-items:center;justify-content:center;-webkit-transform:scale(.82);transform:scale(.82);margin-left:4px}.u-input__content__subfix-icon[data-v-3e7c5a43]{margin-left:4px}.u-input__content__prefix-icon[data-v-3e7c5a43]{margin-right:4px}", ""]);
// Exports
/* harmony default export */ __webpack_exports__["default"] = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ 14563:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": function() { return /* binding */ login; }
});

;// ./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader/index.js??clonedRuleSet-42[0].rules[0].use[0]!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-uni-app-loader/filter-modules-template.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-uni-app-loader/page-meta.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/index.js??vue-loader-options!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-scoped-loader/index.js!./src/pages/login/login.vue?vue&type=template&id=72e88a5e&scoped=true&
var components = {'uniEasyinput': (__webpack_require__(68872)/* ["default"] */ .A),'uInput': (__webpack_require__(28080)/* ["default"] */ .A),'uCode': (__webpack_require__(38525)/* ["default"] */ .A),'uButton': (__webpack_require__(702)/* ["default"] */ .A),'uPopup': (__webpack_require__(71791)/* ["default"] */ .A)}
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('v-uni-view',{staticClass:"zai-box",attrs:{"id":"login-page"}},[_c('v-uni-image',{staticClass:"login-bg-img",attrs:{"src":__webpack_require__(23461),"alt":"image"}}),_c('v-uni-image',{staticStyle:{"width":"159px","height":"80px"},attrs:{"src":__webpack_require__(839),"alt":"image"}}),_c('v-uni-scroll-view',{staticClass:"page",staticStyle:{"background-color":"rgba(0, 0, 0, 0)"},attrs:{"scroll-y":true}},[_c('v-uni-view',{staticClass:"box padding-lr-xl login-paddingtop",staticStyle:{"padding-top":"10%"}},[_c('v-uni-view',{staticStyle:{"display":"flex","justify-content":"center","align-items":"center"}},[_c('v-uni-view',{staticClass:"zai-title"},[_c('v-uni-text',{staticStyle:{"text-align":"center","font-size":"20px","color":"black","display":"block","font-weight":"bold"}},[_vm._v("QA Platform")]),_c('v-uni-text',{staticStyle:{"text-align":"center","font-size":"20px","color":"black","display":"flex","align-items":"center","justify-content":"center","font-weight":"bold"}},[_vm._v("Test Case Management")])],1)],1),_c('v-uni-view',[_c('v-uni-text',{staticStyle:{"padding-top":"25px","font-size":"15px","color":"#ffffff","display":"block"}},[_vm._v("User")]),_c('v-uni-view',{staticClass:"login-input cu-form-group shadow-blur"},[_c('uni-easyinput',{staticStyle:{"display":"block","padding":"5px"},attrs:{"focus":true,"placeholder":"Please enter the account"},on:{"blur":function($event){
arguments[0] = $event = _vm.$handleEvent($event);
(_vm.queryPhone).apply(void 0, arguments)
}},model:{value:(_vm.userName),callback:function ($$v) {_vm.userName=$$v},expression:"userName"}})],1),_c('v-uni-text',{staticStyle:{"font-size":"15px","color":"#ffffff","display":"block"}},[_vm._v("Password")]),_c('v-uni-view',{staticClass:"login-input cu-form-group",staticStyle:{"position":"relative"}},[_c('v-uni-view',{staticClass:"eyeBtn",class:_vm.showPswd? 'eyeClass':'',on:{"click":function($event){
arguments[0] = $event = _vm.$handleEvent($event);
_vm.eyeChange()
}}}),_c('uni-easyinput',{directives:[{name:"show",rawName:"v-show",value:(!_vm.showPswd),expression:"!showPswd"}],staticStyle:{"padding":"5px"},attrs:{"focus":true,"type":"password","placeholder":"Please enter the password"},model:{value:(_vm.password),callback:function ($$v) {_vm.password=$$v},expression:"password"}}),_c('uni-easyinput',{directives:[{name:"show",rawName:"v-show",value:(_vm.showPswd),expression:"showPswd"}],attrs:{"focus":true,"type":"text","placeholder":"Please enter the password"},model:{value:(_vm.password),callback:function ($$v) {_vm.password=$$v},expression:"password"}})],1),_c('v-uni-text',{staticStyle:{"font-size":"15px","color":"#ffffff","display":"block"}},[_vm._v("Phone Number")]),_c('v-uni-view',{staticClass:"login-input cu-form-group shadow-blur"},[_c('u-input',{staticStyle:{"height":"75%","border":"0"},attrs:{"disabled":true,"placeholder":"Please enter the user associated with the mobile number"},model:{value:(_vm.phone),callback:function ($$v) {_vm.phone=$$v},expression:"phone"}},[_c('template',{staticStyle:{"background-color":"#ffffff"},slot:"suffix"},[_c('u-code',{ref:"uCode",attrs:{"seconds":"120","startText":"Send Code","changeText":"Xs Regain"},on:{"change":function($event){
arguments[0] = $event = _vm.$handleEvent($event);
(_vm.codeChange).apply(void 0, arguments)
}}}),_c('u-button',{staticStyle:{"height":"4vh","background-color":"#666464","border":"0"},attrs:{"text":_vm.tips,"type":"success","size":"mini"},on:{"click":function($event){
arguments[0] = $event = _vm.$handleEvent($event);
(_vm.getCode).apply(void 0, arguments)
}}})],1)],2)],1),_c('v-uni-text',{staticStyle:{"font-size":"15px","color":"#ffffff","display":"block"}},[_vm._v("Verification Code")]),_c('v-uni-view',{staticClass:"login-input cu-form-group shadow-blur"},[_c('uni-easyinput',{staticStyle:{"display":"block","padding":"5px"},attrs:{"maxlength":"6","focus":true,"placeholder":"Please enter the Verification Code"},model:{value:(_vm.code),callback:function ($$v) {_vm.code=$$v},expression:"code"}})],1)],1),_c('v-uni-view',{staticClass:"flex  flex-direction"},[_c('v-uni-button',{staticClass:"cu-btn shadow-blur round lg",attrs:{"loading":_vm.loading},on:{"click":function($event){
arguments[0] = $event = _vm.$handleEvent($event);
(_vm.onLogin).apply(void 0, arguments)
}}},[_vm._v(" "+_vm._s(_vm.loading ? "Logging In...":"Login")+" ")])],1),_c('v-uni-view',{staticClass:"forgetPassword"},[_c('a',{on:{"click":function($event){
arguments[0] = $event = _vm.$handleEvent($event);
(_vm.forget).apply(void 0, arguments)
}}},[_vm._v("Forget Password")])])],1)],1),(_vm.loading)?_c('v-uni-view',{staticClass:"cu-load load-modal"},[_c('v-uni-image',{attrs:{"src":"/static/login3.png","mode":"aspectFit"}})],1):_vm._e(),_c('u-popup',{directives:[{name:"show",rawName:"v-show",value:(_vm.showpopup),expression:"showpopup"}],staticStyle:{"position":"absolute","bottom":"10%","text-align":"center","left":"30%"},attrs:{"round":10,"mode":"center"}},[_c('v-uni-view',{staticClass:"progressBox"},[_c('v-uni-text',{staticClass:"words"},[_vm._v("Do Not Exit While Downloading "+_vm._s(_vm.percentVal)+"%")])],1)],1)],1)}
var recyclableRender = false
var staticRenderFns = []


;// ./src/pages/login/login.vue?vue&type=template&id=72e88a5e&scoped=true&

// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/esm/objectSpread2.js
var objectSpread2 = __webpack_require__(49943);
// EXTERNAL MODULE: ./node_modules/core-js/modules/es.object.to-string.js
var es_object_to_string = __webpack_require__(26099);
// EXTERNAL MODULE: ./node_modules/core-js/modules/es.regexp.exec.js
var es_regexp_exec = __webpack_require__(27495);
// EXTERNAL MODULE: ./node_modules/core-js/modules/es.regexp.test.js
var es_regexp_test = __webpack_require__(90906);
// EXTERNAL MODULE: ./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vuex3/dist/vuex.common.js
var vuex_common = __webpack_require__(45013);
// EXTERNAL MODULE: ./src/common/util/constants.js
var constants = __webpack_require__(36710);
;// ./node_modules/babel-loader/lib/index.js??clonedRuleSet-40[0].rules[0].use[0]!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader/index.js??clonedRuleSet-40[0].rules[0].use[1]!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader/index.js??clonedRuleSet-43[0].rules[0].use[0]!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-uni-app-loader/using-components.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/index.js??vue-loader-options!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-scoped-loader/index.js!./src/pages/login/login.vue?vue&type=script&lang=js&




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
//



/* harmony default export */ var loginvue_type_script_lang_js_ = ({
  data: function data() {
    return {
      percentVal: 0,
      showpopup: false,
      showPswd: false,
      showPassword: false,
      //是否显示明文
      loading: false,
      userName: 'FPXNUH1',
      password: '123456',
      version: '',
      phone: null,
      code: '',
      isSend: false,
      tips: "Send Code"
    };
  },
  onLaunch: function onLaunch() {},
  onLoad: function onLoad() {},
  mounted: function mounted() {
    var _this = this;
    // uni.getSystemInfo({
    // success: function(e) {
    // 	if (e.platform == 'android') {
    // 		console.log(e)
    // 		_this.showpopup = false;
    // 		uni.request({
    // 			url: 'http://120.195.219.132:48086/81/update/update.json', //检查更新的服务器地址
    // 			data: {
    // 				appid: plus.runtime.appid,
    // 				version: plus.runtime.version,
    // 				imei: plus.device.imei
    // 			},
    // 			success: (res) => {
    // 				plus.runtime.getProperty(plus.runtime.appid, function(wgtinfo) {
    // 					let client_version = wgtinfo.version
    // 					var flag_update = client_version.split(".").splice(0,2).join(".") != res.data.version.split(".")
    // 						.splice(0, 2)
    // 						.join(".");
    // 					var flag_hot = (Number(client_version.split(".")[2]) <
    // 							Number(res.data.version.split(".")[2])) & !
    // 						flag_update
    // 					if (flag_update) {
    // 						// 提醒用户更新
    // 						uni.showModal({
    // 							title: '更新提示',
    // 							content: "全新改版",
    // 							success: (showResult) => {
    // 								if (showResult.confirm) {
    // 									_this.showpopup = true;
    // 									plus.nativeUI.toast("正在准备环境，请稍后!");
    // 									console.log(res.data.url, )
    // 									var dtask = plus.downloader.createDownload(res.data.url, 
    // 									{
    // 										method: 'GET',
    // 										filename: '_doc/update/'
    // 											},function(d,status) {
    // 												if (status == 200) {
    // 													var path = d.filename; //下载apk
    // 													plus.runtime.install(path); // 自动安装apk文件
    // 												} else {
    // 													plus.nativeUI.alert('版本更新失败:' +status);
    // 												}
    // 											});
    // 									dtask.start();
    // 									// 关于进度的获取是使用定时器不断获取已经下载的文件的大小，再对比总大小即可
    // 									let timer = setInterval(
    // 										() => {
    // 											let percent = (dtask.downloadedSize / dtask.totalSize).toFixed(2) // totalSize文件总大小，后端返回的
    // 											_this .percentVal = Math.floor(percent *100) // 转成整数展示
    // 											console.log(_this.percentVal)
    // 											if (percent >=1) { // 注意百分比，及时清除定时器即可
    // 												clearInterval(timer)
    // 											}
    // 										}, 18)
    // 								}
    // 							}
    // 						})
    // 					} else if (flag_hot) {
    // 						uni.downloadFile({
    // 							url: res.data.wgtUrl,
    // 							success: (downloadResult) => {
    // 								console.log(downloadResult.tempFilePath)
    // 								if (downloadResult.statusCode === 200) {
    // 									plus.nativeUI.toast(`正在热更新!${res.data.versionCode}`);
    // 									plus.runtime.install(downloadResult.tempFilePath, {
    // 											force: false
    // 										},
    // 										function() {
    // 											plus.nativeUI.toast("热更新成功");
    // 											plus.runtime.restart();
    // 										},
    // 										function(e) {
    // 											console.log(e)
    // 											plus.nativeUI.toast(`热更新失败:${e.message}`);
    // 										});
    // 								}
    // 							}
    // 						});
    // 					}
    // 				});
    // 			}
    // 		})
    // 	}
    // }
    // })
  },
  methods: (0,objectSpread2/* default */.A)((0,objectSpread2/* default */.A)({}, (0,vuex_common.mapActions)(["h5Login", "mLogin", "PhoneLogin"])), {}, {
    clickPwd2: function clickPwd2() {
      this.showPswd = !this.showPswd;
    },
    eyeChange: function eyeChange() {
      this.showPswd = !this.showPswd;
    },
    codeChange: function codeChange(text) {
      this.tips = text;
    },
    getCode: function getCode() {
      var that = this;
      if (this.phone == null) {
        uni.showToast({
          icon: 'none',
          title: 'Phone Number Cannot Be Empty'
        });
        return;
      } else if (!this.password) {
        uni.showToast({
          icon: 'none',
          title: 'Password Cannot Be Empty'
        });
        return;
      } else {
        var regExp = /^1[3456789]\d{9}$/; // 手机号码正则表达式
        if (!regExp.test(this.phone)) {
          uni.showToast({
            icon: 'none',
            title: 'Phone Number Format Is Incorrect'
          });
          return;
        }
      }
      if (this.$refs.uCode.canGetCode) {
        // 模拟向后端请求验证码
        that.SendSms(function () {
          // 这里此提示会被this.start()方法中的提示覆盖
          uni.$u.toast('Verification Code Has Been Sent');
          // 通知验证码组件内部开始倒计时
          that.$refs.uCode.start();
        });
        // setTimeout(() => {

        // }, 800);
      } else {
        uni.$u.toast('Wait Until The Countdown Is Over');
      }
    },
    change: function change(e) {
      console.log('change', e);
    },
    queryPhone: function queryPhone() {
      var that = this;
      if (that.userName == '') {
        return;
      }
      var params = {
        username: that.userName
      };
      this.$http.post(this.$apiUrl + '/sys/user/queryEmail', params).then(function (res) {
        if (res.data.success && res.data.result != null) {
          that.phone = res.data.result.phone;
        } else {
          that.phone = null;
          uni.showToast({
            duration: 2000,
            title: res.data.message,
            icon: 'none'
          });
          return;
        }
      });
    },
    SendSms: function SendSms(fun) {
      var that = this;
      // 用户名密码加密
      var sm2 = (__webpack_require__(37208).sm2);
      var publicKey = '0494006b520344b99a1fcdf1b498281fa37abb391c925cdc30a59be27507add5b74ae062d8329e0147c272d5eabcb503a5ffa3ac8c0dcbd60b5e6464d9a088411b';
      var params = {
        username: that.userName,
        phone: that.phone,
        // password:that.password,
        password: sm2.doEncrypt(that.password, publicKey)
      };
      that.$http.post(that.$apiUrl + '/sys/sms/sendSms', params).then(function (res) {
        if (res.data.success) {
          that.isSend = true;
          uni.showToast({
            duration: 2000,
            icon: 'none',
            title: 'The Verification Code Was Sent Successfully, Please Check'
          });
          if (fun) {
            fun();
          }
        } else {
          that.isSend = false;
          var title = res.data.message;
          if (res.data.message == "该用户已冻结") {
            title = "The User Has Been Frozen";
          } else if (res.data.message == '用户名或密码错误') {
            title = "Incorrect username or password";
          } else if (res.data.message == "用户名或密码错误 您的账号已冻结，请联系管理员解冻！") {
            title = "Your Account Has Been Frozen, Please Contact The Administrator To Unfreeze";
          } else if (res.data.message == "您的账号已冻结，请联系管理员解冻！") {
            title = "Your Account Has Been Frozen, Please Contact The Administrator To Unfreeze";
          }
          uni.showToast({
            duration: 2000,
            title: title,
            icon: 'none'
          });
          return;
        }
      });
    },
    forget: function forget() {
      var that = this;
      var username = null;
      if (that.userName) {
        username = that.userName;
      }
      uni.navigateTo({
        url: '/pages/login/forgetPass/forgetPass?username=' + username
      });
    },
    onLogin: function onLogin() {
      var _this2 = this;
      var that = this;
      // if (!this.userName || this.userName.length == 0) {
      // 	uni.showToast({
      // 		icon: "none",
      // 		title: 'Please Fill In The Username!',
      // 	})
      // 	return;
      // }
      // if (!this.password || this.password.length == 0) {
      // 	uni.showToast({
      // 		icon: "none",
      // 		title: 'Please Fill In The Password!',
      // 	})
      // 	return;
      // }
      // if (!this.isSend || this.code.length == 0) {
      // 	uni.showToast({
      // 		icon: "none",
      // 		title: 'Please Get The Verification Code!',
      // 	})
      // 	return;
      // }
      var tempParams = {
        username: this.userName,
        password: this.password
      };
      // 用户名密码加密
      var sm2 = (__webpack_require__(37208).sm2);
      var publicKey = '0494006b520344b99a1fcdf1b498281fa37abb391c925cdc30a59be27507add5b74ae062d8329e0147c272d5eabcb503a5ffa3ac8c0dcbd60b5e6464d9a088411b';
      var loginParams = {
        // username: sm2.doEncrypt(tempParams.username, publicKey),
        // password: sm2.doEncrypt(tempParams.password, publicKey),
        password: 'afabf8a41786dec7d3c2c4c3ce017346bcab79e7ccd0185ea906fce5f14435f8c7c2ef504600ec91d89d9744b77a36947aee1ad83c0b76170dd33d92e783e0b8fcaf59e2a8a813608e829c12364570153f2d32b4b866da555021b7ba4ef4e0cd23864772541df5',
        username: '30af15e53d7bdc0b3be6a2fa303681d3de4a9727069ac9cf022dd75f098f87ef3ebcc548b00d60de9ff2a98d5f6fc8e8c17ded9c100db9af3e129c09e3ef793799e2babd11a8bcdc518eaa096665c681348f4d8437563cd740ff1547ae7d8810a88c0b678b3bcd',
        phone: this.phone,
        captcha: this.code,
        checkKey: 1762913952346
      };
      this.loading = true;
      this.mLogin(loginParams).then(function (res) {
        console.log("mLogin", res);
        if (res.data.success) {
          uni.showToast({
            title: 'Login Successful!'
          });
          var data = res.data.result;
          that.handleUserInfo(data, function (data) {
            //首次登录强制修改密码
            // if(data && (data.userInfo.firstLogin == '0'|| data.userInfo.isPassword == '0')){
            // 	that.loading = false
            // 	setTimeout(function() {
            // 		uni.navigateTo({
            // 			url: '/pages/mine/updatepwd?firstLogin=0'
            // 		});
            // 	}, 500);
            // }else{
            uni.reLaunch({
              url: '/pages/index/index'
            });
            // }
          });
        } else {
          _this2.loading = false;
          if (res.data.code == 500) {
            uni.showToast({
              icon: 'none',
              title: 'The Account/Password Is Incorrect. Please Fill In The Correct Account/Password!'
            });
            return false;
          } else {
            uni.showToast({
              icon: 'none',
              title: res.data.message
            });
          }
        }
      }).catch(function (err) {}).finally(function () {});
    },
    handleUserInfo: function handleUserInfo(data, fun) {
      var that = this;
      that.$store.state.departData = {
        multiDepart: data.multi_depart,
        departs: data.departs
      };
      that.$store.state.sysAllDictItems = data.sysAllDictItems;
      uni.setStorageSync(constants/* USER_INFO */.nc, data.userInfo);
      that.$store.state.user = data.userInfo;
      this.$store.dispatch('fetchUserRole', uni.getStorageSync(constants/* USER_INFO */.nc).id);
      if (fun) {
        fun(data);
      }
    }
  })
});
;// ./src/pages/login/login.vue?vue&type=script&lang=js&
 /* harmony default export */ var login_loginvue_type_script_lang_js_ = (loginvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/@dcloudio/vue-cli-plugin-uni/packages/h5-vue-style-loader/index.js??clonedRuleSet-12[0].rules[0].use[0]!./node_modules/css-loader/dist/cjs.js??clonedRuleSet-12[0].rules[0].use[1]!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader/index.js??clonedRuleSet-12[0].rules[0].use[2]!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-12[0].rules[0].use[3]!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-12[0].rules[0].use[4]!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/index.js??vue-loader-options!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-scoped-loader/index.js!./src/pages/login/login.vue?vue&type=style&index=0&id=72e88a5e&scoped=true&lang=css&
var loginvue_type_style_index_0_id_72e88a5e_scoped_true_lang_css_ = __webpack_require__(40983);
;// ./src/pages/login/login.vue?vue&type=style&index=0&id=72e88a5e&scoped=true&lang=css&
 /* harmony default export */ var login_loginvue_type_style_index_0_id_72e88a5e_scoped_true_lang_css_ = ((/* unused pure expression or super */ null && (mod))); 
// EXTERNAL MODULE: ./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(18535);
;// ./src/pages/login/login.vue

var renderjs
;

;


/* normalize component */

var component = (0,componentNormalizer/* default */.A)(
  login_loginvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  null,
  "72e88a5e",
  null,
  false,
  components,
  renderjs
)

/* harmony default export */ var login = (component.exports);

/***/ }),

/***/ 20447:
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
___CSS_LOADER_EXPORT___.push([module.id, "@charset \"UTF-8\";\n/**\n * 这里是uni-app内置的常用样式变量\n *\n * uni-app 官方扩展插件及插件市场（https://ext.dcloud.net.cn）上很多三方插件均使用了这些样式变量\n * 如果你是插件开发者，建议你使用scss预处理，并在插件代码中直接使用这些变量（无需 import 这个文件），方便用户通过搭积木的方式开发整体风格一致的App\n *\n */\n/**\n * 如果你是App开发者（插件使用者），你可以通过修改这些变量来定制自己的插件主题，实现自定义主题功能\n *\n * 如果你的项目同样使用了scss预处理，你也可以直接在你的 scss 代码中使用如下变量，同时无需 import 这个文件\n */\n/* 颜色变量 */\n/* 行为相关颜色 */\n/* 文字基本颜色 */\n/* 背景颜色 */\n/* 边框颜色 */\n/* 尺寸变量 */\n/* 文字尺寸 */\n/* 图片尺寸 */\n/* Border Radius */\n/* 水平间距 */\n/* 垂直间距 */\n/* 透明度 */\n/* 文章场景相关 */uni-view[data-v-1bcd3b93], uni-scroll-view[data-v-1bcd3b93], uni-swiper-item[data-v-1bcd3b93]{display:flex;flex-direction:column;flex-shrink:0;flex-grow:0;flex-basis:auto;align-items:stretch;align-content:flex-start}.u-button[data-v-1bcd3b93]{width:100%}.u-button__text[data-v-1bcd3b93]{white-space:nowrap;line-height:1}.u-button[data-v-1bcd3b93]:before{position:absolute;top:50%;left:50%;width:100%;height:100%;border:inherit;border-radius:inherit;-webkit-transform:translate(-50%,-50%);transform:translate(-50%,-50%);opacity:0;content:\" \";background-color:#000;border-color:#000}.u-button--active[data-v-1bcd3b93]:before{opacity:.15}.u-button__icon + .u-button__text[data-v-1bcd3b93]:not(:empty), .u-button__loading-text[data-v-1bcd3b93]{margin-left:4px}.u-button--plain.u-button--primary[data-v-1bcd3b93]{color:#3c9cff}.u-button--plain.u-button--info[data-v-1bcd3b93]{color:#909399}.u-button--plain.u-button--success[data-v-1bcd3b93]{color:#5ac725}.u-button--plain.u-button--error[data-v-1bcd3b93]{color:#f56c6c}.u-button--plain.u-button--warning[data-v-1bcd3b93]{color:#f56c6c}.u-button[data-v-1bcd3b93]{height:40px;position:relative;align-items:center;justify-content:center;\ndisplay:flex;\nflex-direction:row;box-sizing:border-box;flex-direction:row}.u-button__text[data-v-1bcd3b93]{font-size:15px}.u-button__loading-text[data-v-1bcd3b93]{font-size:15px;margin-left:4px}.u-button--large[data-v-1bcd3b93]{width:100%;height:50px;padding:0 15px}.u-button--normal[data-v-1bcd3b93]{padding:0 12px;font-size:14px}.u-button--small[data-v-1bcd3b93]{min-width:60px;height:30px;padding:0 8px;font-size:12px}.u-button--mini[data-v-1bcd3b93]{height:22px;font-size:10px;min-width:50px;padding:0 8px}.u-button--disabled[data-v-1bcd3b93]{opacity:.5}.u-button--info[data-v-1bcd3b93]{color:#323233;background-color:#fff;border-color:#ebedf0;border-width:1px;border-style:solid}.u-button--success[data-v-1bcd3b93]{color:#fff;background-color:#5ac725;border-color:#5ac725;border-width:1px;border-style:solid}.u-button--primary[data-v-1bcd3b93]{color:#fff;background-color:#3c9cff;border-color:#3c9cff;border-width:1px;border-style:solid}.u-button--error[data-v-1bcd3b93]{color:#fff;background-color:#f56c6c;border-color:#f56c6c;border-width:1px;border-style:solid}.u-button--warning[data-v-1bcd3b93]{color:#fff;background-color:#f9ae3d;border-color:#f9ae3d;border-width:1px;border-style:solid}.u-button--block[data-v-1bcd3b93]{\ndisplay:flex;\nflex-direction:row;width:100%}.u-button--circle[data-v-1bcd3b93]{border-top-right-radius:100px;border-top-left-radius:100px;border-bottom-left-radius:100px;border-bottom-right-radius:100px}.u-button--square[data-v-1bcd3b93]{border-bottom-left-radius:3px;border-bottom-right-radius:3px;border-top-left-radius:3px;border-top-right-radius:3px}.u-button__icon[data-v-1bcd3b93]{min-width:1em;line-height:inherit!important;vertical-align:top}.u-button--plain[data-v-1bcd3b93]{background-color:#fff}.u-button--hairline[data-v-1bcd3b93]{border-width:.5px!important}", ""]);
// Exports
/* harmony default export */ __webpack_exports__["default"] = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ 23461:
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

"use strict";
module.exports = __webpack_require__.p + "static/qa/App-bg.jpg";

/***/ }),

/***/ 23862:
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



var ___CSS_LOADER_URL_IMPORT_0___ = new URL(/* asset import */ __webpack_require__(2685), __webpack_require__.b);
var ___CSS_LOADER_URL_IMPORT_1___ = new URL(/* asset import */ __webpack_require__(39906), __webpack_require__.b);
var ___CSS_LOADER_URL_IMPORT_2___ = new URL(/* asset import */ __webpack_require__(12910), __webpack_require__.b);
var ___CSS_LOADER_URL_IMPORT_3___ = new URL(/* asset import */ __webpack_require__(89607), __webpack_require__.b);
var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
var ___CSS_LOADER_URL_REPLACEMENT_0___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_0___);
var ___CSS_LOADER_URL_REPLACEMENT_1___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_1___);
var ___CSS_LOADER_URL_REPLACEMENT_2___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_2___);
var ___CSS_LOADER_URL_REPLACEMENT_3___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_3___);
// Module
___CSS_LOADER_EXPORT___.push([module.id, "html[data-v-72e88a5e],\n \tbody[data-v-72e88a5e]{height:100%}uni-page-body[data-v-72e88a5e]{background-color:#fff!important;\n \t\t/* background-image: url(../../static/qa/App-bg.jpg); */background-size:100% 100%;font-family:uniicons}.cu-form-group[data-v-72e88a5e]{background-color:#fff;padding-right:5px;display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-align:center;-webkit-align-items:center;align-items:center;min-height:50px;-webkit-box-pack:justify;-webkit-justify-content:space-between;justify-content:space-between}.cu-form-group uni-input[data-v-72e88a5e]{-webkit-box-flex:1;-webkit-flex:1;flex:1;font-size:15px;color:#555;padding-right:10px}.margin-top[data-v-72e88a5e]{margin-top:15px}.login-bg-img[data-v-72e88a5e]{position:fixed;top:0;right:0;left:0;bottom:0;z-index:0;width:100%;height:100%!important}.login-input[data-v-72e88a5e]{height:51px;line-height:51px;background:#fff}.login-input uni-input[data-v-72e88a5e]{webkit-box-shadow:0 0 0 1000px #fff inset;text-align:left!important;background:transparent!important;color:#5b5b5b;text-align:center;border-left:1px solid hsla(0,0%,100%,.55)!important;height:36px;line-height:36px}\n\n \t/* .login-input .login-icon{width: 18px;height: 20px;display: inline;} */.lg.cu-btn[data-v-72e88a5e]{height:51px;line-height:51px;background:#e46f64;border-radius:5px;margin-top:16px;color:hsla(0,0%,100%,.55)}.login-icon[data-v-72e88a5e]{width:33px;height:20px;display:inline;padding-right:15px}.login-icon.pswd[data-v-72e88a5e]{background:url(" + ___CSS_LOADER_URL_REPLACEMENT_0___ + ") no-repeat 0;background-size:20px}.login-icon.user[data-v-72e88a5e]{background:url(" + ___CSS_LOADER_URL_REPLACEMENT_1___ + ") no-repeat 0;background-size:20px}.input-placeholder[data-v-72e88a5e],\n \t.zai-input[data-v-72e88a5e]{color:hsla(0,0%,100%,.55)!important}.lg.cu-btn[data-v-72e88a5e]{color:#fff!important}.forgetPassword[data-v-72e88a5e]{display:flex;justify-content:right;color:#fff;padding:5px}uni-input[data-v-72e88a5e]:-internal-autofill-selected{-webkit-appearance:menulist-button;appearance:menulist-button;background-color:initial!important;background-image:none!important;color:-internal-light-dark(#000,#fff)!important}.login-paddingtop[data-v-72e88a5e]{padding-top:200 upx}.zai-box[data-v-72e88a5e]{position:absolute;width:100%;height:100%;display:flex;justify-content:center;flex-direction:column;align-items:center}.zai-logo[data-v-72e88a5e]{width:60px!important}.zai-title[data-v-72e88a5e]{font-size:14px;color:#999}.input-placeholder[data-v-72e88a5e],\n \t.zai-input[data-v-72e88a5e]{color:#94afce}.zai-label[data-v-72e88a5e]{padding:60 upx 0;text-align:center;font-size:20 upx;color:#a7b6d0}.zai-btn[data-v-72e88a5e]{background:#ff65a3;color:#fff;border:0;border-radius:100 upx;font-size:36 upx}.zai-btn[data-v-72e88a5e]:after{border:0}\n\n \t/*按钮点击效果*/.zai-btn.button-hover[data-v-72e88a5e]{-webkit-transform:translate(1 upx,1 upx);transform:translate(1 upx,1 upx)}.padding-lr-xl[data-v-72e88a5e]{padding-left:%?50?%;padding-right:%?30?%}uni-input[data-v-72e88a5e]:-internal-autofill-selected{background-color:initial!important}.eyeBtn[data-v-72e88a5e]{width:22px;height:22px;position:absolute;top:15px;right:10px;z-index:9;background:url(" + ___CSS_LOADER_URL_REPLACEMENT_2___ + ") no-repeat 50%;background-size:20px}.eyeClass[data-v-72e88a5e]{width:22px;height:22px;position:absolute;top:15px;right:10px;z-index:9;background:url(" + ___CSS_LOADER_URL_REPLACEMENT_3___ + ") no-repeat 50%;background-size:20px}", ""]);
// Exports
/* harmony default export */ __webpack_exports__["default"] = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ 28080:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  A: function() { return /* binding */ u_input; }
});

;// ./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader/index.js??clonedRuleSet-42[0].rules[0].use[0]!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-uni-app-loader/filter-modules-template.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-uni-app-loader/page-meta.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/index.js??vue-loader-options!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-scoped-loader/index.js!./node_modules/uview-ui/components/u-input/u-input.vue?vue&type=template&id=3e7c5a43&scoped=true&
var components = {'uIcon': (__webpack_require__(70495)/* ["default"] */ .A)}
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('v-uni-view',{staticClass:"u-input",class:_vm.inputClass,style:([_vm.wrapperStyle])},[_c('v-uni-view',{staticClass:"u-input__content"},[(_vm.prefixIcon || _vm.$slots.prefix)?_c('v-uni-view',{staticClass:"u-input__content__prefix-icon"},[_vm._t("prefix",[_c('u-icon',{attrs:{"name":_vm.prefixIcon,"size":"18","customStyle":_vm.prefixIconStyle}})])],2):_vm._e(),_c('v-uni-view',{staticClass:"u-input__content__field-wrapper",on:{"click":function($event){
arguments[0] = $event = _vm.$handleEvent($event);
(_vm.clickHandler).apply(void 0, arguments)
}}},[_c('v-uni-input',{staticClass:"u-input__content__field-wrapper__field",style:([_vm.inputStyle]),attrs:{"type":_vm.type,"focus":_vm.focus,"cursor":_vm.cursor,"value":_vm.innerValue,"auto-blur":_vm.autoBlur,"disabled":_vm.disabled || _vm.readonly,"maxlength":_vm.maxlength,"placeholder":_vm.placeholder,"placeholder-style":_vm.placeholderStyle,"placeholder-class":_vm.placeholderClass,"confirm-type":_vm.confirmType,"confirm-hold":_vm.confirmHold,"hold-keyboard":_vm.holdKeyboard,"cursor-spacing":_vm.cursorSpacing,"adjust-position":_vm.adjustPosition,"selection-end":_vm.selectionEnd,"selection-start":_vm.selectionStart,"password":_vm.password || _vm.type === 'password' || false,"ignoreCompositionEvent":_vm.ignoreCompositionEvent},on:{"input":function($event){
arguments[0] = $event = _vm.$handleEvent($event);
(_vm.onInput).apply(void 0, arguments)
},"blur":function($event){
arguments[0] = $event = _vm.$handleEvent($event);
(_vm.onBlur).apply(void 0, arguments)
},"focus":function($event){
arguments[0] = $event = _vm.$handleEvent($event);
(_vm.onFocus).apply(void 0, arguments)
},"confirm":function($event){
arguments[0] = $event = _vm.$handleEvent($event);
(_vm.onConfirm).apply(void 0, arguments)
},"keyboardheightchange":function($event){
arguments[0] = $event = _vm.$handleEvent($event);
(_vm.onkeyboardheightchange).apply(void 0, arguments)
}}})],1),(_vm.isShowClear)?_c('v-uni-view',{staticClass:"u-input__content__clear",on:{"click":function($event){
arguments[0] = $event = _vm.$handleEvent($event);
(_vm.onClear).apply(void 0, arguments)
}}},[_c('u-icon',{attrs:{"name":"close","size":"11","color":"#ffffff","customStyle":"line-height: 12px"}})],1):_vm._e(),(_vm.suffixIcon || _vm.$slots.suffix)?_c('v-uni-view',{staticClass:"u-input__content__subfix-icon"},[_vm._t("suffix",[_c('u-icon',{attrs:{"name":_vm.suffixIcon,"size":"18","customStyle":_vm.suffixIconStyle}})])],2):_vm._e()],1)],1)}
var recyclableRender = false
var staticRenderFns = []


;// ./node_modules/uview-ui/components/u-input/u-input.vue?vue&type=template&id=3e7c5a43&scoped=true&

;// ./node_modules/uview-ui/components/u-input/props.js
/* harmony default export */ var props = ({
	props: {
		// 输入的值
		value: {
			type: [String, Number],
			default: uni.$u.props.input.value
		},
		// 输入框类型
		// number-数字输入键盘，app-vue下可以输入浮点数，app-nvue和小程序平台下只能输入整数
		// idcard-身份证输入键盘，微信、支付宝、百度、QQ小程序
		// digit-带小数点的数字键盘，App的nvue页面、微信、支付宝、百度、头条、QQ小程序
		// text-文本输入键盘
		type: {
			type: String,
			default: uni.$u.props.input.type
		},
		// 如果 textarea 是在一个 position:fixed 的区域，需要显示指定属性 fixed 为 true，
		// 兼容性：微信小程序、百度小程序、字节跳动小程序、QQ小程序
		fixed: {
			type: Boolean,
			default: uni.$u.props.input.fixed
		},
		// 是否禁用输入框
		disabled: {
			type: Boolean,
			default: uni.$u.props.input.disabled
		},
		// 禁用状态时的背景色
		disabledColor: {
			type: String,
			default: uni.$u.props.input.disabledColor
		},
		// 是否显示清除控件
		clearable: {
			type: Boolean,
			default: uni.$u.props.input.clearable
		},
		// 是否密码类型
		password: {
			type: Boolean,
			default: uni.$u.props.input.password
		},
		// 最大输入长度，设置为 -1 的时候不限制最大长度
		maxlength: {
			type: [String, Number],
			default: uni.$u.props.input.maxlength
		},
		// 	输入框为空时的占位符
		placeholder: {
			type: String,
			default: uni.$u.props.input.placeholder
		},
		// 指定placeholder的样式类，注意页面或组件的style中写了scoped时，需要在类名前写/deep/
		placeholderClass: {
			type: String,
			default: uni.$u.props.input.placeholderClass
		},
		// 指定placeholder的样式
		placeholderStyle: {
			type: [String, Object],
			default: uni.$u.props.input.placeholderStyle
		},
		// 是否显示输入字数统计，只在 type ="text"或type ="textarea"时有效
		showWordLimit: {
			type: Boolean,
			default: uni.$u.props.input.showWordLimit
		},
		// 设置右下角按钮的文字，有效值：send|search|next|go|done，兼容性详见uni-app文档
		// https://uniapp.dcloud.io/component/input
		// https://uniapp.dcloud.io/component/textarea
		confirmType: {
			type: String,
			default: uni.$u.props.input.confirmType
		},
		// 点击键盘右下角按钮时是否保持键盘不收起，H5无效
		confirmHold: {
			type: Boolean,
			default: uni.$u.props.input.confirmHold
		},
		// focus时，点击页面的时候不收起键盘，微信小程序有效
		holdKeyboard: {
			type: Boolean,
			default: uni.$u.props.input.holdKeyboard
		},
		// 自动获取焦点
		// 在 H5 平台能否聚焦以及软键盘是否跟随弹出，取决于当前浏览器本身的实现。nvue 页面不支持，需使用组件的 focus()、blur() 方法控制焦点
		focus: {
			type: Boolean,
			default: uni.$u.props.input.focus
		},
		// 键盘收起时，是否自动失去焦点，目前仅App3.0.0+有效
		autoBlur: {
			type: Boolean,
			default: uni.$u.props.input.autoBlur
		},
		// 是否去掉 iOS 下的默认内边距，仅微信小程序，且type=textarea时有效
		disableDefaultPadding: {
			type: Boolean,
			default: uni.$u.props.input.disableDefaultPadding
		},
		// 指定focus时光标的位置
		cursor: {
			type: [String, Number],
			default: uni.$u.props.input.cursor
		},
		// 输入框聚焦时底部与键盘的距离
		cursorSpacing: {
			type: [String, Number],
			default: uni.$u.props.input.cursorSpacing
		},
		// 光标起始位置，自动聚集时有效，需与selection-end搭配使用
		selectionStart: {
			type: [String, Number],
			default: uni.$u.props.input.selectionStart
		},
		// 光标结束位置，自动聚集时有效，需与selection-start搭配使用
		selectionEnd: {
			type: [String, Number],
			default: uni.$u.props.input.selectionEnd
		},
		// 键盘弹起时，是否自动上推页面
		adjustPosition: {
			type: Boolean,
			default: uni.$u.props.input.adjustPosition
		},
		// 输入框内容对齐方式，可选值为：left|center|right
		inputAlign: {
			type: String,
			default: uni.$u.props.input.inputAlign
		},
		// 输入框字体的大小
		fontSize: {
			type: [String, Number],
			default: uni.$u.props.input.fontSize
		},
		// 输入框字体颜色
		color: {
			type: String,
			default: uni.$u.props.input.color
		},
		// 输入框前置图标
		prefixIcon: {
			type: String,
			default: uni.$u.props.input.prefixIcon
		},
		// 前置图标样式，对象或字符串
		prefixIconStyle: {
			type: [String, Object],
			default: uni.$u.props.input.prefixIconStyle
		},
		// 输入框后置图标
		suffixIcon: {
			type: String,
			default: uni.$u.props.input.suffixIcon
		},
		// 后置图标样式，对象或字符串
		suffixIconStyle: {
			type: [String, Object],
			default: uni.$u.props.input.suffixIconStyle
		},
		// 边框类型，surround-四周边框，bottom-底部边框，none-无边框
		border: {
			type: String,
			default: uni.$u.props.input.border
		},
		// 是否只读，与disabled不同之处在于disabled会置灰组件，而readonly则不会
		readonly: {
			type: Boolean,
			default: uni.$u.props.input.readonly
		},
		// 输入框形状，circle-圆形，square-方形
		shape: {
			type: String,
			default: uni.$u.props.input.shape
		},
		// 用于处理或者过滤输入框内容的方法
		formatter: {
			type: [Function, null],
			default: uni.$u.props.input.formatter
		},
		// 是否忽略组件内对文本合成系统事件的处理
		ignoreCompositionEvent: {
			type: Boolean,
			default: true
		}
	}
});

;// ./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader/index.js??clonedRuleSet-43[0].rules[0].use[0]!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-uni-app-loader/using-components.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/index.js??vue-loader-options!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-scoped-loader/index.js!./node_modules/uview-ui/components/u-input/u-input.vue?vue&type=script&lang=js&
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
 * Input 输入框
 * @description  此组件为一个输入框，默认没有边框和样式，是专门为配合表单组件u-form而设计的，利用它可以快速实现表单验证，输入内容，下拉选择等功能。
 * @tutorial https://uviewui.com/components/input.html
 * @property {String | Number}	value					输入的值
 * @property {String}			type					输入框类型，见上方说明 （ 默认 'text' ）
 * @property {Boolean}			fixed					如果 textarea 是在一个 position:fixed 的区域，需要显示指定属性 fixed 为 true，兼容性：微信小程序、百度小程序、字节跳动小程序、QQ小程序 （ 默认 false ）
 * @property {Boolean}			disabled				是否禁用输入框 （ 默认 false ）
 * @property {String}			disabledColor			禁用状态时的背景色（ 默认 '#f5f7fa' ）
 * @property {Boolean}			clearable				是否显示清除控件 （ 默认 false ）
 * @property {Boolean}			password				是否密码类型 （ 默认 false ）
 * @property {String | Number}	maxlength				最大输入长度，设置为 -1 的时候不限制最大长度 （ 默认 -1 ）
 * @property {String}			placeholder				输入框为空时的占位符
 * @property {String}			placeholderClass		指定placeholder的样式类，注意页面或组件的style中写了scoped时，需要在类名前写/deep/ （ 默认 'input-placeholder' ）
 * @property {String | Object}	placeholderStyle		指定placeholder的样式，字符串/对象形式，如"color: red;"
 * @property {Boolean}			showWordLimit			是否显示输入字数统计，只在 type ="text"或type ="textarea"时有效 （ 默认 false ）
 * @property {String}			confirmType				设置右下角按钮的文字，兼容性详见uni-app文档 （ 默认 'done' ）
 * @property {Boolean}			confirmHold				点击键盘右下角按钮时是否保持键盘不收起，H5无效 （ 默认 false ）
 * @property {Boolean}			holdKeyboard			focus时，点击页面的时候不收起键盘，微信小程序有效 （ 默认 false ）
 * @property {Boolean}			focus					自动获取焦点，在 H5 平台能否聚焦以及软键盘是否跟随弹出，取决于当前浏览器本身的实现。nvue 页面不支持，需使用组件的 focus()、blur() 方法控制焦点 （ 默认 false ）
 * @property {Boolean}			autoBlur				键盘收起时，是否自动失去焦点，目前仅App3.0.0+有效 （ 默认 false ）
 * @property {Boolean}			disableDefaultPadding	是否去掉 iOS 下的默认内边距，仅微信小程序，且type=textarea时有效 （ 默认 false ）
 * @property {String ｜ Number}	cursor					指定focus时光标的位置（ 默认 -1 ）
 * @property {String ｜ Number}	cursorSpacing			输入框聚焦时底部与键盘的距离 （ 默认 30 ）
 * @property {String ｜ Number}	selectionStart			光标起始位置，自动聚集时有效，需与selection-end搭配使用 （ 默认 -1 ）
 * @property {String ｜ Number}	selectionEnd			光标结束位置，自动聚集时有效，需与selection-start搭配使用 （ 默认 -1 ）
 * @property {Boolean}			adjustPosition			键盘弹起时，是否自动上推页面 （ 默认 true ）
 * @property {String}			inputAlign				输入框内容对齐方式（ 默认 'left' ）
 * @property {String | Number}	fontSize				输入框字体的大小 （ 默认 '15px' ）
 * @property {String}			color					输入框字体颜色	（ 默认 '#303133' ）
 * @property {Function}			formatter			    内容式化函数
 * @property {String}			prefixIcon				输入框前置图标
 * @property {String | Object}	prefixIconStyle			前置图标样式，对象或字符串
 * @property {String}			suffixIcon				输入框后置图标
 * @property {String | Object}	suffixIconStyle			后置图标样式，对象或字符串
 * @property {String}			border					边框类型，surround-四周边框，bottom-底部边框，none-无边框 （ 默认 'surround' ）
 * @property {Boolean}			readonly				是否只读，与disabled不同之处在于disabled会置灰组件，而readonly则不会 （ 默认 false ）
 * @property {String}			shape					输入框形状，circle-圆形，square-方形 （ 默认 'square' ）
 * @property {Object}			customStyle				定义需要用到的外部样式
 * @property {Boolean}			ignoreCompositionEvent	是否忽略组件内对文本合成系统事件的处理。
 * @example <u-input v-model="value" :password="true" suffix-icon="lock-fill" />
 */
/* harmony default export */ var u_inputvue_type_script_lang_js_ = ({
	name: "u-input",
	mixins: [uni.$u.mpMixin, uni.$u.mixin, props],
	data() {
		return {
			// 输入框的值
			innerValue: "",
			// 是否处于获得焦点状态
			focused: false,
			// value是否第一次变化，在watch中，由于加入immediate属性，会在第一次触发，此时不应该认为value发生了变化
			firstChange: true,
			// value绑定值的变化是由内部还是外部引起的
			changeFromInner: false,
			// 过滤处理方法
			innerFormatter: value => value
		};
	},
	watch: {
		value: {
			immediate: true,
			handler(newVal, oldVal) {
				this.innerValue = newVal;

				// 在H5中，外部value变化后，修改input中的值，不会触发@input事件，此时手动调用值变化方法
				if (
					this.firstChange === false &&
					this.changeFromInner === false
				) {
					this.valueChange();
				}

				this.firstChange = false;
				// 重置changeFromInner的值为false，标识下一次引起默认为外部引起的
				this.changeFromInner = false;
			},
		},
	},
	computed: {
		// 是否显示清除控件
		isShowClear() {
			const { clearable, readonly, focused, innerValue } = this;
			return !!clearable && !readonly && !!focused && innerValue !== "";
		},
		// 组件的类名
		inputClass() {
			let classes = [],
				{ border, disabled, shape } = this;
			border === "surround" &&
				(classes = classes.concat(["u-border", "u-input--radius"]));
			classes.push(`u-input--${shape}`);
			border === "bottom" &&
				(classes = classes.concat([
					"u-border-bottom",
					"u-input--no-radius",
				]));
			return classes.join(" ");
		},
		// 组件的样式
		wrapperStyle() {
			const style = {};
			// 禁用状态下，被背景色加上对应的样式
			if (this.disabled) {
				style.backgroundColor = this.disabledColor;
			}
			// 无边框时，去除内边距
			if (this.border === "none") {
				style.padding = "0";
			} else {
				// 由于uni-app的iOS开发者能力有限，导致需要分开写才有效
				style.paddingTop = "6px";
				style.paddingBottom = "6px";
				style.paddingLeft = "9px";
				style.paddingRight = "9px";
			}
			return uni.$u.deepMerge(style, uni.$u.addStyle(this.customStyle));
		},
		// 输入框的样式
		inputStyle() {
			const style = {
				color: this.color,
				fontSize: uni.$u.addUnit(this.fontSize),
				textAlign: this.inputAlign
			};
			return style;
		},
	},
	methods: {
		// 在微信小程序中，不支持将函数当做props参数，故只能通过ref形式调用
		setFormatter(e) {
			this.innerFormatter = e
		},
		// 当键盘输入时，触发input事件
		onInput(e) {
			let { value = "" } = e.detail || {};
			// 格式化过滤方法
			const formatter = this.formatter || this.innerFormatter
			const formatValue = formatter(value)
			// 为了避免props的单向数据流特性，需要先将innerValue值设置为当前值，再在$nextTick中重新赋予设置后的值才有效
			this.innerValue = value
			this.$nextTick(() => {
				this.innerValue = formatValue;
				this.valueChange();
			})
		},
		// 输入框失去焦点时触发
		onBlur(event) {
			this.$emit("blur", event.detail.value);
			// H5端的blur会先于点击清除控件的点击click事件触发，导致focused
			// 瞬间为false，从而隐藏了清除控件而无法被点击到
			uni.$u.sleep(50).then(() => {
				this.focused = false;
			});
			// 尝试调用u-form的验证方法
			uni.$u.formValidate(this, "blur");
		},
		// 输入框聚焦时触发
		onFocus(e) {
			this.focused = true;
			this.$emit("focus", e);
		},
		// 点击完成按钮时触发
		onConfirm(event) {
			this.$emit("confirm", this.innerValue);
		},
		// 键盘高度发生变化的时候触发此事件
		// 兼容性：微信小程序2.7.0+、App 3.1.0+
		onkeyboardheightchange(e) {
			this.$emit("keyboardheightchange", e);
		},
		// 内容发生变化，进行处理
		valueChange() {
			const value = this.innerValue;
			this.$nextTick(() => {
				this.$emit("input", value);
				// 标识value值的变化是由内部引起的
				this.changeFromInner = true;
				this.$emit("change", value);
				// 尝试调用u-form的验证方法
				uni.$u.formValidate(this, "change");
			});
		},
		// 点击清除控件
		onClear() {
			this.innerValue = "";
			this.$nextTick(() => {
				this.valueChange();
				this.$emit("clear");
			});
		},
		/**
		 * 在安卓nvue上，事件无法冒泡
		 * 在某些时间，我们希望监听u-from-item的点击事件，此时会导致点击u-form-item内的u-input后
		 * 无法触发u-form-item的点击事件，这里通过手动调用u-form-item的方法进行触发
		 */
		clickHandler() {








		},
	},
});

;// ./node_modules/uview-ui/components/u-input/u-input.vue?vue&type=script&lang=js&
 /* harmony default export */ var u_input_u_inputvue_type_script_lang_js_ = (u_inputvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/@dcloudio/vue-cli-plugin-uni/packages/h5-vue-style-loader/index.js??clonedRuleSet-22[0].rules[0].use[0]!./node_modules/css-loader/dist/cjs.js??clonedRuleSet-22[0].rules[0].use[1]!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader/index.js??clonedRuleSet-22[0].rules[0].use[2]!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-22[0].rules[0].use[3]!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-22[0].rules[0].use[4]!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/sass-loader/dist/cjs.js??clonedRuleSet-22[0].rules[0].use[5]!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader/index.js??clonedRuleSet-22[0].rules[0].use[6]!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/index.js??vue-loader-options!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-scoped-loader/index.js!./node_modules/uview-ui/components/u-input/u-input.vue?vue&type=style&index=0&id=3e7c5a43&lang=scss&scoped=true&
var u_inputvue_type_style_index_0_id_3e7c5a43_lang_scss_scoped_true_ = __webpack_require__(87985);
;// ./node_modules/uview-ui/components/u-input/u-input.vue?vue&type=style&index=0&id=3e7c5a43&lang=scss&scoped=true&
 /* harmony default export */ var u_input_u_inputvue_type_style_index_0_id_3e7c5a43_lang_scss_scoped_true_ = ((/* unused pure expression or super */ null && (mod))); 
// EXTERNAL MODULE: ./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(18535);
;// ./node_modules/uview-ui/components/u-input/u-input.vue

var renderjs
;

;


/* normalize component */

var component = (0,componentNormalizer/* default */.A)(
  u_input_u_inputvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  null,
  "3e7c5a43",
  null,
  false,
  components,
  renderjs
)

/* harmony default export */ var u_input = (component.exports);

/***/ }),

/***/ 38525:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  A: function() { return /* binding */ u_code; }
});

;// ./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader/index.js??clonedRuleSet-42[0].rules[0].use[0]!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-uni-app-loader/filter-modules-template.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-uni-app-loader/page-meta.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/index.js??vue-loader-options!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-scoped-loader/index.js!./node_modules/uview-ui/components/u-code/u-code.vue?vue&type=template&id=83991a1a&scoped=true&
var components;
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('v-uni-view',{staticClass:"u-code"})}
var recyclableRender = false
var staticRenderFns = []


;// ./node_modules/uview-ui/components/u-code/props.js
/* harmony default export */ var props = ({
    props: {
        // 倒计时总秒数
        seconds: {
            type: [String, Number],
            default: uni.$u.props.code.seconds
        },
        // 尚未开始时提示
        startText: {
            type: String,
            default: uni.$u.props.code.startText
        },
        // 正在倒计时中的提示
        changeText: {
            type: String,
            default: uni.$u.props.code.changeText
        },
        // 倒计时结束时的提示
        endText: {
            type: String,
            default: uni.$u.props.code.endText
        },
        // 是否在H5刷新或各端返回再进入时继续倒计时
        keepRunning: {
            type: Boolean,
            default: uni.$u.props.code.keepRunning
        },
        // 为了区分多个页面，或者一个页面多个倒计时组件本地存储的继续倒计时变了
        uniqueKey: {
            type: String,
            default: uni.$u.props.code.uniqueKey
        }
    }
});

;// ./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader/index.js??clonedRuleSet-43[0].rules[0].use[0]!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-uni-app-loader/using-components.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/index.js??vue-loader-options!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-scoped-loader/index.js!./node_modules/uview-ui/components/u-code/u-code.vue?vue&type=script&lang=js&
//
//
//
//
//
//

	
	/**
	 * Code 验证码输入框
	 * @description 考虑到用户实际发送验证码的场景，可能是一个按钮，也可能是一段文字，提示语各有不同，所以本组件 不提供界面显示，只提供提示语，由用户将提示语嵌入到具体的场景
	 * @tutorial https://www.uviewui.com/components/code.html
	 * @property {String | Number}	seconds			倒计时所需的秒数（默认 60 ）
	 * @property {String}			startText		开始前的提示语，见官网说明（默认 '获取验证码' ）
	 * @property {String}			changeText		倒计时期间的提示语，必须带有字母"x"，见官网说明（默认 'X秒重新获取' ）
	 * @property {String}			endText			倒计结束的提示语，见官网说明（默认 '重新获取' ）
	 * @property {Boolean}			keepRunning		是否在H5刷新或各端返回再进入时继续倒计时（ 默认false ）
	 * @property {String}			uniqueKey		为了区分多个页面，或者一个页面多个倒计时组件本地存储的继续倒计时变了
	 *
	 * @event {Function}	change	倒计时期间，每秒触发一次
	 * @event {Function}	start	开始倒计时触发
	 * @event {Function}	end		结束倒计时触发
	 * @example <u-code ref="uCode" @change="codeChange" seconds="20"></u-code>
	 */
	/* harmony default export */ var u_codevue_type_script_lang_js_ = ({
		name: "u-code",
		mixins: [uni.$u.mpMixin, uni.$u.mixin,props],
		data() {
			return {
				secNum: this.seconds,
				timer: null,
				canGetCode: true, // 是否可以执行验证码操作
			}
		},
		mounted() {
			this.checkKeepRunning()
		},
		watch: {
			seconds: {
				immediate: true,
				handler(n) {
					this.secNum = n
				}
			}
		},
		methods: {
			checkKeepRunning() {
				// 获取上一次退出页面(H5还包括刷新)时的时间戳，如果没有上次的保存，此值可能为空
				let lastTimestamp = Number(uni.getStorageSync(this.uniqueKey + '_$uCountDownTimestamp'))
				if(!lastTimestamp) return this.changeEvent(this.startText)
				// 当前秒的时间戳
				let nowTimestamp = Math.floor((+ new Date()) / 1000)
				// 判断当前的时间戳，是否小于上一次的本该按设定结束，却提前结束的时间戳
				if(this.keepRunning && lastTimestamp && lastTimestamp > nowTimestamp) {
					// 剩余尚未执行完的倒计秒数
					this.secNum = lastTimestamp - nowTimestamp
					// 清除本地保存的变量
					uni.removeStorageSync(this.uniqueKey + '_$uCountDownTimestamp')
					// 开始倒计时
					this.start()
				} else {
					// 如果不存在需要继续上一次的倒计时，执行正常的逻辑
					this.changeEvent(this.startText)
				}
			},
			// 开始倒计时
			start() {
				// 防止快速点击获取验证码的按钮而导致内部产生多个定时器导致混乱
				if(this.timer) {
					clearInterval(this.timer)
					this.timer = null
				}
				this.$emit('start')
				this.canGetCode = false
				// 这里放这句，是为了一开始时就提示，否则要等setInterval的1秒后才会有提示
				this.changeEvent(this.changeText.replace(/x|X/, this.secNum))
				this.timer = setInterval(() => {
					if (--this.secNum) {
						// 用当前倒计时的秒数替换提示字符串中的"x"字母
						this.changeEvent(this.changeText.replace(/x|X/, this.secNum))
					} else {
						clearInterval(this.timer)
						this.timer = null
						this.changeEvent(this.endText)
						this.secNum = this.seconds
						this.$emit('end')
						this.canGetCode = true
					}
				}, 1000)
        this.setTimeToStorage()
      },
			// 重置，可以让用户再次获取验证码
			reset() {
				this.canGetCode = true
				clearInterval(this.timer)
				this.secNum = this.seconds
				this.changeEvent(this.endText)
			},
			changeEvent(text) {
				this.$emit('change', text)
			},
			// 保存时间戳，为了防止倒计时尚未结束，H5刷新或者各端的右上角返回上一页再进来
			setTimeToStorage() {
				if(!this.keepRunning || !this.timer) return
				// 记录当前的时间戳，为了下次进入页面，如果还在倒计时内的话，继续倒计时
				// 倒计时尚未结束，结果大于0；倒计时已经开始，就会小于初始值，如果等于初始值，说明没有开始倒计时，无需处理
				if(this.secNum > 0 && this.secNum <= this.seconds) {
					// 获取当前时间戳(+ new Date()为特殊写法)，除以1000变成秒，再去除小数部分
					let nowTimestamp = Math.floor((+ new Date()) / 1000)
					// 将本该结束时候的时间戳保存起来 => 当前时间戳 + 剩余的秒数
					uni.setStorage({
						key: this.uniqueKey + '_$uCountDownTimestamp',
						data: nowTimestamp + Number(this.secNum)
					})
				}
			}
		},
		// 组件销毁的时候，清除定时器，否则定时器会继续存在，系统不会自动清除
		beforeDestroy() {
			this.setTimeToStorage()
			clearTimeout(this.timer)
			this.timer = null
		}
	});

;// ./node_modules/uview-ui/components/u-code/u-code.vue?vue&type=script&lang=js&
 /* harmony default export */ var u_code_u_codevue_type_script_lang_js_ = (u_codevue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/@dcloudio/vue-cli-plugin-uni/packages/h5-vue-style-loader/index.js??clonedRuleSet-22[0].rules[0].use[0]!./node_modules/css-loader/dist/cjs.js??clonedRuleSet-22[0].rules[0].use[1]!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader/index.js??clonedRuleSet-22[0].rules[0].use[2]!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-22[0].rules[0].use[3]!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-22[0].rules[0].use[4]!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/sass-loader/dist/cjs.js??clonedRuleSet-22[0].rules[0].use[5]!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader/index.js??clonedRuleSet-22[0].rules[0].use[6]!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/index.js??vue-loader-options!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-scoped-loader/index.js!./node_modules/uview-ui/components/u-code/u-code.vue?vue&type=style&index=0&id=83991a1a&lang=scss&scoped=true&
var u_codevue_type_style_index_0_id_83991a1a_lang_scss_scoped_true_ = __webpack_require__(68847);
;// ./node_modules/uview-ui/components/u-code/u-code.vue?vue&type=style&index=0&id=83991a1a&lang=scss&scoped=true&
 /* harmony default export */ var u_code_u_codevue_type_style_index_0_id_83991a1a_lang_scss_scoped_true_ = ((/* unused pure expression or super */ null && (mod))); 
// EXTERNAL MODULE: ./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(18535);
;// ./node_modules/uview-ui/components/u-code/u-code.vue

var renderjs
;

;


/* normalize component */

var component = (0,componentNormalizer/* default */.A)(
  u_code_u_codevue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  null,
  "83991a1a",
  null,
  false,
  components,
  renderjs
)

/* harmony default export */ var u_code = (component.exports);

/***/ }),

/***/ 39320:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  A: function() { return /* binding */ u_loading_icon; }
});

;// ./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader/index.js??clonedRuleSet-42[0].rules[0].use[0]!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-uni-app-loader/filter-modules-template.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-uni-app-loader/page-meta.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/index.js??vue-loader-options!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-scoped-loader/index.js!./node_modules/uview-ui/components/u-loading-icon/u-loading-icon.vue?vue&type=template&id=51442d1a&scoped=true&
var components;
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return (_vm.show)?_c('v-uni-view',{staticClass:"u-loading-icon",class:[_vm.vertical && 'u-loading-icon--vertical'],style:([_vm.$u.addStyle(_vm.customStyle)])},[(!_vm.webviewHide)?_c('v-uni-view',{ref:"ani",staticClass:"u-loading-icon__spinner",class:[("u-loading-icon__spinner--" + _vm.mode)],style:({
			color: _vm.color,
			width: _vm.$u.addUnit(_vm.size),
			height: _vm.$u.addUnit(_vm.size),
			borderTopColor: _vm.color,
			borderBottomColor: _vm.otherBorderColor,
			borderLeftColor: _vm.otherBorderColor,
			borderRightColor: _vm.otherBorderColor,
			'animation-duration': (_vm.duration + "ms"),
			'animation-timing-function': _vm.mode === 'semicircle' || _vm.mode === 'circle' ? _vm.timingFunction : ''
		})},[(_vm.mode === 'spinner')?_vm._l((_vm.array12),function(item,index){return _c('v-uni-view',{key:index,staticClass:"u-loading-icon__dot"})}):_vm._e()],2):_vm._e(),(_vm.text)?_c('v-uni-text',{staticClass:"u-loading-icon__text",style:({
			fontSize: _vm.$u.addUnit(_vm.textSize),
			color: _vm.textColor,
		})},[_vm._v(_vm._s(_vm.text))]):_vm._e()],1):_vm._e()}
var recyclableRender = false
var staticRenderFns = []


;// ./node_modules/uview-ui/components/u-loading-icon/props.js
/* harmony default export */ var props = ({
    props: {
        // 是否显示组件
        show: {
            type: Boolean,
            default: uni.$u.props.loadingIcon.show
        },
        // 颜色
        color: {
            type: String,
            default: uni.$u.props.loadingIcon.color
        },
        // 提示文字颜色
        textColor: {
            type: String,
            default: uni.$u.props.loadingIcon.textColor
        },
        // 文字和图标是否垂直排列
        vertical: {
            type: Boolean,
            default: uni.$u.props.loadingIcon.vertical
        },
        // 模式选择，circle-圆形，spinner-花朵形，semicircle-半圆形
        mode: {
            type: String,
            default: uni.$u.props.loadingIcon.mode
        },
        // 图标大小，单位默认px
        size: {
            type: [String, Number],
            default: uni.$u.props.loadingIcon.size
        },
        // 文字大小
        textSize: {
            type: [String, Number],
            default: uni.$u.props.loadingIcon.textSize
        },
        // 文字内容
        text: {
            type: [String, Number],
            default: uni.$u.props.loadingIcon.text
        },
        // 动画模式
        timingFunction: {
            type: String,
            default: uni.$u.props.loadingIcon.timingFunction
        },
        // 动画执行周期时间
        duration: {
            type: [String, Number],
            default: uni.$u.props.loadingIcon.duration
        },
        // mode=circle时的暗边颜色
        inactiveColor: {
            type: String,
            default: uni.$u.props.loadingIcon.inactiveColor
        }
    }
});

;// ./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader/index.js??clonedRuleSet-43[0].rules[0].use[0]!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-uni-app-loader/using-components.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/index.js??vue-loader-options!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-scoped-loader/index.js!./node_modules/uview-ui/components/u-loading-icon/u-loading-icon.vue?vue&type=script&lang=js&
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
 * loading 加载动画
 * @description 警此组件为一个小动画，目前用在uView的loadmore加载更多和switch开关等组件的正在加载状态场景。
 * @tutorial https://www.uviewui.com/components/loading.html
 * @property {Boolean}			show			是否显示组件  (默认 true)
 * @property {String}			color			动画活动区域的颜色，只对 mode = flower 模式有效（默认color['u-tips-color']）
 * @property {String}			textColor		提示文本的颜色（默认color['u-tips-color']）
 * @property {Boolean}			vertical		文字和图标是否垂直排列 (默认 false )
 * @property {String}			mode			模式选择，见官网说明（默认 'circle' ）
 * @property {String | Number}	size			加载图标的大小，单位px （默认 24 ）
 * @property {String | Number}	textSize		文字大小（默认 15 ）
 * @property {String | Number}	text			文字内容 
 * @property {String}			timingFunction	动画模式 （默认 'ease-in-out' ）
 * @property {String | Number}	duration		动画执行周期时间（默认 1200）
 * @property {String}			inactiveColor	mode=circle时的暗边颜色 
 * @property {Object}			customStyle		定义需要用到的外部样式
 * @example <u-loading mode="circle"></u-loading>
 */
/* harmony default export */ var u_loading_iconvue_type_script_lang_js_ = ({
	name: 'u-loading-icon',
	mixins: [uni.$u.mpMixin, uni.$u.mixin, props],
	data() {
		return {
			// Array.form可以通过一个伪数组对象创建指定长度的数组
			// https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Array/from
			array12: Array.from({
				length: 12
			}),
			// 这里需要设置默认值为360，否则在安卓nvue上，会延迟一个duration周期后才执行
			// 在iOS nvue上，则会一开始默认执行两个周期的动画
			aniAngel: 360, // 动画旋转角度
			webviewHide: false, // 监听webview的状态，如果隐藏了页面，则停止动画，以免性能消耗
			loading: false, // 是否运行中，针对nvue使用
		}
	},
	computed: {
		// 当为circle类型时，给其另外三边设置一个更轻一些的颜色
		// 之所以需要这么做的原因是，比如父组件传了color为红色，那么需要另外的三个边为浅红色
		// 而不能是固定的某一个其他颜色(因为这个固定的颜色可能浅蓝，导致效果没有那么细腻良好)
		otherBorderColor() {
			const lightColor = uni.$u.colorGradient(this.color, '#ffffff', 100)[80]
			if (this.mode === 'circle') {
				return this.inactiveColor ? this.inactiveColor : lightColor
			} else {
				return 'transparent'
			}
			// return this.mode === 'circle' ? this.inactiveColor ? this.inactiveColor : lightColor : 'transparent'
		}
	},
	watch: {
		show(n) {
			// nvue中，show为true，且为非loading状态，就重新执行动画模块







		}
	},
	mounted() {
		this.init()
	},
	methods: {
		init() {
			setTimeout(() => {






			}, 20)
		},
		// 监听webview的显示与隐藏
		addEventListenerToWebview() {
			// webview的堆栈
			const pages = getCurrentPages()
			// 当前页面
			const page = pages[pages.length - 1]
			// 当前页面的webview实例
			const currentWebview = page.$getAppWebview()
			// 监听webview的显示与隐藏，从而停止或者开始动画(为了性能)
			currentWebview.addEventListener('hide', () => {
				this.webviewHide = true
			})
			currentWebview.addEventListener('show', () => {
				this.webviewHide = false
			})
		},





























	}
});

;// ./node_modules/uview-ui/components/u-loading-icon/u-loading-icon.vue?vue&type=script&lang=js&
 /* harmony default export */ var u_loading_icon_u_loading_iconvue_type_script_lang_js_ = (u_loading_iconvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/@dcloudio/vue-cli-plugin-uni/packages/h5-vue-style-loader/index.js??clonedRuleSet-22[0].rules[0].use[0]!./node_modules/css-loader/dist/cjs.js??clonedRuleSet-22[0].rules[0].use[1]!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader/index.js??clonedRuleSet-22[0].rules[0].use[2]!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-22[0].rules[0].use[3]!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-22[0].rules[0].use[4]!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/sass-loader/dist/cjs.js??clonedRuleSet-22[0].rules[0].use[5]!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader/index.js??clonedRuleSet-22[0].rules[0].use[6]!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/index.js??vue-loader-options!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-scoped-loader/index.js!./node_modules/uview-ui/components/u-loading-icon/u-loading-icon.vue?vue&type=style&index=0&id=51442d1a&lang=scss&scoped=true&
var u_loading_iconvue_type_style_index_0_id_51442d1a_lang_scss_scoped_true_ = __webpack_require__(64668);
;// ./node_modules/uview-ui/components/u-loading-icon/u-loading-icon.vue?vue&type=style&index=0&id=51442d1a&lang=scss&scoped=true&
 /* harmony default export */ var u_loading_icon_u_loading_iconvue_type_style_index_0_id_51442d1a_lang_scss_scoped_true_ = ((/* unused pure expression or super */ null && (mod))); 
// EXTERNAL MODULE: ./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(18535);
;// ./node_modules/uview-ui/components/u-loading-icon/u-loading-icon.vue

var renderjs
;

;


/* normalize component */

var component = (0,componentNormalizer/* default */.A)(
  u_loading_icon_u_loading_iconvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  null,
  "51442d1a",
  null,
  false,
  components,
  renderjs
)

/* harmony default export */ var u_loading_icon = (component.exports);

/***/ }),

/***/ 39906:
/***/ (function(module) {

"use strict";
module.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADYAAAA8CAYAAAAt3km7AAAAAXNSR0IArs4c6QAAAERlWElmTU0AKgAAAAgAAYdpAAQAAAABAAAAGgAAAAAAA6ABAAMAAAABAAEAAKACAAQAAAABAAAANqADAAQAAAABAAAAPAAAAAC58zYFAAAE30lEQVRoBe1ZSUwUQRQdETfiAu6JigsnFbcoihoNUUngovEk8cZN4sGEs/GgF0+eiAcvxot69qJGY0wMxgUk4gIGRVAjRkQMcd/wPZgeaqp/jV3VM0yj85OXrnr16y9d1dXV1bFYTsbWHRiX4XAnwn4JUBQH3fXH8QzX7yQyIZlIjDY3AluB1QCTk4RJtQKNwB1gEEibpDuxFYhsP7DMMsJO6J8FHlv2M6qPN7bYN+xFlzqA085W2Gc78Btot+0s6acjMY76QaBKcmDJrYT+fKDJsp9PPR2J1cBqpc+yO1GMrhOAh+4mYrH8MJ3RdxOwO4WN12i7CjwBeoGfwCygFKgAFgOS0OZz4LbUGIQLs3jwrp4AGKguP0CcAa7pDUqdvrcBtcAkhfeKfSjUA7RlLWGmYjW8ccR0+QriGHBPbxDq3eDuA1sA3ihVClD5DHSoZNByXlBFQW+XwJE6BXQa2iS6C2SD1ADO5MOgPkK7JrYQJuaNmEmUWlC6lagFL7Bfs6BOH/RlLa6JrTF4umLgg9CXDEomXwb1Ydo1sTmCVa543CK5Sjs68vnURfKl6/jqrokV+izFYu/AcefgKr/QkTZ0kXzpOr66a2KTfZaGVzCBtqK+CdqSL0EtmXJN7EOymaHabIGzpWYIHSRfgloylc7EpsO0ywbYi4h9pZvT7ynYXF0TM72ndtg413Q3a3Wvyq2VtbgmxtVP2urwhTrVOopYbAr6cH+oC304rbSuiXFZ5lZIFz4j/IThPjCoUPcAwKmsC31IrwBdz1cPs1fsgbWdPovD31MLwDMovttSCY8NmFS5QYlbLafFI0xidDgfKBaC4jaI5x4fAd4A/f3GmbIeOATw41KSRpDOOxmbKSM5nwaSO/m5UmOcG8D1KfAWYIL8zOHZCPuahLqHAd4YJwmbGJ1ydI4CTi9SGtCEz9QR4JXGW1XDTEXPEUeEK9c6gKtbGHmPzseBF2GMsG86EqMdPm83gaWA06YV/Xj0xqTeAKElHVNRD4IjVwMs0hsM9ZfgzwMthnYnOhOJeYHwoGYDsByYCRQBFG6ROOXagCagG8hJ7g7k7kDuDkTjDrisity4lgBc5YiwL2WYEOULWK6ghPVPQpvEyuCAR9KrAOlIGnTGhGchD4AbwN0gXoIkxg2ry8+8IP5ddDh65wDuVIzyty3VHvSsA/iCjYowFs6cXwD/4ohiSowjyS/haiDIqIrGM0gyplKA34PcvfjElNg+aFb6tKNH8CM3H3ikh0ZSF375cgqapBsN14GHQB/A76dMCFdf/pTgXrMCWAJIwlh5knVHbdSnWaqfeVyZTgNcmQZVI6NQZpx8rmoBaUXmDa4HEidn+lSsQmM5oAvfKfxKvq83jGK9G75aAcbH0VSlAJVPQIdH5nmF+NX0XDWgvUvTzUaVU+6kwXFS7GpiPDLjnNaFq06LTmaxzliaBf+MnTkMiZrYWo/Urpe1ehSqFw1BJHJQE5POKrhgtBmMZJPmi1lajRM5qIl5n+5qwDxY0Q871fZslbnr6BWcF3qcmthUj1Sun5Vy1IrSYeo0L0g1MY/7J665xMbaMP4XIybt/yQuKoMnxZbg1BHrESKWOEEtK5QUW4JTE7uA8AaUEFkmF1VJGa/+2cL/wGXxTHhooiYaxQTHWrxRvIcRiekP4NK7Fti0xTEAAAAASUVORK5CYII=";

/***/ }),

/***/ 40983:
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(23862);
if(content.__esModule) content = content.default;
if(typeof content === 'string') content = [[module.id, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var add = (__webpack_require__(69333)/* ["default"] */ .A)
var update = add("72201947", content, true, {"sourceMap":false,"shadowMode":false});

/***/ }),

/***/ 60579:
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(20447);
if(content.__esModule) content = content.default;
if(typeof content === 'string') content = [[module.id, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var add = (__webpack_require__(69333)/* ["default"] */ .A)
var update = add("e3e42cc0", content, true, {"sourceMap":false,"shadowMode":false});

/***/ }),

/***/ 63808:
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
___CSS_LOADER_EXPORT___.push([module.id, "@charset \"UTF-8\";\n/**\n * 这里是uni-app内置的常用样式变量\n *\n * uni-app 官方扩展插件及插件市场（https://ext.dcloud.net.cn）上很多三方插件均使用了这些样式变量\n * 如果你是插件开发者，建议你使用scss预处理，并在插件代码中直接使用这些变量（无需 import 这个文件），方便用户通过搭积木的方式开发整体风格一致的App\n *\n */\n/**\n * 如果你是App开发者（插件使用者），你可以通过修改这些变量来定制自己的插件主题，实现自定义主题功能\n *\n * 如果你的项目同样使用了scss预处理，你也可以直接在你的 scss 代码中使用如下变量，同时无需 import 这个文件\n */\n/* 颜色变量 */\n/* 行为相关颜色 */\n/* 文字基本颜色 */\n/* 背景颜色 */\n/* 边框颜色 */\n/* 尺寸变量 */\n/* 文字尺寸 */\n/* 图片尺寸 */\n/* Border Radius */\n/* 水平间距 */\n/* 垂直间距 */\n/* 透明度 */\n/* 文章场景相关 */uni-view[data-v-51442d1a], uni-scroll-view[data-v-51442d1a], uni-swiper-item[data-v-51442d1a]{display:flex;flex-direction:column;flex-shrink:0;flex-grow:0;flex-basis:auto;align-items:stretch;align-content:flex-start}.u-loading-icon[data-v-51442d1a]{flex-direction:row;align-items:center;justify-content:center;color:#c8c9cc}.u-loading-icon__text[data-v-51442d1a]{margin-left:4px;color:#606266;font-size:14px;line-height:20px}.u-loading-icon__spinner[data-v-51442d1a]{width:30px;height:30px;position:relative;box-sizing:border-box;max-width:100%;max-height:100%;-webkit-animation:u-rotate-data-v-51442d1a 1s linear infinite;animation:u-rotate-data-v-51442d1a 1s linear infinite}.u-loading-icon__spinner--semicircle[data-v-51442d1a]{border-width:2px;border-color:transparent;border-top-right-radius:100px;border-top-left-radius:100px;border-bottom-left-radius:100px;border-bottom-right-radius:100px;border-style:solid}.u-loading-icon__spinner--circle[data-v-51442d1a]{border-top-right-radius:100px;border-top-left-radius:100px;border-bottom-left-radius:100px;border-bottom-right-radius:100px;border-width:2px;border-top-color:#e5e5e5;border-right-color:#e5e5e5;border-bottom-color:#e5e5e5;border-left-color:#e5e5e5;border-style:solid}.u-loading-icon--vertical[data-v-51442d1a]{flex-direction:column}[data-v-51442d1a]:host{font-size:0;line-height:1}.u-loading-icon__spinner--spinner[data-v-51442d1a]{-webkit-animation-timing-function:steps(12);animation-timing-function:steps(12)}.u-loading-icon__text[data-v-51442d1a]:empty{display:none}.u-loading-icon--vertical .u-loading-icon__text[data-v-51442d1a]{margin:6px 0 0;color:#606266}.u-loading-icon__dot[data-v-51442d1a]{position:absolute;top:0;left:0;width:100%;height:100%}.u-loading-icon__dot[data-v-51442d1a]:before{display:block;width:2px;height:25%;margin:0 auto;background-color:currentColor;border-radius:40%;content:\" \"}.u-loading-icon__dot[data-v-51442d1a]:nth-of-type(1){-webkit-transform:rotate(30deg);transform:rotate(30deg);opacity:1}.u-loading-icon__dot[data-v-51442d1a]:nth-of-type(2){-webkit-transform:rotate(60deg);transform:rotate(60deg);opacity:.9375}.u-loading-icon__dot[data-v-51442d1a]:nth-of-type(3){-webkit-transform:rotate(90deg);transform:rotate(90deg);opacity:.875}.u-loading-icon__dot[data-v-51442d1a]:nth-of-type(4){-webkit-transform:rotate(120deg);transform:rotate(120deg);opacity:.8125}.u-loading-icon__dot[data-v-51442d1a]:nth-of-type(5){-webkit-transform:rotate(150deg);transform:rotate(150deg);opacity:.75}.u-loading-icon__dot[data-v-51442d1a]:nth-of-type(6){-webkit-transform:rotate(180deg);transform:rotate(180deg);opacity:.6875}.u-loading-icon__dot[data-v-51442d1a]:nth-of-type(7){-webkit-transform:rotate(210deg);transform:rotate(210deg);opacity:.625}.u-loading-icon__dot[data-v-51442d1a]:nth-of-type(8){-webkit-transform:rotate(240deg);transform:rotate(240deg);opacity:.5625}.u-loading-icon__dot[data-v-51442d1a]:nth-of-type(9){-webkit-transform:rotate(270deg);transform:rotate(270deg);opacity:.5}.u-loading-icon__dot[data-v-51442d1a]:nth-of-type(10){-webkit-transform:rotate(300deg);transform:rotate(300deg);opacity:.4375}.u-loading-icon__dot[data-v-51442d1a]:nth-of-type(11){-webkit-transform:rotate(330deg);transform:rotate(330deg);opacity:.375}.u-loading-icon__dot[data-v-51442d1a]:nth-of-type(12){-webkit-transform:rotate(1turn);transform:rotate(1turn);opacity:.3125}@-webkit-keyframes u-rotate-data-v-51442d1a{0%{-webkit-transform:rotate(0deg);transform:rotate(0deg)}to{-webkit-transform:rotate(1turn);transform:rotate(1turn)}}@keyframes u-rotate-data-v-51442d1a{0%{-webkit-transform:rotate(0deg);transform:rotate(0deg)}to{-webkit-transform:rotate(1turn);transform:rotate(1turn)}}", ""]);
// Exports
/* harmony default export */ __webpack_exports__["default"] = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ 64668:
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(63808);
if(content.__esModule) content = content.default;
if(typeof content === 'string') content = [[module.id, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var add = (__webpack_require__(69333)/* ["default"] */ .A)
var update = add("76667335", content, true, {"sourceMap":false,"shadowMode":false});

/***/ }),

/***/ 65235:
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
___CSS_LOADER_EXPORT___.push([module.id, "@charset \"UTF-8\";\n/**\n * 这里是uni-app内置的常用样式变量\n *\n * uni-app 官方扩展插件及插件市场（https://ext.dcloud.net.cn）上很多三方插件均使用了这些样式变量\n * 如果你是插件开发者，建议你使用scss预处理，并在插件代码中直接使用这些变量（无需 import 这个文件），方便用户通过搭积木的方式开发整体风格一致的App\n *\n */\n/**\n * 如果你是App开发者（插件使用者），你可以通过修改这些变量来定制自己的插件主题，实现自定义主题功能\n *\n * 如果你的项目同样使用了scss预处理，你也可以直接在你的 scss 代码中使用如下变量，同时无需 import 这个文件\n */\n/* 颜色变量 */\n/* 行为相关颜色 */\n/* 文字基本颜色 */\n/* 背景颜色 */\n/* 边框颜色 */\n/* 尺寸变量 */\n/* 文字尺寸 */\n/* 图片尺寸 */\n/* Border Radius */\n/* 水平间距 */\n/* 垂直间距 */\n/* 透明度 */\n/* 文章场景相关 */uni-view[data-v-83991a1a], uni-scroll-view[data-v-83991a1a], uni-swiper-item[data-v-83991a1a]{display:flex;flex-direction:column;flex-shrink:0;flex-grow:0;flex-basis:auto;align-items:stretch;align-content:flex-start}", ""]);
// Exports
/* harmony default export */ __webpack_exports__["default"] = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ 68847:
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(65235);
if(content.__esModule) content = content.default;
if(typeof content === 'string') content = [[module.id, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var add = (__webpack_require__(69333)/* ["default"] */ .A)
var update = add("48d03bdb", content, true, {"sourceMap":false,"shadowMode":false});

/***/ }),

/***/ 87985:
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(11429);
if(content.__esModule) content = content.default;
if(typeof content === 'string') content = [[module.id, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var add = (__webpack_require__(69333)/* ["default"] */ .A)
var update = add("4faac856", content, true, {"sourceMap":false,"shadowMode":false});

/***/ })

}]);
//# sourceMappingURL=pages-login-login.af48cacb.js.map