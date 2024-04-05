import { HttpException, HttpStatus, Injectable, Scope } from '@nestjs/common';
import { Customer } from './customer.schema';
import { CustomerUpdateDto } from './dto/customer.update.dto';
import { Model } from 'mongoose';
import { InjectModel } from '@nestjs/mongoose';
import { CustomerCreateDto } from './dto/customer.create.dto';

@Injectable({ scope: Scope.DEFAULT })
export class CustomersService {
  constructor(
    @InjectModel(Customer.name) private customerModel: Model<Customer>,
  ) {}

  async findAll(): Promise<Customer[]> {
    try {
      return await this.customerModel.find().lean();
    } catch (error) {
      throw new HttpException(
        `Error while fetching customers: ${error.message}`,
        HttpStatus.INTERNAL_SERVER_ERROR,
      );
    }
  }

  async findById(id: string): Promise<Customer> {
    try {
      return await this.customerModel.findById(id).lean();
    } catch (error) {
      throw new HttpException(
        `Error while fetching customer ${id}`,
        HttpStatus.INTERNAL_SERVER_ERROR,
      );
    }
  }

  async create(customer: CustomerCreateDto): Promise<Customer> {
    try {
      return await this.customerModel.create(customer);
    } catch (error) {
      throw new HttpException(
        `Error while creating customer: ${error.message}`,
        HttpStatus.INTERNAL_SERVER_ERROR,
      );
    }
  }

  async update(customer: CustomerUpdateDto): Promise<Customer> {
    try {
      return await this.customerModel.findByIdAndUpdate(customer);
    } catch (error) {
      throw new HttpException(
        `Error while updating customer: ${error.message}`,
        HttpStatus.INTERNAL_SERVER_ERROR,
      );
    }
  }

  async deleteById(customerId: string): Promise<Customer> {
    try {
      return await this.customerModel.findByIdAndDelete(customerId);
    } catch (error) {
      throw new HttpException(
        `Error while deleting customer: ${error.message}`,
        HttpStatus.INTERNAL_SERVER_ERROR,
      );
    }
  }
}
