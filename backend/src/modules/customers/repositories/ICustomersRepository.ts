import IBaseRepository from '@database/IBaseRepository';
import Customer from '@modules/customers/entities/Customer';
import ICreateCustomerDTO from '@modules/customers/dtos/ICreateCustomerDTO';

export default interface ICustomersRepository
  extends IBaseRepository<ICreateCustomerDTO, Customer> {
  findByDocument(document: string): Promise<Customer | undefined>;
}
