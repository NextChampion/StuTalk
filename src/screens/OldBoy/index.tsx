import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import ScrollableTabView from '../../components/ScrollableTabView';

import HotListScreen from '../HotList';
interface IProps {
  navigation: any;
}

export default function OldBoyScreen(props: IProps) {
  return (
    <ScrollableTabView
      locked
      tabBarUnderlineStyle={styles.tabBarUnderlineStyle}
      tabBarTextStyle={styles.tabBarTextStyle}
      tabBarActiveTextColor="red">
      <View tabLabel="推荐">
        <Text>ffff</Text>
      </View>
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
