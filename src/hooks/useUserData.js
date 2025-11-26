import { useEffect, useState, useCallback } from 'react';
import userService from '../services/userService';
import { useAuthStore } from '../stores/auth';
import { getLogger } from '../services/logger';

const logger = getLogger('useUserData');

/**
 * 获取用户数据（角色等），不缓存，按需请求
 */
export default function useUserData() {
  const [roles, setRoles] = useState([]);
  const [userInfo, setUserInfo] = useState({});
  const [initialized, setInitialized] = useState(false);
  const user = useAuthStore(s => s.user);

  const refresh = useCallback(async (userId) => {
    const id = userId || (user && user.id) || null;
    if (!id) { logger.warn('No user id to query roles'); return; }
    const username = user && user.username || null;
    if (!username) { logger.warn('No username to query roles'); return; }
    try {
      const res = await userService.selectUserInfoById(id);
      /** @type {import('@types/user').UserInfoModel} */
      const data = (res.data && res.data.result) || {}; 
      setUserInfo(data);

      const roleRes = await userService.appSelectUserRoleByUsername(username);
      /** @type {import('@types/user').UserRoleModel[]} */
      const roleData = (roleRes.data && roleRes.data.result) || [];
      setRoles(roleData);
    } catch (e) { logger.error('Query user info error', { message: e.message }); }
  }, [user]);

  useEffect(() => {
    (async () => {
      await refresh();
      setInitialized(true);
    })();
  }, [refresh]);

  return { userInfo, roles, refresh, initialized };
}
