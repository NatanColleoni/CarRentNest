import { Injectable } from '@nestjs/common';
import { Model } from 'mongoose';
import { InjectModel } from '@nestjs/mongoose';
import { Car } from './car.schema';
import { CarCreateDto } from './dtos/car.create.dto';
import { CarUpdateDto } from './dtos/car.update.dto';

@Injectable()
export class CarsService {
  constructor(@InjectModel(Car.name) private carModel: Model<Car>) {}

  async findAll(): Promise<Car[]> {
    return await this.carModel.find().exec();
  }

  async findById(id: string): Promise<Car> {
    return await this.carModel.findById(id);
  }

  async create(car: CarCreateDto): Promise<Car> {
    return await this.carModel.create(car);
  }

  async update(car: CarUpdateDto): Promise<Car> {
    return await this.carModel.findByIdAndUpdate(car);
  }

  async deleteById(carId: string): Promise<Car> {
    return await this.carModel.findByIdAndDelete(carId);
  }
}
