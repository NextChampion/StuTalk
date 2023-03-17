import React, {memo} from 'react';
import {
  Avatar,
  Box,
  Divider,
  Heading,
  HStack,
  Pressable,
  Spacer,
  Text,
  VStack,
} from 'native-base';
import Icon from 'react-native-vector-icons/FontAwesome5';
import ServicesItem from './ServicesItem';

interface IProps {
  data: {
    avatarUrl: string;
    fullName: string;
    recentText: string;
    timeStamp: string;
  };
}

const CommunityServices = (props: IProps) => {
  //   const {data} = props;

  return (
    <Box
      borderBottomWidth="1"
      mx={4}
      mt={3}
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
      <Heading mt={2} size={'sm'}>
        社区服务
      </Heading>
      <HStack justifyContent={'space-around'} py={3} px={3}>
        <ServicesItem name="创作者中心" />
        <Divider orientation="vertical" />
        <ServicesItem name="社区身份" />
        <Divider orientation="vertical" />
        <ServicesItem name="徽章墙" />
      </HStack>
      <HStack justifyContent={'space-around'} py={3} px={3}>
        <ServicesItem name="创作者中心" />
        <Divider orientation="vertical" />
        <ServicesItem name="社区身份" />
        <Divider orientation="vertical" />
        <ServicesItem name="徽章墙" />
      </HStack>
    </Box>
  );
};

export default memo(CommunityServices);

// const styles = StyleSheet.create({});
