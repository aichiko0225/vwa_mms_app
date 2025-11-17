import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import LoginPage from '../pages/login/LoginPage.jsx';
import HomeScreen from '../pages/HomeScreen.jsx';
import ForgetPasswordPage from '../pages/login/ForgetPasswordPage.jsx';
import LoginErrorPage from '../pages/login/ErrorPage.jsx';
import TasksScreen from '../pages/tasks/TasksScreen.jsx';
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
  return (
    <NavigationContainer>
      {token ? (
        <Stack.Navigator screenOptions={{ headerShown: false, statusBarTranslucent: true, statusBarColor: 'transparent' }}>
          <Stack.Screen name="Home" component={HomeScreen} />
          <Stack.Screen name="Tasks" component={TasksScreen} options={{ headerShown: true, title: 'Tasks' }} />
        </Stack.Navigator>
      ) : (
        <Stack.Navigator>
          <Stack.Screen name="Login" component={LoginPage} options={{ headerShown: false, statusBarTranslucent: true, statusBarColor: 'transparent', statusBarStyle: 'light' }} />
          <Stack.Screen name="ForgetPassword" component={ForgetPasswordPage} options={{ headerShown: true, title: 'Forget Password', headerStyle: { backgroundColor: '#FFFFFF' }, headerShadowVisible: false, statusBarTranslucent: true, statusBarColor: '#FFFFFF', statusBarStyle: 'dark' }} />
          <Stack.Screen name="LoginError" component={LoginErrorPage} options={{ headerShown: true, title: 'Error', headerStyle: { backgroundColor: '#FFFFFF' }, headerShadowVisible: false, statusBarTranslucent: true, statusBarColor: '#FFFFFF', statusBarStyle: 'dark' }} />
        </Stack.Navigator>
      )}
    </NavigationContainer>
  );
}
