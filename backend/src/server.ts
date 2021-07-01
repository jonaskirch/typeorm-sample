import 'reflect-metadata';
import '@config/dotenv';
import express from 'express';
import 'express-async-errors';
import errorsMiddleware from '@middlewares/errorsMiddleware';
import routes from './routes';
import '@container/index';
import '@database/index';

const app = express();

app.use(express.json());
app.use(routes);
app.use(errorsMiddleware);

app.listen(3333, () => {
  console.log('server running on port 3333');
});
