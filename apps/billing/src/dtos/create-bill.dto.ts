import { IsArray, IsNotEmpty, IsNumber, IsString } from 'class-validator';

export class CreateBillDTO {
  @IsString()
  @IsNotEmpty()
  customer: string;

  @IsArray()
  items: string[];

  @IsNumber()
  total_price: number;
}
