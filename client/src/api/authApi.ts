import axios from './axios';

interface LoginType {
    email: string;
    password: string;
}

export const login = async (user: LoginType) => {
    const data = await axios.post('/auth/signin', user)
    return data;
};

interface RegisterType extends LoginType {
    name: string;
}
export const register = async (user: RegisterType) => {
    await axios.post('/auth/signup', user);
    const newUser: LoginType = {
        email: user.email,
        password: user.password
    };
    return await login(newUser);
}