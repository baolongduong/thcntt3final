const express = require('express');
const mongoose = require('mongoose');
const Sensordata = require('../DB/SensorData');
const User = require('../DB/User');
const route = express.Router();

route.post('/',async(req,res,next)=>{
    const data = new Sensordata({
        _id: new mongoose.Types.ObjectId(),
        iduser:req.body.iduser,
        heartrate:req.body.heartrate
    });
    data.save().then(result=>console.log(result))
    .catch(err=>console.log(err));
    res.status(200).json({
        message:'new data'
    });
});
route.get('/',async(req,res)=>{
Sensordata.find()
        .exec()
        .then(datalist =>res.status(200).json(datalist))
        .catch(err=>res.status(500).json({ error:err }));
})
route.get('/:dataId',(req,res,next)=>{
    const id = req.params.dataId;
    Sensordata.findById(id)
    .exec()
    .then(data=>{
        if(data){
            res.status(200).json(data)
        }
        else{
            res.status(404).json({message:'data not found'});
        }
    })
    .catch(err=>{
        res.status(500).json({ error:err });
    })
})

route.delete('/:dataId',(req,res,next)=>{
const id= req.params.dataId;
Sensordata.remove({_id:id})
.exec().then(result=>{
    res.status(200).json(result);
})
.catch(err=>{res.status(500).json({ error:err });
})
})
route.patch('/:dataId',async (req,res)=>{
    try{
        const updateData = await Sensordata.updateOne(
            {_id:req.params.dataId},
            {$set:{
                iduser:req.body.iduser,
                heartrate:req.body.heartrate,  
            }}
        );
        res.json(updateData );
    }catch(err){
        res.json({message:err});
    }
});
module.exports = route;