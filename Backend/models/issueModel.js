// title
// email
// schedule
const { Schema, model } = require('mongoose');
const mongoose = require('../connection');
const issue = new Schema({
    title: String,
    description: String,
    assignedBy: String,
    assignedTo:String,
    creadtedBy:String,
    status:String,
    
})
module.exports= model('issue',issue);