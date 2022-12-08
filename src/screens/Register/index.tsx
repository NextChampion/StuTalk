import {Text, Button} from 'react-native';
import React from 'react';
import {dispatch} from '../../redux';
import PageContainer from '../../components/PageContainer';

function RegisterScreen() {
  const handleLogin = () => {
    dispatch('UPDATE_LOGIN_STATUS', true);
  };

  return (
    <PageContainer>
      <Text>LoginScreen</Text>
      <Button title="Go to Main" onPress={handleLogin} />
    </PageContainer>
  );
}

export default RegisterScreen;
