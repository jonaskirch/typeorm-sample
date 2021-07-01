import { container } from 'tsyringe';
// import ICustomersRepository from '@modules/customers/repositories/ICustomersRepository';
import CustomersRepository from '@modules/customers/repositories/CustomersRepository';
import Customer from '@modules/customers/entities/Customer';

container.registerSingleton<CustomersRepository>(
  'CustomersRepository',
  CustomersRepository,
);

container.registerInstance('Customer', Customer);
