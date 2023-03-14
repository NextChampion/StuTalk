import {View, Text, Button} from 'react-native';
import React from 'react';

import ScrollableTabView from '../../components/ScrollableTabView';
import {dispatch} from '../../redux';
import OldBoyScreen from '../OldBoy';
import RecommmendScreen from '../Recommend';
import HotListScreen from '../HotList';

interface IProps {
  navigation: any;
}

export default function HomeScreen(props: IProps) {
  const {navigation} = props;

  const onPress = () => {
    dispatch('UPDATE_LOGIN_STATUS', false);
  };
  return (
    <ScrollableTabView>
      <OldBoyScreen tabLabel="React" />
      <RecommmendScreen tabLabel="Flow" />
      <HotListScreen tabLabel="Jest" />
    </ScrollableTabView>
  );
}
