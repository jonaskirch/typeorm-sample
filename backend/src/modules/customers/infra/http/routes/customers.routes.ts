import { Router } from 'express';
import CustomersController from '../controllers/CustomersController';

const customersRouter = Router();
const customersController = new CustomersController();

customersRouter.post('/', customersController.create);

customersRouter.get('/', customersController.index);

customersRouter.get('/:id', customersController.show);

customersRouter.put('/:id', customersController.update);

customersRouter.delete('/:id', customersController.delete);

export default customersRouter;
