const connect = require('./connect');

const insertSale = async () => {
  const [{ insertId }] = await connect.execute(
    'INSERT INTO StoreManager.sales (date) VALUE (NOW())',
  );

  return insertId;
};

const insertSaleProduct = async (saleId, productId, quantity) => {
  await connect.execute(
    'INSERT INTO StoreManager.sales_products (sale_id, product_id, quantity) VALUES (?, ?, ?)',
    [saleId, productId, quantity],
  );
};

// const findAll = async () => {
//   const [sales] = await connection.execute(
//     `SELECT sp.sale_id, s.date, sp.product_id, sp.quantity
//     FROM StoreManager.sales_products AS sp
//     INNER JOIN StoreManager.sales AS s
//     ON sale_id = id
//     ORDER BY sp.sale_id, sp.product_id`,
//   );

//   sales;
// };

// const findById = async (saleId) => {
//   const [sale] = await connection.execute(
//     `SELECT s.date, sp.product_id, sp.quantity
//     FROM StoreManager.sales_products AS sp
//     INNER JOIN StoreManager.sales AS s
//     ON sale_id = id
//     WHERE sp.sale_id = ?
//     ORDER BY sp.product_id`, [saleId],
//   );

//   sale;
// };

module.exports = {
  insertSale,
  insertSaleProduct,
};