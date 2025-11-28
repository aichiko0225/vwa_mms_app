import { useEffect, useState, useCallback, useRef } from 'react';
import userService from '../services/userService';
import { useAuthStore } from '../stores/auth';
import { getLogger } from '../common/logger';

const logger = getLogger('useUserData');

/**
 * 获取用户数据（角色等），不缓存，按需请求
 */
export default function useUserData() {
  const [roles, setRoles] = useState([]);
  const [userInfo, setUserInfo] = useState({});
  const [initialized, setInitialized] = useState(false);
  const user = useAuthStore(s => s.user);

  const refresh = useCallback(async (id, username) => {
    if (!id) { logger.warn('No user id to query roles'); return; }
    if (!username) { logger.warn('No username to query roles'); return; }
    try {
      const res = await userService.selectUserInfoById(id);
      const data = (res.data && res.data.result) || {};
      setUserInfo(data);

      const roleRes = await userService.appSelectUserRoleByUsername(username);
      const roleData = (roleRes.data && roleRes.data.result) || [];
      setRoles(roleData);
    } catch (e) { logger.error('Query user info error', { message: e.message }); }
  }, []);

  const lastRef = useRef({ id: null, username: null });

  useEffect(() => {
    const id = user && user.id;
    const username = user && user.username;
    if (!id || !username) return;
    const changed = lastRef.current.id !== id || lastRef.current.username !== username;
    if (!changed) return;
    lastRef.current = { id, username };
    (async () => { await refresh(id, username); setInitialized(true); })();
  }, [user]);

  return { userInfo, roles, refresh, initialized };
}
