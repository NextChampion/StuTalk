import {View, Text, StyleSheet} from 'react-native';
import React, {memo} from 'react';

function EmptyView() {
  return (
    <View style={styles.container}>
      <Text>Empty</Text>
    </View>
  );
}

export default memo(EmptyView);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
