import React, { useEffect, useState } from 'react';
import { View, StyleSheet, Alert, Text as RNText, TouchableOpacity, Image } from 'react-native';
import { Button, TextInput, Text } from 'react-native-paper';
import MaterialDesignIcons from '@react-native-vector-icons/material-design-icons';
import { useNavigation } from '@react-navigation/native';
import { useForm, Controller } from 'react-hook-form';
import useAuthFlow from '../../hooks/useAuthFlow';
import { useAuthStore } from '../../stores/auth';
import bgImage from '../../assets/icons/qa-app-bg.jpg';
import logoImage from '../../assets/icons/qa-logo.png';

export default function LoginPage() {
  const navigation = useNavigation();
  const login = useAuthStore(s => s.login);
  const { control, handleSubmit, setValue, watch } = useForm({ defaultValues: { username: 'FPXNUH1', password: '123456', phone: '', code: '' } });
  const [showPswd, setShowPswd] = useState(false);
  const { loading, countdown, queryPhone, sendSmsCode, login: loginReq } = useAuthFlow();
  const username = watch('username');
  const password = watch('password');
  const phone = watch('phone');
  const code = watch('code');

  const tips = countdown > 0 ? `${countdown}s` : 'Send Code';

  const handleQueryPhone = async () => {
    if (!username) return;
    try {
      const p = await queryPhone(username);
      setValue('phone', p);
    } catch (e) {
      setValue('phone', '');
      Alert.alert('Info', e.message);
    }
  };

    useEffect(() => {
    if (username && !phone) {
      handleQueryPhone();
    }
  }, [username, phone]);

  const getCode = async () => {
    if (!phone && username) {
      try { const p = await queryPhone(username); setValue('phone', p); } catch {}
    }
    if (!phone) {
      Alert.alert('Validation', 'Phone Number Cannot Be Empty');
      return;
    }
    if (!password) {
      Alert.alert('Validation', 'Password Cannot Be Empty');
      return;
    }
    const regExp = /^1[3456789]\d{9}$/;
    if (!regExp.test(phone)) {
      Alert.alert('Validation', 'Phone Number Format Is Incorrect');
      return;
    }
    try {
      await sendSmsCode(username, phone, password);
      Alert.alert('Success', 'Verification Code Has Been Sent');
    } catch (e) {
      Alert.alert('Error', e.message);
    }
  };

  const onLogin = async ({ username, password, phone, code }) => {
    if (!username || !password) {
      Alert.alert('Validation', 'Please fill in username and password');
      return;
    }
    let currentPhone = phone;
    if (!currentPhone && username) {
      try { currentPhone = await queryPhone(username); setValue('phone', currentPhone); } catch {}
    }
    try {
      const res = await loginReq(username, password, currentPhone, code);
      if (res.data && res.data.success) {
        /** @type {import('@types').AuthSession} */
        const result = res.data.result || {};
        const token = result.token;
        const userInfo = result.userInfo;
        await login(token, userInfo);
        navigation.reset({ index: 0, routes: [{ name: 'Home' }] });
      } else {
        Alert.alert('Login Failed', (res.data && res.data.message) || 'Incorrect account or password');
      }
    } catch (e) {
      Alert.alert('Network', 'Login failed');
    }
  };

  return (
    <View style={styles.container}>
      <Image source={bgImage} style={styles.bg} resizeMode="cover" />
      <Image source={logoImage} style={styles.logo} />
      <RNText style={styles.title}>QA Platform</RNText>
      <RNText style={styles.subtitle}>Test Case Management</RNText>
      <Controller control={control} name="username" rules={{ required: true }} render={({ field: { value, onChange, onBlur } }) => (
        <TextInput label="User" value={value} onChangeText={onChange} onBlur={() => { onBlur(); handleQueryPhone(); }} style={styles.input} />
      )} />
      <Controller control={control} name="password" rules={{ required: true }} render={({ field: { value, onChange } }) => (
        <TextInput
          label="Password"
          value={value}
          onChangeText={onChange}
          secureTextEntry={!showPswd}
          style={styles.input}
          right={<TextInput.Icon icon={(props) => (<MaterialDesignIcons name={showPswd ? 'eye' : 'eye-off'} size={24} color={props.color} />)} onPress={() => setShowPswd(v=>!v)} />}
        />
      )} />
      <Controller control={control} name="phone" render={({ field: { value } }) => (
        <TextInput label="Phone Number" value={value} editable={false} style={styles.input} />
      )} />
      <View style={styles.row}>
        <Controller control={control} name="code" render={({ field: { value, onChange } }) => (
          <TextInput label="Verification Code" value={value} onChangeText={onChange} style={[styles.input, { flex: 1 }]} />
        )} />
        <Button mode="contained" style={styles.codeBtn} disabled={countdown>0} onPress={getCode}>{tips}</Button>
      </View>
      <Button mode="contained" loading={loading} onPress={handleSubmit(onLogin)}>Login</Button>
      <TouchableOpacity onPress={() => navigation.navigate('ForgetPassword', { username: username || null })}>
        <Text style={styles.forget}>Forget Password</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, padding: 16, justifyContent: 'center' },
  bg: { position: 'absolute', top: 0, bottom: 0, left: 0, right: 0, width: '100vw', height: '100vh' },
  logo: { alignSelf: 'center', width: 159, height: 80, marginBottom: 12 },
  title: { textAlign: 'center', fontSize: 20, fontWeight: 'bold', color: '#000' },
  subtitle: { textAlign: 'center', fontSize: 20, fontWeight: 'bold', color: '#000', marginBottom: 16 },
  input: { marginBottom: 12 },
  row: { flexDirection: 'row', alignItems: 'center' },
  codeBtn: { marginLeft: 8, height: 48, justifyContent: 'center' },
  forget: { textAlign: 'right', padding: 8, color: '#fff' },
  toggle: { textAlign: 'right', marginBottom: 8 }
});
