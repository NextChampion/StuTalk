import {Text} from 'react-native';
import React from 'react';
import PageContainer from '../../components/PageContainer';
import ProfileCard from './components/ProfileCard';
import NavHeader from '../../components/NavHeader';

export default function ProfileScreen() {
  const user = {
    id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb28ba',
    fullName: 'Aafreen Khan',
    timeStamp: '12:47 PM',
    recentText: '清华大学·物理系',
    avatarUrl:
      'https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80',
  };
  return (
    <PageContainer>
      <NavHeader title="profile" />
      <ProfileCard data={user} />
      <Text>ProfileScreen</Text>
    </PageContainer>
  );
}
