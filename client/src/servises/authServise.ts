export default class AuthServise {
    login = async (user: object) => {
        const options: object = {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json;charset=utf-8'
            },
            body: JSON.stringify(user)
        };
        const url: string = '/auth/login';
        const res = await fetch(url, options);
        const data = await res.json();
        return data;
    };
}