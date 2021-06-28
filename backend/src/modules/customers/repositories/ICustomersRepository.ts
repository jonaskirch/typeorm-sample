import IBaseRepository from '@shared/infra/typeorm/IBaseRepository';
import Customer from '@modules/customers/infra/typeorm/entities/Customer';
import ICreateCustomerDTO from '@modules/customers/dtos/ICreateCustomerDTO';

export default interface ICustomersRepository2
  extends IBaseRepository<ICreateCustomerDTO, Customer> {
  findByDocument(document: string): Promise<Customer | undefined>;
}
