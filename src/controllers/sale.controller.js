const { createSale } = require('../services/sale.service');
const errorMap = require('../utils/errorMap');

const insertSale = async (request, response) => {
  const soldProducts = request.body;
  const { type, message } = await createSale(soldProducts);
   if (type) return response.status(errorMap.mapError(type)).json({ message });
  return response.status(201).json(message);
};

module.exports = {
  insertSale,
};