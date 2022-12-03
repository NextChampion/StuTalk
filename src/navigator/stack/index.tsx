// In App.js in a new project

import * as React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {connect} from 'react-redux';
import TabNavigator from '../tab';
import ProfileScreen from '../../screens/Profile';
import LoginScreen from '../../screens/Login';
import ForgetPasswordScreen from '../../screens/ForgetPassword';
import RegisterScreen from '../../screens/Register';

const Stack = createNativeStackNavigator();

interface IProps {
  login: {
    loginStatus: boolean;
  };
}

function MainStackNavigator(props: IProps) {
  const {login} = props;
  const loginStatus = login.get('loginStatus');
  return (
    <Stack.Navigator>
      {!loginStatus ? (
        <>
          <Stack.Screen
            name="Login"
            component={LoginScreen}
            options={{presentation: 'modal', gestureDirection: 'vertical'}}
          />
          <Stack.Screen
            name="ForgetPassword"
            component={ForgetPasswordScreen}
          />
          <Stack.Screen name="Register" component={RegisterScreen} />
        </>
      ) : (
        <>
          <Stack.Screen
            name="Main"
            component={TabNavigator}
            options={{
              headerShown: false,
              presentation: 'modal',
              // gestureDirection: 'vertical-inverted',
            }}
          />
          <Stack.Screen name="Profile" component={ProfileScreen} />
        </>
      )}
    </Stack.Navigator>
  );
}

export default connect((state: any) => {
  return {login: state.login};
})(MainStackNavigator);
