import {View, Text, Button} from 'react-native';
import React from 'react';

interface IProps {
  navigation: any;
}

export default function HomeScreen(props: IProps) {
  const {navigation} = props;
  return (
    <View>
      <Text>HomeScreen</Text>
      <Button
        title="Go to Details"
        onPress={() => navigation.navigate('Profile')}
      />
    </View>
  );
}
