const express = require('express');
const mongoose = require('mongoose');
const User = require('../DB/User');
const route = express.Router();

route.post('/',async(req,res)=>{
    const user = new User({
        _id: new mongoose.Types.ObjectId(),
        name:req.body.name,
        age:req.body.age,
        imgURL:req.body.imgURL
    });
    user.save().then(result=>console.log(result))
    .catch(err=>console.log(err));
    res.status(200).json({
        message:'new user'
    });
});
route.get('/',async(req,res)=>{
    User.find()
            .exec()
            .then(userlist =>res.status(200).json(userlist))
            .catch(err=>res.status(500).json({ error:err }));
    })
route.get('/:userId',(req,res,next)=>{
    const id = req.params.userId;
    User.findById(id)
    .exec()
    .then(user=>{
        if(user){
            res.status(200).json(user)
        }
        else{
            res.status(404).json({message:'user not found'});
        }
    })
    .catch(err=>{
        res.status(500).json({ error:err });
    })
})
route.delete('/:userId',(req,res,next)=>{
    const id= req.params.userId;
    User.deleteOne({_id:id})
    .exec().then(result=>{
        res.status(200).json(result);
    })
    .catch(err=>{res.status(500).json({ error:err });
    })
})
route.patch('/:userId',async (req,res)=>{
    try{
        const updateUser = await User.updateOne(
            {_id:req.params.userId},
            {$set:{
                name:req.body.name,
                age:req.body.age,
                imgURL:req.body.imgURL,
            }}
        );
        res.json(updateUser);
    }catch(err){
        res.json({message:err});
    }
});
module.exports = route;