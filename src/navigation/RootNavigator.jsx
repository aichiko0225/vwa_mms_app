import React, { useEffect, useState } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { View, ActivityIndicator } from 'react-native';
import LoginPage from '../pages/login/LoginPage.jsx';
import HomeScreen from '../pages/HomeScreen.jsx';
import ForgetPasswordPage from '../pages/login/ForgetPasswordPage.jsx';
import LoginErrorPage from '../pages/login/ErrorPage.jsx';
import TasksScreen from '../pages/tasks/TasksScreen.jsx';
import WebViewPage from '../pages/webview/WebViewPage.jsx';
import AboutPage from '../pages/user/AboutPage.jsx';
import UpdatePasswordPage from '../pages/user/UpdatePasswordPage.jsx';
import { useAuthStore } from '../stores/auth';

/**
 * @typedef {Object} RootStackParamList
 * @property {undefined} Login
 * @property {undefined} Home
 */

const Stack = createNativeStackNavigator();

/**
 * 根路由容器，根据认证状态切换登录与首页
 * @returns {JSX.Element}
 */
export default function RootNavigator() {
  const token = useAuthStore(s => s.token);
  const [booting, setBooting] = useState(true);

  useEffect(() => {
    const p = useAuthStore.persist;
    if (p && typeof p.hasHydrated === 'function' && p.hasHydrated()) {
      setBooting(false);
      return;
    }
    let unsub;
    if (p && typeof p.onFinishHydration === 'function') {
      unsub = p.onFinishHydration(() => setBooting(false));
    } else {
      setBooting(false);
    }
    return () => { if (typeof unsub === 'function') { try { unsub(); } catch { } } };
  }, []);
  
  if (booting) {
    return (
      <NavigationContainer>
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
          <ActivityIndicator size="large" />
        </View>
      </NavigationContainer>
    );
  }

  return (
    <NavigationContainer>
      {token ? (
        <Stack.Navigator initialRouteName='Home' screenOptions={{ headerShown: true, statusBarTranslucent: true, statusBarColor: 'transparent', animation: 'none' }}>
          <Stack.Screen name="Home" component={HomeScreen} options={{ title: 'Home', headerShown: false }} />
          <Stack.Screen name="Tasks" component={TasksScreen} options={{ title: 'Tasks' }} />
          <Stack.Screen name="WebView" component={WebViewPage} options={{ title: 'H5' }} />
          <Stack.Screen name="About" component={AboutPage} options={{ title: 'About' }} />
          <Stack.Screen name="UpdatePassword" component={UpdatePasswordPage} options={{ title: 'Update Password' }} />
        </Stack.Navigator>
      ) : (
        <Stack.Navigator screenOptions={{ animation: 'none' }}>
          <Stack.Screen name="Login" component={LoginPage} options={{ headerShown: false, statusBarTranslucent: true, statusBarColor: 'transparent', statusBarStyle: 'light' }} />
          <Stack.Screen name="ForgetPassword" component={ForgetPasswordPage} options={{ headerShown: true, title: 'Forget Password', headerStyle: { backgroundColor: '#FFFFFF' }, headerShadowVisible: false, statusBarTranslucent: true, statusBarColor: '#FFFFFF', statusBarStyle: 'dark' }} />
          <Stack.Screen name="LoginError" component={LoginErrorPage} options={{ headerShown: true, title: 'Error', headerStyle: { backgroundColor: '#FFFFFF' }, headerShadowVisible: false, statusBarTranslucent: true, statusBarColor: '#FFFFFF', statusBarStyle: 'dark' }} />
        </Stack.Navigator>
      )}
    </NavigationContainer>
  );
}
