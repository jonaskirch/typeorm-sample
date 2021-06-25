import { Entity, Column } from 'typeorm';
import BaseEntity from '@shared/infra/typeorm/BaseEntity';

@Entity('customers')
class Customer extends BaseEntity {
  @Column()
  name: string;

  @Column()
  document: string;

  @Column()
  email: string;
}

export default Customer;
