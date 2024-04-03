import { Module } from '@nestjs/common';
import { CarsService } from './car.service';
import { CarsController } from './car.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { Car, CarSchema } from './car.schema';

@Module({
  imports: [MongooseModule.forFeature([{ name: Car.name, schema: CarSchema }])],
  controllers: [CarsController],
  providers: [CarsService],
})
export class CarModule {}
