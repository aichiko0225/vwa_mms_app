import axios from 'axios';
import { useAuthStore } from '../stores/auth';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { ACCESS_TOKEN } from '../common/constants';
import logger from '../common/logger';

/**
 * Axios 实例（可设置 baseURL）。
 * @type {import('axios').AxiosInstance}
 */
export const http = axios.create({ baseURL: 'http://139.196.151.216:9998' });

/**
 * 注入认证头：X-Access-Token（优先取 store，回退到 AsyncStorage 的 ACCESS_TOKEN）
 * @param {import('axios').InternalAxiosRequestConfig} config
 * @returns {Promise<import('axios').InternalAxiosRequestConfig>}
 */
http.interceptors.request.use(async config => {
  config.metadata = { startTime: Date.now() };
  let token = useAuthStore.getState().token;
  if (!token) {
    const stored = await AsyncStorage.getItem(ACCESS_TOKEN);
    if (stored && stored.length) token = stored;
  }
  if (token) {
    config.headers = {
      ...config.headers,
      'X-Access-Token': token,
    };
  }
  if (__DEV__) {
    const method = (config.method || 'GET').toUpperCase();
    const url = `${config.baseURL || ''}${config.url || ''}`;
    const headers = config.headers || {};
    const ct = headers['Content-Type'] || headers['content-type'];
    const tokenMask = headers['X-Access-Token'] ? '***' : undefined;
    logger.info('Request', { method, url, params: config.params, data: config.data, headers: { 'Content-Type': ct, 'X-Access-Token': tokenMask } });
  }
  return config;
});

/**
 * 响应拦截（保留默认），可按需扩展错误处理
 * @type {import('axios').AxiosResponse}
 */
http.interceptors.response.use(
  response => {
    if (__DEV__) {
      const start = response.config && response.config.metadata && response.config.metadata.startTime;
      const duration = start ? Date.now() - start : undefined;
      const method = (response.config.method || 'GET').toUpperCase();
      const url = `${response.config.baseURL || ''}${response.config.url || ''}`;
      logger.info('Response', { method, url, status: response.status, duration, data: response.data });
    }
    return response;
  },
  error => {
    if (__DEV__) {
      const cfg = error.config || {};
      const start = cfg.metadata && cfg.metadata.startTime;
      const duration = start ? Date.now() - start : undefined;
      const method = (cfg.method || 'GET').toUpperCase();
      const url = `${cfg.baseURL || ''}${cfg.url || ''}`;
      const status = error.response && error.response.status;
      const message = error.message;
      logger.error('Error', { method, url, status, duration, message, data: error.response && error.response.data });
    }
    const status = error.response && error.response.status;
    if (status === 401 || status === 403 || status === 500) {
      useAuthStore.getState().logout();
    }
    return Promise.reject(error);
  },
);

export default http;