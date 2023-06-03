import React, {memo} from 'react';
import {Box, Button, Text, VStack} from 'native-base';
import {BlogContent} from '../../../../types';
import Colors from '../../../../ui/Colors';
import {StyleSheet} from 'react-native';
import CommentContent from './CommentContent';

interface IProps {
  data: BlogContent;
  onPress?: (data: BlogContent) => void;
  type?: 'list' | 'detail';
}

const a = {
  cmt: [
    {
      id: 105953337,
      ip_loc: '浙江',
      is_company_complaint: 0,
      is_feed_author: false,
      is_unwill: 0,
      likes: 9,
      mylike: 0,
      options: [Array],
      rt: '这种的我估计是假的，随便写的',
      shareable: 1,
      t: '这种的我估计是假的，随便写的',
      time_str: '03-18',
      u: [Object],
    },
    {
      id: 105953661,
      ip_loc: '陕西',
      is_company_complaint: 0,
      is_feed_author: false,
      is_unwill: 0,
      likes: 3,
      mylike: 0,
      options: [Array],
      rt: '你别估计，正常，业务部门提的要求离谱情况下，这是常态',
      ru: [Object],
      shareable: 1,
      t: '你别估计，正常，业务部门提的要求离谱情况下，这是常态',
      time_str: '03-18',
      u: [Object],
    },
  ],
  id: 105942596,
  ip_loc: '广东',
  is_company_complaint: 0,
  is_feed_author: false,
  is_unwill: 0,
  likes: 78,
  mylike: 0,
  n: 9,
  options: [
    {target: '', text: '不友善评论'},
    {target: '', text: '复制'},
    {
      target: 'taoumaimai://complain?type=6&complain_id=105942596',
      text: '举报',
    },
  ],
  rt: '你的职业生涯真的丰富多彩',
  shareable: 1,
  t: '你的职业生涯真的丰富多彩',
  time_str: '03-17',
  u: {
    avatar: 'https://i9.taou.com/maimai/p/28220/9183_6_9J8hsUqBjOXdzm',
    compos: '',
    empid: 'm13HxIe4J',
    id: '',
    is_anony: 1,
    judge: 0,
    mmid: '',
    name: '村民在地铁上伸懒腰',
    position_judge: 0,
    profile_type: 2,
  },
};

const CommmentItem = (props: IProps) => {
  const {data, onPress, type = 'list'} = props;
  const {u, likes, ip_loc, time_str, rt, cmt, n} = data;
  const {avatar, name} = u;
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
      <CommentContent data={data} />
      <VStack
        ml={10}
        borderColor="coolGray.200"
        borderBottomWidth={StyleSheet.hairlineWidth}>
        {cmt.map(subComment => (
          <CommentContent key={subComment.id} data={subComment} type="sub" />
        ))}
        {n > 2 ? (
          <Text ml={8} sub color={Colors.indigo[500]} py={2}>
            查看全部{n}条回复
          </Text>
        ) : null}
      </VStack>
    </Box>
  );
};

export default memo(CommmentItem);

// const styles = StyleSheet.create({});
