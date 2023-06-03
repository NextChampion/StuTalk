import {StyleSheet} from 'react-native';
import React from 'react';

import ScrollableTabView from '../../components/ScrollableTabView';
import RecommendScreen from '../Recommend';
import OldBoyScreen from '../OldBoy';
import HotListScreen from '../HotList';
import CustomTabBar from '../../components/CustomTabBar';
import Colors from '../../ui/Colors';
import UI from '../../../UI';
import {getStatusBarHeight} from '../../ui/Sizes';

interface IProps {
  navigation: any;
}

export default function HomeScreen() {
  const StatusBarHeight = getStatusBarHeight();
  return (
    <ScrollableTabView
      style={[styles.container, {paddingTop: StatusBarHeight}]}
      tabBarUnderlineStyle={styles.tabBarUnderlineStyle}
      tabBarTextStyle={styles.tabBarTextStyle}
      renderTabBar={(props: any) => <CustomTabBar {...props} />}
      tabBarActiveTextColor={Colors.indigo[500]}>
      <OldBoyScreen tabLabel="校友圈" />
      <RecommendScreen tabLabel="推荐" />
      <HotListScreen tabLabel="热榜" />
    </ScrollableTabView>
  );
}
const styles = StyleSheet.create({
  container: {
    backgroundColor: UI.color.white1,
  },
  tabBarUnderlineStyle: {
    backgroundColor: Colors.indigo[500],
    width: 60,
    borderRadius: 2,
  },
  tabBarTextStyle: {
    fontSize: 18,
  },
});
