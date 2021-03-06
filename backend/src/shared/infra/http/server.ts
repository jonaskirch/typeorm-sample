import 'reflect-metadata';
import dotenv from 'dotenv';
import express from 'express';
import routes from './routes';
import '@shared/infra/typeorm';

dotenv.config();

const app = express();

app.use(express.json());
app.use(routes);

app.listen(3333, () => {
  console.log('server running on port 3333');
});
