import { getCustomRepository } from 'typeorm';
import CustomerRepository from '../repositories/CustomersRepository';
import Customer from '../models/Customer';

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
