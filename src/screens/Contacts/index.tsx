import {StyleSheet} from 'react-native';
import React from 'react';

import ScrollableTabView from '../../components/ScrollableTabView';
import HotListScreen from '../HotList';
import {getStatusBarHeight} from '../../ui/Sizes';
import UI from '../../../UI';
import CustomTabBar from '../../components/CustomTabBar';
import Colors from '../../ui/Colors';
import ContractListScreen from '../ContractList';

interface IProps {
  navigation: any;
}

export default function ContactsScreen() {
  const StatusBarHeight = getStatusBarHeight();

  return (
    <ScrollableTabView
      style={[styles.container, {paddingTop: StatusBarHeight}]}
      tabBarUnderlineStyle={styles.tabBarUnderlineStyle}
      tabBarTextStyle={styles.tabBarTextStyle}
      renderTabBar={(props: any) => <CustomTabBar {...props} />}
      tabBarActiveTextColor={Colors.indigo[500]}>
      <ContractListScreen tabLabel="人脉" />
      <HotListScreen tabLabel="动态" />
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
