import React, {Component} from 'react';

import {
  View,
  Text,
  StyleSheet,
  ImageBackground,
  Animated,
  RefreshControl,
} from 'react-native';
import StickyHeader from '../../components/StickyHeader';
import Header from './components/Header';

interface IState {
  refreshing: boolean;
  scrollHeight: number;
  scrollY: Animated.Value;
}

export default class ContractListScreen extends Component<any, IState> {
  readonly state: IState = {
    scrollY: new Animated.Value(0),
    scrollHeight: -1,
    refreshing: false,
  };

  render() {
    return (
      <View style={styles.container}>
        <Animated.ScrollView
          style={styles.scroll}
          onScroll={
            Animated.event(
              // 映射动画值
              [
                {
                  // 垂直滚动时，将 event.nativeEvent.contentOffset.y映射到this.state.scrollY，以此记录滑动距离
                  nativeEvent: {contentOffset: {y: this.state.scrollY}},
                },
              ],
              {useNativeDriver: true},
            ) // 启用原生动画驱动。默认不启用(false)
          }
          scrollEventThrottle={1} // 滚动条距离视图边缘的坐标
          refreshControl={
            // 下拉刷新功能
            <RefreshControl
              style={styles.refresh}
              tintColor={'white'}
              refreshing={this.state.refreshing}
              onRefresh={() => {
                // 再刷新时调用
                this.setState({refreshing: true});
              }}
            />
          }>
          <View
            onLayout={e => {
              this.setState({scrollHeight: e.nativeEvent.layout.height}); // 获取头部的高度
            }}>
            <Header />
          </View>

          <StickyHeader
            stickyHeaderY={this.state.scrollHeight} // 将头部高度传入组件
            stickyScrollY={this.state.scrollY} // 将滑动距离传入组件
          >
            <View style={styles.headerContent}>
              <Text style={styles.headerText}>固定栏</Text>
            </View>
          </StickyHeader>

          {/* 底部内容 */}
          {[0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11].map((item, index) => {
            return (
              <View style={styles.item} key={item}>
                <Text>底部内容{index}</Text>
              </View>
            );
          })}
        </Animated.ScrollView>
      </View>
    );
  }
}

// interface Styles {
//   container: ViewStyle;
//   scroll: ScrollView
// }

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  scroll: {
    flex: 1,
  },
  refresh: {backgroundColor: 'transparent'},
  headerBg: {width: '100%', height: 190},
  headerContent: {height: 50, backgroundColor: '#3356d9'},
  headerText: {
    fontSize: 20,
    textAlign: 'center',
    color: '#fff',
    lineHeight: 50,
  },
  item: {height: 100},
});
