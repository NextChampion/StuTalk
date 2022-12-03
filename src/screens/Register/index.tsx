import {View, Text, Button} from 'react-native';
import React from 'react';
import {dispatch} from '../../redux';

function RegisterScreen() {
  const handleLogin = () => {
    dispatch('UPDATE_LOGIN_STATUS', true);
  };

  return (
    <View>
      <Text>LoginScreen</Text>
      <Button title="Go to Main" onPress={handleLogin} />
    </View>
  );
}

export default RegisterScreen;
