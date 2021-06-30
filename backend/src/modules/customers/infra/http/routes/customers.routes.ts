import { Router } from 'express';
import {
  createCustomer,
  updateCustomer,
} from '@modules/customers/validators/CustomersValidator';
import Validator from '@shared/infra/http/middlewares/validatorMiddleware';
import CustomersController from '../controllers/CustomersController';

const customersRouter = Router();
const customersController = new CustomersController();

customersRouter.post(
  '/',
  Validator.check(createCustomer, 'body'),
  customersController.create,
);

customersRouter.get('/', customersController.index);

customersRouter.get('/:id', customersController.show);

customersRouter.put(
  '/:id',
  Validator.check(updateCustomer, 'body'),
  customersController.update,
);

customersRouter.delete('/:id', customersController.delete);

export default customersRouter;
