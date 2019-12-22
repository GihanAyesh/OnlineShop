const express = require('express');
const bodyParser = require ('body-parser');

const app=express();

app.use(bodyParser.urlencoded({extended:false}));

app.use('/add_product',(req,res,next)=>{
    res.send("<link rel='icon' href='data:,'><form action='/get_product' method='POST'><input type='text' name='title'><button type='submit'>Add</button></form>");
});

app.use('/get_product',(req,res,next)=>{
    console.log(req.body);
    res.redirect("/");
});

app.use('/',(req,res,next)=>{
    res.send("<h1>HI</h1>")
});

app.listen(3000);