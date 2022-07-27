const Model = require('../models/organizationModel');
const express = require("express");
const router = express.Router();

router.get('/add',(req,res)=>{
    // console.log(req.body);
    res.send('response from router');
})

module.exports=router;