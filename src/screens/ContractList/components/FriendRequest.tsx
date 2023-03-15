import React, {memo} from 'react';
import {
  Avatar,
  Box,
  Button,
  Divider,
  HStack,
  Pressable,
  Text,
  VStack,
} from 'native-base';
import Icon from 'react-native-vector-icons/FontAwesome5';
import Colors from '../../../ui/Colors';

interface IProps {
  data: {
    avatarUrl: string;
    fullName: string;
    recentText: string;
    timeStamp: string;
  };
}

const FirendRequest = (props: IProps) => {
  return (
    <Box
      borderBottomWidth="1"
      mx={4}
      mt={2}
      rounded="lg"
      overflow="hidden"
      borderColor="coolGray.200"
      borderWidth="1"
      _dark={{
        borderColor: 'coolGray.600',
        backgroundColor: 'gray.700',
      }}
      _web={{
        shadow: 2,
        borderWidth: 0,
      }}
      _light={{
        backgroundColor: 'gray.50',
      }}
      pl="4"
      pr={['4', '5']}>
      <HStack py={2} justifyContent={'space-between'}>
        <Text bold>待处理请求</Text>
        <HStack alignItems={'center'}>
          <Text mr={2} color={'gray.400'}>
            新请求
          </Text>
          <Icon size={10} name="caret-right" color={Colors.gray[400]} />
        </HStack>
      </HStack>
      <HStack space={[2, 3]} py={3}>
        <Avatar
          size={'lg'}
          source={{
            uri: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80',
          }}
          borderWidth={'1'}
          borderColor={'gray.100'}
        />
        <VStack py={1}>
          <Text
            _dark={{
              color: 'warmGray.50',
            }}
            color="coolGray.800"
            bold>
            {'张三'}
          </Text>
          <Text
            color="coolGray.600"
            _dark={{
              color: 'warmGray.200',
            }}>
            {'data.recentText'}
          </Text>
        </VStack>
      </HStack>
      <HStack py={2} justifyContent={'space-around'}>
        <Button leftIcon={<Icon name="times" size={15} color={'#fff'} />}>
          忽略
        </Button>
        <Button leftIcon={<Icon name="check" size={15} color={'#fff'} />}>
          通过
        </Button>
      </HStack>
    </Box>
  );
};

export default memo(FirendRequest);

// const styles = StyleSheet.create({});
