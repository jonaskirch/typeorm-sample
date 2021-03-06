import { Router } from 'express';
import { getCustomRepository } from 'typeorm';
import CustomersRepository from '../repositories/CustomersRepository';
import CreateCustomerService from '../services/CreateCustomerService';

const customersRouter = Router();

customersRouter.post('/', async (req, resp) => {
  try {
    const { name, document, email } = req.body;
    const createCustomerService = new CreateCustomerService();
    const customer = await createCustomerService.execute({
      name,
      document,
      email,
    });
    return resp.json(customer);
  } catch (err) {
    return resp.status(400).json({ error: err.message });
  }
});

customersRouter.get('/', async (req, resp) => {
  const customersRepository = getCustomRepository(CustomersRepository);
  const customers = await customersRepository.find();
  return resp.json(customers);
});

customersRouter.get('/:id', async (req, resp) => {
  const { id } = req.params;
  const customersRepository = getCustomRepository(CustomersRepository);
  const customer = await customersRepository.findOne(id);
  return resp.json(customer);
});

customersRouter.put('/:id', async (req, resp) => {
  const { id } = req.params;
  const { name, email } = req.body;
  const customersRepository = getCustomRepository(CustomersRepository);

  let customer = await customersRepository.findOne(id);
  if (!customer) {
    return resp
      .status(400)
      .json({ error: `Don't exists customer with id ${id}` });
  }
  customer = await customersRepository.save({ ...customer, name, email });
  return resp.json(customer);

  // const { affected } = await customersRepository.update(id, { name, email });
  // if (!affected)
  //   return resp
  //     .status(400)
  //     .json({ error: `Don't exists customer with id ${id}` });
  // const customer = await customersRepository.findOne(id);
  // return resp.json(customer);

  // const customer = await customersRepository.preload({
  //   id: Number(id),
  //   name,
  //   email,
  // });
  // const c = await customersRepository.save(customer);
  // resp.json(c);
});

customersRouter.delete('/:id', async (req, resp) => {
  const { id } = req.params;
  const customersRepository = getCustomRepository(CustomersRepository);
  const { affected } = await customersRepository.delete(id);
  if (!affected)
    return resp
      .status(400)
      .json({ error: `Don't exists customer with id ${id}` });
  return resp.json({ id });
});

export default customersRouter;
