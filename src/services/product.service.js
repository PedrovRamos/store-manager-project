const { findAlls, findByIds, inserts, updateProducts } = require('../models/products.model');
const { validateId, validateNewProduct } = require('./validations/validationsInputValues');

const findAll = async () => {
  const products = await findAlls();
  return { type: null, message: products };
};

const findById = async (productId) => {
  const error = validateId(productId);
  if (error.type) return error;

  const product = await findByIds(productId);
  if (!product) return { type: 'PRODUCT_NOT_FOUND', message: 'Product not found' };
  return { type: null, message: product };
};

const insert = async (name) => {
  const error = validateNewProduct(name);
  if (error.type) return error;
  
  const newProductId = await inserts({ name });
  const newProduct = await findByIds(newProductId);

  return { type: null, message: newProduct };
};

const updateProduct = async (productId, name) => {
  const err = validateNewProduct(name);
  if (err.type) return err;

  const selectedProduct = await findByIds(productId);
  if (!selectedProduct) return { type: 'PRODUCT_NOT_FOUND', message: 'Product not found' };

  await updateProducts(productId, name);

  const updatedProduct = { id: productId, name };
  return { type: null, message: updatedProduct };
};

module.exports = {
  findAll,
  findById,
  insert,
  updateProduct,
};