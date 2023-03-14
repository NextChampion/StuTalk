import {Text} from 'react-native';
import React from 'react';
import {Avatar} from 'native-base';
import PageContainer from '../../components/PageContainer';
import ProfileCard from './components/ProfileCard';

export default function ProfileScreen() {
  const user = {
    id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb28ba',
    fullName: 'Aafreen Khan',
    timeStamp: '12:47 PM',
    recentText: 'Good Day!',
    avatarUrl:
      'https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500',
  };
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
      <ProfileCard data={user} />
      <Text>ProfileScreen</Text>
    </PageContainer>
  );
}
