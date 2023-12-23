import { IsNotEmpty, IsNumber, IsPhoneNumber, IsString } from 'class-validator';

export class OrderRequestDTO {
  @IsString()
  @IsNotEmpty()
  name: string;

  @IsNumber()
  price: number;

  @IsPhoneNumber()
  phoneNumber: string;
}
