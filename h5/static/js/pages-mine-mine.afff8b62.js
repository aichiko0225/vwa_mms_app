(self["webpackChunkhello_uniapp"] = self["webpackChunkhello_uniapp"] || []).push([[25],{

/***/ 8382:
/***/ (function(module) {

"use strict";
module.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABMAAAAUCAYAAABvVQZ0AAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAJcEhZcwAAFiUAABYlAUlSJPAAAAHjSURBVDhPrZTxa1JRFMffvxUMgn4KJFiJshBcMAJXsTEGwcRtFVJhMybGw2FtjIVLNhYyWSzMskZBYr+00S9F64dMM4yFv9iEb37PfZbPnvMJ+8KBc8+593PPfefep6GL9r8D+jbgW1BGn7GjZAnLvgdOXQNO+IFzdwBPRPmMpQvGJAv9B3v7US28HDdX8qmkKmQut2cEO2SC1Q8BV1iBrMT82ANVLf1OmWCpPDAQAIpVI2Ah5k7OAGtvjECbTLDgutq5l6YfAf6EMWiTwErlMm6F7sLh9OL0Gadtcw55Ebw9h6/FbwpG56zLIzYf1bGSSNq2WHxJgFxbqfyAxoo4qFZ/Cr1f1Wo1vNp5jXr9N7SLo2Oyw3FIGx4ZlZL7Eedf9c+YjAXZhj3ZzuDZ85z4TzNZBGaD8nnYiEvjk5K3BcsX3sEx6EZybcOIKB0c/MJU4DrcnguqAXZgvisTUomVCCQsqi/0hrFbPAqP0U2hcEQ27AnjPSSM7e8mPXYfvBW2jnneO4Lw/D1jZFaj0RAQqxPY8sNVI2Wtx6nNrtXFF5elObt7H6BxR7aYQFbYsvWNlHwv6sXLnb/XYPbGTcm33iO7md5q/oab0vjI+VhJ5+SWcfHn/S8CbIHaLZXeEsA/AX8A000Vjfjluz8AAAAASUVORK5CYII=";

/***/ }),

/***/ 49107:
/***/ (function(module) {

"use strict";
module.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAYAAADgdz34AAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAJcEhZcwAAFiUAABYlAUlSJPAAAAGBSURBVEhLzZXdSsMwFMd9LQXxQqtge1HnRa8dQ5TRgagMhlfqe+k+9A26dq/itLH/7Jw2zUdnKQN/EGhOkvNrkzTZEzvmfwhGD2Nx4ofiyPNlwfPofkytzTgF6/W6TCiTnociuIhkwbPahr4urILp/KMcnKQpRU2SNCv7vc8WFK1jCNARA/o3MUW2M7iN5Zi36ZwiFTUBTwsGtIUl+nTVBOiAonL2mouDSU61ZmzjDUGyzKi2wXvJxf6EKhYOnyo5r4lKKeBP1GkSIK63Icfw7pFqiuC02NvHxfbTcQlsyQFyYBszpQDmIIyoVmETuJKDoBfVZqK1gJN//1BAw3cJ8FleMU06qoCTf7l/XJnDOkWD4sdSzQwLuLjenEGO2LbIAI3LdEW1DapgG0m2Ml7SEOgdvGdzkV3YxtcEXY6K/vVQjm08KgAOrLaSK0o+W3xSpMIQAJag6EeHCtq4ny05sAoATxcXeeFcFhdOUTpfODrYdvqVqZ43TfxJ0IUdC4T4BZdbAzuZA/EiAAAAAElFTkSuQmCC";

/***/ }),

/***/ 69267:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": function() { return /* binding */ mine; }
});

;// ./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader/index.js??clonedRuleSet-42[0].rules[0].use[0]!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-uni-app-loader/filter-modules-template.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-uni-app-loader/page-meta.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/index.js??vue-loader-options!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-scoped-loader/index.js!./src/pages/mine/mine.vue?vue&type=template&id=7015177e&scoped=true&
var components = {'uniIcons': (__webpack_require__(97972)/* ["default"] */ .A)}
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return (_vm.refresh)?_c('v-uni-view',{staticClass:"mine",style:({height:_vm.containerHeight}),on:{"touchmove":function($event){$event.preventDefault();
arguments[0] = $event = _vm.$handleEvent($event);

}}},[_c('v-uni-view',{staticClass:"mine-top-view"},[_c('v-uni-image',{staticClass:"touxiang",attrs:{"src":_vm.userInfo.avatar},on:{"click":function($event){
arguments[0] = $event = _vm.$handleEvent($event);
(_vm.changeAvatar).apply(void 0, arguments)
}}}),_c('v-uni-view',{staticClass:"touxiang-infor"},[_c('v-uni-view',[_c('v-uni-view',[_vm._v(_vm._s(_vm.userInfo.realname)+" ")]),_c('v-uni-view',{staticStyle:{"color":"#9f9f9f"}},[_vm._v(_vm._s(_vm.userInfo.telephone)+" ")])],1)],1)],1),_c('v-uni-view',{staticClass:"button-list"},[_c('v-uni-view',{staticClass:"list-part",on:{"click":function($event){
arguments[0] = $event = _vm.$handleEvent($event);
(_vm.updatePwd).apply(void 0, arguments)
}}},[_c('v-uni-view',{staticStyle:{"display":"flex","width":"50%"}},[_c('v-uni-image',{staticClass:"img",attrs:{"src":__webpack_require__(8382)}}),_c('v-uni-text',[_vm._v("Change Password")])],1),_c('uni-icons',{attrs:{"type":"right","size":"20","color":"#c9c9c9"}})],1),_c('v-uni-view',{staticClass:"list-part"},[_c('v-uni-view',{staticStyle:{"display":"flex","width":"50%"}},[_c('v-uni-image',{staticClass:"img",attrs:{"src":__webpack_require__(49107)}}),_c('v-uni-text',[_vm._v("About")])],1),_c('v-uni-view',{staticStyle:{"color":"#9f9f9f","margin-right":"10%"}},[_vm._v("Version "+_vm._s(_vm.version)+" ")])],1)],1),_c('v-uni-view',{staticClass:"logout",on:{"click":function($event){
arguments[0] = $event = _vm.$handleEvent($event);
(_vm.logOut).apply(void 0, arguments)
}}},[_c('v-uni-text',[_vm._v("Log Out")])],1)],1):_vm._e()}
var recyclableRender = false
var staticRenderFns = []


;// ./src/pages/mine/mine.vue?vue&type=template&id=7015177e&scoped=true&

// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/esm/defineProperty.js
var defineProperty = __webpack_require__(2775);
// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/esm/objectSpread2.js
var objectSpread2 = __webpack_require__(49943);
// EXTERNAL MODULE: ./node_modules/core-js/modules/es.array.concat.js
var es_array_concat = __webpack_require__(28706);
// EXTERNAL MODULE: ./node_modules/core-js/modules/es.date.to-json.js
var es_date_to_json = __webpack_require__(60739);
// EXTERNAL MODULE: ./node_modules/core-js/modules/es.json.stringify.js
var es_json_stringify = __webpack_require__(33110);
// EXTERNAL MODULE: ./node_modules/core-js/modules/es.object.keys.js
var es_object_keys = __webpack_require__(79432);
// EXTERNAL MODULE: ./src/common/util/constants.js
var constants = __webpack_require__(36710);
// EXTERNAL MODULE: ./src/api/api.js
var api = __webpack_require__(21629);
;// ./node_modules/babel-loader/lib/index.js??clonedRuleSet-40[0].rules[0].use[0]!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader/index.js??clonedRuleSet-40[0].rules[0].use[1]!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader/index.js??clonedRuleSet-43[0].rules[0].use[0]!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-uni-app-loader/using-components.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/index.js??vue-loader-options!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-scoped-loader/index.js!./src/pages/mine/mine.vue?vue&type=script&lang=js&






//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//



/* harmony default export */ var minevue_type_script_lang_js_ = ({
  data: function data() {
    return {
      containerHeight: '800px',
      userInfo: {
        // userName:this.$store.getters.username,
        userName: "Cao,Yuxi",
        telephone: "18344448888",
        avatar: "../../static/qa/defaultAvatar.jpg"
      },
      user: {},
      refresh: false,
      version: '1.0'
    };
  },
  onLoad: function onLoad() {
    // const info = uni.getSystemInfoSync();
    // if (info.uniPlatform.toLowerCase() === 'app') {
    //     plus.navigator.setStatusBarStyle("dark")
    // }
    this.refresh = true;
    this.getScreenHeight();
    this.user = Object.assign({}, uni.getStorageSync(constants/* USER_INFO */.nc));
    this.userInfo.userName = this.user.username;
    this.userInfo.realname = this.user.realname;
    this.userInfo.telephone = this.user.phone;
    if (this.user.avatar) {
      console.log("头像：" + this.user.avatar);
      this.userInfo.avatar = this.$apiUrl + '/sys/common/downloadFile?url=' + this.user.avatar;
    }
  },
  onShow: function onShow() {
    // const info = uni.getSystemInfoSync();
    // if (info.uniPlatform.toLowerCase() === 'app') {
    //     plus.navigator.setStatusBarStyle("dark")
    // }
  },
  methods: {
    changeAvatar: function changeAvatar() {
      var that = this;
      uni.chooseImage({
        count: 1,
        //默认9
        sizeType: ['original', 'compressed'],
        //可以指定上传的图片是否压缩还是原图 默认全有
        sourceType: ['album', 'camera'],
        //album 从相册选图，camera 使用相机
        success: function success(res) {
          var uploadTask = uni.uploadFile((0,defineProperty/* default */.A)((0,defineProperty/* default */.A)({
            url: that.$apiUrl + '/sys/common/upload',
            filePath: res.tempFilePaths[0],
            biz: 'temp',
            name: 'file',
            formData: {
              'biz': 'temp'
            },
            header: {
              "Content-Type": "multipart/form-data"
            }
          }, "header", {
            /* 这个地方每次都调用 */
            "X-Access-Token": uni.getStorageSync('token')
          }), "success", function success(res) {
            var data = JSON.parse(res.data);
            if (data && data.message) {
              var params = {
                avatar: data.message,
                username: that.userInfo.userName
              };
              that.$http.put(that.$apiUrl + '/sys/user/updateAvatar', params).then(function (res) {
                if (res.data.success) {
                  uni.showToast({
                    icon: 'none',
                    title: 'Successfully. '
                  });
                  that.$set(that.userInfo, 'avatar', "".concat(that.$apiUrl, "/sys/common/downloadFile?url=").concat(data.message));
                  var userInfo = uni.getStorageSync('login_user_info');
                  uni.setStorageSync('login_user_info', JSON.stringify((0,objectSpread2/* default */.A)((0,objectSpread2/* default */.A)({}, userInfo), {}, {
                    data: (0,objectSpread2/* default */.A)((0,objectSpread2/* default */.A)({}, userInfo.data), {}, {
                      avatar: data.message
                    })
                  })));
                  that.refresh = false;
                  that.refresh = true; //强制渲染页面
                } else {
                  uni.showToast({
                    icon: 'error',
                    title: 'Modification Failure'
                  });
                }
              });
            }
            console.log(data);
          }));
          uploadTask.onProgressUpdate(function (res) {
            console.log("上传进度：" + res.progress);
            console.log("已经上传的进度：" + res.totalBytesSent);
            console.log("预计需要上传的数据总长度：" + res.totalBytesExpectedToSend);
          });
        }
      });
    },
    updatePwd: function updatePwd() {
      console.log("修改");
      var that = this;
      uni.navigateTo({
        url: '../mine/updatepwd?data=' + JSON.stringify(that.userInfo),
        fail: function fail(e) {
          console.log(e);
        }
      });
    },
    logOut: function logOut() {
      api/* default */.Ay.logout().then(function (res) {
        uni.clearStorageSync();
        uni.reLaunch({
          url: '/pages/login/login'
        });
      });
    },
    getScreenHeight: function getScreenHeight() {
      var _this = this;
      uni.getSystemInfo({
        success: function success(res) {
          _this.containerHeight = res.windowHeight + 'px';
          console.log(_this.containerHeight);
        }
      });
    }
  }
});
;// ./src/pages/mine/mine.vue?vue&type=script&lang=js&
 /* harmony default export */ var mine_minevue_type_script_lang_js_ = (minevue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/@dcloudio/vue-cli-plugin-uni/packages/h5-vue-style-loader/index.js??clonedRuleSet-22[0].rules[0].use[0]!./node_modules/css-loader/dist/cjs.js??clonedRuleSet-22[0].rules[0].use[1]!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader/index.js??clonedRuleSet-22[0].rules[0].use[2]!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-22[0].rules[0].use[3]!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-22[0].rules[0].use[4]!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/sass-loader/dist/cjs.js??clonedRuleSet-22[0].rules[0].use[5]!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader/index.js??clonedRuleSet-22[0].rules[0].use[6]!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/index.js??vue-loader-options!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-scoped-loader/index.js!./src/pages/mine/mine.vue?vue&type=style&index=0&id=7015177e&lang=scss&scoped=true&
var minevue_type_style_index_0_id_7015177e_lang_scss_scoped_true_ = __webpack_require__(94335);
;// ./src/pages/mine/mine.vue?vue&type=style&index=0&id=7015177e&lang=scss&scoped=true&
 /* harmony default export */ var mine_minevue_type_style_index_0_id_7015177e_lang_scss_scoped_true_ = ((/* unused pure expression or super */ null && (mod))); 
// EXTERNAL MODULE: ./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(18535);
;// ./src/pages/mine/mine.vue

var renderjs
;

;


/* normalize component */

var component = (0,componentNormalizer/* default */.A)(
  mine_minevue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  null,
  "7015177e",
  null,
  false,
  components,
  renderjs
)

/* harmony default export */ var mine = (component.exports);

/***/ }),

/***/ 80331:
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
___CSS_LOADER_EXPORT___.push([module.id, "@charset \"UTF-8\";\n/**\n * 这里是uni-app内置的常用样式变量\n *\n * uni-app 官方扩展插件及插件市场（https://ext.dcloud.net.cn）上很多三方插件均使用了这些样式变量\n * 如果你是插件开发者，建议你使用scss预处理，并在插件代码中直接使用这些变量（无需 import 这个文件），方便用户通过搭积木的方式开发整体风格一致的App\n *\n */\n/**\n * 如果你是App开发者（插件使用者），你可以通过修改这些变量来定制自己的插件主题，实现自定义主题功能\n *\n * 如果你的项目同样使用了scss预处理，你也可以直接在你的 scss 代码中使用如下变量，同时无需 import 这个文件\n */\n/* 颜色变量 */\n/* 行为相关颜色 */\n/* 文字基本颜色 */\n/* 背景颜色 */\n/* 边框颜色 */\n/* 尺寸变量 */\n/* 文字尺寸 */\n/* 图片尺寸 */\n/* Border Radius */\n/* 水平间距 */\n/* 垂直间距 */\n/* 透明度 */\n/* 文章场景相关 */uni-page-body[data-v-7015177e],\nuni-view[data-v-7015177e]{\n  /* display: flex; */}uni-page-body[data-v-7015177e]{min-height:100%;background-color:#fff}body.?%PAGE?%[data-v-7015177e]{background-color:#fff}.mine[data-v-7015177e]{width:100%;background-color:#f2f2f2;position:fixed;top:env(safe-area-inset-top); /* 兼容 iOS 11.0-11.4 */top:constant(safe-area-inset-top); /* 兼容 iOS 12.0-12.1 */left:0;touch-action:none}.mine-top-view[data-v-7015177e]{width:100%;height:25%;background-color:#fff;box-sizing:border-box;padding:20% 17px 50px 17px;display:flex}.mine-top-view .touxiang[data-v-7015177e]{width:%?128?%;height:%?128?%;display:flex;border-radius:15px;margin-right:%?34?%}.mine-top-view .touxiang-infor[data-v-7015177e]{flex:1;display:flex}.button-list[data-v-7015177e]{width:100%;height:58%;margin-top:%?16?%;box-sizing:border-box}.button-list .list-part[data-v-7015177e]{height:12%;background-color:#fff;display:flex;justify-content:space-between;align-items:center;margin-bottom:2%}.button-list .list-part .img[data-v-7015177e]{margin:2% 5% 0 10%;width:20px;height:20px}.logout[data-v-7015177e]{height:7.5%;background-color:#fff;display:flex;justify-content:center;align-items:center;margin-bottom:2%}", ""]);
// Exports
/* harmony default export */ __webpack_exports__["default"] = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ 94335:
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(80331);
if(content.__esModule) content = content.default;
if(typeof content === 'string') content = [[module.id, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var add = (__webpack_require__(69333)/* ["default"] */ .A)
var update = add("2f6f19f8", content, true, {"sourceMap":false,"shadowMode":false});

/***/ })

}]);
//# sourceMappingURL=pages-mine-mine.afff8b62.js.map