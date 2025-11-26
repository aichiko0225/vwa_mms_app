import { useEffect, useState, useCallback } from 'react';
import userService from '../services/userService';
import { useAuthStore } from '../stores/auth';
import { getLogger } from '../services/logger';

const log = getLogger('useUserData');

/**
 * 获取用户数据（角色等），不缓存，按需请求
 * @returns {{ roles: Array, refresh: (userId?:string)=>Promise<void>, initialized: boolean }}
 */
export default function useUserData() {
  const [roles, setRoles] = useState([]);
  const [initialized, setInitialized] = useState(false);
  const user = useAuthStore(s => s.user);

  const refresh = useCallback(async (userId) => {
    const id = userId || (user && user.id) || null;
    if (!id) { log.warn('No user id to query roles'); return; }
    try {
      const res = await userService.selectUserRoleByUserId(id);
      const data = (res.data && res.data.result) || [];
      setRoles(data);
    } catch (e) { log.error('Query roles error', { message: e.message }); }
  }, [user]);

  useEffect(() => {
    (async () => {
      await refresh();
      setInitialized(true);
    })();
  }, [refresh]);

  return { roles, refresh, initialized };
}
