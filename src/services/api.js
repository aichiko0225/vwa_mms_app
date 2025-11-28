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
    login: '/sys/login', // 登录
    logout: '/sys/logout', // 退出登录
    qyweixinLogin: '/sys/qyweixinLogin', // 企业微信登录
    phoneLogin: '/sys/phoneLogin', // 手机号登录
    h5Login: '/sys/h5/login', // H5 登录
    // 用户
    selectUserRoleByUserId: '/sys/user/selectUserRoleByUserId', // 根据用户ID获取角色
    queryById: '/sys/user/queryById', // 根据用户ID查询用户信息
    changePassword: '/sys/user/changeMyPassword', // 修改密码
    updateAvatar: '/sys/user/updateAvatar', // 更新头像
    appSelectUserRoleByUsername: '/sys/user/appSelectUserRoleByUsername', // 根据用户名查询角色
    queryEmail: '/sys/user/queryEmail', // 查询邮箱
    sendEmail: '/sys/user/sendEmail', // 发送邮件
    forgetPassword: '/sys/user/forgetPassword', // 忘记密码重置
    newList: '/sys/user/newlist', // 用户列表
    // 短信
    sendSms: '/sys/sms/sendSms', // 发送短信验证码
    // 系统与通用
    dictItemList: '/sys/dictItem/list', // 数据字典项列表
    announcementEdit: '/sys/sysAnnouncementSend/editByAnntIdAndUserId', // 公告编辑已读状态
    announcementReadAll: '/sys/sysAnnouncementSend/readAll', // 公告一键已读
    upload: '/sys/common/upload', // 文件上传
    downloadFile: '/sys/common/downloadFile', // 文件下载
    static: '/sys/common/static', // 静态资源访问
    // 系统基础数据
    sysBaseDataGetAll: '/sys/sysBaseData/getAll',
  },
  testService: {
    // 组与内容
    qaTqsGroup_list: '/testService/qaTqsGroup/list', // 测试组列表
    qaTqsGroupContent_list: '/testService/qaTqsGroupContent/list', // 测试组内容列表
    // 测试日历
    qaTestCalendar_appTestCalendarList: '/testService/qaTestCalendar/appTestCalendarList', // 测试日历列表
    qaTestCalendar_taskCollection: '/testService/qaTestCalendar/taskCollection', // 任务收集
    qaTestCalendar_appSelectTqsTester: '/testService/qaTestCalendar/appSelectTqsTester', // 选择TQS测试人员
    qaTestCalendar_appSelectIsTester: '/testService/qaTestCalendar/appSelectIsTester', // 是否为测试人员
    qaTestCalendar_appReceive: '/testService/qaTestCalendar/appReceive', // 接收任务
    qaTestCalendar_appAssign: '/testService/qaTestCalendar/appAssign', // 分配任务
    qaTestCalendar_appLeaderCancel: '/testService/qaTestCalendar/appLeaderCancel', // 组长取消任务
    qaTestCalendar_appLeaderAdjust: '/testService/qaTestCalendar/appLeaderAdjust', // 组长调整任务
    qaTestCalendar_appTesterForward: '/testService/qaTestCalendar/appTesterForward', // 测试人员转发
    qaTestCalendar_appScanGetTask: '/testService/qaTestCalendar/appScanGetTask', // 扫码领取任务
    qaTestCalendar_ocrJson: '/testService/qaTestCalendar/ocrJson', // OCR 识别
    qaTestCalendar_appTestTaskList: '/testService/qaTestCalendar/appTestTaskList', // 测试任务列表
    qaTestCalendar_getMyAnnouncementSend: '/testService/qaTestCalendar/getMyAnnouncementSend', // 我的公告列表
    // 测试结果
    qaTestResult_appList: '/testService/qaTestResult/appList', // 测试结果主表列表
    qaTestResult_appTestResultList: '/testService/qaTestResult/appTestResultList', // 测试结果列表（历史）
    qaTestResult_insertOrUpdate: '/testService/qaTestResult/insertOrUpdate', // 测试结果新增或更新
    qaTestResult_appResultSubmit: '/testService/qaTestResult/appResultSubmit', // 测试结果提交
    qaTestResult_getTestCluster: '/testService/qaTestResult/getTestCluster', // 获取测试集群
    // 子表与问题
    qaTestResultSubtable_appList: '/testService/qaTestResultSubtable/appList', // 子表列表
    qaTestResultSubtable_batchEditTestResult: '/testService/qaTestResultSubtable/batchEditTestResult', // 子表批量编辑
    qaTestResultSubtableProblem_appNewProblem: '/testService/qaTestResultSubtableProblem/appNewProblem', // 子表问题新建
    qaTestResultSubtableProblem_appSelectProblem: '/testService/qaTestResultSubtableProblem/appSelectProblem', // 子表问题选择
    qaTestProblem_appIsSelectProblem: '/testService/qaTestProblem/appIsSelectProblem', // 问题是否已选择
    qaTestProblem_appSelectProblemList: '/testService/qaTestProblem/appSelectProblemList', // 问题列表
  },
};

export default APIPATHS;
