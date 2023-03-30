const { expect } = require('chai');
const { findAll, findById } = require('../../../src/services/product.service');

describe('Testa se o service da minha aplicação', () => {
  it('Devolve um erro quando procura por um produto que não existe', async () => {
    const { message } = await findById(999)
    expect(message).to.equal('Product not found')
  })

  it('tem acesso a todos produtos', async () => {
    const { message, type } = await findAll()

    expect(type).to.equal(null)
    expect(message).to.be.instanceOf(Object)
  })
});
