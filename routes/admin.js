const express = require('express');
const path = require('path');

const router=express.Router();
const rootDir=require("../util/path.js");

router.use('/add_product',(req,res,next)=>{
    res.sendFile(path.join(rootDir,"views","add_product.html"));
});

router.post('/get_product',(req,res,next)=>{
    console.log(req.body);
    res.redirect('/');
});

module.exports = router;