import React, {memo} from 'react';
import {Box, Divider, HStack, Pressable, Text, VStack} from 'native-base';

interface IProps {
  data: {
    avatarUrl: string;
    fullName: string;
    recentText: string;
    timeStamp: string;
  };
}

const FirendsInfo = (props: IProps) => {
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
      <HStack py={2}>
        <Pressable
          flex={1}
          onPress={() => {
            console.log('sssss');
          }}>
          <VStack space={1}>
            <Text bold fontSize={'lg'}>
              230
            </Text>
            <Text fontSize={'xs'} color={'gray.400'}>
              好友数
            </Text>
          </VStack>
        </Pressable>
        <Divider orientation="vertical" />
        <Pressable
          flex={1}
          onPress={() => {
            console.log('sssss');
          }}>
          <VStack space={1} pl={'2'}>
            <Text bold fontSize={'lg'}>
              230
            </Text>
            <Text fontSize={'xs'} color={'gray.400'}>
              访客数
            </Text>
          </VStack>
        </Pressable>
        <Divider orientation="vertical" />
        <Pressable
          flex={1}
          onPress={() => {
            console.log('sssss');
          }}>
          <VStack space={1} pl={'2'}>
            <Text bold fontSize={'lg'}>
              230
            </Text>
            <Text fontSize={'xs'} color={'gray.400'}>
              我的内容
            </Text>
          </VStack>
        </Pressable>
      </HStack>
    </Box>
  );
};

export default memo(FirendsInfo);

// const styles = StyleSheet.create({});
