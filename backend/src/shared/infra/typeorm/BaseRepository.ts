import { getRepository, Repository, EntityTarget } from 'typeorm';
import IBaseRepository from './IBaseRepository';

class BaseRepository<ICreateDTO, Entity>
  implements IBaseRepository<ICreateDTO, Entity> {
  protected ormRepository: Repository<Entity>;

  constructor(entity: EntityTarget<Entity>) {
    this.ormRepository = getRepository(entity);
  }

  public async create(data: ICreateDTO): Promise<Entity> {
    const customer = this.ormRepository.create(data);
    await this.ormRepository.save(customer);
    return customer;
  }

  public async findAll(): Promise<Entity[]> {
    const customers = await this.ormRepository.find();
    return customers;
  }

  public async findById(id: string): Promise<Entity | undefined> {
    const customer = await this.ormRepository.findOne(id);
    return customer;
  }

  public async save(data: ICreateDTO): Promise<Entity> {
    const customer = await this.ormRepository.save(data);
    return customer;
  }

  public async deleteById(id: string): Promise<boolean> {
    const result = await this.ormRepository.delete(id);
    if (result && result.affected && result.affected > 0) return true;
    return false;
  }
}

export default BaseRepository;
