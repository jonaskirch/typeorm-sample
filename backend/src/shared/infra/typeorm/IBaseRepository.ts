export default interface IBaseRepository<ICreateDTO, Entity> {
  create(data: ICreateDTO): Promise<Entity>;

  findAll(): Promise<Entity[]>;

  findById(id: string): Promise<Entity | undefined>;

  save(data: ICreateDTO): Promise<Entity>;

  deleteById(id: string): Promise<boolean>;
}
