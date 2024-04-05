import { HttpException, HttpStatus, Injectable, Scope } from '@nestjs/common';
import { Model } from 'mongoose';
import { InjectModel } from '@nestjs/mongoose';
import { CarCategory } from './car-category.schema';
import { CarCategoryUpdateDto } from './dtos/car-category.update.dto';
import { CarCategoryCreateDto } from './dtos/car-category.create.dto';

@Injectable({ scope: Scope.DEFAULT })
export class CarCategoriesService {
  constructor(
    @InjectModel(CarCategory.name) private carCategoryModel: Model<CarCategory>,
  ) {}

  async findAll(): Promise<CarCategory[]> {
    try {
      return await this.carCategoryModel.find().lean();
    } catch (error) {
      throw new HttpException(
        'Error while fetching categories',
        HttpStatus.INTERNAL_SERVER_ERROR,
      );
    }
  }

  async findById(id: string): Promise<CarCategory> {
    try {
      return await this.carCategoryModel.findById(id).lean();
    } catch (error) {
      throw new HttpException(
        `Error while fetching category ${id}`,
        HttpStatus.INTERNAL_SERVER_ERROR,
      );
    }
  }

  async create(category: CarCategoryCreateDto): Promise<CarCategory> {
    try {
      return await this.carCategoryModel.create(category);
    } catch (error) {
      throw new HttpException(
        `Error while creating category: ${error.message}`,
        HttpStatus.INTERNAL_SERVER_ERROR,
      );
    }
  }

  async update(category: CarCategoryUpdateDto): Promise<CarCategory> {
    try {
      return await this.carCategoryModel.findByIdAndUpdate(category);
    } catch (error) {
      throw new HttpException(
        `Error while updating category: ${error.message}`,
        HttpStatus.INTERNAL_SERVER_ERROR,
      );
    }
  }

  async deleteById(categoryId: string): Promise<CarCategory> {
    try {
      return await this.carCategoryModel.findByIdAndDelete(categoryId);
    } catch (error) {
      throw new HttpException(
        `Error while deleting category: ${error.message}`,
        HttpStatus.INTERNAL_SERVER_ERROR,
      );
    }
  }
}
