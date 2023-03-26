import {StyleSheet} from 'react-native';
import React from 'react';
import {Box, HStack, Image, Input, KeyboardAvoidingView} from 'native-base';

const a =
  'https://up.enterdesk.com/edpic/66/76/12/667612f89980a75e1c1c149d53620848.jpg';
const InputScreen = () => {
  return (
    <KeyboardAvoidingView>
      <Box marginBottom={'34px'} px={3}>
        <HStack>
          <Image rounded={'2xl'} source={{uri: a}} w={30} h={30} alt="" />
          <Input
            rounded={'xl'}
            flex={1}
            ml={2}
            placeholder="请输入你要评论的内容"
          />
        </HStack>
      </Box>
    </KeyboardAvoidingView>
  );
};

export default InputScreen;

const styles = StyleSheet.create({});
