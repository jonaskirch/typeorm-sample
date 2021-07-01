import { MigrationInterface, QueryRunner, Table } from 'typeorm';
// import { createDatabase, dropDatabase } from 'typeorm-extension';
// import config from '@shared/infra/typeorm/config';

export default class CreateCustomers1614550098782
  implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    // await queryRunner.createDatabase('typeorm_sample', true);
    // await createDatabase(undefined, config);
    await queryRunner.createTable(
      new Table({
        name: 'customers',
        columns: [
          {
            name: 'id',
            type: 'varchar',
            isPrimary: true,
            // isGenerated: true,
            generationStrategy: 'uuid',
            default: 'uuid_generate_v4()',
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
          {
            name: 'createdAt',
            type: 'timestamp with time zone',
            default: 'NOW()',
          },
          {
            name: 'updateAt',
            type: 'timestamp with time zone',
            default: 'NOW()',
          },
        ],
      }),
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropTable('customers');
    // await queryRunner.dropDatabase('typeorm_sample');
    // await dropDatabase(undefined, config);
  }
}
