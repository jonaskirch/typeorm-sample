import { DeleteResult } from 'typeorm';
import Customer from '@modules/customers/infra/typeorm/entities/Customer';
import ICreateCustomerDTO from '@modules/customers/dtos/ICreateCustomerDTO';

export default interface ICustomersRepository {
  create(data: ICreateCustomerDTO): Promise<Customer>;

  findAll(): Promise<Customer[]>;

  findById(id: number): Promise<Customer | undefined>;

  findByDocument(document: string): Promise<Customer | undefined>;

  save(data: ICreateCustomerDTO): Promise<Customer>;

  deleteById(id: number): Promise<DeleteResult>;
}
