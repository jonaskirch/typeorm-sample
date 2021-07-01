import { ConnectionOptions } from 'typeorm';

// https://tech.canyonlegal.com/multitenancy-with-nestjs-typeorm-postgres

function getConnectionOptions(organizationSlug = 'main'): ConnectionOptions {
  return {
    name: organizationSlug,
    database: organizationSlug,
    type: 'postgres',
    host: process.env.DB_HOST,
    port: Number(process.env.DB_PORT),
    username: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    migrationsRun: true,
    entities: ['./src/modules/**/entities/*.ts'],
    migrations: ['./src/database/migrations/*.ts'],
    cli: {
      entitiesDir: './src/modules/**/entities/',
      migrationsDir: './src/database/migrations/',
    },
  };
}

export default getConnectionOptions;
