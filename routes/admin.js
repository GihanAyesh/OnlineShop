const express = require('express');
const path = require('path');

const router=express.Router();
const rootDir=require("../util/path.js");

const products = [];

router.get('/add_product',(req,res,next)=>{
    res.render('add_product',{
        docTitle:'Add Products',
        path: '/add_product',
        hasProducts: products.length >0,
        activeShop:true,
        productCSS: true
    });
});

router.post('/add_product',(req,res,next)=>{
    console.log (req.body);
    products.push({title:req.body.title});
    res.redirect('/');
});

exports.routes = router;
exports.products = products;