const express = require('express');
const d = require('./model/details');
const router = express.Router();

router.get('/details',(req,res,next)=>{

    d.find({}).then(details=>res.send(details)).catch((error)=>console.log(error))
   
})

router.post('/add',(req,res)=>{
    (new d({'date':req.body.date,'desc':req.body.desc,'amount':req.body.amount})).save().catch((error)=>console.log(error))

    })

module.exports=router