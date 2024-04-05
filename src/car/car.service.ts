import { HttpException, HttpStatus, Injectable, Scope } from '@nestjs/common';
import { Model } from 'mongoose';
import { InjectModel } from '@nestjs/mongoose';
import { Car } from './car.schema';
import { CarCreateDto } from './dtos/car.create.dto';
import { CarUpdateDto } from './dtos/car.update.dto';

@Injectable({ scope: Scope.DEFAULT })
export class CarsService {
  constructor(@InjectModel(Car.name) private carModel: Model<Car>) {}

  async findAll(): Promise<Car[]> {
    try {
      return await this.carModel
        .find({}, 'name releaseYear available gasAvailable')
        .lean();
    } catch (error) {
      throw new HttpException(
        `Error while fetching cars: ${error.message}`,
        HttpStatus.INTERNAL_SERVER_ERROR,
      );
    }
  }

  async findById(id: string): Promise<Car> {
    try {
      return await this.carModel.findById(id).lean();
    } catch (error) {
      throw new HttpException(
        `Error while fetching car ${id}`,
        HttpStatus.INTERNAL_SERVER_ERROR,
      );
    }
  }

  async create(car: CarCreateDto): Promise<Car> {
    try {
      return await this.carModel.create(car);
    } catch (error) {
      throw new HttpException(
        `Error while creating car: ${error.message}`,
        HttpStatus.INTERNAL_SERVER_ERROR,
      );
    }
  }

  async update(car: CarUpdateDto): Promise<Car> {
    try {
      return await this.carModel.findByIdAndUpdate(car);
    } catch (error) {
      throw new HttpException(
        `Error while updating car: ${error.message}`,
        HttpStatus.INTERNAL_SERVER_ERROR,
      );
    }
  }

  async deleteById(carId: string): Promise<Car> {
    try {
      return await this.carModel.findByIdAndDelete(carId);
    } catch (error) {
      throw new HttpException(
        `Error while deleting car: ${error.message}`,
        HttpStatus.INTERNAL_SERVER_ERROR,
      );
    }
  }
}
