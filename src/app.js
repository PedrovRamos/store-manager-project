const express = require('express');
const { getProduct, listProducts } = require('./controllers/product.controller');

// const { findAll, findById } = require('./services/product.service');

const app = express();

// não remova esse endpoint, é para o avaliador funcionar
app.get('/', (_request, response) => {
  response.send();
});

app.get('/products', listProducts);

app.get('/products/:id', getProduct);

// não remova essa exportação, é para o avaliador funcionar
// você pode registrar suas rotas normalmente, como o exemplo acima
// você deve usar o arquivo index.js para executar sua aplicação 
module.exports = app;