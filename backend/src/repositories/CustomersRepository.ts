import { EntityRepository, Repository } from 'typeorm';
import Customer from '../models/Customer';

@EntityRepository(Customer)
class CustomersRepository extends Repository<Customer> {
  public async findByDocument(document: string): Promise<Customer | null> {
    const find = await this.findOne({
      where: { document },
    });

    return find || null;
  }
}

export default CustomersRepository;
