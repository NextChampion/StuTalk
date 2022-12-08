import {
  View,
  Pressable,
  StyleSheet,
  GestureResponderEvent,
  Text,
} from 'react-native';
import React from 'react';

interface IProps {
  onPress: ((event: GestureResponderEvent) => void) | null | undefined;
  title?: string;
}

export default function StuButton(props: IProps) {
  const {onPress, title} = props;
  return (
    <View style={styles.container}>
      <Pressable onPress={onPress}>
        <Text>{title}</Text>
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    borderWidth: 1,
    borderRadius: 4,
    height: 36,
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: 5,
  },
});
