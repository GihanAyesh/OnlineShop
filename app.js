const express = require('express');
const bodyParser = require ('body-parser');
const path = require ('path');

const app=express();
const rootDir=require("./util/path");

const adminRouter = require('./routes/admin');
const shopRouter = require('./routes/shop');

app.set('view engine','ejs');
app.set('views','views');

app.use(bodyParser.urlencoded({extended:true}));
app.use(express.static(path.join(rootDir,"public")));
app.use(adminRouter.routes);
app.use(shopRouter);

app.use((req,res,next) =>{
    res.status(404).render('404',{docTitle: 'Page Not Found', path: ''});
});

app.listen(3000);