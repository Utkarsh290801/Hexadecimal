// email
// username
// createdBy
const { Schema, model } = require('mongoose');
const mongoose = require('../connection');
const org = new Schema({
    username: String,
    createdBy: Date,
    email: String,
    
});
module.exports= model('organization',org);