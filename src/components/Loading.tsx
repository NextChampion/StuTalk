import {View, Text, StyleSheet} from 'react-native';
import React, {memo} from 'react';

function Loading() {
  return (
    <View style={styles.container}>
      <Text>Loading</Text>
    </View>
  );
}

export default memo(Loading);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
