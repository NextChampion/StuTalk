import {Text, Button} from 'react-native';
import React from 'react';
import {dispatch} from '../../redux';
import PageContainer from '../components/PageContainer';

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
    <PageContainer>
      <Text>LoginScreen</Text>
      <Button title="Go to Main" onPress={handleLogin} />
    </PageContainer>
  );
}

// export default LoginScreen;
export default ForgetPasswordScreen;
