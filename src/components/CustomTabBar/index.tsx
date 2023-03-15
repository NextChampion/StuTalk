import {Animated, StyleSheet, Text, View} from 'react-native';
import React, {PropsWithChildren, ReactNode} from 'react';
import Button from '../ScrollableTabView/Button';

interface IProps {
  goToPage?: () => void;
  activeTab?: number;
  tabs?: Array<any>;
  backgroundColor?: string;
  activeTextColor?: string;
  inactiveTextColor?: string;
  textStyle?: any;
  tabStyle?: any;
  renderTab?: (
    name: string,
    page: number,
    isTabActive: boolean,
    onPressHandler: () => void,
  ) => void;
  underlineStyle?: any;
  style?: any;
  containerWidth?: number;
  scrollValue?: any;
  border?: boolean;
}

const CustomTabBar: React.FC<PropsWithChildren<IProps>> = props => {
  const {border} = props;
  const renderTabInner = (
    name: string,
    page: number,
    isTabActive: boolean,
    onPressHandler: (page: number) => void,
  ): ReactNode => {
    const {activeTextColor, inactiveTextColor, textStyle} = props;
    const textColor = isTabActive ? activeTextColor : inactiveTextColor;
    const fontWeight = isTabActive ? 'bold' : 'normal';

    return (
      <Button
        // eslint-disable-next-line react-native/no-inline-styles
        style={{flex: 1}}
        key={name}
        accessible={true}
        accessibilityLabel={name}
        accessibilityTraits="button"
        onPress={() => onPressHandler(page)}>
        <View style={[styles.tab, props.tabStyle]}>
          <Text style={[{color: textColor, fontWeight}, textStyle]}>
            {name}
          </Text>
        </View>
      </Button>
    );
  };

  const containerWidth = props.containerWidth;
  const numberOfTabs = props.tabs.length;

  const translateX = props.scrollValue.interpolate({
    inputRange: [0, 1],
    outputRange: [0, containerWidth / numberOfTabs],
  });
  return (
    <View
      style={[
        styles.tabs,
        border ? styles.tabsBorder : null,
        {backgroundColor: props.backgroundColor},
        props.style,
      ]}>
      {props.tabs.map((name, page) => {
        const isTabActive = props.activeTab === page;
        const renderTab = props.renderTab || renderTabInner;
        return renderTab(name, page, isTabActive, props.goToPage);
      })}
      <Animated.View
        style={[
          styles.tabUnderLine,
          {width: containerWidth / numberOfTabs},
          {
            transform: [{translateX}],
          },
        ]}>
        <View style={[styles.line, props.underlineStyle]} />
      </Animated.View>
    </View>
  );
};

export default CustomTabBar;

const styles = StyleSheet.create({
  tab: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    paddingBottom: 4,
  },
  tabs: {
    height: 50,
    flexDirection: 'row',
    justifyContent: 'space-around',
    width: 400,
  },
  tabsBorder: {
    borderWidth: 1,
    borderTopWidth: 0,
    borderLeftWidth: 0,
    borderRightWidth: 0,
    borderColor: '#ccc',
  },
  tabUnderLine: {
    position: 'absolute',
    height: 4,
    bottom: 4,
    alignItems: 'center',
  },
  line: {
    backgroundColor: 'yellow',
    width: '100%',
    height: '100%',
  },
});
