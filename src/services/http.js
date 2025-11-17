import axios from 'axios';
import { useAuthStore } from '../stores/auth';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { ACCESS_TOKEN } from '../common/constants';

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