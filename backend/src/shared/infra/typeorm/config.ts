import { ConnectionOptions } from 'typeorm';

const options: ConnectionOptions = {
  type: 'postgres',
  name: 'main',
  host: process.env.DB_HOST,
  port: Number(process.env.DB_PORT),
  username: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_NAME,
  entities: ['./src/modules/**/infra/typeorm/entities/*.ts'],
  migrations: ['./src/shared/infra/typeorm/migrations/*.ts'],
  cli: {
    entitiesDir: './src/modules/**/infra/typeorm/entities/',
    migrationsDir: './src/shared/infra/typeorm/migrations/',
  },
};

export default options;
