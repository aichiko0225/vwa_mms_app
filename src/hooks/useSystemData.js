import { useEffect, useState, useCallback } from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';
import systemService from '../services/systemService';
import { getLogger } from '../services/logger';

const log = getLogger('useSystemData');
const KEY = 'sysAllDictItems';

/**
 * 缓存系统字典并提供读取与刷新能力
 * @returns {{ dicts: Object, getDict: (code:string)=>Array, refresh: (codes?:string[])=>Promise<void>, initialized: boolean }}
 */
export default function useSystemData() {
  const [dicts, setDicts] = useState({});
  const [initialized, setInitialized] = useState(false);

  const getDict = useCallback((code) => {
    return dicts && dicts[code] ? dicts[code] : [];
  }, [dicts]);

  const loadCache = useCallback(async () => {
    try {
      const raw = await AsyncStorage.getItem(KEY);
      if (raw) {
        const cached = JSON.parse(raw);
        setDicts(cached || {});
      }
    } catch (e) { log.warn('Load cache failed', e.message); }
  }, []);

  const refresh = useCallback(async (codes) => {
    try {
      let data = {};
      if (Array.isArray(codes) && codes.length) {
        data = await systemService.getDictItemsByCodes(codes);
      } else {
        const res = await systemService.getAllDictItems();
        data = (res.data && res.data.result) || {};
      }
      setDicts(data);
      await AsyncStorage.setItem(KEY, JSON.stringify(data));
    } catch (e) { log.error('Refresh dicts error', { message: e.message }); }
  }, []);

  useEffect(() => {
    (async () => {
      await loadCache();
      setInitialized(true);
    })();
  }, [loadCache]);

  return { dicts, getDict, refresh, initialized };
}
