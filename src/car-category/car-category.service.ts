import { Injectable } from '@nestjs/common';
import { Model } from 'mongoose';
import { InjectModel } from '@nestjs/mongoose';
import { CarCategory } from './car-category.schema';
import { CarCategoryUpdateDto } from './dtos/car-category.update.dto';
import { CarCategoryCreateDto } from './dtos/car-category.create.dto';

@Injectable()
export class CarCategoriesService {
  constructor(
    @InjectModel(CarCategory.name) private carCategoryModel: Model<CarCategory>,
  ) {}

  async findAll(): Promise<CarCategory[]> {
    return await this.carCategoryModel.find().exec();
  }

  async findById(id: string): Promise<CarCategory> {
    return await this.carCategoryModel.findById(id);
  }

  async create(category: CarCategoryCreateDto): Promise<CarCategory> {
    return await this.carCategoryModel.create(category);
  }

  async update(category: CarCategoryUpdateDto): Promise<CarCategory> {
    return await this.carCategoryModel.findByIdAndUpdate(category);
  }

  async deleteById(categoryId: string): Promise<CarCategory> {
    return await this.carCategoryModel.findByIdAndDelete(categoryId);
  }
}
