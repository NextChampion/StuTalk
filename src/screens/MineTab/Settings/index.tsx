import {View, Text, Button} from 'react-native';
import React from 'react';
import {dispatch} from '../../../redux';

export default function SettingsScreen() {
  const onPress = () => {
    dispatch('UPDATE_LOGIN_STATUS', false);
  };
  return (
    <View>
      <Text>SettingsScreen</Text>
      <Button title="退出登录" onPress={onPress} />
    </View>
  );
}
