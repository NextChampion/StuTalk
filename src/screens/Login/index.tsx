import {StyleSheet, View} from 'react-native';
import React from 'react';
import {dispatch} from '../../redux';
import PageContainer from '../../components/PageContainer';
import Logo from '../../components/Logo';
import {Button, Input} from 'native-base';
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

  const onForgetPasswordPress = () => {
    navigation.navigate('ForgetPassword');
  };

  return (
    <PageContainer>
      <View style={styles.logoContainer}>
        <Logo />
      </View>
      <View style={styles.content}>
        <Input placeholder="请输入账号" />
        <Input placeholder="请输入密码" />
        <View style={styles.buttonContainer}>
          <Button onPress={handleLogin}>登录</Button>
          <Button onPress={handleRegister}>注册</Button>
        </View>
        <View style={styles.forgetPsw}>
          <Button onPress={onForgetPasswordPress}>忘记密码</Button>
        </View>
      </View>
    </PageContainer>
  );
}

// export default LoginScreen;
export default LoginScreen as any;

const styles = StyleSheet.create({
  logoContainer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  content: {
    flex: 2,
    paddingHorizontal: 20,
  },
  pswInput: {},
  buttonContainer: {
    marginTop: 10,
    flexDirection: 'row',
    justifyContent: 'space-around',
  },
  forgetPsw: {
    marginTop: 10,
    alignItems: 'flex-end',
  },
});
