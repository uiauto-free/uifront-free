import { request, history } from 'ice';
import { any } from 'prop-types';
import { IFetchUserProfile } from '@/types';

interface IState {
  loaded: Boolean;
  userProfile: IFetchUserProfile;
}

interface IEffects {
  fetchUserProfile: () => Promise<any>;
}
const initState: IState = {
  loaded: false,
  userProfile: {
    id: 0,
    userId: '',
    userCode: '',
    userName: '',
    userNickName: '',
  },
};

export default {
  state: initState,
  effects: (dispatch): IEffects => ({
    async fetchUserProfile(): Promise<void> {
      const res = await request('/api/auth/user/get');
      if (res.code === 200) {
        const temp = {
          loaded: true,
          userProfile: {
            id: res.data.id,
            userId: res.data.userId,
            userName: res.data.userName,
            userCode: res.data.userCode,
            userNickName: res.data.userNickName,
          },
        };
        dispatch.user.update(temp);
      } else {
        history.push('/user/login');
      }
    },
  }),
  reducers: {
    setState(prevState, nextState): IState {
      return {
        ...prevState,
        ...nextState,
      };
    },
    setUserProfile(preState, userProfile): IState {
      return {
        ...preState,
        userProfile,
      };
    },
    update(prevState, payload) {
      return { ...prevState, ...payload };
    },
  },
};
