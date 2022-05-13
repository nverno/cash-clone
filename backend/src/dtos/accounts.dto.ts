import { IsString, IsUUID, Length } from 'class-validator';

export class CreateAccountDto {
  @IsString()
  public name: string;

  @IsUUID('all')
  public userId: string;

  @IsString()
  @Length(8, 8, {
    message: 'Account number must be 8 digits',
  })
  public accountNumber: string;

  @IsString()
  @Length(9, 9, {
    message: 'Routing number must be 9 digits',
  })
  public routingNumber: string;
}
