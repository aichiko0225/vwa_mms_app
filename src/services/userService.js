import http from './http';
import APIPATHS from './api';

export const queryEmail = username => http.post(APIPATHS.sys.queryEmail, { username });
export const appSelectUserRoleByUsername = username => http.post(APIPATHS.sys.appSelectUserRoleByUsername, { username });
export const sendSms = params => http.post(APIPATHS.sys.sendSms, params);
export const h5Login = params => http.post(APIPATHS.sys.h5Login, params);
export const sendEmail = params => http.post(APIPATHS.sys.sendEmail, params);
export const forgetPassword = params => http.put(APIPATHS.sys.forgetPassword, params);

export default {
  queryEmail,
  appSelectUserRoleByUsername,
  sendSms,
  h5Login,
  sendEmail,
  forgetPassword,
};