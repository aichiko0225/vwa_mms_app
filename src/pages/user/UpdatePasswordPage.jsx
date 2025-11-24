import React, { useState } from 'react';
import { View, StyleSheet } from 'react-native';
import { Button, TextInput, Text } from 'react-native-paper';
import MaterialDesignIcons from '@react-native-vector-icons/material-design-icons';
import { useForm, Controller } from 'react-hook-form';
import { useAuthStore } from '../../stores/auth';
import userService from '../../services/userService';
import { PUBLIC_KEY } from '../../common/constants';

export default function UpdatePasswordPage() {
  const { control, handleSubmit, watch } = useForm({ defaultValues: { oldPassword: '', newPassword: '', confirmPassword: '' } });
  const [showOld, setShowOld] = useState(true);
  const [showNew, setShowNew] = useState(true);
  const [showConfirm, setShowConfirm] = useState(true);
  const username = useAuthStore(s => s.user?.username);

  const encrypt = v => {
    try {
      const { sm2 } = require('sm-crypto');
      return sm2.doEncrypt(v, PUBLIC_KEY);
    } catch { return v; }
  };

  const onSubmit = async ({ oldPassword, newPassword, confirmPassword }) => {
    if (!newPassword || !confirmPassword) return;
    if (newPassword === oldPassword) return;
    if (confirmPassword !== newPassword) return;
    const params = { password: encrypt(newPassword), username };
    const res = await userService.changePassword(params);
    if (res.data && res.data.success) {
      alert('Password changed. Please login again.');
      useAuthStore.getState().logout();
    } else {
      alert((res.data && res.data.message) || 'Modify failed');
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.header}>Update Password</Text>
      <Controller control={control} name="oldPassword" render={({ field: { value, onChange } }) => (
        <TextInput
          label="Original Password"
          value={value}
          onChangeText={onChange}
          secureTextEntry={showOld}
          style={styles.input}
          right={<TextInput.Icon icon={(props) => (<MaterialDesignIcons name={showOld ? 'eye-off' : 'eye'} size={24} color={props.color} />)} onPress={() => setShowOld(v=>!v)} />}
        />
      )} />
      <Controller control={control} name="newPassword" render={({ field: { value, onChange } }) => (
        <TextInput
          label="New Password"
          value={value}
          onChangeText={onChange}
          secureTextEntry={showNew}
          style={styles.input}
          right={<TextInput.Icon icon={(props) => (<MaterialDesignIcons name={showNew ? 'eye-off' : 'eye'} size={24} color={props.color} />)} onPress={() => setShowNew(v=>!v)} />}
        />
      )} />
      <Controller control={control} name="confirmPassword" render={({ field: { value, onChange } }) => (
        <TextInput
          label="Confirm Password"
          value={value}
          onChangeText={onChange}
          secureTextEntry={showConfirm}
          style={styles.input}
          right={<TextInput.Icon icon={(props) => (<MaterialDesignIcons name={showConfirm ? 'eye-off' : 'eye'} size={24} color={props.color} />)} onPress={() => setShowConfirm(v=>!v)} />}
        />
      )} />
      <Button mode="contained" onPress={handleSubmit(onSubmit)}>Save</Button>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, padding: 16 },
  header: { fontSize: 18, fontWeight: 'bold', textAlign: 'center', marginBottom: 12 },
  input: { marginBottom: 12 }
});

