import {StyleSheet} from 'react-native';
import React from 'react';

import ScrollableTabView from '../../components/ScrollableTabView';
import MsgListScreen from '../MsgList';
import CustomTabBar from '../../components/CustomTabBar';
import Colors from '../../ui/Colors';
import PageContainer from '../../components/PageContainer';

interface IProps {
  navigation: any;
}

export default function MessagesScreen() {
  return (
    <ScrollableTabView
      style={styles.container}
      tabBarUnderlineStyle={styles.tabBarUnderlineStyle}
      tabBarTextStyle={styles.tabBarTextStyle}
      renderTabBar={() => <CustomTabBar />}
      tabBarActiveTextColor={Colors.indigo[500]}>
      <MsgListScreen tabLabel="全部" />
      <MsgListScreen tabLabel="主动沟通" />
      <MsgListScreen tabLabel="好友消息" />
      <MsgListScreen tabLabel="未读消息" />
    </ScrollableTabView>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#fff',
  },
  tabBarUnderlineStyle: {
    backgroundColor: Colors.indigo[500],
    width: 36,
    borderRadius: 2,
  },
  tabBarTextStyle: {
    fontSize: 16,
  },
});
