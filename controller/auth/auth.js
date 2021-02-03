const { validationResult } =require('express-validator');

const User = require('../../modals/user');

exports.AddUser = (req,res)=>{
    const error = validationResult(req).array();
    if(error.length > 0 ){
        return res.status(400).json({error : error[0].msg});
    }
    const user = new User(req.body);
    user.save((err,user)=>{
        if(err){
            return res.status(400).json({error : err});
        }
        return res.status(200).json({success : "user saved sucessfully"});
    })
}

exports.DeleteUser = (req,res)=>{
    User.findById(req.body.id).exec((err,product)=>{
        if(err){
          return res.status(400).json({error : err});
        }
        product.remove((err,product)=>{
          if(err){
            return res.status(400).json({error : err});
          }
          return res.status(200).json({success : "user deleted succesfully"});
        })
      })
}