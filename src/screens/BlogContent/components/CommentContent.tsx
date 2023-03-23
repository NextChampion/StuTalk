import React, {memo} from 'react';
import {
  Avatar,
  Box,
  Button,
  HStack,
  Image,
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
  type?: 'main' | 'sub';
}

const a = {
  cmt: [
    {
      id: 106069528,
      ip_loc: '上海',
      is_company_complaint: 0,
      is_feed_author: false,
      is_unwill: 0,
      likes: 0,
      mylike: 0,
      options: [Array],
      rt: '是吗？你l几？至少我当初体感很严格很专业',
      ru: [Object],
      shareable: 1,
      t: '是吗？你l几？至少我当初体感很严格很专业',
      time_str: '7小时前',
      u: [Object],
    },
    {
      id: 106070180,
      ip_loc: '广东',
      is_company_complaint: 0,
      is_feed_author: false,
      is_unwill: 0,
      likes: 11,
      mylike: 0,
      options: [Array],
      rt: '查的到社保才知道，如果以前公司不给社保是查不到的，销售而已，又不是什么关键岗位',
      shareable: 1,
      t: '查的到社保才知道，如果以前公司不给社保是查不到的，销售而已，又不是什么关键岗位',
      time_str: '6小时前',
      u: [Object],
    },
  ],
  id: 106067938,
  ip_loc: '上海',
  is_company_complaint: 0,
  is_feed_author: false,
  is_unwill: 0,
  likes: 95,
  mylike: 0,
  n: 10,
  options: [
    {target: '', text: '不友善评论'},
    {target: '', text: '复制'},
    {
      target: 'taoumaimai://complain?type=6&complain_id=106067938',
      text: '举报',
    },
  ],
  rt: '首先你这不叫诚实。大厂的背调都很严格很深入，你优化过的简历都会被调查出来，顶多算个自首情节',
  shareable: 1,
  t: '首先你这不叫诚实。大厂的背调都很严格很深入，你优化过的简历都会被调查出来，顶多算个自首情节',
  time_str: '7小时前',
  u: {
    avatar: 'https://i9.taou.com/maimai/p/28220/9207_6_21UYvXOp25MHfsp0',
    compos: '',
    empid: 'mdiWYEbBW',
    id: '',
    is_anony: 1,
    judge: 0,
    mmid: '',
    name: '饭桶本桶',
    position_judge: 0,
    profile_type: 2,
  },
};

const CommentContent = (props: IProps) => {
  const {data, onPress, type = 'main'} = props;
  const isMain = type === 'main';
  const {u, likes, ip_loc, time_str, rt, ru, is_feed_author} = data;
  console.log('ru:', ru);

  const {avatar, name, compos, medal_info} = u;
  const onClick = () => {
    if (onPress) {
      onPress(data);
    }
  };

  const renderUndernameContent = () => {
    if (!isMain) {
      return null;
    }
    if (!compos) {
      return null;
    }
    return (
      <Text
        color="coolGray.600"
        _dark={{
          color: 'warmGray.200',
        }}
        fontSize={12}>
        {compos}
      </Text>
    );
  };

  const renderCommentContent = () => {
    if (ru && ru.name) {
      return (
        <Text>
          回复<Text color={Colors.indigo[500]}>{ru.name}: </Text>
          {rt}
        </Text>
      );
    }
    return <Text>{rt}</Text>;
  };

  const renderMedalInfo = () => {
    if (is_feed_author) {
      return (
        <Box
          borderWidth={1}
          borderColor={Colors.indigo[500]}
          rounded={'sm'}
          alignItems={'center'}
          justifyContent={'center'}
          px={1}
          py={0}
          ml={1}>
          <Text
            _dark={{
              color: 'warmGray.50',
            }}
            color="indigo.500"
            fontSize={'2xs'}>
            {'作者'}
          </Text>
        </Box>
      );
    }

    if (medal_info && medal_info.medal_image) {
      console.log('medal_info.medal_image:', medal_info.medal_image);
      return (
        <Image
          source={{uri: medal_info.medal_image}}
          h={4}
          w={16}
          alt="Alternate Text"
          resizeMode="contain"
        />
      );
    }
  };

  return (
    <Box>
      <HStack space={[2, 3]} alignItems={'center'} py={1}>
        <Avatar
          size={isMain ? '30px' : '24px'}
          source={{
            uri: avatar,
          }}
        />
        <VStack>
          <HStack alignItems={'center'}>
            <Text
              _dark={{
                color: 'warmGray.50',
              }}
              color="coolGray.800"
              bold>
              {name}
            </Text>
            {renderMedalInfo()}
          </HStack>

          {renderUndernameContent()}
        </VStack>
      </HStack>
      <VStack ml={isMain ? 10 : 8}>
        {renderCommentContent()}
        <HStack alignItems={'center'} py={2}>
          <Text mt={2} sub color={'gray.400'}>
            {isMain ? `${time_str} 发布于 ${ip_loc}` : ip_loc}
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
                {likes}
              </Text>
            </HStack>
          </Pressable>
        </HStack>
      </VStack>
    </Box>
  );
};

export default memo(CommentContent);

// const styles = StyleSheet.create({});
