import {StyleSheet, View} from 'react-native';
import React, {PropsWithChildren, ReactElement} from 'react';
import UI from '../../../UI';
import {Box, Button, Center, Heading, Pressable} from 'native-base';
import Icon from 'react-native-vector-icons/FontAwesome5';
import {getStatusBarHeight} from '../../ui/Sizes';
import {useNavigation} from '@react-navigation/native';

interface IProps {
  leftItem?: ReactElement;
  rightItem?: ReactElement | null;
  titleView?: ReactElement;
  title?: string;
  height?: number;
  hideStatusBar?: boolean;
  hide?: boolean;
  isAbsolute?: boolean;
  border?: boolean;
  displayTitle?: boolean;
  back: boolean;
}

const NavHeader: React.FC<PropsWithChildren<IProps>> = props => {
  const {
    leftItem,
    rightItem,
    titleView,
    height,
    hideStatusBar,
    hide,
    isAbsolute,
    title,
    border,
    displayTitle = true,
    back,
  } = props;
  const StatusBarHeight = getStatusBarHeight();
  const navigation = useNavigation();
  const renderTitle = () => {
    if (!displayTitle) {
      return <View />;
    }
    if (titleView) {
      return titleView;
    }
    return (
      <Center height={'100%'}>
        <Heading size={'sm'}>{title || '标题'}</Heading>
      </Center>
    );
  };

  const renderLieftItem = () => {
    if (back) {
      return (
        <Pressable
          onPress={() => {
            navigation.goBack();
          }}>
          <Box
            borderWidth={1}
            w={30}
            height={30}
            alignItems="center"
            justifyContent={'center'}
            borderRadius={15}>
            <Icon size={16} name="chevron-left" />
          </Box>
        </Pressable>
      );
    }
    if (leftItem) {
      return leftItem;
    }
    return null;
  };
  return (
    <View style={isAbsolute ? styles.absolute : null}>
      {hideStatusBar ? null : (
        <View style={[styles.statusBar, {height: StatusBarHeight}]} />
      )}
      {hide ? null : (
        <Box
          style={[
            styles.container,
            height ? {height} : null,
            border ? styles.border : null,
          ]}
          px={4}>
          {renderLieftItem()}
          {renderTitle()}
          {rightItem && rightItem}
        </Box>
      )}
    </View>
  );
};

export default NavHeader;

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    height: 44,
    backgroundColor: UI.color.transparent,
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  absolute: {
    position: 'absolute',
    top: 0,
    width: '100%',
  },
  statusBar: {
    backgroundColor: UI.color.bg1,
  },
  border: {
    borderBottomWidth: 1,
    borderColor: UI.color.border,
  },
});
