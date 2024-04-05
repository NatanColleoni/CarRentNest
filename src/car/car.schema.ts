import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { HydratedDocument } from 'mongoose';

export type CarDocument = HydratedDocument<Car>;

@Schema({ timestamps: true })
export class Car {
  @Prop({ index: true })
  name: string;

  @Prop()
  releaseYear: Date;

  @Prop()
  available: boolean;

  @Prop()
  gasAvailable: boolean;
}

export const CarSchema = SchemaFactory.createForClass(Car);
