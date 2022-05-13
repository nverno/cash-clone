import { IsEmail, IsOptional, IsPhoneNumber, IsString } from 'class-validator';

export class CreateUserDto {
  @IsEmail()
  public email: string;

  @IsString()
  public password: string;

  @IsString()
  public firstName: string;

  @IsString()
  public lastName: string;

  @IsOptional()
  @IsString()
  public username?: string;

  @IsOptional()
  @IsPhoneNumber()
  @IsString()
  public phoneNumber?: string;
}
