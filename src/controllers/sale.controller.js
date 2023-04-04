const { createSale, listSales, listSaleById } = require('../services/sale.service');
const errorMap = require('../utils/errorMap');

const insertSale = async (request, response) => {
  const soldProducts = request.body;
  const { type, message } = await createSale(soldProducts);
   if (type) return response.status(errorMap.mapError(type)).json({ message });
  return response.status(201).json(message);
};

const findAll = async (_request, response) => {
  const { type, message } = await listSales();
   if (type) return response.status(errorMap.mapError(type)).json({ message });
  return response.status(200).json(message);
};

const findById = async (request, response) => {
  const { id } = request.params;
  const { type, message } = await listSaleById(id);
  if (type) return response.status(errorMap.mapError(type)).json({ message });
  return response.status(200).json(message);
};

module.exports = {
  insertSale,
  findAll,
  findById,
};