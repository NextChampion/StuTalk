import {StyleSheet} from 'react-native';
import React from 'react';
import ScrollableTabView from '../../components/ScrollableTabView';

import ScrollableTabBar from '../../components/ScrollableTabView/ScrollableTabBar';
import Colors from '../../ui/Colors';
import BlogListScreen from '../BlogList';
interface IProps {
  navigation?: any;
  tabLabel: string;
}

export default function RecommmendScreen(props: IProps) {
  return (
    <ScrollableTabView
      locked
      tabBarUnderlineStyle={styles.tabBarUnderlineStyle}
      tabBarTextStyle={styles.tabBarTextStyle}
      renderTabBar={() => <ScrollableTabBar style={{borderWidth: 0}} />}
      tabBarActiveTextColor={Colors.indigo[500]}>
      <BlogListScreen tabLabel="关注" />
      <BlogListScreen tabLabel="全部" />
      <BlogListScreen tabLabel="校内" />
      <BlogListScreen tabLabel="毕业季" />
      <BlogListScreen tabLabel="就业" />
      <BlogListScreen tabLabel="共创" />
    </ScrollableTabView>
  );
}
const styles = StyleSheet.create({
  tabBarUnderlineStyle: {
    backgroundColor: 'red',
    width: 100,
    height: 0,
  },
  tabBarTextStyle: {
    fontSize: 16,
  },
});
