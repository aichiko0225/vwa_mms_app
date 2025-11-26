import { useContext } from 'react';
import { DialogContext } from '../components/GlobalDialogProvider';

/**
 * @typedef DialogOptions
 * @property {string} title - 弹窗标题
 * @property {string} message - 弹窗内容
 * @property {string} [okText='OK'] - 确认按钮文本
 * @property {string} [cancelText='Cancel'] - 取消按钮文本
 * @property {boolean} [showCancel=true] - 是否显示取消按钮
 * @property {function} onOk - 确认回调
 * @property {function} [onCancel] - 取消回调
 */

/**
 * 全局弹窗 hook
 * @returns {{confirm: (options: DialogOptions) => Promise<boolean>, alert: (options: DialogOptions) => Promise<void>}}
 */
export default function useDialog() {
  const ctx = useContext(DialogContext);
  if (!ctx) return { confirm: async () => false, alert: async () => undefined };
  return ctx;
}
