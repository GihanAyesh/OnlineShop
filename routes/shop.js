const express = require('express');
const path = require('path');

const router=express.Router();
const productController = require ('../controllers/product');


router.get('/',productController.getMainPage);

router.get('/shop/product_list',productController.getShopPage);

module.exports = router;