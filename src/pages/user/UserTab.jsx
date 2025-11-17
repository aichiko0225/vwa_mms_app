import React from 'react';
import { View, Image, StyleSheet } from 'react-native';
import { Text, Button } from 'react-native-paper';
import { useAuthStore } from '../../stores/auth';
import avatar from '../../assets/icons/defaultAvatar.jpg';

export default function UserTab() {
  const userInfo = useAuthStore(s => s.user);
  const logout = useAuthStore(s => s.logout);
  return (
    <View style={styles.container}>
      <Image source={avatar} style={styles.avatar} />
      <Text style={styles.name}>{userInfo?.realname || userInfo?.username || 'User'}</Text>
      <Button mode="contained" style={styles.btn} onPress={logout}>Logout</Button>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, alignItems: 'center', justifyContent: 'center' },
  avatar: { width: 96, height: 96, borderRadius: 48, marginBottom: 12 },
  name: { fontSize: 16, fontWeight: '600', marginBottom: 12 },
  btn: { borderRadius: 24, paddingHorizontal: 16 },
});