const express = require('express');
const { insertSale } = require('../controllers/sale.controller');

const { validateNewSalesQuantity,
  validateProductId } = require('../middlewares/validateNewSalesQuantity');

const router = express.Router();

router.post('/', validateNewSalesQuantity, validateProductId, insertSale);

module.exports = router;
