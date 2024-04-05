import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { HydratedDocument } from 'mongoose';

export type CustomerDocument = HydratedDocument<Customer>;

@Schema({ timestamps: true })
export class Customer {
  @Prop({ index: true })
  name: string;

  @Prop()
  age: number;

  @Prop()
  email: string;
}

export const CustomerSchema = SchemaFactory.createForClass(Customer);
