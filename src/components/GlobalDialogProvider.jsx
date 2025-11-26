import React, { createContext, useContext, useRef, useState } from 'react';
import { InteractionManager, AppState, Platform } from 'react-native';
import { Portal, Dialog, Button, Text } from 'react-native-paper';

export const DialogContext = createContext(null);

export default function GlobalDialogProvider({ children }) {
  const [visible, setVisible] = useState(false);
  const cfgRef = useRef({ title: '', message: '', okText: 'OK', cancelText: 'Cancel', showCancel: false, resolve: null, onOk: null, onCancel: null });

  const open = (opts) => new Promise((resolve) => {
    const run = () => {
      cfgRef.current = {
        title: '', message: '', okText: 'OK',
        cancelText: 'Cancel', showCancel: false, resolve, onOk: null,
        onCancel: null, ...opts
      };
      setVisible(true);
    };
    if (Platform.OS === 'android' && AppState.currentState !== 'active') {
      const sub = AppState.addEventListener('change', (s) => {
        if (s === 'active') { try { sub.remove(); } catch { }; requestAnimationFrame(() => run()); }
      });
    } else {
      requestAnimationFrame(() => run());
    }
  });

  const confirm = (opts) => open({ ...opts, showCancel: true });
  const alert = (opts) => open({ ...opts, showCancel: false });

  const onCancel = () => {
    const { resolve, onCancel: onCancelFunc } = cfgRef.current;
    setVisible(false);
    try { if (typeof onCancelFunc === 'function') onCancelFunc(); } catch { }
    if (resolve) resolve(false);
  };
  const onOk = () => {
    const { resolve, showCancel, onOk: onOkFunc } = cfgRef.current;
    setVisible(false);
    try { if (typeof onOkFunc === 'function') onOkFunc(); } catch { }
    if (resolve) resolve(showCancel ? true : undefined);
  };

  return (
    <DialogContext.Provider value={{ confirm, alert }}>
      <Portal>
        <Dialog visible={visible} onDismiss={onCancel}>
          <Dialog.Title>{cfgRef.current.title}</Dialog.Title>
          <Dialog.Content>
            <Text>{cfgRef.current.message}</Text>
          </Dialog.Content>
          <Dialog.Actions>
            {cfgRef.current.showCancel ? (<Button onPress={onCancel}>{cfgRef.current.cancelText}</Button>) : null}
            <Button onPress={onOk}>{cfgRef.current.okText}</Button>
          </Dialog.Actions>
        </Dialog>
      </Portal>
      {children}
    </DialogContext.Provider>
  );
}
