import { container } from 'tsyringe';
import ICustomersRepository from '@modules/customers/repositories/ICustomersRepository';
import CustomersRepository from '@modules/customers/infra/typeorm/repositories/CustomersRepository';
import ICustomersRepository2 from '@modules/customers/repositories/ICustomersRepository2';
import CustomersRepository2 from '@modules/customers/infra/typeorm/repositories/CustomersRepository2';
// import Customer from '@modules/customers/infra/typeorm/entities/Customer';

container.registerSingleton<ICustomersRepository>(
  'CustomersRepository',
  CustomersRepository,
);

container.registerSingleton<ICustomersRepository2>(
  'CustomersRepository2',
  CustomersRepository2,
);

// container.registerSingleton<ICustomersRepository2>('Customer', Customer);
