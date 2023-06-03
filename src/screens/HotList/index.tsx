import {StyleSheet} from 'react-native';
import React from 'react';
import ScrollableTabView from '../../components/ScrollableTabView';

import ScrollableTabBar from '../../components/ScrollableTabView/ScrollableTabBar';
import Colors from '../../ui/Colors';
import RankScreen from './Rank';
// import BlogListScreen from '../BlogList';
interface IProps {
  navigation?: any;
  tabLabel: string;
}

export default function HotListScreen(props: IProps) {
  return (
    <ScrollableTabView
      locked
      tabBarUnderlineStyle={styles.tabBarUnderlineStyle}
      tabBarTextStyle={styles.tabBarTextStyle}
      renderTabBar={() => <ScrollableTabBar style={{borderWidth: 0}} />}
      tabBarActiveTextColor={Colors.indigo[500]}>
      <RankScreen tabLabel="热榜" />
      <RankScreen tabLabel="校内榜" />
      <RankScreen tabLabel="院内榜" />
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
