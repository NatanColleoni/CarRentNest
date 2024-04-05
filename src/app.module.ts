import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { CustomerModule } from './customer/customer.module';
import { CarCategoryModule } from './car-category/car-category.module';
import { CarModule } from './car/car.module';

@Module({
  imports: [
    MongooseModule.forRoot(process.env.DATABASE_URL, {
      minPoolSize: 0,
      maxPoolSize: 20,
      serverSelectionTimeoutMS: 5000,
    }),
    CustomerModule,
    CarCategoryModule,
    CarModule,
  ],
  controllers: [AppController],
  providers: [],
})
export class AppModule {}
