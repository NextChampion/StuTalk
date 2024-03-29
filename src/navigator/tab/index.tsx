import * as React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Icon from 'react-native-vector-icons/FontAwesome';
import {Text} from 'native-base';

import HomeScreen from '../../screens/HomeTab/Home';
import ProfileScreen from '../../screens/MineTab/Profile';
import ContactsScreen from '../../screens/ContractsTab/Contacts';
import MessagesScreen from '../../screens/MessagesTab/Messages';

const Tab = createBottomTabNavigator();

function TabNavigator() {
  return (
    <Tab.Navigator
      screenOptions={{
        tabBarActiveTintColor: '#6366f1',
      }}>
      <Tab.Screen
        name="Home"
        component={HomeScreen}
        options={{
          tabBarIcon: ({color}) => {
            return <Icon color={color} size={26} name={'home'} />;
          },
          tabBarLabel: ({color}) => {
            return (
              <Text color={color} fontSize="xs">
                首页
              </Text>
            );
          },
          headerShown: false,
        }}
      />
      <Tab.Screen
        name="Contacts"
        component={ContactsScreen}
        options={{
          tabBarIcon: ({color}) => {
            return <Icon color={color} size={20} name={'users'} />;
          },
          tabBarLabel: ({color}) => {
            return (
              <Text color={color} fontSize="xs">
                人脉
              </Text>
            );
          },
          headerShown: false,
        }}
      />
      <Tab.Screen
        name="Messages"
        component={MessagesScreen}
        options={{
          tabBarIcon: ({color}) => {
            return <Icon color={color} size={26} name={'comments'} />;
          },
          tabBarLabel: ({color}) => {
            return (
              <Text color={color} fontSize="xs">
                消息
              </Text>
            );
          },
          headerShown: false,
        }}
      />
      <Tab.Screen
        name="Profile"
        component={ProfileScreen}
        options={{
          tabBarIcon: ({color}) => {
            return <Icon color={color} size={26} name={'user'} />;
          },
          tabBarLabel: ({color}) => {
            return (
              <Text color={color} fontSize="xs">
                我的
              </Text>
            );
          },
          headerShown: false,
        }}
      />
    </Tab.Navigator>
  );
}

export default TabNavigator;
