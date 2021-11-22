const mongoose = require('mongoose');

const user = new mongoose.Schema({
    _id: mongoose.Schema.Types.ObjectId,
    name: String,
    age: Number,
    imgURL: String
    
});


module.exports = User = mongoose.model('user',user);
