import {StyleSheet, View} from 'react-native';
import React from 'react';
import {Box, HStack, Image, Pressable, Text} from 'native-base';
import Icon from 'react-native-vector-icons/FontAwesome5';
import Colors from '../../../../ui/Colors';
import {useNavigation} from '@react-navigation/native';

const a =
  'https://up.enterdesk.com/edpic/66/76/12/667612f89980a75e1c1c149d53620848.jpg';
const CommentFooter = props => {
  const {onInputPress} = props;
  const navigation = useNavigation();
  const onInputClick = () => {
    console.log('onInputPress');
    if (onInputPress) {
      onInputPress();
    }
    // navigation.navigate('Input');
  };
  return (
    <Box
      marginBottom={'34px'}
      px={3}
      alignItems={'center'}
      pt={2}
      borderTopWidth={StyleSheet.hairlineWidth}
      borderColor={Colors.indigo[200]}>
      <HStack>
        <Image rounded={'2xl'} source={{uri: a}} w={30} h={30} alt="" />
        <Pressable onPress={onInputClick} flex={1}>
          <HStack
            rounded={'xl'}
            flex={1}
            ml={2}
            alignItems={'center'}
            px={2}
            backgroundColor={'indigo.100'}>
            <Icon size={16} name="edit" color={Colors.gray[400]} />
            <Text ml={2} color={'gray.400'}>
              请输入要评价的内容
            </Text>
          </HStack>
        </Pressable>
      </HStack>
    </Box>
  );
};

export default CommentFooter;
