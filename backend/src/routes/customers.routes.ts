import { Router } from 'express';

const customersRouter = Router();

customersRouter.post('/', (req, resp) => {
  const customer = req.body;
  return resp.json(customer);
});

customersRouter.get('/', (req, resp) => {
  return resp.json({ lista: 'ok' });
});

customersRouter.get('/:id', (req, resp) => {
  const { id } = req.params;
  return resp.json({ id });
});

customersRouter.put('/:id', (req, resp) => {
  const { id } = req.params;
  const customer = req.body;
  return resp.json({ id, ...customer });
});

customersRouter.delete('/:id', (req, resp) => {
  const { id } = req.params;
  return resp.json({ id });
});

export default customersRouter;
