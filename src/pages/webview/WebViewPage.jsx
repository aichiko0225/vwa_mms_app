import React, { useMemo } from 'react';
import { View, StyleSheet, Platform } from 'react-native';
import { WebView } from 'react-native-webview';
import { useRoute } from '@react-navigation/native';
import { useAuthStore } from '../../stores/auth';

export default function WebViewPage() {
  const route = useRoute();
  const defaultFile = Platform.OS === 'android' ? 'file:///android_asset/index.html' : '';
  const url = route.params?.url || `${defaultFile}#/pages/index/index`;
  const { token, user, username, userId } = useAuthStore.getState();
  const injected = useMemo(() => {
    const payload = {
      'Access-Token': token || '',
      'login_user_info': JSON.stringify(user || {}),
      'login_user_id': userId || '',
      'login_username': username || '',
    };
    return `(function(){try{var d=${JSON.stringify(payload)};Object.keys(d).forEach(function(k){localStorage.setItem(k,d[k]);});}catch(e){}})();true;`;
  }, [token, user, username, userId]);
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
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1 }
});