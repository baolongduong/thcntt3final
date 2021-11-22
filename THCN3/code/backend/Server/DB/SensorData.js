const mongoose = require('mongoose');

const sensordata = new mongoose.Schema({
    _id: mongoose.Schema.Types.ObjectId,
    iduser:String,
    heartrate:Number,

});


module.exports = Sensordata = mongoose.model('sensordata',sensordata);