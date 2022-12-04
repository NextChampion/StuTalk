import {Image, StyleSheet} from 'react-native';
import React, {memo} from 'react';
import Icon from 'react-native-vector-icons/FontAwesome';

const Logo = () => {
  return <Icon name="rocket" size={30} color="#900" />;
};

export default memo(Logo);

const styles = StyleSheet.create({
  container: {
    height: 100,
    width: 100,
    backgroundColor: 'red',
  },
});
