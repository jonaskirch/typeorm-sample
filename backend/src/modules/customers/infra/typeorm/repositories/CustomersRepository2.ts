import BaseRepository from '@shared/infra/typeorm/BaseRepository';
import ICustomerRepository2 from '@modules/customers/repositories/ICustomersRepository2';
import ICreateCustomerDTO from '@modules/customers/dtos/ICreateCustomerDTO';
import Customer from '@modules/customers/infra/typeorm/entities/Customer';

class CustomersRepository2
  extends BaseRepository<ICreateCustomerDTO, Customer>
  implements ICustomerRepository2 {
  public async findByDocument(document: string): Promise<Customer | undefined> {
    const find = await this.ormRepository.findOne({
      where: { document },
    });
    return find;
  }
}

export default CustomersRepository2;
