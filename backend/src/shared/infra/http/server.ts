import 'reflect-metadata';
import dotenv from 'dotenv';
import express from 'express';
import 'express-async-errors';
import errorsMiddleware from '@shared/infra/http/middlewares/errorsMiddleware';
import routes from './routes';
import '@shared/infra/typeorm';
import '@shared/container';

dotenv.config();

const app = express();

app.use(express.json());
app.use(routes);
app.use(errorsMiddleware);

app.listen(3333, () => {
  console.log('server running on port 3333');
});
