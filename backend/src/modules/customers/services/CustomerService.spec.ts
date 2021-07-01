import FakeCustomersRepository from '@modules/customers/repositories/fakes/FakeCustomersRepository';
import CustomerService from './CustomerService';

describe('CreateCustomer', () => {
  it('should be able to create a new customer', async () => {
    const fakeCustomersRepository = new FakeCustomersRepository();
    const customerService = new CustomerService(fakeCustomersRepository);

    const customer = await customerService.create({
      name: 'Fulano',
      document: '12345678910',
      email: 'teste@teste.com',
    });

    expect(customer).toHaveProperty('id');
  });

  // TODO: others tests
});
