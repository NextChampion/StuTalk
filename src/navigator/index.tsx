// In App.js in a new project

import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import MainStackNavigator from './stack';

interface IProps {
  login: {
    loginStatus: boolean;
  };
}
export default function MainNavigator() {
  return (
    <NavigationContainer>
      <MainStackNavigator />
    </NavigationContainer>
  );
}
