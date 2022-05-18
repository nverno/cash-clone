import { IsNumber, IsOptional, IsString } from 'class-validator';
import { IsExistingCashTag } from './validators';

export class CreateTransactionDto {
  @IsString()
  @IsExistingCashTag({
    message: "senderId $value doesn't exist.",
  })
  public senderId: string;

  @IsString()
  @IsExistingCashTag({
    message: "receiverId $value doesn't exist.",
  })
  public receiverId: string;

  @IsNumber()
  public value: number;

  @IsOptional()
  @IsString()
  public note?: string;
}
