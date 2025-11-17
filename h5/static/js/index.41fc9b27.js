/******/ (function() { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ 4571:
/***/ (function(__unused_webpack_module, __webpack_exports__) {

"use strict";
var BASE_URL = '';
BASE_URL = 'http://139.196.151.216:9998';
var staticDomainURL = BASE_URL + '/sys/common/static';
var fileUrl = 'http://127.0.0.1:8080';
var configService = {
  apiUrl: BASE_URL,
  staticDomainURL: staticDomainURL,
  fileUrl: fileUrl
};
/* harmony default export */ __webpack_exports__.A = (configService);

/***/ }),

/***/ 21629:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export apiService */
/* harmony import */ var core_js_modules_es_string_starts_with_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(11392);
/* harmony import */ var core_js_modules_es_string_starts_with_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_string_starts_with_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _common_service_service_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(75678);
/* harmony import */ var _common_service_config_service_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(4571);



var apiService = {
  /**
   * 登录
   */
  login: function login(params) {
    // return http.post('/sys/mLogin',params)	
    // return http.post('/sys/appLogin',params)
    return _common_service_service_js__WEBPACK_IMPORTED_MODULE_1__/* .http */ .L.post('/sys/login', params);
  },
  qyweixinLogin: function qyweixinLogin(params) {
    return _common_service_service_js__WEBPACK_IMPORTED_MODULE_1__/* .http */ .L.post('/sys/qyweixinLogin', params);
  },
  /**
    * 手机号码登录
    */
  phoneNoLogin: function phoneNoLogin(params) {
    return _common_service_service_js__WEBPACK_IMPORTED_MODULE_1__/* .http */ .L.post('/sys/phoneLogin', params);
  },
  /**
    * 退出
    */
  logout: function logout(params) {
    return _common_service_service_js__WEBPACK_IMPORTED_MODULE_1__/* .http */ .L.post('/sys/logout', params);
  },
  /**
   * h5-钉钉免登录鉴权
   */
  h5login: function h5login(params) {
    return _common_service_service_js__WEBPACK_IMPORTED_MODULE_1__/* .http */ .L.post('/sys/h5/login', params);
    // return http.post('/dingDingLogin/getUserInfo',params);
  },
  /**
   * 获取文件访问路径
   * @param avatar
   * @param subStr
   * @returns {*}
   */
  getFileAccessHttpUrl: function getFileAccessHttpUrl(avatar, subStr) {
    if (!subStr) subStr = 'http';
    if (avatar && avatar.startsWith(subStr)) {
      return avatar;
    } else {
      return _common_service_config_service_js__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .A.staticDomainURL + "/" + avatar;
    }
  },
  getFileUploadHttpUrl: function getFileUploadHttpUrl(avatar) {
    return _common_service_config_service_js__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .A.apiUrl + "/" + avatar;
  }
};

/* harmony default export */ __webpack_exports__.A = (apiService);

/***/ }),

/***/ 32621:
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(34577);
if(content.__esModule) content = content.default;
if(typeof content === 'string') content = [[module.id, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var add = (__webpack_require__(69333)/* ["default"] */ .A)
var update = add("6140f0ac", content, true, {"sourceMap":false,"shadowMode":false});

/***/ }),

/***/ 34577:
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



var ___CSS_LOADER_URL_IMPORT_0___ = new URL(/* asset import */ __webpack_require__(77461), __webpack_require__.b);
var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
var ___CSS_LOADER_URL_REPLACEMENT_0___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_0___);
// Module
___CSS_LOADER_EXPORT___.push([module.id, "@charset \"UTF-8\";\r\n/**\r\n * 这里是uni-app内置的常用样式变量\r\n *\r\n * uni-app 官方扩展插件及插件市场（https://ext.dcloud.net.cn）上很多三方插件均使用了这些样式变量\r\n * 如果你是插件开发者，建议你使用scss预处理，并在插件代码中直接使用这些变量（无需 import 这个文件），方便用户通过搭积木的方式开发整体风格一致的App\r\n *\r\n */\r\n/**\r\n * 如果你是App开发者（插件使用者），你可以通过修改这些变量来定制自己的插件主题，实现自定义主题功能\r\n *\r\n * 如果你的项目同样使用了scss预处理，你也可以直接在你的 scss 代码中使用如下变量，同时无需 import 这个文件\r\n */\r\n/* 颜色变量 */\r\n/* 行为相关颜色 */\r\n/* 文字基本颜色 */\r\n/* 背景颜色 */\r\n/* 边框颜色 */\r\n/* 尺寸变量 */\r\n/* 文字尺寸 */\r\n/* 图片尺寸 */\r\n/* Border Radius */\r\n/* 水平间距 */\r\n/* 垂直间距 */\r\n/* 透明度 */\r\n/* 文章场景相关 */@font-face{font-family:uniicons;font-weight:400;font-style:normal;src:url(" + ___CSS_LOADER_URL_REPLACEMENT_0___ + ")}\n.fix-left-window{padding-left:var(--window-left)}.pc-hide{display:none!important}\r\n\r\n/*通用 */\r\n/* view{\r\n\tfont-size:28rpx;\r\n\tline-height:1.8;\r\n} */uni-progress, uni-checkbox-group{width:100%}uni-form{width:100%}.uni-flex{display:flex;flex-direction:row}.uni-flex-item{flex:1}.uni-row{flex-direction:row}.uni-column{flex-direction:column}.uni-link{color:#576b95;font-size:%?26?%}.uni-center{text-align:center}.uni-inline-item{display:flex;flex-direction:row;align-items:center}.uni-inline-item uni-text{margin-right:%?20?%}.uni-inline-item uni-text:last-child{margin-right:%?0?%;margin-left:%?20?%}\r\n/* page */.common-page-head{padding:%?35?%;text-align:center}.common-page-head-title{display:inline-block;padding:0 %?40?%;font-size:%?30?%;height:%?88?%;line-height:%?88?%;color:#bebebe;box-sizing:border-box;border-bottom:%?2?% solid #d8d8d8}.uni-padding-wrap{\r\n\t/* width:690rpx; */padding:0 %?30?%}.uni-word{text-align:center;padding:%?200?% %?100?%}.uni-title{font-size:%?30?%;font-weight:500;padding:%?20?% 0;line-height:1.5}.uni-text{font-size:%?28?%}.uni-title uni-text{font-size:%?24?%;color:#888}.uni-text-gray{color:#ccc}.uni-text-small{font-size:%?24?%}.uni-common-mb{margin-bottom:%?30?%}.uni-common-pb{padding-bottom:%?30?%}.uni-common-pl{padding-left:%?30?%}.uni-common-mt{margin-top:%?30?%}\r\n/* 背景色 */.uni-bg-red{background:#f76260;color:#fff}.uni-bg-green{background:#09bb07;color:#fff}.uni-bg-blue{background:#007aff;color:#fff}\r\n/* 标题 */.uni-h1{font-size:%?80?%;font-weight:700}.uni-h2{font-size:%?60?%;font-weight:700}.uni-h3{font-size:%?48?%;font-weight:700}.uni-h4{font-size:%?36?%;font-weight:700}.uni-h5{font-size:%?28?%;color:#8f8f94}.uni-h6{font-size:%?24?%;color:#8f8f94}.uni-bold{font-weight:700}\r\n/* 文本溢出隐藏 */.uni-ellipsis{overflow:hidden;white-space:nowrap;text-overflow:ellipsis}\r\n/* 竖向百分百按钮 */.uni-btn-v{padding:%?10?% 0}.uni-btn-v uni-button{margin:%?20?% 0}\r\n/* 表单 */.uni-form-item{display:flex;width:100%;padding:%?10?% 0}.uni-form-item .title{padding:%?10?% %?25?%}.uni-label{width:%?210?%;word-wrap:break-word;word-break:break-all;text-indent:%?20?%}.uni-input{height:%?50?%;padding:%?15?% %?25?%;line-height:%?50?%;font-size:%?28?%;background:#fff;flex:1}uni-radio-group, uni-checkbox-group{width:100%}uni-radio-group uni-label, uni-checkbox-group uni-label{padding-right:%?20?%}.uni-form-item .with-fun{display:flex;flex-wrap:nowrap;background:#fff}.uni-form-item .with-fun .uni-icon{width:40px;height:%?80?%;line-height:%?80?%;flex-shrink:0}\r\n/* loadmore */.uni-loadmore{height:%?80?%;line-height:%?80?%;text-align:center;padding-bottom:%?30?%}\r\n/*数字角标*/\r\n/* .uni-badge,\r\n.uni-badge-default {\r\n\tfont-family: 'Helvetica Neue', Helvetica, sans-serif;\r\n\tfont-size: 12px;\r\n\tline-height: 1;\r\n\tdisplay: inline-block;\r\n\tpadding: 3px 6px;\r\n\tcolor: #333;\r\n\tborder-radius: 100px;\r\n\tbackground-color: rgba(0, 0, 0, .15);\r\n} */.uni-badge.uni-badge-inverted{padding:0 5px 0 0;color:#929292;background-color:initial}.uni-badge-primary{color:#fff;background-color:#007aff}.uni-badge-blue.uni-badge-inverted,\r\n.uni-badge-primary.uni-badge-inverted{color:#007aff;background-color:initial}.uni-badge-green,\r\n.uni-badge-success{color:#fff;background-color:#4cd964}.uni-badge-green.uni-badge-inverted,\r\n.uni-badge-success.uni-badge-inverted{color:#4cd964;background-color:initial}.uni-badge-warning,\r\n.uni-badge-yellow{color:#fff;background-color:#f0ad4e}.uni-badge-warning.uni-badge-inverted,\r\n.uni-badge-yellow.uni-badge-inverted{color:#f0ad4e;background-color:initial}.uni-badge-danger,\r\n.uni-badge-red{color:#fff;background-color:#dd524d}.uni-badge-danger.uni-badge-inverted,\r\n.uni-badge-red.uni-badge-inverted{color:#dd524d;background-color:initial}.uni-badge-purple,\r\n.uni-badge-royal{color:#fff;background-color:#8a6de9}.uni-badge-purple.uni-badge-inverted,\r\n.uni-badge-royal.uni-badge-inverted{color:#8a6de9;background-color:initial}\r\n/*折叠面板 */.uni-collapse-content{height:0;width:100%;overflow:hidden}.uni-collapse-content.uni-active{height:auto}\r\n/*卡片视图 */.uni-card{background:#fff;border-radius:%?8?%;margin:%?20?% 0;position:relative\r\n\t/* box-shadow: 0 2rpx 4rpx rgba(0, 0, 0, .3); */}.uni-card-content{font-size:%?30?%}.uni-card-content.image-view{width:100%;margin:0}.uni-card-content-inner{position:relative;padding:%?30?%}.uni-card-footer,\r\n.uni-card-header{position:relative;display:flex;min-height:%?50?%;padding:%?20?% %?30?%;justify-content:space-between;align-items:center}.uni-card-header{font-size:%?36?%}.uni-card-footer{color:#6d6d72}.uni-card-footer:before,\r\n.uni-card-header:after{position:absolute;top:0;right:0;left:0;height:%?2?%;content:\"\";-webkit-transform:scaleY(.5);transform:scaleY(.5);background-color:#c8c7cc}.uni-card-header:after{top:auto;bottom:0}.uni-card-media{justify-content:flex-start}.uni-card-media-logo{height:%?84?%;width:%?84?%;margin-right:%?20?%}.uni-card-media-body{height:%?84?%;display:flex;flex-direction:column;justify-content:space-between;align-items:flex-start}.uni-card-media-text-top{line-height:%?36?%;font-size:%?34?%}.uni-card-media-text-bottom{line-height:%?30?%;font-size:%?28?%;color:#8f8f94}.uni-card-link{color:#007aff}\r\n/* 列表 */.uni-list{background-color:#fff;position:relative;width:100%;display:flex;flex-direction:column}.uni-list:after{position:absolute;z-index:10;right:0;bottom:0;left:0;height:1px;content:\"\";-webkit-transform:scaleY(.5);transform:scaleY(.5);background-color:#c8c7cc}.uni-list::before{position:absolute;z-index:10;right:0;top:0;left:0;height:1px;content:\"\";-webkit-transform:scaleY(.5);transform:scaleY(.5);background-color:#c8c7cc}.uni-list-cell{position:relative;display:flex;flex-direction:row;justify-content:space-between;align-items:center}.uni-list-cell-hover{background-color:#eee}.uni-list-cell-pd{padding:%?22?% %?30?%}.uni-list-cell-left{white-space:nowrap;font-size:%?28?%;padding:0 %?30?%}.uni-list-cell-db,\r\n.uni-list-cell-right{flex:1}.uni-list-cell::after{position:absolute;z-index:3;right:0;bottom:0;left:%?30?%;height:1px;content:\"\";-webkit-transform:scaleY(.5);transform:scaleY(.5);background-color:#c8c7cc}.uni-list .uni-list-cell:last-child::after{height:%?0?%}.uni-list-cell-last.uni-list-cell::after{height:%?0?%}.uni-list-cell-divider{position:relative;display:flex;color:#999;background-color:#f7f7f7;padding:%?15?% %?20?%}.uni-list-cell-divider::before{position:absolute;right:0;top:0;left:0;height:1px;content:\"\";-webkit-transform:scaleY(.5);transform:scaleY(.5);background-color:#c8c7cc}.uni-list-cell-divider::after{position:absolute;right:0;bottom:0;left:%?0?%;height:1px;content:\"\";-webkit-transform:scaleY(.5);transform:scaleY(.5);background-color:#c8c7cc}.uni-list-cell-navigate{font-size:%?30?%;padding:%?22?% %?30?%;line-height:%?48?%;position:relative;display:flex;box-sizing:border-box;width:100%;flex:1;justify-content:space-between;align-items:center}.uni-list-cell-navigate{padding-right:%?36?%}.uni-navigate-badge{padding-right:%?50?%}.uni-list-cell-navigate.uni-navigate-right:after{font-family:uniicons;content:\"\\e583\";position:absolute;right:%?24?%;top:50%;color:#bbb;-webkit-transform:translateY(-50%);transform:translateY(-50%)}.uni-list-cell-navigate.uni-navigate-bottom:after{font-family:uniicons;content:\"\\e581\";position:absolute;right:%?24?%;top:50%;color:#bbb;-webkit-transform:translateY(-50%);transform:translateY(-50%)}.uni-list-cell-navigate.uni-navigate-bottom.uni-active::after{font-family:uniicons;content:\"\\e580\";position:absolute;right:%?24?%;top:50%;color:#bbb;-webkit-transform:translateY(-50%);transform:translateY(-50%)}.uni-collapse.uni-list-cell{flex-direction:column}.uni-list-cell-navigate.uni-active{background:#eee}.uni-list.uni-collapse{box-sizing:border-box;height:0;overflow:hidden}.uni-collapse .uni-list-cell{padding-left:%?20?%}.uni-collapse .uni-list-cell::after{left:%?52?%}.uni-list.uni-active{height:auto}\r\n/* 三行列表 */.uni-triplex-row{display:flex;flex:1;width:100%;box-sizing:border-box;flex-direction:row;padding:%?22?% %?30?%}.uni-triplex-right,\r\n.uni-triplex-left{display:flex;flex-direction:column}.uni-triplex-left{width:84%}.uni-triplex-left .uni-title{padding:%?8?% 0}.uni-triplex-left .uni-text, .uni-triplex-left .uni-text-small{color:#999}.uni-triplex-right{width:16%;text-align:right}\r\n/* 图文列表 */.uni-media-list{padding:%?22?% %?30?%;box-sizing:border-box;display:flex;width:100%;flex-direction:row}.uni-navigate-right.uni-media-list{padding-right:%?74?%}.uni-pull-right{flex-direction:row-reverse}.uni-pull-right>.uni-media-list-logo{margin-right:%?0?%;margin-left:%?20?%}.uni-media-list-logo{height:%?84?%;width:%?84?%;margin-right:%?20?%}.uni-media-list-logo uni-image{height:100%;width:100%}.uni-media-list-body{height:%?84?%;display:flex;flex:1;flex-direction:column;justify-content:space-between;align-items:flex-start;overflow:hidden}.uni-media-list-text-top{width:100%;line-height:%?36?%;font-size:%?30?%}.uni-media-list-text-bottom{width:100%;line-height:%?30?%;font-size:%?26?%;color:#8f8f94}\r\n/* 九宫格 */.uni-grid-9{background:#f2f2f2;width:%?750?%;display:flex;flex-direction:row;flex-wrap:wrap;border-top:%?2?% solid #eee}.uni-grid-9-item{width:%?250?%;height:%?200?%;display:flex;flex-direction:column;align-items:center;justify-content:center;border-bottom:%?2?% solid;border-right:%?2?% solid;border-color:#eee;box-sizing:border-box}.no-border-right{border-right:none}.uni-grid-9-image{width:%?100?%;height:%?100?%}.uni-grid-9-text{width:%?250?%;line-height:%?4?%;height:%?40?%;text-align:center;font-size:%?30?%}.uni-grid-9-item-hover{background:rgba(0,0,0,.1)}\r\n/* 上传 */.uni-uploader{flex:1;flex-direction:column}.uni-uploader-head{display:flex;flex-direction:row;justify-content:space-between}.uni-uploader-info{color:#b2b2b2}.uni-uploader-body{margin-top:%?16?%}.uni-uploader__files{display:flex;flex-direction:row;flex-wrap:wrap}.uni-uploader__file{margin:%?10?%;width:%?210?%;height:%?210?%}.uni-uploader__img{display:block;width:%?210?%;height:%?210?%}.uni-uploader__input-box{position:relative;margin:%?10?%;width:%?208?%;height:%?208?%;border:%?2?% solid #d9d9d9}.uni-uploader__input-box:before,\r\n.uni-uploader__input-box:after{content:\" \";position:absolute;top:50%;left:50%;-webkit-transform:translate(-50%,-50%);transform:translate(-50%,-50%);background-color:#d9d9d9}.uni-uploader__input-box:before{width:%?4?%;height:%?79?%}.uni-uploader__input-box:after{width:%?79?%;height:%?4?%}.uni-uploader__input-box:active{border-color:#999}.uni-uploader__input-box:active:before,\r\n.uni-uploader__input-box:active:after{background-color:#999}.uni-uploader__input{position:absolute;z-index:1;top:0;left:0;width:100%;height:100%;opacity:0}\r\n/*问题反馈*/.feedback-title{display:flex;flex-direction:row;justify-content:space-between;align-items:center;padding:%?20?%;color:#8f8f94;font-size:%?28?%}.feedback-star-view.feedback-title{justify-content:flex-start;margin:0}.feedback-quick{position:relative;padding-right:%?40?%}.feedback-quick:after{font-family:uniicons;font-size:%?40?%;content:\"\\e581\";position:absolute;right:0;top:50%;color:#bbb;-webkit-transform:translateY(-50%);transform:translateY(-50%)}.feedback-body{background:#fff}.feedback-textare{height:%?200?%;font-size:%?34?%;line-height:%?50?%;width:100%;box-sizing:border-box;padding:%?20?% %?30?% 0}.feedback-input{font-size:%?34?%;height:%?50?%;min-height:%?50?%;padding:%?15?% %?20?%;line-height:%?50?%}.feedback-uploader{padding:%?22?% %?20?%}.feedback-star{font-family:uniicons;font-size:%?40?%;margin-left:%?6?%}.feedback-star-view{margin-left:%?20?%}.feedback-star:after{content:\"\\e408\"}.feedback-star.active{color:#ffb400}.feedback-star.active:after{content:\"\\e438\"}.feedback-submit{background:#007aff;color:#fff;margin:%?20?%}\r\n/* input group */.uni-input-group{position:relative;padding:0;border:0;background-color:#fff}.uni-input-group:before{position:absolute;top:0;right:0;left:0;height:%?2?%;content:\"\";-webkit-transform:scaleY(.5);transform:scaleY(.5);background-color:#c8c7cc}.uni-input-group:after{position:absolute;right:0;bottom:0;left:0;height:%?2?%;content:\"\";-webkit-transform:scaleY(.5);transform:scaleY(.5);background-color:#c8c7cc}.uni-input-row{position:relative;display:flex;flex-direction:row;font-size:%?28?%;padding:%?22?% %?30?%;justify-content:space-between}.uni-input-group .uni-input-row:after{position:absolute;right:0;bottom:0;left:%?30?%;height:%?2?%;content:\"\";-webkit-transform:scaleY(.5);transform:scaleY(.5);background-color:#c8c7cc}.uni-input-row uni-label{line-height:%?70?%}\r\n/* textarea */.uni-textarea{width:100%;background:#fff}.uni-textarea uni-textarea{width:96%;padding:%?18?% 2%;line-height:1.6;font-size:%?28?%;height:%?150?%}\r\n/* tab bar */.uni-tab-bar{display:flex;flex:1;flex-direction:column;overflow:hidden;height:100%}.uni-tab-bar .list{width:%?750?%;height:100%}.uni-swiper-tab{width:100%;white-space:nowrap;line-height:%?100?%;height:%?100?%;border-bottom:1px solid #c8c7cc}.swiper-tab-list{font-size:%?30?%;width:%?150?%;display:inline-block;text-align:center;color:#555}.uni-tab-bar .active{color:#007aff}.uni-tab-bar .swiper-box{flex:1;width:100%;height:calc(100% - %?100?%)}.uni-tab-bar-loading{padding:%?20?% 0}\r\n/* comment */.uni-comment{padding:%?5?% 0;display:flex;flex-grow:1;flex-direction:column}.uni-comment-list{flex-wrap:nowrap;padding:%?10?% 0;margin:%?10?% 0;width:100%;display:flex}.uni-comment-face{width:%?70?%;height:%?70?%;border-radius:100%;margin-right:%?20?%;flex-shrink:0;overflow:hidden}.uni-comment-face uni-image{width:100%;border-radius:100%}.uni-comment-body{width:100%}.uni-comment-top{line-height:1.5em;justify-content:space-between}.uni-comment-top uni-text{color:#0a98d5;font-size:%?24?%}.uni-comment-date{line-height:%?38?%;flex-direction:row;justify-content:space-between;display:flex!important;flex-grow:1}.uni-comment-date uni-view{color:#666;font-size:%?24?%;line-height:%?38?%}.uni-comment-content{line-height:1.6em;font-size:%?28?%;padding:%?8?% 0}.uni-comment-replay-btn{background:#fff;font-size:%?24?%;line-height:%?28?%;padding:%?5?% %?20?%;border-radius:%?30?%;color:#333!important;margin:0 %?10?%}\r\n/* swiper msg */.uni-swiper-msg{width:100%;padding:%?12?% 0;flex-wrap:nowrap;display:flex}.uni-swiper-msg-icon{width:%?50?%;margin-right:%?20?%}.uni-swiper-msg-icon uni-image{width:100%;flex-shrink:0}.uni-swiper-msg uni-swiper{width:100%;height:%?50?%}.uni-swiper-msg uni-swiper-item{line-height:%?50?%}\r\n/* product */.uni-product-list{display:flex;width:100%;flex-wrap:wrap;flex-direction:row}.uni-product{padding:%?20?%;display:flex;flex-direction:column}.image-view{height:%?330?%;width:%?330?%;margin:%?12?% 0}.uni-product-image{height:%?330?%;width:%?330?%}.uni-product-title{width:%?300?%;word-break:break-all;display:-webkit-box;overflow:hidden;line-height:1.5;text-overflow:ellipsis;-webkit-box-orient:vertical;-webkit-line-clamp:2}.uni-product-price{margin-top:%?10?%;font-size:%?28?%;line-height:1.5;position:relative}.uni-product-price-original{color:#e80080}.uni-product-price-favour{color:#888;text-decoration:line-through;margin-left:%?10?%}.uni-product-tip{position:absolute;right:%?10?%;background-color:#f33;color:#fff;padding:0 %?10?%;border-radius:%?5?%}\r\n/* timeline */.uni-timeline{margin:%?35?% 0;display:flex;flex-direction:column;position:relative}.uni-timeline-item{display:flex;flex-direction:row;position:relative;padding-bottom:%?20?%;box-sizing:border-box;overflow:hidden}.uni-timeline-item .uni-timeline-item-keynode{width:%?160?%;flex-shrink:0;box-sizing:border-box;padding-right:%?20?%;text-align:right;line-height:%?65?%}.uni-timeline-item .uni-timeline-item-divider{flex-shrink:0;position:relative;width:%?30?%;height:%?30?%;top:%?15?%;border-radius:50%;background-color:#bbb}.uni-timeline-item-divider::before,\r\n\t.uni-timeline-item-divider::after{position:absolute;left:%?15?%;width:%?1?%;height:100vh;content:\"\";background:inherit}.uni-timeline-item-divider::before{bottom:100%}.uni-timeline-item-divider::after{top:100%}.uni-timeline-last-item .uni-timeline-item-divider:after{display:none}.uni-timeline-first-item .uni-timeline-item-divider:before{display:none}.uni-timeline-item .uni-timeline-item-content{padding-left:%?20?%}.uni-timeline-last-item .bottom-border::after{display:none}.uni-timeline-item-content .datetime{color:#ccc}\r\n/* 自定义节点颜色 */.uni-timeline-last-item .uni-timeline-item-divider{background-color:#1aad19}\r\n/* uni-icon */.uni-icon{font-family:uniicons;font-size:24px;font-weight:400;font-style:normal;line-height:1;display:inline-block;text-decoration:none;-webkit-font-smoothing:antialiased}.uni-icon.uni-active{color:#007aff}.uni-icon-contact:before{content:\"\\e100\"}.uni-icon-person:before{content:\"\\e101\"}.uni-icon-personadd:before{content:\"\\e102\"}.uni-icon-contact-filled:before{content:\"\\e130\"}.uni-icon-person-filled:before{content:\"\\e131\"}.uni-icon-personadd-filled:before{content:\"\\e132\"}.uni-icon-phone:before{content:\"\\e200\"}.uni-icon-email:before{content:\"\\e201\"}.uni-icon-chatbubble:before{content:\"\\e202\"}.uni-icon-chatboxes:before{content:\"\\e203\"}.uni-icon-phone-filled:before{content:\"\\e230\"}.uni-icon-email-filled:before{content:\"\\e231\"}.uni-icon-chatbubble-filled:before{content:\"\\e232\"}.uni-icon-chatboxes-filled:before{content:\"\\e233\"}.uni-icon-weibo:before{content:\"\\e260\"}.uni-icon-weixin:before{content:\"\\e261\"}.uni-icon-pengyouquan:before{content:\"\\e262\"}.uni-icon-chat:before{content:\"\\e263\"}.uni-icon-qq:before{content:\"\\e264\"}.uni-icon-videocam:before{content:\"\\e300\"}.uni-icon-camera:before{content:\"\\e301\"}.uni-icon-mic:before{content:\"\\e302\"}.uni-icon-location:before{content:\"\\e303\"}.uni-icon-mic-filled:before,\r\n.uni-icon-speech:before{content:\"\\e332\"}.uni-icon-location-filled:before{content:\"\\e333\"}.uni-icon-micoff:before{content:\"\\e360\"}.uni-icon-image:before{content:\"\\e363\"}.uni-icon-map:before{content:\"\\e364\"}.uni-icon-compose:before{content:\"\\e400\"}.uni-icon-trash:before{content:\"\\e401\"}.uni-icon-upload:before{content:\"\\e402\"}.uni-icon-download:before{content:\"\\e403\"}.uni-icon-close:before{content:\"\\e404\"}.uni-icon-redo:before{content:\"\\e405\"}.uni-icon-undo:before{content:\"\\e406\"}.uni-icon-refresh:before{content:\"\\e407\"}.uni-icon-star:before{content:\"\\e408\"}.uni-icon-plus:before{content:\"\\e409\"}.uni-icon-minus:before{content:\"\\e410\"}.uni-icon-circle:before,\r\n.uni-icon-checkbox:before{content:\"\\e411\"}.uni-icon-close-filled:before,\r\n.uni-icon-clear:before{content:\"\\e434\"}.uni-icon-refresh-filled:before{content:\"\\e437\"}.uni-icon-star-filled:before{content:\"\\e438\"}.uni-icon-plus-filled:before{content:\"\\e439\"}.uni-icon-minus-filled:before{content:\"\\e440\"}.uni-icon-circle-filled:before{content:\"\\e441\"}.uni-icon-checkbox-filled:before{content:\"\\e442\"}.uni-icon-closeempty:before{content:\"\\e460\"}.uni-icon-refreshempty:before{content:\"\\e461\"}.uni-icon-reload:before{content:\"\\e462\"}.uni-icon-starhalf:before{content:\"\\e463\"}.uni-icon-spinner:before{content:\"\\e464\"}.uni-icon-spinner-cycle:before{content:\"\\e465\"}.uni-icon-search:before{content:\"\\e466\"}.uni-icon-plusempty:before{content:\"\\e468\"}.uni-icon-forward:before{content:\"\\e470\"}.uni-icon-back:before,\r\n.uni-icon-left-nav:before{content:\"\\e471\"}.uni-icon-checkmarkempty:before{content:\"\\e472\"}.uni-icon-home:before{content:\"\\e500\"}.uni-icon-navigate:before{content:\"\\e501\"}.uni-icon-gear:before{content:\"\\e502\"}.uni-icon-paperplane:before{content:\"\\e503\"}.uni-icon-info:before{content:\"\\e504\"}.uni-icon-help:before{content:\"\\e505\"}.uni-icon-locked:before{content:\"\\e506\"}.uni-icon-more:before{content:\"\\e507\"}.uni-icon-flag:before{content:\"\\e508\"}.uni-icon-home-filled:before{content:\"\\e530\"}.uni-icon-gear-filled:before{content:\"\\e532\"}.uni-icon-info-filled:before{content:\"\\e534\"}.uni-icon-help-filled:before{content:\"\\e535\"}.uni-icon-more-filled:before{content:\"\\e537\"}.uni-icon-settings:before{content:\"\\e560\"}.uni-icon-list:before{content:\"\\e562\"}.uni-icon-bars:before{content:\"\\e563\"}.uni-icon-loop:before{content:\"\\e565\"}.uni-icon-paperclip:before{content:\"\\e567\"}.uni-icon-eye:before{content:\"\\e568\"}.uni-icon-arrowup:before{content:\"\\e580\"}.uni-icon-arrowdown:before{content:\"\\e581\"}.uni-icon-arrowleft:before{content:\"\\e582\"}.uni-icon-arrowright:before{content:\"\\e583\"}.uni-icon-arrowthinup:before{content:\"\\e584\"}.uni-icon-arrowthindown:before{content:\"\\e585\"}.uni-icon-arrowthinleft:before{content:\"\\e586\"}.uni-icon-arrowthinright:before{content:\"\\e587\"}.uni-icon-pulldown:before{content:\"\\e588\"}.uni-icon-scan:before{content:\"\\e612\"}\r\n/* 分界线 */.uni-divider{height:%?110?%;display:flex;align-items:center;justify-content:center;position:relative}.uni-divider__content{font-size:%?28?%;color:#999;padding:0 %?20?%;position:relative;z-index:101;background:#f4f5f6}.uni-divider__line{background-color:#ccc;height:1px;width:100%;position:absolute;z-index:100;top:50%;left:0;-webkit-transform:translateY(50%);transform:translateY(50%)}.left-win-active uni-text{color:#007aff!important}.u-line-1{\r\n\r\n\r\ndisplay:-webkit-box!important;overflow:hidden;text-overflow:ellipsis;word-break:break-all;-webkit-line-clamp:1;-webkit-box-orient:vertical!important\n}.u-line-2{\r\n\r\n\r\ndisplay:-webkit-box!important;overflow:hidden;text-overflow:ellipsis;word-break:break-all;-webkit-line-clamp:2;-webkit-box-orient:vertical!important\n}.u-line-3{\r\n\r\n\r\ndisplay:-webkit-box!important;overflow:hidden;text-overflow:ellipsis;word-break:break-all;-webkit-line-clamp:3;-webkit-box-orient:vertical!important\n}.u-line-4{\r\n\r\n\r\ndisplay:-webkit-box!important;overflow:hidden;text-overflow:ellipsis;word-break:break-all;-webkit-line-clamp:4;-webkit-box-orient:vertical!important\n}.u-line-5{\r\n\r\n\r\ndisplay:-webkit-box!important;overflow:hidden;text-overflow:ellipsis;word-break:break-all;-webkit-line-clamp:5;-webkit-box-orient:vertical!important\n}.u-border{border-width:.5px!important;border-color:#dadbde!important;border-style:solid}.u-border-top{border-top-width:.5px!important;border-color:#dadbde!important;border-top-style:solid}.u-border-left{border-left-width:.5px!important;border-color:#dadbde!important;border-left-style:solid}.u-border-right{border-right-width:.5px!important;border-color:#dadbde!important;border-right-style:solid}.u-border-bottom{border-bottom-width:.5px!important;border-color:#dadbde!important;border-bottom-style:solid}.u-border-top-bottom{border-top-width:.5px!important;border-bottom-width:.5px!important;border-color:#dadbde!important;border-top-style:solid;border-bottom-style:solid}.u-reset-button{padding:0;background-color:initial;\r\nfont-size:inherit;line-height:inherit;color:inherit;\n}\n.u-reset-button::after{border:none}\n.u-hover-class{opacity:.7}.u-primary-light{color:#ecf5ff}.u-warning-light{color:#fdf6ec}.u-success-light{color:#f5fff0}.u-error-light{color:#fef0f0}.u-info-light{color:#f4f4f5}.u-primary-light-bg{background-color:#ecf5ff}.u-warning-light-bg{background-color:#fdf6ec}.u-success-light-bg{background-color:#f5fff0}.u-error-light-bg{background-color:#fef0f0}.u-info-light-bg{background-color:#f4f4f5}.u-primary-dark{color:#398ade}.u-warning-dark{color:#f1a532}.u-success-dark{color:#53c21d}.u-error-dark{color:#e45656}.u-info-dark{color:#767a82}.u-primary-dark-bg{background-color:#398ade}.u-warning-dark-bg{background-color:#f1a532}.u-success-dark-bg{background-color:#53c21d}.u-error-dark-bg{background-color:#e45656}.u-info-dark-bg{background-color:#767a82}.u-primary-disabled{color:#9acafc}.u-warning-disabled{color:#f9d39b}.u-success-disabled{color:#a9e08f}.u-error-disabled{color:#f7b2b2}.u-info-disabled{color:#c4c6c9}.u-primary{color:#3c9cff}.u-warning{color:#f9ae3d}.u-success{color:#5ac725}.u-error{color:#f56c6c}.u-info{color:#909399}.u-primary-bg{background-color:#3c9cff}.u-warning-bg{background-color:#f9ae3d}.u-success-bg{background-color:#5ac725}.u-error-bg{background-color:#f56c6c}.u-info-bg{background-color:#909399}.u-main-color{color:#303133}.u-content-color{color:#606266}.u-tips-color{color:#909193}.u-light-color{color:#c0c4cc}.u-safe-area-inset-top{padding-top:0;padding-top:constant(safe-area-inset-top);padding-top:env(safe-area-inset-top)}.u-safe-area-inset-right{padding-right:0;padding-right:constant(safe-area-inset-right);padding-right:env(safe-area-inset-right)}.u-safe-area-inset-bottom{padding-bottom:0;padding-bottom:constant(safe-area-inset-bottom);padding-bottom:env(safe-area-inset-bottom)}.u-safe-area-inset-left{padding-left:0;padding-left:constant(safe-area-inset-left);padding-left:env(safe-area-inset-left)}\nuni-toast{z-index:10090}uni-toast .uni-toast{z-index:10090}\n::-webkit-scrollbar{display:none;width:0!important;height:0!important;-webkit-appearance:none;background:transparent}\r\n/* uni.css - 通用组件、模板样式库，可以当作一套ui库应用 */\r\n/* H5 兼容 pc 所需 */@media screen and (min-width:768px){body{overflow-y:scroll}}\r\n/* 顶栏通栏样式 */.uni-top-window{padding-top:env(safe-area-inset-top); /* 兼容 iOS 11.0-11.4 */padding-top:constant(safe-area-inset-top) /* 兼容 iOS 12.0-12.1 */}.uni-app--showtabbar uni-page-head[uni-page-head-type=default] ~ uni-page-wrapper{overflow:hidden!important}uni-page-body{background-color:#f2f1f6!important;min-height:100%!important;\r\n  /* height: 100% !important; */height:auto!important;overflow:auto;padding-top:env(safe-area-inset-top); /* 兼容 iOS 11.0-11.4 */padding-top:constant(safe-area-inset-top); /* 兼容 iOS 12.0-12.1 */font-family:uniicons}.uni-top-window uni-tabbar .uni-tabbar{background-color:#fff!important}.uni-app--showleftwindow .hideOnPc{display:none!important}.top-view{position:fixed;top:44px!important;left:0;right:0;z-index:10;background-color:#fff}.top-view-tabs{background-color:#fff}.uni-icons.content-clear-icon{font-size:18px!important}\r\n/* 以下样式用于 hello uni-app 演示所需 */uni-page-body{background-color:#efeff4;height:100%;font-size:%?28?%;line-height:1.8;padding-top:env(safe-area-inset-top); /* 兼容 iOS 11.0-11.4 */padding-top:constant(safe-area-inset-top) /* 兼容 iOS 12.0-12.1 */}body.?%PAGE?%{background-color:#efeff4}.fix-pc-padding{padding:0 50px}.uni-header-logo{padding:%?30?%;flex-direction:column;justify-content:center;align-items:center;margin-top:%?10?%}.uni-header-image{width:100px;height:100px}.uni-hello-text{color:#7a7e83}.uni-hello-addfile{text-align:center;line-height:%?300?%;background:#fff;padding:%?50?%;margin-top:10px;font-size:%?38?%;color:grey}.popup-content .popup-title{line-height:%?60?%;height:%?60?%;font-size:%?30?%;text-align:center;padding:10px 15px!important;border-bottom:1px solid #eee;margin-bottom:22px!important}.marginBotton68PX{display:flex;width:100%;height:68px!important}.uni-easyinput.pickerInputDisabled .is-disabled{color:#000}.top-view{position:fixed;top:0;left:0;right:0;z-index:10;background-color:#fff}.top-view-tabs{background-color:#fff}.picker-uni-input{padding:5px 13px;width:100%}.picker-inner{border:1px solid #dcdfe6;border-radius:4px;overflow:hidden;display:flex;flex:1 1;align-items:center;height:35px}.picker-inner .uni-icons{width:20px} .is-input-error-border{border:1px solid #dcdfe6!important} .is-input-error-border .uni-easyinput__placeholder-class{color:#999!important}uni-picker[disabled] .picker-inner{background-color:#f7f6f6!important;color:#d5d5d5!important}.is-disabled-picker .picker-inner{background-color:#f7f6f6!important;color:#d5d5d5!important}.uni-icons.content-clear-icon{font-size:18px!important}.is-disabled .uni-easyinput__placeholder-class, .uni-easyinput__placeholder-class{font-size:14px!important}.uni-date-editor--x .uni-date__icon-clear{border:4px solid transparent!important;display:none!important}.uni-date__icon-clear .uni-icons{color:#c0c4cc!important}.content-clear-icon{display:none!important}.login-input .is-input-border{border:none!important}.login-input .uni-easyinput__content-input{padding-left:0!important}.remember-psw uni-checkbox .uni-checkbox-input.uni-checkbox-input-checked{background-color:#003990!important;border-color:#003990!important;margin-right:13px}.remember-psw uni-checkbox:not([disabled]) .uni-checkbox-input:hover{border-color:#003990!important;margin-right:13px}.remember-psw uni-checkbox .uni-checkbox-input{width:20px!important;height:20px!important}.uni-input-input:disabled{color:#000!important}.is-disabled-picker .picker-inner{background-color:#f7f6f6!important;color:#000!important}.picker-uni-input{color:#000!important}.uni-textarea-textarea{color:#000!important}.uni-date-editor--x__disabled{opacity:1!important}.icon_closemin{margin-right:%?10?%;position:absolute;right:17px;top:5px}.icon_close{margin-right:%?10?%;position:absolute;right:-5px;top:5px}", ""]);
// Exports
/* harmony default export */ __webpack_exports__["default"] = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ 36649:
/***/ (function(__unused_webpack_module, __unused_webpack___webpack_exports__, __webpack_require__) {

"use strict";

// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/esm/objectSpread2.js
var objectSpread2 = __webpack_require__(49943);
// EXTERNAL MODULE: ./node_modules/core-js/modules/es.array.iterator.js
var es_array_iterator = __webpack_require__(23792);
// EXTERNAL MODULE: ./node_modules/core-js/modules/es.promise.js
var es_promise = __webpack_require__(3362);
// EXTERNAL MODULE: ./node_modules/core-js/modules/es.object.assign.js
var es_object_assign = __webpack_require__(69085);
// EXTERNAL MODULE: ./node_modules/core-js/modules/es.promise.finally.js
var es_promise_finally = __webpack_require__(9391);
// EXTERNAL MODULE: ./node_modules/core-js/modules/es.array.reduce.js
var es_array_reduce = __webpack_require__(72712);
// EXTERNAL MODULE: ./node_modules/core-js/modules/es.iterator.constructor.js
var es_iterator_constructor = __webpack_require__(18111);
// EXTERNAL MODULE: ./node_modules/core-js/modules/es.iterator.reduce.js
var es_iterator_reduce = __webpack_require__(18237);
// EXTERNAL MODULE: ./node_modules/core-js/modules/es.object.to-string.js
var es_object_to_string = __webpack_require__(26099);
// EXTERNAL MODULE: ./node_modules/core-js/modules/es.regexp.exec.js
var es_regexp_exec = __webpack_require__(27495);
// EXTERNAL MODULE: ./node_modules/core-js/modules/es.string.replace.js
var es_string_replace = __webpack_require__(25440);
// EXTERNAL MODULE: ./node_modules/@dcloudio/vue-cli-plugin-uni/packages/h5-vue/dist/vue.runtime.esm.js
var vue_runtime_esm = __webpack_require__(85476);
;// ./src/pages.json







var locales = {
  keys: function keys() {
    return [];
  }
};
__webpack_require__.g['____F0BE1B1____'] = true;
delete __webpack_require__.g['____F0BE1B1____'];
__webpack_require__.g.__uniConfig = {
  "easycom": {
    "^u-(.*)": "uview-ui/components/u-$1/u-$1.vue",
    "^unicloud-db$": "@dcloudio/uni-cli-shared/components/unicloud-db.vue",
    "^uniad$": "@dcloudio/uni-cli-shared/components/uniad.vue",
    "^ad-rewarded-video$": "@dcloudio/uni-cli-shared/components/ad-rewarded-video.vue",
    "^ad-fullscreen-video$": "@dcloudio/uni-cli-shared/components/ad-fullscreen-video.vue",
    "^ad-interstitial$": "@dcloudio/uni-cli-shared/components/ad-interstitial.vue",
    "^ad-interactive$": "@dcloudio/uni-cli-shared/components/ad-interactive.vue",
    "^page-meta$": "@dcloudio/uni-cli-shared/components/page-meta.vue",
    "^navigation-bar$": "@dcloudio/uni-cli-shared/components/navigation-bar.vue",
    "^uni-match-media$": "@dcloudio/uni-cli-shared/components/uni-match-media.vue"
  },
  "globalStyle": {
    "pageOrientation": "portrait",
    "navigationBarTitleText": "QA",
    "navigationBarTextStyle": "black",
    "navigationBarBackgroundColor": "#ffffff",
    "backgroundColor": "#F8F8F8",
    "backgroundColorTop": "#ffffff",
    "backgroundColorBottom": "#F4F5F6",
    "plus": {
      "maxWidth": 1190,
      "navigationBarTextStyle": "dark",
      "navigationBarBackgroundColor": "#ffffff"
    },
    "rpxCalMaxDeviceWidth": 750,
    "rpxCalcBaseDeviceWidth": 375,
    "rpxCalcIncludeWidth": 750,
    "maxWidth": 1190
  },
  "tabBar": {
    "color": "#7A7E83",
    "selectedColor": "#007AFF",
    "borderStyle": "black",
    "backgroundColor": "#F8F8F8",
    "list": [{
      "pagePath": "pages/index/index",
      "iconPath": "static/homeIcon/nav-icon-gzt-default@2x.webp",
      "selectedIconPath": "static/homeIcon/nav-icon-gzt-selected@2x.webp",
      "text": "Task",
      "redDot": false,
      "badge": ""
    }, {
      "pagePath": "pages/infor/infor",
      "iconPath": "static/homeIcon/nav-icon-xiaoxi-default@2x.webp",
      "selectedIconPath": "static/homeIcon/nav-icon-xiaoxi-selected@2x.webp",
      "text": "Message",
      "redDot": false,
      "badge": ""
    }, {
      "pagePath": "pages/mine/mine",
      "iconPath": "static/homeIcon/nav-icon-user-default@2x.webp",
      "selectedIconPath": "static/homeIcon/nav-icon-user-selected@2x.webp",
      "text": "Me",
      "redDot": false,
      "badge": ""
    }]
  }
};
__webpack_require__.g.__uniConfig.compilerVersion = '4.84';
__webpack_require__.g.__uniConfig.darkmode = false;
__webpack_require__.g.__uniConfig.themeConfig = {};
__webpack_require__.g.__uniConfig.uniPlatform = 'h5';
__webpack_require__.g.__uniConfig.appId = '__UNI__F0BE1B1';
__webpack_require__.g.__uniConfig.appName = 'QA';
__webpack_require__.g.__uniConfig.appVersion = '1.0.1';
__webpack_require__.g.__uniConfig.appVersionCode = '100';
__webpack_require__.g.__uniConfig.router = {
  "mode": "hash",
  "base": "./"
};
__webpack_require__.g.__uniConfig.publicPath = "./";
__webpack_require__.g.__uniConfig['async'] = {
  "loading": "AsyncLoading",
  "error": "AsyncError",
  "delay": 200,
  "timeout": 20000
};
__webpack_require__.g.__uniConfig.debug = false;
__webpack_require__.g.__uniConfig.networkTimeout = {
  "request": 60000,
  "connectSocket": 60000,
  "uploadFile": 60000,
  "downloadFile": 60000
};
__webpack_require__.g.__uniConfig.sdkConfigs = {
  "maps": {
    "qqmap": {
      "key": "TKUBZ-D24AF-GJ4JY-JDVM2-IBYKK-KEBCU"
    }
  }
};
__webpack_require__.g.__uniConfig.qqMapKey = "TKUBZ-D24AF-GJ4JY-JDVM2-IBYKK-KEBCU";
__webpack_require__.g.__uniConfig.googleMapKey = undefined;
__webpack_require__.g.__uniConfig.aMapKey = undefined;
__webpack_require__.g.__uniConfig.aMapSecurityJsCode = undefined;
__webpack_require__.g.__uniConfig.aMapServiceHost = undefined;
__webpack_require__.g.__uniConfig.locale = "en";
__webpack_require__.g.__uniConfig.fallbackLocale = undefined;
__webpack_require__.g.__uniConfig.locales = locales.keys().reduce(function (res, key) {
  var locale = key.replace(/\.\/(uni-app.)?(.*).json/, '$2');
  var messages = locales(key);
  Object.assign(res[locale] || (res[locale] = {}), messages.common || messages);
  return res;
}, {});
__webpack_require__.g.__uniConfig.nvue = {
  "flex-direction": "column"
};
__webpack_require__.g.__uniConfig.__webpack_chunk_load__ = __webpack_require__.e;
vue_runtime_esm["default"].component('pages-login-login', function (resolve) {
  var component = {
    component: Promise.all(/* require.ensure | pages-login-login */[__webpack_require__.e(972), __webpack_require__.e(638), __webpack_require__.e(872), __webpack_require__.e(841), __webpack_require__.e(791), __webpack_require__.e(949)]).then((function () {
      return resolve(__webpack_require__(14563));
    }).bind(null, __webpack_require__))['catch'](__webpack_require__.oe),
    delay: __uniConfig['async'].delay,
    timeout: __uniConfig['async'].timeout
  };
  if (__uniConfig['async']['loading']) {
    component.loading = {
      name: 'SystemAsyncLoading',
      render: function render(createElement) {
        return createElement(__uniConfig['async']['loading']);
      }
    };
  }
  if (__uniConfig['async']['error']) {
    component.error = {
      name: 'SystemAsyncError',
      render: function render(createElement) {
        return createElement(__uniConfig['async']['error']);
      }
    };
  }
  return component;
});
vue_runtime_esm["default"].component('pages-login-error', function (resolve) {
  var component = {
    component: __webpack_require__.e(/* require.ensure | pages-login-error */ 244).then((function () {
      return resolve(__webpack_require__(56602));
    }).bind(null, __webpack_require__))['catch'](__webpack_require__.oe),
    delay: __uniConfig['async'].delay,
    timeout: __uniConfig['async'].timeout
  };
  if (__uniConfig['async']['loading']) {
    component.loading = {
      name: 'SystemAsyncLoading',
      render: function render(createElement) {
        return createElement(__uniConfig['async']['loading']);
      }
    };
  }
  if (__uniConfig['async']['error']) {
    component.error = {
      name: 'SystemAsyncError',
      render: function render(createElement) {
        return createElement(__uniConfig['async']['error']);
      }
    };
  }
  return component;
});
vue_runtime_esm["default"].component('pages-index-index', function (resolve) {
  var component = {
    component: Promise.all(/* require.ensure | pages-index-index */[__webpack_require__.e(593), __webpack_require__.e(638), __webpack_require__.e(425), __webpack_require__.e(329)]).then((function () {
      return resolve(__webpack_require__(6296));
    }).bind(null, __webpack_require__))['catch'](__webpack_require__.oe),
    delay: __uniConfig['async'].delay,
    timeout: __uniConfig['async'].timeout
  };
  if (__uniConfig['async']['loading']) {
    component.loading = {
      name: 'SystemAsyncLoading',
      render: function render(createElement) {
        return createElement(__uniConfig['async']['loading']);
      }
    };
  }
  if (__uniConfig['async']['error']) {
    component.error = {
      name: 'SystemAsyncError',
      render: function render(createElement) {
        return createElement(__uniConfig['async']['error']);
      }
    };
  }
  return component;
});
vue_runtime_esm["default"].component('pages-mine-mine', function (resolve) {
  var component = {
    component: Promise.all(/* require.ensure | pages-mine-mine */[__webpack_require__.e(972), __webpack_require__.e(25)]).then((function () {
      return resolve(__webpack_require__(69267));
    }).bind(null, __webpack_require__))['catch'](__webpack_require__.oe),
    delay: __uniConfig['async'].delay,
    timeout: __uniConfig['async'].timeout
  };
  if (__uniConfig['async']['loading']) {
    component.loading = {
      name: 'SystemAsyncLoading',
      render: function render(createElement) {
        return createElement(__uniConfig['async']['loading']);
      }
    };
  }
  if (__uniConfig['async']['error']) {
    component.error = {
      name: 'SystemAsyncError',
      render: function render(createElement) {
        return createElement(__uniConfig['async']['error']);
      }
    };
  }
  return component;
});
vue_runtime_esm["default"].component('pages-task-fillInInformation', function (resolve) {
  var component = {
    component: Promise.all(/* require.ensure | pages-task-fillInInformation */[__webpack_require__.e(972), __webpack_require__.e(593), __webpack_require__.e(872), __webpack_require__.e(22)]).then((function () {
      return resolve(__webpack_require__(23864));
    }).bind(null, __webpack_require__))['catch'](__webpack_require__.oe),
    delay: __uniConfig['async'].delay,
    timeout: __uniConfig['async'].timeout
  };
  if (__uniConfig['async']['loading']) {
    component.loading = {
      name: 'SystemAsyncLoading',
      render: function render(createElement) {
        return createElement(__uniConfig['async']['loading']);
      }
    };
  }
  if (__uniConfig['async']['error']) {
    component.error = {
      name: 'SystemAsyncError',
      render: function render(createElement) {
        return createElement(__uniConfig['async']['error']);
      }
    };
  }
  return component;
});
vue_runtime_esm["default"].component('pages-task-problemList', function (resolve) {
  var component = {
    component: __webpack_require__.e(/* require.ensure | pages-task-problemList */ 767).then((function () {
      return resolve(__webpack_require__(33572));
    }).bind(null, __webpack_require__))['catch'](__webpack_require__.oe),
    delay: __uniConfig['async'].delay,
    timeout: __uniConfig['async'].timeout
  };
  if (__uniConfig['async']['loading']) {
    component.loading = {
      name: 'SystemAsyncLoading',
      render: function render(createElement) {
        return createElement(__uniConfig['async']['loading']);
      }
    };
  }
  if (__uniConfig['async']['error']) {
    component.error = {
      name: 'SystemAsyncError',
      render: function render(createElement) {
        return createElement(__uniConfig['async']['error']);
      }
    };
  }
  return component;
});
vue_runtime_esm["default"].component('pages-task-checkItems', function (resolve) {
  var component = {
    component: Promise.all(/* require.ensure | pages-task-checkItems */[__webpack_require__.e(972), __webpack_require__.e(435), __webpack_require__.e(425), __webpack_require__.e(330)]).then((function () {
      return resolve(__webpack_require__(27165));
    }).bind(null, __webpack_require__))['catch'](__webpack_require__.oe),
    delay: __uniConfig['async'].delay,
    timeout: __uniConfig['async'].timeout
  };
  if (__uniConfig['async']['loading']) {
    component.loading = {
      name: 'SystemAsyncLoading',
      render: function render(createElement) {
        return createElement(__uniConfig['async']['loading']);
      }
    };
  }
  if (__uniConfig['async']['error']) {
    component.error = {
      name: 'SystemAsyncError',
      render: function render(createElement) {
        return createElement(__uniConfig['async']['error']);
      }
    };
  }
  return component;
});
vue_runtime_esm["default"].component('pages-task-checkItemsEdit', function (resolve) {
  var component = {
    component: Promise.all(/* require.ensure | pages-task-checkItemsEdit */[__webpack_require__.e(972), __webpack_require__.e(593), __webpack_require__.e(872), __webpack_require__.e(435), __webpack_require__.e(214)]).then((function () {
      return resolve(__webpack_require__(86206));
    }).bind(null, __webpack_require__))['catch'](__webpack_require__.oe),
    delay: __uniConfig['async'].delay,
    timeout: __uniConfig['async'].timeout
  };
  if (__uniConfig['async']['loading']) {
    component.loading = {
      name: 'SystemAsyncLoading',
      render: function render(createElement) {
        return createElement(__uniConfig['async']['loading']);
      }
    };
  }
  if (__uniConfig['async']['error']) {
    component.error = {
      name: 'SystemAsyncError',
      render: function render(createElement) {
        return createElement(__uniConfig['async']['error']);
      }
    };
  }
  return component;
});
vue_runtime_esm["default"].component('pages-infor-infor', function (resolve) {
  var component = {
    component: Promise.all(/* require.ensure | pages-infor-infor */[__webpack_require__.e(972), __webpack_require__.e(638), __webpack_require__.e(435), __webpack_require__.e(791), __webpack_require__.e(429)]).then((function () {
      return resolve(__webpack_require__(51445));
    }).bind(null, __webpack_require__))['catch'](__webpack_require__.oe),
    delay: __uniConfig['async'].delay,
    timeout: __uniConfig['async'].timeout
  };
  if (__uniConfig['async']['loading']) {
    component.loading = {
      name: 'SystemAsyncLoading',
      render: function render(createElement) {
        return createElement(__uniConfig['async']['loading']);
      }
    };
  }
  if (__uniConfig['async']['error']) {
    component.error = {
      name: 'SystemAsyncError',
      render: function render(createElement) {
        return createElement(__uniConfig['async']['error']);
      }
    };
  }
  return component;
});
vue_runtime_esm["default"].component('pages-mine-updatepwd', function (resolve) {
  var component = {
    component: Promise.all(/* require.ensure | pages-mine-updatepwd */[__webpack_require__.e(593), __webpack_require__.e(841), __webpack_require__.e(656)]).then((function () {
      return resolve(__webpack_require__(54285));
    }).bind(null, __webpack_require__))['catch'](__webpack_require__.oe),
    delay: __uniConfig['async'].delay,
    timeout: __uniConfig['async'].timeout
  };
  if (__uniConfig['async']['loading']) {
    component.loading = {
      name: 'SystemAsyncLoading',
      render: function render(createElement) {
        return createElement(__uniConfig['async']['loading']);
      }
    };
  }
  if (__uniConfig['async']['error']) {
    component.error = {
      name: 'SystemAsyncError',
      render: function render(createElement) {
        return createElement(__uniConfig['async']['error']);
      }
    };
  }
  return component;
});
vue_runtime_esm["default"].component('pages-task-detailDescription', function (resolve) {
  var component = {
    component: __webpack_require__.e(/* require.ensure | pages-task-detailDescription */ 581).then((function () {
      return resolve(__webpack_require__(65896));
    }).bind(null, __webpack_require__))['catch'](__webpack_require__.oe),
    delay: __uniConfig['async'].delay,
    timeout: __uniConfig['async'].timeout
  };
  if (__uniConfig['async']['loading']) {
    component.loading = {
      name: 'SystemAsyncLoading',
      render: function render(createElement) {
        return createElement(__uniConfig['async']['loading']);
      }
    };
  }
  if (__uniConfig['async']['error']) {
    component.error = {
      name: 'SystemAsyncError',
      render: function render(createElement) {
        return createElement(__uniConfig['async']['error']);
      }
    };
  }
  return component;
});
vue_runtime_esm["default"].component('pages-calendar-calendar', function (resolve) {
  var component = {
    component: __webpack_require__.e(/* require.ensure | pages-calendar-calendar */ 135).then((function () {
      return resolve(__webpack_require__(42263));
    }).bind(null, __webpack_require__))['catch'](__webpack_require__.oe),
    delay: __uniConfig['async'].delay,
    timeout: __uniConfig['async'].timeout
  };
  if (__uniConfig['async']['loading']) {
    component.loading = {
      name: 'SystemAsyncLoading',
      render: function render(createElement) {
        return createElement(__uniConfig['async']['loading']);
      }
    };
  }
  if (__uniConfig['async']['error']) {
    component.error = {
      name: 'SystemAsyncError',
      render: function render(createElement) {
        return createElement(__uniConfig['async']['error']);
      }
    };
  }
  return component;
});
__webpack_require__.g.__uniRoutes = [{
  path: '/',
  alias: '/pages/login/login',
  component: {
    render: function render(createElement) {
      return createElement('Page', {
        props: Object.assign({
          isQuit: true,
          isEntry: true
        }, __uniConfig.globalStyle, {
          "navigationStyle": "custom"
        })
      }, [createElement('pages-login-login', {
        slot: 'page'
      })]);
    }
  },
  meta: {
    id: 1,
    name: 'pages-login-login',
    isNVue: false,
    maxWidth: 1190,
    pagePath: 'pages/login/login',
    isQuit: true,
    isEntry: true,
    windowTop: 0
  }
}, {
  path: '/pages/login/error',
  component: {
    render: function render(createElement) {
      return createElement('Page', {
        props: Object.assign({}, __uniConfig.globalStyle, {})
      }, [createElement('pages-login-error', {
        slot: 'page'
      })]);
    }
  },
  meta: {
    name: 'pages-login-error',
    isNVue: false,
    maxWidth: 1190,
    pagePath: 'pages/login/error',
    windowTop: 44
  }
}, {
  path: '/pages/index/index',
  component: {
    render: function render(createElement) {
      return createElement('Page', {
        props: Object.assign({
          isQuit: true,
          isTabBar: true,
          tabBarIndex: 0
        }, __uniConfig.globalStyle, {
          "navigationStyle": "custom",
          "scrollIndicator": "none"
        })
      }, [createElement('pages-index-index', {
        slot: 'page'
      })]);
    }
  },
  meta: {
    id: 2,
    name: 'pages-index-index',
    isNVue: false,
    maxWidth: 1190,
    pagePath: 'pages/index/index',
    isQuit: true,
    isTabBar: true,
    tabBarIndex: 0,
    windowTop: 0
  }
}, {
  path: '/pages/mine/mine',
  component: {
    render: function render(createElement) {
      return createElement('Page', {
        props: Object.assign({
          isQuit: true,
          isTabBar: true,
          tabBarIndex: 2
        }, __uniConfig.globalStyle, {
          "navigationStyle": "custom"
        })
      }, [createElement('pages-mine-mine', {
        slot: 'page'
      })]);
    }
  },
  meta: {
    id: 3,
    name: 'pages-mine-mine',
    isNVue: false,
    maxWidth: 1190,
    pagePath: 'pages/mine/mine',
    isQuit: true,
    isTabBar: true,
    tabBarIndex: 2,
    windowTop: 0
  }
}, {
  path: '/pages/task/fillInInformation',
  component: {
    render: function render(createElement) {
      return createElement('Page', {
        props: Object.assign({}, __uniConfig.globalStyle, {
          "navigationBarTitleText": "Fill in Information",
          "titleNView": {
            "type": "default",
            "backgroundColor": "#ffffff"
          }
        })
      }, [createElement('pages-task-fillInInformation', {
        slot: 'page'
      })]);
    }
  },
  meta: {
    name: 'pages-task-fillInInformation',
    isNVue: false,
    maxWidth: 1190,
    pagePath: 'pages/task/fillInInformation',
    windowTop: 44
  }
}, {
  path: '/pages/task/problemList',
  component: {
    render: function render(createElement) {
      return createElement('Page', {
        props: Object.assign({}, __uniConfig.globalStyle, {
          "navigationBarTitleText": "Problem List",
          "titleNView": {
            "type": "default",
            "backgroundColor": "#ffffff"
          }
        })
      }, [createElement('pages-task-problemList', {
        slot: 'page'
      })]);
    }
  },
  meta: {
    name: 'pages-task-problemList',
    isNVue: false,
    maxWidth: 1190,
    pagePath: 'pages/task/problemList',
    windowTop: 44
  }
}, {
  path: '/pages/task/checkItems',
  component: {
    render: function render(createElement) {
      return createElement('Page', {
        props: Object.assign({}, __uniConfig.globalStyle, {
          "navigationStyle": "custom"
        })
      }, [createElement('pages-task-checkItems', {
        slot: 'page'
      })]);
    }
  },
  meta: {
    name: 'pages-task-checkItems',
    isNVue: false,
    maxWidth: 1190,
    pagePath: 'pages/task/checkItems',
    windowTop: 0
  }
}, {
  path: '/pages/task/checkItemsEdit',
  component: {
    render: function render(createElement) {
      return createElement('Page', {
        props: Object.assign({}, __uniConfig.globalStyle, {
          "navigationStyle": "custom"
        })
      }, [createElement('pages-task-checkItemsEdit', {
        slot: 'page'
      })]);
    }
  },
  meta: {
    name: 'pages-task-checkItemsEdit',
    isNVue: false,
    maxWidth: 1190,
    pagePath: 'pages/task/checkItemsEdit',
    windowTop: 0
  }
}, {
  path: '/pages/infor/infor',
  component: {
    render: function render(createElement) {
      return createElement('Page', {
        props: Object.assign({
          isQuit: true,
          isTabBar: true,
          tabBarIndex: 1
        }, __uniConfig.globalStyle, {
          "navigationStyle": "custom",
          "disabledScroll": "true"
        })
      }, [createElement('pages-infor-infor', {
        slot: 'page'
      })]);
    }
  },
  meta: {
    id: 4,
    name: 'pages-infor-infor',
    isNVue: false,
    maxWidth: 1190,
    pagePath: 'pages/infor/infor',
    isQuit: true,
    isTabBar: true,
    tabBarIndex: 1,
    windowTop: 0
  }
}, {
  path: '/pages/mine/updatepwd',
  component: {
    render: function render(createElement) {
      return createElement('Page', {
        props: Object.assign({}, __uniConfig.globalStyle, {
          "navigationBarTitleText": "Change Password",
          "titleNView": {
            "type": "default",
            "backgroundColor": "#ffffff",
            "titleColor": "#000000"
          }
        })
      }, [createElement('pages-mine-updatepwd', {
        slot: 'page'
      })]);
    }
  },
  meta: {
    name: 'pages-mine-updatepwd',
    isNVue: false,
    maxWidth: 1190,
    pagePath: 'pages/mine/updatepwd',
    windowTop: 44
  }
}, {
  path: '/pages/task/detailDescription',
  component: {
    render: function render(createElement) {
      return createElement('Page', {
        props: Object.assign({}, __uniConfig.globalStyle, {
          "navigationBarTitleText": "Detail Testcase Description",
          "titleNView": {
            "type": "default",
            "backgroundColor": "#ffffff"
          }
        })
      }, [createElement('pages-task-detailDescription', {
        slot: 'page'
      })]);
    }
  },
  meta: {
    name: 'pages-task-detailDescription',
    isNVue: false,
    maxWidth: 1190,
    pagePath: 'pages/task/detailDescription',
    windowTop: 44
  }
}, {
  path: '/pages/calendar/calendar',
  component: {
    render: function render(createElement) {
      return createElement('Page', {
        props: Object.assign({}, __uniConfig.globalStyle, {
          "navigationBarTitleText": "工作日历",
          "titleNView": {
            "type": "default",
            "backgroundColor": "#003990"
          }
        })
      }, [createElement('pages-calendar-calendar', {
        slot: 'page'
      })]);
    }
  },
  meta: {
    name: 'pages-calendar-calendar',
    isNVue: false,
    maxWidth: 1190,
    pagePath: 'pages/calendar/calendar',
    windowTop: 44
  }
}, {
  path: '/choose-location',
  component: {
    render: function render(createElement) {
      return createElement('Page', {
        props: {
          navigationStyle: 'custom'
        }
      }, [createElement('system-choose-location', {
        slot: 'page'
      })]);
    }
  },
  meta: {
    name: 'choose-location',
    pagePath: '/choose-location'
  }
}, {
  path: '/open-location',
  component: {
    render: function render(createElement) {
      return createElement('Page', {
        props: {
          navigationStyle: 'custom'
        }
      }, [createElement('system-open-location', {
        slot: 'page'
      })]);
    }
  },
  meta: {
    name: 'open-location',
    pagePath: '/open-location'
  }
}];
__webpack_require__.g.UniApp && new __webpack_require__.g.UniApp();
// EXTERNAL MODULE: ./node_modules/@dcloudio/uni-h5/dist/index.umd.min.js
var index_umd_min = __webpack_require__(30150);
;// ./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader/index.js??clonedRuleSet-42[0].rules[0].use[0]!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-uni-app-loader/filter-modules-template.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-uni-app-loader/page-meta.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/index.js??vue-loader-options!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-scoped-loader/index.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/wrap-loader/index.js??clonedRuleSet-45[0].rules[0].use!./src/App.vue?vue&type=template&id=e858f0a2&
var components;
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('App',{attrs:{"keepAliveInclude":_vm.keepAliveInclude}})}
var recyclableRender = false
var staticRenderFns = []


// EXTERNAL MODULE: ./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vuex3/dist/vuex.common.js
var vuex_common = __webpack_require__(45013);
;// ./src/package.json
var package_namespaceObject = {};
// EXTERNAL MODULE: ./node_modules/core-js/modules/es.array.splice.js
var es_array_splice = __webpack_require__(54554);
// EXTERNAL MODULE: ./node_modules/core-js/modules/es.number.constructor.js
var es_number_constructor = __webpack_require__(2892);
;// ./src/common/util/appUpdate.js


//APP更新

function appUpdate() {
  var _this = this;
  console.log(plus.runtime.version);
  uni.request({
    url: 'http://120.195.219.132:48086/81/update/update.json',
    //检查更新的服务器地址
    data: {
      appid: plus.runtime.appid,
      version: plus.runtime.version,
      imei: plus.device.imei
    },
    success: function success(res) {
      plus.runtime.getProperty(plus.runtime.appid, function (wgtinfo) {
        var client_version = wgtinfo.version;
        var flag_update = client_version.split(".").splice(0, 2).join(".") != res.data.version.split(".").splice(0, 2).join(".");
        var flag_hot = Number(client_version.split(".")[2]) < Number(res.data.version.split(".")[2]) & !flag_update;
        console.log(res.data.version);
        console.log(client_version);
        console.log(flag_update);
        console.log(flag_hot);
        if (flag_update) {
          // 提醒用户更新
          uni.showModal({
            title: '更新提示',
            content: "全新改版",
            success: function success(showResult) {
              if (showResult.confirm) {
                _this.show = true;
                plus.nativeUI.toast("正在准备环境，请稍后!");
                console.log(res.data.url);
                var dtask = plus.downloader.createDownload(res.data.url, {
                  method: 'GET',
                  filename: '_doc/update/'
                }, function (d, status) {
                  if (status == 200) {
                    var path = d.filename; //下载apk
                    plus.runtime.install(path); // 自动安装apk文件
                  } else {
                    plus.nativeUI.alert('版本更新失败:' + status);
                  }
                });
                dtask.start();
                // // 关于进度的获取是使用定时器不断获取已经下载的文件的大小，再对比总大小即可
                // let timer = setInterval(() => {
                // 	let percent = (dtask.downloadedSize / this.fileSize).toFixed(2) // fileSize文件总大小，后端返回的
                // 	_this.percentVal = Math.floor(percent * 100) // 转成整数展示
                // 	if (percent >= 1) { // 注意百分比，及时清除定时器即可
                // 		clearInterval(timer)
                // 	}
                // }, 18)
              }
            }
          });
        } else if (flag_hot) {
          uni.downloadFile({
            url: res.data.wgtUrl,
            success: function success(downloadResult) {
              console.log(downloadResult.tempFilePath);
              if (downloadResult.statusCode === 200) {
                plus.nativeUI.toast("\u6B63\u5728\u70ED\u66F4\u65B0!".concat(res.data.versionCode));
                plus.runtime.install(downloadResult.tempFilePath, {
                  force: false
                }, function () {
                  plus.nativeUI.toast("热更新成功");
                  plus.runtime.restart();
                }, function (e) {
                  console.log(e);
                  plus.nativeUI.toast("\u70ED\u66F4\u65B0\u5931\u8D25:".concat(e.message));
                });
              }
            }
          });
        }
      });
    }
  });
}
;// ./node_modules/babel-loader/lib/index.js??clonedRuleSet-40[0].rules[0].use[0]!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader/index.js??clonedRuleSet-40[0].rules[0].use[1]!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader/index.js??clonedRuleSet-43[0].rules[0].use[0]!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-uni-app-loader/using-components.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/index.js??vue-loader-options!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-scoped-loader/index.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/wrap-loader/index.js??clonedRuleSet-45[0].rules[0].use!./src/App.vue?vue&type=script&lang=js&

//
//
//
//
//
//
//
//




/* harmony default export */ var Appvue_type_script_lang_js_ = ({
  data: function data() {
    return {
      show: false
    };
  },
  onLaunch: function onLaunch() {
    var _this = this;
    uni.getSystemInfo({
      success: function success(e) {
        if (e.platform == 'android') {
          console.log(e);
        }
      }
    });

    // 一键登录预登陆，可以显著提高登录速度
    uni.preLogin({
      provider: 'univerify',
      success: function success(res) {
        // 成功
        _this.setUniverifyErrorMsg();
        console.log("preLogin success: ", res);
      },
      fail: function fail(res) {
        _this.setUniverifyLogin(false);
        _this.setUniverifyErrorMsg(res.errMsg);
        // 失败
        console.log("preLogin fail res: ", res);
      }
    });
  },
  onShow: function onShow() {
    console.log('App Show');
  },
  onHide: function onHide() {
    console.log('App Hide');
  },
  globalData: {
    test: ''
  },
  methods: (0,objectSpread2/* default */.A)({}, (0,vuex_common.mapMutations)(['setUniverifyErrorMsg', 'setUniverifyLogin']))
});
;// ./src/App.vue?vue&type=script&lang=js&
 /* harmony default export */ var src_Appvue_type_script_lang_js_ = (Appvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/@dcloudio/vue-cli-plugin-uni/packages/h5-vue-style-loader/index.js??clonedRuleSet-22[0].rules[0].use[0]!./node_modules/css-loader/dist/cjs.js??clonedRuleSet-22[0].rules[0].use[1]!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader/index.js??clonedRuleSet-22[0].rules[0].use[2]!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-22[0].rules[0].use[3]!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-22[0].rules[0].use[4]!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/sass-loader/dist/cjs.js??clonedRuleSet-22[0].rules[0].use[5]!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader/index.js??clonedRuleSet-22[0].rules[0].use[6]!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/index.js??vue-loader-options!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-scoped-loader/index.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/wrap-loader/index.js??clonedRuleSet-45[0].rules[0].use!./src/App.vue?vue&type=style&index=0&lang=scss&
var Appvue_type_style_index_0_lang_scss_ = __webpack_require__(32621);
;// ./src/App.vue?vue&type=style&index=0&lang=scss&
 /* harmony default export */ var src_Appvue_type_style_index_0_lang_scss_ = ((/* unused pure expression or super */ null && (mod))); 
// EXTERNAL MODULE: ./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(18535);
;// ./src/App.vue

var renderjs
;

;


/* normalize component */

var component = (0,componentNormalizer/* default */.A)(
  src_Appvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  null,
  null,
  null,
  false,
  components,
  renderjs
)

/* harmony default export */ var App = (component.exports);
// EXTERNAL MODULE: ./src/store/index.js + 1 modules
var store = __webpack_require__(53164);
// EXTERNAL MODULE: ./node_modules/uview-ui/index.js + 115 modules
var uview_ui = __webpack_require__(9476);
// EXTERNAL MODULE: ./src/common/service/service.js + 7 modules
var service = __webpack_require__(75678);
// EXTERNAL MODULE: ./src/common/util/util.js
var util = __webpack_require__(63211);
// EXTERNAL MODULE: ./src/common/service/config.service.js
var config_service = __webpack_require__(4571);
;// ./src/main.js











vue_runtime_esm["default"].use(uview_ui/* default */.A);
uni.$u.config.unit = 'rpx';
vue_runtime_esm["default"].config.productionTip = false;

// import "@/static/iconfont/iconfont.css"
// request请求

//解放 request请求

vue_runtime_esm["default"].prototype.$hasPermission = util/* hasPermission */._m;
vue_runtime_esm["default"].prototype.$hasMenu = util/* hasMenu */.as;
vue_runtime_esm["default"].prototype.$http = service/* http */.L;

vue_runtime_esm["default"].prototype.$apiUrl = config_service/* default */.A.apiUrl;
vue_runtime_esm["default"].prototype.$fileUrl = config_service/* default */.A.fileUrl;
vue_runtime_esm["default"].prototype.$store = store/* default */.A;
vue_runtime_esm["default"].prototype.$adpid = "1111111111";
vue_runtime_esm["default"].prototype.$backgroundAudioData = {
  playing: false,
  playTime: 0,
  formatedPlayTime: '00:00:00'
};
App.mpType = 'app';
var app = new vue_runtime_esm["default"]((0,objectSpread2/* default */.A)({
  store: store/* default */.A
}, App));
app.$mount();

/***/ }),

/***/ 36710:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Xh: function() { return /* binding */ ACCESS_TOKEN; },
/* harmony export */   ir: function() { return /* binding */ USER_ID; },
/* harmony export */   nc: function() { return /* binding */ USER_INFO; }
/* harmony export */ });
/* unused harmony export USER_NAME */
var ACCESS_TOKEN = 'Access-Token';
var USER_NAME = 'login_username';
var USER_INFO = 'login_user_info';
var USER_ID = 'login_user_id';
var STORAGE_OPTIONS = {
  namespace: 'pro__',
  // key prefix
  name: 'ls',
  // name variable Vue.[ls] or this.[$ls],
  storage: 'local' // storage name session, local, memory
};
/* unused harmony default export */ var __WEBPACK_DEFAULT_EXPORT__ = ((/* unused pure expression or super */ null && (STORAGE_OPTIONS)));

/***/ }),

/***/ 53164:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  A: function() { return /* binding */ src_store; }
});

// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/esm/defineProperty.js
var defineProperty = __webpack_require__(2775);
// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/esm/regenerator.js + 1 modules
var regenerator = __webpack_require__(95223);
// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js
var asyncToGenerator = __webpack_require__(50575);
// EXTERNAL MODULE: ./node_modules/core-js/modules/es.array.map.js
var es_array_map = __webpack_require__(62062);
// EXTERNAL MODULE: ./node_modules/core-js/modules/es.iterator.constructor.js
var es_iterator_constructor = __webpack_require__(18111);
// EXTERNAL MODULE: ./node_modules/core-js/modules/es.iterator.map.js
var es_iterator_map = __webpack_require__(61701);
// EXTERNAL MODULE: ./node_modules/core-js/modules/es.object.to-string.js
var es_object_to_string = __webpack_require__(26099);
// EXTERNAL MODULE: ./node_modules/@dcloudio/vue-cli-plugin-uni/packages/h5-vue/dist/vue.runtime.esm.js
var vue_runtime_esm = __webpack_require__(85476);
// EXTERNAL MODULE: ./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vuex3/dist/vuex.common.js
var vuex_common = __webpack_require__(45013);
var vuex_common_default = /*#__PURE__*/__webpack_require__.n(vuex_common);
// EXTERNAL MODULE: ./src/api/api.js
var api = __webpack_require__(21629);
// EXTERNAL MODULE: ./src/common/service/config.service.js
var config_service = __webpack_require__(4571);
// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/esm/createClass.js
var createClass = __webpack_require__(51729);
// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/esm/classCallCheck.js
var classCallCheck = __webpack_require__(63065);
// EXTERNAL MODULE: ./node_modules/core-js/modules/es.iterator.for-each.js
var es_iterator_for_each = __webpack_require__(7588);
// EXTERNAL MODULE: ./node_modules/core-js/modules/es.map.js
var es_map = __webpack_require__(36033);
// EXTERNAL MODULE: ./node_modules/core-js/modules/es.string.iterator.js
var es_string_iterator = __webpack_require__(47764);
// EXTERNAL MODULE: ./node_modules/core-js/modules/es.string.starts-with.js
var es_string_starts_with = __webpack_require__(11392);
// EXTERNAL MODULE: ./node_modules/core-js/modules/web.dom-collections.for-each.js
var web_dom_collections_for_each = __webpack_require__(23500);
// EXTERNAL MODULE: ./node_modules/core-js/modules/web.dom-collections.iterator.js
var web_dom_collections_iterator = __webpack_require__(62953);
;// ./src/common/util/MinCache.js










var cacheMap = new Map();
var timeoutDefault = 1200;
function isTimeout(name) {
  var data = cacheMap.get(name);
  if (!data) return true;
  if (data.timeout === 0) return false;
  var currentTime = Date.now();
  var overTime = (currentTime - data.createTime) / 1000;
  if (overTime > data.timeout) {
    cacheMap.delete(name);
    if (name.startsWith('_')) {
      try {
        uni.removeStorageSync(name);
      } catch (e) {
        console.log(e);
      }
    }
    return true;
  }
  return false;
}
var CacheCell = /*#__PURE__*/(0,createClass/* default */.A)(function CacheCell(data, timeout) {
  (0,classCallCheck/* default */.A)(this, CacheCell);
  this.data = data;
  this.timeout = timeout;
  this.createTime = Date.now();
});
var MinCache = /*#__PURE__*/function () {
  function MinCache(timeout) {
    (0,classCallCheck/* default */.A)(this, MinCache);
    try {
      var res = uni.getStorageInfoSync();
      res.keys.forEach(function (name) {
        try {
          var value = uni.getStorageSync(name);
          cacheMap.set(name, value);
        } catch (e) {
          console.log(e);
        }
      });
    } catch (e) {
      console.log(e);
    }
    timeoutDefault = timeout;
  }
  return (0,createClass/* default */.A)(MinCache, [{
    key: "set",
    value: function set(name, data) {
      var timeout = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : timeoutDefault;
      var cachecell = new CacheCell(data, timeout);
      var cache = null;
      if (name.startsWith('_')) {
        try {
          uni.setStorageSync(name, cachecell);
          cache = cacheMap.set(name, cachecell);
        } catch (e) {
          console.log(e);
        }
      } else {
        cache = cacheMap.set(name, cachecell);
      }
      return cache;
    }
  }, {
    key: "get",
    value: function get(name) {
      return isTimeout(name) ? null : cacheMap.get(name).data;
    }
  }, {
    key: "delete",
    value: function _delete(name) {
      var value = false;
      if (name.startsWith('_')) {
        try {
          uni.removeStorageSync(name);
          value = cacheMap.delete(name);
        } catch (e) {
          console.log(e);
        }
      } else {
        value = cacheMap.delete(name);
      }
      return value;
    }
  }, {
    key: "has",
    value: function has(name) {
      return !isTimeout(name);
    }
  }, {
    key: "clear",
    value: function clear() {
      var value = false;
      try {
        uni.clearStorageSync();
        cacheMap.clear();
        value = true;
      } catch (e) {
        console.log(e);
      }
      return value;
    }
  }]);
}();
MinCache.install = function (Vue) {
  var _ref = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {},
    _ref$timeout = _ref.timeout,
    timeout = _ref$timeout === void 0 ? 1200 : _ref$timeout;
  Vue.prototype.$cache = new MinCache(timeout);
};
/* harmony default export */ var util_MinCache = ((/* unused pure expression or super */ null && (MinCache)));
// EXTERNAL MODULE: ./src/common/service/service.js + 7 modules
var service = __webpack_require__(75678);
// EXTERNAL MODULE: ./src/common/util/constants.js
var constants = __webpack_require__(36710);
;// ./src/store/index.js














vue_runtime_esm["default"].use((vuex_common_default()));
var store = new (vuex_common_default()).Store((0,defineProperty/* default */.A)((0,defineProperty/* default */.A)((0,defineProperty/* default */.A)((0,defineProperty/* default */.A)({
  state: {
    messageNum: 0,
    hasLogin: false,
    isUniverifyLogin: false,
    loginProvider: "",
    openid: null,
    testvuex: false,
    colorIndex: 0,
    colorList: ['#FF0000', '#00FF00', '#0000FF'],
    noMatchLeftWindow: true,
    active: 'componentPage',
    leftWinActive: '/pages/component/view/view',
    activeOpen: '',
    menu: [],
    univerifyErrorMsg: '',
    token: '',
    userid: '',
    username: '',
    realname: '',
    userRole: null,
    avatar: '',
    phone: '',
    company: '',
    user: {
      username: uni.getStorageSync(constants/* USER_INFO */.nc).username,
      id: uni.getStorageSync(constants/* USER_INFO */.nc).id,
      realname: uni.getStorageSync(constants/* USER_INFO */.nc).realname
    }
  },
  mutations: {
    setUserRole: function setUserRole(state, role) {
      state.userRole = role;
    },
    submitMessageNum: function submitMessageNum(state, value) {
      state.messageNum = value;
    },
    SET_TOKEN: function SET_TOKEN(state, token) {
      state.token = token;
    },
    SET_NAME: function SET_NAME(state, _ref) {
      var username = _ref.username,
        realname = _ref.realname,
        welcome = _ref.welcome;
      state.username = username;
      state.realname = realname;
      state.welcome = welcome;
    },
    SET_AVATAR: function SET_AVATAR(state, avatar) {
      state.avatar = avatar;
    },
    SET_PHONE: function SET_PHONE(state, phone) {
      state.phone = phone;
    },
    login: function login(state, provider) {
      state.hasLogin = true;
      state.loginProvider = provider;
    },
    logout: function logout(state) {
      state.hasLogin = false;
      state.openid = null;
    },
    setOpenid: function setOpenid(state, openid) {
      state.openid = openid;
    },
    setTestTrue: function setTestTrue(state) {
      state.testvuex = true;
    },
    setTestFalse: function setTestFalse(state) {
      state.testvuex = false;
    },
    setColorIndex: function setColorIndex(state, index) {
      state.colorIndex = index;
    },
    setMatchLeftWindow: function setMatchLeftWindow(state, matchLeftWindow) {
      state.noMatchLeftWindow = !matchLeftWindow;
    },
    setActive: function setActive(state, tabPage) {
      state.active = tabPage;
    },
    setLeftWinActive: function setLeftWinActive(state, leftWinActive) {
      state.leftWinActive = leftWinActive;
    },
    setActiveOpen: function setActiveOpen(state, activeOpen) {
      state.activeOpen = activeOpen;
    },
    setMenu: function setMenu(state, menu) {
      state.menu = menu;
    },
    setUniverifyLogin: function setUniverifyLogin(state, payload) {
      typeof payload !== 'boolean' ? payload = !!payload : '';
      state.isUniverifyLogin = payload;
    },
    setUniverifyErrorMsg: function setUniverifyErrorMsg(state) {
      var payload = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : '';
      state.univerifyErrorMsg = payload;
    }
  },
  getters: {
    currentColor: function currentColor(state) {
      return state.colorList[state.colorIndex];
    }
  }
}, "state", {
  currentColor: function currentColor(state) {
    return state.colorList[state.colorIndex];
  }
}), "actions", {
  fetchUserRole: function fetchUserRole(_ref2, value) {
    var commit = _ref2.commit,
      getters = _ref2.getters;
    service/* http */.L.post("/sys/user/selectUserRoleByUserId", {
      id: value
    }).then(function (res) {
      var roleList = res.data.result.map(function (item) {
        return item.roleCode;
      });
      commit('setUserRole', roleList);
      // if (roleList.includes('admin')) {
      // 	commit('setUserRole', 1);
      // } else {
      // 	commit('setUserRole', 0);
      // }
    });
  },
  changeMessageNum: function changeMessageNum(context, value) {
    context.commit('submitMessageNum', value);
  },
  // 登录
  mLogin: function mLogin(_ref3, userInfo) {
    var commit = _ref3.commit;
    return new Promise(function (resolve, reject) {
      api/* default */.A.login(userInfo).then(function (response) {
        if (response.data.code == 200) {
          var result = response.data.result;
          var _userInfo = result.userInfo;
          uni.setStorageSync(constants/* ACCESS_TOKEN */.Xh, result.token);
          uni.setStorageSync(constants/* USER_INFO */.nc, _userInfo);
          commit('SET_TOKEN', result.token);
          commit('SET_PHONE', _userInfo.phone);
          commit('SET_AVATAR', _userInfo.avatar);
          console.log("aaaaa", _userInfo.phone);
          commit('SET_NAME', {
            username: _userInfo.username,
            realname: _userInfo.realname
          });
          resolve(response);
        } else {
          resolve(response);
        }
      }).catch(function (error) {
        console.log("catch===>response", response);
        reject(error);
      });
    });
  },
  h5Login: function h5Login(params) {
    console.log("h5Login", params);
    return new Promise(function (resolve, reject) {
      api/* default */.A.h5login(params).then(function (response) {
        if (response.data.code == 200) {
          var result = response.data.result;
          var userInfo = result.userInfo;
          uni.setStorageSync(constants/* ACCESS_TOKEN */.Xh, result.token);
          uni.setStorageSync(constants/* USER_INFO */.nc, userInfo);
          uni.setStorageSync(constants/* USER_ID */.ir, res.data.userId);
          commit('SET_TOKEN', result.token);
          commit('SET_PHONE', userInfo.phone);
          commit('SET_AVATAR', userInfo.avatar);
          commit('SET_NAME', {
            username: userInfo.username,
            realname: userInfo.realname
          });
          resolve(response);
        } else {
          resolve(response);
        }
      }).catch(function (error) {
        console.log("catch===>response", response);
        reject(error);
      });
    });
  },
  qyweixinLogin: function qyweixinLogin(_ref4, userInfo) {
    var commit = _ref4.commit;
    console.log("qyweixinLogin", userInfo);
    return new Promise(function (resolve, reject) {
      api/* default */.A.qyweixinLogin(userInfo).then(function (response) {
        if (response.data.code == 200) {
          var result = response.data.result;
          var _userInfo2 = result.userInfo;
          uni.setStorageSync(constants/* ACCESS_TOKEN */.Xh, result.token);
          uni.setStorageSync(constants/* USER_INFO */.nc, _userInfo2);
          commit('SET_TOKEN', result.token);
          commit('SET_PHONE', _userInfo2.phone);
          commit('SET_AVATAR', _userInfo2.avatar);
          commit('SET_NAME', {
            username: _userInfo2.username,
            realname: _userInfo2.realname
          });
          resolve(response);
        } else {
          resolve(response);
        }
      }).catch(function (error) {
        console.log("catch===>response", response);
        reject(error);
      });
    });
  },
  //手机号登录
  PhoneLogin: function PhoneLogin(_ref5, userInfo) {
    var commit = _ref5.commit;
    return new Promise(function (resolve, reject) {
      api/* default */.A.phoneNoLogin(userInfo).then(function (response) {
        if (response.code == '200') {
          var result = response.result;
          var _userInfo3 = result.userInfo;
          commit('SET_TOKEN', result.token);
          commit('SET_PHONE', _userInfo3.phone);
          commit('SET_NAME', {
            username: _userInfo3.username,
            realname: _userInfo3.realname
          });
          commit('SET_AVATAR', _userInfo3.avatar);
          resolve(response);
        } else {
          reject(response);
        }
      }).catch(function (error) {
        reject(error);
      });
    });
  },
  // 登出
  Logout: function Logout(_ref6) {
    var commit = _ref6.commit,
      state = _ref6.state;
    return new Promise(function (resolve) {
      var logoutToken = state.token;
      commit('SET_TOKEN', '');
      uni.removeStorageSync(constants/* ACCESS_TOKEN */.Xh);
      api/* default */.A.logout(logoutToken).then(function () {
        uni.clearStorageSync();
        var pages = getCurrentPages();
        // 获取当前页面的路由信息
        var currentPage = pages[pages.length - 1];
        var currentRoute = currentPage.route;
        var queryParams = currentPage.options;
        uni.showModal({
          showCancel: false,
          confirmText: "Confirm",
          title: "Tip",
          content: 'Token invalid, please log in again!',
          success: function success(res) {
            if (res.confirm) {
              uni.reLaunch({
                url: '/pages/login/login'
              });
            }
          }
        });
        resolve();
      }).catch(function () {
        resolve();
      });
    });
  },
  // lazy loading openid
  getUserOpenId: function () {
    var _getUserOpenId = (0,asyncToGenerator/* default */.A)(/*#__PURE__*/(0,regenerator/* default */.A)().m(function _callee(_ref7) {
      var commit, state;
      return (0,regenerator/* default */.A)().w(function (_context) {
        while (1) switch (_context.n) {
          case 0:
            commit = _ref7.commit, state = _ref7.state;
            _context.n = 1;
            return new Promise(function (resolve, reject) {
              if (state.openid) {
                resolve(state.openid);
              } else {
                uni.login({
                  success: function success(data) {
                    commit('login');
                    setTimeout(function () {
                      //模拟异步请求服务器获取 openid
                      var openid = '123456789';
                      console.log('uni.request mock openid[' + openid + ']');
                      commit('setOpenid', openid);
                      resolve(openid);
                    }, 1000);
                  },
                  fail: function fail(err) {
                    console.log('uni.login 接口调用失败，将无法正常使用开放接口等服务', err);
                    reject(err);
                  }
                });
              }
            });
          case 1:
            return _context.a(2, _context.v);
        }
      }, _callee);
    }));
    function getUserOpenId(_x) {
      return _getUserOpenId.apply(this, arguments);
    }
    return getUserOpenId;
  }(),
  getPhoneNumber: function getPhoneNumber(_ref8, univerifyInfo) {
    var commit = _ref8.commit;
    return new Promise(function (resolve, reject) {
      uni.request({
        url: 'https://97fca9f2-41f6-449f-a35e-3f135d4c3875.bspapp.com/http/univerify-login',
        method: 'POST',
        data: univerifyInfo,
        success: function success(res) {
          var data = res.data;
          if (data.success) {
            resolve(data.phoneNumber);
          } else {
            reject(res);
          }
        },
        fail: function fail(err) {
          reject(res);
        }
      });
    });
  }
}), "getters", {
  token: function token(state) {
    return state.token;
  },
  username: function username(state) {
    state.userid = uni.getStorageSync(constants/* USER_INFO */.nc).username;
    return state.username;
  },
  realname: function realname(state) {
    state.userid = uni.getStorageSync(constants/* USER_INFO */.nc).realname;
    return state.user.realname;
  },
  avatar: function avatar(state) {
    state.userid = uni.getStorageSync(constants/* USER_INFO */.nc).avatar;
    return state.user.avatar;
  },
  userid: function userid(state) {
    state.userid = uni.getStorageSync(constants/* USER_INFO */.nc).id;
    return state.userid;
  },
  phone: function phone(state) {
    state.userid = uni.getStorageSync(constants/* USER_INFO */.nc).phone;
    return state.phone;
  }
  // phone: state => state.phone,
  // company:state => {state.userid=uni.getStorageSync(USER_INFO).companyId; return state.companyId},
}), "state", {
  user: {
    username: uni.getStorageSync(constants/* USER_INFO */.nc).username,
    id: uni.getStorageSync(constants/* USER_INFO */.nc).id,
    realname: uni.getStorageInfoSync(constants/* USER_INFO */.nc).realname
  }
}));
/* harmony default export */ var src_store = (store);

/***/ }),

/***/ 63211:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   _m: function() { return /* binding */ hasPermission; },
/* harmony export */   as: function() { return /* binding */ hasMenu; }
/* harmony export */ });
/* unused harmony exports randomNumber, randomString, randomUUID */
/* harmony import */ var C_Users_A200477427_developers_VWA_MMS_iphone_fore_end_new_node_modules_babel_runtime_helpers_esm_toConsumableArray_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(31969);
/* harmony import */ var core_js_modules_es_array_filter_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(2008);
/* harmony import */ var core_js_modules_es_array_filter_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_filter_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var core_js_modules_es_array_index_of_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(25276);
/* harmony import */ var core_js_modules_es_array_index_of_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_index_of_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var core_js_modules_es_array_map_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(62062);
/* harmony import */ var core_js_modules_es_array_map_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_map_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var core_js_modules_es_array_slice_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(34782);
/* harmony import */ var core_js_modules_es_array_slice_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_slice_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var core_js_modules_es_iterator_constructor_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(18111);
/* harmony import */ var core_js_modules_es_iterator_constructor_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_iterator_constructor_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var core_js_modules_es_iterator_filter_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(22489);
/* harmony import */ var core_js_modules_es_iterator_filter_js__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_iterator_filter_js__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var core_js_modules_es_number_constructor_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(2892);
/* harmony import */ var core_js_modules_es_number_constructor_js__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_number_constructor_js__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(26099);
/* harmony import */ var core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var core_js_modules_es_parse_int_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(58940);
/* harmony import */ var core_js_modules_es_parse_int_js__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_parse_int_js__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var core_js_modules_web_dom_collections_iterator_js__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(62953);
/* harmony import */ var core_js_modules_web_dom_collections_iterator_js__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_web_dom_collections_iterator_js__WEBPACK_IMPORTED_MODULE_10__);











/**
 * 随机生成数字
 *
 * 示例：生成长度为 12 的随机数：randomNumber(12)
 * 示例：生成 3~23 之间的随机数：randomNumber(3, 23)
 *
 * @param1 最小值 | 长度
 * @param2 最大值
 * @return int 生成后的数字
 */
function randomNumber() {
  // 生成 最小值 到 最大值 区间的随机数
  var random = function random(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min);
  };
  if (arguments.length === 1) {
    var _arguments = Array.prototype.slice.call(arguments),
      length = _arguments[0];
    // 生成指定长度的随机数字，首位一定不是 0
    var nums = _toConsumableArray(Array(length).keys()).map(function (i) {
      return i > 0 ? random(0, 9) : random(1, 9);
    });
    return parseInt(nums.join(''));
  } else if (arguments.length >= 2) {
    var _arguments2 = Array.prototype.slice.call(arguments),
      min = _arguments2[0],
      max = _arguments2[1];
    return random(min, max);
  } else {
    return Number.NaN;
  }
}

/**
 * 随机生成字符串
 * @param length 字符串的长度
 * @param chats 可选字符串区间（只会生成传入的字符串中的字符）
 * @return string 生成的字符串
 */
function randomString(length, chats) {
  if (!length) length = 1;
  if (!chats) chats = '0123456789qwertyuioplkjhgfdsazxcvbnm';
  var str = '';
  for (var i = 0; i < length; i++) {
    var num = randomNumber(0, chats.length - 1);
    str += chats[num];
  }
  return str;
}

/**
 * 随机生成uuid
 * @return string 生成的uuid
 */
function randomUUID() {
  var chats = '0123456789abcdef';
  return randomString(32, chats);
}
function hasPermission(key) {
  if (this.$store.state.SITE_CONFIG["permissions"].indexOf(key) <= -1) {
    return false;
  } else {
    return true;
  }
}
function hasMenu(key) {
  var data = window.SITE_CONFIG['menu'].filter(function (item) {
    return item.name === key;
  });
  if (data.length > 0) {
    return true;
  }
  return false;
}

/***/ }),

/***/ 75678:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  L: function() { return /* binding */ http; }
});

// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/esm/regenerator.js + 1 modules
var regenerator = __webpack_require__(95223);
// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js
var asyncToGenerator = __webpack_require__(50575);
// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/esm/objectSpread2.js
var objectSpread2 = __webpack_require__(49943);
// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/esm/classCallCheck.js
var classCallCheck = __webpack_require__(63065);
// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/esm/createClass.js
var createClass = __webpack_require__(51729);
// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/esm/defineProperty.js
var defineProperty = __webpack_require__(2775);
// EXTERNAL MODULE: ./node_modules/core-js/modules/es.object.keys.js
var es_object_keys = __webpack_require__(79432);
// EXTERNAL MODULE: ./node_modules/core-js/modules/es.object.to-string.js
var es_object_to_string = __webpack_require__(26099);
// EXTERNAL MODULE: ./node_modules/core-js/modules/es.error.to-string.js
var es_error_to_string = __webpack_require__(76918);
// EXTERNAL MODULE: ./node_modules/core-js/modules/es.array.index-of.js
var es_array_index_of = __webpack_require__(25276);
// EXTERNAL MODULE: ./node_modules/core-js/modules/es.array.push.js
var es_array_push = __webpack_require__(44114);
// EXTERNAL MODULE: ./node_modules/core-js/modules/es.array.slice.js
var es_array_slice = __webpack_require__(34782);
// EXTERNAL MODULE: ./node_modules/core-js/modules/es.date.to-json.js
var es_date_to_json = __webpack_require__(60739);
// EXTERNAL MODULE: ./node_modules/core-js/modules/es.json.stringify.js
var es_json_stringify = __webpack_require__(33110);
// EXTERNAL MODULE: ./node_modules/core-js/modules/es.regexp.exec.js
var es_regexp_exec = __webpack_require__(27495);
// EXTERNAL MODULE: ./node_modules/core-js/modules/es.regexp.to-string.js
var es_regexp_to_string = __webpack_require__(38781);
// EXTERNAL MODULE: ./node_modules/core-js/modules/es.string.replace.js
var es_string_replace = __webpack_require__(25440);
// EXTERNAL MODULE: ./src/common/luch-request/utils.js
var utils = __webpack_require__(88166);
;// ./src/common/luch-request/helpers/buildURL.js













function encode(val) {
  return encodeURIComponent(val).replace(/%40/gi, '@').replace(/%3A/gi, ':').replace(/%24/g, '$').replace(/%2C/gi, ',').replace(/%20/g, '+').replace(/%5B/gi, '[').replace(/%5D/gi, ']');
}

/**
 * Build a URL by appending params to the end
 *
 * @param {string} url The base of the url (e.g., http://www.google.com)
 * @param {object} [params] The params to be appended
 * @returns {string} The formatted url
 */
function buildURL(url, params) {
  /*eslint no-param-reassign:0*/
  if (!params) {
    return url;
  }
  var serializedParams;
  if (utils/* isURLSearchParams */.OU(params)) {
    serializedParams = params.toString();
  } else {
    var parts = [];
    utils/* forEach */.jJ(params, function serialize(val, key) {
      if (val === null || typeof val === 'undefined') {
        return;
      }
      if (utils/* isArray */.cy(val)) {
        key = key + '[]';
      } else {
        val = [val];
      }
      utils/* forEach */.jJ(val, function parseValue(v) {
        if (utils/* isDate */.$P(v)) {
          v = v.toISOString();
        } else if (utils/* isObject */.Gv(v)) {
          v = JSON.stringify(v);
        }
        parts.push(encode(key) + '=' + encode(v));
      });
    });
    serializedParams = parts.join('&');
  }
  if (serializedParams) {
    var hashmarkIndex = url.indexOf('#');
    if (hashmarkIndex !== -1) {
      url = url.slice(0, hashmarkIndex);
    }
    url += (url.indexOf('?') === -1 ? '?' : '&') + serializedParams;
  }
  return url;
}
// EXTERNAL MODULE: ./node_modules/core-js/modules/es.regexp.test.js
var es_regexp_test = __webpack_require__(90906);
;// ./src/common/luch-request/helpers/isAbsoluteURL.js


/**
 * Determines whether the specified URL is absolute
 *
 * @param {string} url The URL to test
 * @returns {boolean} True if the specified URL is absolute, otherwise false
 */


function isAbsoluteURL(url) {
  // A URL is considered absolute if it begins with "<scheme>://" or "//" (protocol-relative URL).
  // RFC 3986 defines scheme name as a sequence of characters beginning with a letter and followed
  // by any combination of letters, digits, plus, period, or hyphen.
  return /^([a-z][a-z\d+\-.]*:)?\/\//i.test(url);
}
;// ./src/common/luch-request/helpers/combineURLs.js


/**
 * Creates a new URL by combining the specified URLs
 *
 * @param {string} baseURL The base URL
 * @param {string} relativeURL The relative URL
 * @returns {string} The combined URL
 */


function combineURLs(baseURL, relativeURL) {
  return relativeURL ? baseURL.replace(/\/+$/, '') + '/' + relativeURL.replace(/^\/+/, '') : baseURL;
}
;// ./src/common/luch-request/core/buildFullPath.js





/**
 * Creates a new URL by combining the baseURL with the requestedURL,
 * only when the requestedURL is not already an absolute URL.
 * If the requestURL is absolute, this function returns the requestedURL untouched.
 *
 * @param {string} baseURL The base URL
 * @param {string} requestedURL Absolute or relative URL to combine
 * @returns {string} The combined full path
 */
function buildFullPath(baseURL, requestedURL) {
  if (baseURL && !isAbsoluteURL(requestedURL)) {
    return combineURLs(baseURL, requestedURL);
  }
  return requestedURL;
}
;// ./src/common/luch-request/core/Request.js








/**
 * Request 2.0.1
 * @Class Request
 * @description luch-request 2.0.1 http请求插件
 * @Author lu-ch
 * @Date 2020-05-01
 * @Email webwork.s@qq.com
 * http://ext.dcloud.net.cn/plugin?id=392
 * hbuilderx:2.6.15
 */




var Request = /*#__PURE__*/function () {
  function Request() {
    var _this = this;
    (0,classCallCheck/* default */.A)(this, Request);
    (0,defineProperty/* default */.A)(this, "config", {
      baseUrl: '',
      header: {},
      method: 'GET',
      dataType: 'json',
      responseType: 'text',
      custom: {},
      withCredentials: false
    });
    /**
     * @property {Function} request 请求拦截器
     * @property {Function} response 响应拦截器
     * @type {{request: Request.interceptor.request, response: Request.interceptor.response}}
     */
    (0,defineProperty/* default */.A)(this, "interceptor", {
      /**
       * @param {Request~requestCallback} cb - 请求之前拦截,接收一个函数（config, cancel）=> {return config}。第一个参数为全局config,第二个参数为函数，调用则取消本次请求。
       */
      request: function request(cb) {
        if (cb) {
          _this.requestBeforeFun = cb;
        }
      },
      /**
       * @param {Request~responseCallback} cb 响应拦截器，对响应数据做点什么
       * @param {Request~responseErrCallback} ecb 响应拦截器，对响应错误做点什么
       */
      response: function response(cb, ecb) {
        if (cb) {
          _this.requestComFun = cb;
        }
        if (ecb) {
          _this.requestComFail = ecb;
        }
      }
    });
    (0,defineProperty/* default */.A)(this, "requestBeforeFun", function (config) {
      return config;
    });
    (0,defineProperty/* default */.A)(this, "requestComFun", function (response) {
      return response;
    });
    (0,defineProperty/* default */.A)(this, "requestComFail", function (response) {
      return response;
    });
  }
  return (0,createClass/* default */.A)(Request, [{
    key: "validateStatus",
    value:
    /**
     * 自定义验证器，如果返回true 则进入响应拦截器的响应成功函数(resolve)，否则进入响应拦截器的响应错误函数(reject)
     * @param { Number } statusCode - 请求响应体statusCode（只读）
     * @return { Boolean } 如果为true,则 resolve, 否则 reject
     */
    function validateStatus(statusCode) {
      return statusCode === 200;
    }

    /**
     * @Function
     * @param {Request~setConfigCallback} f - 设置全局默认配置
     */
  }, {
    key: "setConfig",
    value: function setConfig(f) {
      this.config = f(this.config);
    }

    /**
     * @Function
     * @param {Object} options - 请求配置项
     * @prop {String} options.url - 请求路径
     * @prop {Object} options.data - 请求参数
     * @prop {Object} [options.responseType = config.responseType] [text|arraybuffer] - 响应的数据类型
     * @prop {Object} [options.dataType = config.dataType] - 如果设为 json，会尝试对返回的数据做一次 JSON.parse
     * @prop {Object} [options.header = config.header] - 请求header
     * @prop {Object} [options.method = config.method] - 请求方法
     * @returns {Promise<unknown>}
     */
  }, {
    key: "request",
    value: (function () {
      var _request = (0,asyncToGenerator/* default */.A)(/*#__PURE__*/(0,regenerator/* default */.A)().m(function _callee() {
        var _this2 = this;
        var options,
          _args = arguments;
        return (0,regenerator/* default */.A)().w(function (_context) {
          while (1) switch (_context.n) {
            case 0:
              options = _args.length > 0 && _args[0] !== undefined ? _args[0] : {};
              return _context.a(2, new Promise(function (resolve, reject) {
                options.baseUrl = _this2.config.baseUrl;
                options.dataType = options.dataType || _this2.config.dataType;
                options.responseType = options.responseType || _this2.config.responseType;
                options.withCredentials = (0,utils/* isBoolean */.Lm)(options.withCredentials) ? options.withCredentials : _this2.config.withCredentials;
                options.url = options.url || '';
                options.data = options.data || {};
                options.params = options.params || {};
                options.header = (0,objectSpread2/* default */.A)((0,objectSpread2/* default */.A)({}, _this2.config.header), options.header || {});
                options.method = options.method || _this2.config.method;
                options.custom = (0,objectSpread2/* default */.A)((0,objectSpread2/* default */.A)({}, _this2.config.custom), options.custom || {});
                options.getTask = options.getTask || _this2.config.getTask;
                var next = true;
                var cancel = function cancel() {
                  var t = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 'handle cancel';
                  var config = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : options;
                  var err = {
                    errMsg: t,
                    config: config
                  };
                  reject(err);
                  next = false;
                };
                var handleRe = (0,objectSpread2/* default */.A)({}, _this2.requestBeforeFun(options, cancel));
                var _config = (0,objectSpread2/* default */.A)({}, handleRe);
                if (!next) return;
                var requestTask = uni.request({
                  url: buildURL(buildFullPath(_config.baseUrl, _config.url), _config.params),
                  data: _config.data,
                  header: _config.header,
                  method: _config.method,
                  dataType: _config.dataType,
                  responseType: _config.responseType,
                  withCredentials: _config.withCredentials,
                  complete: function complete(response) {
                    response.config = handleRe;
                    if (_this2.validateStatus(response.statusCode)) {
                      // 成功
                      response = _this2.requestComFun(response);
                      resolve(response);
                    } else {
                      response = _this2.requestComFail(response);
                      reject(response);
                    }
                  }
                });
                if (handleRe.getTask) {
                  handleRe.getTask(requestTask, handleRe);
                }
              }));
          }
        }, _callee);
      }));
      function request() {
        return _request.apply(this, arguments);
      }
      return request;
    }())
  }, {
    key: "get",
    value: function get(url) {
      var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
      return this.request((0,objectSpread2/* default */.A)({
        url: url,
        method: 'GET'
      }, options));
    }
  }, {
    key: "post",
    value: function post(url, data) {
      var options = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};
      return this.request((0,objectSpread2/* default */.A)({
        url: url,
        data: data,
        method: 'POST'
      }, options));
    }
  }, {
    key: "postFile",
    value: function postFile(url, data) {
      return this.request({
        url: url,
        data: data,
        method: 'POST',
        processData: false,
        headers: {
          'Content-Type': 'multipart/form-data'
        }
      });
    }
  }, {
    key: "put",
    value: function put(url, data) {
      var options = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};
      return this.request((0,objectSpread2/* default */.A)({
        url: url,
        data: data,
        method: 'PUT'
      }, options));
    }
  }, {
    key: "delete",
    value: function _delete(url, data) {
      var options = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};
      return this.request((0,objectSpread2/* default */.A)({
        url: url,
        data: data,
        method: 'DELETE'
      }, options));
    }
  }, {
    key: "connect",
    value: function connect(url, data) {
      var options = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};
      return this.request((0,objectSpread2/* default */.A)({
        url: url,
        data: data,
        method: 'CONNECT'
      }, options));
    }
  }, {
    key: "head",
    value: function head(url, data) {
      var options = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};
      return this.request((0,objectSpread2/* default */.A)({
        url: url,
        data: data,
        method: 'HEAD'
      }, options));
    }
  }, {
    key: "options",
    value: function options(url, data) {
      var _options = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};
      return this.request((0,objectSpread2/* default */.A)({
        url: url,
        data: data,
        method: 'OPTIONS'
      }, _options));
    }
  }, {
    key: "trace",
    value: function trace(url, data) {
      var options = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};
      return this.request((0,objectSpread2/* default */.A)({
        url: url,
        data: data,
        method: 'TRACE'
      }, options));
    }
  }, {
    key: "upload",
    value: function upload(url, _ref) {
      var _this3 = this;
      var files = _ref.files,
        filePath = _ref.filePath,
        name = _ref.name,
        file = _ref.file,
        _ref$header = _ref.header,
        header = _ref$header === void 0 ? {} : _ref$header,
        _ref$formData = _ref.formData,
        formData = _ref$formData === void 0 ? {} : _ref$formData,
        _ref$custom = _ref.custom,
        custom = _ref$custom === void 0 ? {} : _ref$custom,
        _ref$params = _ref.params,
        params = _ref$params === void 0 ? {} : _ref$params,
        getTask = _ref.getTask;
      return new Promise(function (resolve, reject) {
        var next = true;
        var globalHeader = (0,objectSpread2/* default */.A)({}, _this3.config.header);
        delete globalHeader['content-type'];
        delete globalHeader['Content-Type'];
        var pubConfig = {
          baseUrl: _this3.config.baseUrl,
          url: url,
          filePath: filePath,
          method: 'UPLOAD',
          name: name,
          header: (0,objectSpread2/* default */.A)((0,objectSpread2/* default */.A)({}, globalHeader), header),
          formData: formData,
          params: params,
          custom: (0,objectSpread2/* default */.A)((0,objectSpread2/* default */.A)({}, _this3.config.custom), custom),
          getTask: getTask || _this3.config.getTask
        };
        if (files) {
          pubConfig.files = files;
        }
        if (file) {
          pubConfig.file = file;
        }
        var cancel = function cancel() {
          var t = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 'handle cancel';
          var config = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : pubConfig;
          var err = {
            errMsg: t,
            config: config
          };
          reject(err);
          next = false;
        };
        var handleRe = (0,objectSpread2/* default */.A)({}, _this3.requestBeforeFun(pubConfig, cancel));
        var _config = {
          url: buildURL(buildFullPath(handleRe.baseUrl, handleRe.url), handleRe.params),
          filePath: handleRe.filePath,
          name: handleRe.name,
          header: handleRe.header,
          formData: handleRe.formData,
          complete: function complete(response) {
            response.config = handleRe;
            try {
              // 对可能字符串不是json 的情况容错
              if (typeof response.data === 'string') {
                response.data = JSON.parse(response.data);
              }
              // eslint-disable-next-line no-empty
            } catch (e) {}
            if (_this3.validateStatus(response.statusCode)) {
              // 成功
              response = _this3.requestComFun(response);
              resolve(response);
            } else {
              response = _this3.requestComFail(response);
              reject(response);
            }
          }
        };
        if (handleRe.files) {
          _config.files = handleRe.files;
        }
        if (handleRe.file) {
          _config.file = handleRe.file;
        }
        if (!next) return;
        var requestTask = uni.uploadFile(_config);
        if (handleRe.getTask) {
          handleRe.getTask(requestTask, handleRe);
        }
      });
    }
  }, {
    key: "download",
    value: function download(url) {
      var _this4 = this;
      var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
      return new Promise(function (resolve, reject) {
        var next = true;
        var pubConfig = {
          baseUrl: _this4.config.baseUrl,
          url: url,
          method: 'DOWNLOAD',
          header: (0,objectSpread2/* default */.A)((0,objectSpread2/* default */.A)({}, _this4.config.header), options.header || {}),
          params: options.params || {},
          custom: (0,objectSpread2/* default */.A)((0,objectSpread2/* default */.A)({}, _this4.config.custom), options.custom || {}),
          getTask: options.getTask || _this4.config.getTask
        };
        var cancel = function cancel() {
          var t = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 'handle cancel';
          var config = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : pubConfig;
          var err = {
            errMsg: t,
            config: config
          };
          reject(err);
          next = false;
        };
        var handleRe = (0,objectSpread2/* default */.A)({}, _this4.requestBeforeFun(pubConfig, cancel));
        if (!next) return;
        var requestTask = uni.downloadFile({
          url: buildURL(buildFullPath(handleRe.baseUrl, handleRe.url), handleRe.params),
          header: handleRe.header,
          complete: function complete(response) {
            response.config = handleRe;
            if (_this4.validateStatus(response.statusCode)) {
              // 成功
              response = _this4.requestComFun(response);
              resolve(response);
            } else {
              response = _this4.requestComFail(response);
              reject(response);
            }
          }
        });
        if (handleRe.getTask) {
          handleRe.getTask(requestTask, handleRe);
        }
      });
    }
  }]);
}();
/**
 * setConfig回调
 * @return {Object} - 返回操作后的config
 * @callback Request~setConfigCallback
 * @param {Object} config - 全局默认config
 */
/**
 * 请求拦截器回调
 * @return {Object} - 返回操作后的config
 * @callback Request~requestCallback
 * @param {Object} config - 全局config
 * @param {Function} [cancel] - 取消请求钩子，调用会取消本次请求
 */
/**
 * 响应拦截器回调
 * @return {Object} - 返回操作后的response
 * @callback Request~responseCallback
 * @param {Object} response - 请求结果 response
 */
/**
 * 响应错误拦截器回调
 * @return {Object} - 返回操作后的response
 * @callback Request~responseErrCallback
 * @param {Object} response - 请求结果 response
 */

;// ./src/common/luch-request/index.js

/* harmony default export */ var luch_request = (Request);
// EXTERNAL MODULE: ./src/common/util/constants.js
var constants = __webpack_require__(36710);
// EXTERNAL MODULE: ./src/common/service/config.service.js
var config_service = __webpack_require__(4571);
;// ./src/common/util/tip.js



/**
 * 提示与加载工具类
 */
var Tips = /*#__PURE__*/function () {
  function Tips() {
    (0,classCallCheck/* default */.A)(this, Tips);
    this.isLoading = false;
  }
  /**
   * 弹出提示框
   */
  return (0,createClass/* default */.A)(Tips, null, [{
    key: "success",
    value: function success(title) {
      var duration = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 1000;
      setTimeout(function () {
        uni.showToast({
          title: title,
          icon: "success",
          mask: true,
          duration: duration
        });
      }, 300);
      if (duration > 0) {
        return new Promise(function (resolve, reject) {
          setTimeout(function () {
            resolve();
          }, duration);
        });
      }
    }

    /**
     * 弹出确认窗口
     */
  }, {
    key: "confirm",
    value: function confirm(text, showCancel) {
      var payload = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};
      var title = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : "提示";
      return new Promise(function (resolve, reject) {
        uni.showModal({
          title: title,
          content: text,
          showCancel: showCancel,
          success: function success(res) {
            if (res.confirm) {
              resolve(payload);
            } else if (res.cancel) {
              reject(payload);
            }
          },
          fail: function fail(res) {
            reject(payload);
          }
        });
      });
    }
  }, {
    key: "toast",
    value: function toast(title, onHide) {
      var icon = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : "none";
      setTimeout(function () {
        uni.showToast({
          title: title,
          icon: icon,
          mask: true,
          duration: 1000
        });
      }, 300);

      // 隐藏结束回调
      if (onHide) {
        setTimeout(function () {
          onHide();
        }, 500);
      }
    }

    /**
     * 警告框
     */
  }, {
    key: "alert",
    value: function alert(title) {
      // uni.showToast({
      //   title: title,
      //   image: "../../static/alert.png",
      //   mask: true,
      //   duration: 1500
      // });
    }

    /**
     * 错误框
     */
  }, {
    key: "error",
    value: function error(title, onHide) {
      uni.showToast({
        title: title,
        image: "../../static/error.png",
        mask: true,
        duration: 1500
      });
      // 隐藏结束回调
      if (onHide) {
        setTimeout(function () {
          onHide();
        }, 500);
      }
    }

    /**
     * 弹出加载提示
     */
  }, {
    key: "loading",
    value: function loading() {
      var title = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : "加载中";
      if (Tips.isLoading) {
        return;
      }
      Tips.isLoading = true;
      uni.showLoading({
        title: title,
        mask: true
      });
    }

    /**
     * 加载完毕
     */
  }, {
    key: "loaded",
    value: function loaded() {
      if (Tips.isLoading) {
        Tips.isLoading = false;
        uni.hideLoading();
      }
    }
  }]);
}();
/**
 * 静态变量，是否加载中
 */

Tips.isLoading = false;
// EXTERNAL MODULE: ./src/store/index.js + 1 modules
var store = __webpack_require__(53164);
;// ./src/common/service/service.js








var apiUrl = config_service/* default */.A.apiUrl;
var fileUrl = config_service/* default */.A.fileUrl;
var getTokenStorage = function getTokenStorage() {
  var token = '';
  try {
    token = uni.getStorageSync(constants/* ACCESS_TOKEN */.Xh);
    // console.log("token",token)
    // token = '10003'
    // window.sessionStorage.setItem('token', token)
  } catch (e) {
    //TODO handle the exception
    console.log("getTokenStorage", token);
    console.log("getTokenStorage", e.message);
  }
  return token;
};
var http = new luch_request();
http.setConfig(function (config) {
  /* 设置全局配置 */
  config.baseUrl = apiUrl; /* 根域名不同 */
  config.fileUrl = fileUrl;
  config.header = (0,objectSpread2/* default */.A)({}, config.header);
  return config;
});

/**
 * 自定义验证器，如果返回true 则进入响应拦截器的响应成功函数(resolve)，否则进入响应拦截器的响应错误函数(reject)
 * @param { Number } statusCode - 请求响应体statusCode（只读）
 * @return { Boolean } 如果为true,则 resolve, 否则 reject
 */
// 有默认，非必写
http.validateStatus = function (statusCode) {
  return statusCode === 200;
};
http.interceptor.request(function (config, cancel) {
  /* 请求之前拦截器 */
  // tip.alert(config.baseUrl)
  // 显示loading
  uni.showLoading({
    title: "加载中",
    mask: true // 显示透明蒙层，防止触摸穿透
  });
  config.header = (0,objectSpread2/* default */.A)((0,objectSpread2/* default */.A)({}, config.header), {}, {
    'X-Access-Token': getTokenStorage()
  });
  /*
  if (!token) { // 如果token不存在，调用cancel 会取消本次请求，但是该函数的catch() 仍会执行
    cancel('token 不存在') // 接收一个参数，会传给catch((err) => {}) err.errMsg === 'token 不存在'
  }
  */
  return config;
});

// 必须使用异步函数，注意
http.interceptor.response(/*#__PURE__*/function () {
  var _ref = (0,asyncToGenerator/* default */.A)(/*#__PURE__*/(0,regenerator/* default */.A)().m(function _callee(response) {
    return (0,regenerator/* default */.A)().w(function (_context) {
      while (1) switch (_context.n) {
        case 0:
          /* 请求之后拦截器 */
          uni.hideLoading(); // 关闭loading
          return _context.a(2, response);
      }
    }, _callee);
  }));
  return function (_x) {
    return _ref.apply(this, arguments);
  };
}(), function (response) {
  // 请求错误做点什么
  console.log("请求错误做点什么", response);
  if (response) {
    var data = response.data;
    var token = uni.getStorageSync(constants/* ACCESS_TOKEN */.Xh);
    console.log("------异常响应------", token);
    console.log("------异常响应------", data);
    console.log("------异常响应------", data.status);
    switch (response.statusCode) {
      case 403:
        Tips.error('Access denied');
        break;
      case 503:
        break;
      case 500:
        store/* default */.A.dispatch('Logout').then(function () {
          // clearTimeout(timeout)
          // window.location.reload()
          // tip.alert('登录已过期')
        });
        break;
      case 404:
        break;
      case 504:
        break;
      case 401:
        if (token) {
          /* store.dispatch('Logout').then(() => {
             setTimeout(() => {
               window.location.reload()
             }, 1500)
           }) */
        }
        break;
      default:
        Tips.error({
          duration: 0,
          forbidClick: true,
          message: data.message
        });
        break;
    }
  }
  uni.hideLoading(); // 关闭loading

  return response;
});


/***/ }),

/***/ 77461:
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

"use strict";
module.exports = __webpack_require__.p + "static/fonts/VWAGTheSans_Regular.ttf";

/***/ }),

/***/ 88166:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   $P: function() { return /* binding */ isDate; },
/* harmony export */   Gv: function() { return /* binding */ isObject; },
/* harmony export */   Lm: function() { return /* binding */ isBoolean; },
/* harmony export */   OU: function() { return /* binding */ isURLSearchParams; },
/* harmony export */   cy: function() { return /* binding */ isArray; },
/* harmony export */   jJ: function() { return /* binding */ forEach; }
/* harmony export */ });
/* harmony import */ var C_Users_A200477427_developers_VWA_MMS_iphone_fore_end_new_node_modules_babel_runtime_helpers_esm_typeof_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(65376);
/* harmony import */ var core_js_modules_es_error_to_string_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(76918);
/* harmony import */ var core_js_modules_es_error_to_string_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_error_to_string_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(26099);
/* harmony import */ var core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var core_js_modules_es_regexp_to_string_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(38781);
/* harmony import */ var core_js_modules_es_regexp_to_string_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_regexp_to_string_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var core_js_modules_es_string_iterator_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(47764);
/* harmony import */ var core_js_modules_es_string_iterator_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_string_iterator_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var core_js_modules_web_dom_collections_iterator_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(62953);
/* harmony import */ var core_js_modules_web_dom_collections_iterator_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_web_dom_collections_iterator_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var core_js_modules_web_url_search_params_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(48408);
/* harmony import */ var core_js_modules_web_url_search_params_js__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_web_url_search_params_js__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var core_js_modules_web_url_search_params_delete_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(14603);
/* harmony import */ var core_js_modules_web_url_search_params_delete_js__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_web_url_search_params_delete_js__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var core_js_modules_web_url_search_params_has_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(47566);
/* harmony import */ var core_js_modules_web_url_search_params_has_js__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_web_url_search_params_has_js__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var core_js_modules_web_url_search_params_size_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(98721);
/* harmony import */ var core_js_modules_web_url_search_params_size_js__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_web_url_search_params_size_js__WEBPACK_IMPORTED_MODULE_9__);


// utils is a library of generic helper functions non-specific to axios










var toString = Object.prototype.toString;

/**
 * Determine if a value is an Array
 *
 * @param {Object} val The value to test
 * @returns {boolean} True if value is an Array, otherwise false
 */
function isArray(val) {
  return toString.call(val) === '[object Array]';
}

/**
 * Determine if a value is an Object
 *
 * @param {Object} val The value to test
 * @returns {boolean} True if value is an Object, otherwise false
 */
function isObject(val) {
  return val !== null && (0,C_Users_A200477427_developers_VWA_MMS_iphone_fore_end_new_node_modules_babel_runtime_helpers_esm_typeof_js__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .A)(val) === 'object';
}

/**
 * Determine if a value is a Date
 *
 * @param {Object} val The value to test
 * @returns {boolean} True if value is a Date, otherwise false
 */
function isDate(val) {
  return toString.call(val) === '[object Date]';
}

/**
 * Determine if a value is a URLSearchParams object
 *
 * @param {Object} val The value to test
 * @returns {boolean} True if value is a URLSearchParams object, otherwise false
 */
function isURLSearchParams(val) {
  return typeof URLSearchParams !== 'undefined' && val instanceof URLSearchParams;
}

/**
 * Iterate over an Array or an Object invoking a function for each item.
 *
 * If `obj` is an Array callback will be called passing
 * the value, index, and complete array for each item.
 *
 * If 'obj' is an Object callback will be called passing
 * the value, key, and complete object for each property.
 *
 * @param {Object|Array} obj The object to iterate
 * @param {Function} fn The callback to invoke for each item
 */
function forEach(obj, fn) {
  // Don't bother if no value provided
  if (obj === null || typeof obj === 'undefined') {
    return;
  }

  // Force an array if not already something iterable
  if ((0,C_Users_A200477427_developers_VWA_MMS_iphone_fore_end_new_node_modules_babel_runtime_helpers_esm_typeof_js__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .A)(obj) !== 'object') {
    /*eslint no-param-reassign:0*/
    obj = [obj];
  }
  if (isArray(obj)) {
    // Iterate over array values
    for (var i = 0, l = obj.length; i < l; i++) {
      fn.call(null, obj[i], i, obj);
    }
  } else {
    // Iterate over object keys
    for (var key in obj) {
      if (Object.prototype.hasOwnProperty.call(obj, key)) {
        fn.call(null, obj[key], key, obj);
      }
    }
  }
}

/**
 * 是否为boolean 值
 * @param val
 * @returns {boolean}
 */
function isBoolean(val) {
  return typeof val === 'boolean';
}

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			id: moduleId,
/******/ 			loaded: false,
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = __webpack_modules__;
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/amd define */
/******/ 	!function() {
/******/ 		__webpack_require__.amdD = function () {
/******/ 			throw new Error('define cannot be used indirect');
/******/ 		};
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/chunk loaded */
/******/ 	!function() {
/******/ 		var deferred = [];
/******/ 		__webpack_require__.O = function(result, chunkIds, fn, priority) {
/******/ 			if(chunkIds) {
/******/ 				priority = priority || 0;
/******/ 				for(var i = deferred.length; i > 0 && deferred[i - 1][2] > priority; i--) deferred[i] = deferred[i - 1];
/******/ 				deferred[i] = [chunkIds, fn, priority];
/******/ 				return;
/******/ 			}
/******/ 			var notFulfilled = Infinity;
/******/ 			for (var i = 0; i < deferred.length; i++) {
/******/ 				var chunkIds = deferred[i][0];
/******/ 				var fn = deferred[i][1];
/******/ 				var priority = deferred[i][2];
/******/ 				var fulfilled = true;
/******/ 				for (var j = 0; j < chunkIds.length; j++) {
/******/ 					if ((priority & 1 === 0 || notFulfilled >= priority) && Object.keys(__webpack_require__.O).every(function(key) { return __webpack_require__.O[key](chunkIds[j]); })) {
/******/ 						chunkIds.splice(j--, 1);
/******/ 					} else {
/******/ 						fulfilled = false;
/******/ 						if(priority < notFulfilled) notFulfilled = priority;
/******/ 					}
/******/ 				}
/******/ 				if(fulfilled) {
/******/ 					deferred.splice(i--, 1)
/******/ 					var r = fn();
/******/ 					if (r !== undefined) result = r;
/******/ 				}
/******/ 			}
/******/ 			return result;
/******/ 		};
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	!function() {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = function(module) {
/******/ 			var getter = module && module.__esModule ?
/******/ 				function() { return module['default']; } :
/******/ 				function() { return module; };
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	!function() {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = function(exports, definition) {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/ensure chunk */
/******/ 	!function() {
/******/ 		__webpack_require__.f = {};
/******/ 		// This file contains only the entry chunk.
/******/ 		// The chunk loading function for additional chunks
/******/ 		__webpack_require__.e = function(chunkId) {
/******/ 			return Promise.all(Object.keys(__webpack_require__.f).reduce(function(promises, key) {
/******/ 				__webpack_require__.f[key](chunkId, promises);
/******/ 				return promises;
/******/ 			}, []));
/******/ 		};
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/get javascript chunk filename */
/******/ 	!function() {
/******/ 		// This function allow to reference async chunks
/******/ 		__webpack_require__.u = function(chunkId) {
/******/ 			// return url for filenames based on template
/******/ 			return "static/js/" + ({"22":"pages-task-fillInInformation","25":"pages-mine-mine","135":"pages-calendar-calendar","214":"pages-task-checkItemsEdit","244":"pages-login-error","329":"pages-index-index","330":"pages-task-checkItems","429":"pages-infor-infor","581":"pages-task-detailDescription","656":"pages-mine-updatepwd","767":"pages-task-problemList","949":"pages-login-login"}[chunkId] || chunkId) + "." + {"22":"e1faec0a","25":"5b6d3b9c","135":"5a3312d0","214":"50e8262a","244":"b27b34b1","329":"cca049bf","330":"faed950b","425":"d29f39e7","429":"42638f6e","435":"ce7f18b4","581":"f4667ddf","593":"dda7b869","638":"b0daf227","656":"11eed4a1","767":"d51873eb","791":"e7543d9e","841":"dd555047","872":"ba55ef8d","949":"af48cacb","972":"f25c18a1"}[chunkId] + ".js";
/******/ 		};
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/global */
/******/ 	!function() {
/******/ 		__webpack_require__.g = (function() {
/******/ 			if (typeof globalThis === 'object') return globalThis;
/******/ 			try {
/******/ 				return this || new Function('return this')();
/******/ 			} catch (e) {
/******/ 				if (typeof window === 'object') return window;
/******/ 			}
/******/ 		})();
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	!function() {
/******/ 		__webpack_require__.o = function(obj, prop) { return Object.prototype.hasOwnProperty.call(obj, prop); }
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/load script */
/******/ 	!function() {
/******/ 		var inProgress = {};
/******/ 		var dataWebpackPrefix = "hello-uniapp:";
/******/ 		// loadScript function to load a script via script tag
/******/ 		__webpack_require__.l = function(url, done, key, chunkId) {
/******/ 			if(inProgress[url]) { inProgress[url].push(done); return; }
/******/ 			var script, needAttach;
/******/ 			if(key !== undefined) {
/******/ 				var scripts = document.getElementsByTagName("script");
/******/ 				for(var i = 0; i < scripts.length; i++) {
/******/ 					var s = scripts[i];
/******/ 					if(s.getAttribute("src") == url || s.getAttribute("data-webpack") == dataWebpackPrefix + key) { script = s; break; }
/******/ 				}
/******/ 			}
/******/ 			if(!script) {
/******/ 				needAttach = true;
/******/ 				script = document.createElement('script');
/******/ 		
/******/ 				script.charset = 'utf-8';
/******/ 				if (__webpack_require__.nc) {
/******/ 					script.setAttribute("nonce", __webpack_require__.nc);
/******/ 				}
/******/ 				script.setAttribute("data-webpack", dataWebpackPrefix + key);
/******/ 		
/******/ 				script.src = url;
/******/ 			}
/******/ 			inProgress[url] = [done];
/******/ 			var onScriptComplete = function(prev, event) {
/******/ 				// avoid mem leaks in IE.
/******/ 				script.onerror = script.onload = null;
/******/ 				clearTimeout(timeout);
/******/ 				var doneFns = inProgress[url];
/******/ 				delete inProgress[url];
/******/ 				script.parentNode && script.parentNode.removeChild(script);
/******/ 				doneFns && doneFns.forEach(function(fn) { return fn(event); });
/******/ 				if(prev) return prev(event);
/******/ 			}
/******/ 			var timeout = setTimeout(onScriptComplete.bind(null, undefined, { type: 'timeout', target: script }), 120000);
/******/ 			script.onerror = onScriptComplete.bind(null, script.onerror);
/******/ 			script.onload = onScriptComplete.bind(null, script.onload);
/******/ 			needAttach && document.head.appendChild(script);
/******/ 		};
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	!function() {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = function(exports) {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/node module decorator */
/******/ 	!function() {
/******/ 		__webpack_require__.nmd = function(module) {
/******/ 			module.paths = [];
/******/ 			if (!module.children) module.children = [];
/******/ 			return module;
/******/ 		};
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/publicPath */
/******/ 	!function() {
/******/ 		__webpack_require__.p = "./";
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/jsonp chunk loading */
/******/ 	!function() {
/******/ 		__webpack_require__.b = (typeof document !== 'undefined' && document.baseURI) || self.location.href;
/******/ 		
/******/ 		// object to store loaded and loading chunks
/******/ 		// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 		// [resolve, reject, Promise] = chunk loading, 0 = chunk loaded
/******/ 		var installedChunks = {
/******/ 			57: 0
/******/ 		};
/******/ 		
/******/ 		__webpack_require__.f.j = function(chunkId, promises) {
/******/ 				// JSONP chunk loading for javascript
/******/ 				var installedChunkData = __webpack_require__.o(installedChunks, chunkId) ? installedChunks[chunkId] : undefined;
/******/ 				if(installedChunkData !== 0) { // 0 means "already installed".
/******/ 		
/******/ 					// a Promise means "currently loading".
/******/ 					if(installedChunkData) {
/******/ 						promises.push(installedChunkData[2]);
/******/ 					} else {
/******/ 						if(true) { // all chunks have JS
/******/ 							// setup Promise in chunk cache
/******/ 							var promise = new Promise(function(resolve, reject) { installedChunkData = installedChunks[chunkId] = [resolve, reject]; });
/******/ 							promises.push(installedChunkData[2] = promise);
/******/ 		
/******/ 							// start chunk loading
/******/ 							var url = __webpack_require__.p + __webpack_require__.u(chunkId);
/******/ 							// create error before stack unwound to get useful stacktrace later
/******/ 							var error = new Error();
/******/ 							var loadingEnded = function(event) {
/******/ 								if(__webpack_require__.o(installedChunks, chunkId)) {
/******/ 									installedChunkData = installedChunks[chunkId];
/******/ 									if(installedChunkData !== 0) installedChunks[chunkId] = undefined;
/******/ 									if(installedChunkData) {
/******/ 										var errorType = event && (event.type === 'load' ? 'missing' : event.type);
/******/ 										var realSrc = event && event.target && event.target.src;
/******/ 										error.message = 'Loading chunk ' + chunkId + ' failed.\n(' + errorType + ': ' + realSrc + ')';
/******/ 										error.name = 'ChunkLoadError';
/******/ 										error.type = errorType;
/******/ 										error.request = realSrc;
/******/ 										installedChunkData[1](error);
/******/ 									}
/******/ 								}
/******/ 							};
/******/ 							__webpack_require__.l(url, loadingEnded, "chunk-" + chunkId, chunkId);
/******/ 						}
/******/ 					}
/******/ 				}
/******/ 		};
/******/ 		
/******/ 		// no prefetching
/******/ 		
/******/ 		// no preloaded
/******/ 		
/******/ 		// no HMR
/******/ 		
/******/ 		// no HMR manifest
/******/ 		
/******/ 		__webpack_require__.O.j = function(chunkId) { return installedChunks[chunkId] === 0; };
/******/ 		
/******/ 		// install a JSONP callback for chunk loading
/******/ 		var webpackJsonpCallback = function(parentChunkLoadingFunction, data) {
/******/ 			var chunkIds = data[0];
/******/ 			var moreModules = data[1];
/******/ 			var runtime = data[2];
/******/ 			// add "moreModules" to the modules object,
/******/ 			// then flag all "chunkIds" as loaded and fire callback
/******/ 			var moduleId, chunkId, i = 0;
/******/ 			if(chunkIds.some(function(id) { return installedChunks[id] !== 0; })) {
/******/ 				for(moduleId in moreModules) {
/******/ 					if(__webpack_require__.o(moreModules, moduleId)) {
/******/ 						__webpack_require__.m[moduleId] = moreModules[moduleId];
/******/ 					}
/******/ 				}
/******/ 				if(runtime) var result = runtime(__webpack_require__);
/******/ 			}
/******/ 			if(parentChunkLoadingFunction) parentChunkLoadingFunction(data);
/******/ 			for(;i < chunkIds.length; i++) {
/******/ 				chunkId = chunkIds[i];
/******/ 				if(__webpack_require__.o(installedChunks, chunkId) && installedChunks[chunkId]) {
/******/ 					installedChunks[chunkId][0]();
/******/ 				}
/******/ 				installedChunks[chunkId] = 0;
/******/ 			}
/******/ 			return __webpack_require__.O(result);
/******/ 		}
/******/ 		
/******/ 		var chunkLoadingGlobal = self["webpackChunkhello_uniapp"] = self["webpackChunkhello_uniapp"] || [];
/******/ 		chunkLoadingGlobal.forEach(webpackJsonpCallback.bind(null, 0));
/******/ 		chunkLoadingGlobal.push = webpackJsonpCallback.bind(null, chunkLoadingGlobal.push.bind(chunkLoadingGlobal));
/******/ 	}();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module depends on other loaded chunks and execution need to be delayed
/******/ 	var __webpack_exports__ = __webpack_require__.O(undefined, [504], function() { return __webpack_require__(36649); })
/******/ 	__webpack_exports__ = __webpack_require__.O(__webpack_exports__);
/******/ 	
/******/ })()
;
//# sourceMappingURL=index.41fc9b27.js.map