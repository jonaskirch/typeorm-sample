import { injectable, inject } from 'tsyringe';
import { EntityTarget } from 'typeorm';
import BaseRepository from '@database/BaseRepository';
import ICustomerRepository from '@modules/customers/repositories/ICustomersRepository';
import ICreateCustomerDTO from '@modules/customers/dtos/ICreateCustomerDTO';
import Customer from '@modules/customers/entities/Customer';

@injectable()
class CustomersRepository
  extends BaseRepository<ICreateCustomerDTO, Customer>
  implements ICustomerRepository {
  constructor(@inject('Customer') customer: EntityTarget<Customer>) {
    super(customer);
  }

  public async findByDocument(document: string): Promise<Customer | undefined> {
    const find = await this.ormRepository.findOne({
      where: { document },
    });
    return find;
  }
}

export default CustomersRepository;
