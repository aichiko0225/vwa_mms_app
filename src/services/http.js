import axios from 'axios';
import { useAuthStore } from '../stores/auth';

/**
 * Axios 实例（可设置 baseURL）。
 * @type {import('axios').AxiosInstance}
 */
export const http = axios.create({});

/**
 * 注入认证头：X-Access-Token
 * @param {import('axios').InternalAxiosRequestConfig} config
 * @returns {import('axios').InternalAxiosRequestConfig}
 */
http.interceptors.request.use(config => {
  const token = useAuthStore.getState().token;
  if (token) {
    config.headers = {
      ...config.headers,
      'X-Access-Token': token,
    };
  }
  return config;
});

/**
 * 响应拦截（保留默认），可按需扩展错误处理
 * @type {import('axios').AxiosResponse}
 */
http.interceptors.response.use(
  response => response,
  error => Promise.reject(error),
);

export default http;