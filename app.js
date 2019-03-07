const express = require('express');

const app = express();
const morgan = require('morgan'); //to see console logs

const productRoutes = require('./api/routes/products');
const orderRoutes = require('./api/routes/order');

app.use(morgan('dev')); //use it before routes

//routes which should handle requests
app.use('/products', productRoutes); // always connect your route here
app.use('/order', orderRoutes); 


//error handling 
app.use((req,res,next) => {
    const error = new Error('not found');
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