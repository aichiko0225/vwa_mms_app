import React, { useEffect } from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import MaterialDesignIcons from '@react-native-vector-icons/material-design-icons';
import HomeTab from './home/HomeTab.jsx';
import MessageTab from './messages/MessageTab.jsx';
import UserTab from './user/UserTab.jsx';
import useSystemData from '../hooks/useSystemData';
import useUserData from '../hooks/useUserData';
import { useAuthStore } from '../stores/auth';

const tabIcons = (name) => {
  const map = {
    HomeTab: 'home',
    MessageTab: 'email',
    UserTab: 'account',
  }
  return map[name];
}

const TabBarIcon = ({ name, color, size }) => (
  <MaterialDesignIcons name={name} color={color} size={size} />
);

const renderTabBarIcon = (routeName) => ({ color, size }) => (
  <TabBarIcon name={tabIcons(routeName)} color={color} size={size} />
);

const Tab = createBottomTabNavigator();

export default function HomeScreen() {
  const { userInfo, roles, refresh: refreshRoles, initialized: userReady } = useUserData();
  const user = useAuthStore(s => s.user);

  useEffect(() => {
    // 用户登录后刷新用户角色（不缓存）
    if (userReady && user && user.id) { 
      // refreshRoles(user.id).catch(() => {});
    }
  }, [userReady, user, refreshRoles]);

  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        headerShown: false,
        tabBarActiveTintColor: '#5c3ecb',
        tabBarInactiveTintColor: '#999',
        tabBarIcon: renderTabBarIcon(route.name),
      })}
    >
      <Tab.Screen name="HomeTab" component={HomeTab} options={{ tabBarLabel: 'Home' }} />
      <Tab.Screen name="MessageTab" component={MessageTab} options={{ tabBarLabel: 'Message' }} />
      <Tab.Screen name="UserTab" component={UserTab} options={{ headerShown: true, title: 'User', tabBarLabel: 'User', tabBarBadge: undefined }} />
    </Tab.Navigator>
  );
}
