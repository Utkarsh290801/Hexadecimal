const { Schema, model } = require('mongoose');
const mongoose = require('../connection');
const myschema = new Schema({
    username: String,
    password: String,
    email: String,
    avatar:String,
    
})
module.exports= model('userdetails',myschema);