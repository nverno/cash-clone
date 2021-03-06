import {
  IsEmail,
  IsNotEmpty,
  IsOptional,
  IsPhoneNumber,
  IsString,
} from 'class-validator';

export class CreateUserDto {
  @IsNotEmpty()
  @IsEmail()
  public email: string;

  @IsString()
  public password: string;

  @IsString()
  public name: string;

  @IsString()
  public pinNumber: string;

  @IsOptional()
  @IsString()
  public username?: string;

  @IsOptional()
  @IsPhoneNumber('US')
  public phoneNumber?: string;
}

export class LoginUserDto {
  @IsString()
  public identifier: string;

  @IsOptional()
  @IsString()
  public password?: string;

  @IsOptional()
  @IsString()
  public code?: string;
}
