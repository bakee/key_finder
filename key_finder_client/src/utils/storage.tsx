import { UserDto } from "../api/dto";

const currentUserKey: string = "currentUser";

export const getToken = (): string | null => {
  const user = getUser();
  if (user) {
    return user.token!;
  }
  return null;
};

export const getUser = (): UserDto | null => {
  const userJson = localStorage.getItem(currentUserKey);
  if (userJson !== null) {
    return JSON.parse(userJson);
  }
  return null;
};

export const setUser = (user: UserDto) => {
  localStorage.setItem(currentUserKey, JSON.stringify(user));
};

export const removeToken = () => {
  localStorage.removeItem(currentUserKey);
};
