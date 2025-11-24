import http from './http';
import APIPATHS from './api';

const userService = {
  /**
   * 查询用户邮箱
   * @param {string} username 用户名
   * @returns {Promise} 包含用户邮箱的Promise对象
   */
  queryEmail: username => http.post(APIPATHS.sys.queryEmail, { username }),
  /**
   * 查询用户角色
   * @param {string} username 用户名
   * @returns {Promise} 包含用户角色的Promise对象
   */
  appSelectUserRoleByUsername: username => http.post(APIPATHS.sys.appSelectUserRoleByUsername, { username }),
  /**
   * 发送短信验证码
   * @param {object} params 包含用户名、手机号、密码的参数对象
   * @returns {Promise} 包含发送结果的Promise对象
   */
  sendSms: params => http.post(APIPATHS.sys.sendSms, params),
  /**
   * 用户登录
   * @param {UserLoginReq} params 包含用户名、密码、手机号、验证码的参数对象
   * @returns {Promise} 包含登录结果的Promise对象
   */
  login: params => http.post(APIPATHS.sys.login, params),
  /**
   * H5用户登录
   * @param {UserLoginReq} params 包含用户名、密码、手机号、验证码的参数对象
   * @returns {Promise} 包含登录结果的Promise对象
   */
  h5Login: params => http.post(APIPATHS.sys.h5Login, params),
  /**
   * 发送邮箱验证码
   * @param {object} params 包含用户名、手机号、密码的参数对象
   * @returns {Promise} 包含发送结果的Promise对象
   */
  sendEmail: params => http.post(APIPATHS.sys.sendEmail, params),
  /**
   * 忘记密码
   * @param {object} params 包含用户名、手机号、密码、验证码的参数对象
   * @returns {Promise} 包含重置结果的Promise对象
   */
  forgetPassword: params => http.put(APIPATHS.sys.forgetPassword, params),
  changePassword: params => http.put(APIPATHS.sys.changePassword, params),
};

export default userService;
