import axios from 'axios';
import { signOut, update, userType } from '../actions/authActions';
import { error } from '../actions/errorActions';
import { store } from '../index';

const axiosInstance = axios.create({
  baseURL: 'http://localhost:4000',
});


axiosInstance.interceptors.request.use((request) => {
  const token = localStorage.getItem('token');
  if (!request.headers) {
    request.headers = {};
  }
  request.headers.Authorization = `Bearer ${token}`;
  return request;
});

axiosInstance.interceptors.response.use(
  ({ data }) => {
    return data;
  },
  (err) => {
    const originalRequest = err.config;
    const { status } = err.response;
    const refreshUrl = 'http://localhost:4000/auth/refresh-tokens';
    const refreshToken = localStorage.getItem('refreshToken');
    if (!refreshToken) {
      store.dispatch(signOut());
      throw err
    }
    if (status === 401 && originalRequest.url !== refreshUrl) {
      return axios.post(refreshUrl, { refreshToken })
        .then((res) => {
          const tokens = {
            accessToken: res.data.accessToken,
            refreshToken: res.data.refreshToken
          }
          setTokens(tokens);
          originalRequest.headers.Authorization = `Bearer ${res.data.accessToken}`
          return axios(originalRequest)
            .then(({ data }) => data)
        })
        .catch((err) => {
          if (err.response.status === 401) {
            store.dispatch(signOut());
            return;
          }
        });
    }
    store.dispatch(error);
    throw err;
  }
);

interface tokensType {
  accessToken: string;
  refreshToken: string;
}


const setTokens = (tokens: tokensType) => {
  localStorage.setItem('token', tokens.accessToken);
  localStorage.setItem('refreshToken', tokens.refreshToken);
}

export const updateUserData = async () => {
  const token = localStorage.getItem('token');
  if (token) {
    try {
      const user: userType = await axiosInstance.post(`/auth/update`);
      if (user) {
        store.dispatch(update(user))
      }
    } catch (err) {
      throw err
    }
  }
};
updateUserData();

export default axiosInstance;