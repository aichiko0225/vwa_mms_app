import React, { useEffect, useState } from 'react';
import { View, StyleSheet, Alert, Text as RNText } from 'react-native';
import { Button, TextInput } from 'react-native-paper';
import { useRoute, useNavigation } from '@react-navigation/native';
import { useForm, Controller } from 'react-hook-form';
import useForgetPasswordFlow from '../../hooks/useForgetPasswordFlow';
import { useAuthStore } from '../../stores/auth';

export default function ForgetPasswordPage() {
  const navigation = useNavigation();
  const route = useRoute();
  const logout = useAuthStore(s => s.logout);
  const { control, handleSubmit, setValue, watch } = useForm({ defaultValues: { user: route.params?.username || '', email: '', code: '', newPassword: '', confirmPassword: '' } });
  const [showNew, setShowNew] = useState(true);
  const [showConfirm, setShowConfirm] = useState(true);
  const [isAdmin, setIsAdmin] = useState(null);
  const { countdown, queryEmail, queryRole, sendEmailCode, validatePassword, submitForgetPassword } = useForgetPasswordFlow();
  const user = watch('user');
  const email = watch('email');
  const code = watch('code');
  const newPassword = watch('newPassword');
  const confirmPassword = watch('confirmPassword');

  useEffect(() => { if (user) { handleQueryEmail(); handleQueryRole(); } }, [user]);

  const tips = countdown > 0 ? `${countdown}s Resend` : 'Send Code';

  const handleQueryRole = async () => {
    if (!user) return;
    try {
      const role = await queryRole(user);
      setIsAdmin(role);
    } catch (e) {
      Alert.alert('Info', e.message);
    }
  };

  const handleQueryEmail = async () => {
    if (!user) return;
    try {
      const e = await queryEmail(user);
      setValue('email', e);
    } catch (err) {
      Alert.alert('Info', err.message);
    }
  };

  const handleSendEmailCode = async () => {
    const pattern = /^\w+((-\w+)|(\.\w+))*\@[A-Za-z0-9]+((\.|-)[A-Za-z0-9]+)*\.[A-Za-z0-9]+$/;
    if (!email || !pattern.test(email)) {
      Alert.alert('Validation', 'Please Enter A Valid Email Address');
      return;
    }
    try {
      await sendEmailCode(user, email);
      Alert.alert('Success', 'The Email Was Sent Successfully, Please Check');
    } catch (e) {
      Alert.alert('Error', e.message);
    }
  };

  const onSubmit = async ({ user, email, code, newPassword, confirmPassword }) => {
    if (!user || !email || !code || !newPassword || !confirmPassword) {
      Alert.alert('Validation', 'Please complete all required fields');
      return;
    }
    if (confirmPassword !== newPassword) {
      Alert.alert('Validation', 'The two password entries are different!');
      return;
    }
    if (!validatePassword(newPassword, isAdmin)) {
      Alert.alert('Validation', isAdmin === 1
        ? 'A 15-Bit Combination (Uppercase Letters, Lowercase Letters, Numbers And Special Characters) Containing At Least Three Of The Following Four Conditions.'
        : 'A 12-Bit Combination (Uppercase Letters, Lowercase Letters, Numbers And Special Characters) Containing At Least Three Of The Following Four Conditions.'
      );
      return;
    }
    try {
      const res = await submitForgetPassword(user, email, newPassword, code);
      if (res.data && res.data.success) {
        Alert.alert('Success', 'The Password Is Changed Successfully. Please Log In Again');
        await logout();
        navigation.reset({ index: 0, routes: [{ name: 'Login' }] });
      } else {
        if (res.data && res.data.code === 500) {
          Alert.alert('Error', 'If The Modification Fails, Contact The Administrator');
        } else {
          Alert.alert('Error', (res.data && res.data.message) || 'Modify failed');
        }
      }
    } catch { Alert.alert('Network', 'Modify failed'); }
  };

  return (
    <View style={styles.container}>
      <RNText style={styles.header}>Forget Password</RNText>
      <Controller control={control} name="user" rules={{ required: true }} render={({ field: { value, onChange, onBlur } }) => (
        <TextInput label="User" value={value} onChangeText={onChange} onBlur={() => { onBlur(); handleQueryEmail(); handleQueryRole(); }} style={styles.input} />
      )} />
      <View style={styles.row}>
        <Controller control={control} name="email" render={({ field: { value } }) => (
          <TextInput label="Email" value={value} editable={false} style={[styles.input, { flex: 1 }]} />
        )} />
        <Button mode="contained" style={styles.codeBtn} disabled={countdown>0} onPress={handleSendEmailCode}>{tips}</Button>
      </View>
      <Controller control={control} name="code" render={({ field: { value, onChange } }) => (
        <TextInput label="Verification Code" value={value} onChangeText={onChange} style={styles.input} />
      )} />
      <Controller control={control} name="newPassword" render={({ field: { value, onChange } }) => (
        <TextInput label="New Password" value={value} onChangeText={onChange} secureTextEntry={showNew} style={styles.input} />
      )} />
      <Button onPress={() => setShowNew(v=>!v)} style={styles.toggle} compact>{showNew ? 'Show' : 'Hide'} New Password</Button>
      <Controller control={control} name="confirmPassword" render={({ field: { value, onChange } }) => (
        <TextInput label="Confirm Password" value={value} onChangeText={onChange} secureTextEntry={showConfirm} style={styles.input} />
      )} />
      <Button onPress={() => setShowConfirm(v=>!v)} style={styles.toggle} compact>{showConfirm ? 'Show' : 'Hide'} Confirm Password</Button>
      <Button mode="contained" onPress={handleSubmit(onSubmit)}>Save</Button>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, padding: 16 },
  header: { fontSize: 18, fontWeight: 'bold', textAlign: 'center', marginBottom: 12 },
  input: { marginBottom: 12 },
  row: { flexDirection: 'row', alignItems: 'center' },
  codeBtn: { marginLeft: 8, height: 48, justifyContent: 'center' },
  toggle: { alignSelf: 'flex-end', marginTop: -8, marginBottom: 12 }
});