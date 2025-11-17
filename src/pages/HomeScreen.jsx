import React from 'react';
import { View } from 'react-native';
import { Button, Text } from 'react-native-paper';
import { useAuthStore } from '../stores/auth';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import MaterialDesignIcons from '@react-native-vector-icons/material-design-icons';
import HomeTab from './home/HomeTab.jsx';
import MessageTab from './messages/MessageTab.jsx';
import UserTab from './user/UserTab.jsx';

/**
 * 首页：展示并支持退出登录
 * @returns {JSX.Element}
 */
const Tab = createBottomTabNavigator();

export default function HomeScreen() {
  const logout = useAuthStore(s => s.logout);
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        headerShown: false,
        tabBarActiveTintColor: '#5c3ecb',
        tabBarInactiveTintColor: '#999',
        tabBarIcon: ({ color, size }) => {
          const name = route.name === 'Home' ? 'home' : route.name === 'Message' ? 'email' : 'account';
          return <MaterialDesignIcons name={name} color={color} size={size} />;
        },
      })}
    >
      <Tab.Screen name="Home" component={HomeTab} />
      <Tab.Screen name="Message" component={MessageTab} />
      <Tab.Screen name="User" component={UserTab} options={{
        // 暂时提供一个退出入口，示例用
        tabBarBadge: undefined,
      }} />
    </Tab.Navigator>
  );
}