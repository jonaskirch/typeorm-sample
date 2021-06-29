import { createConnection } from 'typeorm';
import connectionOptions from '@shared/infra/typeorm/config';

createConnection(connectionOptions());
