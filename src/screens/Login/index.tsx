import {StyleSheet, View} from 'react-native';
import React from 'react';
import {dispatch} from '../../redux';
import PageContainer from '../../components/PageContainer';
import Logo from '../../components/Logo';
import StuInput from '../../components/StuInput';
import StuButton from '../../components/StuButton';

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
        <StuInput placeholder="请输入账号" />
        <StuInput style={styles.pswInput} placeholder="请输入密码" />
        <View style={styles.buttonContainer}>
          <StuButton title="登录" onPress={handleLogin} />
          <StuButton title="注册" onPress={handleRegister} />
        </View>
        <View style={styles.forgetPsw}>
          <StuButton title="忘记密码" onPress={onForgetPasswordPress} />
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
  pswInput: {
    marginTop: 10,
  },
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
