import {StyleSheet, View} from 'react-native';
import React from 'react';
import Icon from 'react-native-vector-icons/FontAwesome5';

import ScrollableTabView from '../../components/ScrollableTabView';
import MsgListScreen from '../MsgList';
import CustomTabBar from '../../components/CustomTabBar';
import Colors from '../../ui/Colors';
import NavHeader from '../../components/NavHeader';
import {HStack, IconButton, Pressable} from 'native-base';

interface IProps {
  navigation: any;
}

export default function MessagesScreen() {
  const onSearchPress = () => {
    console.log('onSearchPress');
  };

  const onAddPress = () => {
    console.log('onAddPress');
  };
  const renderRightItem = () => {
    return (
      <HStack alignItems={'center'}>
        <IconButton
          onPress={onSearchPress}
          size={'8'}
          borderRadius={'16'}
          backgroundColor={Colors.indigo[100]}
          icon={<Icon name="search" size={16} color={Colors.indigo[300]} />}
        />
        <IconButton
          onPress={onAddPress}
          // variant={'outline'}
          ml={2}
          size={'8'}
          borderRadius={'16'}
          backgroundColor={Colors.indigo[100]}
          icon={<Icon name="plus" size={16} color={Colors.indigo[300]} />}
        />
      </HStack>
    );
  };
  return (
    <View style={styles.container}>
      <NavHeader title="Messages" rightItem={renderRightItem()} />
      <ScrollableTabView
        tabBarUnderlineStyle={styles.tabBarUnderlineStyle}
        tabBarTextStyle={styles.tabBarTextStyle}
        renderTabBar={() => <CustomTabBar />}
        tabBarActiveTextColor={Colors.indigo[500]}>
        <MsgListScreen tabLabel="全部" />
        <MsgListScreen tabLabel="主动沟通" />
        <MsgListScreen tabLabel="好友消息" />
        <MsgListScreen tabLabel="未读消息" />
      </ScrollableTabView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#fff',
    flex: 1,
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
