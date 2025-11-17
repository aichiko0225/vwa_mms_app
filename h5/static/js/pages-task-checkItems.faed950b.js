(self["webpackChunkhello_uniapp"] = self["webpackChunkhello_uniapp"] || []).push([[330],{

/***/ 8275:
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(40615);
if(content.__esModule) content = content.default;
if(typeof content === 'string') content = [[module.id, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var add = (__webpack_require__(69333)/* ["default"] */ .A)
var update = add("075c2be4", content, true, {"sourceMap":false,"shadowMode":false});

/***/ }),

/***/ 9338:
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(66214);
if(content.__esModule) content = content.default;
if(typeof content === 'string') content = [[module.id, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var add = (__webpack_require__(69333)/* ["default"] */ .A)
var update = add("ccbc7dae", content, true, {"sourceMap":false,"shadowMode":false});

/***/ }),

/***/ 27165:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": function() { return /* binding */ checkItems; }
});

;// ./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader/index.js??clonedRuleSet-42[0].rules[0].use[0]!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-uni-app-loader/filter-modules-template.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-uni-app-loader/page-meta.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/index.js??vue-loader-options!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-scoped-loader/index.js!./src/pages/task/checkItems.vue?vue&type=template&id=69f175c2&scoped=true&
var components = {'uniNavBar': (__webpack_require__(28435)/* ["default"] */ .A),'uniIcons': (__webpack_require__(97972)/* ["default"] */ .A)}
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('v-uni-view',{staticClass:"riskAssessment",style:({height:_vm.containerHeight,width:_vm.containerWidth}),on:{"touchmove":function($event){$event.preventDefault();
arguments[0] = $event = _vm.$handleEvent($event);

}}},[_c('v-uni-view',[_c('uni-nav-bar',{staticStyle:{"background-color":"#ffffff","color":"black","font-weight":"bold"},attrs:{"shadow":true,"status-bar":true,"left-icon":"left","title":"Check Items","left-width":"20%","right-width":"20%","right-text":_vm.rightText},on:{"clickRight":function($event){
arguments[0] = $event = _vm.$handleEvent($event);
(_vm.batchEdit).apply(void 0, arguments)
},"clickLeft":function($event){
arguments[0] = $event = _vm.$handleEvent($event);
(_vm.back).apply(void 0, arguments)
}}}),_c('measured-value',{ref:"measuredValues",attrs:{"selectRows":_vm.selectRows},on:{"handleBatchEdit":function($event){
arguments[0] = $event = _vm.$handleEvent($event);
(_vm.handleBatchEdit).apply(void 0, arguments)
}}})],1),_c('v-uni-view',{staticClass:"infor-list"},[_c('v-uni-scroll-view',{ref:"scrollController",staticStyle:{"height":"75%","position":"fixed","background-color":"#f1f4f5"},attrs:{"scroll-anchoring":true,"scroll-top":_vm.scrollTop,"scroll-y":"true","id":"scrollContainer"}},[_c('v-uni-view',{staticStyle:{"margin":"0px 10px 10px 10px"}},_vm._l((_vm.listGroup),function(item,index){return _c('v-uni-view',{key:item.id},[_c('v-uni-view',{staticStyle:{"display":"flex","justify-content":"space-between"}},[(_vm.listGroup.length>0)?_c('v-uni-view',{staticStyle:{"color":"#9c9c9c","font-size":"14px","font-weight":"bold","padding":"2%"}},[_vm._v("Item ID："+_vm._s(item.itemId))]):_vm._e(),(_vm.listGroup.length>0)?_c('v-uni-view',{style:(item.measuredValue == 'n.i.o' ? _vm.resultStyleRed : _vm.resultStyleBlue)},[_vm._v(" "+_vm._s(item.measuredValue)+" ")]):_vm._e()],1),_vm._l((item.checkItems),function(childrenItem,index){return _c('v-uni-view',{key:childrenItem.id},[_c('v-uni-label',{staticClass:"list"},[_c('v-uni-view',{staticClass:"list-part"},[_c('v-uni-view',{staticClass:"part-title"},[_c('v-uni-checkbox-group',{staticClass:"part-title",on:{"change":function($event){
arguments[0] = $event = _vm.$handleEvent($event);
_vm.checkboxChange(childrenItem)
}}},[(_vm.showCheckbox)?_c('v-uni-checkbox',{staticClass:"checkbox",attrs:{"value":childrenItem.id,"disabled":childrenItem.testResult=='n.i.o'}}):_vm._e(),_c('v-uni-view',{staticClass:"title-t"},[_c('v-uni-view',{staticStyle:{"display":"flex","flex":"1 1","align-items":"center"}},[_vm._v(" "+_vm._s(childrenItem.checkItems)+" ")]),_c('v-uni-view',{staticStyle:{"display":"flex"}},[_c('p',{staticClass:"testcase",on:{"click":function($event){
arguments[0] = $event = _vm.$handleEvent($event);
_vm.goDetailDescription(index)
}}},[_vm._v("View Testcase")]),_c('p',{directives:[{name:"show",rawName:"v-show",value:(childrenItem.testResult),expression:"childrenItem.testResult"}],staticClass:"testResult"},[_vm._v(_vm._s(childrenItem.testResult))])])],1),_c('v-uni-view',{staticClass:"edit",on:{"click":function($event){
arguments[0] = $event = _vm.$handleEvent($event);
_vm.edit(childrenItem)
}}},[_c('p',{directives:[{name:"show",rawName:"v-show",value:(!childrenItem.testResult),expression:"!childrenItem.testResult"}],staticClass:"red-dot-text"}),_vm._v("Edit "),_c('uni-icons',{staticStyle:{"padding-right":"7%"},attrs:{"type":"right","size":"15","color":"#c9c9c9"}})],1)],1)],1)],1)],1)],1)})],2)}),1)],1)],1),_c('v-uni-view',{staticStyle:{"position":"fixed","bottom":"10px","width":"100%","display":"flex","justify-content":"center","align-items":"center"}},[_c('v-uni-button',{staticStyle:{"width":"90%"},attrs:{"type":"warn"},on:{"click":function($event){
arguments[0] = $event = _vm.$handleEvent($event);
(_vm.submit).apply(void 0, arguments)
}}},[_vm._v("Submit")])],1),_c('test-duration',{ref:"testDuration",on:{"handleSubmit":function($event){
arguments[0] = $event = _vm.$handleEvent($event);
(_vm.handleSubmit).apply(void 0, arguments)
}}})],1)}
var recyclableRender = false
var staticRenderFns = []


;// ./src/pages/task/checkItems.vue?vue&type=template&id=69f175c2&scoped=true&

// EXTERNAL MODULE: ./node_modules/core-js/modules/es.array.index-of.js
var es_array_index_of = __webpack_require__(25276);
// EXTERNAL MODULE: ./node_modules/core-js/modules/es.array.push.js
var es_array_push = __webpack_require__(44114);
// EXTERNAL MODULE: ./node_modules/core-js/modules/es.array.splice.js
var es_array_splice = __webpack_require__(54554);
// EXTERNAL MODULE: ./node_modules/core-js/modules/es.date.to-json.js
var es_date_to_json = __webpack_require__(60739);
// EXTERNAL MODULE: ./node_modules/core-js/modules/es.iterator.constructor.js
var es_iterator_constructor = __webpack_require__(18111);
// EXTERNAL MODULE: ./node_modules/core-js/modules/es.iterator.for-each.js
var es_iterator_for_each = __webpack_require__(7588);
// EXTERNAL MODULE: ./node_modules/core-js/modules/es.json.stringify.js
var es_json_stringify = __webpack_require__(33110);
// EXTERNAL MODULE: ./node_modules/core-js/modules/es.object.keys.js
var es_object_keys = __webpack_require__(79432);
// EXTERNAL MODULE: ./node_modules/core-js/modules/es.object.to-string.js
var es_object_to_string = __webpack_require__(26099);
// EXTERNAL MODULE: ./node_modules/core-js/modules/es.regexp.exec.js
var es_regexp_exec = __webpack_require__(27495);
// EXTERNAL MODULE: ./node_modules/core-js/modules/web.dom-collections.for-each.js
var web_dom_collections_for_each = __webpack_require__(23500);
// EXTERNAL MODULE: ./src/common/util/util.js
var util = __webpack_require__(63211);
;// ./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader/index.js??clonedRuleSet-42[0].rules[0].use[0]!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-uni-app-loader/filter-modules-template.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-uni-app-loader/page-meta.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/index.js??vue-loader-options!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-scoped-loader/index.js!./src/pages/task/testDuration.vue?vue&type=template&id=38a019fc&scoped=true&
var testDurationvue_type_template_id_38a019fc_scoped_true_components = {'uniPopup': (__webpack_require__(45272)/* ["default"] */ .A),'uniIcons': (__webpack_require__(97972)/* ["default"] */ .A),'uniGrid': (__webpack_require__(41092)/* ["default"] */ .A),'uniGridItem': (__webpack_require__(66069)/* ["default"] */ .A)}
var testDurationvue_type_template_id_38a019fc_scoped_true_render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('uni-popup',{ref:"popup",staticStyle:{"height":"300px","background-color":"aqua !important"},attrs:{"background-color":"#fff"},on:{"change":function($event){
arguments[0] = $event = _vm.$handleEvent($event);
(_vm.change).apply(void 0, arguments)
}}},[_c('v-uni-view',{staticClass:"popup-content"},[_c('v-uni-view',{staticStyle:{"margin":"5px 7px","font-size":"14.5px","display":"flex","justify-content":"space-between","align-items":"center"}},[_c('v-uni-view',[_c('v-uni-text',{staticStyle:{"color":"red","margin-left":"5px"}},[_vm._v("*")]),_c('v-uni-text',{staticStyle:{"color":"black","margin-left":"2px"}},[_vm._v("Test Duration")]),_c('v-uni-text',{staticStyle:{"color":"#c13a37","margin-left":"10px"}},[_vm._v("Please Fill In The Testing Duration")])],1),_c('uni-icons',{attrs:{"type":"closeempty","size":"25","color":"#626262"},on:{"click":function($event){
arguments[0] = $event = _vm.$handleEvent($event);
(_vm.close).apply(void 0, arguments)
}}})],1)],1),_c('v-uni-view',{staticStyle:{"width":"100%","height":"100%"}},[_c('uni-grid',{attrs:{"column":2,"show-border":false,"square":false}},_vm._l((_vm.durationList),function(item,index){return _c('uni-grid-item',{key:index,staticStyle:{"width":"45%","border-radius":"5px !important"}},[_c('v-uni-view',{class:index==_vm.selectedGridIndex ?'grid-item-click':'grid-item',on:{"click":function($event){
arguments[0] = $event = _vm.$handleEvent($event);
_vm.changeGrid(item,index)
}}},[_vm._v(_vm._s(item.value))])],1)}),1),_c('v-uni-view',{staticStyle:{"margin":"4% 6%"}},[_c('v-uni-button',{staticStyle:{"background-color":"#193c47","color":"#fff"},on:{"click":function($event){
arguments[0] = $event = _vm.$handleEvent($event);
(_vm.sure).apply(void 0, arguments)
}}},[_vm._v("OK")])],1)],1)],1)}
var testDurationvue_type_template_id_38a019fc_scoped_true_recyclableRender = false
var testDurationvue_type_template_id_38a019fc_scoped_true_staticRenderFns = []


;// ./src/pages/task/testDuration.vue?vue&type=template&id=38a019fc&scoped=true&

// EXTERNAL MODULE: ./node_modules/core-js/modules/es.string.replace.js
var es_string_replace = __webpack_require__(25440);
;// ./node_modules/babel-loader/lib/index.js??clonedRuleSet-40[0].rules[0].use[0]!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader/index.js??clonedRuleSet-40[0].rules[0].use[1]!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader/index.js??clonedRuleSet-43[0].rules[0].use[0]!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-uni-app-loader/using-components.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/index.js??vue-loader-options!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-scoped-loader/index.js!./src/pages/task/testDuration.vue?vue&type=script&lang=js&


//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//

/* harmony default export */ var testDurationvue_type_script_lang_js_ = ({
  name: 'testDuration',
  props: {},
  data: function data() {
    return {
      list: [],
      //
      selectedId: '',
      durationList: [{
        index: "1",
        value: "0.5Hr"
      }, {
        index: "2",
        value: "1Hr"
      }, {
        index: "3",
        value: "1.5Hr"
      }, {
        index: "4",
        value: "2Hr"
      }, {
        index: "5",
        value: "2.5Hr"
      }, {
        index: "6",
        value: "3Hr"
      }, {
        index: "7",
        value: "3.5Hr"
      }, {
        index: "8",
        value: "4Hr"
      }, {
        index: "9",
        value: "4.5Hr"
      }, {
        index: "10",
        value: "5Hr"
      }, {
        index: "11",
        value: "5.5Hr"
      }, {
        index: "12",
        value: "6Hr"
      }, {
        index: "13",
        value: "6.5Hr"
      }, {
        index: "14",
        value: "7Hr"
      }, {
        index: "15",
        value: "7.5Hr"
      }, {
        index: "16",
        value: "8.0Hr"
      }],
      selectedGridIndex: -1,
      //点击宫格后背景色变红
      tempTestDuration: null //点击宫格后选择的时长
    };
  },
  methods: {
    changeGrid: function changeGrid(data, index) {
      var that = this;
      that.selectedGridIndex = index;
      that.tempTestDuration = data.value.replace('Hr', '');
      console.log(that.selectedGridIndex);
      console.log(that.tempTestDuration);
    },
    close: function close() {
      var that = this;
      that.selectedGridIndex = -1;
      that.tempTestDuration = null;
      this.$refs.popup.onTap();
    },
    //列表
    getList: function getList(value) {
      var that = this;
    },
    change: function change(e) {
      console.log('当前模式：' + e.type + ',状态：' + e.show);
    },
    cancel: function cancel() {
      var that = this;
      that.selectedGridIndex = -1;
      that.tempTestDuration = null;
      that.$refs.popup.onTap();
    },
    sure: function sure() {
      var that = this;
      if (that.tempTestDuration) {
        that.$refs.popup.onTap();
        that.$emit('handleSubmit', that.tempTestDuration);
      } else {
        uni.showToast({
          title: 'Please Confirm Test Duration',
          icon: 'error'
        });
        return;
      }
      that.selectedGridIndex = -1;
      that.tempTestDuration = null;
    },
    toggle: function toggle(type) {
      this.getList('');
      this.type = type;
      // open 方法传入参数 等同在 uni-popup 组件上绑定 type属性
      this.$refs.popup.open(type);
      this.$refs.popup.vshow = false;
    }
  }
});
;// ./src/pages/task/testDuration.vue?vue&type=script&lang=js&
 /* harmony default export */ var task_testDurationvue_type_script_lang_js_ = (testDurationvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/@dcloudio/vue-cli-plugin-uni/packages/h5-vue-style-loader/index.js??clonedRuleSet-22[0].rules[0].use[0]!./node_modules/css-loader/dist/cjs.js??clonedRuleSet-22[0].rules[0].use[1]!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader/index.js??clonedRuleSet-22[0].rules[0].use[2]!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-22[0].rules[0].use[3]!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-22[0].rules[0].use[4]!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/sass-loader/dist/cjs.js??clonedRuleSet-22[0].rules[0].use[5]!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader/index.js??clonedRuleSet-22[0].rules[0].use[6]!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/index.js??vue-loader-options!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-scoped-loader/index.js!./src/pages/task/testDuration.vue?vue&type=style&index=0&id=38a019fc&lang=scss&scoped=true&
var testDurationvue_type_style_index_0_id_38a019fc_lang_scss_scoped_true_ = __webpack_require__(73886);
;// ./src/pages/task/testDuration.vue?vue&type=style&index=0&id=38a019fc&lang=scss&scoped=true&
 /* harmony default export */ var task_testDurationvue_type_style_index_0_id_38a019fc_lang_scss_scoped_true_ = ((/* unused pure expression or super */ null && (mod))); 
// EXTERNAL MODULE: ./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(18535);
;// ./src/pages/task/testDuration.vue

var renderjs
;

;


/* normalize component */

var component = (0,componentNormalizer/* default */.A)(
  task_testDurationvue_type_script_lang_js_,
  testDurationvue_type_template_id_38a019fc_scoped_true_render,
  testDurationvue_type_template_id_38a019fc_scoped_true_staticRenderFns,
  false,
  null,
  "38a019fc",
  null,
  false,
  testDurationvue_type_template_id_38a019fc_scoped_true_components,
  renderjs
)

/* harmony default export */ var testDuration = (component.exports);
;// ./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader/index.js??clonedRuleSet-42[0].rules[0].use[0]!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-uni-app-loader/filter-modules-template.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-uni-app-loader/page-meta.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/index.js??vue-loader-options!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-scoped-loader/index.js!./src/pages/task/measuredValue.vue?vue&type=template&id=5c7ac649&scoped=true&
var measuredValuevue_type_template_id_5c7ac649_scoped_true_components = {'uniPopup': (__webpack_require__(45272)/* ["default"] */ .A)}
var measuredValuevue_type_template_id_5c7ac649_scoped_true_render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('uni-popup',{ref:"popup",staticStyle:{"height":"300px","background-color":"aqua !important"},attrs:{"background-color":"#fff"},on:{"change":function($event){
arguments[0] = $event = _vm.$handleEvent($event);
(_vm.change).apply(void 0, arguments)
}}},[_c('v-uni-view',{staticClass:"popup-content"},[_c('v-uni-view',{staticStyle:{"margin":"5px 7px","font-size":"14.5px","display":"flex","justify-content":"space-between","align-items":"center"}},[_c('v-uni-view',[_c('v-uni-text',{staticStyle:{"color":"black","margin-left":"5px"}},[_vm._v("Please Select the Result")])],1)],1)],1),_c('v-uni-view',{staticStyle:{"width":"100%","height":"100%"}},[_c('v-uni-view',{staticClass:"pop-wuzi"},_vm._l((_vm.measureList),function(item,index){return _c('v-uni-view',{key:item.id,staticClass:"wuzi-list"},[_c('v-uni-view',{staticClass:"title-g",on:{"click":function($event){
arguments[0] = $event = _vm.$handleEvent($event);
_vm.batchEdit(item)
}}},[_c('v-uni-view',[_vm._v(_vm._s(item.value))])],1)],1)}),1)],1)],1)}
var measuredValuevue_type_template_id_5c7ac649_scoped_true_recyclableRender = false
var measuredValuevue_type_template_id_5c7ac649_scoped_true_staticRenderFns = []


;// ./src/pages/task/measuredValue.vue?vue&type=template&id=5c7ac649&scoped=true&

;// ./node_modules/babel-loader/lib/index.js??clonedRuleSet-40[0].rules[0].use[0]!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader/index.js??clonedRuleSet-40[0].rules[0].use[1]!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader/index.js??clonedRuleSet-43[0].rules[0].use[0]!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-uni-app-loader/using-components.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/index.js??vue-loader-options!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-scoped-loader/index.js!./src/pages/task/measuredValue.vue?vue&type=script&lang=js&
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//

/* harmony default export */ var measuredValuevue_type_script_lang_js_ = ({
  name: 'measuredValue',
  props: {
    selectRows: {
      type: Array,
      default: function _default() {
        return [];
      }
    }
  },
  data: function data() {
    return {
      measureList: [{
        id: "1",
        value: "i.o"
      }, {
        id: "2",
        value: "not tested"
      }, {
        id: "3",
        value: "not testable"
      }],
      tempTestDuration: null //点击宫格后选择的时长
    };
  },
  methods: {
    batchEdit: function batchEdit(item) {
      var that = this;
      if (!that.selectRows.length) {
        uni.showToast({
          title: 'Please select at least one piece of data',
          icon: 'none'
        });
        return;
      }
      that.$emit('handleBatchEdit', item);
      that.$refs.popup.onTap();
    },
    close: function close() {
      this.$refs.popup.onTap();
    },
    //列表
    getList: function getList(value) {
      var that = this;
    },
    change: function change(e) {
      console.log('当前模式：' + e.type + ',状态：' + e.show);
    },
    cancel: function cancel() {
      var that = this;
      that.$refs.popup.onTap();
    },
    sure: function sure() {
      var that = this;
      that.$emit('handleEdit', {
        selectMeasuredValue: that.selectMeasuredValue,
        value: 'i.o'
      });
      that.$refs.popup.onTap();
    },
    toggle: function toggle(type) {
      this.getList('');
      this.type = type;
      // open 方法传入参数 等同在 uni-popup 组件上绑定 type属性
      this.$refs.popup.open(type);
      this.$refs.popup.vshow = false;
    }
  }
});
;// ./src/pages/task/measuredValue.vue?vue&type=script&lang=js&
 /* harmony default export */ var task_measuredValuevue_type_script_lang_js_ = (measuredValuevue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/@dcloudio/vue-cli-plugin-uni/packages/h5-vue-style-loader/index.js??clonedRuleSet-22[0].rules[0].use[0]!./node_modules/css-loader/dist/cjs.js??clonedRuleSet-22[0].rules[0].use[1]!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader/index.js??clonedRuleSet-22[0].rules[0].use[2]!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-22[0].rules[0].use[3]!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-22[0].rules[0].use[4]!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/sass-loader/dist/cjs.js??clonedRuleSet-22[0].rules[0].use[5]!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader/index.js??clonedRuleSet-22[0].rules[0].use[6]!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/index.js??vue-loader-options!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-scoped-loader/index.js!./src/pages/task/measuredValue.vue?vue&type=style&index=0&id=5c7ac649&lang=scss&scoped=true&
var measuredValuevue_type_style_index_0_id_5c7ac649_lang_scss_scoped_true_ = __webpack_require__(9338);
;// ./src/pages/task/measuredValue.vue?vue&type=style&index=0&id=5c7ac649&lang=scss&scoped=true&
 /* harmony default export */ var task_measuredValuevue_type_style_index_0_id_5c7ac649_lang_scss_scoped_true_ = ((/* unused pure expression or super */ null && (mod))); 
;// ./src/pages/task/measuredValue.vue

var measuredValue_renderjs
;

;


/* normalize component */

var measuredValue_component = (0,componentNormalizer/* default */.A)(
  task_measuredValuevue_type_script_lang_js_,
  measuredValuevue_type_template_id_5c7ac649_scoped_true_render,
  measuredValuevue_type_template_id_5c7ac649_scoped_true_staticRenderFns,
  false,
  null,
  "5c7ac649",
  null,
  false,
  measuredValuevue_type_template_id_5c7ac649_scoped_true_components,
  measuredValue_renderjs
)

/* harmony default export */ var measuredValue = (measuredValue_component.exports);
// EXTERNAL MODULE: ./src/pages/task/temporaryBus.js
var temporaryBus = __webpack_require__(73840);
;// ./node_modules/babel-loader/lib/index.js??clonedRuleSet-40[0].rules[0].use[0]!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader/index.js??clonedRuleSet-40[0].rules[0].use[1]!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader/index.js??clonedRuleSet-43[0].rules[0].use[0]!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-uni-app-loader/using-components.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/index.js??vue-loader-options!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-scoped-loader/index.js!./src/pages/task/checkItems.vue?vue&type=script&lang=js&











//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//





/* harmony default export */ var checkItemsvue_type_script_lang_js_ = ({
  components: {
    testDuration: testDuration,
    measuredValue: measuredValue
  },
  data: function data() {
    return {
      scrollTop: 0.01,
      oldScrollTop: 0.01,
      containerHeight: '0',
      containerWidth: '0',
      showCheckbox: false,
      url: {},
      tqsResultData: [],
      listGroup: [],
      selectRows: [],
      //批量编辑，勾选的数据
      rightText: "Batch Edit",
      resultStyleRed: "color:#ff0000;font-size: 14px;font-weight: bold;padding: 7px 7%;",
      resultStyleBlue: "color:#2b9c94;font-size: 14px;font-weight: bold;padding: 7px 7%;"
    };
  },
  onLoad: function onLoad(e) {
    var _this = this;
    var info = uni.getSystemInfoSync();
    if (info.uniPlatform.toLowerCase() === 'app') {
      plus.navigator.setStatusBarStyle("dark");
    }
    if (e.data != undefined && e.data != null && e.data != null) {
      this.tqsResultData = JSON.parse(e.data);
      this.getCheckItems(this.tqsResultData);
    } else {
      this.$nextTick(function () {
        if (e.data != undefined && e.data != null && e.data != null) {
          var data = JSON.parse(e.resultData);
          _this.getCheckItems(data);
        } else {
          var _data = JSON.parse(_this.$route.query.resultData);
          _this.getCheckItems(_data);
        }
      });
    }
    if (e.scrollTop) {
      this.oldScrollTop = e.scrollTop;
    }
  },
  onShow: function onShow() {
    var info = uni.getSystemInfoSync();
    if (info.uniPlatform.toLowerCase() === 'app') {
      plus.navigator.setStatusBarStyle("dark");
    }
    this.getCheckItems(this.tqsResultData);
  },
  created: function created() {
    var info = uni.getSystemInfoSync();
    if (info.uniPlatform.toLowerCase() === 'app') {
      plus.navigator.setStatusBarStyle("dark");
    }
    this.getScreenHeight();
  },
  mounted: function mounted() {
    var info = uni.getSystemInfoSync();
    if (info.uniPlatform.toLowerCase() === 'app') {
      plus.navigator.setStatusBarStyle("dark");
    }
    this.getScreenHeight();
  },
  onReady: function onReady() {
    var info = uni.getSystemInfoSync();
    if (info.uniPlatform.toLowerCase() === 'app') {
      plus.navigator.setStatusBarStyle("dark");
    }
  },
  methods: {
    // scroll: function(e) {
    // 	this.scrollTop =  e.detail.scrollTop
    // },
    goLastScrollPositive: function goLastScrollPositive() {
      this.scrollTop = 0.01;
      this.$nextTick(function () {
        this.scrollTop = this.oldScrollTop;
      });
    },
    getCheckItems: function getCheckItems(data) {
      var that = this;
      if (data && data.id) {
        var params = {
          resultId: data.id,
          isTemp: '1'
        };
        that.$http.get("/testService/qaTestResultSubtable/appList", {
          params: params
        }).then(function (res) {
          if (res.data.success) {
            that.listGroup = res.data.result;
            that.goLastScrollPositive();
          }
        });
      }
    },
    goDetailDescription: function goDetailDescription(index) {
      var listGroupDescription = '';
      this.listGroup.forEach(function (item) {
        item.checkItems.forEach(function (itemData) {
          listGroupDescription = itemData.inspectionContentEn;
        });
      });
      uni.navigateTo({
        url: '../task/detailDescription?listGroupDescription=' + listGroupDescription
      });
    },
    handleBatchEdit: function handleBatchEdit(item) {
      var _this2 = this;
      var that = this;
      //获取勾选的数据
      var selectIds = that.selectRows;
      var params = {
        ids: selectIds,
        testResult: item.value
      };
      that.$http.post("/testService/qaTestResultSubtable/batchEditTestResult", params).then(function (res) {
        if (res.data.success) {
          uni.showToast({
            icon: 'none',
            title: res.data.message
          });
          that.rightText = 'Batch Edit';
          _this2.getCheckItems(_this2.tqsResultData);
        } else {
          uni.showToast({
            title: res.data.message,
            icon: 'none'
          });
        }
      });
      //item  中有想要把勾选数据修改成的id 或者 measredValue
      //调取后端接口，进行批量修改，修改success后  清空selectRows的值,然后关闭复选框
      that.selectRows = [];
      that.showCheckbox = false;
    },
    handleSubmit: function handleSubmit(testDuration) {
      var that = this;
      var resultData = that.tqsResultData;
      resultData.testDuration = testDuration;
      that.$http.post("/testService/qaTestResult/appResultSubmit", resultData).then(function (res) {
        if (res.data.success) {
          uni.showToast({
            title: 'Submit Successfully'
          });
          uni.reLaunch({
            url: '/pages/index/index'
          });
        } else {
          if (res.data.message) {
            uni.showToast({
              icon: 'none',
              title: res.data.message
            });
          } else {
            uni.showToast({
              icon: 'error',
              title: 'Submit Failed'
            });
          }
          return;
        }
      });
    },
    checkboxChange: function checkboxChange(item) {
      var that = this;
      if (item.testResult && item.testResult == 'n.i.o') {
        uni.showToast({
          icon: 'none',
          duration: 3000,
          title: 'The data of the currently selected check item has a check result of n.i.o and cannot be batch edited!'
        });
        return false;
      }
      var id = item.id;
      //本次勾选的数据
      var selectTempRows = that.selectRows;
      if (selectTempRows != null && selectTempRows.length > 0) {
        //如果此时包含选择的id,说明已经选中过了，再次勾选是为了取消，所以要删除；
        //如果不包含，说明没有勾选过，需要勾选上，所以要添加
        if (selectTempRows.indexOf(id) >= 0) {
          selectTempRows.splice(selectTempRows.indexOf(id), 1);
        } else {
          selectTempRows.push(id);
        }
      } else {
        //如果此时数组是空的，直接插入
        selectTempRows.push(id);
      }
      that.selectRows = selectTempRows;
    },
    batchEdit: function batchEdit() {
      var that = this;
      if (that.rightText == 'Test Result') {
        that.complete();
      } else {
        that.showCheckboxFunction();
      }
    },
    showCheckboxFunction: function showCheckboxFunction() {
      var that = this;
      that.showCheckbox = true;
      that.rightText = "Test Result";
    },
    complete: function complete() {
      var that = this;
      //需要处理的被选中的数据的key集合
      var handleSelectData = that.selectRows;
      /* 
       * 执行批量修改的业务
       */
      that.$refs.measuredValues.toggle('bottom');
    },
    submit: function submit() {
      var that = this;
      that.$refs.testDuration.toggle('bottom');
    },
    back: function back() {
      uni.reLaunch({
        url: '/pages/index/index',
        fail: function fail(error) {
          console.log('跳转失败', error);
        }
      });
    },
    edit: function edit(data) {
      var _this3 = this;
      var query = uni.createSelectorQuery().in(this);
      // 选择 scrollContainer 元素
      query.select('#scrollContainer').scrollOffset(function (res) {
        // res.scrollTop 是当前的滚动位置
        console.log('当前滚动位置:', res.scrollTop);
        uni.navigateTo({
          url: '../task/checkItemsEdit?data=' + encodeURIComponent(JSON.stringify(data)) + '&resultData=' + JSON.stringify(_this3.tqsResultData) + '&scrollTop=' + res.scrollTop
        });
      }).exec();
    },
    getScreenHeight: function getScreenHeight() {
      var _this4 = this;
      uni.getSystemInfo({
        success: function success(res) {
          _this4.containerHeight = res.windowHeight + 'px';
          console.log("当前屏幕高度:" + _this4.containerHeight);
          _this4.containerWidth = res.windowWidth + 'px';
        }
      });
    }
  }
});
;// ./src/pages/task/checkItems.vue?vue&type=script&lang=js&
 /* harmony default export */ var task_checkItemsvue_type_script_lang_js_ = (checkItemsvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/@dcloudio/vue-cli-plugin-uni/packages/h5-vue-style-loader/index.js??clonedRuleSet-22[0].rules[0].use[0]!./node_modules/css-loader/dist/cjs.js??clonedRuleSet-22[0].rules[0].use[1]!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader/index.js??clonedRuleSet-22[0].rules[0].use[2]!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-22[0].rules[0].use[3]!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-22[0].rules[0].use[4]!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/sass-loader/dist/cjs.js??clonedRuleSet-22[0].rules[0].use[5]!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader/index.js??clonedRuleSet-22[0].rules[0].use[6]!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/index.js??vue-loader-options!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-scoped-loader/index.js!./src/pages/task/checkItems.vue?vue&type=style&index=0&id=69f175c2&lang=scss&scoped=true&
var checkItemsvue_type_style_index_0_id_69f175c2_lang_scss_scoped_true_ = __webpack_require__(82284);
;// ./src/pages/task/checkItems.vue?vue&type=style&index=0&id=69f175c2&lang=scss&scoped=true&
 /* harmony default export */ var task_checkItemsvue_type_style_index_0_id_69f175c2_lang_scss_scoped_true_ = ((/* unused pure expression or super */ null && (mod))); 
;// ./src/pages/task/checkItems.vue

var checkItems_renderjs
;

;


/* normalize component */

var checkItems_component = (0,componentNormalizer/* default */.A)(
  task_checkItemsvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  null,
  "69f175c2",
  null,
  false,
  components,
  checkItems_renderjs
)

/* harmony default export */ var checkItems = (checkItems_component.exports);

/***/ }),

/***/ 40615:
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
___CSS_LOADER_EXPORT___.push([module.id, "@charset \"UTF-8\";\n/**\n * 这里是uni-app内置的常用样式变量\n *\n * uni-app 官方扩展插件及插件市场（https://ext.dcloud.net.cn）上很多三方插件均使用了这些样式变量\n * 如果你是插件开发者，建议你使用scss预处理，并在插件代码中直接使用这些变量（无需 import 这个文件），方便用户通过搭积木的方式开发整体风格一致的App\n *\n */\n/**\n * 如果你是App开发者（插件使用者），你可以通过修改这些变量来定制自己的插件主题，实现自定义主题功能\n *\n * 如果你的项目同样使用了scss预处理，你也可以直接在你的 scss 代码中使用如下变量，同时无需 import 这个文件\n */\n/* 颜色变量 */\n/* 行为相关颜色 */\n/* 文字基本颜色 */\n/* 背景颜色 */\n/* 边框颜色 */\n/* 尺寸变量 */\n/* 文字尺寸 */\n/* 图片尺寸 */\n/* Border Radius */\n/* 水平间距 */\n/* 垂直间距 */\n/* 透明度 */\n/* 文章场景相关 */.uni-grid-wrap[data-v-6f48037d]{display:flex;flex:1;flex-direction:column;width:100%}.uni-grid[data-v-6f48037d]{display:flex;flex-direction:row;flex-wrap:wrap}.uni-grid--border[data-v-6f48037d]{position:relative;z-index:1;border-left:1px #d2d2d2 solid}", ""]);
// Exports
/* harmony default export */ __webpack_exports__["default"] = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ 41092:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  A: function() { return /* binding */ uni_grid; }
});

;// ./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader/index.js??clonedRuleSet-42[0].rules[0].use[0]!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-uni-app-loader/filter-modules-template.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-uni-app-loader/page-meta.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/index.js??vue-loader-options!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-scoped-loader/index.js!./src/uni_modules/uni-grid/components/uni-grid/uni-grid.vue?vue&type=template&id=6f48037d&scoped=true&
var components;
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('v-uni-view',{staticClass:"uni-grid-wrap"},[_c('v-uni-view',{ref:"uni-grid",staticClass:"uni-grid",class:{ 'uni-grid--border': _vm.showBorder },style:({ 'border-left-color':_vm.borderColor}),attrs:{"id":_vm.elId}},[_vm._t("default")],2)],1)}
var recyclableRender = false
var staticRenderFns = []


// EXTERNAL MODULE: ./node_modules/core-js/modules/es.error.to-string.js
var es_error_to_string = __webpack_require__(76918);
// EXTERNAL MODULE: ./node_modules/core-js/modules/es.iterator.constructor.js
var es_iterator_constructor = __webpack_require__(18111);
// EXTERNAL MODULE: ./node_modules/core-js/modules/es.iterator.for-each.js
var es_iterator_for_each = __webpack_require__(7588);
// EXTERNAL MODULE: ./node_modules/core-js/modules/es.number.constructor.js
var es_number_constructor = __webpack_require__(2892);
// EXTERNAL MODULE: ./node_modules/core-js/modules/es.object.to-string.js
var es_object_to_string = __webpack_require__(26099);
// EXTERNAL MODULE: ./node_modules/core-js/modules/es.parse-int.js
var es_parse_int = __webpack_require__(58940);
// EXTERNAL MODULE: ./node_modules/core-js/modules/es.regexp.exec.js
var es_regexp_exec = __webpack_require__(27495);
// EXTERNAL MODULE: ./node_modules/core-js/modules/es.regexp.to-string.js
var es_regexp_to_string = __webpack_require__(38781);
// EXTERNAL MODULE: ./node_modules/core-js/modules/web.dom-collections.for-each.js
var web_dom_collections_for_each = __webpack_require__(23500);
;// ./node_modules/babel-loader/lib/index.js??clonedRuleSet-40[0].rules[0].use[0]!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader/index.js??clonedRuleSet-40[0].rules[0].use[1]!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader/index.js??clonedRuleSet-43[0].rules[0].use[0]!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-uni-app-loader/using-components.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/index.js??vue-loader-options!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-scoped-loader/index.js!./src/uni_modules/uni-grid/components/uni-grid/uni-grid.vue?vue&type=script&lang=js&









//
//
//
//
//
//
//
//

/**
 * Grid 宫格
 * @description 宫格组件
 * @tutorial https://ext.dcloud.net.cn/plugin?id=27
 * @property {Number} column 每列显示个数
 * @property {String} borderColor 边框颜色
 * @property {Boolean} showBorder 是否显示边框
 * @property {Boolean} square 是否方形显示
 * @property {Boolean} Boolean 点击背景是否高亮
 * @event {Function} change 点击 grid 触发，e={detail:{index:0}}，index 为当前点击 gird 下标
 */
/* harmony default export */ var uni_gridvue_type_script_lang_js_ = ({
  name: 'UniGrid',
  emits: ['change'],
  props: {
    // 每列显示个数
    column: {
      type: Number,
      default: 3
    },
    // 是否显示边框
    showBorder: {
      type: Boolean,
      default: true
    },
    // 边框颜色
    borderColor: {
      type: String,
      default: '#D2D2D2'
    },
    // 是否正方形显示,默认为 true
    square: {
      type: Boolean,
      default: true
    },
    highlight: {
      type: Boolean,
      default: true
    }
  },
  provide: function provide() {
    return {
      grid: this
    };
  },
  data: function data() {
    var elId = "Uni_".concat(Math.ceil(Math.random() * 10e5).toString(36));
    return {
      elId: elId,
      width: 0
    };
  },
  created: function created() {
    this.children = [];
  },
  mounted: function mounted() {
    var _this = this;
    this.$nextTick(function () {
      _this.init();
    });
  },
  methods: {
    init: function init() {
      var _this2 = this;
      setTimeout(function () {
        _this2._getSize(function (width) {
          _this2.children.forEach(function (item, index) {
            item.width = width;
          });
        });
      }, 50);
    },
    change: function change(e) {
      this.$emit('change', e);
    },
    _getSize: function _getSize(fn) {
      var _this3 = this;
      uni.createSelectorQuery().in(this).select("#".concat(this.elId)).boundingClientRect().exec(function (ret) {
        _this3.width = parseInt((ret[0].width - 1) / _this3.column) + 'px';
        fn(_this3.width);
      });
    }
  }
});
;// ./src/uni_modules/uni-grid/components/uni-grid/uni-grid.vue?vue&type=script&lang=js&
 /* harmony default export */ var uni_grid_uni_gridvue_type_script_lang_js_ = (uni_gridvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/@dcloudio/vue-cli-plugin-uni/packages/h5-vue-style-loader/index.js??clonedRuleSet-22[0].rules[0].use[0]!./node_modules/css-loader/dist/cjs.js??clonedRuleSet-22[0].rules[0].use[1]!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader/index.js??clonedRuleSet-22[0].rules[0].use[2]!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-22[0].rules[0].use[3]!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-22[0].rules[0].use[4]!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/sass-loader/dist/cjs.js??clonedRuleSet-22[0].rules[0].use[5]!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader/index.js??clonedRuleSet-22[0].rules[0].use[6]!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/index.js??vue-loader-options!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-scoped-loader/index.js!./src/uni_modules/uni-grid/components/uni-grid/uni-grid.vue?vue&type=style&index=0&id=6f48037d&lang=scss&scoped=true&
var uni_gridvue_type_style_index_0_id_6f48037d_lang_scss_scoped_true_ = __webpack_require__(8275);
;// ./src/uni_modules/uni-grid/components/uni-grid/uni-grid.vue?vue&type=style&index=0&id=6f48037d&lang=scss&scoped=true&
 /* harmony default export */ var uni_grid_uni_gridvue_type_style_index_0_id_6f48037d_lang_scss_scoped_true_ = ((/* unused pure expression or super */ null && (mod))); 
// EXTERNAL MODULE: ./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(18535);
;// ./src/uni_modules/uni-grid/components/uni-grid/uni-grid.vue

var renderjs
;

;


/* normalize component */

var component = (0,componentNormalizer/* default */.A)(
  uni_grid_uni_gridvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  null,
  "6f48037d",
  null,
  false,
  components,
  renderjs
)

/* harmony default export */ var uni_grid = (component.exports);

/***/ }),

/***/ 48914:
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
___CSS_LOADER_EXPORT___.push([module.id, "@charset \"UTF-8\";\n/**\n * 这里是uni-app内置的常用样式变量\n *\n * uni-app 官方扩展插件及插件市场（https://ext.dcloud.net.cn）上很多三方插件均使用了这些样式变量\n * 如果你是插件开发者，建议你使用scss预处理，并在插件代码中直接使用这些变量（无需 import 这个文件），方便用户通过搭积木的方式开发整体风格一致的App\n *\n */\n/**\n * 如果你是App开发者（插件使用者），你可以通过修改这些变量来定制自己的插件主题，实现自定义主题功能\n *\n * 如果你的项目同样使用了scss预处理，你也可以直接在你的 scss 代码中使用如下变量，同时无需 import 这个文件\n */\n/* 颜色变量 */\n/* 行为相关颜色 */\n/* 文字基本颜色 */\n/* 背景颜色 */\n/* 边框颜色 */\n/* 尺寸变量 */\n/* 文字尺寸 */\n/* 图片尺寸 */\n/* Border Radius */\n/* 水平间距 */\n/* 垂直间距 */\n/* 透明度 */\n/* 文章场景相关 */uni-page-body[data-v-38a019fc]{min-height:100%;background-color:#fff}body.?%PAGE?%[data-v-38a019fc]{background-color:#fff}[data-v-38a019fc] uni-checkbox{display:flex}[data-v-38a019fc] uni-checkbox:not([disabled]) .uni-checkbox-input:hover{border-color:#d1d1d1}[data-v-38a019fc] uni-checkbox .uni-checkbox-input.uni-checkbox-input-checked{color:#fff!important;background:#0289fe;border-color:#0289fe!important}[data-v-38a019fc] uni-checkbox .uni-checkbox-input{border-radius:50%;width:%?38?%;height:%?38?%;margin-right:%?20?%}[data-v-38a019fc] uni-checkbox-group{height:78%}.popup-content[data-v-38a019fc]{height:15%!important}.popup-content[data-v-38a019fc]  .uni-searchbar{padding:%?20?% %?30?%}.pop-wuzi[data-v-38a019fc]{height:60vh;overflow-y:auto;padding:0 %?30?%}.pop-wuzi .wuzi-list[data-v-38a019fc]{display:flex;align-items:center;padding:%?20?% 0;border-bottom:%?1?% solid #f5f5f5}.pop-wuzi .wuzi-list .title-g[data-v-38a019fc]{flex:1;display:flex;flex-direction:row;justify-content:space-between}.pop-wuzi .wuzi-list .title-g uni-view[data-v-38a019fc]{font-size:%?26?%}.pop-wuzi .wuzi-list .title-g uni-view[data-v-38a019fc]:last-of-type{font-size:%?24?%;color:#888}[data-v-38a019fc] .pop-content{height:80%!important;border-top-right-radius:%?30?%;border-top-left-radius:%?30?%;overflow:hidden}[data-v-38a019fc] uni-view{border-radius:10px 10px 0 0!important}[data-v-38a019fc] .uni-grid{display:flex;justify-content:center}.grid-item[data-v-38a019fc]{width:95%;height:100%;border-radius:3px!important;background-color:#f0f0f0;display:flex;justify-content:center;align-items:center;margin:3% 3%;padding:3% 0}.grid-item-click[data-v-38a019fc]{width:95%;height:100%;border-radius:3px!important;background-color:#e67464;color:#fff;display:flex;justify-content:center;align-items:center;margin:3% 3%;padding:3% 0}.active-bg[data-v-38a019fc]{background-color:red /* 被点击的宫格背景色设置为红色 */}", ""]);
// Exports
/* harmony default export */ __webpack_exports__["default"] = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ 66069:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  A: function() { return /* binding */ uni_grid_item; }
});

;// ./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader/index.js??clonedRuleSet-42[0].rules[0].use[0]!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-uni-app-loader/filter-modules-template.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-uni-app-loader/page-meta.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/index.js??vue-loader-options!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-scoped-loader/index.js!./src/uni_modules/uni-grid/components/uni-grid-item/uni-grid-item.vue?vue&type=template&id=13f73da8&scoped=true&
var components;
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return (_vm.width)?_c('v-uni-view',{staticClass:"uni-grid-item",style:('width:'+_vm.width+';'+(_vm.square?'height:'+_vm.width:''))},[_c('v-uni-view',{staticClass:"uni-grid-item__box",class:{ 'uni-grid-item--border': _vm.showBorder,  'uni-grid-item--border-top': _vm.showBorder && _vm.index < _vm.column, 'uni-highlight': _vm.highlight },style:({'border-right-color': _vm.borderColor ,'border-bottom-color': _vm.borderColor ,'border-top-color': _vm.borderColor }),on:{"click":function($event){
arguments[0] = $event = _vm.$handleEvent($event);
(_vm._onClick).apply(void 0, arguments)
}}},[_vm._t("default")],2)],1):_vm._e()}
var recyclableRender = false
var staticRenderFns = []


// EXTERNAL MODULE: ./node_modules/core-js/modules/es.array.push.js
var es_array_push = __webpack_require__(44114);
// EXTERNAL MODULE: ./node_modules/core-js/modules/es.array.splice.js
var es_array_splice = __webpack_require__(54554);
// EXTERNAL MODULE: ./node_modules/core-js/modules/es.iterator.constructor.js
var es_iterator_constructor = __webpack_require__(18111);
// EXTERNAL MODULE: ./node_modules/core-js/modules/es.iterator.for-each.js
var es_iterator_for_each = __webpack_require__(7588);
// EXTERNAL MODULE: ./node_modules/core-js/modules/es.number.constructor.js
var es_number_constructor = __webpack_require__(2892);
// EXTERNAL MODULE: ./node_modules/core-js/modules/es.object.to-string.js
var es_object_to_string = __webpack_require__(26099);
// EXTERNAL MODULE: ./node_modules/core-js/modules/web.dom-collections.for-each.js
var web_dom_collections_for_each = __webpack_require__(23500);
;// ./node_modules/babel-loader/lib/index.js??clonedRuleSet-40[0].rules[0].use[0]!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader/index.js??clonedRuleSet-40[0].rules[0].use[1]!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader/index.js??clonedRuleSet-43[0].rules[0].use[0]!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-uni-app-loader/using-components.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/index.js??vue-loader-options!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-scoped-loader/index.js!./src/uni_modules/uni-grid/components/uni-grid-item/uni-grid-item.vue?vue&type=script&lang=js&







//
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
 * GridItem 宫格
 * @description 宫格组件
 * @tutorial https://ext.dcloud.net.cn/plugin?id=27
 * @property {Number} index 子组件的唯一标识 ，点击gird会返回当前的标识
 */
/* harmony default export */ var uni_grid_itemvue_type_script_lang_js_ = ({
  name: 'UniGridItem',
  inject: ['grid'],
  props: {
    index: {
      type: Number,
      default: 0
    }
  },
  data: function data() {
    return {
      column: 0,
      showBorder: true,
      square: true,
      highlight: true,
      left: 0,
      top: 0,
      openNum: 2,
      width: 0,
      borderColor: '#e5e5e5'
    };
  },
  created: function created() {
    this.column = this.grid.column;
    this.showBorder = this.grid.showBorder;
    this.square = this.grid.square;
    this.highlight = this.grid.highlight;
    this.top = this.hor === 0 ? this.grid.hor : this.hor;
    this.left = this.ver === 0 ? this.grid.ver : this.ver;
    this.borderColor = this.grid.borderColor;
    this.grid.children.push(this);
    // this.grid.init()
    this.width = this.grid.width;
  },
  beforeDestroy: function beforeDestroy() {
    var _this = this;
    this.grid.children.forEach(function (item, index) {
      if (item === _this) {
        _this.grid.children.splice(index, 1);
      }
    });
  },
  methods: {
    _onClick: function _onClick() {
      this.grid.change({
        detail: {
          index: this.index
        }
      });
    }
  }
});
;// ./src/uni_modules/uni-grid/components/uni-grid-item/uni-grid-item.vue?vue&type=script&lang=js&
 /* harmony default export */ var uni_grid_item_uni_grid_itemvue_type_script_lang_js_ = (uni_grid_itemvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/@dcloudio/vue-cli-plugin-uni/packages/h5-vue-style-loader/index.js??clonedRuleSet-22[0].rules[0].use[0]!./node_modules/css-loader/dist/cjs.js??clonedRuleSet-22[0].rules[0].use[1]!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader/index.js??clonedRuleSet-22[0].rules[0].use[2]!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-22[0].rules[0].use[3]!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-22[0].rules[0].use[4]!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/sass-loader/dist/cjs.js??clonedRuleSet-22[0].rules[0].use[5]!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader/index.js??clonedRuleSet-22[0].rules[0].use[6]!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/index.js??vue-loader-options!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-scoped-loader/index.js!./src/uni_modules/uni-grid/components/uni-grid-item/uni-grid-item.vue?vue&type=style&index=0&id=13f73da8&lang=scss&scoped=true&
var uni_grid_itemvue_type_style_index_0_id_13f73da8_lang_scss_scoped_true_ = __webpack_require__(79080);
;// ./src/uni_modules/uni-grid/components/uni-grid-item/uni-grid-item.vue?vue&type=style&index=0&id=13f73da8&lang=scss&scoped=true&
 /* harmony default export */ var uni_grid_item_uni_grid_itemvue_type_style_index_0_id_13f73da8_lang_scss_scoped_true_ = ((/* unused pure expression or super */ null && (mod))); 
// EXTERNAL MODULE: ./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(18535);
;// ./src/uni_modules/uni-grid/components/uni-grid-item/uni-grid-item.vue

var renderjs
;

;


/* normalize component */

var component = (0,componentNormalizer/* default */.A)(
  uni_grid_item_uni_grid_itemvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  null,
  "13f73da8",
  null,
  false,
  components,
  renderjs
)

/* harmony default export */ var uni_grid_item = (component.exports);

/***/ }),

/***/ 66214:
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
___CSS_LOADER_EXPORT___.push([module.id, "@charset \"UTF-8\";\n/**\n * 这里是uni-app内置的常用样式变量\n *\n * uni-app 官方扩展插件及插件市场（https://ext.dcloud.net.cn）上很多三方插件均使用了这些样式变量\n * 如果你是插件开发者，建议你使用scss预处理，并在插件代码中直接使用这些变量（无需 import 这个文件），方便用户通过搭积木的方式开发整体风格一致的App\n *\n */\n/**\n * 如果你是App开发者（插件使用者），你可以通过修改这些变量来定制自己的插件主题，实现自定义主题功能\n *\n * 如果你的项目同样使用了scss预处理，你也可以直接在你的 scss 代码中使用如下变量，同时无需 import 这个文件\n */\n/* 颜色变量 */\n/* 行为相关颜色 */\n/* 文字基本颜色 */\n/* 背景颜色 */\n/* 边框颜色 */\n/* 尺寸变量 */\n/* 文字尺寸 */\n/* 图片尺寸 */\n/* Border Radius */\n/* 水平间距 */\n/* 垂直间距 */\n/* 透明度 */\n/* 文章场景相关 */uni-page-body[data-v-5c7ac649],\nuni-view[data-v-5c7ac649]{\n  /* display: flex; */}uni-page-body[data-v-5c7ac649]{min-height:100%;background-color:#fff}body.?%PAGE?%[data-v-5c7ac649]{background-color:#fff}[data-v-5c7ac649] uni-checkbox{display:flex}[data-v-5c7ac649] uni-checkbox:not([disabled]) .uni-checkbox-input:hover{border-color:#d1d1d1}[data-v-5c7ac649] uni-checkbox .uni-checkbox-input.uni-checkbox-input-checked{color:#fff!important;background:#0289fe;border-color:#0289fe!important}[data-v-5c7ac649] uni-checkbox .uni-checkbox-input{border-radius:50%;width:%?38?%;height:%?38?%;margin-right:%?20?%}[data-v-5c7ac649] uni-checkbox-group{height:78%}.popup-content[data-v-5c7ac649]{height:15%!important}.popup-content[data-v-5c7ac649]  .uni-searchbar{padding:%?20?% %?30?%}.pop-wuzi[data-v-5c7ac649]{height:30vh;overflow-y:auto;padding:0 %?30?%}.pop-wuzi .wuzi-list[data-v-5c7ac649]{display:flex;align-items:center;padding:%?20?% 0;border-bottom:%?5?% solid #f1f4f5}.pop-wuzi .wuzi-list .title-g[data-v-5c7ac649]{flex:1;display:flex;flex-direction:row;justify-content:center;align-items:center}.pop-wuzi .wuzi-list .title-g uni-view[data-v-5c7ac649]{font-size:%?30?%}.pop-wuzi .wuzi-list .title-g uni-view[data-v-5c7ac649]:last-of-type{font-size:%?24?%;color:#888}[data-v-5c7ac649] .pop-content{height:80%!important;border-top-right-radius:%?30?%;border-top-left-radius:%?30?%;overflow:hidden}[data-v-5c7ac649] uni-view{border-radius:10px 10px 0 0!important}", ""]);
// Exports
/* harmony default export */ __webpack_exports__["default"] = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ 73886:
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(48914);
if(content.__esModule) content = content.default;
if(typeof content === 'string') content = [[module.id, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var add = (__webpack_require__(69333)/* ["default"] */ .A)
var update = add("54e3447a", content, true, {"sourceMap":false,"shadowMode":false});

/***/ }),

/***/ 74408:
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
___CSS_LOADER_EXPORT___.push([module.id, "@charset \"UTF-8\";\n/**\n * 这里是uni-app内置的常用样式变量\n *\n * uni-app 官方扩展插件及插件市场（https://ext.dcloud.net.cn）上很多三方插件均使用了这些样式变量\n * 如果你是插件开发者，建议你使用scss预处理，并在插件代码中直接使用这些变量（无需 import 这个文件），方便用户通过搭积木的方式开发整体风格一致的App\n *\n */\n/**\n * 如果你是App开发者（插件使用者），你可以通过修改这些变量来定制自己的插件主题，实现自定义主题功能\n *\n * 如果你的项目同样使用了scss预处理，你也可以直接在你的 scss 代码中使用如下变量，同时无需 import 这个文件\n */\n/* 颜色变量 */\n/* 行为相关颜色 */\n/* 文字基本颜色 */\n/* 背景颜色 */\n/* 边框颜色 */\n/* 尺寸变量 */\n/* 文字尺寸 */\n/* 图片尺寸 */\n/* Border Radius */\n/* 水平间距 */\n/* 垂直间距 */\n/* 透明度 */\n/* 文章场景相关 */uni-page-body[data-v-69f175c2],\nuni-view[data-v-69f175c2]{\n  /* display: flex; */}uni-page-body[data-v-69f175c2]{min-height:100%;background-color:#fff}body.?%PAGE?%[data-v-69f175c2]{background-color:#fff}.riskAssessment[data-v-69f175c2]{width:100%;background-color:#fff;position:fixed;top:env(safe-area-inset-top); /* 兼容 iOS 11.0-11.4 */top:constant(safe-area-inset-top); /* 兼容 iOS 12.0-12.1 */left:0;touch-action:none}.status_bar[data-v-69f175c2]{height:5%;width:100%;background-color:#fff}.top_view[data-v-69f175c2]{height:5%;width:100%;position:fixed;background-color:#f8f8f8;top:0;z-index:999;align-items:center}.type[data-v-69f175c2]{display:inline-flex;align-items:center;padding:0 5px;margin-left:15px;border-radius:2px;font-size:12px}.part-title[data-v-69f175c2]{display:flex;margin:0 7px;background-color:#fff;padding:2px;position:relative;border-radius:3px}.title-t[data-v-69f175c2]{flex:1;align-items:center;position:relative;width:100%;padding:10px}.infor-list[data-v-69f175c2]{display:block;width:100%;margin-top:5px;height:80%;box-sizing:border-box}.infor-list .list[data-v-69f175c2]{display:flex;padding:%?5?% %?0?%}.infor-list .list .img[data-v-69f175c2]{width:%?64?%;height:%?64?%;padding-right:%?28?%;float:left}.infor-list .list .list-part[data-v-69f175c2]{flex:1;display:block;justify-content:space-between;align-items:center}.infor-list .list .list-part uni-text[data-v-69f175c2]:last-of-type{position:relative;display:flex;justify-content:flex-start;align-items:center;color:#000}.links[data-v-69f175c2]{width:100%;overflow-x:scroll;padding:4px 0;height:4%;display:flex;align-items:center;top:48}.links .each-links[data-v-69f175c2]{display:flex;flex:1;justify-content:center;align-items:center;white-space:nowrap;height:%?52?%;padding:0 10px}.links .each-links uni-text[data-v-69f175c2]{text-align:center;color:#727272;font-size:%?28?%;position:relative}.links .each-links .colorActive[data-v-69f175c2]::after{content:\"\";position:absolute;width:%?40?%;height:%?6?%;background-color:#0289fe;bottom:%?-12?%;left:50%;margin-left:%?-20?%;border-radius:%?4?%}.links .each-links .colorActive[data-v-69f175c2]{color:#000;font-size:%?30?%}.testcase[data-v-69f175c2]{border-radius:5px;background-color:#e6f7ff;color:#0780d8;height:30px;font-size:12px;width:116px;margin:inherit;display:flex;align-items:center;justify-content:center}.testResult[data-v-69f175c2]{border-radius:5px;background-color:#e6f7ff;color:#0780d8;height:30px;font-size:12px;width:80px;margin-left:15px;display:flex;align-items:center;justify-content:center}.edit[data-v-69f175c2]{color:#2b9c94;font-size:14px;font-weight:700;padding:6% 3%;display:flex;align-items:center;justify-content:center}.red-dot-text[data-v-69f175c2]::before{content:\"●\";\n  /* 使用圆点符号作为文字前的标记 */color:red;\n  /* 设置圆点的颜色为红色 */display:inline-block;width:1em;\n  /* 调整圆点的位置 */font-size:1.5em}.checkbox[data-v-69f175c2]{display:flex;justify-content:center;align-items:center;margin-left:5px}", ""]);
// Exports
/* harmony default export */ __webpack_exports__["default"] = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ 76876:
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
___CSS_LOADER_EXPORT___.push([module.id, "@charset \"UTF-8\";\n/**\n * 这里是uni-app内置的常用样式变量\n *\n * uni-app 官方扩展插件及插件市场（https://ext.dcloud.net.cn）上很多三方插件均使用了这些样式变量\n * 如果你是插件开发者，建议你使用scss预处理，并在插件代码中直接使用这些变量（无需 import 这个文件），方便用户通过搭积木的方式开发整体风格一致的App\n *\n */\n/**\n * 如果你是App开发者（插件使用者），你可以通过修改这些变量来定制自己的插件主题，实现自定义主题功能\n *\n * 如果你的项目同样使用了scss预处理，你也可以直接在你的 scss 代码中使用如下变量，同时无需 import 这个文件\n */\n/* 颜色变量 */\n/* 行为相关颜色 */\n/* 文字基本颜色 */\n/* 背景颜色 */\n/* 边框颜色 */\n/* 尺寸变量 */\n/* 文字尺寸 */\n/* 图片尺寸 */\n/* Border Radius */\n/* 水平间距 */\n/* 垂直间距 */\n/* 透明度 */\n/* 文章场景相关 */.uni-grid-item[data-v-13f73da8]{height:100%;display:flex;cursor:pointer}.uni-grid-item__box[data-v-13f73da8]{display:flex;width:100%;position:relative;flex:1;flex-direction:column}.uni-grid-item--border[data-v-13f73da8]{position:relative;z-index:0;border-bottom:1px #d2d2d2 solid;border-right:1px #d2d2d2 solid}.uni-grid-item--border-top[data-v-13f73da8]{position:relative;border-top:1px #d2d2d2 solid;z-index:0}.uni-highlight[data-v-13f73da8]:active{background-color:#f1f1f1}", ""]);
// Exports
/* harmony default export */ __webpack_exports__["default"] = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ 79080:
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(76876);
if(content.__esModule) content = content.default;
if(typeof content === 'string') content = [[module.id, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var add = (__webpack_require__(69333)/* ["default"] */ .A)
var update = add("2acfcbf3", content, true, {"sourceMap":false,"shadowMode":false});

/***/ }),

/***/ 82284:
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(74408);
if(content.__esModule) content = content.default;
if(typeof content === 'string') content = [[module.id, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var add = (__webpack_require__(69333)/* ["default"] */ .A)
var update = add("a5826848", content, true, {"sourceMap":false,"shadowMode":false});

/***/ })

}]);
//# sourceMappingURL=pages-task-checkItems.faed950b.js.map