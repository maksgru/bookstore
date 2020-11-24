import { store } from '..';
import { changeUserImg, userType } from '../actions/authActions';
import { bookImagesLoaded, bookImageType } from '../actions/bookActions';
import axios from './axios';

export const addUserAvatar = async (formData: FormData) => {
  const user: userType = await axios.post("/upload/userimg", formData, {
    headers: {
      "content-type": "multipart/form-data",
    },
  });
  store.dispatch(changeUserImg(user))
};

export const addBookImage = async (formData: FormData) => {
  const images: bookImageType[] = await axios.post("/upload/image", formData,{
    headers: {
      "content-type": "multipart/form-data",
    },
  });
  store.dispatch(bookImagesLoaded(images))
};