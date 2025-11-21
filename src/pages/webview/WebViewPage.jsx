import React, { useMemo, useState } from 'react';
import { View, StyleSheet, Platform } from 'react-native';
import { WebView } from 'react-native-webview';
import { useRoute } from '@react-navigation/native';
import { useAuthStore } from '../../stores/auth';
 

const ACTIONS = {
  logout: 'logout',
  lifecycle: 'lifecycle',
}


export default function WebViewPage() {

  const route = useRoute();
  const defaultFile = Platform.OS === 'android' ? 'file:///android_asset/index.html' : '';
  const initialUrl = route.params?.url || `${defaultFile}#/pages/index/index`;
  const [url, setUrl] = useState(initialUrl);
  const { token, user, username, userId } = useAuthStore.getState();

  

  // inject javascript to webview
  const injected = useMemo(() => {
    const payload = {
      'Access-Token': token || '',
      'login_user_info': JSON.stringify(user || {}),
      'login_user_id': userId || '',
      'login_username': username || '',
    };
    return `(function(){try{var d=${JSON.stringify(payload)};Object.keys(d).forEach(function(k){localStorage.setItem(k,d[k]);});}catch(e){}})();true;`;
  }, [token, user, username, userId]);

  const handleWebViewMessage = (event) => {
    console.log('handleWebViewMessage', event);
    // event.nativeEvent.data 就是 H5 发送过来的数据（字符串格式）
    const dataFromH5 = event.nativeEvent.data;
    try {
      const jsonData = JSON.parse(dataFromH5);
      console.log('jsonData', jsonData);
      const action = jsonData?.action || '';
      if (action === ACTIONS.logout) {
        useAuthStore.getState().logout();
        return;
      } else if (action === ACTIONS.lifecycle) {
        // setUrl(initialUrl);
        console.info('lifecycle', jsonData.payload);
      }     
    } catch (error) {
      console.log('error', error);
    }
  }

  return (
    <View style={styles.container}>
      <WebView
        source={{ uri: url }}
        injectedJavaScriptBeforeContentLoaded={injected}
        originWhitelist={["*"]}
        allowFileAccess
        allowFileAccessFromFileURLs
        allowUniversalAccessFromFileURLs
        allowingReadAccessToURL={Platform.OS === 'ios' ? url.replace(/index\.html.*$/, '') : undefined}
        onError={() => {
          if (Platform.OS === 'android' && !String(url).startsWith('file:///android_asset/')) {
            setUrl('file:///android_asset/index.html#/pages/index/index');
          }
        }}
        onMessage={handleWebViewMessage}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1 }
});
