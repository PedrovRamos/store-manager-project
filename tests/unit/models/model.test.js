const { expect } = require('chai');
const { findAlls, findByIds } = require('../../../src/models/products.model');

describe('Testa se o model da minha aplicação', () => {
  it('tem acesso a todos os produtos', async () => {
    const products = await findAlls()

    expect(products).to.be.instanceOf(Array)
  })

  it('tem acesso a todos produtos pelo id', async () => {
    const product = await findByIds(1)

    expect(product).to.be.instanceOf(Object)
  })
});
