const User = require('../../modals/user');
exports.GetAllusers = (req,res)=>{
    User.find((err,users)=>{
        if(err){
            return res.status(400).json({error : err});
        }
        return res.status(200).json(users);
    })
}

exports.GetAllNonUsers = (req,res)=>{
    User.find({user_type : "NON"},(err,users)=>{
        if(err){
            return res.status(400).json({error : err});
        }
        return res.status(200).json(users);
    })
}

exports.GetAllRegUsers = (req,res)=>{
    User.find({user_type : "REGULAR"},(err,users)=>{
        if(err){
            return res.status(400).json({error : err});
        }
        return res.status(200).json(users);
    })
}