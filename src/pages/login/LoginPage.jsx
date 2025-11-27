import React, { useEffect, useState } from 'react';
import { View, StyleSheet, Alert, Text as RNText, TouchableOpacity, Image } from 'react-native';
import { Button, TextInput, Text, Portal, Modal, ActivityIndicator } from 'react-native-paper';
import MaterialDesignIcons from '@react-native-vector-icons/material-design-icons';
import { useNavigation } from '@react-navigation/native';
import { useForm, Controller } from 'react-hook-form';
import { useTranslation } from 'react-i18next';
import useAuthFlow from '../../hooks/useAuthFlow';
import { useAuthStore } from '../../stores/auth';
import bgImage from '../../assets/icons/qa-app-bg.jpg';
import logoImage from '../../assets/icons/qa-logo.png';
import LanguageSwitch from '../../components/LanguageSwitch';

export default function LoginPage() {
  const { t } = useTranslation();
  const navigation = useNavigation();
  const login = useAuthStore(s => s.login);
  const { control, handleSubmit, setValue, watch } = useForm({ defaultValues: { username: 'A132H66', password: 'Pass@word123', phone: '', code: '' } });
  const [showPswd, setShowPswd] = useState(false);
  const { loading, countdown, queryPhone, sendSmsCode, login: loginReq } = useAuthFlow();
  const username = watch('username');
  const password = watch('password');
  const phone = watch('phone');
  const code = watch('code');

  const tips = countdown > 0 ? `${countdown}s` : t('login.sendCode');

  const handleQueryPhone = async () => {
    if (!username) return;
    try {
      const p = await queryPhone(username);
      setValue('phone', p);
    } catch (e) {
      setValue('phone', '');
      Alert.alert(t('alert.info'), e.message);
    }
  };

  useEffect(() => {
    if (username && !phone) {
      handleQueryPhone();
    }
  }, [username, phone]);

  const getCode = async () => {
    if (!phone && username) {
      try { const p = await queryPhone(username); setValue('phone', p); } catch { }
    }
    if (!phone) {
      Alert.alert(t('alert.validation'), t('login.phoneEmpty'));
      return;
    }
    if (!password) {
      Alert.alert(t('alert.validation'), t('login.passwordEmpty'));
      return;
    }
    const regExp = /^1[3456789]\d{9}$/;
    if (!regExp.test(phone)) {
      Alert.alert(t('alert.validation'), t('login.phoneFormatError'));
      return;
    }
    try {
      await sendSmsCode(username, phone, password);
      Alert.alert(t('alert.success'), t('login.codeSent'));
    } catch (e) {
      Alert.alert(t('alert.error'), e.message);
    }
  };

  const onLogin = async (data) => {
    const { username: formUsername, password: formPassword, phone: formPhone, code: formCode } = data;
    if (!formUsername || !formPassword) {
      Alert.alert(t('alert.validation'), t('login.fillUserPass'));
      return;
    }
    let currentPhone = formPhone;
    if (!currentPhone && formUsername) {
      try { currentPhone = await queryPhone(formUsername); setValue('phone', currentPhone); } catch { }
    }
    try {
      const res = await loginReq(formUsername, formPassword, currentPhone, formCode);
      if (res.data && res.data.success) {
        /** @type {import('@types/system').AuthSession} */
        const result = res.data.result || {};
        const token = result.token;
        const userInfo = result.userInfo;
        await login(token, userInfo);
        navigation.reset({ index: 0, routes: [{ name: 'Home' }] });
      } else {
        Alert.alert(t('login.loginFailed'), (res.data && res.data.message) || t('login.incorrectCreds'));
      }
    } catch (e) {
      Alert.alert(t('alert.network'), t('login.networkError'));
    }
  };

  return (
    <View style={styles.container}>
      <Portal>
        <Modal visible={loading} dismissable={false} contentContainerStyle={styles.modalBox}>
          <ActivityIndicator size={48} />
          <Text style={{ marginTop: 12 }}>{t('login.signingIn')}</Text>
        </Modal>
      </Portal>
      <Image source={bgImage} style={styles.bg} resizeMode="cover" />
      <View style={styles.header}>
        <LanguageSwitch />
      </View>
      <Image source={logoImage} style={styles.logo} />
      <RNText style={styles.title}>{t('login.title')}</RNText>
      <RNText style={styles.subtitle}>{t('login.subtitle')}</RNText>
      <Controller control={control} name="username" rules={{ required: true }} render={({ field: { value, onChange, onBlur } }) => (
        <TextInput label={t('login.user')} value={value} onChangeText={onChange} onBlur={() => { onBlur(); handleQueryPhone(); }} style={styles.input} />
      )} />
      <Controller control={control} name="password" rules={{ required: true }} render={({ field: { value, onChange } }) => (
        <TextInput
          label={t('login.password')}
          value={value}
          onChangeText={onChange}
          secureTextEntry={!showPswd}
          style={styles.input}
          right={<TextInput.Icon icon={(props) => (<MaterialDesignIcons name={showPswd ? 'eye' : 'eye-off'} size={24} color={props.color} />)} onPress={() => setShowPswd(v => !v)} />}
        />
      )} />
      <Controller control={control} name="phone" render={({ field: { value } }) => (
        <TextInput label={t('login.phone')} value={value} editable={false} style={styles.input} />
      )} />
      <View style={styles.row}>
        <Controller control={control} name="code" render={({ field: { value, onChange } }) => (
          <TextInput label={t('login.code')} value={value} onChangeText={onChange} style={[styles.input, { flex: 1 }]} />
        )} />
        <Button mode="contained" style={styles.codeBtn} disabled={countdown > 0} onPress={getCode}>{tips}</Button>
      </View>
      <Button mode="contained" loading={loading} onPress={handleSubmit(onLogin)}>{t('login.loginBtn')}</Button>
      {/* <TouchableOpacity onPress={() => navigation.navigate('ForgetPassword', { username: username || null })}>
        <Text style={styles.forget}>{t('login.forgetPassword')}</Text>
      </TouchableOpacity> */}
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, padding: 16, justifyContent: 'center' },
  modalBox: { alignSelf: 'center', backgroundColor: 'white', padding: 16, borderRadius: 12, alignItems: 'center' },
  bg: { position: 'absolute', top: 0, bottom: 0, left: 0, right: 0, width: '100vw', height: '100vh' },
  header: { position: 'absolute', top: 40, right: 20, zIndex: 1 },
  logo: { alignSelf: 'center', width: 159, height: 80, marginBottom: 12 },
  title: { textAlign: 'center', fontSize: 20, fontWeight: 'bold', color: '#000' },
  subtitle: { textAlign: 'center', fontSize: 20, fontWeight: 'bold', color: '#000', marginBottom: 16 },
  input: { marginBottom: 12 },
  row: { flexDirection: 'row', alignItems: 'center' },
  codeBtn: { marginLeft: 8, height: 48, justifyContent: 'center' },
  forget: { textAlign: 'right', padding: 8, color: '#fff' },
  toggle: { textAlign: 'right', marginBottom: 8 }
});
