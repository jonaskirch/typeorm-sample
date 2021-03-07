import { DeleteResult, getRepository, Repository } from 'typeorm';
import ICustomerRepository from '@modules/customers/repositories/ICustomersRepository';
import ICreateCustomerDTO from '@modules/customers/dtos/ICreateCustomerDTO';
import Customer from '@modules/customers/infra/typeorm/entities/Customer';

class CustomersRepository implements ICustomerRepository {
  private ormRepository: Repository<Customer>;

  constructor() {
    this.ormRepository = getRepository(Customer);
  }

  public async create({
    name,
    document,
    email,
  }: ICreateCustomerDTO): Promise<Customer> {
    const customer = this.ormRepository.create({ name, document, email });
    await this.ormRepository.save(customer);
    return customer;
  }

  public async findAll(): Promise<Customer[]> {
    const customers = await this.ormRepository.find();
    return customers;
  }

  public async findById(id: number): Promise<Customer | undefined> {
    const customer = await this.ormRepository.findOne(id);
    return customer;
  }

  public async findByDocument(document: string): Promise<Customer | undefined> {
    const find = await this.ormRepository.findOne({
      where: { document },
    });

    return find;
  }

  public async save(data: ICreateCustomerDTO): Promise<Customer> {
    const customer = await this.ormRepository.save(data);
    return customer;
  }

  public async deleteById(id: number): Promise<DeleteResult> {
    const result = await this.ormRepository.delete(id);
    return result;
  }
}

export default CustomersRepository;
