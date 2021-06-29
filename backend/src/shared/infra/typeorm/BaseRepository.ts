import {
  Repository,
  EntityTarget,
  createConnection,
  getConnectionManager,
  ConnectionOptions,
} from 'typeorm';
import connectionOptions from '@shared/infra/typeorm/config';
import { createDatabase } from 'typeorm-extension';
import IBaseRepository from './IBaseRepository';

class BaseRepository<ICreateDTO, Entity>
  implements IBaseRepository<ICreateDTO, Entity> {
  protected ormRepository: Repository<Entity>;

  private entity: EntityTarget<Entity>;

  constructor(entity: EntityTarget<Entity>) {
    this.entity = entity;
  }

  public async initialize(organizationSlug = 'main'): Promise<void> {
    const connection = await this.getConnection(organizationSlug);
    this.ormRepository = connection.getRepository<Entity>(this.entity);
  }

  private async getConnection(organizationSlug: string) {
    const connectionManager = getConnectionManager();
    if (connectionManager.has(organizationSlug)) {
      const connection = connectionManager.get(organizationSlug);
      return Promise.resolve(
        connection.isConnected ? connection : connection.connect(),
      );
    }

    const options: ConnectionOptions = connectionOptions(organizationSlug);
    await createDatabase({ ifNotExist: true }, options);
    return createConnection(options);
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
