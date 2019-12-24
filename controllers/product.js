const Product = require('../models/product');

exports.getMainPage = (req,res,next)=>{
    res.render('shop/index',{
        docTitle:'Main',
        path: '/',
        activeShop:true,
        productCSS: true
    });
};

exports.getShopPage = (req,res,next)=>{
    const products = Product.fetchAll();
    res.render('shop/product_list',{
        prods: products,
        docTitle:'Shop',
        path: '/shop/product_list',
        hasProducts: products.length >0,
        activeShop:true,
        productCSS: true
    });
};

