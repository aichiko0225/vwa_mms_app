import React from 'react';
import { View } from 'react-native';
import { Button, Text } from 'react-native-paper';
import { useAuthStore } from '../stores/auth';

/**
 * 登录页：演示登录，成功后写入 token
 * @returns {JSX.Element}
 */
export default function LoginScreen() {
  const login = useAuthStore(s => s.login);
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>Login</Text>
      <Button mode="contained" onPress={() => login('token')}>
        Sign In
      </Button>
    </View>
  );
}