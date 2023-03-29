// const camelize = require('camelize');
const connect = require('./connect');

const findAlls = async () => {
  const [result] = await connect.execute(
    'SELECT * FROM products',
  );

  return result;
};

const findByIds = async (productId) => {
  const [[product]] = await connect.execute(
    'SELECT * FROM products WHERE id = ?',
    [productId],
  );
  return product;
};

module.exports = {
  findAlls,
  findByIds,
};
