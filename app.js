const express = require('express');

const app = express();

const productRoutes = require('./api/routes/products');
const orderRoutes = require('./api/routes/order');

app.use('/products', productRoutes); // always connect your route here
app.use('/order', orderRoutes); 

// app.use((req,res,next)=>{
//    res.status(200).json({
//        message: 'It worksssssssss'
//    });
// });  //middleware

module.exports = app;