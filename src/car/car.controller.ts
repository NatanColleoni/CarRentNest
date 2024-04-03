import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
} from '@nestjs/common';
import { CarsService } from './car.service';
import { Car } from './car.schema';
import { CarCreateDto } from './dtos/car.create.dto';
import { CarUpdateDto } from './dtos/car.update.dto';
import { ApiTags } from '@nestjs/swagger';

@ApiTags('Cars')
@Controller('cars')
export class CarsController {
  constructor(private readonly carsService: CarsService) {}

  @Get()
  async findAll(): Promise<Car[]> {
    return await this.carsService.findAll();
  }

  @Get(':id')
  async findById(@Param() params: any): Promise<Car> {
    return await this.carsService.findById(params.id);
  }

  @Post()
  async create(@Body() dto: CarCreateDto): Promise<Car> {
    return await this.carsService.create(dto);
  }

  @Put()
  async update(@Body() dto: CarUpdateDto): Promise<Car> {
    return await this.carsService.update(dto);
  }

  @Delete(':id')
  async deleteByid(@Param() params: any): Promise<Car> {
    return await this.carsService.deleteById(params.id);
  }
}
