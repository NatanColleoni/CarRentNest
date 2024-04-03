import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
} from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
import { Customer } from './customer.schema';
import { CustomerCreateDto } from './dto/customer.create.dto';
import { CustomerUpdateDto } from './dto/customer.update.dto';
import { CustomersService } from './customer.service';

@ApiTags('Customers')
@Controller('customers')
export class CustomersController {
  constructor(private readonly customersService: CustomersService) {}

  @Get()
  async findAll(): Promise<Customer[]> {
    return await this.customersService.findAll();
  }

  @Get(':id')
  async findById(@Param() params: any): Promise<Customer> {
    return await this.customersService.findById(params.id);
  }

  @Post()
  async create(@Body() dto: CustomerCreateDto): Promise<Customer> {
    return await this.customersService.create(dto);
  }

  @Put()
  async update(@Body() dto: CustomerUpdateDto): Promise<Customer> {
    return await this.customersService.update(dto);
  }

  @Delete(':id')
  async deleteByid(@Param() params: any): Promise<Customer> {
    return await this.customersService.deleteById(params.id);
  }
}
