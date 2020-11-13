import axios from 'axios';
import { signOut, update } from '../actions/authActions';
import { error } from '../actions/errorActions';
import { store } from '../index';

const axiosInstance = axios.create({
  baseURL: '',
});

const token = localStorage.getItem('token');

axiosInstance.interceptors.request.use((request) => {
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
    const refreshUrl = '/auth/refresh-tokens';
    const refreshToken = localStorage.getItem('refreshToken');
    if (!refreshToken) {
      store.dispatch(signOut());
      throw err
    } 
    if (status === 401 && originalRequest.url !== refreshUrl) {
      axios.post(refreshUrl, { refreshToken })
        .then((res) => {
          console.log(res)
          const tokens = {
            accessToken: res.data.accessToken,
            refreshToken: res.data.refreshToken
          }
          setTokens(tokens);
          updateUserData()
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
  if (token) {
    const data = await axiosInstance.post(`/auth/update`);
    store.dispatch(update(data))
  }
};
updateUserData()

export default axiosInstance;