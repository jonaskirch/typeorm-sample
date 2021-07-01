import ICustomerRepository from '@modules/customers/repositories/ICustomersRepository';
import ICreateCustomerDTO from '@modules/customers/dtos/ICreateCustomerDTO';

import Customer from '@modules/customers/entities/Customer';

class CustomersRepository implements ICustomerRepository {
  private customers: Customer[] = [];

  public async initialize(organizationSlug = 'main'): Promise<void> {
    this.customers = [];
  }

  public async create({
    name,
    document,
    email,
  }: ICreateCustomerDTO): Promise<Customer> {
    const customer = new Customer();
    Object.assign(customer, { id: 1, name, document, email });
    this.customers.push(customer);
    return customer;
  }

  public async findAll(): Promise<Customer[]> {
    return this.customers;
  }

  public async findById(id: string): Promise<Customer | undefined> {
    const find = this.customers.find(customer => customer.id === id);
    return find;
  }

  public async findByDocument(document: string): Promise<Customer | undefined> {
    const find = this.customers.find(
      customer => customer.document === document,
    );
    return find;
  }

  public async save(data: ICreateCustomerDTO): Promise<Customer> {
    // TODO:
    const customer = new Customer();
    return customer;
  }

  public async deleteById(id: string): Promise<boolean> {
    const index = this.customers.findIndex(customer => customer.id === id);
    if (index >= 0) return this.customers.splice(index, 1).length > 0;
    return false;
  }
}

export default CustomersRepository;
