import axios, { AxiosError } from "axios";
import { makeUrl } from "./common";
import {UserDto} from "./dto";

export const register = async (name: string, email: string, password: string) => {
    const apiPath = makeUrl("/register");
    const newUser: UserDto = {
        id: undefined,
        name: name,
        email: email,
        password: password,
        token: undefined
    };
    try {
        return await axios.post(apiPath, newUser);
    } catch (error) {
        console.log(error);
    }
};

export const login = async (email: string, password: string) : Promise<UserDto> => {
    const apiPath = makeUrl("/login");
    const newUser: UserDto = {
        id:undefined,
        name: "",
        email: email,
        password: password,
        token: undefined
    };
    try {
        const response = await axios.post(apiPath, newUser);
        console.log(response);
        return response.data;
    } catch (error:any) {
        console.log(error);
        throw error.response.data;
    }
};
