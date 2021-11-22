const express = require('express');
const mongoose = require('mongoose');
const Mixdata = require('../DB/MixData');
const route = express.Router();

route.post('/addData',async(req,res,next)=>{
    const data = new Mixdata({
        _id: new mongoose.Types.ObjectId(),
        username:req.body.username,
        age: req.body.age,
        heartrate:req.body.heartrate
    });
    data.save().then(result=>console.log(result))
    .catch(err=>console.log(err));
    res.status(200).json({
        message:'new data'
    });
});


route.get('/',async(req,res)=>{
    Mixdata.find()
        .exec()
        .then(datalist =>res.status(200).json(datalist))
        .catch(err=>res.status(500).json({ error:err }));
})


route.get('/:dataId',(req,res,next)=>{
    const id = req.params.dataId;
    Mixdata.findById(id)
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
Mixdata.remove({_id:id})
.exec().then(result=>{
    res.status(200).json(result);
})
.catch(err=>{res.status(500).json({ error:err });
})
})
route.patch('/:dataId',async (req,res)=>{
    try{
        const updateData = await Mixdata.updateOne(
            {_id:req.params.dataId},
            {$set:{
                username:req.body.username,
                age: req.body.age,
                heartrate:req.body.heartrate,
            }}
        );
        res.json(updateData );
    }catch(err){
        res.json({message:err});
    }
});
module.exports = route;