const express = require('express');
const router = express.Router();

router.get('/',(req,res,next)=>{
    res.status(200).json({
        message: 'handling GET requests to /products'
    })
})

router.post('/',(req,res,next) => {
    const product = {
        name: req.body.name,
        price:req.body.price
    }
    res.status(200).json({
        message: 'handling POST requests to /products',
        createdProduct: product
    })
})

router.get('/:productId',(req,res,next) => {
    const id = req.params.productId;
    if(id === 'special'){
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