import axios from './axios';


export const login = (user: object) => {
  return axios.post('/auth/signin',{user})
}

// export const getAccess = (token: string) => {
  
//   return data;
// }

export default class AuthServise {
  getAccess = async (token: string) => {
    const options: object = {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json;charset=utf-8',
        'Authorization': `Bearer ${token}`
      },
    };
    const url: string = '/auth/update';
    const res = await fetch(url, options);
    const user = await res.json();
    return user;
  }
  refreshTokens = async (token: string) => {
    const options: object = {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json;charset=utf-8'
      },
      body: JSON.stringify({ refreshToken: token })
    };
    const url: string = '/auth/refresh-tokens';
    const res = await fetch(url, options);
    const data = await res.json();
    return data;
  }
  register = async (user: object) => {
    const options: object = {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json;charset=utf-8'
      },
      body: JSON.stringify(user)
    };
    const url: string = '/auth/signup';
    const res = await fetch(url, options);
    if (res.status === 200) return true;
    return false;

  }
}