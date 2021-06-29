import { Request, Response } from 'express';
import { container } from 'tsyringe';
import CustomersRepository from '@modules/customers/infra/typeorm/repositories/CustomersRepository';
import CreateCustomerService from '@modules/customers/services/CreateCustomerService';
import AppError from '@shared/errors/AppError';

class CustomersController {
  public async create(req: Request, resp: Response): Promise<Response> {
    const organizationSlug = `${req.headers['x-organization-slug']}`;
    const { name, document, email } = req.body;
    const createCustomerService = container.resolve(CreateCustomerService);
    const customer = await createCustomerService.execute(organizationSlug, {
      name,
      document,
      email,
    });
    return resp.json(customer);
  }

  public async index(req: Request, resp: Response): Promise<Response> {
    const organizationSlug = `${req.headers['x-organization-slug']}`;
    const customersRepository = container.resolve(CustomersRepository);
    await customersRepository.initialize(organizationSlug);
    const customers = await customersRepository.findAll();
    return resp.json(customers);
  }

  public async show(req: Request, resp: Response): Promise<Response> {
    const organizationSlug = `${req.headers['x-organization-slug']}`;
    const customersRepository = container.resolve(CustomersRepository);
    const { id } = req.params;
    await customersRepository.initialize(organizationSlug);
    const customer = await customersRepository.findById(id);
    if (!customer) {
      throw new AppError(`Doesn't exists customer with id ${id}`);
    }
    return resp.json(customer);
  }

  public async update(req: Request, resp: Response): Promise<Response> {
    const organizationSlug = `${req.headers['x-organization-slug']}`;
    const customersRepository = container.resolve(CustomersRepository);
    const { id } = req.params;
    const { name, email } = req.body;

    await customersRepository.initialize(organizationSlug);
    let customer = await customersRepository.findById(id);
    if (!customer) {
      throw new AppError(`Doesn't exists customer with id ${id}`);
    }
    customer = await customersRepository.save({ ...customer, name, email });
    return resp.json(customer);
  }

  public async delete(req: Request, resp: Response): Promise<Response> {
    const organizationSlug = `${req.headers['x-organization-slug']}`;
    const customersRepository = container.resolve(CustomersRepository);
    await customersRepository.initialize(organizationSlug);
    const { id } = req.params;
    const affected = await customersRepository.deleteById(id);
    if (!affected) throw new AppError(`Doesn't exists customer with id ${id}`);
    return resp.json({ id });
  }
}

export default CustomersController;
