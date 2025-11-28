import React, { useState } from 'react';
import { View, StyleSheet, Platform } from 'react-native';
import { useRoute } from '@react-navigation/native';
import WebviewComponent from '../../components/WebviewComponent';
 
const ACTIONS = {
  logout: 'logout',
  lifecycle: 'lifecycle',
}

export default function WebViewPage() {
  const route = useRoute();
  const defaultFile = Platform.OS === 'android' ? 'file:///android_asset/index.html' : '';
  const initialUrl = route.params?.url || `${defaultFile}#/pages/index/index`;
  return (
    <View style={styles.container}>
      <WebviewComponent uri={initialUrl} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1 }
});
