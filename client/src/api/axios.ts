import axios from 'axios';

const axiosInstance = axios.create({
  baseURL: '',
});

axiosInstance.interceptors.request.use((request) => {
  if (!request.headers) {
    request.headers = {};
  }
  request.headers.Authorization = `Bearer ${'token'}`;
  return request;
});

axiosInstance.interceptors.response.use(
  ({ data }) => {
    return data;
  },
  (err) => {
    throw err;
  }
);

export default axiosInstance;
