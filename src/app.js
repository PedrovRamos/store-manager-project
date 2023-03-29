const express = require('express');

const { findAll, findById } = require('./services/product.service');

const app = express();

// não remova esse endpoint, é para o avaliador funcionar
app.get('/', (_request, response) => {
  response.send();
});

app.get('/products', async (_request, response) => {
  const result = await findAll();
  return response.status(200).send(result.message);
});

app.get('/products/:id', async (_request, response) => {
  const { id } = _request.params;
  const { type, message } = await findById(id);

  if (type) return response.status(404).json({ message });

  response.status(200).json(message);
});

// não remova essa exportação, é para o avaliador funcionar
// você pode registrar suas rotas normalmente, como o exemplo acima
// você deve usar o arquivo index.js para executar sua aplicação 
module.exports = app;