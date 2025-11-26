import React from 'react';
import { View, Image, StyleSheet, TouchableOpacity } from 'react-native';
import { Text, Button, List, Divider, Portal, Modal, ActivityIndicator, Dialog } from 'react-native-paper';
import { useNavigation } from '@react-navigation/native';
import { useAuthStore } from '../../stores/auth';
import avatar from '../../assets/icons/defaultAvatar.jpg';
import useAuthFlow from '../../hooks/useAuthFlow';
import useDialog from '../../hooks/useDialog';

export default function UserTab() {
  const userInfo = useAuthStore(s => s.user);
  const logout = useAuthStore(s => s.logout);
  const navigation = useNavigation();
  const { logout: logoutReq, loading } = useAuthFlow();
  const [confirmVisible, setConfirmVisible] = React.useState(false);

  const doLogout = async () => {
    try {
      await logoutReq();
      logout();
    } finally {
      setConfirmVisible(false);
    }
  };

  const dialog = useDialog();

  const handleLogout = () => {
    dialog.confirm({
      title: 'Logout',
      message: 'Are you sure you want to logout?',
      onOk: doLogout,
    });
  };

  return (
    <View style={styles.container}>
      <Portal>
        <Modal visible={loading} dismissable={false} contentContainerStyle={styles.modalBox}>
          <ActivityIndicator size={48} />
          <Text style={{ marginTop: 12 }}>Processing...</Text>
        </Modal>
        <Dialog visible={confirmVisible} onDismiss={() => setConfirmVisible(false)}>
          <Dialog.Title>Logout</Dialog.Title>
          <Dialog.Content>
            <Text>Are you sure you want to logout?</Text>
          </Dialog.Content>
          <Dialog.Actions>
            <Button onPress={() => setConfirmVisible(false)}>Cancel</Button>
            <Button onPress={doLogout}>Logout</Button>
          </Dialog.Actions>
        </Dialog>
      </Portal>
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
      <Button mode="contained" loading={loading} style={styles.logout} onPress={handleLogout}>Logout</Button>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, padding: 16 },
  modalBox: { alignSelf: 'center', backgroundColor: 'white', padding: 16, borderRadius: 12, alignItems: 'center' },
  header: { flexDirection: 'row', alignItems: 'center', marginBottom: 16 },
  avatar: { width: 64, height: 64, borderRadius: 32, marginRight: 12 },
  info: { flex: 1 },
  name: { fontSize: 18, fontWeight: '600' },
  sub: { color: '#666', marginTop: 4 },
  listBox: { backgroundColor: '#fff', borderRadius: 8, overflow: 'hidden' },
  logout: { marginTop: 24, borderRadius: 24 },
});
