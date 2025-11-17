import http from './http';
import APIPATHS from './api';

const userService = {
  queryEmail: username => http.post(APIPATHS.sys.queryEmail, { username }),
  appSelectUserRoleByUsername: username => http.post(APIPATHS.sys.appSelectUserRoleByUsername, { username }),
  sendSms: params => http.post(APIPATHS.sys.sendSms, params),
  login: params => http.post(APIPATHS.sys.login, params),
  h5Login: params => http.post(APIPATHS.sys.h5Login, params),
  sendEmail: params => http.post(APIPATHS.sys.sendEmail, params),
  forgetPassword: params => http.put(APIPATHS.sys.forgetPassword, params),
};

export default userService;