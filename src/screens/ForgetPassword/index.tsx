import {View, Text, Button} from 'react-native';
import React from 'react';
import {dispatch} from '../../redux';

interface IProps {
  navigation: any;
  login: any;
}

function ForgetPasswordScreen(props: IProps) {
  const {login} = props;
  const handleLogin = () => {
    const loginStatus = login.get('loginStatus');
    console.log('loginStatus:', loginStatus);
    dispatch('UPDATE_LOGIN_STATUS', true);
  };

  return (
    <View>
      <Text>LoginScreen</Text>
      <Button title="Go to Main" onPress={handleLogin} />
    </View>
  );
}

// export default LoginScreen;
export default ForgetPasswordScreen;
