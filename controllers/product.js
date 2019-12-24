const Product = require('../models/product');

exports.getProductPage = (req,res,next)=>{
    res.render('add_product',{ 
        docTitle:'Add Products',
        path: '/add_product',
        formCSS: true,
        activeAddProduct:true,
        productCSS: true
    });
};

exports.addProducts = (req,res,next)=>{
    const prod = new Product(req.body.title);
    prod.save();
    res.redirect('/');
};

exports.getMainPage = (req,res,next)=>{
    const products = Product.fetchAll();
    res.render('shop',{
        prods: products,
        docTitle:'Shop',
        path: '/',
        hasProducts: products.length >0,
        activeShop:true,
        productCSS: true
    });
};

