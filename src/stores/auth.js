import { create } from 'zustand';
import { persist, createJSONStorage } from 'zustand/middleware';
import AsyncStorage from '@react-native-async-storage/async-storage';

/**
 * @typedef {Object} AuthState
 * @property {string|null} token 认证令牌
 * @property {any} [user] 用户信息
 * @property {(t: string, u?: any) => void} login 登录方法
 * @property {() => void} logout 退出方法
 */

/**
 * 全局认证状态（持久化）
 * @type {import('zustand').UseBoundStore<import('zustand').StoreApi<AuthState>>}
 */
export const useAuthStore = create(
  persist(
    set => ({
      token: null,
      user: undefined,
      login: (t, u) => set({ token: t, user: u }),
      logout: () => set({ token: null, user: undefined }),
    }),
    {
      name: 'auth',
      storage: createJSONStorage(() => AsyncStorage),
    },
  ),
);