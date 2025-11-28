import React, { useMemo, useRef, useState } from 'react';
import { Platform, Alert } from 'react-native';
import { WebView } from 'react-native-webview';
import { useAuthStore } from '../stores/auth';

function DefaultBridge() {
  const logoutShownRef = useRef(false);
  const getInjectedJS = () => {
    const { token, user, username, userId } = useAuthStore.getState();
    const payload = {
      'Access-Token': token || '',
      'login_user_info': JSON.stringify(user || {}),
      'login_user_id': userId || '',
      'login_username': username || '',
    };
    return `(function(){try{var d=${JSON.stringify(payload)};Object.keys(d).forEach(function(k){localStorage.setItem(k,d[k]);});}catch(e){}})();true;`;
  };
  const onMessage = (event) => {
    try {
      const data = JSON.parse(event.nativeEvent?.data || '{}');
      const action = String(data?.action || '');
      if (action === 'logout') {
        if (!logoutShownRef.current) {
          logoutShownRef.current = true;
          Alert.alert('Logout', 'You have been signed out', [
            { text: 'OK', onPress: () => { logoutShownRef.current = false; useAuthStore.getState().logout(); } }
          ]);
        }
        return;
      }
    } catch {}
  };
  const onError = (url, setUrl) => {
    if (Platform.OS === 'android' && !String(url).startsWith('file:///android_asset/')) {
      setUrl('file:///android_asset/index.html#/pages/index/index');
    }
  };
  return { getInjectedJS, onMessage, onError };
}

export default function WebviewComponent({ uri, bridge }) {
  const [url, setUrl] = useState(uri);
  const b = bridge || DefaultBridge();
  const injected = useMemo(() => b.getInjectedJS(), [b]);
  const allowingReadAccessToURL = Platform.OS === 'ios' ? String(url).replace(/index\.html.*$/, '') : undefined;
  return (
    <WebView
      source={{ uri: url }}
      injectedJavaScriptBeforeContentLoaded={injected}
      originWhitelist={["*"]}
      allowFileAccess
      allowFileAccessFromFileURLs
      allowUniversalAccessFromFileURLs
      allowingReadAccessToURL={allowingReadAccessToURL}
      onError={() => b.onError(url, setUrl)}
      onMessage={b.onMessage}
      style={{ flex: 1 }}
    />
  );
}
