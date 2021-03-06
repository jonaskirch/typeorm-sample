import { MigrationInterface, QueryRunner, Table } from 'typeorm';

export default class CreateCustomers1614550098782
  implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.createTable(
      new Table({
        name: 'customers',
        columns: [
          {
            name: 'id',
            type: 'integer',
            isPrimary: true,
            isGenerated: true,
            generationStrategy: 'increment',
          },
          {
            name: 'name',
            type: 'varchar',
            // isNullable: false,
          },
          {
            name: 'document',
            type: 'varchar',
            isUnique: true,
            isNullable: true,
          },
          {
            name: 'email',
            type: 'varchar',
            isNullable: true,
          },
          // {
          //   name: 'createdAt',
          //   type: 'timestamp with time zone',
          // },
        ],
      }),
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropTable('customers');
  }
}
