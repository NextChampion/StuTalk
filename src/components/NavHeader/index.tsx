import {StyleSheet, View} from 'react-native';
import React, {PropsWithChildren, ReactElement} from 'react';
import UI from '../../../UI';
import {Box, Center, Heading} from 'native-base';
import {getStatusBarHeight} from '../../ui/Sizes';

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
  } = props;
  const StatusBarHeight = getStatusBarHeight();
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
          {leftItem && leftItem}
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
