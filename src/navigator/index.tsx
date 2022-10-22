// In App.js in a new project

import * as React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import StackNavigator from './stack';

function MainNavigator() {
  return (
    <NavigationContainer>
      <StackNavigator />
    </NavigationContainer>
  );
}

export default MainNavigator;
