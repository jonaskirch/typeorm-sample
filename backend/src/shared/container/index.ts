import { container } from 'tsyringe';
import ICustomersRepository from '@modules/customers/repositories/ICustomersRepository';
import CustomersRepository from '@modules/customers/infra/typeorm/repositories/CustomersRepository';
import Customer from '@modules/customers/infra/typeorm/entities/Customer';

container.registerSingleton<ICustomersRepository>(
  'CustomersRepository',
  CustomersRepository,
);

container.registerInstance('Customer', Customer);
