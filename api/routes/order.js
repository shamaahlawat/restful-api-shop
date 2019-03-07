const express = require('express');
const router = express.Router();

router.get('/',(req,res,next)=>{
    res.status(200).json({
        message: 'orders were fetched'
    })
})

router.post('/',(req,res,next)=>{
    res.status(200).json({
        message: 'orders created'
    })
})

router.get('/:orderId',(req,res,next) => {
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

router.patch('/:orderId',(req,res,next) => {
        res.status(200).json({
            message: 'order updated',
            id:req.params.orderId
        })
    })

    router.delete('/:orderId',(req,res,next) => {
        res.status(200).json({
            message: 'order deleted',
            id:req.params.orderId
        })
    })

module.exports = router;