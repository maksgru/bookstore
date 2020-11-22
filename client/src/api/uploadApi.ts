import { store } from '..';
import { changeUserImg, userType } from '../actions/authActions';
import axios from './axios';

export const addUserAvatar = async (formData: any) => {
  const user: userType = await axios.post("/upload/userimg", formData, {
    headers: {
      "content-type": "multipart/form-data",
    },
  });
  store.dispatch(changeUserImg(user))
};