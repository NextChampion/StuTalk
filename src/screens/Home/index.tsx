import {StyleSheet} from 'react-native';
import React from 'react';

import ScrollableTabView from '../../components/ScrollableTabView';
import OldBoyScreen from '../OldBoy';
import RecommmendScreen from '../Recommend';
import HotListScreen from '../HotList';

interface IProps {
  navigation: any;
}

export default function HomeScreen(props: IProps) {
  return (
    <ScrollableTabView
      tabBarUnderlineStyle={styles.tabBarUnderlineStyle}
      tabBarTextStyle={styles.tabBarTextStyle}
      tabBarActiveTextColor="red">
      <OldBoyScreen tabLabel="校友圈" />
      <RecommmendScreen tabLabel="推荐" />
      <HotListScreen tabLabel="热榜" />
    </ScrollableTabView>
  );
}

const styles = StyleSheet.create({
  tabBarUnderlineStyle: {
    backgroundColor: 'red',
    width: 100,
  },
  tabBarTextStyle: {
    fontSize: 16,
  },
});
