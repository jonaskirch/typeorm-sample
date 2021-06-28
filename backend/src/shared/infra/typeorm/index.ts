import { createConnection } from 'typeorm';
import config from '@shared/infra/typeorm/config';

createConnection(config);
