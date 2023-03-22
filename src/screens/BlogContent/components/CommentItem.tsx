import React, {memo} from 'react';
import {
  Avatar,
  Box,
  Button,
  HStack,
  Pressable,
  Spacer,
  Text,
  VStack,
} from 'native-base';
import Icon from 'react-native-vector-icons/FontAwesome5';
import {BlogContent} from '../../../types';
import Colors from '../../../ui/Colors';
import {StyleSheet} from 'react-native';

interface IProps {
  data: BlogContent;
  onPress?: (data: BlogContent) => void;
  type?: 'list' | 'detail';
}

const CommmentItem = (props: IProps) => {
  const {data, onPress, type = 'list'} = props;

  const onClick = () => {
    if (onPress) {
      onPress(data);
    }
  };

  const renderRightTop = () => {
    if (type === 'list') {
      return (
        <Text
          fontSize="xs"
          _dark={{
            color: 'warmGray.50',
          }}
          color="coolGray.800"
          alignSelf="flex-start">
          {data.timeStamp}
        </Text>
      );
    }
    return (
      <Button colorScheme={'indigo'} size={'xs'} h={'8'}>
        关注
      </Button>
    );
  };

  const renderUndernameContent = () => {
    // if (type === 'list') {
    //   return (
    //     <Text
    //       color="coolGray.600"
    //       _dark={{
    //         color: 'warmGray.200',
    //       }}>
    //       {data.recentText}
    //     </Text>
    //   );
    // }
    return (
      <Text
        color="coolGray.600"
        _dark={{
          color: 'warmGray.200',
        }}>
        {'data.timeStamp'}
      </Text>
    );
  };

  return (
    <Box
      //   _dark={{
      //     borderColor: 'muted.50',
      //   }}
      overflow="hidden"
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
      //   borderColor="muted.800"
      pl="4"
      pr={4}>
      <VStack>
        <HStack
          space={[2, 3]}
          justifyContent="space-between"
          alignItems={'center'}
          py={1}>
          <Avatar
            size="30px"
            source={{
              uri: 'https://img2.baidu.com/it/u=3202947311,1179654885&fm=253&fmt=auto&app=138&f=JPEG?w=800&h=500',
            }}
          />
          <VStack>
            <Text
              _dark={{
                color: 'warmGray.50',
              }}
              color="coolGray.800"
              bold>
              {'data.fullName'}
            </Text>
            {renderUndernameContent()}
          </VStack>
          <Spacer />
          {renderRightTop()}
        </HStack>
        <VStack
          ml={10}
          borderColor="coolGray.200"
          borderBottomWidth={StyleSheet.hairlineWidth}>
          <Text bold>Bold</Text>
          <Text>
            H<Text sub>2</Text>O
          </Text>
          <Text underline>Underline</Text>
          <HStack alignItems={'center'} py={2}>
            <Text mt={2} sub color={'gray.400'}>
              发布于 上海
            </Text>
            <Spacer />

            <Pressable>
              <Icon name="share-square" size={14} color={'gray'} />
            </Pressable>
            <Pressable pl={10}>
              <Icon name="comment-dots" size={14} color={'gray'} />
            </Pressable>
            <Pressable pl={10}>
              <HStack alignItems={'center'}>
                <Icon name="thumbs-up" size={14} color={'gray'} />
                <Text ml={1} color={Colors.gray[500]}>
                  3
                </Text>
              </HStack>
            </Pressable>
          </HStack>
        </VStack>
      </VStack>
    </Box>
  );
};

export default memo(CommmentItem);

// const styles = StyleSheet.create({});
