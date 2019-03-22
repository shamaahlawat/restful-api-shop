const express = require('express');
const bodyParser = require('body-parser');

const app = express();
const morgan = require('morgan'); //to see console logs
const mongoose = require('mongoose')

const productRoutes = require('./api/routes/products');
const orderRoutes = require('./api/routes/order');

// mongoose.connect('mongodb+srv://shama:' + process.env.MONGO_ATLAS_PW + '@node-shop-h5rho.mongodb.net/test?retryWrites=true',{
//     useMongoClient : true
// });

app.use(morgan('dev')); //use it before routes
app.use(bodyParser.urlencoded({extended:false}))
app.use(bodyParser.json())

app.use((req,res,next)=>{
   res.header('Access-Control-Allow-Headers',"*");
   res.header('Access-Control-Allow-Headers',"Origin,X-Requested-With,Content-Type,Accept,Authorization")
   if(req.method ==='OPTIONS'){
       res.header('Access-Control-Allow-Methods','PUT','POST','PATCH','DELETE','GET')
       return res.status(200).json({});
   }
})

//routes which should handle requests
app.use('/products', productRoutes); // always connect your route here
app.use('/order', orderRoutes); 


//error handling 
app.use((req,res,next) => {
    const error = new Error('not found');
    error.status = 404;
    next(error);
})

app.use((error,req,res,next) => {
 res.status(error.status || 500)
 res.json({
     error:{
         message:error.message
     }
 })
})

// app.use((req,res,next)=>{
//    res.status(200).json({
//        message: 'It worksssssssss'
//    });
// });  //middleware

module.exports = app;