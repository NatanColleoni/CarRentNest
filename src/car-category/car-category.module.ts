import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { CarCategoriesController } from './car-category.controller';
import { CarCategoriesService } from './car-category.service';
import { CarCategory, CarCategorySchema } from './car-category.schema';

@Module({
  imports: [
    MongooseModule.forFeature([
      { name: CarCategory.name, schema: CarCategorySchema },
    ]),
  ],
  controllers: [CarCategoriesController],
  providers: [CarCategoriesService],
})
export class CarCategoryModule {}
