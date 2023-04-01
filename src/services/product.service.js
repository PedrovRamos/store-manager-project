const { findAlls, findByIds, inserts } = require('../models/products.model');
const { validateId, validateNewProduct } = require('./validations/validationsInputValues');

const findAll = async () => {
  const products = await findAlls();
  return { type: null, message: products };
};

const findById = async (productId) => {
  const error = validateId(productId);
  if (error.type) return error;

  const product = await findByIds(productId);
  if (product) return { type: null, message: product };
  return { type: 'PRODUCT_NOT_FOUND', message: 'Product not found' };
};

const insert = async (name) => {
  const error = validateNewProduct(name);
  if (error.type) return error;
  
  const newProductId = await inserts({ name });
  const newProduct = await findByIds(newProductId);

  return { type: null, message: newProduct };
};

module.exports = {
  findAll,
  findById,
  insert,
};