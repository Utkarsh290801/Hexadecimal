// title
// email
// schedule
const { Schema, model } = require('mongoose');
const mongoose = require('../connection');
const issue = new Schema({
    title: String,
    schedule: String,
    email: String,
    
})
module.exports= model('issue',issue);