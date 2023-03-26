import React, {memo} from 'react';
import {
  Avatar,
  Badge,
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
          <Text mr={1} color={'gray.400'} fontSize={'xs'}>
            新请求
          </Text>
          <Badge
            mr={1}
            colorScheme="danger"
            rounded="full"
            variant="solid"
            height={'14px'}
            py={0}
            px={1}
            _text={{
              fontSize: 8,
            }}>
            2
          </Badge>
          <Icon size={10} name="caret-right" color={Colors.gray[400]} />
        </HStack>
      </HStack>
      <HStack space={[2, 3]} pb={3} alignItems={'center'}>
        <Avatar
          size={'md'}
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
          <HStack>
            <Text
              color="coolGray.600"
              fontSize={'xs'}
              _dark={{
                color: 'warmGray.200',
              }}>
              {'成都云河企业管理咨询有限公司'}
            </Text>
            <Text
              color="coolGray.600"
              ml={1}
              fontSize={'xs'}
              _dark={{
                color: 'warmGray.200',
              }}>
              {'猎头顾问'}
            </Text>
          </HStack>
          <HStack>
            <Text
              color="coolGray.600"
              fontSize={'2xs'}
              _dark={{
                color: 'warmGray.200',
              }}>
              {'有超过1000条人脉'}
            </Text>
            <Divider orientation="vertical" mx={1} />
            <Text
              color="coolGray.600"
              fontSize={'2xs'}
              _dark={{
                color: 'warmGray.200',
              }}>
              {'认识186位企业高管'}
            </Text>
          </HStack>
        </VStack>
      </HStack>
      <HStack py={2} justifyContent={'space-around'}>
        <Button
          size={'xs'}
          height={'8'}
          backgroundColor={'gray.200'}
          _text={{
            color: Colors.gray[700],
          }}
          leftIcon={<Icon name="times" size={12} color={Colors.gray[700]} />}>
          忽略
        </Button>
        <Button
          size={'xs'}
          height={'8'}
          colorScheme={'indigo'}
          leftIcon={<Icon name="check" size={12} color={'#fff'} />}>
          通过
        </Button>
      </HStack>
    </Box>
  );
};

export default memo(FirendRequest);

// const styles = StyleSheet.create({});
