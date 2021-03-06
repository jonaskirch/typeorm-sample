import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity('customers')
class Customer {
  @PrimaryGeneratedColumn('increment')
  id: number;

  @Column()
  name: string;

  @Column()
  document: string;

  @Column()
  email: string;
}

export default Customer;
