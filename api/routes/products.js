const express = require('express');
const router = express.Router();
const Product = require('../models/product');
const mongoose = require('mongoose')

router.get('/',(req,res,next)=>{
    res.status(200).json({
        message: 'handling GET requests to /products'
    })
})

router.post('/',(req,res,next) => { //creating product
    const product = {
        name: req.body.name,
        price:req.body.price
    }
    const myproduct = new Product({
        _id: new mongoose.Types.ObjectId(),
        name:req.body.name,
        price:req.body.price
    });
    myproduct.save().then(result => {
        console.log('result')
    })
    .catch(err => console.log(err));
    res.status(200).json({
        message: 'handling POST requests to /products',
        createdProduct: myproduct
    })
})

router.get('/:productId',(req,res, next) => {  //Not workinggg
    // getting product with particular id
    const id = req.params.productId;
    if(id === 'special'){       // Without using mongodb atlas database manually trying 
        res.status(200).json({
            message: 'you discoverd special id',
            id:id
        })}
        else {
            res.status(200).json({
                message: 'you entered id',
                id:id
        })
    }

    //With using mongodb atlas database 
    // Product.findById(id)
    //     .exec()
    //     .then(doc => {
    //         console.log("From dtaabase",doc)
    //         if(doc){
    //             res.status(200).json(doc);
    //         }
    //       else{
    //         res.status(200).json({message:'no valid entry found in db'})
    //       }
    //     })
    //     .catch(err => {
    //         console.log(err);
    //         res.status(500).json({error:err})
    //     })
})

router.patch('/:productId',(req,res,next) => {
        res.status(200).json({
            message: 'updated one ',
        })
    })

    router.delete('/:productId',(req,res,next) => {
        res.status(200).json({
            message: 'deleted one ',
        })
    })

module.exports = router;