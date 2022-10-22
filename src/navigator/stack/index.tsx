// In App.js in a new project

import * as React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import TabNavigator from '../tab';
import ProfileScreen from '../../../screens/Profile';

const Stack = createNativeStackNavigator();

function StackNavigator() {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Home" component={TabNavigator} />
      <Stack.Screen name="Profile" component={ProfileScreen} />
    </Stack.Navigator>
  );
}

export default StackNavigator;
