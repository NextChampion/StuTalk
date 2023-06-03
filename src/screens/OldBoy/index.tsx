import React, {Component} from 'react';

import {Animated} from 'react-native';
import BlogListScreen from '../BlogList';

interface IState {
  refreshing: boolean;
  scrollHeight: number;
  scrollY: Animated.Value;
}

export default class OldBoyScreen extends Component<any, IState> {
  render() {
    return <BlogListScreen tabLabel="校友圈" />;
  }
}
