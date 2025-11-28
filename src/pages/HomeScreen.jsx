import React, { useEffect } from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import MaterialDesignIcons from '@react-native-vector-icons/material-design-icons';
import HomeTab from './home/HomeTab.jsx';
import MessageTab from './messages/MessageTab.jsx';
import UserTab from './user/UserTab.jsx';
import useSystemData from '../hooks/useSystemData';
import useUserData from '../hooks/useUserData';
import { useAuthStore } from '../stores/auth';
import logger from '../common/logger';

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

export default function HomeScreen({ route }) {
  const { systemId, systemName } = route.params;
  logger.info(`HomeScreen: systemId=${systemId}, systemName=${systemName}`);
  const { userInfo, roles, refresh: refreshRoles, initialized: userReady } = useUserData();
  const user = useAuthStore(s => s.user);
  const updateUserInfo = useAuthStore(s => s.updateUserInfo);

  useEffect(() => {
  }, [userReady, user, refreshRoles]);

  useEffect(() => {
    if (!userReady) return;
    if (!user || !userInfo || !user.id || user.id !== userInfo.id) return;
    const a = JSON.stringify(user);
    const b = JSON.stringify(userInfo);
    if (a !== b) updateUserInfo(userInfo);
  }, [userReady, userInfo, user, updateUserInfo]);

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
      <Tab.Screen name="MessageTab" component={MessageTab} options={{ headerShown: true, title: 'Message', tabBarLabel: 'Message' }} />
      <Tab.Screen name="UserTab" component={UserTab} options={{ headerShown: true, title: 'User', tabBarBadge: undefined }} />
    </Tab.Navigator>
  );
}
