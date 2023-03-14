import {View, Text, Button} from 'react-native';
import React from 'react';
import {dispatch} from '../../redux';

interface IProps {
  navigation: any;
}

export default function HotListScreen(props: IProps) {
  const {navigation} = props;

  const onPress = () => {
    dispatch('UPDATE_LOGIN_STATUS', false);
  };
  return (
    <View>
      <Text>HomeScreen</Text>
      <Button
        title="Go to Details"
        onPress={() => navigation.navigate('Profile')}
      />
      <Button title="Go to Login" onPress={onPress} />
    </View>
  );
}
