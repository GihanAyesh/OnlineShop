const express = require('express');

const router=express.Router();

router.use('/add_product',(req,res,next)=>{
    res.send("<link rel='icon' href='data:,'><form action='/get_product' method='POST'><input type='text' name='title'><button type='submit'>Add</button></form>");
});

router.post('/get_product',(req,res,next)=>{
    console.log(req.body);
    res.redirect("/");
});

module.exports = router;