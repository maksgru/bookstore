import { actionTypes } from './action-types'

export interface userType {
  id: number;
  userName: string;
  iconUrl: string;
}

export interface UserDataType {
  userData: userType;
  tokens: {
    accessToken: string;
    refreshToken: string;
  }
};


export const signIn = (userData: UserDataType) => ({
  type: actionTypes.SIGN_IN,
  payload: handleUserData(userData)
});

export const update = (user: userType) => ({
  type: actionTypes.SIGN_IN,
  payload: user
});

export const signOut = () => {
  dropUserData();
  return { type: actionTypes.SIGN_OUT };
};

export const changeUserImg = (user: userType) => ({
  type: actionTypes.CHANGE_USER_IMG,
  payload: user
})

const handleUserData = (data: UserDataType) => {
  localStorage.setItem('token', data.tokens.accessToken);
  localStorage.setItem('refreshToken', data.tokens.refreshToken);
  return data.userData;
};

const dropUserData = () => {
  localStorage.removeItem('token');
  localStorage.removeItem('refreshToken');
};