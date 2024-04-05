import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
  Scope,
} from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
import { CarCategoriesService } from './car-category.service';
import { CarCategory } from './car-category.schema';
import { CarCategoryUpdateDto } from './dtos/car-category.update.dto';
import { CarCategoryCreateDto } from './dtos/car-category.create.dto';

@ApiTags('Car Categories')
@Controller({ path: 'car-category', scope: Scope.DEFAULT })
export class CarCategoriesController {
  constructor(private readonly carCategoriesService: CarCategoriesService) {}

  @Get()
  async findAll(): Promise<CarCategory[]> {
    return await this.carCategoriesService.findAll();
  }

  @Get(':id')
  async findById(@Param() params: any): Promise<CarCategory> {
    return await this.carCategoriesService.findById(params.id);
  }

  @Post()
  async create(@Body() dto: CarCategoryCreateDto): Promise<CarCategory> {
    return await this.carCategoriesService.create(dto);
  }

  @Put()
  async update(@Body() dto: CarCategoryUpdateDto): Promise<CarCategory> {
    return await this.carCategoriesService.update(dto);
  }

  @Delete(':id')
  async deleteByid(@Param() params: any): Promise<CarCategory> {
    return await this.carCategoriesService.deleteById(params.id);
  }
}
