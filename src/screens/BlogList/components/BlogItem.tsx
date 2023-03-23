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
  data: any;
  onPress?: (data: BlogContent) => void;
  type?: 'list' | 'detail';
}

const a = {
  common: {
    action_bar: {
      comment_cnt: 150,
      like_cnt: 82,
      like_style: 0,
      liked: 0,
      share_cnt: 0,
      shared: 0,
    },
  },
  config: {
    can_collect: 1,
    can_delete: 0,
    detail_use_rn: 1,
    exclude_cache: 0,
    exclude_detail: 0,
    is_collected: 0,
    my_feed: 0,
    shareable: 1,
    show_action_bar: 1,
    target:
      'taoumaimai://feeddetail?efid=fs75Vbc7nK6-p-CNMIaRpw&id=1779015052&use_cache=1&use_rn=1',
  },
  efid: 'fs75Vbc7nK6-p-CNMIaRpw',
  feed_type: 201,
  gfid: 'e_1779015052',
  hash: '1679497699361865446',
  id: '1779015052',
  style1: {
    copy_text:
      '关于美团的背调，大家真的要小心了，诚实换来的是不通过 美团大客户销售offer邮件给过来，我接受了 进入背调前，美团要求哪怕一个月的经历也要明确提供，否则背调无法通过，要坦诚，我信了 于是把两三个月的那种工作经历也都在背调前悉数补充告知了，其实并没有违法乱纪的恶性过往，一段是刚毕业在其他城市的，两段是很短的那种，也都很遥远了 结果告诉我，由于我主动补充的经历内容，和简历不一致，背调不通过，offer收回， 主动告知的内容都能被判定成隐瞒？既然如此我当初干嘛要这么实诚呢',
    header: {
      avatar_card: [Object],
      circle_subtitle:
        '<dref t=14 v=https%3A%2F%2Fmaimai.cn%2Fprofile%2Fdetail%3Fdstu%3D238597121%26trackable_token%3DYZSCNQGVAiN6C5LndgIz3qkjCb7eIh1w4e2t8RxtlKtee11pTdPmU4U39eNfVMpz j=0 f=12 cs=#afb1bc>张湘皓</dref><dref t=14 v=https%3A%2F%2Fmaimai.cn%2Fprofile%2Fdetail%3Fdstu%3D238597121%26trackable_token%3DYZSCNQGVAiN6C5LndgIz3qkjCb7eIh1w4e2t8RxtlKtee11pTdPmU4U39eNfVMpz judge=0 position_judge=0 f=12 cs=#afb1bc> · 30秒懂车</dref>',
      desc: '<dref t=2 judge=0 position_judge=0 f=12 cs=#6E727A>30秒懂车</dref>',
      icon: 'https://i9.taou.com/maimai/p/33373/1743_1_479GXA5GFlpRCynz-a160',
      mem_info: [Object],
      target:
        'https://maimai.cn/profile/detail?dstu=238597121&trackable_token=YZSCNQGVAiN6C5LndgIz3qkjCb7eIh1w4e2t8RxtlKtee11pTdPmU4U39eNfVMpz',
      time_subtitle: '19小时前',
      title:
        '<dref t=14 v=https%3A%2F%2Fmaimai.cn%2Fprofile%2Fdetail%3Fdstu%3D238597121%26trackable_token%3DYZSCNQGVAiN6C5LndgIz3qkjCb7eIh1w4e2t8RxtlKtee11pTdPmU4U39eNfVMpz j=0 mf=14 f=16 cs=#15161F>张湘皓</dref>',
    },
    hot_type_card: {color: '#FF001F', text: '爆'},
    imgs: [[Object]],
    ip_loc: '上海',
    link_card: {
      desc: '10+行业供你选择',
      icon: 'https://i9.taou.com/maimai/p/33207/4084_6_Q2bvULL7YXtndG',
      name: '职得去涨薪好机会',
      target: 'https://maimai.cn/ent/activity2/22/zt/19/?fr=unioncard',
      type: 7,
    },
    publish_time: 1679497700,
    text: '关于美团的背调，大家真的要小心了，诚实换来的是不通过 美团大客户销售offer邮件给过来，我接受了 进入背调前，美团要求哪怕一个月的经历也要明确提供，否则背调无法通过，要坦诚，我信了 于是把两三个月的那种工作经历也都在背调前悉数补充告知了，其实并没有违法乱纪的恶性过往，一段是刚毕业在其他城市的，两段是很短的那种，也都很遥远了 结果告诉我，由于我主动补充的经历内容，和简历不一致，背调不通过，offer收回， 主动告知的内容都能被判定成隐瞒？既然如此我当初干嘛要这么实诚呢',
  },
};

const b = {
  id: '31938351',
  config: {
    target:
      'taoumaimai://rct?component=GossipDetailPage&egid=43f2e0ac88954b3ba268fb44b2c8f741&fr=&id=31938351',
    show_action_bar: 1,
    is_collected: 0,
    exclude_detail: 0,
    can_delete: 0,
    can_collect: 1,
    detail_use_rn: 1,
    my_feed: 0,
    exclude_cache: 0,
    shareable: 1,
  },
  common: {
    action_bar: {
      like_cnt: 120,
      share_cnt: 137,
      comment_cnt: 171,
      shared: 0,
      liked: 0,
      like_style: 0,
    },
  },
  style35: {
    id: '31938351',
    egid: '43f2e0ac88954b3ba268fb44b2c8f741',
    mmid: '7OdSwutIeFA',
    hash: '167953467510482638',
    author_info: {
      name: '\u5361\u7433\u5728\u70df\u53f0\u804a\u516b\u5366',
      avatar: 'https://i9.taou.com/maimai/p/28220/9174_6_L1fksauCcCUAXV',
      compos: '\u963f\u91cc\u5df4\u5df4\u96c6\u56e2\u5458\u5de5',
      show_community_identity: 1,
      judge: 1,
      nametype: 3,
    },
    time: '8\u5c0f\u65f6\u524d',
    text: '\u542c\u8bf4\u5fae\u4fe1\u4e00\u4e2a\u6821\u62db\u751f\u628aleader\u6253\u4e86\uff0c\u6709\u4e86\u89e3\u5177\u4f53\u60c5\u51b5\u7684\u5417\uff1f',
    target:
      'taoumaimai://rct?component=GossipDetailPage&egid=43f2e0ac88954b3ba268fb44b2c8f741&fr=&id=31938351',
    pics: [
      {
        url: 'https://i9.taou.com/maimai/p/33567/9109_73_76yyqnz67CHzN8BT',
        x: 1170,
        y: 2532,
        turl: 'https://i9.taou.com/maimai/p/33567/9109_73_76yyqnz67CHzN8BT?imageView2/0/w/1080/h/360',
        tx: 360,
        ty: 779,
      },
      {
        url: 'https://i9.taou.com/maimai/p/33567/9141_73_t6Zy5ng6mCjz58',
        x: 886,
        y: 1920,
        turl: 'https://i9.taou.com/maimai/p/33567/9141_73_t6Zy5ng6mCjz58?imageView2/0/w/1080/h/360',
        tx: 360,
        ty: 780,
      },
    ],
    shareable: 1,
    hated: 0,
    spreads: 137,
    cmts: 171,
    shares: 0,
    likes: 120,
    like_style: 0,
    mylike: 0,
    views: 0,
    has_comments: false,
    company_judge: 0,
    realname: 0,
    followed_show: 1,
    followed: 0,
    is_freeze: 0,
    is_company_clar: 0,
    is_company_complaint: 0,
    last_modify_time: '13\u5206\u949f\u524d',
    empid: 'g48PfLA9f',
    hidden_follow_gossip: 0,
    relation: 0,
    publish_time: 1679534676,
    topic_count: 0,
    attitude_text: '\u6709\u5e2e\u52a93',
    show_follow_btn: 0,
    profile_type: 2,
    guid: '',
    ip_loc: '\u6d59\u6c5f',
    can_share_to_circles: 1,
    hot_type_card: {text: '\u7206', color: '#FF001F'},
  },
};
const BlogItem = (props: IProps) => {
  const {data, onPress, type = 'list'} = props;
  // console.log('data:', data);

  const {style1, style35, common} = data;
  const {text} = style1 || style35 || {};
  const {header, imgs} = style1 || {};
  const {title, icon, desc, time_subtitle} = header || {};
  const {action_bar} = common || {};
  const {comment_cnt, like_cnt, share_cnt} = action_bar || {};

  const {author_info, time, pics, global_topics} = style35 || {};
  const {name, avatar, compos} = author_info || {};
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
        noOfLines={1}
        _dark={{
          color: 'warmGray.200',
        }}>
        {time_subtitle || time} · {desc || compos}
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
                uri: icon || avatar,
              }}
            />
            <VStack>
              <Text
                _dark={{
                  color: 'warmGray.50',
                }}
                color="coolGray.800"
                noOfLines={1}
                bold>
                {title || name}
              </Text>
              {renderUndernameContent()}
            </VStack>
            <Spacer />
            {renderRightTop()}
          </HStack>
          <HStack my={1}>
            {global_topics?.map(topic => (
              <HStack
                alignItems={'center'}
                backgroundColor={'indigo.100'}
                rounded={'xl'}
                px={2}
                py={0}>
                <Icon size={14} color={Colors.indigo[500]} name={'cog'} />
                <Text color={'indigo.500'} ml={1}>
                  {topic.name}
                </Text>
              </HStack>
            ))}
          </HStack>
          <Text noOfLines={type === 'list' ? 3 : 0}>{text}</Text>
          <HStack>
            {(imgs || pics)?.map(picInfo => (
              <Image
                source={{uri: picInfo.turl}}
                width={'100px'}
                height={'100px'}
                ml={1}
                borderWidth={StyleSheet.hairlineWidth}
                borderColor={Colors.gray[200]}
                rounded="lg"
              />
            ))}
          </HStack>
          {type === 'detail' ? (
            <Text mt={2} sub color={'gray.400'}>
              发布于 上海
            </Text>
          ) : null}
        </VStack>
        <HStack space={3} justifyContent="space-between">
          <Pressable>
            <HStack alignItems={'center'} py={2} px={3}>
              <Icon name="share-square" size={14} color={'gray'} />
              <Text ml={1} color={Colors.gray[500]}>
                {share_cnt}
              </Text>
            </HStack>
          </Pressable>
          <Pressable pl={10}>
            <HStack alignItems={'center'} py={2} px={3}>
              <Icon name="comment-dots" size={14} color={'gray'} />
              <Text ml={1} color={Colors.gray[500]}>
                {comment_cnt}
              </Text>
            </HStack>
          </Pressable>
          <Pressable pl={10}>
            <HStack alignItems={'center'} py={2} px={3}>
              <Icon name="thumbs-up" size={14} color={'gray'} />
              <Text ml={1} color={Colors.gray[500]}>
                {like_cnt}
              </Text>
            </HStack>
          </Pressable>
        </HStack>
      </Box>
    </Pressable>
  );
};

export default memo(BlogItem);

// const styles = StyleSheet.create({});
