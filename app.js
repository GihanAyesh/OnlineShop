const express = require('express');
const bodyParser = require ('body-parser');
const path = require ('path');

const app=express();
const rootDir=require("./util/path");

const adminRouter = require('./routes/admin');
const shopRouter = require('./routes/shop');


app.use(bodyParser.urlencoded({extended:false}));
app.use(express.static(path.join(rootDir,"public")));
app.use(adminRouter);
app.use(shopRouter);

app.use((req,res,next) =>{
    res.status(404).sendFile(path.join(rootDir,"views","404.html"));
});

app.listen(3000);