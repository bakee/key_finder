export interface UserDto {
  id: number | undefined;
  name: string;
  email: string;
  password: string;
  token: string | undefined;
}

export interface CarDto {
  id: number | undefined;
  make: string;
  model: string;
  year: number;
  licensePlate: string;
}
