import { User } from './User';

export interface LoginUserForm {
  phoneOrEmail: string;
  code?: string;
}

export interface LoginUserDto {
  email?: string;
  phoneNumber?: string;
  password: string;
}

export interface LoginResponse {
  token: string;
  user: User;
}
