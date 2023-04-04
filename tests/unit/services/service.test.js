const { expect } = require('chai');
const { findAll, findById } = require('../../../src/services/product.service');
const { createSale } = require('../../../src/services/sale.service');

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

  it('cria uma nova venda com sucesso', async () => {
    const { message, type } = await createSale(
      [
          {
            "productId": 1,
            "quantity": 1
          },
          {
            "productId": 2,
            "quantity": 5
          }
      ])

    expect(message).to.be.instanceOf(Object)
  })

});
