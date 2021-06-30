import { createConnection } from 'typeorm';
import connectionOptions from '@config/typeorm';

createConnection(connectionOptions());
