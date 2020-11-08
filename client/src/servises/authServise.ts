export default class AuthServise {
    login = async (user: object) => {
        const options: object = {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json;charset=utf-8'
            },
            body: JSON.stringify(user)
        };
        const url: string = '/auth/signin';
        const res = await fetch(url, options);
        const data = await res.json();
        return data;
    };
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
            body: JSON.stringify({refreshToken: token})
        };
        const url: string = '/auth/refresh-tokens';
        const res = await fetch(url, options);
        const data = await res.json();
        return data;
    }
}