import { create } from 'zustand';
import { persist, createJSONStorage } from 'zustand/middleware';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { ACCESS_TOKEN, USER_NAME, USER_INFO, USER_ID } from '../common/constants';

/**
 * @typedef {Object} AuthState
 * @property {string|null} token 认证令牌
 * @property {any} [user] 用户信息
 * @property {string|null} [username] 用户名
 * @property {string|null} [userId] 用户ID
 * @property {(t: string, u?: any) => Promise<void>} login 登录方法（写入持久化键）
 * @property {() => Promise<void>} logout 退出方法（清理持久化键）
 */

/**
 * 全局认证状态（持久化）
 * @type {import('zustand').UseBoundStore<import('zustand').StoreApi<AuthState>>}
 */
export const useAuthStore = create(
  persist(
    (set, get) => ({
      token: null,
      user: undefined,
      username: null,
      userId: null,
      async login(t, u) {
        const username = u?.username ?? null;
        const userId = u?.id != null ? String(u.id) : null;
        set({ token: t || null, user: u, username, userId });
        try {
          await AsyncStorage.multiSet([
            [ACCESS_TOKEN, t ?? ''],
            [USER_NAME, username ?? ''],
            [USER_ID, userId ?? ''],
            [USER_INFO, JSON.stringify(u ?? {})],
          ]);
        } catch {}
      },
      async logout() {
        set({ token: null, user: undefined, username: null, userId: null });
        try {
          await AsyncStorage.multiRemove([ACCESS_TOKEN, USER_NAME, USER_ID, USER_INFO]);
        } catch {}
      },
    }),
    {
      name: 'auth_user',
      storage: createJSONStorage(() => AsyncStorage),
    },
  ),
);