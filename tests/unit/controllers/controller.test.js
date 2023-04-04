const chai = require('chai');
const chaiHttp = require('chai-http');
const { listProducts, getProduct } = require('../../../src/controllers/product.controller');
const app = require('../../../src/app')
const { insertSale } = require('../../../src/controllers/sale.controller')

chai.use(chaiHttp);

describe('Testa se o controller da minha aplicação', () => {
  it('Devolve um erro, com status 404, quando procura por um produto que não existe', async () => {
    const response = await chai
      .request(app)
      .get('/products/999');
    chai.expect(response.status).to.be.equal(404);
  })
  // it('tem acesso a todos produtos', async () => {
  //   const { message, type } = await findAll()

  //   expect(type).to.equal(null)
  //   expect(message).to.be.instanceOf(Object)
  // })
  it('insere uma venda com sucesso', async () => {
    const response = await chai
      .request(app)
      .post('/sales')
      .send(
         [
            {
              "productId": 1,
              "quantity": 1
            },
            {
              "productId": 2,
              "quantity": 5
            }
        ]
      )
    chai.expect(response.status).to.be.equal(201);
  })
});
