import * as React from 'react';
import { Avatar, Overlay, Menu, Icon } from '@alifd/next';
import styles from './index.module.css';
import cookie from 'react-cookies';
import store from '@/store';

const { Item } = Menu;
const { Popup } = Overlay;
import {history} from 'ice'

const UserProfile = ({ userName, avatar, userNickName }) => {
  return (
    <div className={styles.profile}>
      <div className={styles.avatar}>
        <Avatar src={avatar} alt="用户头像" />
      </div>
      <div className={styles.content}>
        <h4>{userName}</h4>
        <span>{userNickName}</span>
      </div>
    </div>
  );
};

function handleLogout() {
  console.log("removeToken")
  cookie.remove("token");
  history.push("/user/login")
}

const HeaderAvatar = (props) => {
  const [userState, userDispath] = store.useModel('user')
  const name= userState.userProfile.userName;
  console.log(userState)
  const avatar = "";
  return (
    <Popup
      trigger={
        <div className={styles.headerAvatar}>
          <Avatar size="small" src={avatar} alt="用户头像" />
          <span
            style={{
              marginLeft: 10,
            }}
          >
            {name}
          </span>
        </div>
      }
      triggerType="click"
    >
      <div className={styles.avatarPopup}>
        <UserProfile {...userState.userProfile} />
        <Menu className={styles.menu}>
          {/* <Item>
            <Icon size="small" type="account" />
            个人设置
          </Item>
          <Item>
            <Icon size="small" type="set" />
            系统设置
          </Item> */}
          <Item onClick={handleLogout}>
            <Icon size="small" type="exit" />
            退出
          </Item>
        </Menu>
      </div>
    </Popup>
  );
};

export default HeaderAvatar;
