const express = require('express');
const path = require('path');

const router=express.Router();
const rootDir=require("../util/path.js");
const adminRouter=require("./admin");

router.get('/',(req,res,next)=>{
    const products = adminRouter.products;
    res.render('shop',{
        prods: products,
        docTitle:'Shop',
        path: '/',
        hasProducts: products.length >0,
        activeShop:true,
        productCSS: true
    });
});

module.exports = router;