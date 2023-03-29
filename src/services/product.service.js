const { findAlls, findByIds } = require('../models/products.model');
const { validateId } = require('./validations/validationsInputValues');

const findAll = async () => {
  const products = await findAlls();
  return { type: null, message: products };
};

const findById = async (productId) => {
  const error = validateId(productId);
  if (error.type) return error;

  const product = await findByIds(productId);
  if (product) return { type: null, message: product };
  return { type: 'PASSENGER_NOT_FOUND', message: 'Product not found' };
};

module.exports = {
  findAll,
  findById,
};