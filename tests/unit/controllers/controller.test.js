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
              "quantity": 1
            }
        ]
      )
    chai.expect(response.status).to.be.equal(400);
  })

  it('Busca uma venda pelo id', async () => {
    const response = await chai
      .request(app)
      .get('/sales/1')
    chai.expect(response.status).to.be.equal(200);
  })

  it('Retorna um erro caso o id passado não exista', async () => {
    const response = await chai
      .request(app)
      .get('/sales/999')
    chai.expect(response.status).to.be.equal(404);
    chai.expect(response.body.message).to.be.equal("Sale not found")
  })
});
