(self["webpackChunkhello_uniapp"] = self["webpackChunkhello_uniapp"] || []).push([[22],{

/***/ 2907:
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(49247);
if(content.__esModule) content = content.default;
if(typeof content === 'string') content = [[module.id, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var add = (__webpack_require__(69333)/* ["default"] */ .A)
var update = add("a5326752", content, true, {"sourceMap":false,"shadowMode":false});

/***/ }),

/***/ 8921:
/***/ (function(__unused_webpack_module, __unused_webpack_exports, __webpack_require__) {

"use strict";

var $ = __webpack_require__(46518);
var lastIndexOf = __webpack_require__(8379);

// `Array.prototype.lastIndexOf` method
// https://tc39.es/ecma262/#sec-array.prototype.lastindexof
// eslint-disable-next-line es/no-array-prototype-lastindexof -- required for testing
$({ target: 'Array', proto: true, forced: lastIndexOf !== [].lastIndexOf }, {
  lastIndexOf: lastIndexOf
});


/***/ }),

/***/ 23864:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": function() { return /* binding */ fillInInformation; }
});

;// ./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader/index.js??clonedRuleSet-42[0].rules[0].use[0]!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-uni-app-loader/filter-modules-template.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-uni-app-loader/page-meta.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/index.js??vue-loader-options!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-scoped-loader/index.js!./src/pages/task/fillInInformation.vue?vue&type=template&id=12c2d9c2&scoped=true&
var components = {'uniForms': (__webpack_require__(14874)/* ["default"] */ .A),'uniFormsItem': (__webpack_require__(9844)/* ["default"] */ .A),'uniEasyinput': (__webpack_require__(68872)/* ["default"] */ .A)}
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('v-uni-view',{staticClass:"infor",style:({height:_vm.containerHeight}),on:{"touchmove":function($event){$event.preventDefault();
arguments[0] = $event = _vm.$handleEvent($event);

}}},[_c('v-uni-view',{staticClass:"fields"},[_c('uni-forms',{ref:"valiForm",attrs:{"rules":_vm.rules,"modelValue":_vm.valiFormData}},[_c('uni-forms-item',{staticClass:"field",attrs:{"required":_vm.required.vin,"label":"VIN","name":"vin"}},[_c('uni-easyinput',{attrs:{"disabled":!_vm.clusterShow,"placeholder":"Please Enter"},model:{value:(_vm.valiFormData.vin),callback:function ($$v) {_vm.$set(_vm.valiFormData, "vin", $$v)},expression:"valiFormData.vin"}})],1),_c('uni-forms-item',{staticClass:"field",attrs:{"required":_vm.required.tqs,"label":"TQS","name":"TQS"}},[_c('v-uni-picker',{attrs:{"range":_vm.tqsList,"range-key":"tqs","disabled":!_vm.clusterShow},on:{"change":function($event){
arguments[0] = $event = _vm.$handleEvent($event);
(_vm.selectTQS).apply(void 0, arguments)
}}},[(!_vm.valiFormData.tqs)?_c('v-uni-view',[_vm._v("Please Select")]):_c('v-uni-view',[_c('v-uni-view',[_vm._v(_vm._s(_vm.valiFormData.tqs))])],1)],1)],1),_c('uni-forms-item',{directives:[{name:"show",rawName:"v-show",value:(_vm.clusterShow),expression:"clusterShow"}],staticClass:"field",attrs:{"required":_vm.required.cluster,"label":"Cluster","name":"cluster"}},[_c('v-uni-picker',{attrs:{"range":_vm.testClusterList},on:{"change":function($event){
arguments[0] = $event = _vm.$handleEvent($event);
(_vm.selectTestCluster).apply(void 0, arguments)
}}},[(!_vm.valiFormData.cluster)?_c('v-uni-view',[_vm._v("Please Select")]):_c('v-uni-view',[_c('v-uni-view',[_vm._v(_vm._s(_vm.valiFormData.cluster))])],1)],1)],1),_c('uni-forms-item',{staticClass:"field",attrs:{"label":"Phase","name":"phase"}},[_c('uni-easyinput',{attrs:{"disabled":!_vm.clusterShow,"placeholder":"Please Enter"},model:{value:(_vm.valiFormData.phase),callback:function ($$v) {_vm.$set(_vm.valiFormData, "phase", $$v)},expression:"valiFormData.phase"}})],1),_c('uni-forms-item',{staticClass:"field",attrs:{"label":"Special Vehicles","required":_vm.required.specialVehicles,"name":"specialVehicles"}},[_c('uni-easyinput',{attrs:{"disabled":!_vm.clusterShow,"placeholder":"Please Enter"},model:{value:(_vm.valiFormData.specialVehicles),callback:function ($$v) {_vm.$set(_vm.valiFormData, "specialVehicles", $$v)},expression:"valiFormData.specialVehicles"}})],1),_c('uni-forms-item',{staticClass:"field",attrs:{"label":"VR","required":_vm.required.vr,"name":"vr"}},[_c('uni-easyinput',{attrs:{"disabled":_vm.disabled.vr,"placeholder":"Please Enter"},model:{value:(_vm.valiFormData.vr),callback:function ($$v) {_vm.$set(_vm.valiFormData, "vr", $$v)},expression:"valiFormData.vr"}})],1),_c('uni-forms-item',{staticClass:"field",attrs:{"label":"Test Start Time","required":_vm.required.testStartTime,"name":"testStartTime"}},[_c('v-uni-picker',{ref:"datePicker",attrs:{"mode":"date","value":_vm.valiFormData.testStartTime,"disabled":_vm.disabled.testStartTime},on:{"change":function($event){
arguments[0] = $event = _vm.$handleEvent($event);
(_vm.change).apply(void 0, arguments)
}}},[(!_vm.valiFormData.testStartTime)?_c('v-uni-view',[_vm._v("Please Select")]):_c('v-uni-view',{staticClass:"uni-input"},[_vm._v(_vm._s(_vm.valiFormData.testStartTime))])],1)],1)],1),_c('v-uni-view',{staticStyle:{"display":"flex","margin-top":"30px"}},[_c('v-uni-button',{staticStyle:{"background-color":"#e6eaeb","width":"60%","margin":"5px"},attrs:{"type":"default","size":"default"},on:{"click":function($event){
arguments[0] = $event = _vm.$handleEvent($event);
(_vm.back).apply(void 0, arguments)
}}},[_vm._v("Close")]),_c('v-uni-button',{staticStyle:{"background-color":"#193c47","width":"60%","margin":"5px"},attrs:{"type":"primary","size":"default"},on:{"click":function($event){
arguments[0] = $event = _vm.$handleEvent($event);
(_vm.submit).apply(void 0, arguments)
}}},[_vm._v("OK")])],1),_c('v-uni-view')],1)],1)}
var recyclableRender = false
var staticRenderFns = []


;// ./src/pages/task/fillInInformation.vue?vue&type=template&id=12c2d9c2&scoped=true&

// EXTERNAL MODULE: ./node_modules/core-js/modules/es.array.concat.js
var es_array_concat = __webpack_require__(28706);
// EXTERNAL MODULE: ./node_modules/core-js/modules/es.array.filter.js
var es_array_filter = __webpack_require__(2008);
// EXTERNAL MODULE: ./node_modules/core-js/modules/es.array.find-index.js
var es_array_find_index = __webpack_require__(48980);
// EXTERNAL MODULE: ./node_modules/core-js/modules/es.array.index-of.js
var es_array_index_of = __webpack_require__(25276);
// EXTERNAL MODULE: ./node_modules/core-js/modules/es.array.last-index-of.js
var es_array_last_index_of = __webpack_require__(8921);
// EXTERNAL MODULE: ./node_modules/core-js/modules/es.array.map.js
var es_array_map = __webpack_require__(62062);
// EXTERNAL MODULE: ./node_modules/core-js/modules/es.date.to-json.js
var es_date_to_json = __webpack_require__(60739);
// EXTERNAL MODULE: ./node_modules/core-js/modules/es.iterator.constructor.js
var es_iterator_constructor = __webpack_require__(18111);
// EXTERNAL MODULE: ./node_modules/core-js/modules/es.iterator.filter.js
var es_iterator_filter = __webpack_require__(22489);
// EXTERNAL MODULE: ./node_modules/core-js/modules/es.iterator.map.js
var es_iterator_map = __webpack_require__(61701);
// EXTERNAL MODULE: ./node_modules/core-js/modules/es.json.stringify.js
var es_json_stringify = __webpack_require__(33110);
// EXTERNAL MODULE: ./node_modules/core-js/modules/es.object.keys.js
var es_object_keys = __webpack_require__(79432);
// EXTERNAL MODULE: ./node_modules/core-js/modules/es.object.to-string.js
var es_object_to_string = __webpack_require__(26099);
// EXTERNAL MODULE: ./node_modules/core-js/modules/es.regexp.exec.js
var es_regexp_exec = __webpack_require__(27495);
// EXTERNAL MODULE: ./node_modules/core-js/modules/es.string.replace.js
var es_string_replace = __webpack_require__(25440);
// EXTERNAL MODULE: ./node_modules/core-js/modules/es.string.replace-all.js
var es_string_replace_all = __webpack_require__(79978);
// EXTERNAL MODULE: ./src/pages/task/temporaryBus.js
var temporaryBus = __webpack_require__(73840);
;// ./node_modules/babel-loader/lib/index.js??clonedRuleSet-40[0].rules[0].use[0]!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader/index.js??clonedRuleSet-40[0].rules[0].use[1]!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader/index.js??clonedRuleSet-43[0].rules[0].use[0]!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-uni-app-loader/using-components.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/index.js??vue-loader-options!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-scoped-loader/index.js!./src/pages/task/fillInInformation.vue?vue&type=script&lang=js&
















//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//


function debounce(func, wait) {
  var timeout;
  return function () {
    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }
    var context = this;
    clearTimeout(timeout);
    timeout = setTimeout(function () {
      return func.apply(context, args);
    }, wait);
  };
}
/* harmony default export */ var fillInInformationvue_type_script_lang_js_ = ({
  components: {},
  props: {},
  data: function data() {
    return {
      show: false,
      containerHeight: '800px',
      tempTestStartTime: "Please Choose",
      // tqs:'',
      valiFormData: {},
      //基础数据
      url: {
        // tqsList: '/testService/qaTqsGroupContent/list',
        getTestCluster: '/testService/qaTestResult/getTestCluster',
        resultList: '/testService/qaTestResult/appList'
      },
      required: {
        vin: false,
        tqs: true,
        cluster: false,
        phase: false,
        specialVehicles: false,
        vr: false,
        testStartTime: true
      },
      disabled: {
        vin: false,
        phase: false,
        cluster: false,
        specialVehicles: false,
        vr: false,
        testStartTime: false
      },
      // 校验规则
      requiredArr: ['testStartTime', 'tqs'],
      rules: {
        testStartTime: {
          rules: [{
            required: true,
            errorMessage: 'Test Start Time Cannot Be Empty.'
          }]
        },
        tqs: {
          rules: [{
            required: true,
            errorMessage: 'Tqs Cannot Be Empty.'
          }]
        }
      },
      index: 0,
      clusterShow: true,
      tqsList: [],
      testClusterList: [],
      operate: ''
    };
  },
  onLoad: function onLoad(e) {
    var info = uni.getSystemInfoSync();
    if (info.uniPlatform.toLowerCase() === 'app') {
      plus.navigator.setStatusBarStyle("dark");
    }
    this.getScreenHeight();
    if (e.data != undefined && e.data != null && e.data != null) {
      this.valiFormData = JSON.parse(e.data);
      if (e.operate == 'scan') {
        this.operate = 'scan';
        // this.tqsList = [...this.valiFormData.tqsList]
        this.tqsList = this.valiFormData.tqsList.filter(function (currentValue, currentIndex, sourceArr) {
          return sourceArr.findIndex(function (x) {
            return x.tqs === currentValue.tqs;
          }) === currentIndex;
        });
      } else {
        this.operate = 'edit';
      }
    }
    this.loadTestStartTime(this.valiFormData.testStartTime);
    this.getTestClusterList();
    uni.setLocale('en');
  },
  watch: {},
  mounted: function mounted() {
    var info = uni.getSystemInfoSync();
    if (info.uniPlatform.toLowerCase() === 'app') {
      plus.navigator.setStatusBarStyle("dark");
    }
  },
  onShow: function onShow() {
    var info = uni.getSystemInfoSync();
    if (info.uniPlatform.toLowerCase() === 'app') {
      plus.navigator.setStatusBarStyle("dark");
    }
    // this.getTqsList()
  },
  methods: {
    // getTqsList() {
    // 	let parameter = {
    // 		pageSize: 50
    // 	}
    // 	this.$http.get(this.url.tqsList, {
    // 		params: parameter
    // 	}).then(res => {
    // 		if (res.data.success) {
    // 			res.data.result.records.forEach(item => {
    // 				this.tqsList.push(item.tqs)
    // 			})
    // 		}
    // 	})
    // },
    selectTQS: function selectTQS(e) {
      var _this = this;
      var that = this;
      this.index = e.detail.value;
      this.$set(this.valiFormData, 'tqs', this.tqsList[e.detail.value].tqs);
      var params = {
        id: this.tqsList[e.detail.value].id
      };
      this.$http.get(this.url.resultList, {
        params: params
      }).then(function (res) {
        if (res.data.success) {
          _this.valiFormData = res.data.result[0];
        }
      });
    },
    getTestClusterList: function getTestClusterList() {
      var _this2 = this;
      if (this.operate == 'edit') {
        this.clusterShow = false;
      } else {
        this.clusterShow = true;
      }
      this.$http.get(this.url.getTestCluster).then(function (res) {
        if (res.data.success) {
          _this2.testClusterList = res.data.result.map(function (item) {
            return item.item_text;
          });
        }
      });
    },
    selectTestCluster: function selectTestCluster(e) {
      this.$set(this.valiFormData, 'cluster', this.testClusterList[e.detail.value]);
    },
    back: function back() {
      uni.navigateBack();
    },
    //debounce防抖 防止连续多次点击
    submit: debounce(function (event) {
      var that = this;
      that.$bus.$emit('tqsIdEvent', that.valiFormData);
      //提交时间完成后 进行页面跳转
      that.$refs.valiForm.validateField(that.requiredArr).then(function (res) {
        if (that.valiFormData != null) {
          for (var key in that.valiFormData) {
            var value = that.valiFormData[key];
            if (value != undefined && value != null && value != '') {
              if (value.length == 10 && value.indexOf('/') == 4 && value.lastIndexOf('/') == 7) {
                that.valiFormData[key] = value.replaceAll("/", "-");
              }
            }
          }
          //从测试日历进入，一定有临时测试结果，从扫码进入，可能没有临时测试结果数据，需要生成  is_temp = 0,calendar_id == '扫码'
          // //有临时测试结果的时候  id有值，没有测试结果id没有值
          that.$http.post("/testService/qaTestResult/insertOrUpdate", that.valiFormData).then(function (res) {
            if (res.data.success) {
              uni.showToast({
                title: 'Save Successfully'
              });
              var newData = res.data.result;
              setTimeout(function () {
                uni.navigateTo({
                  url: '../task/checkItems?data=' + JSON.stringify(newData)
                });
              }, 500);
            }
          });
        }
      }).catch(function (err) {
        console.log('err', err);
      });
    }, 1000),
    loadTestStartTime: function loadTestStartTime(value) {
      var that = this;
      if (value != undefined && value != null) {
        that.tempTestStartTime = that.getDate('', value, 'date');
      } else {
        that.tempTestStartTime = "Please Choose";
      }
    },
    close: function close() {
      var that = this;
      that.show = false;
    },
    confirm: function confirm(e) {
      var that = this;
      console.log(e.value);
      // that.valiFormData.testStartTime = that.getDate('', e.value, e.mode)
      this.$set(that.valiFormData, 'testStartTime', that.getDate('', e.value, e.mode));
      console.log(that.valiFormData.testStartTime);
      that.loadTestStartTime(that.valiFormData.testStartTime);
      // this.$set(that.valiFormData,'testStartTime',e.value)
      that.show = false;
    },
    change: function change(e) {
      this.valiFormData.testStartTime = e.detail.value;
      console.log(e);
    },
    getDate: function getDate(type, value, format) {
      var date = new Date(value);
      var year = date.getFullYear();
      var month = date.getMonth() + 1;
      var day = date.getDate();
      var hours = date.getHours();
      var minutes = date.getMinutes();
      var seconds = date.getSeconds();
      if (type === 'start') {
        year = year;
      } else if (type === 'end') {
        year = year + 10;
      }
      month = month > 9 ? month : '0' + month;
      ;
      day = day > 9 ? day : '0' + day;
      hours = hours > 9 ? hours : '0' + hours;
      minutes = minutes > 9 ? minutes : '0' + minutes;
      seconds = seconds > 9 ? seconds : '0' + seconds;
      switch (format) {
        case 'date':
          return "".concat(year, "-").concat(month, "-").concat(day);
          // removed by dead control flow

        case 'datetime':
          return "".concat(year, "-").concat(month, "-").concat(day, " ").concat(hours, ":").concat(minutes, ":").concat(seconds);
          // removed by dead control flow

        default:
          return "".concat(year, "-").concat(month, "-").concat(day);
          // removed by dead control flow

      }
    },
    showPicker: function showPicker() {
      var that = this;
      if (that.show == false) {
        that.$refs.datePicker.innerValue = new Date().getTime();
        that.show = true;
      } else {
        that.show = false;
      }
    },
    getScreenHeight: function getScreenHeight() {
      var _this3 = this;
      uni.getSystemInfo({
        success: function success(res) {
          _this3.containerHeight = res.windowHeight + 'px';
          console.log(_this3.containerHeight);
        }
      });
    }
  }
});
;// ./src/pages/task/fillInInformation.vue?vue&type=script&lang=js&
 /* harmony default export */ var task_fillInInformationvue_type_script_lang_js_ = (fillInInformationvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/@dcloudio/vue-cli-plugin-uni/packages/h5-vue-style-loader/index.js??clonedRuleSet-22[0].rules[0].use[0]!./node_modules/css-loader/dist/cjs.js??clonedRuleSet-22[0].rules[0].use[1]!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader/index.js??clonedRuleSet-22[0].rules[0].use[2]!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-22[0].rules[0].use[3]!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-22[0].rules[0].use[4]!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/sass-loader/dist/cjs.js??clonedRuleSet-22[0].rules[0].use[5]!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader/index.js??clonedRuleSet-22[0].rules[0].use[6]!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/index.js??vue-loader-options!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-scoped-loader/index.js!./src/pages/task/fillInInformation.vue?vue&type=style&index=0&id=12c2d9c2&lang=scss&scoped=true&
var fillInInformationvue_type_style_index_0_id_12c2d9c2_lang_scss_scoped_true_ = __webpack_require__(2907);
;// ./src/pages/task/fillInInformation.vue?vue&type=style&index=0&id=12c2d9c2&lang=scss&scoped=true&
 /* harmony default export */ var task_fillInInformationvue_type_style_index_0_id_12c2d9c2_lang_scss_scoped_true_ = ((/* unused pure expression or super */ null && (mod))); 
// EXTERNAL MODULE: ./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(18535);
;// ./src/pages/task/fillInInformation.vue

var renderjs
;

;


/* normalize component */

var component = (0,componentNormalizer/* default */.A)(
  task_fillInInformationvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  null,
  "12c2d9c2",
  null,
  false,
  components,
  renderjs
)

/* harmony default export */ var fillInInformation = (component.exports);

/***/ }),

/***/ 49247:
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
___CSS_LOADER_EXPORT___.push([module.id, "@charset \"UTF-8\";\n/**\n * 这里是uni-app内置的常用样式变量\n *\n * uni-app 官方扩展插件及插件市场（https://ext.dcloud.net.cn）上很多三方插件均使用了这些样式变量\n * 如果你是插件开发者，建议你使用scss预处理，并在插件代码中直接使用这些变量（无需 import 这个文件），方便用户通过搭积木的方式开发整体风格一致的App\n *\n */\n/**\n * 如果你是App开发者（插件使用者），你可以通过修改这些变量来定制自己的插件主题，实现自定义主题功能\n *\n * 如果你的项目同样使用了scss预处理，你也可以直接在你的 scss 代码中使用如下变量，同时无需 import 这个文件\n */\n/* 颜色变量 */\n/* 行为相关颜色 */\n/* 文字基本颜色 */\n/* 背景颜色 */\n/* 边框颜色 */\n/* 尺寸变量 */\n/* 文字尺寸 */\n/* 图片尺寸 */\n/* Border Radius */\n/* 水平间距 */\n/* 垂直间距 */\n/* 透明度 */\n/* 文章场景相关 */.infor[data-v-12c2d9c2]{background-color:#f0f3f4;padding-top:env(safe-area-inset-top);\n  /* 兼容 iOS 11.0-11.4 */padding-top:constant(safe-area-inset-top)\n  /* 兼容 iOS 12.0-12.1 */}.fields[data-v-12c2d9c2]{background-color:#fff;border-radius:10px;margin:20px;padding:20px}.field[data-v-12c2d9c2]{padding:0 0 20px 0;border-bottom:2px solid #f1f1f1;text-align:right}.field[data-v-12c2d9c2]  .uni-easyinput{text-align:right!important}.field[data-v-12c2d9c2]  .uni-forms-item__label{width:40%!important}[data-v-12c2d9c2] .u-transition .u-slide-up-enter-to .u-slide-up-enter-active{height:30%!important}[data-v-12c2d9c2] .is-disabled{background:#fff!important}", ""]);
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
//# sourceMappingURL=pages-task-fillInInformation.e1faec0a.js.map