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
import {Button} from 'native-base';

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
  return (
    <PageContainer>
      <NavHeader back title="Profile" rightItem={renderRightItem()} />
      <BlogItem data={data} />
    </PageContainer>
  );
};

export default BlogContentScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
