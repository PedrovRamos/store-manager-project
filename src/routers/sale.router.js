const express = require('express');
const { insertSale, findAll, findById } = require('../controllers/sale.controller');

const { validateNewSalesQuantity,
  validateProductId } = require('../middlewares/validateNewSalesQuantity');

const router = express.Router();

router.post('/', validateNewSalesQuantity, validateProductId, insertSale);
router.get('/', findAll);
router.get('/:id', findById);

module.exports = router;
