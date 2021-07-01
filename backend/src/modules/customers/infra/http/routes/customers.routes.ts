import { Router } from 'express';
import {
  createCustomer,
  updateCustomer,
} from '@modules/customers/validators/CustomersValidator';
import validate from '@shared/infra/http/middlewares/validatorMiddleware';
import CustomersController from '../controllers/CustomersController';

const customersRouter = Router();
const customersController = new CustomersController();

customersRouter.post(
  '/',
  validate(createCustomer, 'body'),
  customersController.create,
);

customersRouter.put(
  '/:id',
  validate(updateCustomer, 'body'),
  customersController.update,
);

customersRouter.get('/', customersController.index);

customersRouter.get('/:id', customersController.show);

customersRouter.delete('/:id', customersController.delete);

export default customersRouter;
