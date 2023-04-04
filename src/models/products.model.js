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

const inserts = async (product) => {
  const columns = Object.keys(product)
    .join(', ');
  
  const placeholders = Object.keys(product)
    .map((_key) => ('?'))
    .join(', ');

  const [{ insertId }] = await connect.execute(
    `INSERT INTO products (${columns}) VALUES (${placeholders})`,
    [...Object.values(product)],
  );

  return insertId;
};

const updateProducts = async (productId, name) => {
  await connect.execute(
    'UPDATE StoreManager.products SET name = ? WHERE id = ?',
    [name, productId],
  );
};

module.exports = {
  findAlls,
  findByIds,
  inserts,
  updateProducts,
};
