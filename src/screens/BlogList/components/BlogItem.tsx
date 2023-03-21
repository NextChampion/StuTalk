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

interface IProps {
  data: BlogContent;
  onPress?: (data: BlogContent) => void;
}

const BlogItem = (props: IProps) => {
  const {data, onPress} = props;

  const onClick = () => {
    if (onPress) {
      onPress(data);
    }
  };

  return (
    <Pressable onPress={onClick}>
      <Box
        borderBottomWidth="1"
        //   _dark={{
        //     borderColor: 'muted.50',
        //   }}
        style={{marginHorizontal: 10, marginBottom: 10}}
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
        //   borderColor="muted.800"
        pl="4"
        pr={['4', '5']}>
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
              <Text
                color="coolGray.600"
                _dark={{
                  color: 'warmGray.200',
                }}>
                {data.recentText}
              </Text>
            </VStack>
            <Spacer />
            <Text
              fontSize="xs"
              _dark={{
                color: 'warmGray.50',
              }}
              color="coolGray.800"
              alignSelf="flex-start">
              {data.timeStamp}
            </Text>
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
        </VStack>
        <HStack space={3} justifyContent="space-between">
          <Button
            variant="ghost"
            colorScheme="gray"
            leftIcon={<Icon name="share-square" size={14} color={'gray'} />}>
            Upload
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
