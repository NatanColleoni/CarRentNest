import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { HydratedDocument } from 'mongoose';

export type CarCategoryDocument = HydratedDocument<CarCategory>;

@Schema({ timestamps: true })
export class CarCategory {
  @Prop({ index: true })
  name: string;

  @Prop()
  carIds: string[];

  @Prop()
  price: number;
}

export const CarCategorySchema = SchemaFactory.createForClass(CarCategory);
