import { Injectable } from '@nestjs/common';
import { Customer } from './customer.schema';
import { CustomerUpdateDto } from './dto/customer.update.dto';
import { Model } from 'mongoose';
import { InjectModel } from '@nestjs/mongoose';
import { CustomerCreateDto } from './dto/customer.create.dto';

@Injectable()
export class CustomersService {
  constructor(
    @InjectModel(Customer.name) private customerModel: Model<Customer>,
  ) {}

  async findAll(): Promise<Customer[]> {
    return await this.customerModel.find().exec();
  }

  async findById(id: string): Promise<Customer> {
    return await this.customerModel.findById(id);
  }

  async create(customer: CustomerCreateDto): Promise<Customer> {
    return await this.customerModel.create(customer);
  }

  async update(customer: CustomerUpdateDto): Promise<Customer> {
    return await this.customerModel.findByIdAndUpdate(customer);
  }

  async deleteById(customerId: string): Promise<Customer> {
    return await this.customerModel.findByIdAndDelete(customerId);
  }
}
