import * as React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Icon from 'react-native-vector-icons/FontAwesome';

import HomeScreen from '../../screens/Home';
import SettingsScreen from '../../screens/Settings';
import ProfileScreen from '../../screens/Profile';
import {Text} from 'native-base';

const Tab = createBottomTabNavigator();

function TabNavigator() {
  return (
    <Tab.Navigator>
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
        }}
      />
      <Tab.Screen
        name="Settings"
        component={SettingsScreen}
        options={{
          tabBarIcon: ({color}) => {
            return <Icon color={color} size={26} name={'cog'} />;
          },
          tabBarLabel: ({color}) => {
            return (
              <Text color={color} fontSize="xs">
                广场
              </Text>
            );
          },
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
        }}
      />
    </Tab.Navigator>
  );
}

export default TabNavigator;
