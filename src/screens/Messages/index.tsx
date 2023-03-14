import {StyleSheet} from 'react-native';
import React from 'react';

import ScrollableTabView from '../../components/ScrollableTabView';
import OldBoyScreen from '../OldBoy';
import RecommmendScreen from '../Recommend';
import HotListScreen from '../HotList';
import MsgListScreen from '../MsgList';

interface IProps {
  navigation: any;
}

export default function MessagesScreen() {
  return (
    <ScrollableTabView
      tabBarUnderlineStyle={styles.tabBarUnderlineStyle}
      tabBarTextStyle={styles.tabBarTextStyle}
      tabBarActiveTextColor="red">
      <MsgListScreen tabLabel="校友圈" />
      <MsgListScreen tabLabel="推荐" />
      <MsgListScreen tabLabel="热榜" />
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
