const { idSchema, addProductSchema } = require('./schema');
// const { products.model } = require('../../models')

const validateId = (id) => {
  const { error } = idSchema.validate(id);
  if (error) return { type: 'INPUT_VALUE', message: '"id" must be a number' };
  return { type: null, message: '' };
};

const validateNewProduct = (name) => {
  const { error } = addProductSchema.validate({ name });
  if (error) return { type: 'INPUT_VALUE', message: error.message };
  return { type: null, message: '' };
};

module.exports = {
  validateId,
  validateNewProduct,
};