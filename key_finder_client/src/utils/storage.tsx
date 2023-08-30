
const tokenKey: string = "jwtToken";

export const getToken = () : string | null => {
    return localStorage.getItem(tokenKey);
}

export const setToken = (token: string) => {
    localStorage.setItem(tokenKey, token);
}