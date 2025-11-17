/**
 * 项目 API 路径定义（JS + JSDoc）。
 * 将 uni-test-case 中使用到的接口路径进行归纳与分组。
 * 使用方式：`import { APIPATHS } from './api'`
 */

/**
 * @typedef {Object} APIPaths
 * @property {Object.<string,string>} sys 系统模块（/sys/**）
 * @property {Object.<string,string>} testService 业务模块（/testService/**）
 */

/**
 * @type {APIPaths}
 */
export const APIPATHS = {
  sys: {
    // 认证
    login: '/sys/login',
    qyweixinLogin: '/sys/qyweixinLogin',
    phoneLogin: '/sys/phoneLogin',
    logout: '/sys/logout',
    h5Login: '/sys/h5/login',
    // 用户
    selectUserRoleByUserId: '/sys/user/selectUserRoleByUserId',
    changePassword: '/sys/user/changeMyPassword',
    updateAvatar: '/sys/user/updateAvatar',
    appSelectUserRoleByUsername: '/sys/user/appSelectUserRoleByUsername',
    queryEmail: '/sys/user/queryEmail',
    sendEmail: '/sys/user/sendEmail',
    forgetPassword: '/sys/user/forgetPassword',
    newList: '/sys/user/newlist',
    // 短信
    sendSms: '/sys/sms/sendSms',
    // 系统与通用
    dictItemList: '/sys/dictItem/list',
    announcementEdit: '/sys/sysAnnouncementSend/editByAnntIdAndUserId',
    announcementReadAll: '/sys/sysAnnouncementSend/readAll',
    upload: '/sys/common/upload',
    downloadFile: '/sys/common/downloadFile',
    static: '/sys/common/static',
  },
  testService: {
    // 组与内容
    qaTqsGroup_list: '/testService/qaTqsGroup/list',
    qaTqsGroupContent_list: '/testService/qaTqsGroupContent/list',
    // 测试日历
    qaTestCalendar_appTestCalendarList: '/testService/qaTestCalendar/appTestCalendarList',
    qaTestCalendar_taskCollection: '/testService/qaTestCalendar/taskCollection',
    qaTestCalendar_appSelectTqsTester: '/testService/qaTestCalendar/appSelectTqsTester',
    qaTestCalendar_appSelectIsTester: '/testService/qaTestCalendar/appSelectIsTester',
    qaTestCalendar_appReceive: '/testService/qaTestCalendar/appReceive',
    qaTestCalendar_appAssign: '/testService/qaTestCalendar/appAssign',
    qaTestCalendar_appLeaderCancel: '/testService/qaTestCalendar/appLeaderCancel',
    qaTestCalendar_appLeaderAdjust: '/testService/qaTestCalendar/appLeaderAdjust',
    qaTestCalendar_appTesterForward: '/testService/qaTestCalendar/appTesterForward',
    qaTestCalendar_appScanGetTask: '/testService/qaTestCalendar/appScanGetTask',
    qaTestCalendar_ocrJson: '/testService/qaTestCalendar/ocrJson',
    qaTestCalendar_appTestTaskList: '/testService/qaTestCalendar/appTestTaskList',
    // 测试结果
    qaTestResult_appList: '/testService/qaTestResult/appList',
    qaTestResult_appTestResultList: '/testService/qaTestResult/appTestResultList',
    qaTestResult_insertOrUpdate: '/testService/qaTestResult/insertOrUpdate',
    qaTestResult_appResultSubmit: '/testService/qaTestResult/appResultSubmit',
    qaTestResult_getTestCluster: '/testService/qaTestResult/getTestCluster',
    // 子表与问题
    qaTestResultSubtable_appList: '/testService/qaTestResultSubtable/appList',
    qaTestResultSubtable_batchEditTestResult: '/testService/qaTestResultSubtable/batchEditTestResult',
    qaTestResultSubtableProblem_appNewProblem: '/testService/qaTestResultSubtableProblem/appNewProblem',
    qaTestResultSubtableProblem_appSelectProblem: '/testService/qaTestResultSubtableProblem/appSelectProblem',
    qaTestProblem_appIsSelectProblem: '/testService/qaTestProblem/appIsSelectProblem',
    qaTestProblem_appSelectProblemList: '/testService/qaTestProblem/appSelectProblemList',
  },
};

export default APIPATHS;