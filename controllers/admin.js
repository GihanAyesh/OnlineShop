const Product = require('../models/product');

exports.getProductPage = (req,res,next)=>{
    res.render('admin/add_product',{ 
        docTitle:'Add Products',
        path: '/admin/add_product',
        formCSS: true,
        activeAddProduct:true,
        productCSS: true
    });
};

exports.addProducts = (req,res,next)=>{
    const prod = new Product(req.body.title);
    prod.save();
    res.redirect('/shop/product_list');
};