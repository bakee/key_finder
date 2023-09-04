import axios, { AxiosError } from "axios";
import { makeUrl } from "./common";
import { UserDto } from "./dto";
import { getToken } from "../utils/storage";

export const register = async (
  name: string,
  email: string,
  password: string
) => {
  const apiPath = makeUrl("/register");
  const newUser: UserDto = {
    id: undefined,
    name: name,
    email: email,
    password: password,
    token: undefined,
  };
  try {
    return await axios.post(apiPath, newUser);
  } catch (error: any) {
    console.log(error);
    throw error.response.data;
  }
};

export const login = async (
  email: string,
  password: string
): Promise<UserDto> => {
  const apiPath = makeUrl("/login");
  const newUser: UserDto = {
    id: undefined,
    name: "",
    email: email,
    password: password,
    token: undefined,
  };
  try {
    const response = await axios.post(apiPath, newUser);
    console.log(response);
    return response.data;
  } catch (error: any) {
    console.log(error);
    throw error.response.data;
  }
};

export const getUserByEmail = async (
  email: string
): Promise<UserDto | null> => {
  const apiPath = makeUrl("/users");
  const token = getToken();
  const param = {
    email: email,
  };
  const config = {
    headers: {
      Authorization: `Bearer ${token}`,
    },
    params: param,
  };

  try {
    const response = await axios.get(apiPath, config);
    if (response.data && response.data.length == 1) {
      return response.data[0];
    }
  } catch (error) {}
  return null;
};
