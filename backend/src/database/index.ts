import { createConnection } from 'typeorm';
import connectionOptions from '@config/database';

createConnection(connectionOptions());
