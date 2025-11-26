(self["webpackChunkhello_uniapp"] = self["webpackChunkhello_uniapp"] || []).push([[425],{

/***/ 7960:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  A: function() { return /* binding */ uni_transition; }
});

;// ./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader/index.js??clonedRuleSet-42[0].rules[0].use[0]!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-uni-app-loader/filter-modules-template.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-uni-app-loader/page-meta.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/index.js??vue-loader-options!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-scoped-loader/index.js!./src/uni_modules/uni-transition/components/uni-transition/uni-transition.vue?vue&type=template&id=acf5fb64&scoped=true&
var components;
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return (_vm.isShow)?_c('v-uni-view',{ref:"ani",class:_vm.customClass,style:(_vm.transformStyles),attrs:{"animation":_vm.animationData},on:{"click":function($event){
arguments[0] = $event = _vm.$handleEvent($event);
(_vm.onClick).apply(void 0, arguments)
}}},[_vm._t("default")],2):_vm._e()}
var recyclableRender = false
var staticRenderFns = []


// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/esm/toConsumableArray.js + 3 modules
var toConsumableArray = __webpack_require__(31969);
// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/esm/typeof.js
var esm_typeof = __webpack_require__(65376);
// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/esm/objectSpread2.js
var objectSpread2 = __webpack_require__(49943);
// EXTERNAL MODULE: ./node_modules/core-js/modules/es.array.concat.js
var es_array_concat = __webpack_require__(28706);
// EXTERNAL MODULE: ./node_modules/core-js/modules/es.iterator.constructor.js
var es_iterator_constructor = __webpack_require__(18111);
// EXTERNAL MODULE: ./node_modules/core-js/modules/es.iterator.for-each.js
var es_iterator_for_each = __webpack_require__(7588);
// EXTERNAL MODULE: ./node_modules/core-js/modules/es.number.constructor.js
var es_number_constructor = __webpack_require__(2892);
// EXTERNAL MODULE: ./node_modules/core-js/modules/es.object.to-string.js
var es_object_to_string = __webpack_require__(26099);
// EXTERNAL MODULE: ./node_modules/core-js/modules/es.regexp.exec.js
var es_regexp_exec = __webpack_require__(27495);
// EXTERNAL MODULE: ./node_modules/core-js/modules/es.string.replace.js
var es_string_replace = __webpack_require__(25440);
// EXTERNAL MODULE: ./node_modules/core-js/modules/web.dom-collections.for-each.js
var web_dom_collections_for_each = __webpack_require__(23500);
// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/esm/classCallCheck.js
var classCallCheck = __webpack_require__(63065);
// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/esm/createClass.js
var createClass = __webpack_require__(51729);
// EXTERNAL MODULE: ./node_modules/core-js/modules/es.array.includes.js
var es_array_includes = __webpack_require__(74423);
;// ./src/uni_modules/uni-transition/components/uni-transition/createAnimation.js









// const defaultOption = {
// 	duration: 300,
// 	timingFunction: 'linear',
// 	delay: 0,
// 	transformOrigin: '50% 50% 0'
// }
var MPAnimation = /*#__PURE__*/function () {
  function MPAnimation(options, _this) {
    (0,classCallCheck/* default */.A)(this, MPAnimation);
    this.options = options;
    this.animation = uni.createAnimation(options);
    this.currentStepAnimates = {};
    this.next = 0;
    this.$ = _this;
  }
  return (0,createClass/* default */.A)(MPAnimation, [{
    key: "_nvuePushAnimates",
    value: function _nvuePushAnimates(type, args) {
      var aniObj = this.currentStepAnimates[this.next];
      var styles = {};
      if (!aniObj) {
        styles = {
          styles: {},
          config: {}
        };
      } else {
        styles = aniObj;
      }
      if (animateTypes1.includes(type)) {
        if (!styles.styles.transform) {
          styles.styles.transform = '';
        }
        var unit = '';
        if (type === 'rotate') {
          unit = 'deg';
        }
        styles.styles.transform += "".concat(type, "(").concat(args + unit, ") ");
      } else {
        styles.styles[type] = "".concat(args);
      }
      this.currentStepAnimates[this.next] = styles;
    }
  }, {
    key: "_animateRun",
    value: function _animateRun() {
      var styles = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
      var config = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
      var ref = this.$.$refs['ani'].ref;
      if (!ref) return;
      return new Promise(function (resolve, reject) {
        nvueAnimation.transition(ref, (0,objectSpread2/* default */.A)({
          styles: styles
        }, config), function (res) {
          resolve();
        });
      });
    }
  }, {
    key: "_nvueNextAnimate",
    value: function _nvueNextAnimate(animates) {
      var _this2 = this;
      var step = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 0;
      var fn = arguments.length > 2 ? arguments[2] : undefined;
      var obj = animates[step];
      if (obj) {
        var styles = obj.styles,
          config = obj.config;
        this._animateRun(styles, config).then(function () {
          step += 1;
          _this2._nvueNextAnimate(animates, step, fn);
        });
      } else {
        this.currentStepAnimates = {};
        typeof fn === 'function' && fn();
        this.isEnd = true;
      }
    }
  }, {
    key: "step",
    value: function step() {
      var config = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
      this.animation.step(config);
      return this;
    }
  }, {
    key: "run",
    value: function run(fn) {
      this.$.animationData = this.animation.export();
      this.$.timer = setTimeout(function () {
        typeof fn === 'function' && fn();
      }, this.$.durationTime);
    }
  }]);
}();
var animateTypes1 = ['matrix', 'matrix3d', 'rotate', 'rotate3d', 'rotateX', 'rotateY', 'rotateZ', 'scale', 'scale3d', 'scaleX', 'scaleY', 'scaleZ', 'skew', 'skewX', 'skewY', 'translate', 'translate3d', 'translateX', 'translateY', 'translateZ'];
var animateTypes2 = ['opacity', 'backgroundColor'];
var animateTypes3 = ['width', 'height', 'left', 'right', 'top', 'bottom'];
animateTypes1.concat(animateTypes2, animateTypes3).forEach(function (type) {
  MPAnimation.prototype[type] = function () {
    var _this$animation;
    (_this$animation = this.animation)[type].apply(_this$animation, arguments);
    return this;
  };
});
function createAnimation(option, _this) {
  if (!_this) return;
  clearTimeout(_this.timer);
  return new MPAnimation(option, _this);
}
;// ./node_modules/babel-loader/lib/index.js??clonedRuleSet-40[0].rules[0].use[0]!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader/index.js??clonedRuleSet-40[0].rules[0].use[1]!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader/index.js??clonedRuleSet-43[0].rules[0].use[0]!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-uni-app-loader/using-components.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/index.js??vue-loader-options!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-scoped-loader/index.js!./src/uni_modules/uni-transition/components/uni-transition/uni-transition.vue?vue&type=script&lang=js&











//
//
//
//



/**
 * Transition 过渡动画
 * @description 简单过渡动画组件
 * @tutorial https://ext.dcloud.net.cn/plugin?id=985
 * @property {Boolean} show = [false|true] 控制组件显示或隐藏
 * @property {Array|String} modeClass = [fade|slide-top|slide-right|slide-bottom|slide-left|zoom-in|zoom-out] 过渡动画类型
 *  @value fade 渐隐渐出过渡
 *  @value slide-top 由上至下过渡
 *  @value slide-right 由右至左过渡
 *  @value slide-bottom 由下至上过渡
 *  @value slide-left 由左至右过渡
 *  @value zoom-in 由小到大过渡
 *  @value zoom-out 由大到小过渡
 * @property {Number} duration 过渡动画持续时间
 * @property {Object} styles 组件样式，同 css 样式，注意带’-‘连接符的属性需要使用小驼峰写法如：`backgroundColor:red`
 */
/* harmony default export */ var uni_transitionvue_type_script_lang_js_ = ({
  name: 'uniTransition',
  emits: ['click', 'change'],
  props: {
    show: {
      type: Boolean,
      default: false
    },
    modeClass: {
      type: [Array, String],
      default: function _default() {
        return 'fade';
      }
    },
    duration: {
      type: Number,
      default: 300
    },
    styles: {
      type: Object,
      default: function _default() {
        return {};
      }
    },
    customClass: {
      type: String,
      default: ''
    }
  },
  data: function data() {
    return {
      isShow: false,
      transform: '',
      opacity: 1,
      animationData: {},
      durationTime: 300,
      config: {}
    };
  },
  watch: {
    show: {
      handler: function handler(newVal) {
        if (newVal) {
          this.open();
        } else {
          // 避免上来就执行 close,导致动画错乱
          if (this.isShow) {
            this.close();
          }
        }
      },
      immediate: true
    }
  },
  computed: {
    // 生成样式数据
    stylesObject: function stylesObject() {
      var styles = (0,objectSpread2/* default */.A)((0,objectSpread2/* default */.A)({}, this.styles), {}, {
        'transition-duration': this.duration / 1000 + 's'
      });
      var transform = '';
      for (var i in styles) {
        var line = this.toLine(i);
        transform += line + ':' + styles[i] + ';';
      }
      return transform;
    },
    // 初始化动画条件
    transformStyles: function transformStyles() {
      return 'transform:' + this.transform + ';' + 'opacity:' + this.opacity + ';' + this.stylesObject;
    }
  },
  created: function created() {
    // 动画默认配置
    this.config = {
      duration: this.duration,
      timingFunction: 'ease',
      transformOrigin: '50% 50%',
      delay: 0
    };
    this.durationTime = this.duration;
  },
  methods: {
    /**
     *  ref 触发 初始化动画
     */
    init: function init() {
      var obj = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
      if (obj.duration) {
        this.durationTime = obj.duration;
      }
      this.animation = createAnimation(Object.assign(this.config, obj), this);
    },
    /**
     * 点击组件触发回调
     */
    onClick: function onClick() {
      this.$emit('click', {
        detail: this.isShow
      });
    },
    /**
     * ref 触发 动画分组
     * @param {Object} obj
     */
    step: function step(obj) {
      var config = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
      if (!this.animation) return;
      for (var i in obj) {
        try {
          if ((0,esm_typeof/* default */.A)(obj[i]) === 'object') {
            var _this$animation;
            (_this$animation = this.animation)[i].apply(_this$animation, (0,toConsumableArray/* default */.A)(obj[i]));
          } else {
            this.animation[i](obj[i]);
          }
        } catch (e) {
          console.error("\u65B9\u6CD5 ".concat(i, " \u4E0D\u5B58\u5728"));
        }
      }
      this.animation.step(config);
      return this;
    },
    /**
     *  ref 触发 执行动画
     */
    run: function run(fn) {
      if (!this.animation) return;
      this.animation.run(fn);
    },
    // 开始过度动画
    open: function open() {
      var _this = this;
      clearTimeout(this.timer);
      this.transform = '';
      this.isShow = true;
      var _this$styleInit = this.styleInit(false),
        opacity = _this$styleInit.opacity,
        transform = _this$styleInit.transform;
      if (typeof opacity !== 'undefined') {
        this.opacity = opacity;
      }
      this.transform = transform;
      // 确保动态样式已经生效后，执行动画，如果不加 nextTick ，会导致 wx 动画执行异常
      this.$nextTick(function () {
        // TODO 定时器保证动画完全执行，目前有些问题，后面会取消定时器
        _this.timer = setTimeout(function () {
          _this.animation = createAnimation(_this.config, _this);
          _this.tranfromInit(false).step();
          _this.animation.run();
          _this.$emit('change', {
            detail: _this.isShow
          });
        }, 20);
      });
    },
    // 关闭过度动画
    close: function close(type) {
      var _this2 = this;
      if (!this.animation) return;
      this.tranfromInit(true).step().run(function () {
        _this2.isShow = false;
        _this2.animationData = null;
        _this2.animation = null;
        var _this2$styleInit = _this2.styleInit(false),
          opacity = _this2$styleInit.opacity,
          transform = _this2$styleInit.transform;
        _this2.opacity = opacity || 1;
        _this2.transform = transform;
        _this2.$emit('change', {
          detail: _this2.isShow
        });
      });
    },
    // 处理动画开始前的默认样式
    styleInit: function styleInit(type) {
      var _this3 = this;
      var styles = {
        transform: ''
      };
      var buildStyle = function buildStyle(type, mode) {
        if (mode === 'fade') {
          styles.opacity = _this3.animationType(type)[mode];
        } else {
          styles.transform += _this3.animationType(type)[mode] + ' ';
        }
      };
      if (typeof this.modeClass === 'string') {
        buildStyle(type, this.modeClass);
      } else {
        this.modeClass.forEach(function (mode) {
          buildStyle(type, mode);
        });
      }
      return styles;
    },
    // 处理内置组合动画
    tranfromInit: function tranfromInit(type) {
      var _this4 = this;
      var buildTranfrom = function buildTranfrom(type, mode) {
        var aniNum = null;
        if (mode === 'fade') {
          aniNum = type ? 0 : 1;
        } else {
          aniNum = type ? '-100%' : '0';
          if (mode === 'zoom-in') {
            aniNum = type ? 0.8 : 1;
          }
          if (mode === 'zoom-out') {
            aniNum = type ? 1.2 : 1;
          }
          if (mode === 'slide-right') {
            aniNum = type ? '100%' : '0';
          }
          if (mode === 'slide-bottom') {
            aniNum = type ? '100%' : '0';
          }
        }
        _this4.animation[_this4.animationMode()[mode]](aniNum);
      };
      if (typeof this.modeClass === 'string') {
        buildTranfrom(type, this.modeClass);
      } else {
        this.modeClass.forEach(function (mode) {
          buildTranfrom(type, mode);
        });
      }
      return this.animation;
    },
    animationType: function animationType(type) {
      return {
        fade: type ? 1 : 0,
        'slide-top': "translateY(".concat(type ? '0' : '-100%', ")"),
        'slide-right': "translateX(".concat(type ? '0' : '100%', ")"),
        'slide-bottom': "translateY(".concat(type ? '0' : '100%', ")"),
        'slide-left': "translateX(".concat(type ? '0' : '-100%', ")"),
        'zoom-in': "scaleX(".concat(type ? 1 : 0.8, ") scaleY(").concat(type ? 1 : 0.8, ")"),
        'zoom-out': "scaleX(".concat(type ? 1 : 1.2, ") scaleY(").concat(type ? 1 : 1.2, ")")
      };
    },
    // 内置动画类型与实际动画对应字典
    animationMode: function animationMode() {
      return {
        fade: 'opacity',
        'slide-top': 'translateY',
        'slide-right': 'translateX',
        'slide-bottom': 'translateY',
        'slide-left': 'translateX',
        'zoom-in': 'scale',
        'zoom-out': 'scale'
      };
    },
    // 驼峰转中横线
    toLine: function toLine(name) {
      return name.replace(/([A-Z])/g, '-$1').toLowerCase();
    }
  }
});
;// ./src/uni_modules/uni-transition/components/uni-transition/uni-transition.vue?vue&type=script&lang=js&
 /* harmony default export */ var uni_transition_uni_transitionvue_type_script_lang_js_ = (uni_transitionvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(18535);
;// ./src/uni_modules/uni-transition/components/uni-transition/uni-transition.vue

var renderjs
;



/* normalize component */
;
var component = (0,componentNormalizer/* default */.A)(
  uni_transition_uni_transitionvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  null,
  "acf5fb64",
  null,
  false,
  components,
  renderjs
)

/* harmony default export */ var uni_transition = (component.exports);

/***/ }),

/***/ 41066:
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(70262);
if(content.__esModule) content = content.default;
if(typeof content === 'string') content = [[module.id, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var add = (__webpack_require__(69333)/* ["default"] */ .A)
var update = add("f3a3de86", content, true, {"sourceMap":false,"shadowMode":false});

/***/ }),

/***/ 45272:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  A: function() { return /* binding */ uni_popup; }
});

;// ./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader/index.js??clonedRuleSet-42[0].rules[0].use[0]!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-uni-app-loader/filter-modules-template.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-uni-app-loader/page-meta.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/index.js??vue-loader-options!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-scoped-loader/index.js!./src/uni_modules/uni-popup/components/uni-popup/uni-popup.vue?vue&type=template&id=79177165&scoped=true&
var components = {'uniTransition': (__webpack_require__(7960)/* ["default"] */ .A)}
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return (_vm.showPopup)?_c('v-uni-view',{staticClass:"uni-popup",class:[_vm.popupstyle, _vm.isDesktop ? 'fixforpc-z-index' : '']},[_c('v-uni-view',{on:{"touchstart":function($event){
arguments[0] = $event = _vm.$handleEvent($event);
(_vm.touchstart).apply(void 0, arguments)
}}},[(_vm.maskShow)?_c('uni-transition',{key:"1",attrs:{"name":"mask","mode-class":"fade","styles":_vm.maskClass,"duration":_vm.duration,"show":_vm.showTrans},on:{"click":function($event){
arguments[0] = $event = _vm.$handleEvent($event);
(_vm.onTap).apply(void 0, arguments)
}}}):_vm._e(),_c('uni-transition',{key:"2",attrs:{"mode-class":_vm.ani,"name":"content","styles":_vm.transClass,"duration":_vm.duration,"show":_vm.showTrans},on:{"click":function($event){
arguments[0] = $event = _vm.$handleEvent($event);
(_vm.onTap).apply(void 0, arguments)
}}},[_c('v-uni-view',{staticClass:"uni-popup__wrapper",class:[_vm.popupstyle],style:({ backgroundColor: _vm.bg }),on:{"click":function($event){
arguments[0] = $event = _vm.$handleEvent($event);
(_vm.clear).apply(void 0, arguments)
}}},[_vm._t("default")],2)],1)],1),(_vm.maskShow)?_c('keypress',{on:{"esc":function($event){
arguments[0] = $event = _vm.$handleEvent($event);
(_vm.onTap).apply(void 0, arguments)
}}}):_vm._e()],1):_vm._e()}
var recyclableRender = false
var staticRenderFns = []


;// ./src/uni_modules/uni-popup/components/uni-popup/uni-popup.vue?vue&type=template&id=79177165&scoped=true&

// EXTERNAL MODULE: ./node_modules/core-js/modules/es.array.index-of.js
var es_array_index_of = __webpack_require__(25276);
// EXTERNAL MODULE: ./node_modules/core-js/modules/es.array.find.js
var es_array_find = __webpack_require__(50113);
// EXTERNAL MODULE: ./node_modules/core-js/modules/es.array.includes.js
var es_array_includes = __webpack_require__(74423);
// EXTERNAL MODULE: ./node_modules/core-js/modules/es.iterator.constructor.js
var es_iterator_constructor = __webpack_require__(18111);
// EXTERNAL MODULE: ./node_modules/core-js/modules/es.iterator.find.js
var es_iterator_find = __webpack_require__(20116);
// EXTERNAL MODULE: ./node_modules/core-js/modules/es.object.keys.js
var es_object_keys = __webpack_require__(79432);
// EXTERNAL MODULE: ./node_modules/core-js/modules/es.object.to-string.js
var es_object_to_string = __webpack_require__(26099);
// EXTERNAL MODULE: ./node_modules/core-js/modules/es.string.includes.js
var es_string_includes = __webpack_require__(21699);
;// ./src/uni_modules/uni-popup/components/uni-popup/keypress.js







/* harmony default export */ var keypress = ({
  name: 'Keypress',
  props: {
    disable: {
      type: Boolean,
      default: false
    }
  },
  mounted: function mounted() {
    var _this = this;
    var keyNames = {
      esc: ['Esc', 'Escape'],
      tab: 'Tab',
      enter: 'Enter',
      space: [' ', 'Spacebar'],
      up: ['Up', 'ArrowUp'],
      left: ['Left', 'ArrowLeft'],
      right: ['Right', 'ArrowRight'],
      down: ['Down', 'ArrowDown'],
      delete: ['Backspace', 'Delete', 'Del']
    };
    var listener = function listener($event) {
      if (_this.disable) {
        return;
      }
      var keyName = Object.keys(keyNames).find(function (key) {
        var keyName = $event.key;
        var value = keyNames[key];
        return value === keyName || Array.isArray(value) && value.includes(keyName);
      });
      if (keyName) {
        // 避免和其他按键事件冲突
        setTimeout(function () {
          _this.$emit(keyName, {});
        }, 0);
      }
    };
    document.addEventListener('keyup', listener);
    // this.$once('hook:beforeDestroy', () => {
    //   document.removeEventListener('keyup', listener)
    // })
  },
  render: function render() {}
});
;// ./node_modules/babel-loader/lib/index.js??clonedRuleSet-40[0].rules[0].use[0]!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader/index.js??clonedRuleSet-40[0].rules[0].use[1]!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader/index.js??clonedRuleSet-43[0].rules[0].use[0]!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-uni-app-loader/using-components.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/index.js??vue-loader-options!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-scoped-loader/index.js!./src/uni_modules/uni-popup/components/uni-popup/uni-popup.vue?vue&type=script&lang=js&

//
//
//
//
//
//
//
//
//
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
 * PopUp 弹出层
 * @description 弹出层组件，为了解决遮罩弹层的问题
 * @tutorial https://ext.dcloud.net.cn/plugin?id=329
 * @property {String} type = [top|center|bottom|left|right|message|dialog|share] 弹出方式
 * 	@value top 顶部弹出
 * 	@value center 中间弹出
 * 	@value bottom 底部弹出
 * 	@value left		左侧弹出
 * 	@value right  右侧弹出
 * 	@value message 消息提示
 * 	@value dialog 对话框
 * 	@value share 底部分享示例
 * @property {Boolean} animation = [true|false] 是否开启动画
 * @property {Boolean} maskClick = [true|false] 蒙版点击是否关闭弹窗(废弃)
 * @property {Boolean} isMaskClick = [true|false] 蒙版点击是否关闭弹窗
 * @property {String}  backgroundColor 主窗口背景色
 * @property {String}  maskBackgroundColor 蒙版颜色
 * @property {Boolean} safeArea		   是否适配底部安全区
 * @event {Function} change 打开关闭弹窗触发，e={show: false}
 * @event {Function} maskClick 点击遮罩触发
 */

/* harmony default export */ var uni_popupvue_type_script_lang_js_ = ({
  name: 'uniPopup',
  components: {
    keypress: keypress
  },
  emits: ['change', 'maskClick'],
  props: {
    // 开启动画
    animation: {
      type: Boolean,
      default: true
    },
    // 弹出层类型，可选值，top: 顶部弹出层；bottom：底部弹出层；center：全屏弹出层
    // message: 消息提示 ; dialog : 对话框
    type: {
      type: String,
      default: 'center'
    },
    // maskClick
    isMaskClick: {
      type: Boolean,
      default: null
    },
    // TODO 2 个版本后废弃属性 ，使用 isMaskClick
    maskClick: {
      type: Boolean,
      default: null
    },
    backgroundColor: {
      type: String,
      default: 'none'
    },
    safeArea: {
      type: Boolean,
      default: true
    },
    maskBackgroundColor: {
      type: String,
      default: 'rgba(0, 0, 0, 0.4)'
    }
  },
  watch: {
    /**
     * 监听type类型
     */
    type: {
      handler: function handler(type) {
        if (!this.config[type]) return;
        this[this.config[type]](true);
      },
      immediate: true
    },
    isDesktop: {
      handler: function handler(newVal) {
        if (!this.config[newVal]) return;
        this[this.config[this.type]](true);
      },
      immediate: true
    },
    /**
     * 监听遮罩是否可点击
     * @param {Object} val
     */
    maskClick: {
      handler: function handler(val) {
        this.mkclick = val;
      },
      immediate: true
    },
    isMaskClick: {
      handler: function handler(val) {
        this.mkclick = val;
      },
      immediate: true
    },
    // H5 下禁止底部滚动
    showPopup: function showPopup(show) {
      // fix by mehaotian 处理 h5 滚动穿透的问题
      document.getElementsByTagName('body')[0].style.overflow = show ? 'hidden' : 'visible';
    }
  },
  data: function data() {
    return {
      duration: 300,
      ani: [],
      showPopup: false,
      showTrans: false,
      popupWidth: 0,
      popupHeight: 0,
      config: {
        top: 'top',
        bottom: 'bottom',
        center: 'center',
        left: 'left',
        right: 'right',
        message: 'top',
        dialog: 'center',
        share: 'bottom'
      },
      maskClass: {
        position: 'fixed',
        bottom: 0,
        top: 0,
        left: 0,
        right: 0,
        backgroundColor: 'rgba(0, 0, 0, 0.4)'
      },
      transClass: {
        position: 'fixed',
        left: 0,
        right: 0
      },
      maskShow: true,
      mkclick: true,
      popupstyle: this.isDesktop ? 'fixforpc-top' : 'top'
    };
  },
  computed: {
    isDesktop: function isDesktop() {
      return this.popupWidth >= 500 && this.popupHeight >= 500;
    },
    bg: function bg() {
      if (this.backgroundColor === '' || this.backgroundColor === 'none') {
        return 'transparent';
      }
      return this.backgroundColor;
    }
  },
  mounted: function mounted() {
    var _this = this;
    var fixSize = function fixSize() {
      var _uni$getSystemInfoSyn = uni.getSystemInfoSync(),
        windowWidth = _uni$getSystemInfoSyn.windowWidth,
        windowHeight = _uni$getSystemInfoSyn.windowHeight,
        windowTop = _uni$getSystemInfoSyn.windowTop,
        safeArea = _uni$getSystemInfoSyn.safeArea,
        screenHeight = _uni$getSystemInfoSyn.screenHeight,
        safeAreaInsets = _uni$getSystemInfoSyn.safeAreaInsets;
      _this.popupWidth = windowWidth;
      _this.popupHeight = windowHeight + (windowTop || 0);
      // TODO fix by mehaotian 是否适配底部安全区 ,目前微信ios 、和 app ios 计算有差异，需要框架修复
      if (safeArea && _this.safeArea) {
        _this.safeAreaInsets = safeAreaInsets.bottom;
      } else {
        _this.safeAreaInsets = 0;
      }
    };
    fixSize();

    // window.addEventListener('resize', fixSize)
    // this.$once('hook:beforeDestroy', () => {
    // 	window.removeEventListener('resize', fixSize)
    // })
  },
  // TODO vue2
  destroyed: function destroyed() {
    this.setH5Visible();
  },
  created: function created() {
    // this.mkclick =  this.isMaskClick || this.maskClick
    if (this.isMaskClick === null && this.maskClick === null) {
      this.mkclick = true;
    } else {
      this.mkclick = this.isMaskClick !== null ? this.isMaskClick : this.maskClick;
    }
    if (this.animation) {
      this.duration = 300;
    } else {
      this.duration = 0;
    }
    // TODO 处理 message 组件生命周期异常的问题
    this.messageChild = null;
    // TODO 解决头条冒泡的问题
    this.clearPropagation = false;
    this.maskClass.backgroundColor = this.maskBackgroundColor;
  },
  methods: {
    setH5Visible: function setH5Visible() {
      // fix by mehaotian 处理 h5 滚动穿透的问题
      document.getElementsByTagName('body')[0].style.overflow = 'visible';
    },
    /**
     * 公用方法，不显示遮罩层
     */
    closeMask: function closeMask() {
      this.maskShow = false;
    },
    /**
     * 公用方法，遮罩层禁止点击
     */
    disableMask: function disableMask() {
      this.mkclick = false;
    },
    // TODO nvue 取消冒泡
    clear: function clear(e) {
      e.stopPropagation();
      this.clearPropagation = true;
    },
    open: function open(direction) {
      // fix by mehaotian 处理快速打开关闭的情况
      if (this.showPopup) {
        clearTimeout(this.timer);
        this.showPopup = false;
      }
      var innerType = ['top', 'center', 'bottom', 'left', 'right', 'message', 'dialog', 'share'];
      if (!(direction && innerType.indexOf(direction) !== -1)) {
        direction = this.type;
      }
      if (!this.config[direction]) {
        console.error('缺少类型：', direction);
        return;
      }
      this[this.config[direction]]();
      this.$emit('change', {
        show: true,
        type: direction
      });
    },
    close: function close(type) {
      var _this2 = this;
      this.showTrans = false;
      this.$emit('change', {
        show: false,
        type: this.type
      });
      clearTimeout(this.timer);
      // // 自定义关闭事件
      // this.customOpen && this.customClose()
      this.timer = setTimeout(function () {
        _this2.showPopup = false;
      }, 300);
    },
    // TODO 处理冒泡事件，头条的冒泡事件有问题 ，先这样兼容
    touchstart: function touchstart() {
      this.clearPropagation = false;
    },
    onTap: function onTap() {
      if (this.clearPropagation) {
        // fix by mehaotian 兼容 nvue
        this.clearPropagation = false;
        return;
      }
      this.$emit('maskClick');
      if (!this.mkclick) return;
      this.close();
    },
    /**
     * 顶部弹出样式处理
     */
    top: function top(type) {
      var _this3 = this;
      this.popupstyle = this.isDesktop ? 'fixforpc-top' : 'top';
      this.ani = ['slide-top'];
      this.transClass = {
        position: 'fixed',
        left: 0,
        right: 0,
        backgroundColor: this.bg
      };
      // TODO 兼容 type 属性 ，后续会废弃
      if (type) return;
      this.showPopup = true;
      this.showTrans = true;
      this.$nextTick(function () {
        if (_this3.messageChild && _this3.type === 'message') {
          _this3.messageChild.timerClose();
        }
      });
    },
    /**
     * 底部弹出样式处理
     */
    bottom: function bottom(type) {
      this.popupstyle = 'bottom';
      this.ani = ['slide-bottom'];
      this.transClass = {
        position: 'fixed',
        left: 0,
        right: 0,
        bottom: 0,
        paddingBottom: this.safeAreaInsets + 'px',
        backgroundColor: this.bg
      };
      // TODO 兼容 type 属性 ，后续会废弃
      if (type) return;
      this.showPopup = true;
      this.showTrans = true;
    },
    /**
     * 中间弹出样式处理
     */
    center: function center(type) {
      this.popupstyle = 'center';
      this.ani = ['zoom-out', 'fade'];
      this.transClass = {
        position: 'fixed',
        display: 'flex',
        flexDirection: 'column',
        bottom: 0,
        left: 0,
        right: 0,
        top: 0,
        justifyContent: 'center',
        alignItems: 'center'
      };
      // TODO 兼容 type 属性 ，后续会废弃
      if (type) return;
      this.showPopup = true;
      this.showTrans = true;
    },
    left: function left(type) {
      this.popupstyle = 'left';
      this.ani = ['slide-left'];
      this.transClass = {
        position: 'fixed',
        left: 0,
        bottom: 0,
        top: 0,
        backgroundColor: this.bg,
        display: 'flex',
        flexDirection: 'column'
      };
      // TODO 兼容 type 属性 ，后续会废弃
      if (type) return;
      this.showPopup = true;
      this.showTrans = true;
    },
    right: function right(type) {
      this.popupstyle = 'right';
      this.ani = ['slide-right'];
      this.transClass = {
        position: 'fixed',
        bottom: 0,
        right: 0,
        top: 0,
        backgroundColor: this.bg,
        display: 'flex',
        flexDirection: 'column'
      };
      // TODO 兼容 type 属性 ，后续会废弃
      if (type) return;
      this.showPopup = true;
      this.showTrans = true;
    }
  }
});
;// ./src/uni_modules/uni-popup/components/uni-popup/uni-popup.vue?vue&type=script&lang=js&
 /* harmony default export */ var uni_popup_uni_popupvue_type_script_lang_js_ = (uni_popupvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/@dcloudio/vue-cli-plugin-uni/packages/h5-vue-style-loader/index.js??clonedRuleSet-22[0].rules[0].use[0]!./node_modules/css-loader/dist/cjs.js??clonedRuleSet-22[0].rules[0].use[1]!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader/index.js??clonedRuleSet-22[0].rules[0].use[2]!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-22[0].rules[0].use[3]!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-22[0].rules[0].use[4]!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/sass-loader/dist/cjs.js??clonedRuleSet-22[0].rules[0].use[5]!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader/index.js??clonedRuleSet-22[0].rules[0].use[6]!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/index.js??vue-loader-options!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-scoped-loader/index.js!./src/uni_modules/uni-popup/components/uni-popup/uni-popup.vue?vue&type=style&index=0&id=79177165&lang=scss&scoped=true&
var uni_popupvue_type_style_index_0_id_79177165_lang_scss_scoped_true_ = __webpack_require__(41066);
;// ./src/uni_modules/uni-popup/components/uni-popup/uni-popup.vue?vue&type=style&index=0&id=79177165&lang=scss&scoped=true&
 /* harmony default export */ var uni_popup_uni_popupvue_type_style_index_0_id_79177165_lang_scss_scoped_true_ = ((/* unused pure expression or super */ null && (mod))); 
// EXTERNAL MODULE: ./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(18535);
;// ./src/uni_modules/uni-popup/components/uni-popup/uni-popup.vue

var renderjs
;

;


/* normalize component */

var component = (0,componentNormalizer/* default */.A)(
  uni_popup_uni_popupvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  null,
  "79177165",
  null,
  false,
  components,
  renderjs
)

/* harmony default export */ var uni_popup = (component.exports);

/***/ }),

/***/ 70262:
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
___CSS_LOADER_EXPORT___.push([module.id, "@charset \"UTF-8\";\n/**\n * 这里是uni-app内置的常用样式变量\n *\n * uni-app 官方扩展插件及插件市场（https://ext.dcloud.net.cn）上很多三方插件均使用了这些样式变量\n * 如果你是插件开发者，建议你使用scss预处理，并在插件代码中直接使用这些变量（无需 import 这个文件），方便用户通过搭积木的方式开发整体风格一致的App\n *\n */\n/**\n * 如果你是App开发者（插件使用者），你可以通过修改这些变量来定制自己的插件主题，实现自定义主题功能\n *\n * 如果你的项目同样使用了scss预处理，你也可以直接在你的 scss 代码中使用如下变量，同时无需 import 这个文件\n */\n/* 颜色变量 */\n/* 行为相关颜色 */\n/* 文字基本颜色 */\n/* 背景颜色 */\n/* 边框颜色 */\n/* 尺寸变量 */\n/* 文字尺寸 */\n/* 图片尺寸 */\n/* Border Radius */\n/* 水平间距 */\n/* 垂直间距 */\n/* 透明度 */\n/* 文章场景相关 */.uni-popup[data-v-79177165]{position:fixed;z-index:99}.uni-popup.top[data-v-79177165], .uni-popup.left[data-v-79177165], .uni-popup.right[data-v-79177165]{top:var(--window-top)}.uni-popup .uni-popup__wrapper[data-v-79177165]{display:block;position:relative\n  /* iphonex 等安全区设置，底部安全区适配 */}.uni-popup .uni-popup__wrapper.left[data-v-79177165], .uni-popup .uni-popup__wrapper.right[data-v-79177165]{padding-top:var(--window-top);flex:1}.fixforpc-z-index[data-v-79177165]{z-index:999}.fixforpc-top[data-v-79177165]{top:0}", ""]);
// Exports
/* harmony default export */ __webpack_exports__["default"] = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ 73840:
/***/ (function(__unused_webpack_module, __unused_webpack___webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(85476);

vue__WEBPACK_IMPORTED_MODULE_0__["default"].prototype.$bus = new vue__WEBPACK_IMPORTED_MODULE_0__["default"]();

/***/ })

}]);
//# sourceMappingURL=425.d1decc26.js.map