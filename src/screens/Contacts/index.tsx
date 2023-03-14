import {StyleSheet} from 'react-native';
import React from 'react';

import ScrollableTabView from '../../components/ScrollableTabView';
import RecommmendScreen from '../Recommend';
import HotListScreen from '../HotList';

interface IProps {
  navigation: any;
}

export default function ContactsScreen() {
  return (
    <ScrollableTabView
      tabBarUnderlineStyle={styles.tabBarUnderlineStyle}
      tabBarTextStyle={styles.tabBarTextStyle}
      tabBarActiveTextColor="red">
      <RecommmendScreen tabLabel="人脉" />
      <HotListScreen tabLabel="动态" />
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
