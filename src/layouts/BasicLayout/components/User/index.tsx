import React from 'react';
import {Menu} from 'antd';
import { history } from 'ice';
import store from '@/store';

function User(){
  const [userState] = store.useModel('user');
  const [userNickName] = userState.userProfile;

  const handleLogout = (): void => {
    history.push("/user/login")
  };
  
  return (
    <div>{userNickName}</div>
  )
}

export default User;
