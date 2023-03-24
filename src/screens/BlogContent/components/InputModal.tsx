import {StyleSheet} from 'react-native';
import React from 'react';
import {
  Box,
  HStack,
  Image,
  Input,
  KeyboardAvoidingView,
  Modal,
} from 'native-base';

const a =
  'https://up.enterdesk.com/edpic/66/76/12/667612f89980a75e1c1c149d53620848.jpg';

const InputModal = props => {
  const {isOpen, onClosePress} = props;
  return (
    <Modal
      isOpen={isOpen}
      width={'100%'}
      onClose={() => {
        console.log('onClose');
        if (onClosePress) {
          onClosePress();
        }
      }}>
      <Modal.Content
        width={'100%'}
        height={'50%'}
        marginBottom={'34px'}
        mt={'auto'}
        // style={{
        //   marginBottom: 0,
        //   marginTop: 'auto',
        // }}
        backgroundColor={'white'}>
        <Modal.CloseButton />
        <Modal.Header>Contact Us</Modal.Header>
        <HStack>
          <Image rounded={'2xl'} source={{uri: a}} w={30} h={30} alt="" />
          <Input
            rounded={'xl'}
            flex={1}
            ml={2}
            placeholder="请输入你要评论的内容"
          />
        </HStack>
      </Modal.Content>
    </Modal>
  );
};

export default InputModal;

const styles = StyleSheet.create({});
