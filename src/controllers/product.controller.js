const { findAll, findById, insert } = require('../services/product.service');
const errorMap = require('../utils/errorMap');

const listProducts = async (_request, response) => {
  const { type, message } = await findAll();
  if (type) return response.status(errorMap.mapError(type)).json(message);
  response.status(200).json(message);
};

const getProduct = async (request, response) => {
  const { id } = request.params;
  console.log(Object.keys(request));
  const { type, message } = await findById(id);
  if (type) return response.status(errorMap.mapError(type)).json({ message });
  return response.status(200).json(message);
};

const insertProduct = async (_request, response) => {
  const { name } = _request.body;
  const { type, message } = await insert(name);
   if (type) return response.status(errorMap.mapError(type)).json({ message });
  return response.status(201).json(message);
};

module.exports = {
  listProducts,
  getProduct,
  insertProduct,
};