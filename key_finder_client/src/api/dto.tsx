export interface UserDto {
    id: number | undefined;
    name: string;
    email: string;
    password: string;
    token: string | undefined;
}
