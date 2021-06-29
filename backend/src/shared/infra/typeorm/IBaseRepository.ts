import { Request } from 'express';

export default interface IBaseRepository<ICreateDTO, Entity> {
  create(data: ICreateDTO): Promise<Entity>;

  initialize(organizationSlug: string): Promise<void>;

  findAll(): Promise<Entity[]>;

  findById(id: string): Promise<Entity | undefined>;

  save(data: ICreateDTO): Promise<Entity>;

  deleteById(id: string): Promise<boolean>;
}
