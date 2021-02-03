const Category = require('../../modals/category');
const { validationResult } =require('express-validator');

exports.AddCategory = (req,res)=>{
    const error = validationResult(req).array();
    if(error.length > 0 ){
        return res.status(400).json({error : error[0].msg});
    }
    const category = new Category(req.body);
    category.save((err,category)=>{
        if(err){
            return res.status(400).json({error : err});
        }
        return res.status(200).json({success : "category added succesfully"});
    })
}

exports.deleteCategory = (req,res)=>{
    Category.findOneAndRemove(req.body.id).exec((err,category)=>{
        if(err){
            return res.json({error : err});
        }
        return res.json({success : "category deleted successfully"});
    })
}

exports.updateCategory = (req,res)=>{
    Category.updateOne({_id : req.body.id},{name : req.body.name},(err,category)=>{
        if(err){
            return res.status(400).json({error : err});
        }
        return res.status(200).json({success : "category updated succesfully"});
    })
}