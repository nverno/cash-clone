import { User } from './User';

export interface LoginUserForm {
  identifier: string;
  code?: string;
  password?: string;
}

export interface LoginUserDto {
  email?: string;
  phoneNumber?: string;
  password: string;
}

export interface LoginResponse {
  token: {
    token: string;
    expiresIn: number;
  };
  user: User;
}
