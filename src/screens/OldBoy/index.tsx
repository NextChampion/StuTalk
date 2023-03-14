import {StyleSheet} from 'react-native';
import React from 'react';
import ScrollableTabView from '../../components/ScrollableTabView';

import HotListScreen from '../HotList';
import RecommmendScreen from '../Recommend';
interface IProps {
  navigation: any;
  tabLabel?: string;
}

export default function OldBoyScreen() {
  return (
    <ScrollableTabView
      locked
      tabBarUnderlineStyle={styles.tabBarUnderlineStyle}
      tabBarTextStyle={styles.tabBarTextStyle}
      tabBarActiveTextColor="red">
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
