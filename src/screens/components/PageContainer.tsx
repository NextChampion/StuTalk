import React, {memo, FC, ReactNode, useRef} from 'react';
import {StyleSheet, ScrollView, ViewStyle} from 'react-native';
import UI from '../../../UI';

interface IProps {
  scroll?: Boolean;
  padding?: Boolean;
  children?: ReactNode;
  style?: ViewStyle;
  bgStyle?: ViewStyle;
}

const PageContainer: FC<IProps> = props => {
  console.debug('[render] Container');
  const {scroll, padding, children, style, bgStyle, ...others} = props;
  const scrollRef = useRef<any>(null);
  // const scrollTo = offSet => {
  //   scrollRef.current?.scrollTo(offSet);
  // };
  if (scroll) {
    return (
      <ScrollView
        {...others}
        ref={scrollRef}
        style={[
          // eslint-disable-next-line react-native/no-inline-styles
          {flex: 1, backgroundColor: UI.color.bg1},
          !!bgStyle && bgStyle,
        ]}
        contentContainerStyle={[
          styles.scroll,
          !!padding && styles.padding,
          !!style && style,
        ]}>
        {children}
      </ScrollView>
    );
  }

  return (
    <ScrollView
      scrollEnabled={false}
      keyboardDismissMode="on-drag"
      // eslint-disable-next-line react-native/no-inline-styles
      style={[{flex: 1, backgroundColor: UI.color.bg1}, !!bgStyle && bgStyle]}
      contentContainerStyle={[
        styles.view,
        !!padding && styles.padding,
        !!style && style,
      ]}>
      {children}
    </ScrollView>
  );
};

export default memo(PageContainer);

const styles = StyleSheet.create({
  scroll: {
    backgroundColor: UI.color.bg1,
    paddingBottom: UI.IS_IPHONE_X ? 24 : 0,
  },
  view: {
    flex: 1,
    backgroundColor: UI.color.bg1,
    paddingBottom: UI.unit * 4 + (UI.IS_IPHONE_X ? 24 : 0),
  },
  padding: {
    paddingHorizontal: UI.unit * 4,
    paddingTop: UI.unit * 2,
    paddingBottom: UI.unit * 4 + (UI.IS_IPHONE_X ? 24 : 0),
  },
});
