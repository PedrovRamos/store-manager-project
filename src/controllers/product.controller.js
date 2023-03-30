const { findAll, findById } = require('../services/product.service');
const errorMap = require('../utils/errorMap');

const listProducts = async (_request, response) => {
  const { type, message } = await findAll();
  if (type) return response.status(errorMap.mapError(type)).json(message);
  response.status(200).json(message);
};

const getProduct = async (request, response) => {
  const { id } = request.params;
  const { type, message } = await findById(id);
  if (type) return response.status(errorMap.mapError(type)).json({ message });
  return response.status(200).json(message);
};

module.exports = {
  listProducts,
  getProduct,
};