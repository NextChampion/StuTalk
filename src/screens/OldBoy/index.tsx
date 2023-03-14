import {StyleSheet} from 'react-native';
import React from 'react';
import ScrollableTabView from '../../components/ScrollableTabView';

import HotListScreen from '../HotList';
import RecommmendScreen from '../Recommend';
import ScrollableTabBar from '../../components/ScrollableTabView/ScrollableTabBar';
import Colors from '../../ui/Colors';
interface IProps {
  navigation?: any;
  tabLabel: string;
}

export default function OldBoyScreen(props: IProps) {
  return (
    <ScrollableTabView
      locked
      tabBarUnderlineStyle={styles.tabBarUnderlineStyle}
      tabBarTextStyle={styles.tabBarTextStyle}
      renderTabBar={(props: any) => (
        <ScrollableTabBar {...props} style={{borderWidth: 0}} />
      )}
      tabBarActiveTextColor={Colors.indigo[500]}>
      <RecommmendScreen tabLabel="关注" />
      <HotListScreen tabLabel="全部" />
      <HotListScreen tabLabel="校内" />
      <HotListScreen tabLabel="专业" />
      <HotListScreen tabLabel="班级" />
      <HotListScreen tabLabel="热榜4" />
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
