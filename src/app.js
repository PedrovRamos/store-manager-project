const express = require('express');
const { getProduct, listProducts, insertProduct } = require('./controllers/product.controller');

// const { findAll, findById } = require('./services/product.service');

const app = express();

app.use(express.json());

// não remova esse endpoint, é para o avaliador funcionar
app.get('/', (_request, response) => {
  response.send();
});

app.get('/products', listProducts);

app.get('/products/:id', getProduct);

app.post('/products', insertProduct);

// não remova essa exportação, é para o avaliador funcionar
// você pode registrar suas rotas normalmente, como o exemplo acima
// você deve usar o arquivo index.js para executar sua aplicação 
module.exports = app;