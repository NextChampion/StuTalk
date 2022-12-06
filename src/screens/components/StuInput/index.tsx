import {View, TextInput, StyleSheet, StyleProp, TextStyle} from 'react-native';
import React from 'react';

interface IProps {
  style?: StyleProp<TextStyle>;
  placeholder?: string | undefined;
}

export default function StuInput(props: IProps) {
  const {style, placeholder} = props;
  return (
    <View style={[style, styles.container]}>
      <TextInput style={styles.textInput} placeholder={placeholder} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    borderWidth: 1,
    borderRadius: 4,
  },
  textInput: {
    height: 36,
  },
});
