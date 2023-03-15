import {StyleSheet, View} from 'react-native';
import React, {PropsWithChildren, ReactElement} from 'react';
import UI from '../../../UI';
import {Center, Heading} from 'native-base';

interface IProps {
  leftItem?: ReactElement;
  rightItem?: ReactElement;
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
    displayTitle,
  } = props;

  const renderTitle = () => {
    if (!displayTitle) {
      return null;
    }
    if (titleView) {
      return titleView;
    }
    return (
      <Center height={'100%'} width={'100%'}>
        <Heading>{title || '标题'}</Heading>
      </Center>
    );
  };
  return (
    <View style={isAbsolute ? styles.absolute : null}>
      {hideStatusBar ? null : <View style={styles.statusBar} />}
      {hide ? null : (
        <View
          style={[
            styles.container,
            height ? {height} : null,
            border ? styles.border : null,
          ]}>
          {leftItem && leftItem}
          {renderTitle()}
          {rightItem && rightItem}
        </View>
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
    height: UI.IS_IPHONE_X ? 44 : 20,
    backgroundColor: UI.color.bg1,
  },
  border: {
    borderBottomWidth: 1,
    borderColor: UI.color.border,
  },
});
