(self["webpackChunkhello_uniapp"] = self["webpackChunkhello_uniapp"] || []).push([[767],{

/***/ 13968:
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
___CSS_LOADER_EXPORT___.push([module.id, ".main[data-v-5fb70aff]{padding:20px;box-sizing:border-box;padding-top:env(safe-area-inset-top); /* 兼容 iOS 11.0-11.4 */padding-top:constant(safe-area-inset-top) /* 兼容 iOS 12.0-12.1 */}.problemList[data-v-5fb70aff]{display:flex;box-sizing:border-box;justify-content:space-between;border-radius:5px;padding:10px;width:100%;height:13%;margin-bottom:5%;background:#fff}.problemList-content[data-v-5fb70aff]{display:flex}.checkbox[data-v-5fb70aff]{margin-right:3%}.problemList-sign[data-v-5fb70aff]{display:flex;align-items:center;justify-content:center;background:#1890ff4f;width:24%;height:30px;color:#1890ff;border-radius:10%;border:1px solid #1890ff}.bottom-button[data-v-5fb70aff]{display:flex;background:#fff;padding:3% 3%;border-radius:2%;position:fixed;bottom:0;left:0;width:100%;box-sizing:border-box}.bottom-button-save[data-v-5fb70aff]{width:50%;margin:0 2%;background:#ea3800a3;color:#fff}.bottom-button-new[data-v-5fb70aff]{width:50%;margin:0 2%;background:#090c1c;color:#fff}", ""]);
// Exports
/* harmony default export */ __webpack_exports__["default"] = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ 27799:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": function() { return /* binding */ problemList; }
});

;// ./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader/index.js??clonedRuleSet-42[0].rules[0].use[0]!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-uni-app-loader/filter-modules-template.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-uni-app-loader/page-meta.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/index.js??vue-loader-options!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-scoped-loader/index.js!./src/pages/task/problemList.vue?vue&type=template&id=5fb70aff&scoped=true&
var components;
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('v-uni-view',{staticClass:"main",style:({height:_vm.screenHeight + 'px', width:_vm.screenWidth + 'px'}),on:{"touchmove":function($event){$event.preventDefault();
arguments[0] = $event = _vm.$handleEvent($event);

}}},[_c('v-uni-view',{staticStyle:{"padding-bottom":"50px","padding-top":"20px"}},[_c('v-uni-checkbox-group',{on:{"change":function($event){
arguments[0] = $event = _vm.$handleEvent($event);
(_vm.checkboxChange).apply(void 0, arguments)
}}},_vm._l((_vm.problemList),function(item){return _c('v-uni-view',{key:item.index,staticClass:"problemList"},[_c('v-uni-view',{staticClass:"problemList-content"},[_c('v-uni-checkbox',{staticClass:"checkbox",attrs:{"value":item.id,"checked":item.check}}),_c('v-uni-view',[_c('v-uni-view',{staticStyle:{"width":"120%"}},[_vm._v(_vm._s(item.project)+"/"+_vm._s(item.vr))]),_c('v-uni-view',{staticStyle:{"color":"#6d6a6a","width":"250px","word-wrap":"break-word","overflow-wrap":"break-word"}},[_vm._v(_vm._s(item.problemDescription))])],1)],1),_c('v-uni-view',{staticClass:"problemList-sign"},[_c('v-uni-text',[_vm._v(_vm._s(item.generalDefect))])],1)],1)}),1),_c('v-uni-view',{staticClass:"bottom-button"},[_c('v-uni-button',{staticClass:"bottom-button-save",on:{"click":function($event){
arguments[0] = $event = _vm.$handleEvent($event);
(_vm.saveButton).apply(void 0, arguments)
}}},[_vm._v("Save")]),_c('v-uni-button',{staticClass:"bottom-button-new",on:{"click":function($event){
arguments[0] = $event = _vm.$handleEvent($event);
(_vm.newProblemHandle).apply(void 0, arguments)
}}},[_vm._v("New Problem")])],1)],1)],1)}
var recyclableRender = false
var staticRenderFns = []


// EXTERNAL MODULE: ./node_modules/core-js/modules/es.array.filter.js
var es_array_filter = __webpack_require__(2008);
// EXTERNAL MODULE: ./node_modules/core-js/modules/es.array.index-of.js
var es_array_index_of = __webpack_require__(25276);
// EXTERNAL MODULE: ./node_modules/core-js/modules/es.date.to-json.js
var es_date_to_json = __webpack_require__(60739);
// EXTERNAL MODULE: ./node_modules/core-js/modules/es.iterator.constructor.js
var es_iterator_constructor = __webpack_require__(18111);
// EXTERNAL MODULE: ./node_modules/core-js/modules/es.iterator.filter.js
var es_iterator_filter = __webpack_require__(22489);
// EXTERNAL MODULE: ./node_modules/core-js/modules/es.iterator.for-each.js
var es_iterator_for_each = __webpack_require__(7588);
// EXTERNAL MODULE: ./node_modules/core-js/modules/es.json.stringify.js
var es_json_stringify = __webpack_require__(33110);
// EXTERNAL MODULE: ./node_modules/core-js/modules/es.object.keys.js
var es_object_keys = __webpack_require__(79432);
// EXTERNAL MODULE: ./node_modules/core-js/modules/es.object.to-string.js
var es_object_to_string = __webpack_require__(26099);
// EXTERNAL MODULE: ./node_modules/core-js/modules/web.dom-collections.for-each.js
var web_dom_collections_for_each = __webpack_require__(23500);
// EXTERNAL MODULE: ./src/common/luch-request/utils.js
var utils = __webpack_require__(88166);
// EXTERNAL MODULE: ./src/api/api.js
var api = __webpack_require__(21629);
;// ./node_modules/babel-loader/lib/index.js??clonedRuleSet-40[0].rules[0].use[0]!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader/index.js??clonedRuleSet-40[0].rules[0].use[1]!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader/index.js??clonedRuleSet-43[0].rules[0].use[0]!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-uni-app-loader/using-components.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/index.js??vue-loader-options!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-scoped-loader/index.js!./src/pages/task/problemList.vue?vue&type=script&lang=js&










//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//



/* harmony default export */ var problemListvue_type_script_lang_js_ = ({
  data: function data() {
    return {
      screenWidth: '',
      screenHeight: '',
      selectList: [],
      problemList: [],
      checkItemData: null,
      //结果详情数据
      resultData: null,
      //测试结果数据
      scrollTop: 0.01
    };
  },
  created: function created() {},
  onLoad: function onLoad(e) {
    var info = uni.getSystemInfoSync();
    if (info.uniPlatform.toLowerCase() === 'app') {
      plus.navigator.setStatusBarStyle("dark");
    }
    if (e.checkItemData != undefined && e.checkItemData != null && e.checkItemData != null) {
      this.checkItemData = JSON.parse(decodeURIComponent(e.checkItemData));
    }
    if (e.resultData != undefined && e.resultData != null && e.resultData != null) {
      this.resultData = JSON.parse(e.resultData);
    }
    if (e.scrollTop) {
      this.scrollTop = e.scrollTop;
    }
    this.getScreenList();
    this.getProblemList();
  },
  onShow: function onShow() {
    var info = uni.getSystemInfoSync();
    if (info.uniPlatform.toLowerCase() === 'app') {
      plus.navigator.setStatusBarStyle("dark");
    }
  },
  methods: {
    getProblemList: function getProblemList() {
      var _this = this;
      var data = this.checkItemData;
      var params = {
        tqs: data.tqs,
        project: data.project,
        checkItems: data.checkItems,
        itemId: data.itemId,
        part: data.part,
        resultSubtableId: data.id
      };
      this.$http.get(api/* API */.nC.testCase.qaTestProblem_appSelectProblemList, {
        params: params
      }).then(function (res) {
        if (res.data.success) {
          _this.problemList = res.data.result.problemList;
          _this.selectList = res.data.result.selectList;
          _this.problemList.forEach(function (item) {
            if (_this.selectList) {
              if (_this.selectList.indexOf(item.id) != -1) {
                item.check = true;
              } else {
                item.check = false;
              }
            } else {
              item.check = false;
            }
          });
        }
      });
    },
    saveButton: function saveButton() {
      var that = this;
      if (that.selectList && that.selectList.length > 0) {
        if (that.problemList && that.problemList.length > 0) {
          //勾选问题的整条数据
          var newList = that.problemList.filter(function (item) {
            return that.selectList.indexOf(item.id) != -1;
          });
          newList.forEach(function (item) {
            //结果id
            if (that.checkItemData.resultId) {
              item.resultId = that.checkItemData.resultId;
            } else {
              item.resultId = that.resultData.id;
            }
            //结果详情id  对应  checkItem项
            item.resultSubtableId = that.checkItemData.id;
          });
          that.checkItemData.list = newList;
          that.$http.post(api/* API */.nC.testCase.qaTestResultSubtableProblem_appSelectProblem, that.checkItemData).then(function (res) {
            if (res.data.success) {
              uni.showToast({
                title: 'Save Success'
              });
              uni.navigateTo({
                url: '../task/checkItems?data=' + JSON.stringify(that.resultData) + '&scrollTop=' + that.scrollTop
              });
            }
          });
        }
      } else {
        uni.showToast({
          icon: 'none',
          title: 'Please Select At Least One Problem'
        });
        return;
      }
      // uni.navigateBack();
    },
    getScreenList: function getScreenList() {
      var res = uni.getSystemInfoSync();
      this.screenWidth = res.screenWidth; // 获取屏幕宽度
      this.screenHeight = res.screenHeight; // 获取屏幕高度
    },
    checkboxChange: function checkboxChange(value) {
      this.selectList = value.detail.value;
    },
    newProblemHandle: function newProblemHandle() {
      var that = this;
      if (that.selectList && that.selectList.length > 0) {
        if (that.problemList && that.problemList.length > 0) {
          //勾选问题的整条数据
          var newList = that.problemList.filter(function (item) {
            return that.selectList.indexOf(item.id) != -1;
          });
          newList.forEach(function (item) {
            //结果id
            if (that.checkItemData.resultId) {
              item.resultId = that.checkItemData.resultId;
            } else {
              item.resultId = that.resultData.id;
            }
            //结果详情id  对应  checkItem项
            item.resultSubtableId = that.checkItemData.id;
          });
          uni.navigateTo({
            url: '../task/newProblem?selectList=' + JSON.stringify(newList) + '&checkItemData=' + encodeURIComponent(JSON.stringify(this.checkItemData)) + '&resultData=' + JSON.stringify(this.resultData) + '&scrollTop=' + that.scrollTop
          });
        }
      } else {
        var _newList = [];
        uni.navigateTo({
          url: '../task/newProblem?selectList=' + JSON.stringify(_newList) + '&checkItemData=' + JSON.stringify(this.checkItemData) + '&resultData=' + JSON.stringify(this.resultData) + '&scrollTop=' + that.scrollTop
        });
      }
    }
  }
});
;// ./src/pages/task/problemList.vue?vue&type=script&lang=js&
 /* harmony default export */ var task_problemListvue_type_script_lang_js_ = (problemListvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/@dcloudio/vue-cli-plugin-uni/packages/h5-vue-style-loader/index.js??clonedRuleSet-12[0].rules[0].use[0]!./node_modules/css-loader/dist/cjs.js??clonedRuleSet-12[0].rules[0].use[1]!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader/index.js??clonedRuleSet-12[0].rules[0].use[2]!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-12[0].rules[0].use[3]!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-12[0].rules[0].use[4]!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/index.js??vue-loader-options!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-scoped-loader/index.js!./src/pages/task/problemList.vue?vue&type=style&index=0&id=5fb70aff&scoped=true&lang=css&
var problemListvue_type_style_index_0_id_5fb70aff_scoped_true_lang_css_ = __webpack_require__(83643);
;// ./src/pages/task/problemList.vue?vue&type=style&index=0&id=5fb70aff&scoped=true&lang=css&
 /* harmony default export */ var task_problemListvue_type_style_index_0_id_5fb70aff_scoped_true_lang_css_ = ((/* unused pure expression or super */ null && (mod))); 
// EXTERNAL MODULE: ./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(18535);
;// ./src/pages/task/problemList.vue

var renderjs
;

;


/* normalize component */

var component = (0,componentNormalizer/* default */.A)(
  task_problemListvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  null,
  "5fb70aff",
  null,
  false,
  components,
  renderjs
)

/* harmony default export */ var problemList = (component.exports);

/***/ }),

/***/ 83643:
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(13968);
if(content.__esModule) content = content.default;
if(typeof content === 'string') content = [[module.id, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var add = (__webpack_require__(69333)/* ["default"] */ .A)
var update = add("686a02ca", content, true, {"sourceMap":false,"shadowMode":false});

/***/ })

}]);
//# sourceMappingURL=pages-task-problemList.2e9328f0.js.map