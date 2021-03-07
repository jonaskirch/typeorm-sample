import Customer from '@modules/customers/infra/typeorm/entities/Customer';
import { injectable, inject } from 'tsyringe';
import ICustomersRepository from '../repositories/ICustomersRepository';

interface IRequest {
  name: string;
  document: string;
  email: string;
}

@injectable()
class CreateCustomerService {
  constructor(
    @inject('CustomersRepository')
    private customersRepository: ICustomersRepository,
  ) {}

  public async execute({ name, document, email }: IRequest): Promise<Customer> {
    const find = await this.customersRepository.findByDocument(document);
    if (find) {
      throw Error('Already exists customer with same document');
    }

    const customer = await this.customersRepository.create({
      name,
      document,
      email,
    });

    return customer;
  }
}

export default CreateCustomerService;
