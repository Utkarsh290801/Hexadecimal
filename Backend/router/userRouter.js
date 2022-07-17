const Model = require('../models/userModel');
const express = require("express");
const router = express.Router();

router.get('/add',(req,res)=>{
    // console.log(req.body);
    res.send('response from user router');
})

module.exports=router;