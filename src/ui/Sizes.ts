import {NativeModules, StatusBar, Platform} from 'react-native';

let statusBarHeight: number = 44;

function getHeight() {
  if (Platform.OS === 'ios') {
    const {StatusBarManager} = NativeModules;
    // iOS Only
    StatusBarManager.getHeight((barHeight: {height: number}) => {
      statusBarHeight = barHeight.height;
    });
  }

  if (Platform.OS === 'android') {
    statusBarHeight = StatusBar.currentHeight || 0;
  }
}

getHeight();

export function getStatusBarHeight() {
  return statusBarHeight;
}

export {statusBarHeight};
