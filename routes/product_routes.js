const express = require('express');
const router = express.Router();
const {getProducts, getProduct, postProduct, putProduct, deleteProduct} = require('../controllers/product_controller');

router.get('/', getProducts);

router.get('/:id', getProduct);

router.post('/', postProduct);

router.put('/:id', putProduct);

router.delete('/:id', deleteProduct);

module.exports = router;