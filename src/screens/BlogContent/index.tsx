import React from 'react';
// import BlogItem from './components/BlogItem';
import {StyleSheet} from 'react-native';
import BlogItem from '../BlogList/components/BlogItem';
import {NavigationScreenProp} from 'react-navigation';
import {RouteProp} from '@react-navigation/native';
import {BlogContent} from '../../types';
import {RootStackParamList} from '../../types/navigator';
import PageContainer from '../../components/PageContainer';
import NavHeader from '../../components/NavHeader';
import {Box, Button, SectionList, Text, View} from 'native-base';
import {commentList} from '../../mock/blog';
import CommmentItem from './components/CommentItem';
interface IProps {
  navigation?: NavigationScreenProp<RootStackParamList, 'BlogContent'>;
  route: RouteProp<{params: {data: BlogContent}}>;
}

const BlogContentScreen = (props: IProps) => {
  const {route} = props;
  const {data} = route.params;
  const renderRightItem = () => {
    return <Button>更多</Button>;
  };

  const renderItem = ({item}) => {
    console.log('item:', item);
    return <CommmentItem data={item} />;
  };

  const SECTIONS = [
    // {
    //   title: 'aaaa',
    //   data: [{a: 1}],
    // },
    {
      title: '100条评论',
      data: commentList.lst,
    },
  ];

  return (
    <View backgroundColor={'#FFF'}>
      <NavHeader back title="说说" rightItem={renderRightItem()} />
      <SectionList
        sections={SECTIONS}
        ListHeaderComponent={() => <BlogItem data={data} type="detail" />}
        data={commentList.lst}
        renderSectionHeader={({section: {title}}) => (
          <Box
            backgroundColor={'#FFF'}
            py={2}
            px={3}
            borderBottomWidth={StyleSheet.hairlineWidth}
            borderTopWidth={StyleSheet.hairlineWidth}
            borderColor={'gray.200'}>
            <Text bold>{title}</Text>
          </Box>
        )}
        renderItem={renderItem}
      />
    </View>
  );
};

export default BlogContentScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
