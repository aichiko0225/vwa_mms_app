import http from './http';
import APIPATHS from './api';

const systemService = {
  // sysBaseDataGetAll
  getAllBaseData: () => http.get(APIPATHS.sys.sysBaseDataGetAll),

  /**
   * 获取全部字典项（如果后端支持无参返回全量）
   * @returns {Promise<import('axios').AxiosResponse<{ success: boolean, result: Object }>>}
   */
  getAllDictItems: () => http.get(APIPATHS.sys.dictItemList),
  /**
   * 按字典编码获取字典项
   * @param {string} dictCode 字典编码
   * @returns {Promise<import('axios').AxiosResponse<{ success: boolean, result: Array }>>}
   */
  getDictItemsByCode: (dictCode) => http.get(APIPATHS.sys.dictItemList, { params: { dictCode } }),
  /**
   * 批量按编码获取字典项
   * @param {string[]} codes 字典编码列表
   * @returns {Promise<Record<string, Array>>}
   */
  getDictItemsByCodes: async (codes = []) => {
    const out = {};
    for (const code of codes) {
      try {
        const res = await systemService.getDictItemsByCode(code);
        out[code] = (res.data && res.data.result) || [];
      } catch { out[code] = []; }
    }
    return out;
  },
};

export default systemService;
