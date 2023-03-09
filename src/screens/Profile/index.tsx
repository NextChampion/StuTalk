import {Text} from 'react-native';
import React from 'react';
import {Avatar} from 'native-base';
import PageContainer from '../../components/PageContainer';

export default function ProfileScreen() {
  return (
    <PageContainer>
      <Avatar
        bg="green.500"
        size={'2xl'}
        alignSelf="center"
        source={{
          uri: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80',
        }}>
        AJ
      </Avatar>
      <Text>ProfileScreen</Text>
    </PageContainer>
  );
}
