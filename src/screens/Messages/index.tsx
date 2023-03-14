import {StyleSheet} from 'react-native';
import React from 'react';

import ScrollableTabView from '../../components/ScrollableTabView';
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
      <MsgListScreen tabLabel="全部" />
      <MsgListScreen tabLabel="主动沟通" />
      <MsgListScreen tabLabel="好友消息" />
      <MsgListScreen tabLabel="未读消息" />
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
