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
  public firstName: string;

  @IsString()
  public lastName: string;

  @IsString()
  public pinNumber: string;

  @IsOptional()
  @IsString()
  public username?: string;

  @IsOptional()
  @IsPhoneNumber()
  public phoneNumber?: string;
}

export class LoginUserDto {
  @IsOptional()
  @IsEmail()
  public email?: string;

  @IsOptional()
  @IsString()
  public phoneNumber?: string;

  @IsString()
  public password: string;
}
