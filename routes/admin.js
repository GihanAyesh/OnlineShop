const express = require('express');
const path = require('path');

const router=express.Router();
const productController = require ('../controllers/product');


router.get('/add_product',productController.getProductPage);

router.post('/add_product',productController.addProducts);

module.exports = router;