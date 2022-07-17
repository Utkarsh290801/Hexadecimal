const mongoose = require('mongoose');
const url = "mongodb+srv://utarora:mansha@cluster0.wmuj9.mongodb.net/newsletterplugin?retryWrites=true&w=majority"
mongoose.connect(url)
.then(() => {
    console.log('Database Connected')
}).catch((err) => {
    console.log(err);
});
module.exports = mongoose;