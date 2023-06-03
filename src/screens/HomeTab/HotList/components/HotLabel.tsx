import React, {FC, PropsWithChildren} from 'react';
import {Box, Text} from 'native-base';
import Colors from '../../../../ui/Colors';

interface IProps {
  type: 'new' | 'hot';
}
const HotLabel: FC<PropsWithChildren<IProps>> = props => {
  const {type = 'new'} = props;
  if (type === 'hot') {
    return (
      <Box
        backgroundColor={Colors.danger[100]}
        px={1}
        borderRadius={4}
        alignItems={'center'}
        justifyContent={'center'}>
        <Text fontSize={'xs'} color={Colors.danger[400]}>
          爆
        </Text>
      </Box>
    );
  }
  return (
    <Box
      backgroundColor={Colors.indigo[100]}
      px={1}
      borderRadius={4}
      alignItems={'center'}
      justifyContent={'center'}>
      <Text fontSize={'xs'} color={Colors.indigo[400]}>
        新
      </Text>
    </Box>
  );
};

export default HotLabel;
