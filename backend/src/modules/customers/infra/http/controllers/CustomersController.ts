import { Request, Response } from 'express';
import { container } from 'tsyringe';
import CustomersRepository from '@modules/customers/infra/typeorm/repositories/CustomersRepository';
import CreateCustomerService from '@modules/customers/services/CreateCustomerService';
import AppError from '@shared/errors/AppError';

class CustomersController {
  public async create(req: Request, resp: Response): Promise<Response> {
    const { name, document, email } = req.body;
    const createCustomerService = container.resolve(CreateCustomerService);
    const customer = await createCustomerService.execute({
      name,
      document,
      email,
    });
    return resp.json(customer);
  }

  public async index(req: Request, resp: Response): Promise<Response> {
    const customersRepository = new CustomersRepository();
    const customers = await customersRepository.findAll();
    return resp.json(customers);
  }

  public async show(req: Request, resp: Response): Promise<Response> {
    const customersRepository = new CustomersRepository();
    const { id } = req.params;
    const customer = await customersRepository.findById(id);
    if (!customer) {
      throw new AppError(`Doesn't exists customer with id ${id}`);
    }
    return resp.json(customer);
  }

  public async update(req: Request, resp: Response): Promise<Response> {
    const customersRepository = new CustomersRepository();
    const { id } = req.params;
    const { name, email } = req.body;

    let customer = await customersRepository.findById(id);
    if (!customer) {
      throw new AppError(`Doesn't exists customer with id ${id}`);
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
  }

  public async delete(req: Request, resp: Response): Promise<Response> {
    const customersRepository = new CustomersRepository();
    const { id } = req.params;
    const affected = await customersRepository.deleteById(id);
    if (!affected) throw new AppError(`Doesn't exists customer with id ${id}`);
    return resp.json({ id });
  }
}

export default CustomersController;
