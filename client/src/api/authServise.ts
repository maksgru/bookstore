import axios from './axios';


export const login = (user: object) => {
  return axios.post('/auth/signin', user)
}