import Customer from '@modules/customers/infra/typeorm/entities/Customer';
import { injectable, inject } from 'tsyringe';
import AppError from '@shared/errors/AppError';
import ICustomersRepository from '../repositories/ICustomersRepository';

interface IRequest {
  name: string;
  document: string;
  email: string;
}

@injectable()
class CustomerService {
  constructor(
    @inject('CustomersRepository')
    private customersRepository: ICustomersRepository,
  ) {}

  public async create(
    organizationSlug: string,
    { name, document, email }: IRequest,
  ): Promise<Customer> {
    await this.customersRepository.initialize(organizationSlug);
    const find = await this.customersRepository.findByDocument(document);
    if (find) {
      throw new AppError('Already exists customer with same document');
    }

    const customer = await this.customersRepository.create({
      name,
      document,
      email,
    });

    return customer;
  }
}

export default CustomerService;
