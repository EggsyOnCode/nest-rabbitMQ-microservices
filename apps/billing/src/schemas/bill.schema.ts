import { AbstractDocument } from '@app/commons';
import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { string } from 'joi';

@Schema({ versionKey: false })
export class Bill extends AbstractDocument {
  @Prop()
  customer: string;

  @Prop([string])
  items: string[];

  @Prop()
  total_price: number;
}

export const BillSchema = SchemaFactory.createForClass(Bill);
