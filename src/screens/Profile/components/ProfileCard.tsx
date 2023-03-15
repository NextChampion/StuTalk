import React, {memo} from 'react';
import {
  Avatar,
  Box,
  Divider,
  HStack,
  Pressable,
  Spacer,
  Text,
  VStack,
} from 'native-base';
import Icon from 'react-native-vector-icons/FontAwesome5';

interface IProps {
  data: {
    avatarUrl: string;
    fullName: string;
    recentText: string;
    timeStamp: string;
  };
}

const ProfileCard = (props: IProps) => {
  const {data} = props;

  return (
    <Box
      borderBottomWidth="1"
      mx={4}
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
      <HStack space={[2, 3]} justifyContent="space-between" py={3}>
        <Avatar
          size={'lg'}
          source={{
            uri: data.avatarUrl,
          }}
          borderWidth={'1'}
          borderColor={'gray.100'}
        />
        <VStack py={1} space={'3'}>
          <Text
            _dark={{
              color: 'warmGray.50',
            }}
            color="coolGray.800"
            bold>
            {data.fullName}
          </Text>
          <Text
            color="coolGray.600"
            _dark={{
              color: 'warmGray.200',
            }}>
            {data.recentText}
          </Text>
        </VStack>
        <Spacer />
        <Icon size={10} name="caret-right" />
      </HStack>
      <HStack justifyContent={'space-around'} py={3} px={3}>
        <Pressable
          variant="ghost"
          colorScheme="gray"
          onPress={() => {
            console.log('sssss');
          }}>
          <VStack alignItems={'center'}>
            <Text bold fontSize={'lg'}>
              230
            </Text>
            <Text>好友数</Text>
          </VStack>
        </Pressable>
        <Divider orientation="vertical" />
        <Pressable
          variant="ghost"
          colorScheme="gray"
          onPress={() => {
            console.log('sssss');
          }}>
          <VStack alignItems={'center'}>
            <Text bold fontSize={'lg'}>
              230
            </Text>
            <Text>访客数</Text>
          </VStack>
        </Pressable>
        <Divider orientation="vertical" />
        <Pressable
          variant="ghost"
          colorScheme="gray"
          onPress={() => {
            console.log('sssss');
          }}>
          <VStack alignItems={'center'}>
            <Text bold fontSize={'lg'}>
              230
            </Text>
            <Text>我的内容</Text>
          </VStack>
        </Pressable>
      </HStack>
    </Box>
  );
};

export default memo(ProfileCard);

// const styles = StyleSheet.create({});
