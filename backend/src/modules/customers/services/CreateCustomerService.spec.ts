import FakeCustomersRepository from '@modules/customers/repositories/fakes/FakeCustomersRepository';
import CreateCustomerService from './CreateCustomerService';

describe('CreateCustomer', () => {
  it('should be able to create a new customer', async () => {
    const fakeCustomersRepository = new FakeCustomersRepository();
    const createCustomerService = new CreateCustomerService(
      fakeCustomersRepository,
    );

    const customer = await createCustomerService.execute({
      name: 'Fulano',
      document: '12345678910',
      email: 'teste@teste.com',
    });

    expect(customer).toHaveProperty('id');
  });

  // TODO: others tests
});
