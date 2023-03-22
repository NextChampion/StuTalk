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

interface IProps {
  data: BlogContent;
  onPress?: (data: BlogContent) => void;
  type?: 'list' | 'detail';
}

const BlogItem = (props: IProps) => {
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
        {data.timeStamp}
      </Text>
    );
  };

  return (
    <Pressable onPress={onClick}>
      <Box
        borderBottomWidth={type === 'list' ? '1' : '0'}
        //   _dark={{
        //     borderColor: 'muted.50',
        //   }}
        mx={type === 'list' ? 3 : 0}
        mb={3}
        rounded="lg"
        overflow="hidden"
        borderColor="coolGray.200"
        borderWidth={type === 'list' ? '1' : '0'}
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
          <HStack space={[2, 3]} justifyContent="space-between" py={2}>
            <Avatar
              size="48px"
              source={{
                uri: data.avatarUrl,
              }}
            />
            <VStack>
              <Text
                _dark={{
                  color: 'warmGray.50',
                }}
                color="coolGray.800"
                bold>
                {data.fullName}
              </Text>
              {renderUndernameContent()}
            </VStack>
            <Spacer />
            {renderRightTop()}
          </HStack>
          <Text bold>Bold</Text>
          <Text italic>Italic</Text>
          <Text underline>Underline</Text>
          <Text
            highlight
            _dark={{
              color: 'coolgray.800',
            }}>
            Highlighted
          </Text>
          <Text>
            H<Text sub>2</Text>O
          </Text>
          <Text underline>Underline</Text>
          <Text strikeThrough>StrikeThrough</Text>
          <Text bold italic underline>
            Bold, Italic & Underline
          </Text>
          {type === 'detail' ? (
            <Text mt={2} sub color={'gray.400'}>
              发布于 上海
            </Text>
          ) : null}
        </VStack>
        <HStack space={3} justifyContent="space-between">
          <Button
            variant="ghost"
            colorScheme="gray"
            leftIcon={<Icon name="share-square" size={14} color={'gray'} />}>
            分享
          </Button>
          <Button
            variant="ghost"
            colorScheme="gray"
            leftIcon={<Icon name="comment-dots" size={14} color={'gray'} />}>
            评论
          </Button>
          <Button
            variant="ghost"
            colorScheme="gray"
            leftIcon={<Icon name="thumbs-up" size={14} color={'gray'} />}>
            点赞
          </Button>
        </HStack>
      </Box>
    </Pressable>
  );
};

export default memo(BlogItem);

// const styles = StyleSheet.create({});
