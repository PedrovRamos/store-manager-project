const validateNewSalesQuantity = (req, res, next) => {
  const sales = req.body;

  const quantity = sales.every((each) => Object.keys(each).includes('quantity'));

  if (!quantity) return res.status(400).json({ message: '"quantity" is required' });

  return next();
};

const validateProductId = (req, res, next) => {
  const product = req.body;

  const productId = product.every((elem) => Object.keys(elem).includes('productId'));

  if (!productId) return res.status(400).json({ message: '"productId" is required' });

  return next();
};

module.exports = {
  validateNewSalesQuantity,
  validateProductId,
};