const { validateQuantity } = require('./validations/validationsInputValues');
const { insertSale, insertSaleProduct, findAll, findSaleById } = require('../models/sale.model');
const { findById } = require('./product.service');

const createSale = async (sales) => {
  const error = validateQuantity(sales);

  if (error.type) return error;

    const soldProducts = await Promise
      .all(sales.map((elem) => findById(elem.productId)));
    
  const verifyUndefinedProduct = soldProducts
    .some((elem) => elem === undefined || elem.message.id === undefined);

  if (verifyUndefinedProduct) return { type: 'PRODUCT_NOT_FOUND', message: 'Product not found' };

  const id = await insertSale();

  await Promise.all(sales
    .map((elem) => insertSaleProduct(id, elem.productId, elem.quantity)));

  return { message: { id, itemsSold: sales } };
};

const listSales = async () => {
  const allSales = await findAll();

  return { type: null, message: allSales };
};

const listSaleById = async (saleId) => {
  const sale = await findSaleById(saleId);

  console.log(sale);

  if (sale.length === 0) return { type: 'PRODUCT_NOT_FOUND', message: 'Sale not found' };

  return { type: null, message: sale };
};

module.exports = {
  createSale,
  listSales,
  listSaleById,
};