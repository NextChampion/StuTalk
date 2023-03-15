import React, {FC, PropsWithChildren} from 'react';
import {Box, Text} from 'native-base';
import Icon from 'react-native-vector-icons/FontAwesome5';
import Colors from '../../../ui/Colors';
import {StyleSheet} from 'react-native';

interface IProps {
  number: number;
}
const ListIndex: FC<PropsWithChildren<IProps>> = props => {
  const {number} = props;
  const colors = {
    1: Colors.danger[500],
    2: Colors.orange[500],
    3: Colors.yellow[500],
  };
  if (number === 1 || number === 2 || number === 3) {
    return (
      <Box width={9} alignItems={'center'}>
        <Icon
          style={styles.icon}
          size={20}
          name="hotjar"
          color={colors[number]}
        />
        <Text color={'#fff'} bold>
          {number}
        </Text>
      </Box>
    );
  }

  return (
    <Box width={9} alignItems={'center'}>
      <Text color={Colors.gray[500]}>{number}</Text>
    </Box>
  );
};

export default ListIndex;

const styles = StyleSheet.create({
  icon: {
    position: 'absolute',
  },
});
