import axios from './axios';

export const addUserAvatar = async (formData: any) => {
  const userAvatar = await axios("/upload/userimg", {
    method: "post",
    data: formData,
    headers: {
      "content-type": "multipart/form-data",
    },
  });
  return userAvatar;
};
