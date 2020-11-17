import { actionTypes } from './action-types'

interface data {
  userData: {
    userName: string,
    iconUrl: string
  },
  tokens: {
    accessToken: string,
    refreshToken: string
  }
}

export const signIn = (userData: data) => ({
  type: actionTypes.SIGN_IN,
  payload: handleUserData(userData)
});

export const update = (user: any) => ({
  type: actionTypes.SIGN_IN,
  payload: user
});

export const signOut = () => {
  dropUserData();
  return { type: actionTypes.SIGN_OUT };
};

export const changeUserImg = (img: any) => ({
  type: actionTypes.CHANGE_USER_IMG,
  payload: img
})

const handleUserData = (data: data) => {
  localStorage.setItem('token', data.tokens.accessToken);
  localStorage.setItem('refreshToken', data.tokens.refreshToken);
  return data.userData;
};

const dropUserData = () => {
  localStorage.clear();
};