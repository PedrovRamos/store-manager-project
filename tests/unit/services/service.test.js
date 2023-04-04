const { expect } = require('chai');
const { findAll, findById } = require('../../../src/services/product.service');
const { createSale } = require('../../../src/services/sale.service');
const chai = require('chai');
const chaiHttp = require('chai-http');
chai.use(chaiHttp);
const app = require('../../../src/app')

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

  it('Retorna um erro caso o id passado não exista', async () => {
    const response = await chai
      .request(app)
      .get('/products/999')
    chai.expect(response.status).to.be.equal(404);
    chai.expect(response.body.message).to.be.equal("Product not found")
  })

  it('Retorna todos os produtos', async () => {
    const response = await chai
      .request(app)
      .get('/products')
    chai.expect(response.status).to.be.equal(200);
    chai.expect(response.body.message).to.be.instanceOf(Object)
  })

});
