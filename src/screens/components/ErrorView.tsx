import {View, Text, StyleSheet} from 'react-native';
import React, {memo} from 'react';
// import UI from '../../UI';

function ErrorView() {
  return (
    <View style={styles.container}>
      <Text>数据加载失败</Text>
    </View>
  );
}

export default memo(ErrorView);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
