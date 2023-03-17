import React, {memo} from 'react';
import {Pressable, Text, VStack} from 'native-base';
import Icon from 'react-native-vector-icons/FontAwesome5';

interface IProps {
  name: string;
  iconName?: string;
  onPress?: () => void;
}

const ServiceItem = (props: IProps) => {
  const {name} = props;

  return (
    <Pressable
      onPress={() => {
        console.log('sssss');
      }}>
      <VStack alignItems={'center'}>
        <Icon size={26} name="wind" />
        <Text mt={2}>{name}</Text>
      </VStack>
    </Pressable>
  );
};

export default memo(ServiceItem);

// const styles = StyleSheet.create({});
