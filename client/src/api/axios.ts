import axios from 'axios';
import { signOut, update } from '../actions/authActions';
import { error } from '../actions/errorActions';
import { store } from '../index';

const axiosInstance = axios.create({
  baseURL: '',
});


axiosInstance.interceptors.request.use((request) => {
  const token = localStorage.getItem('token');
  // if (!request.headers) {
  //   request.headers = {};
  // }
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
    const refreshUrl = '/auth/refresh-tokens';
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
    store.dispatch(error());
    throw err;
  }
);

interface Tokens {
  accessToken: string;
  refreshToken: string;
}


const setTokens = (tokens: Tokens) => {
  localStorage.setItem('token', tokens.accessToken);
  localStorage.setItem('refreshToken', tokens.refreshToken);
}

export const updateUserData = async () => {
  const token = localStorage.getItem('token');
  if (token) {
    try {
      const response = await axiosInstance.post(`/auth/update`);
      if (response) {
        store.dispatch(update(response))
      }
    } catch (err) {
      throw err
    }
  }
};
updateUserData()

export default axiosInstance;