import React from 'react';
import { View } from 'react-native';
import { Button, Text } from 'react-native-paper';
import { useAuthStore } from '../stores/auth';

/**
 * 首页：展示并支持退出登录
 * @returns {JSX.Element}
 */
export default function HomeScreen() {
  const logout = useAuthStore(s => s.logout);
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>Home</Text>
      <Button mode="contained" onPress={logout}>
        Logout
      </Button>
    </View>
  );
}