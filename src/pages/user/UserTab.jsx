import React from 'react';
import { View, Image, StyleSheet, TouchableOpacity } from 'react-native';
import { Text, Button, List, Divider } from 'react-native-paper';
import { useNavigation } from '@react-navigation/native';
import { useAuthStore } from '../../stores/auth';
import avatar from '../../assets/icons/defaultAvatar.jpg';

export default function UserTab() {
  const userInfo = useAuthStore(s => s.user);
  const logout = useAuthStore(s => s.logout);
  const navigation = useNavigation();
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Image source={avatar} style={styles.avatar} />
        <View style={styles.info}>
          <Text style={styles.name}>{userInfo?.realname || userInfo?.username || 'User'}</Text>
          <Text style={styles.sub}>{userInfo?.email || ''}</Text>
        </View>
      </View>
      <View style={styles.listBox}>
        <List.Section>
          <TouchableOpacity onPress={() => navigation.navigate('About')}>
            <List.Item title="About Us" left={props => <List.Icon {...props} icon="information" />} />
          </TouchableOpacity>
          <Divider />
          <TouchableOpacity onPress={() => navigation.navigate('UpdatePassword')}>
            <List.Item title="Update Password" left={props => <List.Icon {...props} icon="lock" />} />
          </TouchableOpacity>
        </List.Section>
      </View>
      <Button mode="contained" style={styles.logout} onPress={logout}>Logout</Button>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, padding: 16 },
  header: { flexDirection: 'row', alignItems: 'center', marginBottom: 16 },
  avatar: { width: 64, height: 64, borderRadius: 32, marginRight: 12 },
  info: { flex: 1 },
  name: { fontSize: 18, fontWeight: '600' },
  sub: { color: '#666', marginTop: 4 },
  listBox: { backgroundColor: '#fff', borderRadius: 8, overflow: 'hidden' },
  logout: { marginTop: 24, borderRadius: 24 },
});
