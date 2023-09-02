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

export interface KeyDto {
  name: string;
  keyId: number;
  memberId: number;
}

export interface MemberDto {
  member: UserDto;
  keys: KeyDto[];
}

export interface CarDetailDto {
  car: CarDto;
  members: MemberDto[];
  keys: KeyDto[];
}

export interface ShareHolderDto {
  carId: number;
  memberId: number;
}

export interface KeyLocationDto {
  key: KeyDto;
  member: UserDto;
  previousMember?: UserDto;
  handoverType: string;
  created: Date;
}
