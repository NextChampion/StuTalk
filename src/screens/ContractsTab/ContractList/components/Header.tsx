import {ImageBackground, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import FriendsInfo from './FriendsInfo';
import FriendRequest from './FriendRequest';

const Header = () => {
  return (
    <ImageBackground
      style={styles.headerBg}
      source={{
        uri: 'https://img1.baidu.com/it/u=30188879,761883972&fm=253&fmt=auto&app=120&f=JPEG?w=1422&h=800',
      }}>
      {/* 头部内容 */}
      <FriendsInfo />
      <FriendRequest />
    </ImageBackground>
  );
};

export default Header;

const styles = StyleSheet.create({
  headerBg: {width: '100%', height: 290},
});
