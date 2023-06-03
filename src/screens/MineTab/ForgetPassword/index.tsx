import React, {FC} from 'react';
import {
  Box,
  Button,
  Center,
  FormControl,
  Heading,
  Input,
  VStack,
} from 'native-base';
import {dispatch} from '../../../redux';
import PageContainer from '../../../components/PageContainer';

interface IProps {
  navigation: any;
  login: any;
}

const ForgetPasswordScreen: FC<IProps> = () => {
  const handleLogin = () => {
    dispatch('UPDATE_LOGIN_STATUS', true);
  };

  return (
    <PageContainer>
      <Center w="100%">
        <Box safeArea p="2" py="8" w="90%" maxW="290">
          <Heading
            size="lg"
            fontWeight="600"
            color="coolGray.800"
            _dark={{
              color: 'warmGray.50',
            }}>
            Welcome
          </Heading>
          <Heading
            mt="1"
            _dark={{
              color: 'warmGray.200',
            }}
            color="coolGray.600"
            fontWeight="medium"
            size="xs">
            Sign in to continue!
          </Heading>

          <VStack space={3} mt="5">
            <FormControl>
              <FormControl.Label>Email ID</FormControl.Label>
              <Input />
            </FormControl>
            <FormControl>
              <FormControl.Label>Password</FormControl.Label>
              <Input type="password" />
            </FormControl>
            <Button mt="2" colorScheme="indigo" onPress={handleLogin}>
              登录
            </Button>
          </VStack>
        </Box>
      </Center>
    </PageContainer>
  );
};

// export default LoginScreen;
export default ForgetPasswordScreen as any;
