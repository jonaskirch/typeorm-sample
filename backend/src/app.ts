import 'reflect-metadata';
import '@config/dotenv';
import express, { Express } from 'express';
import 'express-async-errors';
import errorsMiddleware from '@middlewares/errorsMiddleware';
import routes from './routes';
import '@container/index';
import '@database/index';

class App {
  public server: Express;

  constructor() {
    this.server = express();
    this.middlewares();
    this.routes();
  }

  private middlewares() {
    this.server.use(express.json());
    this.server.use(routes);
    this.server.use(errorsMiddleware); // :TODO pq antes da rota nao funciona a validacao no create?
  }

  private routes() {
    // this.server.use(routes);
  }
}

export default new App().server;
