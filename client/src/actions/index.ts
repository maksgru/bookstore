import { actionTypes } from './action-types'

export interface book {
  id: number,
  imgUrl: string,
  author: string,
  title: string,
  owner: string
}

export const booksLoaded = (books: book[]) => ({
  type: actionTypes.BOOKS_LOAD_SUCCESS,
  books
});

interface userData {
  user: {
    userName: string,
    iconUrl: string
  },
  tokens: {
    accessToken: string,
    refreshToken: string
  }
}

export const signIn = (userData: userData) => ({
  type: actionTypes.SIGN_IN,
  payload: handleUserData(userData)
});

export const update = (user: any) => ({
  type: actionTypes.SIGN_IN,
  payload: user
});

export const signOut = () => {
  dropUserData();
  return {type: actionTypes.SIGN_OUT};
};

const handleUserData = (data: userData) => {
  localStorage.setItem('token', data.tokens.accessToken);
  localStorage.setItem('refreshToken', data.tokens.refreshToken);
  return data.user;;
};

const dropUserData = () => {
  localStorage.clear();
};