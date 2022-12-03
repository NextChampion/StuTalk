import {View, Text, Button} from 'react-native';
import React from 'react';
import {dispatch} from '../../redux';

interface IProps {
  navigation: any;
  login: any;
}

function LoginScreen(props: IProps) {
  const {navigation} = props;
  const handleLogin = () => {
    dispatch('UPDATE_LOGIN_STATUS', true);
  };

  const handleRegister = () => {
    navigation.navigate('Register');
  };

  return (
    <View>
      <Text>LoginScreen</Text>
      <Button title="Go to Main" onPress={handleLogin} />
      <Button title="Go to Register" onPress={handleRegister} />
    </View>
  );
}

// export default LoginScreen;
export default LoginScreen;
