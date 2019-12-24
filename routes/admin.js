const express = require('express');
const path = require('path');

const router=express.Router();
const adminController = require ('../controllers/admin');


router.get('/admin/add_product',adminController.getProductPage);

router.post('/admin/add_product',adminController.addProducts);

module.exports = router;