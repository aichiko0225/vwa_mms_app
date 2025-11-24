/**
 * @typedef {Object} DictItem 字典项
 * @property {string|number} value 值
 * @property {string} text 文本
 * @property {string} title 标题
 */

/**
 * @typedef {Object<string, Array<DictItem>>} SysAllDictItems 系统全部字典
 */

/**
 * @typedef {Object} AuthorizeUser 授权用户（占位，字段依具体接口返回而定）
 * @property {string} [id]
 * @property {string} [username]
 * @property {string} [realname]
 */

/**
 * @typedef {Object} DepartInfo 部门信息
 * @property {string|null} departId 部门ID
 * @property {string} departName 部门名称
 * @property {string|null} managerId 负责人ID
 * @property {string} id 部门唯一ID
 * @property {string} parentId 上级部门ID
 * @property {string|null} parentName 上级部门名称
 * @property {string} departNameEn 部门英文名称
 * @property {string|null} departNameAbbr 部门简称
 * @property {string|number|null} departOrder 部门排序
 * @property {string|null} description 描述
 * @property {string|null} orgCategory 组织类别
 * @property {string|null} orgType 组织类型
 * @property {string|null} orgCode 组织编码
 * @property {string|null} mobile 手机
 * @property {string|null} fax 传真
 * @property {string|null} address 地址
 * @property {string|null} memo 备注
 * @property {number|string|null} status 状态
 * @property {string|number|null} delFlag 删除标识
 * @property {string} createBy 创建人
 * @property {string} createTime 创建时间
 * @property {string|null} updateBy 更新人
 * @property {string|null} updateTime 更新时间
 * @property {string|number|null} level 等级
 * @property {string|null} costCenter 成本中心
 * @property {string|null} companyId 公司ID
 * @property {string|null} companyName 公司名称
 * @property {string|null} username 用户名（冗余）
 * @property {string|null} realname 真实姓名（冗余）
 * @property {string|null} userid 用户ID（冗余）
 */

/**
 * @typedef {Object} AuthSession 登录会话数据
 * @property {number|string} multi_depart 多部门标记
 * @property {UserInfoModel} userInfo 用户信息
 * @property {SysAllDictItems} sysAllDictItems 系统全部字典
 * @property {Array<AuthorizeUser>} authorizeUserList 授权用户列表
 * @property {Array<DepartInfo>} departs 部门列表
 * @property {string} token 访问令牌
 */

