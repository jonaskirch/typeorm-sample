import { getCustomRepository } from 'typeorm';
import Customer from '@modules/customers/infra/typeorm/entities/Customer';
import CustomerRepository from '@modules/customers/repositories/CustomersRepository';

interface Request {
  name: string;
  document: string;
  email: string;
}

class CreateCustomerService {
  public async execute({ name, document, email }: Request): Promise<Customer> {
    const customerRepository = getCustomRepository(CustomerRepository);

    const find = await customerRepository.findByDocument(document);
    if (find) {
      throw Error('Already exists customer with same document');
    }

    const customer = customerRepository.create({
      name,
      document,
      email,
    });

    await customerRepository.save(customer);

    return customer;
  }
}

export default CreateCustomerService;
