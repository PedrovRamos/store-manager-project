const express = require('express');
const {
  listProducts,
  getProduct,
  insertProduct,
  editProduct,
} = require('../controllers/product.controller');

const validateNewProductFields = require('../middlewares/validateNewProductsFields');

const router = express.Router();

router.get('/', listProducts);
router.get('/:id', getProduct);
router.post('/', validateNewProductFields, insertProduct);
router.put('/:id', validateNewProductFields, editProduct);

module.exports = router;